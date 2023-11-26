import { useState } from "react"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Home from "./components/sections/Home"
import Parallax from "./components/sections/Parallax"
import Projects from "./components/sections/Projects"
import Skill from "./components/sections/Skill"
import Header from "./components/layout/Header"
import Navbar from "./components/layout/Navbar"

const Main = () => {
  const [ isOpen,setOpen ] = useState(true)
  const toggleMenu = () => {
    setOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <div className="overflow-hidden">
        <div>
          <Header isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div className={`${isOpen ? 'block': 'hidden'}`}>
          <Home />
          <About />
          <div className="sm1:hidden md:block">
            <Parallax />
          </div>
          <Skill />
          <Projects />
          <Contact />
        </div>
        <div className={`${isOpen ? 'hidden': 'block'}`}>
          <Navbar isOpen={isOpen} toggleMenu={toggleMenu}  />
        </div>
    </div>
  )
}
export default Main