import { useState } from 'react'
import "./App.css"

// import SignUp from './components/signUp/SignUp'

import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar/Navbar'


function App() {


  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
    </div>
  )
}


export default App
