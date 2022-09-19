import React, { useRef, useState } from 'react'

const DeleteAccount = () => {

    const check = useRef()
    const [msg, setMsg] = useState({"msgtext":"", "color":"#fff"})

  return (
    <div className='container' >
      <p style={{padding: "10px", fontSize: "1.2rem", fontWeight: "600"}} >Once you delete your account then you cannot retrive your data in future we will delete your data from our server after 1 months. Are you sure to delete your account.</p>
       <div className="check-box" style={{margin: "10px"}}>
       <input ref={check} type="checkbox" name="delcon" id="delcon" required /><label htmlFor="delcon">I agree terms and conditions.</label>
        <button type="submit" onClick={()=>{check.current.checked?setMsg({"msgtext":"You have successfully deleted.", "color":"var(--color-primary)"}):setMsg({"msgtext":"First accept terms and conditions.", "color": "#d054ce"})}} style={{display: 'block', margin: "0px auto", marginTop: "100px", width: "120px", height: "50px", backgroundColor: "#d054ce", color: "#fff", border: "none", borderRadius: "10px", fontSize: "1.2rem"}} >Delete</button>
        </div> 
        <h4 style={{padding: "20px 10px", fontSize: "1.2rem", fontWeight: "400", border: `2px solid ${msg.color}`, color:msg.color}} >
            {msg.msgtext}
        </h4>
    </div>
  )
}

export default DeleteAccount
