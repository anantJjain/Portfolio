import Link from 'next/link'
import { useState,useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = (props) => { 
  return (
    <div className={props.menuState ? 'bg-blue-400 sm1:pr-4 sm1:pl-6 md:pr-20 md:pl-20' : 'bg-black sm1:pr-4 sm1:pl-6 md:pr-20 md:pl-20'}>
          <div className="flex justify-between w-full text-white">
              {/* <div className="text-left">
                <motion.svg 
                  className="" version="1.1" xmlns="http://www.w3.org/2000/svg" width="51px" height="100px">
                  <path fill={props.menuState ? '#000':'#42a5f5'} d="M21.07421875,73.984375l-2.0703125-6.796875l-10.41015625,0l-2.0703125,6.796875l-6.5234375,0l10.078125-28.671875l7.40234375,0l10.1171875,28.671875l-6.5234375,0z M17.55859375,62.109375q-2.87109375-9.23828125-3.232421875-10.44921875t-0.517578125-1.9140625q-0.64453125,2.5-3.69140625,12.36328125l7.44140625,0z M30.9525390625,82.3828125q-2.05078125,0-3.57421875-0.4296875l0-5.0390625q1.5625,0.390625,2.8515625,0.390625q1.9921875,0,2.8515625-1.240234375t0.859375-3.876953125l0-26.7578125l6.0546875,0l0,26.71875q0,5-2.28515625,7.6171875t-6.7578125,2.6171875z"/>
                  <path fill={props.menuState ? '#000':'#42a5f5'} d=""/>
                </motion.svg>
              </div> */}
              <div className="fixed z-10 mt-6 text-right bg-black sm1:p-0 lg:p-2 sm1:right-2 md:right-6 w-fit rounded-4xl">
                <Hamburger color={props.menuState ? '#fff' : '#60a5fa'} toggled={props.menuState} toggle={props.menuMethod} rounded size={24} />
              </div>
          </div>
      
        {/* } */}
    </div>
    
  )
}

export default Header
