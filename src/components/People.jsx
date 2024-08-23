import axios from '../utils/axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './templates/Topnav';
import Cards from './templates/Cards';

const People = () => {

       const navigate = useNavigate();
       const [category ,setcategory] = useState("popular");
       const [person , setperson] = useState([]);
       const [page, setpage] = useState(1)
       const [hasMore, setHasMore] = useState(true);
       document.title = "Stremio | Tv Shows "


       const GetPerson = async() =>{
              try{
                     const {data} = await axios.get(`/person/${category}?page=${page}`);
                     if(data.results.length > 0){
                            setperson((prevState) => [...prevState , ...data.results])
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
              if (person.length === 0) {
                     GetPerson();
              }
              else{
                     setpage(1);
                     setperson([]);
                     GetPerson();
                     
              }
       } 
     
     


       useEffect(()=>{
             refreshHnadler()
       },[category])





  return person.length > 0 ? (
       <div className='w-screen h-screen px-[3%] overflow-y-auto overflow-hidden '>
   
       <div className='w-full  flex items-center justify-between '>
                
                 <h1 className='text-2xl text-zinc-400 font-semibold '>
                 <i 
                        onClick={() => navigate(-1)}
                         className="hover:text-[#6556CD] ri-arrow-left-line"
                         ></i>{" "} 
                         People
                         </h1>
   
                 <div className='flex items-center w-[80%]'>
                 <Topnav/>
               
                       <div className="w-[2%]"></div>
                       
   
                 </div>
                
   
       </div>
   
   
       <InfiniteScroll 
       dataLength={person.length}
       next={GetPerson()}
       hasMore={hasMore}
       loader={<h1>Loading..</h1>}>
   
   
       <Cards data={person} title ={category}/>
       </InfiniteScroll>
   
       
          
   
       </div>
     ) : <Loading/>
}

export default People