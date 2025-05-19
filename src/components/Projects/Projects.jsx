import React from 'react';
import IMG1 from '../../assests/Image1.jpg'
import IMG2 from '../../assests/Image2.png'
import IMG3 from '../../assests/Image3.jpg'
import IMG4 from '../../assests/Image4.png'
import IMG5 from '../../assests/Image5.jpg'
import IMG6 from '../../assests/Image6.png'
import IMG7 from '../../assests/scene.jpg'
import IMG8 from '../../assests/OIP.jpg'

const data=[
  {id:1,
  image:IMG1,
  title: 'SignUp-LogIn Form ',
  description: "A simple Sign Up and Log In form made using ReactJs.",
  github: 'https://github.com/aanchal5535/signup-login_using_react',
  
  },
  {id:2,
    image:IMG2,
    title: 'Tip Calculator',
    description:"An app that helps user to calculate the tip for their meals or any service they provide",
    github: 'https://github.com/aanchal5535/tip-calculator_react',

  },
  {id:3,
    image:IMG3,
    title: 'Weather app',
    description: 'A weather forecasting application which shows current weather of a city along with different atmospheric variables. This app is created using Weather API.',
    github: 'https://github.com/aanchal5535/weather_app',
    
  },
  {id:4,
    image:IMG4,
    title: 'Advertisement Template For Lamp',
    description:'This is a template of an Advertisement which can be used for any kind of product related with lamps created by using HTML, CSS,JavaScript',
    github: 'https://github.com/aanchal5535/lamp_ad',

  },
  {id:5,
    image:IMG5,
    title: 'ToDo List  App',
    description:'This is a To Do list application where you can add tasks and delete them . This app is created using ReactJs',
    github: 'https://github.com/aanchal5535/todolist_react',
    
  },
  {id:6,
    image:IMG6,
    title: 'Gym Website',
    description:'This is a sstatic gym website created using ReactJS and TailwindCss',
    github: "https://github.com/aanchal5535/gym_website",

  },
  {id:7,
    image:IMG7,
    title: 'Travel Website',
    description:'This is a travel blog website where you can get information about different travel destination. In this website ReactJs and React Router.',
    github: "https://github.com/aanchal5535/travel_react/tree/main",

  },
  {id:8,
    image:IMG8,
    title: 'Portfolio website',
    description: "My personal portfolio website created with ReactJs and Css. Website: https://aanchalsubedi.onrender.com/",
    github: "https://github.com/aanchal5535/portfolio-using-react",
    website: "https://aanchalsubedi.onrender.com/"

  },
 
]





const Projects = () => {
  return (
    <section  className="w-full py-24 flex flex-col items-center justify-center bg-slate-50">
    <h1 className="text-4xl font-bold text-gray-800 mb-2">Projects</h1>
 <p className="text-gray-600">My Recent Works</p>

      <div data-aos="slide-down">
      <div className="grid grid-cols-2 mx-5 lg:grid-cols-4 gap-6 pt-4">
        {
          data.map(({id,image,title,github,description})=>{
            return(
            <article key={id} className="w-full h-[600px] shadow-2xl bg-white flex flex-col">
          <div className="border shadow-lg pb-4 rounded-lg hover:scale-105 duration-300">
            <img src={image} alt={title} className='w-full h-[300px] object-contain rounded-t-lg'/>
          </div>
        
          <div className='  flex flex-col items-center '>
          <h3 className='pt-5'>{title}</h3>
          <h5 className='p-5'>{description}</h5>
          <div className="w-fit bg-purple-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
          <a href={github} className='btn btn-primary'>GitHub</a>
          </div>
          
         </div>
       
        </article>
            )
          })
        }
      </div>
      </div>
    </section>
  )
}

export default Projects
