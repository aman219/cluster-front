import React, { useEffect, useState } from 'react'
import '../css/dashboard.css'

const Dashboard = () => {

  const [beam, setBeam] = useState([])
  useEffect(()=>{
    setBeam([0,25,35,84,65,48,87])
  },[])
  return (
    <div className='container' >
      <div className="storage-bar-container">
        <div className="storage-icon">
        <i className="fa-solid fa-hard-drive"></i>
        </div>
        <div className="storage-text">
          <h5>33GB Free Of 300GB</h5>
        </div>
        <div className="storage-progress">
          <div className="storage-progress-fill"></div>
        </div>
      </div>
      <div className="visited-graph-container">
        {
          beam.map((item, index)=>{
            return <div className="vertical-bar" style={{height:`${item}%`}} key={index} ></div>
          })
        }
        <ul>
          <li>100</li>
          <li>90</li>
          <li>80</li>
          <li>70</li>
          <li>60</li>
          <li>50</li>
          <li>40</li>
          <li>30</li>
          <li>20</li>
          <li>10</li>
        </ul>
      </div>
      <div className="bar-graph-bottom">
        <h3>No of times visited</h3>
      </div>
    </div>
  )
}

export default Dashboard
