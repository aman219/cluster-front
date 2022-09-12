import React from 'react'
import '../css/sidebar.css'
import { Link } from 'react-router-dom'
// import dashboard from '../media/image/columns-gap.svg'
const Sidebar = (props) => {
  
  const changeEffect=()=>{
    props.setLeft(200)
    props.setBar("fa-bars")
  }

  return (
    <div className='sidebar' style={{left:`-${props.left}px`}}>
      <ul onClick={changeEffect}>
        <li><Link to="dashboard/"><i className="fa-solid fa-bars-progress"></i> <span>Dashboard</span></Link></li>
        <li><Link to="audio/"><i className="fa-solid fa-headphones"></i><span>Audio</span></Link></li>
        <li><Link to="video/"><i className="fa-solid fa-video"></i><span>Video</span></Link></li>
        <li><Link to="image/"><i className="fa-regular fa-images"></i><span>Image</span></Link></li>
        <li><Link to="upload/"><i className="fa-solid fa-cloud-arrow-up"></i><span>Upload</span></Link></li>
        <li><Link to="settings/"><i className="fa-solid fa-gear"></i><span>Settings</span></Link></li>
        <li><Link to="logout/"><i className="fa-solid fa-arrow-right-from-bracket"></i><span>Logout</span></Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
