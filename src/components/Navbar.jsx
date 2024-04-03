import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CV from '../assests/AanchalResume .pdf'


const Navbar = () => {
 

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black bg-slate-100'>
      <div className='cursor-pointer'>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Aanchal</h1>
      </div>
      <ul className='hidden md:flex '>
   <li>
    <NavLink to='/' className='p-4 cursor-pointer text-lg hover:text-purple-500' > Home</NavLink>
   </li>
   <li>
    <NavLink to='/projects' className='p-4 cursor-pointer text-lg hover:text-purple-500' > Projects</NavLink>
   </li>
   <li>
    <NavLink to='/contact' className='p-4 cursor-pointer text-lg hover:text-purple-500' > Contact</NavLink>
   </li>
  
      </ul>
     
      <div className='hidden  gap-5 cursor-pointer md:flex'>
       <a href={CV}download className=' bg-purple-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0'>Download Cv</a>
      </div>
     

     
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>


      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>Aanchal</h1>
          <li>
    <NavLink to='/' className='border-b' > Home</NavLink>
   </li>
   <li>
    <NavLink to='/about' className='border-b' > Projects</NavLink>
   </li>
   
   <li>
    <NavLink to='/contact' className='border-b' > Contact</NavLink>
   </li>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;