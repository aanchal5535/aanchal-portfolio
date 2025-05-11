import React from 'react';
import ME from '../assests/avatar.jpg';
import { FaAward } from 'react-icons/fa';
import { AiOutlineUsergroupAdd, AiOutlineProject } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-50">
      <div className="text-center mb-10">
        <h5  data-aos="fade-up" className="text-base text-gray-600">A Quick Introduction</h5>
        <h2  data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-black">Who I Am</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-screen-xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
           data-aos="fade-up"
            src={ME}
            alt="About"
            className="w-[250px] h-[320px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2">
          {/* Cards */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
            <article  data-aos="fade-up" className="text-center">
              <FaAward className="text-3xl mx-auto text-purple-800" />
              <h5 className="text-lg font-semibold">Experience</h5>
              <small className="text-sm text-gray-600">1+ Year Hands-on Practice</small>
            </article>
            <article  data-aos="fade-up"className="text-center">
              <AiOutlineUsergroupAdd className="text-3xl mx-auto text-purple-800" />
              <h5 className="text-lg font-semibold">Clients</h5>
              <small className="text-sm text-gray-600">3 Freelance Projects</small>
            </article>
            <article  data-aos="fade-up" className="text-center">
              <AiOutlineProject className="text-3xl mx-auto text-purple-800" />
              <h5 className="text-lg font-semibold">Projects</h5>
              <small className="text-sm text-gray-600">20+ Completed Builds</small>
            </article>
          </div>

          {/* Description */}
          <p  data-aos="fade-up" className="text-base md:text-lg text-justify text-gray-700 leading-7">
            I'm a passionate Frontend Developer who thrives on crafting clean, responsive, and user-centric web
            interfaces. With a strong foundation in modern web technologies and an eye for detail, I take pride in
            turning ideas into seamless digital experiences. I approach every project with curiosity, creativity, and a
            commitment to quality—driven by a genuine love for building things that make a difference.
          </p>

          {/* Button */}
          <div className="mt-6 "  data-aos="fade-up">
            <NavLink
              to="/contact"
              className="inline-block bg-purple-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition"
            >
              Let's Build Something Together
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
