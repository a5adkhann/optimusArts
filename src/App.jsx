import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainUI from './pages/MainUI'

const App = () => {
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
