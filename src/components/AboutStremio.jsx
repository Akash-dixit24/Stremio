import React from 'react'
import { useNavigate } from 'react-router-dom';


const AboutStremio = () => {
       const navigate = useNavigate();
  return (
    
    <div className='w-screen h-screen p-[2%] overflow-y-auto overflow-hidden '>
               <div className='w-full  flex items-center justify-between '>
                
                <h1 className='text-2xl text-zinc-400 font-semibold '>
                <i 
                       onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line mr-1"
                        ></i>{" "} 
                        About Stremio
                        </h1>
  
             
               
  
      </div>

    </div>
  )
}

export default AboutStremio