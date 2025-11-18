import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian/Accordian'
import StyleChanger from './components/styleChanger/StyleChanger'
import CategorySearch from './components/categorySearch/CategorySearch'
import SignUp from './components/router/SignUp'
import Login from './components/router/Login'
import Home from './components/router/Home'

function App() {

  return (
    <div className='root'>
      <CategorySearch/>
    </div>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<SignUp />} />
    //   <Route path="/login" element={<Login/>} />
    //   <Route path="/home" element={<Home/>} />
    //  </Routes>
    //  </BrowserRouter>
     
  )
}

export default App;
