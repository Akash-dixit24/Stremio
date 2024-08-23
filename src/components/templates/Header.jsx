 import React from 'react'
import { Link } from 'react-router-dom'
 
 const Header = ({data}) => {

   return (
     <div style={{
       background :`linear-gradient(rgba(0 ,0,0,.2),rgba(0 ,0,0,.5) ,rgba(0 ,0,0,.8)) ,
        url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.profile_path})`,
        backgroundPosition : "top-[10%]" ,
        backgroundSize : "cover",
        objectFit: "cover",
        margin: "5px",
        backgroundRepeat: "no-repeat"
        
        }} 
     className='w-[171vh] h-[65vh] flex flex-col justify-end items-start ml-2  p-[3%] '
      >

      <h1 className='mb-3 w-[70%] text-5xl font-semibold text-white'>
      {data.name||
      data.title||
      data.original_name||
      data.original_title}
      </h1>

      <p className='mb-3 w-[70%] text-white mt-53'>
          {data.overview.slice(0,200)}....
          <Link className='text-blue-400'>more</Link>
      </p>
      <p className='text-white flex gap-x-3 mb-3'>
      <i className="ri-megaphone-fill text-red-500"></i>{data.release_date || "No Information"}
      <i className="ri-vidicon-fill text-yellow-500"></i>{data.media_type.toUpperCase()}

      </p>
      <Link className=' p-4 font-semibold text-white bg-[#6556CD] rounded-md'>
            Watch Trailer
      </Link>
     </div>
   )
 }
 
 export default Header