import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {

  const [nav, setNav ] = useState(false);

  const links = [
    {
      id: 1,
      child: (<>Characters</>),
      path: "/characters"
    },
    {
      id: 2,
      child: (<>Movies</>),
      path: "/movies"
    },
    {
      id: 3,
      child: (<>Comics</>),
      path: "/comics"
    }
  
  ];



  return (
    <div name="Navbar" className='flex justify-between w-full h-32 bg-gradient-to-b from-red-600 via-red-900 to-black fixed'>
           {/* Header */}
            <div className='flex w-1/2 h-full'>
                <h1 className='text-white text-3xl md:text-4xl lg:text-5xl text-bold my-8 mx-8 lg:mx-20'>
                  <a href='/'>
                      Marvel for Beginners
                  </a>
                </h1>
            </div>
            {/* Links Desktop */}
<div className='flex flex-row justify-end items-center w-0 md:w-1/2 h-full mx-8'>
  <ul className="hidden md:flex">
        {links.map(({ id, child, path }) => (
             <li 
             key={id}
             className="text-2xl px-4 cursor-pointer font-medium text-white hover:scale-110 duration-200 ">
              <a href={path}>{child}</a>
           
           </li>
        ))}
      </ul>
</div>
      
<div onClick={() => setNav(!nav)} className="flex justify-center items-center cursor-pointer pr-4 z-10 md:hidden text-white">
        
        {nav ? <FaTimes size={35} /> : <FaBars size={35} /> }
 </div>  

       {/* Mobil Navbar Logic */}
       {nav && (
      <ul className="flex flex-col md:hidden justify-end items-center absolute top-32 right-0 w-1/4 h-50vh bg-gradient-to-b from-black via-red-800 to-gray-500 text-white">
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