import React from 'react'
import Hero from './components/Hero'
import Landing from './components/Landing'
import Skills from './components/Skills'
import Testimonals from './components/Testimonals'




const Home = () => {
  return (
    <div>
      <Landing/>
      <Skills/>
    <Hero/>
    <Testimonals/>
    </div>
  )
}

export default Home
