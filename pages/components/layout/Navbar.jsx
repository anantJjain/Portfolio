import Link from "next/link"
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { GrLinkedinOption,GrGithub } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { MdEmail} from 'react-icons/md'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown,faArrowRight,faArrowUp, faArrowUpRightDots,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect,useRef } from 'react'
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";


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

const Navbar = (props) => {
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
            className="grid h-screen grid-cols-2 m-auto text-white bg-blue-400" 
            variants={sliderVariants} 
            initial="initial"
            animate="animate"
        >
            <motion.div 
                variants={menuVariants}
                initial="initial"
                whileInView="animate" 
            >
                <div className="w-1/2 m-auto mt-10 font-semibold tracking-widest text-black">NAVIGATION</div>
                <div className="flex flex-col w-1/2 m-auto space-y-10">
                    <Link className="mt-8 text-5xl font-bold text-black" href="#home">
                        <motion.button
                            variants={linkVariants}
                            initial="initial"
                            whileHover="animate"
                            onClick={toggleMenu}
                        >
                            <span>HOME</span> &nbsp;
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl text-black"/>
                        </motion.button>
                    </Link>
                    
                    <Link className="mt-8 text-5xl font-bold text-black transition delay-200" href="#about">
                        <motion.button
                            variants={linkVariants}
                            initial="initial"
                            whileHover="animate"
                            onClick={toggleMenu}
                        >
                            <span>ABOUT</span> &nbsp;
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl text-black"/>
                        </motion.button>
                    </Link>
                    
                    <Link className="mt-8 text-5xl font-bold text-black transition delay-200" href="#projects">
                        <motion.button
                            variants={linkVariants}
                            initial="initial"
                            whileHover="animate"
                            onClick={toggleMenu}
                        >
                            <span>PROJECTS</span> &nbsp;
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl text-black"/>
                        </motion.button>
                    </Link>
                    
                    <Link className="mt-8 text-5xl font-bold text-black transition delay-200" href="#contact">
                        <motion.button
                            variants={linkVariants}
                            initial="initial"
                            whileHover="animate"
                            onClick={toggleMenu}
                        >
                            <span>CONTACT</span> &nbsp;
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl text-black"/>
                        </motion.button>
                    </Link>
                
                </div>
            </motion.div>
            <motion.div 
                className=""
                variants={menuVariants}
                initial="initial"
                whileInView="animate" 
            >
                <div className="mt-10 ml-20 font-semibold tracking-widest text-black">ON THE WEB</div>
                <div className="flex justify-between w-2/5 m-auto mt-10 ml-20 text-4xl text-black">
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
                <div className="mt-20">
                    <Link 
                        className="ml-20 text-5xl font-bold text-black transition delay-200" 
                        href='https://drive.google.com/file/d/1M_DXhtAgd0_StuxAzvUpi4INsVqN6I2s/view?usp=share_link'
                        passHref={true} //to pass external links
                        target="_blank"
                        onClick={toggleMenu}
                    >
                        <motion.button 
                            variants={linkVariants2}
                            initial="initial"
                            whileHover="animate"
                            className="" onClick={toggleMenu}
                        >
                            RESUME &nbsp;<FontAwesomeIcon icon={faArrowDown} className="text-2xl font-extrabold text-black" />    
                        </motion.button>
                    </Link>
                </div>
                
            </motion.div>
        </motion.div>    
  )
}

export default Navbar
