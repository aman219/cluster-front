import React, { useEffect, useState } from 'react'
import '../css/audiolist.css'
import photo from '../media/image/music.jpg'
import { Link } from 'react-router-dom'

const AudioList = () => {

  const [song, setSong] = useState([])

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "", true)
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

  return (
    <div className='container' >
      {
        song.map((item) => {
          return <Link to={`${item.id}/`} key={item.id} >
            <div className="audio-list-item">
              <div className="audio-list-poster">
                <img src={photo} alt="music-poster" />
              </div>
              <div className="audio-list-title">
                <h4>{item.name}</h4>
              </div>
            </div>
          </Link>
        })
      }
    </div>
  )
}

export default AudioList
