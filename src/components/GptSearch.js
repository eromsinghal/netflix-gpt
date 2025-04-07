import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
    <img className="min-h-screen flex flex-col  md:h-[100%]   " src={BG_URL}  alt='logo' />
      </div>
    <div className="pt-[30%] md:p-0">
      
          <GptSearchBar />
          <GptMovieSuggestion />
      </div> </>
      
  )
}

export default GPTSearch;
