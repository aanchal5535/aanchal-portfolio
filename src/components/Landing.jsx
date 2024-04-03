import React from 'react'
import ME from'../assests/me1.jpg'
import {FaGithub} from 'react-icons/fa';
import CV from '../assests/AanchalResume .pdf'
import { BiLogoGmail } from "react-icons/bi";


const Landing = () => {
  return (
  <section className='w-full py-24 flex flex-col-2 items-center justify-center bg-slate-50 '>
        <div className="flex  items-center justify-between pb-5">
        <div className="pl-24 w-full flex flex-col items-center justify-between mt-28">
               <h3>Hello, It's Me</h3>
                <h1 className='text-5xl font-bold '> Aanchal Subedi</h1>
                <h3>And I'm a <span className='text-purple-500'>Frontend  Developer.</span></h3>
                <p className='font-xl m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur animi ullam laborum sit, temporibus expedita eos ipsum molestiae. Perspiciatis totam deserunt earum cum consequatur voluptatum adipisci fugiat fugit atque!  </p>
               <div className='flex justify-between my-6 gap-6 items-center '>
               <div className='  bg-blue-600 text-white text-xl rounded-[50%]'>
            <a href="mailto:aanchalsubedi005@gmail.com"><BiLogoGmail  className='m-1'/></a>
            </div> 
           
           <div className=''>
            <a href="https://github.com/aanchal5535"><FaGithub className='icon' /></a>
            </div> 
           
          </div>
          <div className='hidden  gap-5 cursor-pointer md:flex'>
       <a href={CV}download className=' bg-purple-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0'>Download Cv</a>
      </div>
         
        </div>
       
      </div>
      <div className="w-full flex flex-col-2  items-center justify-center gap-[15%] pt-5">
        <div className="pl-24 w-full h-[500px]  flex items-center justify-center">
          <img src={ME} alt='About ' className='w-[400px] h-[500px] rounded-[50%]'/>
        </div>
      </div>
    
  </section>
  )
}

export default Landing;
