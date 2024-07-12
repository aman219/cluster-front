import React, { useEffect, useState } from 'react'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

  const navigate = useNavigate();

  const [beam, setBeam] = useState([10, 15, 25, 30, 25, 60, 20])
  const [storage, setStorage] = useState({"free":"0 GB", "total":"0 GB", "width":"1"})

  useEffect(()=>{
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `${process.env.REACT_APP_SERVER}/api/v1/users/get/`)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          let data = JSON.parse(xhr.response)
          data = data.data
          console.log(data)
          const KBTOGB = 1024*1024;
          setStorage({"free": (data.sizeAllocated-data.sizeUsed)/(KBTOGB).toFixed(2), 
          "total": (data.sizeAllocated)/(KBTOGB).toFixed(2),
          "width": (data.sizeUsed/data.sizeAllocated)*100
        })
          setBeam([10, 15, 25, 30, 25, 60, 20])
        } else {
          console.log("error")
          navigate("/login")
        }
      }
    }
    xhr.withCredentials = true
    xhr.send()
  },[navigate])
  return (
    <div className='container' >
      <div className="storage-bar-container">
        <div className="storage-icon">
        <i className="fa-solid fa-hard-drive"></i>
        </div>
        <div className="storage-text">
          <h5>{storage.free} GB Free Of {storage.total} GB </h5>
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
