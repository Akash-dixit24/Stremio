import React from 'react'
import loader from '../assets/loader.gif'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
       <img className='h-[70%] object-cover' src={loader} />
    </div>
  )
}

export default Loading