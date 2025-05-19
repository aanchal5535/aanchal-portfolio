import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CV from '../assests/AanchalResume 1.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className='bg-gray-100 text-black flex items-center justify-between w-full h-16 px-4 fixed top-0 left-0 z-50 shadow-md'>
      {/* Logo */}
      <div className='flex-1 text-xl font-bold'>
        <h1>Aanchal</h1>
      </div>

      {/* Desktop Links */}
      <ul className='hidden md:flex gap-4'>
        <li>
          <NavLink to='/' className='p-2 hover:text-purple-500'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/projects' className='p-2 hover:text-purple-500'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/blog' className='p-2 hover:text-purple-500'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='p-2 hover:text-purple-500'>Contact</NavLink>
        </li>
      </ul>

      {/* Desktop CV Button */}
      <div className='hidden md:flex'>
        <a
          href={CV}
          download
          className='bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300'
        >
          Download CV
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className='md:hidden z-20 cursor-pointer' onClick={toggleNav}>
        {nav ? <AiOutlineClose size={24} /> : <HiOutlineMenuAlt4 size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-100 px-6 pt-20 transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <ul className='flex flex-col gap-6 text-lg'>
          <li>
            <NavLink to='/' onClick={closeMenu} className='border-b pb-2'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={closeMenu} className='border-b pb-2'>
              Projects
            </NavLink>
          </li>
          <li>
          <NavLink to='/blog' className='p-2 hover:text-purple-500'>Blog</NavLink>
        </li>
          <li>
            <NavLink to='/contact' onClick={closeMenu} className='border-b pb-2'>
              Contact
            </NavLink>
          </li>
          <a
            href={CV}
            download
            onClick={closeMenu}
            className='bg-purple-800 text-white px-4 py-2 rounded-md mt-4 inline-block w-fit hover:bg-purple-700 transition'
          >
            Download CV
          </a>
          <div className='flex justify-between items-center pt-6'>
            <FaFacebook size={24} className='icon'/>
            <FaTwitter size={24} className='icon'/>
            <FaYoutube size={24} className='icon'/>
            <FaPinterest size={24}  className='icon'/>
            <FaInstagram size={24}  className='icon'/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
