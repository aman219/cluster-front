import React from 'react'
import '../css/videoplayer.css'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'

let totalTime

const VideoPlay = () => {

  const {id} = useParams()

  const [item, setItem] = useState({"src":null, "name":null, "id": null})

  useEffect(()=>{
      const xhr = new XMLHttpRequest()
      xhr.open("GET", `${process.env.REACT_APP_SERVER}/video/${id}/`, true)
      xhr.onload=()=>{
          if(xhr.status===200){
              console.log(JSON.parse(xhr.response))
              setItem(JSON.parse(xhr.response))
          }else{
              console.log("error code : ", xhr.status)
          }
      }
      xhr.send(null)
  },[id])
  const elementRef = useRef()
  const container = useRef()
  const video = elementRef.current
  const prog = useRef()
  const [playBtn, setPlayBtn] = useState(false)
  const [duration, setDuration] = useState("00:00")
  const [current, setcurrent] = useState("00:00")
  const [width, setWidth] = useState("0")
  const [cont, setCont] = useState("")

  const start = () => {
    video.play()
  }
  const stop = () => {
    video.pause()
  }

  const changePlayBtn = () => {
    playBtn ? stop() : start()
  }
  const played = () => {
    setPlayBtn(true)
  }
  const paused = () => {
    setPlayBtn(false)
  }
  const timeUpdate = () => {
    let currentTime = parseInt(video.currentTime)
    let sec = currentTime % 60
    let min = (currentTime - sec) / 60
    min <= 9 ? min = `0${min}` : min += 0
    sec <= 9 ? sec = `0${sec}` : sec += 0
    setcurrent(`${min}:${sec}`)
    setWidth((currentTime / totalTime) * 100)
  }
  // const ended = () => {
  //   console.log("ended")
  //   setSong({ "id": song.id + 1 })
  // }
  const updateDuration = () => {
    let video = document.querySelector("video")
    totalTime = parseInt(video.duration)
    let sec = totalTime % 60
    let min = (totalTime - sec) / 60
    min <= 9 ? min = `0${min}` : min += 0
    sec <= 9 ? sec = `0${sec}` : sec += 0
    setDuration(`${min}:${sec}`)
  }
  const skip = (event) => {
    let skip = ((event.nativeEvent.offsetX / prog.current.clientWidth) * 100);
    video.currentTime = (video.duration / 100) * skip;
  };
  const showControls =()=>{
    setCont("show-controls")
    setTimeout(() => {
      setCont("")
      console.log("time")
    }, 5000);
  }
  const fullScreen=()=>{
    if(document.fullscreenElement){
      document.exitFullscreen()
    }else{
      container.current.requestFullscreen()
    }
  }

  const deleteVideo = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `${process.env.REACT_APP_SERVER}/video/delete/${id}/`, true)
    xhr.onload=()=>{
        if(xhr.status===200){
            console.log(xhr.response)
        }else{
            console.log("error code : ", xhr.status)
        }
    }
    xhr.send(null)
  }

  return (
    <div className='container' >
      <div className="video-pl-cont" ref={container}>
        <div className="video-main">
          <video ref={elementRef} src={`${process.env.REACT_APP_SERVER}${item.src}`} onPlay={played} onPause={paused} onTimeUpdate={timeUpdate} onLoadedMetadata={updateDuration} onClick={showControls} onTouchStart={showControls} ></video>
          <div className={`vid-controls ${cont}`}>
            <div className="duration">
              <div className="current-time"><h6>{current}</h6></div>
              <div className="duration-time"><h6>{duration}</h6></div>
            </div>
            <div className="timeline-box" ref={prog} onClick={skip} >
              <div className="time-pro-cont">
                <div className="reached" style={{ width: `${width}%` }} ></div>
              </div>
            </div>
            <div className="vid-buttons">
              <div className="previous">
                <i className="fa-solid fa-backward-step"></i>
              </div>
              <div className="play-pause" onClick={changePlayBtn} >
                <i className={playBtn ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
              </div>
              <div className="next">
                <i className="fa-solid fa-forward-step"></i>
              </div>
              <div className="vid-full-screen" onClick={fullScreen} >
                <i className="fa-solid fa-expand"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vid-detail">
        <h4>{item.name}</h4>
      </div>
      <div className="delete-video" onClick={deleteVideo}>
        <h5>Delete</h5>
      </div>
    </div>
  )
}

export default VideoPlay
