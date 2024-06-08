import React, { useEffect, useState } from 'react'
import '../css/dashboard.css'

const xhr = new XMLHttpRequest()

const Dashboard = () => {

  const [beam, setBeam] = useState([])
  const [storage, setStorage] = useState({"free":"0 GB", "total":"0 GB", "width":"0"})
  useEffect(()=>{
    console.log(process.env.REACT_APP_SERVER)
    setBeam([0,25,35,84,65,48,87])
    xhr.open("GET", `${process.env.REACT_APP_SERVER}/dashboard/`)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          let data = JSON.parse(xhr.response)
          setStorage({"free": (data.free/1000000000).toFixed(2), 
          "total": (data.total/1000000000).toFixed(2),
          "width": (data.used/data.total)*100
        })
        } else {
          console.log("error")
        }
      }
    }

    xhr.send()
  },[])
  return (
    <div className='container' >
      <div className="storage-bar-container">
        <div className="storage-icon">
        <i className="fa-solid fa-hard-drive"></i>
        </div>
        <div className="storage-text">
          <h5>{storage.free} Free Of {storage.total}</h5>
        </div>
        <div className="storage-progress">
          <div className="storage-progress-fill" style={{width: `${storage.width}%`}} ></div>
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
