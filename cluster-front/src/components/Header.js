import React, { useEffect } from 'react'
import '../css/header.css'

const Header = (props) => {
  const {setLeft, bar, setBar} = props
  
  const changeBar=()=>{
    bar === "fa-bars"?setBar("fa-xmark"):setBar("fa-bars")
  }
  useEffect(()=>{
    bar === "fa-bars"?setLeft(200):setLeft(0)
  },[bar, setLeft])

  return (
    <div className='header' >
      <div className="header-menu" onClick={changeBar} >
        <i className={`fa-solid ${bar}`}></i>
      </div>
      <div className="header-title">
        <h4>CLUSTER</h4>
      </div>
      <div className="header-profile">
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  )
}

export default Header
