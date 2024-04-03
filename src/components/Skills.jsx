import React from "react";
import SkillImage from "../assests/skills.jpg";


const Skills = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
              <div data-aos="flip-up">
                <img
                  src={SkillImage}
                  alt="skills"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
             
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  
                </h1>
                <p
                  data-aos="fade-up"
                  className=" text-xl tracking-wide leading-8"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio ratione ex alias quis magni at optio
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 text-xl text-purple-900 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                     
                      <p>ReactJs</p>
                    </div>
                    <div className="flex items-center gap-4">
                      
                      <p>Tailwind CSS</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                     
                      <p>GitHub</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;