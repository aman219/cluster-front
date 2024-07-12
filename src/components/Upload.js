import React, { useEffect, useRef, useState } from 'react'
import '../css/upload.css'

const xhr = new XMLHttpRequest()
let url

const Upload = () => {

  const dataform = useRef()

  const [offset, setOffset] = useState(503)
  const [pronum, setPronum] = useState(0)
  const [pro, setPro] = useState("none")
  const [from, setFrom] = useState("grid")
  const [status, setStatus] = useState({ "text": null, "color": null, "visiablity": "hidden" })
  const [lebelText, setLabel] = useState("Choose Your File")
  const [type, setType] = useState("none")
  const [size, setSize] = useState("0")

  useEffect(() => {
    pro === "none" ? setFrom("grid") : setFrom("none")
  }, [pro])
  const upload = (event) => {
    event.preventDefault()
    setPro("grid")
    const formData = new FormData(event.target)
    console.log(url)
    xhr.open('POST', `${process.env.REACT_APP_SERVER}/${url}`, true);
    xhr.send(formData);
    
  }
  xhr.onload = () => {
      if (xhr.status === 200) {
        setStatus({ "text": "Success", "color": "green", "visiability": "visible" })
        console.log(xhr.response)
      }
      else{
        setStatus({"text":`Error Code: ${xhr.status}`, "color":"yellow", "visiability":"visible"})
      }
    }
  xhr.upload.onprogress = (event) => {
    let now = (event.loaded / event.total) * 100
    setOffset(503 - (503 * now) / 100)
    setPronum(parseInt(now))
  }

  xhr.onerror = (event) => {
    setStatus({ "text": "error", "color": "yellow", "visiability": "visible" })
    console.log(event)
  }
  xhr.onabort = () => {
    setStatus({ "text": "Aborted", "color": "red", "visiability": "visible" })
    console.log("aborted")
  }
  const abort = () => {
    xhr.abort()
  }
  const ClosePro = () => {
    setStatus({ "text": null, "color": null, "visiablity": "hidden" })
    setPro("none")
    dataform.current.reset()
    setSize("0")
    setType("none")
    setLabel("Choose Your File")
  }
  const handelFile = (event) => {
    let file = event.target.files[0]
    setLabel(file.name)
    setType(file.type)
    url = file.type.slice(0, 6)
    setSize(`${(file.size / 1000000).toFixed(2)} MB`)
  }

  return (
    <div className='container' >
      <div className="upload-container" style={{ display: from }} >
        <div className="upload-caption">
          <h4>Upload Your File</h4> 
        </div>
        <form method="post" encType="multipart/form-data" onSubmit={upload} ref={dataform} >
          <div className="upload-label">
            <label htmlFor="file"><h4>{lebelText}</h4></label>
            <div className="meta-info">
              <h6>Size: {size}</h6>
              <h6>Type: {type}</h6>
            </div>
            <input type="file" name="file" id="file" accept='image/*, video/*, audio/*' onChange={handelFile} required />
          </div>
          <div className="upload-btn">
            <input type="submit" value="Upload" />
          </div>
        </form>
      </div>
      <div className="upload-pro" style={{ display: pro }} >
        <div className="file-name">
          <h5>{lebelText}</h5>
        </div>
        <div className="upload-status" style={{ color: status.color, borderColor: status.color, visibility: status.visiablity }} >
          <h4>{status.text}</h4>
        </div>
        <div className="svg-pro">
          <svg>
            <circle cx="50%" cy="50%" r="80" style={{ strokeDashoffset: offset }} />
          </svg>
          <div className="num-per">
            <h4>{`${pronum}%`}</h4>
          </div>
        </div>
        <div className="cancel-btn" onClick={abort} >
          <button>Abort</button>
        </div>
        <div className="pro-close" onClick={ClosePro} >
          <i className='fa-solid fa-xmark' ></i>
        </div>
      </div>
    </div>
  )
}

export default Upload
