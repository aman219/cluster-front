import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${process.env.REACT_APP_SERVER}/api/v1/users/logout/`)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const status = xhr.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    let data = JSON.parse(xhr.response)
                    console.log(data)
                    navigate("/login")
                } else {
                    console.log("error")
                }
            }
        }
        xhr.withCredentials = true
        xhr.send(null)
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Logout
