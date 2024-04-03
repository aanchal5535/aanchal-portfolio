import React from 'react'

import ME from'../assests/avatar.jpg'
import {FaAward} from 'react-icons/fa';
import{AiOutlineUsergroupAdd} from 'react-icons/ai';
import{AiOutlineProject} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Hero = () => {
  return (
  <section className='w-full py-24 flex flex-col items-center justify-center bg-slate-50 '>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="w-full flex flex-col-2  items-center justify-center gap-[15%] pt-5">
        <div className="pl-24 w-full h-[500px]  flex items-center justify-center">
          <img src={ME} alt='About ' className='w-[400px] h-[500px] rounded-2xl'/>
        </div>
      
      <div className="pr-24">
        <div className="flex  items-center justify-between pb-5">
          <article className='text-xl '>
           <FaAward className='text-xl'/>
           <h5>Experience</h5>
           <small>*******</small>
          </article>
          <article className='text-xl'>
           <AiOutlineUsergroupAdd className='text-xl'/>
           <h5>Clients</h5>
           <small>*******</small>
          </article>
          <article className='text-xl'>
           <AiOutlineProject className='text-xl'/>
           <h5>Projects</h5>
           <small>20+</small>
          </article>
        </div>
        <p className='text-xl'>
        Highly motivated and detail-oriented aspiring Frontend Developer with a strong foundation in web 
development technologies.
Seeking an opportunity to apply my skills and passion for creating user-friendly, responsive, and visually 
appealing websites.
        </p>
        <div className=' bg-purple-800 text-white px-6 py-3 w-fit font-xl mt-5 rounded-md sm:mb-0 '>
    <NavLink to='/contact' className='p-4 cursor-pointer text-lg' > Let's Talk </NavLink>
   </div>
      </div>
    </div>
  </section>
  )
}

export default Hero;
