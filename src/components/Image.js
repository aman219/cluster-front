import React, { useEffect, useState } from "react"
import '../css/image.css'

const Image = () => {

    const [img, setImg] = useState([])

    useEffect(() => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", '', true)
        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log(JSON.parse(xhr.response))
                setImg(JSON.parse(xhr.response))
            } else {
                console.log("error code: ", xhr.status)
            }
        }
        xhr.send()
    }, []);
    const fullScr=(event)=>{
        if(!document.fullscreenElement){
            event.target.requestFullscreen()
        }else{
            document.exitFullscreen()
        }
    }
    const touchMov=(event)=>{
        console.log("for touches")
    }
    return (
        <div className="container">
            <div className="image-container">
                {
                    img.map((item, index) => {
                        return<div className="image-item" key={index} onClick={fullScr} onTouchMove={touchMov} >
                            <img src={item.src} alt="item" />
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default Image