import React from 'react'

const Login = () => {
  return (
    <div className='container' >
      <div className='signup-box login-box'>
        <form action='' method='post' encType='multipart/form-data' > 
            <label htmlFor='username'>Username </label>
            <input type='text' id='username' name='username' ></input> <br />
            <label htmlFor='passwd'>Password </label>
            <input type='password' id='passwd' name='passwd' ></input> <br />
            <input type='submit' value='Login'></input>
        </form>
      </div>
    </div>
  )
}

export default Login
