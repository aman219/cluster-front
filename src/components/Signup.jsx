import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='text-dark-white m-2 md:w-2/5 md:mx-auto mt-4 md:border md:p-3 md:rounded-lg'>
        <div className='flex justify-center'>
            <h1 className='text-xl font-poppins font-semibold md:text-3xl'>Signup</h1>
        </div>
        <div>
            <form method='post' encType='multipart/form-data' className='flex flex-col gap-2 mt-4'>
                <div className='flex justify-end items-center h-20'>
                    <label htmlFor='profileImg' className='w-20 h-20 bg-dark-lite rounded-full hover:cursor-pointer flex justify-center items-center text-3xl'> <i className="fa-regular fa-image"></i> </label>
                    <input type='file' id='profileImg' name='profileImg' accept='image/*' className='hidden'/>
                </div>
                <label htmlFor='firstName' className='text-dark-white font-poppins font-normal'> First Name </label>
                <input type='text' name='firstName' className='bg-dark-black border-b focus:outline-none text-lg font-medium font-poppins'/>
                <label htmlFor='lastName' className='text-dark-white font-poppins font-normal'> Last Name </label>
                <input type='text' name='lastName' className='bg-dark-black border-b focus:outline-none text-lg font-medium font-poppins'/>
                <label htmlFor='username' className='text-dark-white font-poppins font-normal'> Username </label>
                <input type='text' name='username' className='bg-dark-black border-b focus:outline-none text-lg font-medium font-poppins'/>
                <label htmlFor='email' className='text-dark-white font-poppins font-normal'> Email </label>
                <input type='email' name='email' className='bg-dark-black border-b focus:outline-none text-lg font-medium font-poppins'/>
                <label htmlFor='plan' className='text-dark-white font-poppins font-normal'> Select Plan </label>
                <select name='plan' className='bg-dark-black border-b text-lg font-medium font-poppins '>
                    <option value='free'> Free </option>
                    <option value='pro'> Pro </option>
                    <option value='premium'> Premium </option>
                </select>
                
                <label htmlFor='password' className='text-dark-white font-poppins font-normal'> Password </label>
                <input type='password' name='password' className='bg-dark-black border-b focus:outline-none text-lg font-medium font-poppins'/>
                <label htmlFor='confirmPassword' className='text-dark-white font-poppins font-normal'> Confirm Password </label>
                <input type='password' name='confirmPassword' className='bg-dark-black border-b focus:outline-none text-lg font-medium font-poppins'/>
                <div className='flex justify-center mt-10 '>
                    <button type='submit' className='text-dark-white bg-dark-lite w-28 h-12 font-poppins font-medium'>Signup</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Signup
