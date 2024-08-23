import React from 'react'


const HorizontalCards = ({data }) => {
  return (


              <div className='w-[100%] flex overflow-y-auto mb-5 p-3'>
                     {data.map((d ,i) =>
                            <div key={i} className='min-w-[22%]  mr-[5px] bg-zinc-900 rounded-md '>
                                   <img 
                                   className='w-full h-[50%] object-cover p-1 rounded-md ' 
                                          src={`https://image.tmdb.org/t/p/original/${
                                          d.backdrop_path||d.poster_path
                                          })`} alt='' />



                      <div className='text-white p-1 h-[55%%]  '>
                            <h1 className='mb-3 mt-3 text-xl font-semibold ml-2'>
                            {d.name||
                            d.title||
                            d.original_name||
                            d.original_title}
                            </h1>

                            <p className='mb-2 mt-5 ml-2 over '>
                                   {d.overview.slice(0,90)}....
                                   <span className='text-blue-400'>more</span>
                            </p>
                            </div>

                           
                                                        
                       </div>
                            )}



              </div>






    
  )
}

export default HorizontalCards