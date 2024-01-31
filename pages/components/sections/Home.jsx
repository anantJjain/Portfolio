import Image from "next/image";
import React, { useEffect,useRef,useState} from "react";
import { motion,useTransform,useScroll } from 'framer-motion'
import { useSpring,animated } from "react-spring"
import { gsap,CSSPlugin } from "gsap"
import Marquee from "react-fast-marquee";
import Lottie from "lottie-react";
import About from './About'
import Projects from './Projects'
import Parallax from "./Parallax";
import Contact from "./Contact";
import { Skills } from '../../../public/data/Skills'
import animationData from "../../../public/media/lotties/3dSpheres(Home).json";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub,FiInstagram } from "react-icons/fi";
gsap.registerPlugin(CSSPlugin)


const Home = () => {  
  const { scrollYProgress } = useScroll()
  const toRight = useTransform(scrollYProgress,[0,1],[-500,100])
  const toRight2 = useTransform(scrollYProgress,[0,1],[-100,800])
  const toRight3 = useTransform(scrollYProgress,[0,1],[-100,2000])
  const toLeft = useTransform(scrollYProgress,[0,1],[10,-1000])  
  const numRef = useRef(null)
  const [ view,setView ] = useState(false);
  
  const NumberFloat = ({ n }) => {
    const { number } = useSpring({
      from : { number:0.1 },
      number:n,
      delay:0,
      config:{mass:1,tension:30,friction:10},
    });
    return(
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">{ number.to((n)=> n.toFixed(1)) }</animated.div>
      ) 
    )        
  }
  const NumberInt = ({ n }) => {
    const { number } = useSpring({
      from : { number:0 },
      number:n,
      delay:0,
      config:{mass:1,tension:30,friction:10},
    });
    return(
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">{ number.to((n)=> n.toFixed(0)) }</animated.div>
      ) 
    ) 
  }
  const toggleAnimation = (e) => {
    if(e[0]?.isIntersecting){ 
      setView(true)
      console.log("visible"+view)  
    }
  }
  const options = {
    root:null,
    rootMargin:'0px',
    threshold:0.5
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(toggleAnimation,options)
    if(numRef.current){
      observer.observe(numRef.current)
    }
    return () => {
      if(numRef.current){
        observer.unobserve(numRef.current)
      }
    }
  },[])
  
  return (
    <>
      <div className="pb-40 overflow-hidden bg-black sm1:pt-16 md:pt-0">
        {/* Desktop Home */}
        {/* <div className='absolute mt-[40rem] h-[20rem] bg-blue-300/50 w-full rounded-full z-0 blur-[20rem] border-0 border-red-500'></div> */}
        <div className="relative h-screen bg-cover sm1:hidden md:block">
          <div className="w-4/5 pt-20 m-auto border-0 border-red-500 opacity-1" id="main">
            <div className="z-0 text-2xl font-normal tracking-tighter text-white border-0 border-red-500 font-change2">
              <div className="absolute right-0 w-2/5 text-5xl border-0 border-red-500 sm1:hidden lg:block">
                <Lottie animationData={animationData} className="z-0 grayscale invert" loop={true}/>
              </div>
              {/* Blur-bg */}
              {/* <div className='absolute ml-[40rem] mt-10 h-[50rem] bg-blue-400 w-2/5 z-0 blur-[20rem] border-2 border-red-500'></div> */}
              
              <motion.span className="sm1:text-4xl md:text-5xl lg:text-6xl absolute lg:top-[15rem] md:top-[15.5rem]">Hello</motion.span>
              <span className="border-0 border-red-500 absolute top-[16.5rem] xl:left-[18rem] lg:left-[15rem] md:left-[11.5rem]">&nbsp; I&apos;m </span>
              {/* <Lottie animationData={markercircle} loop={true} key={screen.id} className='absolute w-2/12 left-[16rem] top-[10rem] invert grayscale'/> */}
              <span className="text-blue-400 border-0 border-red-500 absolute top-[16.5rem] xl:left-[20.8rem] lg:left-[17.5rem] md:left-[14.2rem]">&nbsp;Anant Jain</span>
              {/* <Image src="/media/images/marker.png" alt="" width={200} height={200} className="mt-48 ml-28" /> */}
            </div>
            <div className="absolute z-10 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 top-[20rem] md:text-7xl sm3:text-7xl">FULLSTACK</div>
            <div className="z-30 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 font-stencil2 top-[20rem] absolute md:text-7xl sm3:text-7xl">FULLSTACK</div>
            <div className="absolute z-10 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 xl:top-[28rem] md:top-[25rem] lg:top-[26rem] md:text-7xl sm3:text-7xl"><span className="text-blue-400/30 font-stencil23">WEB</span><span className="sm1:block md:inline">&nbsp;DEVELOPER</span></div>
            <div className="absolute z-30 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 font-stencil2 md:top-[25rem] xl:top-[27.95rem] lg:top-[26rem] md:text-7xl sm3:text-7xl"><span className="text-blue-400/30 font-stencil23">WEB</span><span className="sm1:block md:inline">&nbsp;DEVELOPER</span></div>
          </div>
          <motion.div style={{ x:toRight3 }} className="tracking-tighter md:top-[24rem] lg:top-[21rem] absolute text-blue-400/30 z-0 overflow-hidden whitespace-nowrap text-9xl font-extrabold font-stencil24">design design design design design design design design design design design design design design design </motion.div>
          <motion.div style={{ x:toRight3 }} className="tracking-tighter md:top-[30rem] lg:top-[28rem] absolute text-blue-400/30 z-0 overflow-hidden whitespace-nowrap text-9xl font-extrabold font-stencil24">code code code code code code code code code code code code code code code code code code code code code code </motion.div>
          <motion.div style={{ x:toRight3 }} className="tracking-tighter md:top-[35rem] lg:top-[34.5rem] absolute text-blue-400/30 z-0 overflow-hidden whitespace-nowrap text-9xl font-extrabold font-stencil24">develop develop develop develop develop develop develop develop develop develop develop develop develop develop develop develop develop </motion.div>
          <motion.div style={{ x:toRight3 }} className="tracking-tighter md:top-[42rem] lg:top-[41rem] absolute text-blue-400/30 z-0 overflow-hidden whitespace-nowrap text-9xl font-extrabold font-stencil24">deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy deploy </motion.div>
          <div className="absolute w-4/5 m-auto border-0 border-red-500 top-[2rem] lg:left-[9rem] xl:left-[10rem] md:left-[5rem] z-20">
            <Image src="/media/images/meformal5.png" alt="" width={700} height={100} className="m-auto transition duration-300 transform grayscale"></Image>
          </div>
          <div className="absolute z-40 md:w-1/3 lg:w-1/4 xl:w-1/5 text-sm text-white md:left-[5rem] md:top-[31.5rem] lg:top-[34.5rem] xl:top-[38rem] xl:left-[10rem] lg:left-[6.5rem] sm3:w-1/2 sm3:top-[20rem] sm3:left-[5rem]">I am a passionate and creative <span className="font-bold text-blue-400">Full Stack Developer</span> with experience in creating highly polished Interfaces for the <span className="font-bold text-blue-400">web</span> & mobile</div>
          <div className="absolute z-30 flex space-x-3 lg:top-[35rem] xl:top-[38rem] md:right-8 xl:right-[10rem] md:top-[31rem]">
            {/* <div className="p-4 text-white border-2 border-blue-400 rounded-xl">Resume</div>
            <div className="p-4 text-white border-2 border-blue-400 rounded-xl">Chat with me</div> */}
            <a href="https://github.com/anantJjain" target="_blank" rel="noreferrer">
              <div className="text-white bg-black rounded-full sm1:text-xl md:text-2xl lg:text-3xl sm1:p-3 md:p-3 lg:p-3 hover:bg-white hover:text-black hover:scale-75 "><FiGithub /></div>
            </a>
            <a href="https://www.linkedin.com/in/anantjainBE/" target="_blank" rel="noreferrer">
              <div className="text-white bg-black rounded-full sm1:text-xl md:text-2xl lg:text-3xl sm1:p-3 md:p-3 lg:p-3 hover:bg-white hover:text-black hover:scale-75 "><FaLinkedinIn /></div>
            </a>
            <a href="https://www.instagram.com/anantjain.8k/" target="_blank" rel="noreferrer" >
              <div className="text-white bg-black rounded-full sm1:text-xl md:text-2xl lg:text-3xl sm1:p-3 md:p-3 lg:p-3 hover:bg-white hover:text-black hover:scale-75 "><FiInstagram /></div>
            </a>
          </div>
        </div>
        {/* Mobile Home */}
        <div id="home" className="relative max-h-screen bg-cover sm1:block md:hidden">
          <div className="w-full pt-20 m-auto border-0 border-red-500 opacity-1" id="main">
            <div className="absolute w-2/5 text-5xl border-0 border-red-500 -right-4">
              <Lottie animationData={animationData} className="grayscale invert" loop={true}/>
            </div>
            <motion.div style={{ x:toRight2 }} className="top-[12rem] absolute text-blue-400/50 overflow-hidden whitespace-nowrap font-stencil24 text-6xl font-extrabold">web web web web web web web web web web web web web web web web web web web web</motion.div>
            <motion.div style={{ x:toRight2 }} className="top-[15rem] absolute text-blue-400/50 overflow-hidden whitespace-nowrap font-stencil24 text-6xl font-extrabold">web web web web web web web web web web web web web web web web web web web web</motion.div>
            <motion.div style={{ x:toRight2 }} className="top-[18rem] absolute text-blue-400/50 overflow-hidden whitespace-nowrap font-stencil24 text-6xl font-extrabold">web web web web web web web web web web web web web web web web web web web web</motion.div>
            <motion.div style={{ x:toRight2 }} className="top-[21rem] absolute text-blue-400/50 overflow-hidden whitespace-nowrap font-stencil24 text-6xl font-extrabold">web web web web web web web web web web web web web web web web web web web web</motion.div>
            <motion.div style={{ x:toRight2 }} className="top-[24rem] absolute text-white/50 overflow-hidden whitespace-nowrap font-stencil24 text-6xl font-extrabold">web web web web web web web web web web web web web web web web web web web web</motion.div>
            <div className="relative z-10 w-full m-auto -ml-4 border-0 border-red-500">
              <Image src="/media/images/meformal5.png" alt="" width={800} height={100} className="m-auto transition duration-300 transform grayscale"></Image>
            </div>
            <div className="absolute z-0 font-extrabold tracking-tighter text-center text-white font-change2 sm1:text-5xl left-3 sm1:top-[14rem] md:top-[17rem] sm2:top-[15rem] sm2:text-6xl sm2:left-0 sm3:left-8">FULLSTACK</div>
            <div className="absolute z-20 font-extrabold tracking-tighter text-center text-white font-change2 font-stencil2 sm1:text-5xl left-3 sm1:top-[14rem] sm2:top-[15rem] md:top-[17rem] sm2:text-6xl sm2:left-0 sm3:left-8">FULLSTACK</div>
            <div className="absolute z-20 font-extrabold tracking-tighter text-center font-change2 text-blue-400 sm1:text-6xl sm1:left-3 sm1:top-[17rem] sm2:top-[18rem] md:top-[20rem] sm2:left-0 sm3:left-8">WEB</div>
            
            <div className="absolute z-0 text-5xl font-extrabold tracking-tighter text-white font-change2 left-3 sm1:top-[21rem] sm2:text-6xl sm2:left-0 sm3:left-8 sm2:top-[21rem]"><span className="">DEVELOPER</span></div>
            <div className="absolute z-20 text-5xl font-extrabold tracking-tighter text-white font-change2 font-stencil2 left-3 sm1:top-[21rem] sm2:text-6xl sm2:left-0 sm3:left-8 sm2:top-[21rem]"><span className="">DEVELOPER</span></div>
          </div>
          <div className="absolute z-40 w-11/12 text-sm text-white border-0 border-red-500 top-[28rem] sm3:left-[2rem] sm1:left-[1rem] sm1:hidden">Hello,I&apos;m <span className="font-bold text-blue-400">Anant Jain</span>,a passionate and creative <span className="font-bold text-blue-400">Full Stack Developer</span> with experience in creating highly polished Interfaces for the <span className="font-bold text-blue-400">web</span> & mobile</div>
          <div className="z-30 flex flex-row absolute sm1:top-[24rem] sm2:top-[25rem] md:top-[33rem] space-x-2 justify-end right-4">
            {/* <div className="p-2 mt-2 text-white rounded-full sm1:text-2xl"><FiGithub /></div>
            <div className="p-2 mt-2 text-white rounded-full sm1:text-2xl"><FiGithub /></div> */}
            <div className="p-2 mt-2 text-white rounded-full sm1:text-2xl"><FiGithub /></div>
            <div className="p-2 mt-2 text-white rounded-full sm1:text-2xl"><FaLinkedinIn /></div>
            <div className="p-2 mt-2 text-white rounded-full sm1:text-2xl"><FiInstagram /></div>
          </div>
        </div>
        <div id="about" className="pt-2 mt-24 border-0 border-red-500">
          <About />
        </div>
        <div className="sm1:hidden md:block">
          <Parallax />
        </div>
        
        {/* <div className="mt-20 font-extrabold text-center text-white text-8xl">My Skills</div> */}
        <motion.div 
        className="font-extrabold tracking-tighter text-white border-0 border-red-500 mt-44 font-mine2 md:text-10xl sm1:text-8xl"
        style={{x:toRight}}
      >
        <span className='font-mine2'>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
          <span>LANGUAGES</span>
          <span className="font-stencil-scrollnew">LANGUAGES</span>
        </span>
      </motion.div>      
      <motion.div 
        style={{x:toLeft}}
        className="tracking-tight text-white border-0 border-red-500 sm1:mt-0 md:mt-4 md:text-10xl sm1:text-8xl"
      >
        <span className='font-mine2'>
          <span>FRAMEWORKS</span>
          <span className="font-stencil-scrollnew">FRAMEWORKS</span>
          <span>FRAMEWORKS</span>
          <span className="font-stencil-scrollnew">FRAMEWORKS</span>
          <span>FRAMEWORKS</span>
          <span className="font-stencil-scrollnew">FRAMEWORKS</span>
          <span>FRAMEWORKS</span>
          <span className="font-stencil-scrollnew">FRAMEWORKS</span>
          <span>FRAMEWORKS</span>
          <span className="font-stencil-scrollnew">FRAMEWORKS</span>
          <span>FRAMEWORKS</span>
          
        </span>
      </motion.div>
        <div className="mt-4 text-xl font-bold tracking-tighter text-center text-blue-400">Technical Proficiency</div>
        <div className="flex w-4/5 m-auto overflow-hidden border-0 border-red-500 mask-edges flex-nowrap">
          <Marquee speed={10}>
            <div className="flex mt-20 space-x-20 animate-marquee">
              {
                Skills.map((skill)=>{
                  return(
                    <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                      <Image src={skill.url} alt="" width={150} height={150} className="p-2 invert-75 rounded-0 aspect-square"/>
                      <div className="w-3/5 p-2 m-auto mt-2 font-normal tracking-tighter text-center text-white border-0 border-blue-400 rounded-xl bg-white/20">{ skill.name }</div>
                    </div>
                  )
                })
              }
            </div>
            <div className="flex pl-20 mt-20 space-x-20 animate-marquee">
              {
                Skills.map((skill)=>{
                  return(
                    <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                      <Image src={skill.url} alt="" width={150} height={150} className="p-2 invert-75 rounded-0 aspect-square"/>
                      <div className="w-3/5 p-2 m-auto mt-2 font-normal tracking-tighter text-center text-white border-0 border-blue-400 rounded-xl bg-white/20">{ skill.name }</div>
                    </div>
                  )
                })
              }
            </div>
            <div className="flex pl-20 mt-20 space-x-20 animate-marquee">
              {
                Skills.map((skill)=>{
                  return(
                    <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                      <Image src={skill.url} alt="" width={150} height={150} className="p-2 invert-75 rounded-0 aspect-square"/>
                      <div className="w-3/5 p-2 m-auto mt-2 font-normal tracking-tighter text-center text-white border-0 border-blue-400 rounded-xl bg-white/20">{ skill.name }</div>
                    </div>
                  )
                })
              }
            </div>
            <div className="flex pl-20 mt-20 space-x-20 animate-marquee">
              {
                Skills.map((skill)=>{
                  return(
                    <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                      <Image src={skill.url} alt="" width={150} height={150} className="p-2 invert-75 rounded-0 aspect-square"/>
                      <div className="w-3/5 p-2 m-auto mt-2 font-normal tracking-tighter text-center text-white border-0 border-blue-400 rounded-xl bg-white/20">{ skill.name }</div>
                    </div>
                  )
                })
              }
            </div>
          </Marquee>
        </div>  
        <div id="projects" className="pt-2 mt-56 border-0 border-red-500">
          <Projects />
        </div>
        <div id="contact" className="pt-2 mt-40 border-0 border-red-500">
          <Contact />
        </div>
      </div>
    </>
  )
}
export default Home
