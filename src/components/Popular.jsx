import axios from '../utils/axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import Cards from './templates/Cards';

const Popular = () => {
     
       const navigate = useNavigate();
       const [category ,setcategory] = useState("movie");
       const [popular , setpopular] = useState([]);
       const [page, setpage] = useState(1)
       const [hasMore, setHasMore] = useState(true);
       document.title = "Stremio | Popular " + category


       const GetPopluar = async() =>{
              try{
                     const {data} = await axios.get(`${category}/popular?page=${page}`);
                     if(data.results.length > 0){
                            setpopular((prevState) => [...prevState , ...data.results])
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
              if (popular.length === 0) {
                     GetPopluar();
              }
              else{
                     setpage(1);
                     setpopular([]);
                     GetPopluar();
                     
              }
       } 
     
     


       useEffect(()=>{
             refreshHnadler()
       },[category])


  return popular.length > 0 ? (
       <div className='w-screen h-screen px-[3%] overflow-y-auto overflow-hidden '>
   
       <div className='w-full  flex items-center justify-between '>
                
                 <h1 className='text-2xl text-zinc-400 font-semibold '>
                 <i 
                        onClick={() => navigate(-1)}
                         className="hover:text-[#6556CD] ri-arrow-left-line"
                         ></i>{" "} 
                         Popular</h1>
   
                 <div className='flex items-center w-[80%]'>
                 <Topnav/>
                 <Dropdown
                           title="Category"
                           options={["movie", "tv"]}
                           func={(e) => setcategory(e.target.value)}
                       />
                       <div className="w-[2%]"></div>
                       
   
                 </div>
                
   
       </div>
   
   
       <InfiniteScroll 
       dataLength={popular.length}
       next={GetPopluar()}
       hasMore={hasMore}
       loader={<h1>Loading..</h1>}>
   
   
       <Cards data={popular} title ={category}/>
       </InfiniteScroll>
   
       
          
   
       </div>
     ) : <Loading/>
}

export default Popular