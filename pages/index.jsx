import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Home from "./components/sections/Home"
import Parallax from "./components/sections/Parallax"
import Projects from "./components/sections/Projects"
import Skill from "./components/sections/Skill"
import Header from "./components/layout/Header"

const Main = () => {
  return (
    <div className="overflow-hidden">
        <Header />
        <Home />
        <About />
        <Parallax />
        <Skill />
        <Projects />
        <Contact />
    </div>
  )
}
export default Main