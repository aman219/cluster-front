import React from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineDashboard,
    MdOutlineMenu
 } from "react-icons/md"
import { CiImageOn,
    CiVideoOn,
    CiSettings
 } from "react-icons/ci"
import { LiaFileAudio } from "react-icons/lia"
import { IoCloudUploadOutline } from "react-icons/io5"

const Sidebar = () => {
  return (
    <>
      <div className='w-12 h-max fixed top-[calc(50vh-12rem)] overflow-hidden'>
        <ul className='h-full grid gap-2'>
            <Link to="/menu" className='text-3xl w-full m-0 aspect-square flex justify-center items-center font-bold hover:cursor-pointer hover:bg-dark-lite'><MdOutlineMenu /></Link>
            <Link to="/" className='text-3xl w-full m-0 aspect-square flex justify-center items-center font-bold hover:cursor-pointer hover:bg-dark-lite'><MdOutlineDashboard /></Link>
            <Link to="/image" className='text-3xl w-full m-0 aspect-square flex justify-center items-center font-bold hover:cursor-pointer hover:bg-dark-lite'><CiImageOn /></Link>
            <Link to="/audio" className='text-3xl w-full m-0 aspect-square flex justify-center items-center font-bold hover:cursor-pointer hover:bg-dark-lite'><LiaFileAudio /></Link>
            <Link to="/video" className='text-3xl w-full m-0 aspect-square flex justify-center items-center font-bold hover:cursor-pointer hover:bg-dark-lite'><CiVideoOn /></Link>
            <Link to="/upload" className='text-3xl w-full m-0 aspect-square flex justify-center items-center font-bold hover:cursor-pointer hover:bg-dark-lite'><IoCloudUploadOutline /></Link>
            <Link to="/setting" className='text-3xl w-full m-0 aspect-square flex justify-center items-center font-bold hover:cursor-pointer hover:bg-dark-lite'><CiSettings /></Link>
        </ul>
        
      </div>
    </>
  )
}

export default Sidebar
