import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VideoPlay = () => {

    const {id} = useParams()
    console.log(id)

    const [video, setVideo] = useState({"src":null, "name":null, "id": null})

    useEffect(()=>{
        const xhr = new XMLHttpRequest()
        xhr.open("GET", `/video/${id}/`, true)
        xhr.onload=()=>{
            if(xhr.status===200){
                console.log(JSON.parse(xhr.response))
                setVideo(JSON.parse(xhr.response))
            }else{
                console.log("error code : ", xhr.status)
            }
        }
        xhr.send(null)
    },[id])

  return (
    <div>
      <video src={video.src} controls preload='metadata'></video>
      <h2>{video.name}</h2>
      <h6>{video.id}</h6>
    </div>
  )
}

export default VideoPlay
