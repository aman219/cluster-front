import React from "react"
import { Link } from "react-router-dom"
import '../css/image.css'
import photo from '../media/image/music.jpg'

const Image = () => {
    return (
        <div className="container">
            <div className="image-container">
                <Link to="/dashboard/" >
                    <div className="image-item">
                        <img src={photo} alt="" />
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Image