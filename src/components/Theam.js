import React from 'react'
import '../css/theam.css'

const Theam = () => {
  return (
    <div className='container' >
      <div className="theam-container">
        <ul>
            <li>
                <p>Light</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
            <li>
                <p>Dark</p> <div className="select-circle"><div className="circle-bool"></div></div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Theam
