import React from 'react';
import IMG1 from '../../assests/Image1.jpg'
import IMG2 from '../../assests/Image2.png'
import IMG3 from '../../assests/Image3.jpg'
import IMG4 from '../../assests/Image4.png'
import IMG5 from '../../assests/Image5.jpg'
import IMG6 from '../../assests/Image6.png'
import IMG7 from '../../assests/scene.jpg'

const data=[
  {id:1,
  image:IMG1,
  title: 'SignUp-LogIn Form ',
  github: 'https://github.com/aanchal5535/signup-login_using_react',
  
  },
  {id:2,
    image:IMG2,
    title: 'Tip Calculator',
    github: 'https://github.com/aanchal5535/tip-calculator_react',

  },
  {id:3,
    image:IMG3,
    title: 'Weather app',
    github: 'https://github.com/aanchal5535/weather_app',
    
  },
  {id:4,
    image:IMG4,
    title: 'Advertisement Template For Lamp',
    github: 'https://github.com/aanchal5535/lamp_ad',

  },
  {id:5,
    image:IMG5,
    title: 'ToDo List  App',
    github: 'https://github.com/aanchal5535/todolist_react',
    
  },
  {id:6,
    image:IMG6,
    title: 'Gym Website',
    github: "https://github.com/aanchal5535/gym_website",

  },
  {id:7,
    image:IMG7,
    title: 'Travel Website',
    github: "https://github.com/aanchal5535/travel_react/tree/main",

  },
  
 
]





const Projects = () => {
  return (
    <section  className="w-full py-24 flex flex-col items-center justify-center bg-slate-50">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
            <article key={id} className="w-full h-[450px] shadow-2xl bg-white flex flex-col">
          <div className="border shadow-lg pb-4 rounded-lg hover:scale-105 duration-300">
            <img src={image} alt={title} className='w-full h-[300px] object-cover rounded-t-lg'/>
          </div>
        
          <div className='  flex flex-col items-center '>
          <h3 className='pt-5'>{title}</h3>
          <div className="w-fit bg-purple-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
          <a href={github} className='btn btn-primary'>GitHub</a>
          </div>
         </div>
       
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
