import React from 'react'
import '../css/signup.css'

const Signup = () => {
  return (
    <div className='container' >
      <div className='signup-box'>
        <form action='' method='post' encType='multipart/form-data' > 
            <label htmlFor='firstName'>First Name </label>
            <input type='text' id='firstName' name='firstName' ></input>
            <label htmlFor='lastName'>Last Name </label>
            <input type='text' id='lastName' name='lastName' ></input> <br />
            <label htmlFor='email'>Email </label>
            <input type='email' id='email' name='email' ></input> <br />
            <label htmlFor='username'>Username </label>
            <input type='text' id='username' name='username' ></input> <br />
            <label htmlFor='passwd'>Password </label>
            <input type='password' id='passwd' name='passwd' ></input> <br />
            <label htmlFor='profile-img' id='profile-field' >Browse... <span>No file selected </span></label>
            <input type='file' id='profile-img' name='profile-img' accept='image/*' ></input> <br />
            <label htmlFor='plan'>Select Plan </label>
            <select id='plan' name='plan' >
                <option value='10' >10 GB</option>
                <option value='20' >20 GB</option>
                <option value='30' >30 GB</option>
                <option value='40' >40 GB</option>
            </select> <br />
            <input type='submit' value='Signup'></input>
        </form>
      </div>
    </div>
  )
}

export default Signup