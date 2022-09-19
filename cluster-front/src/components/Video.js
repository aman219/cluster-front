import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/video.css'

const Video = () => {

  const [video, setVideo] = useState([])

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "", true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.response))
        setVideo(JSON.parse(xhr.response))
      } else {
        console.log("error code : ", xhr.status)
      }
    }
    xhr.send(null);
  }, [])

  return (
    <div className='container' >
      {
        video.map((item) => {
          return <Link to={`${item.id}/`} key={item.id} >
            <div className="video-container">
              <div className="video-poster">
                <img src={`/${item.src}`} alt="poster" />
              </div>
              <div className="video-title">
                <h5>{item.name}</h5>
              </div>
              <div className="video-size">
                <h6>{item.size<=1000?`${item.size} MB`: `${item.size/1000} GB`}</h6>
              </div>
            </div>
          </Link>
        })
      }

    </div>
  )
}

export default Video
