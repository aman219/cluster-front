import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import music from '../media/image/music.jpg'
import '../css/audioplay.css'

let totalTime

const AudioPlay = () => {
    const { id } = useParams()

    const elementRef = useRef()
    const prog = useRef()
    const audio = elementRef.current
    const [song, setSong] = useState({ "src": null, "name": null, "id": id, "artist": "arijit singh" })
    const [playBtn, setPlayBtn] = useState(false)
    const [duration, setDuration] = useState("00:00")
    const [current, setcurrent] = useState("00:00")
    const [width, setWidth] = useState("0")
    const [rotate, setRotate] = useState("")

    useEffect(() => {
        fetchSong(song.id)
    }, [song.id])
    const fetchSong =(id)=>{
        elementRef.current.pause()
        const url = `/audio/${id}/`
        console.log(url)
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url, true)
        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = (JSON.parse(xhr.response))
                setSong({ "src": data.src, "name": data.name, "id": data.id, "artist": "Arijit Singh" })
            } else {
                console.log("error code : ", xhr.status)
            }
        }
        xhr.send()
    }

    const start = () => {
        elementRef.current.play()
    }
    const stop = () => {
        elementRef.current.pause()
    }

    const changePlayBtn = () => {
        playBtn ? stop() : start()
    }
    const played = () => {
        setPlayBtn(true)
        setRotate("rotate")
    }
    const paused = () => {
        setPlayBtn(false)
        setRotate("")
    }
    const timeUpdate = () => {
        let currentTime = parseInt(audio.currentTime)
        let sec = currentTime % 60
        let min = (currentTime - sec) / 60
        min <= 9 ? min = `0${min}` : min += 0
        sec <= 9 ? sec = `0${sec}` : sec += 0
        setcurrent(`${min}:${sec}`)
        setWidth((currentTime / totalTime) * 100)
    }
    const ended = () => {
        console.log("ended")
        setSong({"id": song.id+1})
    }
    const updateDuration = () => {
        let audio = document.querySelector("audio")
        totalTime = parseInt(audio.duration)
        let sec = totalTime % 60
        let min = (totalTime - sec) / 60
        min <= 9 ? min = `0${min}` : min += 0
        sec <= 9 ? sec = `0${sec}` : sec += 0
        setDuration(`${min}:${sec}`)
    }
    const skip = (event) => {
        let skip = ((event.nativeEvent.offsetX / prog.current.clientWidth) * 100);
        audio.currentTime = (audio.duration / 100) * skip;
    };

    return (
        <div className='container' >
            <div className='audio-media-player' id={song.id} >
                <div className="player-title">
                    <h4>{song.name}</h4>
                </div>
                <div className="player-artist">
                    <h5>{song.artist}</h5>
                </div>
                <div className="circle-poster">
                    <img className={rotate} src={music} alt="poster" />
                </div>
                <div className="duration">
                    <div className="current-time"><h6>{current}</h6></div>
                    <div className="duration-time"><h6>{duration}</h6></div>
                </div>
                <div className="audio-progress-base" ref={prog} onClick={skip} >
                    <div className="audio-progress-line">
                        <div className="audio-progress-status" style={{ width: `${width}%` }}>
                        </div>
                    </div>
                </div>
                <div className="audio-control-btn">
                    <div className="previous" onClick={()=>setSong({"id": song.id-1})} >
                        <i className="fa-solid fa-backward-step"></i>
                    </div>
                    <div className="play-pause" onClick={changePlayBtn} >
                        <i className={playBtn ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
                    </div>
                    <div className="next" onClick={()=>setSong({"id": song.id+1})} >
                        <i className="fa-solid fa-forward-step"></i>
                    </div>
                </div>
                <div className="audio-source">
                    <audio autoPlay={true} ref={elementRef} src={song.src} onPlay={played} onPause={paused} onTimeUpdate={timeUpdate} onLoadedMetadata={updateDuration} onLoadedData={()=>{elementRef.current.play()}} onEnded={ended} onError={()=>{setSong({"id": song.id+1})}} ></audio>
                </div>
            </div>
        </div>
    )
}

export default AudioPlay
