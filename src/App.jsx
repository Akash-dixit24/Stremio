import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import People from './components/People'
import AboutStremio from './components/AboutStremio'


const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex'>
    <Routes>
        <Route path='/' element={<Home/>  } />
        <Route path='/trending' element={<Trending/>  } />
        <Route path='/popular' element={<Popular/>  } />
        <Route path='/movies' element={<Movies/>  }>
            <Route path='/'/>
        </Route>
        <Route path='/tvShows' element={<TvShows/>  } />
        <Route path='/peoples' element={<People/>  } />
        <Route path='/about' element={<AboutStremio/>  } />
    </Routes>



    </div>
  )
}

export default App