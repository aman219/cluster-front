import React from 'react'
import '../css/theam.css'

const Quality = () => {
  return (
    <div className='container' >
      <div className="theam-container">
        <ul>
            <li>
                <p>Auto</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
            <li>
                <p>144p</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
            <li>
                <p>240p</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
            <li>
                <p>360p</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
            <li>
                <p>480p</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
            <li>
                <p>720p</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
            <li>
                <p>1080p</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Quality
