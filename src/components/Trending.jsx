import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav'
import Dropdown from './templates/Dropdown'
import axios from '../utils/axios'
import Cards from './templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'


const Trending = () => {
      
       const navigate = useNavigate();
       const [category ,setcategory] = useState("all");
       const [duration , setduration ] = useState("day");
       const [trending , settrending] = useState([]);
       const [page, setpage] = useState(1)
       const [hasMore, setHasMore] = useState(true);
       document.title = "Stremio | Trending " + category.toUpperCase()
      

       const GetTrending = async() =>{
              try{
                     const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
                     if(data.results.length > 0){
                            settrending((prevState) => [...prevState , ...data.results])
                            setpage(page +1)
                     }
                     else{
                            setHasMore(false)
                     }


                     
                     // settrending(data.results)
                     console.log(data)
                    
              }
              catch(error){
                     console.log(error , "error1 ")
              }
       }


       const refreshHnadler = () => {
              if (trending.length === 0) {
                     GetTrending();
              }
              else{
                     setpage(1);
                     settrending([]);
                     GetTrending();
              }
       } 
     
     


       useEffect(()=>{
             refreshHnadler()
       },[category , duration])


  return trending.length > 0 ? (
    <div className=' absolute w-screen h-screen px-[3%] overflow-y-auto overflow-hidden '>

    <div className='w-full  flex items-center justify-between '>
             
              <h1 className='text-2xl text-zinc-400 font-semibold '>
              <i 
                     onClick={() => navigate(-1)}
                      className="hover:text-[#6556CD] ri-arrow-left-line"
                      ></i>{" "} 
                      Trending</h1>

              <div className='flex items-center w-[80%] '>
              <Topnav/>
              <Dropdown
                        title="Category"
                        options={["movie", "tv", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                    <div className="w-[2%]"></div>
                    <Dropdown
                        title="Duration"
                        options={["week", "day"]}
                        func={(e) => setduration(e.target.value)}
                    />

              </div>
             

    </div>


    <InfiniteScroll 
    dataLength={trending.length}
    next={GetTrending()}
    hasMore={hasMore}
    loader={<h1>Loading..</h1>}>


    <Cards data={trending} title ={category}/>
    </InfiniteScroll>

    
       

    </div>
  ) : <Loading />
}

export default Trending