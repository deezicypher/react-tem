import React, { useState } from 'react';
import {logo, menu,deezifilogo, close} from '../assets/images';
import { navLinks } from '../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      <img src={deezifilogo} alt="DeeziFi" className="sm:h-[82px]  h-[60px]"  /> 

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        
        {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} `}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
            </li>
        ))
        }
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle? close : menu} 
          alt="Menu" className='h-[28px] object-contain' 
          onClick={() => setToggle(!toggle)}
          />

          <div className={`
          ${toggle? 'flex' : 'hidden' } 
          p-6 bg-black-gradient 
          absolute top-20 
          right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar `}>
               <ul className="list-none sm:flex  justify-end items-center flex-1">
        
        {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mb-1' : 'mb-4'} `}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
            </li>
        ))
        }
      </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar