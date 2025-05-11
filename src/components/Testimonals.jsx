import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Profile1 from '../assests/profile.webp'



const data = [
    {
        profile: Profile1,
        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in.'
    },
    {
        profile: Profile1,
        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in.'
    },
    {
        profile: Profile1,
        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in.'
    },
    {
        profile: Profile1,
        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in.'
    },
]

const Testimonals = () => {
  return (
    <div   className='w-full  px-6 bg-gray-100 pb-6' >
        <div className='flex flex-col items-center justify-center '>
        <h2  data-aos="fade-up" className='py-8'>Words That Keep Me Building</h2>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className='w-full lg:w-1/2'>
        <div className='text-justify leading-7'>
           <p  data-aos="fade-up">I believe in creating meaningful, user-focused digital experiences that combine functionality, creativity, and clarity. Whether I'm developing a web application, designing intuitive interfaces, or solving technical challenges, my goal is always to deliver work that is reliable, thoughtful, and impactful. My projects reflect a dedication to clean code, responsive design, and scalable solutions—backed by a strong foundation in collaboration and continuous learning.</p>
        </div>
        <div className='flex items-center justify-around my-10'>
            <div className='flex flex-col'>
               <div className='flex items-center gap-5 justify-around my-10'>
    <div className='flex flex-col'>
        <span  data-aos="fade-up" className='text-sm text-slate-700'>Projects Completed</span>
        <span  data-aos="fade-up" className='text-xl font-medium text-blue-900'>15+</span>
        <span   data-aos="fade-up" className='text-sm text-gray-700'>Web Apps / Sites</span>
    </div>
</div>

            </div>
            <div className='flex flex-col'>
                <span  data-aos="fade-up" className='text-lg font-medium text-blue-900'>5.0</span>
                <span  data-aos="fade-up" className='text-sm font-medium text-gray-700'>Overall rating</span>
            
            </div>
        </div>
        </div>
       <div className='w-full lg:w-1/2 block text-center'>
      

                    <Swiper className='w-full lg:w-[70%] h-fit shadow shadow-blue-600  rounded-xl mx-auto px-4 py-16 md:h-96'
                        navigation={ true }
                        spaceBetween={40}
                        modules={[Navigation]}
                        slidesPerView={1}>
                        {
                            data.map(({profile, name, review }, index) => {
                                return (
                                    <SwiperSlide key={index} className="text-center p-7 rounded-xl border ">
                                        <div className='flex flex-col items-center justify-center pb-4'>
                                        <div className='w-20 h-20 border-4 rounded-full border-gray-600' >
                                        <img src={profile} alt={name} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <h3 >{name}</h3>
                                        </div>
                                        <p className='py-2 px-4 leading-7 text-justify'>{review}</p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
                </div>
    </div>
  )
}

export default Testimonals
