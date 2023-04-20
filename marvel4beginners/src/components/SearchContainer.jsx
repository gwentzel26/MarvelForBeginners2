import React from 'react'

const SearchContainer = () => {
  return (
    
    <div className="flex flex-col justify-center items-center w-4/5 h-32 text-white z-10 ">
        <div className='flex flex-col '>

        
           <div className='flex flex-row justify-between'>
            <input type="text" placeholder="Captain America" className="w-5/8" />
            <button id="searchBtn" className='px-2 mx-2 bg-gradient-to-r from-red-800 to-red-500 border-4 border-double border-black w-3/8'>Search</button>
            </div>
            <h3 id="searchh3" className="hidden">
              Search History:
            </h3>
            <div id="searchHistory">
            <button id="clearHistory" className="my-4">
              Clear History
            </button>
            </div>
        </div>
         
    </div>
       
   
  )
}

export default SearchContainer