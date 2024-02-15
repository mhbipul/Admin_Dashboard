import './App.css'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import { useState } from 'react'

function App() {
  const [opensideBarToggle,setOpensideBarToggle] = useState(false);

  const openSideBar = () =>{
    setOpensideBarToggle(!opensideBarToggle)
  }
 

  return (
    <div className='grid-container'>

      <Header openSideBar={openSideBar}/>
      <Sidebar opensideBarToggle={opensideBarToggle} openSideBar={openSideBar} />
      <Home  />

      
    
      
      
    </div>
  )
}

export default App
