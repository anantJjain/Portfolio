import { useState,useEffect,useRef } from 'react'
import { motion } from 'framer-motion'
import Link from "next/link"
import { GrLinkedinOption,GrGithub } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { MdEmail} from 'react-icons/md'
import { MenuItems } from '../../../public/data/MenuItems';

const iconVariants = {
    initial:{
        rotate:0
    },
    animate:{
        rotate:[-90,0,90,0],
        transition:{ type: 'spring',stiffness:100}
    }
}
const menuVariants = {
    initial:{
        y:0,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.8,
            type:'easeInOut',
        }
    },
  };
const linkVariants={
    initial:{
        x:0,
        y:0
    },
    animate:{
        x:10,
        y:-5,
        color:'white'
    },
    transition:{
        type:'spring',
        stiffness:1000,
        duration:10
    }
}
const linkVariants2={
    initial:{
        y:0,
    },
    animate:{
        y:5,
        color:'white'
    }
}
const sliderVariants ={
    initial:{
        height:0,
    },
    animate: (id) => ({
        height:800,
        transition:{ delay:0.2*id,type: 'tween',stiffness:150},
        duration:10
    }),
}

const Navbar = ({ menuState,toggleMenu }) => {
    return (        
        <motion.div className='min-h-screen border-0 border-red-500 pt-28'>
                <div className="mt-12 font-extrabold text-white">
                    {
                        MenuItems.map( (item) => {
                            return(
                                <div key={item.id} className='m-auto text-center sm1:space-y-4 sm3:space-y-6 md:space-y-10 sm1:w-full sm1:text-3xl sm3:text-4xl md:text-5xl md:w-3/4'>
                                    <Link className='transition delay-200 border-0 border-red-500' href={`#${item.linkedSection}`} scroll={false}>
                                        <motion.button
                                            variants={linkVariants}
                                            initial="initial"
                                            whileHover="animate"
                                            onClick={toggleMenu}
                                            className=''
                                        >
                                            <div className='text-4xl'>{item.name}</div> &nbsp;
                                        </motion.button>
                                    </Link>
                                </div>    
                            )
                        })
                    }
                </div>
                <div className='mt-0 text-4xl font-extrabold text-center text-white'>
                    <div>
                        <Link 
                            className="transition delay-200" 
                            href='https://drive.google.com/file/d/1KgTNsw2jPpuE-QCrm2txd_l8RejSsj-M/view?usp=sharing'
                            onClick={toggleMenu}
                            target='_blank'
                        >
                            <motion.button 
                                variants={linkVariants2}
                                initial="initial"
                                whileHover="animate"
                                className="" onClick={toggleMenu}
                            >
                                <span className=''>Resume</span>    
                            </motion.button>
                        </Link>
                    </div>
                    <div className='flex justify-between w-3/4 m-auto mt-16 text-3xl'>
                        <motion.a 
                            variants={iconVariants}
                            initial="initial"
                            whileHover="animate"
                            href="https://www.linkedin.com/in/anantjainBE/" target="_blank" className=""><GrLinkedinOption /></motion.a>
                        <motion.a 
                            variants={iconVariants}
                            initial="initial"
                            whileHover="animate"
                            href="https://github.com/anantJjain" target="_blank" className=""><GrGithub/></motion.a>
                        <motion.a 
                            variants={iconVariants}
                            initial="initial"
                            whileHover="animate"
                            href="https://www.instagram.com/anantjain.8k/" target="_blank" className=""><RiInstagramFill /></motion.a>
                        <motion.a 
                            variants={iconVariants}
                            initial="initial"
                            whileHover="animate"
                            href="mailto:anantjain.8k@gmail.com" target="_blank" className=""><MdEmail /></motion.a>
                        </div>
                </div>
        </motion.div>    
  )
}

export default Navbar
