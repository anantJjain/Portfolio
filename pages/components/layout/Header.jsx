import Link from 'next/link'
import { Sling as Hamburger } from 'hamburger-react'
import Navbar from './Navbar'
import { motion,AnimatePresence } from 'framer-motion'

const sliderVariants = {
  initial:{
    scaleY:0,
    opacity:0,
  },
  animate:{
    scaleY:1,
    opacity:1,
    transition:{
      duration:0.2,
      ease:[0.12,0,0.39,0]
    }
  },
  exit:{
    scaleY:0,
    opacity:0,
    transition:{
      delay:1,
      duration:0.5,
      ease:[0.22,1,0.36,1]
    }
  }
}

const Header = ({ isOpen,toggleMenu }) => { 
  return (
    <div>
      <div className={`w-full md:p-4 overflow-hidden border-0 border-red-500 z-[60] box-shadow-out-navbar fixed  ${ isOpen ? 'bg-black' : 'backdrop-blur-md' }`}>
        {/* Desktop Navbar */}
        <div className='p-4 m-auto tracking-widest text-white border-0 border-red-500 md:justify-around md:text-lg lg:w-3/5 font-extralight md:w-4/5 sm1:hidden md:flex'>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#home" alt="">Home</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#about" alt="">About</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#projects" alt="">Projects</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#contact" alt="">Contact</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href='https://drive.google.com/file/d/1KgTNsw2jPpuE-QCrm2txd_l8RejSsj-M/view?usp=sharing' target="_blank" alt="">Resume</Link>
        </div>
        {/* Mobile Navbar */}
        <div className="sm1:block md:hidden">
          <div className='p-2 bg-black w-fit rounded-4xl'>
            <Hamburger color={'#fff'} toggled={isOpen} toggle={toggleMenu} rounded size={24} className=''/>
          </div>
          <AnimatePresence>
          {
            isOpen && (
                <motion.div 
                  variants={sliderVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className='w-full origin-top bg-black border-0 border-red-500'
                >
                  <Navbar toggleMenu={toggleMenu}/>
                </motion.div>  
            )  
          }
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  )
}

export default Header