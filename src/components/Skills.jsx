import React from "react";
import SkillImage from "../assests/skills.jpg";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Skill Image */}
        <div data-aos="flip-up" className="flex justify-center">
          <img
            src={SkillImage}
            alt="Skills"
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            My Technical Toolbox
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-700 text-lg leading-relaxed"
          >
            I'm proficient in building responsive, scalable, and accessible web
            applications. My workflow is driven by a solid foundation in modern
            frontend technologies, with a strong emphasis on clean code,
            performance, and user experience.
          </p>

          {/* Skills Grid */}
          <div
            data-aos="zoom-in"
            className="grid grid-cols-2 gap-6 text-lg text-purple-800 font-medium"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaReact className="text-2xl text-blue-500" />
                <p>React.js</p>
              </div>
              <div className="flex items-center gap-3">
                <SiTailwindcss className="text-2xl text-cyan-500" />
                <p>Tailwind CSS</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaGithub className="text-2xl text-black" />
                <p>GitHub / Git</p>
              </div>
              {/* Add more skills if needed */}
              {/* Example:
              <div className="flex items-center gap-3">
                <SiJavascript className="text-2xl text-yellow-500" />
                <p>JavaScript</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
