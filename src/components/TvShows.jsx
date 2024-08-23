import axios from '../utils/axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import Cards from './templates/Cards';

const TvShows = () => {

       const navigate = useNavigate();
       const [category ,setcategory] = useState("airing_today");
       const [tv , setTv] = useState([]);
       const [page, setpage] = useState(1)
       const [hasMore, setHasMore] = useState(true);
       document.title = "Stremio | Tv Shows "


       const GetTv = async() =>{
              try{
                     const {data} = await axios.get(`/tv/${category}?page=${page}`);
                     if(data.results.length > 0){
                            setTv((prevState) => [...prevState , ...data.results])
                            setpage(page +1)
                     }
                     else{
                            setHasMore(false)
                     }


                     
                     // settrending(data.results)
                  
                    
              }
              catch(error){
                     console.log(error , "error1 ")
              }
       }


       const refreshHnadler = () => {
              if (tv.length === 0) {
                     GetTv();
              }
              else{
                     setpage(1);
                     setTv([]);
                     GetTv();
                     
              }
       } 
     
     


       useEffect(()=>{
             refreshHnadler()
       },[category])



       return tv.length > 0 ? (
              <div className='w-screen h-screen px-[3%] overflow-y-auto overflow-hidden '>
       
              <div className='w-full  flex items-center justify-between '>
                     
                     <h1 className='text-2xl text-zinc-400 font-semibold '>
                     <i 
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6556CD] ri-arrow-left-line"
                            ></i>{" "} 
                            Tv Shows<small className='ml-2 text-sm text-zinc-600'>({category})</small>
                            </h1>
       
                     <div className='flex items-center w-[80%]'>
                     <Topnav/>
                     <Dropdown
                            title="Category"
                            options={["top_rated", "popular" ,"on_the_air" ,"airing_today"]}
                            func={(e) => setcategory(e.target.value)}
                            />
                            <div className="w-[2%]"></div>
                            
       
                     </div>
                     
       
              </div>
       
       
              <InfiniteScroll 
              dataLength={tv.length}
              next={GetTv()}
              hasMore={hasMore}
              loader={<h1>Loading..</h1>}>
       
       
              <Cards data={tv} title ={category}/>
              </InfiniteScroll>
       
              
              
       
              </div>
       ) : <Loading/>
}

export default TvShows