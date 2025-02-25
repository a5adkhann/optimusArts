import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainUI from './pages/MainUI'
import Aos from 'aos';
import "aos/dist/aos.css";
import About from './pages/About';
import TopSection from './components/Header/TopSection';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  
  return (
    <>
        <BrowserRouter>
        <TopSection />
            <Navbar />
              <Routes>
                  <Route path='/' element={<MainUI />}></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/services' element={<Services />}></Route>
                  <Route path='/contact' element={<Contact />}></Route>
              </Routes>
              <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
