import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const uploadLogin = (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${process.env.REACT_APP_SERVER}/api/v1/users/login`, true)
    const formData = new FormData(event.target)
    xhr.onload = () => {
      if (xhr.status === 201) {
        const data = xhr.response;
        console.log(data)
        navigate('/dashboard')
      } else {
        console.log(xhr.status)
      }
    }
    xhr.withCredentials = true;
    xhr.send(formData)
  }

  return (
    <div className='container' >
      <div className='signup-box login-box'>
        <form action='' method='post' onSubmit={uploadLogin} encType='multipart/form-data' > 
            <label htmlFor='username'>Username </label>
            <input type='text' id='username' name='username' ></input> <br />
            <label htmlFor='password'>Password </label>
            <input type='password' id='password' name='password' ></input> <br />
            <input type='submit' value='Login'></input>
        </form>
      </div>
    </div>
  )
}

export default Login
