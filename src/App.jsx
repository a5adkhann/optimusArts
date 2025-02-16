import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainUI from './pages/MainUI'
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  
  return (
    <>
        <BrowserRouter>
              <Routes>
                  <Route path='/' element={<MainUI />}></Route>
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
