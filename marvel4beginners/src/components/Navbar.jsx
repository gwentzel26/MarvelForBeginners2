import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
{/* <header class="topnav">
<h1>
  <a href="./index.html" id="h1-link">
    Marvel for Beginners
  </a>
</h1>
<a href="./characters.html" class="links" id="chars">
  Characters
</a>
<a href="./comics.html" class="links" id="comics">
  Comics
</a>
<a href="./movies.html" class="links" id="movies">
  Movies
</a>

<div id="characterContainer"></div>
          <div id="movieContainer"></div>
          <div id="comicContainer"></div>
</header> */}



const Navbar = () => {

  const [nav, setNav ] = useState(false);

  const links = [
    {
      id: 1,
      child: (<>Characters</>),
    },
    {
      id: 2,
      child: (<>Movies</>),
    },
    {
      id: 3,
      child: (<>Comics</>),
    }
  
  ];



  return (
    <div name="Navbar" className='flex w-full h-32 bg-gradient-to-b from-red-600 via-red-900 to-black fixed'>
           {/* Header */}
            <div className='flex w-1/2 h-full'>
                <h1 className='text-white text-3xl md:text-4xl lg:text-5xl text-bold my-8 mx-8 lg:mx-20'>
                  <a >
                      Marvel for Beginners
                  </a>
                </h1>
            </div>
            {/* Links Desktop */}
<div className='flex flex-row justify-end items-center w-0 md:w-1/2 h-full mx-8'>
  <ul className="hidden md:flex">
        {links.map(({ id, child }) => (
             <li 
             key={id}
             className="text-2xl px-4 cursor-pointer font-medium text-white hover:scale-110 duration-200 ">
           {child}
           </li>
        ))}
      </ul>


</div>
      
<div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        
        {nav ? <FaTimes size={35} /> : <FaBars size={35} /> }
      </div>  

       {/* Mobil Navbar Logic */}
       {nav && (
      <ul className="flex flex-col justify-end items-center absolute top-0 left-0 w-1/4 h-50vh bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-400">
      {links.map(({ id, child }) => (
             <li 
             key={id}
             className="px-4 cursor-pointer py-6 text-xl">
           {child}
           </li>
           
           
        ))}
      </ul>
      )
     }


    </div>
  )
}

export default Navbar