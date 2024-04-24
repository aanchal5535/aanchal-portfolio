import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const data = [
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus.  '
    },
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus.'
    },
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus.'
    },
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus. '
    },
]


const Testimonals = () => {

    return (

        <div className='w-full py-24 flex flex-col items-center justify-center bg-gray-100 '>
            <h5>What do Client Say</h5>
            <h2>Testimonals</h2>

            <Swiper className='w-[70%]  shadow shadow-blue-600 rounded-xl mx-auto grid h-96 lg:grid-cols-3 bg-white gap-4 px-4 py-16 mt-4 md:h-96'
                navigation={{ clickable: true }}
                spaceBetween={40}
                modules={[Navigation]}
                slidesPerView={1}>
                {
                    data.map(({ name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="text-center p-16 rounded-xl   border-2 ">
                                <h2 >{name}</h2>
                                <p className='py-2'>{review}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>

    );
};

export default Testimonals;