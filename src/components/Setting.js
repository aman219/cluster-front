import React from 'react'
import { Link } from 'react-router-dom'
import '../css/setting.css'


const Setting = () => {
  return (
    <div className='container' >
      <div className="setting-container">
        <ul>
        <li><Link className='setting-list' to="theam/">Font</Link></li>
          <li><Link className='setting-list' to="theam/">Theam</Link></li>
          <li><Link className='setting-list' to="quality/">Video Quality</Link></li>
          <li><Link className='setting-list' to="delete/">Delete Account</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Setting
