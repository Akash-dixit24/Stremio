import React, { useState , useEffect } from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import axios from '../utils/axios'
import Header from './templates/Header'
import HorizontalCards from './templates/HorizontalCards'
import Dropdown from './templates/Dropdown'
import Loading from './Loading'

const Home = () => {
       document.title ="Stremio | Homepage"
       const [wallpaper , setwallpaper] = useState(null);
       const [trending , settrending] = useState(null);
       const [category , setcategory] = useState("all")





       const GetHeaderWallpaer = async() =>{
        try{
               const {data} = await axios.get(`/trending/all/day`)
               let randomData = data.results[(Math.random()* data.results.length).toFixed()];
               setwallpaper(randomData);

        }
        catch(error){
               console.log(error , "error1 ")
        }
 }



 const GetTrending = async() =>{
       try{
              const {data} = await axios.get(`/trending/${category}/day`);
              settrending(data.results)
             
       }
       catch(error){
              console.log(error , "error1 ")
       }
}











 useEffect(() => {
       GetTrending();
       !wallpaper && GetHeaderWallpaer();
      
 },[category])







  return wallpaper && trending ? (
    <>
       <Sidenav  />
       <div className='w-[90%] h-full overflow-y-auto overflow-x-hidden '>
              <Topnav />
              <Header  data ={wallpaper} />

              <div className='flex justify-between p-1 mt-3'>
              <h1 className='text-2xl text-zinc-400 font-semibold p-3 ml-3 '>Treanding</h1>

              <Dropdown
                        title="Filter"
                        options={["tv", "movie", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
              </div>



              <HorizontalCards  data={trending} />
       </div>
    </>
  ) : <Loading />
}

export default Home