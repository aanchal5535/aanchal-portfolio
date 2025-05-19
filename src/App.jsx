import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'
import AOS from 'aos';
import "aos/dist/aos.css"
import ErrorPage from './components/ErrorPge'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects/Projects'
import Blog from './components/blog/Blog';
import BlogDetail from './components/blog/Blogdetail';

const App = () => {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration : 900 ,
      easing :"ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[])
  return (
    <>
      <Router>
  <Navbar/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
  <Footer/>
</Router>
    </>
  )
}

export default App
