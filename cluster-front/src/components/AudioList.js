import React from 'react'
import '../css/audiolist.css'
import photo from '../media/image/music.jpg'
import { Link } from 'react-router-dom'

const AudioList = () => {
  return (
    <div className='container' >
      <Link to="/dashboard/" >
        <div className="audio-list-item">
          <div className="audio-list-poster">
            <img src={photo} alt="music-poster" />
          </div>
          <div className="audio-list-title">
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AudioList
