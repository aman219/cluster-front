import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/video.css'

const Video = () => {

  const [video, setVideo] = useState([])

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `${process.env.REACT_APP_SERVER}/video/`, true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        setVideo(JSON.parse(xhr.response))
      } else {
        console.log("error code : ", xhr.status)
      }
    }
    xhr.send(null);
  }, [])

  return (
    <div className='container-list' >
      {
        video.map((item) => {
          return <Link to={`${item.id}/`} key={item.id} >
            <div className="video-container">
              <div className="video-poster">
                <img src={`${process.env.REACT_APP_SERVER}/${item.src}`} alt="poster" />
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
