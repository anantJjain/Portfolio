import { useState } from 'react'
import Link from 'next/link'
import { Sling as Hamburger } from 'hamburger-react'
import Navbar from './Navbar'

const Header = () => { 
  const [ isOpen,setOpen ] = useState(false)
  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen)
    console.log(isOpen)
  }
  return (
    <div>
      <div className={`w-full md:p-4 sm1:p-2 overflow-hidden border-0 border-red-500 z-[60] box-shadow-out-navbar fixed  ${ isOpen ? 'bg-blue-400' : 'backdrop-blur-md ' }`}>
        {/* Desktop Navbar */}
        <div className='p-2 m-auto tracking-widest text-white border-0 border-red-500 md:justify-around md:text-lg lg:w-3/5 font-extralight md:w-4/5 sm1:hidden md:flex'>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#home" alt="">Home</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#about" alt="">About</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#projects" alt="">Projects</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href="#contact" alt="">Contact</Link>
          <Link className="transition duration-300 hover:transform hover:translate-y-[-0.2rem] font-stencil-navbar" href='https://drive.google.com/file/d/1KgTNsw2jPpuE-QCrm2txd_l8RejSsj-M/view?usp=sharing' target="_blank" alt="">Resume</Link>
        </div>
        {/* Mobile Navbar */}
        <div className="sm1:block md:hidden">
          <div className='p-0 bg-black w-fit rounded-4xl'>
            <Hamburger color={'#fff'} toggled={isOpen} toggle={toggleMenu} rounded size={24} className=''/>
          </div>
          {
            isOpen && (
              <div className='w-full bg-blue-400 border-0 border-red-500'>
                <Navbar toggleMenu={toggleMenu}/>
              </div>  
            )  
          }
        </div>
        
      </div>
    </div>
  )
}

export default Header