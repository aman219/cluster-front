import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/signup.css'

const Signup = () => {
  const navigate = useNavigate();

  const uploadSignup = (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${process.env.REACT_APP_SERVER}/api/v1/users/register`, true)
    
    xhr.onload = () => {
      if (xhr.status === 201) {
        const data = xhr.response;
        console.log(data)
        navigate('/login')
      } else {
        console.log(xhr.status)
      }
    }
    
    const formData = new FormData(event.target)
    xhr.send(formData)
  }

  return (
    <div className='container' >
      <div className='signup-box'>
        <form action='' method='post' encType='multipart/form-data' onSubmit={uploadSignup} > 
            <label htmlFor='firstName'>First Name </label>
            <input type='text' id='firstName' name='firstName' ></input>
            <label htmlFor='lastName'>Last Name </label>
            <input type='text' id='lastName' name='lastName' ></input> <br />
            <label htmlFor='email'>Email </label>
            <input type='email' id='email' name='email' ></input> <br />
            <label htmlFor='username'>Username </label>
            <input type='text' id='username' name='username' ></input> <br />
            <label htmlFor='password'>Password </label>
            <input type='password' id='password' name='password' ></input> <br />
            <label htmlFor='profile-img' id='profile-field' >Browse... <span>No file selected </span></label>
            <input type='file' id='profile-img' name='profile-img' accept='image/*' ></input> <br />
            <label htmlFor='sizeAllocated'>Select sizeAllocated </label>
            <select id='sizeAllocated' name='sizeAllocated' >
                <option value='10' >10 GB</option>
                <option value='20' >20 GB</option>
                <option value='30' >30 GB</option>
                <option value='40' >40 GB</option>
            </select> <br />
            <input type='submit' value='Signup' ></input>
        </form>
      </div>
    </div>
  )
}

export default Signup
