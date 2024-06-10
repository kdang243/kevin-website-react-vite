import { useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import Dropdown from './components/Dropdown'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  const [dropDownOpen, setdropDownOpen] = useState(false)

  useEffect( () => {
    function closeMenu() {
      if (window.innerWidth > 800 && dropDownOpen) {
        setdropDownOpen(false)
      }
    }
    window.addEventListener('resize', closeMenu)

    return () => {
      window.removeEventListener('resize', closeMenu)
    }
  })

  function toggle() {
    setdropDownOpen(!dropDownOpen)
  }
  
  return (
    <>
      <Navbar toggle={toggle} dropDownOpen={dropDownOpen}></Navbar>
      <Dropdown toggle={toggle} dropDownOpen={dropDownOpen}></Dropdown>
      <Hero></Hero>
      <About></About>
    </>
    
  )
}

export default App