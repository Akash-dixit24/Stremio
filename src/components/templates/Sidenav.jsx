import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {





  return (
       <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-10'>
              <h1 className='text-2xl text-white font-semibold'>
                     <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                     <span>Stremio</span>
              </h1>
              <nav className='flex flex-col text-zinc-300 text-xl gap-1'>
                     <h1 className='text-white font-semibold text-2xl mt-5 mb-3 '>New Feeds</h1>
                     <Link to="/trending" className="hover:bg-[rgb(101,86,205)] hover:text-white rounded-lg p-3 duration-300">
                     <i className="mr-2 ri-fire-fill  "></i> Trending
                     </Link>
                     <Link to="./popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
                     <i className="mr-2 ri-bard-fill "></i> Popular
                     </Link>
                     <Link to='/movies' className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
                     <i className="mr-2 ri-movie-2-line "></i> Movies
                     </Link>
                     <Link to='/tvShows'  className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
                     <i className="mr-2 ri-tv-2-line "></i> TvShows
                     </Link>
                     <Link to='/peoples'  className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
                     <i className="mr-2 ri-team-fill "></i> People
                     </Link>
              </nav>
              <br></br>


              <hr className='border-none h-[1px] bg-zinc-400'/>

              <nav className='flex flex-col text-zinc-300 text-xl gap-2'>
                     <h1 className='text-white font-semibold text-2xl mt-8 mb-4 '>Website Information</h1>
                     <Link to='/about'  className="hover:bg-[rgb(101,86,205)] hover:text-white rounded-lg p-3 duration-300">
                     <i className="mr-2 ri-information-2-fill"></i> About Stremio
                     </Link>
                     <Link  className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
                     <i className="mr-2 ri-phone-fill"></i> Contact Us
                     </Link>
                    
              </nav>
       </div>
  )
}

export default Sidenav