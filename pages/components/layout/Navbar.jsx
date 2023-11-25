import { useState,useEffect,useRef } from 'react'
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import { motion } from 'framer-motion'
import Link from "next/link"
import { GrLinkedinOption,GrGithub } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { MdEmail} from 'react-icons/md'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
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

const Navbar = ({ menuState,menuMethod }) => {
    const [vantaEffect,setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    
    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(
            GLOBE({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                backgroundColor:0x60A5FA,
                color:0x000000,
                size:1.5
                
            })
          );
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy();
        };
      }, [vantaEffect]);
    
    const toggleMenu = () => {
        props.menuMethod(!props.menuState)
        console.log(props.menuState)
    } 
    
    return (        
        <motion.div 
            ref={vantaRef}
            className={`grid h-screen grid-cols-2 pt-20 m-auto overflow-hidden text-white bg-blue-400 lg:pt-32 sm1:grid-cols-1 lg:grid-cols-2 ${menuState ? '' : 'slide-right'}`} 
            variants={sliderVariants} 
            initial="initial"
            animate="animate"
        >
            <motion.div 
                variants={menuVariants}
                initial="initial"
                whileInView="animate" 
            >
                <div className="flex flex-col w-1/2 m-auto font-bold text-black border-red-500 border-2flex sm1:space-y-4 sm3:space-y-6 md:space-y-10 sm1:w-full sm1:pl-6 sm1:text-3xl sm3:text-4xl md:text-5xl md:w-3/4">
                    {
                        MenuItems.map( (item) => {
                            return(
                                <Link className='mt-8 transition delay-200' href={`#${item.linkedSection}`} scroll={false} key={item.id}>
                                    <motion.button
                                        variants={linkVariants}
                                        initial="initial"
                                        whileHover="animate"
                                        onClick={toggleMenu}
                                    >
                                        <span className='text-6xl tracking-tighter'>{item.name}</span> &nbsp;
                                    </motion.button>
                                </Link>
                            )
                        })
                    }
                </div>
            </motion.div>
            
            <motion.div 
                className="border-2 border-red-500 sm1:-mt-56 md:-mt-36 lg:mt-0"
                variants={menuVariants}
                initial="initial"
                whileInView="animate" 
            >
                <div className="flex justify-between text-black border-2 border-red-500 sm1:mt-4 sm1:w-4/5 sm1:text-3xl md:w-3/5 md:text-4xl lg:w-3/5 xl:w-2/5">
                    <motion.a 
                        variants={iconVariants}
                        initial="initial"
                        whileHover="animate"
                        href="https://www.linkedin.com/in/anantjainBE/" target="_blank" className="hover:text-white"><GrLinkedinOption /></motion.a>
                    <motion.a 
                        variants={iconVariants}
                        initial="initial"
                        whileHover="animate"
                        href="https://github.com/anantJjain" target="_blank" className="hover:text-white"><GrGithub/></motion.a>
                    <motion.a 
                        variants={iconVariants}
                        initial="initial"
                        whileHover="animate"
                        href="https://www.instagram.com/anantjain.8k/" target="_blank" className="hover:text-white"><RiInstagramFill /></motion.a>
                    <motion.a 
                        variants={iconVariants}
                        initial="initial"
                        whileHover="animate"
                        href="mailto:anantjain.8k@gmail.com" target="_blank" className="hover:text-white"><MdEmail /></motion.a>
                </div>
                <div className="border-2 border-red-500 md:mt-12 sm1:mt-8 lg:mt-20">
                    <Link 
                        className="text-5xl font-bold text-black transition delay-200" 
                        href='https://drive.google.com/file/d/1KgTNsw2jPpuE-QCrm2txd_l8RejSsj-M/view?usp=sharing'
                        onClick={toggleMenu}
                    >
                        <motion.button 
                            variants={linkVariants2}
                            initial="initial"
                            whileHover="animate"
                            className="sm1:w-full sm1:text-3xl sm3:text-4xl md:text-5xl md:w-full" onClick={toggleMenu}
                        >
                            <span className='text-6xl tracking-tighter'>Resume</span>    
                        </motion.button>
                    </Link>
                </div>
                
            </motion.div>
        </motion.div>    
  )
}

export default Navbar
