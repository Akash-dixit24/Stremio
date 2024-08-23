import noimage from "../../assets/noimage.png";
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
    return (
      <div className=' flex flex-wrap justify-center text-center w-full text-zinc-400 font-semibold text-xl '>
            <Link
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                className="fixed bottom-[5%] right-[1%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556cd] rounded-lg"
            >
                <i className="text-white ri-arrow-up-line text-xl"></i>
            </Link>
            {data.map((c, i) => (
                <Link
                    to={`/${c.media_type || title}/details/${c.id}`}
                    className="relative w-[35vh] m-[1%]"
                    key={i}
                >
                    <img
                         className=' h-[50vh] w-[100vh] rounded-sm object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]' 
                        src={
                            c.poster_path || c.backdrop_path || c.profile_path
                                ? `https://image.tmdb.org/t/p/original/${
                                      c.poster_path ||
                                      c.backdrop_path ||
                                      c.profile_path
                                  }`
                                : noimage
                        }
                        alt=""
                    />
                  
                    
                    <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">
                        {c.name ||
                            c.title ||
                            c.original_name ||
                            c.original_title}
                    </h1>
                    

                     {c.vote_average && (
                        <div className="absolute right-[-3%] bottom-[91%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
                            {(c.vote_average * 10).toFixed()} <sup>%</sup>
                        </div>
                    )}
                    

                   
                </Link>
            ))}
        </div>
    );
};

export default Cards;