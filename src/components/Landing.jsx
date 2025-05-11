import React from 'react';
import ME from '../assests/me1.jpg';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import CV from '../assests/AanchalResume 1.pdf';

const Landing = () => {
  return (
    <section className="w-full bg-slate-50 pt-24">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-center md:text-left">
          <h3  data-aos="fade-up" className="text-xl text-gray-600">Hello, It's Me</h3>
          <h1  data-aos="fade-up" className="text-5xl font-bold text-black mt-2">Aanchal Subedi</h1>
          <h3  data-aos="fade-up" className="text-2xl mt-2 text-gray-700">
            And I'm a <span className="text-purple-600 font-semibold">Frontend Developer</span>
          </h3>
          <p  data-aos="fade-up" className="text-lg mt-4 text-gray-700 leading-7">
            I'm a detail-oriented and passionate frontend developer who loves turning design concepts into responsive,
            functional, and user-friendly web experiences. I specialize in React.js and modern CSS frameworks like Tailwind CSS.
            My goal is to build accessible, scalable, and performant digital solutions.
          </p>

          {/* Contact Icons */}

          <div className="flex items-center gap-6 mt-6">
            <a href="mailto:aanchalsubedi005@gmail.com" className="text-blue-600 bg-gray-200 rounded-full p-1 hover:text-blue-800 text-2xl">
              <BiLogoGmail />
            </a>
            <a href="https://github.com/aanchal5535" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 text-2xl">
              <FaGithub />
            </a>
          </div>

          {/* Download CV */}
          <a
            href={CV}
            download
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white mt-8 px-6 py-3 rounded-md text-lg font-medium transition duration-300"
          >
            Download CV
          </a>
       
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ME}
            alt="Aanchal Subedi"
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
