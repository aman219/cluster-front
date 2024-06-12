import React, { useEffect, useState } from 'react'
import '../css/audiolist.css'
import photo from '../media/image/music.jpg'
import { Link } from 'react-router-dom'

const AudioList = () => {

  const [song, setSong] = useState([])

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `${process.env.REACT_APP_SERVER}/audio/`, true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        setSong(JSON.parse(xhr.response))
      }
      else {
        console.log("error code : ", xhr.status)
      }
    }
    xhr.send();

  }, [])

  const deleteAudio = (id) => {
    console.log(`delete audio ${id}`)
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `${process.env.REACT_APP_SERVER}/audio/delete/${id}/`, true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response)
      }
      else {
        console.log("error code : ", xhr.status)
      }
    }
    xhr.send();
  }

  return (
    <div className='container' >
      {
        song.map((item) => {
          return <div className="audio-list-bar" key={item.id}>
            <Link to={`${item.id}/`}>
              <div className="audio-list-item">
                <div className="audio-list-poster">
                  <img src={photo} alt="music-poster" />
                </div>
                <div className="audio-list-title">
                  <h4>{item.name}</h4>
                </div>
              </div>
            </Link>
            <div className="delete-btn" onClick={()=>{deleteAudio(item.id)}} >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default AudioList
