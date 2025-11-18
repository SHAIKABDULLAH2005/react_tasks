import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian/Accordian'
import StyleChanger from './components/styleChanger/StyleChanger'

function App() {

  return (
    <div className='App'>
      {/* <Accordian/> */}
      <StyleChanger/>
    </div>
  )
}

export default App;
