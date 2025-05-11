import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import styles for AOS

import Hero from './components/Hero';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Testimonals from './components/Testimonals';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Trigger animation only once when it comes into view
    });
  }, []);

  return (
    <div>
      <Landing />
      <Skills />
      <Hero />
      <Testimonals />
    </div>
  );
}

export default Home;
