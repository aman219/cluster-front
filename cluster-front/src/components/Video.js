import React from 'react'
import { Link } from 'react-router-dom'
import '../css/video.css'
import photo from '../media/image/music.jpg'

const Video = () => {
  return (
    <div className='container' >
      <Link to="/dashboard/">
        <div className="video-container">
          <div className="video-poster">
            <img src={photo} alt="video-poster" />
          </div>
          <div className="video-title">
            <h5>Lorem ipsum dolor sit amet. for other content</h5>
          </div>
          <div className="video-size">
            <h6>340 MB</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Video
