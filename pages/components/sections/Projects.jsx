import React,{ useState,useEffect,useRef } from 'react'
import Image from 'next/image';
import { motion,useTransform,useScroll } from "framer-motion"
import { useSpring,animated } from "react-spring"
import { Project } from '../../../public/data/Projects.js';
import { GoPaperclip } from "react-icons/go";
import Lottie from 'lottie-react';
import portfolio from '../../../public/media/lotties/portfolio.json'
import blindcoding from '../../../public/media/lotties/blindcoding.json'
import optistock from '../../../public/media/lotties/optistock.json'
import base from '../../../public/media/lotties/optistock.json'
import sketch from '../../../public/media/lotties/sketch.json'
import { FaGithub } from "react-icons/fa";
const boxVariants = {
  initial:{
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
  },
  animate:{
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    transition: { duration:0.8,type:'tween',ease:'linear'}
  }
}

const imageVariants = {
  initial:{
    scale:1.1
  },
  animate:{
    scale:1,
    transition: { delay:0.5,duration:0.5}
  }
}

const Projects = () => {
  const [ view,setView ] = useState(false);
  const numRef = useRef(null)
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
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };    
  const { scrollYProgress } = useScroll()
  const toRight = useTransform(scrollYProgress,[0,1],[-200,200])
  const toLeft = useTransform(scrollYProgress,[0,1],[-100,-2000])  
  const toUp = useTransform(scrollYProgress,[0,1],[10,-100])
  const toUp2 = useTransform(scrollYProgress,[0,1],[100,-100])
  const toRight1 = useTransform(scrollYProgress,[0,1],[-1000,100])
  const toRight2 = useTransform(scrollYProgress,[0,1],[100,-1000])
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
  return (
    <div className='text-white bg-[#000] border-0 border-red-400'>  
      {/* <div className='m-auto mt-40 text-sm border-0 border-red-500 lg:w-1/5 sm1:w-3/5 md:w-2/5'>
        <div className='ml-auto border-0 border-red-500 xl:w-full sm1:w-full'>
          Archive of all my projects from
        </div>
      </div> */}
      
      <motion.div 
        className="mt-16 font-extrabold tracking-tighter text-white border-0 border-red-500 font-mine2 md:text-10xl sm1:text-8xl"
        style={{x:toRight}}
      >
        <span className='font-mine2'>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
        </span>
      </motion.div>      
      <motion.div 
        style={{x:toLeft}}
        className="tracking-tighter text-white border-0 border-red-500 sm1:mt-0 md:mt-4 md:text-10xl sm1:text-8xl"
      >
        <span className='font-mine2'>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          
        </span>
      </motion.div>

      <div className='m-auto mt-4 font-bold border-0 border-red-500 md:text-lg sm1:w-3/5 md:w-2/5 lg:w-1/5 sm1:text-md'>
        <div className='ml-auto text-xl text-center text-blue-400 border-0 border-red-500 xl:w-full sm1:w-full'>
          Projects
        </div>
      </div>
      {/* 1st proj */}
      <div className='mt-20 mb-20'>
        <Image src="/media/projects2/portfolio3.png" alt="" width={300} height={200} className='relative z-10 m-auto cursor-pointer' />
        <Image src="/media/projects2/portfolio2.png" alt="" width={300} height={200} className='sm1:hidden lg:block transition ease-in-out duration-300 absolute lg:left-[22.75rem] xl:left-[30.75rem] 2xl:left-[38.75rem] -mt-[38.25rem] z-10 m-auto hover:opacity-0 border-0 cursor-pointer border-red-500' />
        <div className='absolute z-20 whitespace-nowrap overflow-hidden -mt-[25rem] font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white sm1:-left-[5rem] lg:left-[28rem] xl:left-[48rem] tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem]'>01.</div>
        <Lottie animationData={sketch} className='absolute -rotate-45 md:block w-lg:1/2 sm1:hidden left-1/2 -mt-80 invert grayscale'/>
        <div className='flex mt-4 sm1:flex-col lg:flex-row'>
          <div className='mt-8 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={portfolio} className="overflow-hidden border-0 border-red-500 pt-36 sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div> 
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline underline-offset-8'>Portfolio <span className='text-blue-400'>Website</span></p>
                <a href={'https://github.com/anantJjain/Portfolio'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                  <div className='pt-2'>
                    <span className="text-4xl"><FaGithub /></span>
                    {/* <span>Visit Github Repo</span> */}
                  </div>
                </a>
              </div>
              <p className='mt-12'>
                This is a full-stack app—my portfolio website designed to showcase my skills and projects. Developed using Next.js and styled with TailwindCSS, the site boasts a seamless and visually appealing interface. The design, crafted in Figma, incorporates engaging animations and mockups with Jitter, Framer Motion, GSAP, and Lottie files. Scroll effects, driven by the Intersection Observer API, add a dynamic touch to the user experience.Delve into the about section to learn about my academic journey and college life. The project section details the technologies used in my various endeavors, providing insights into my technical expertise. Additionally, a contact form, powered by Nodemailer, facilitates direct communication, ensuring a straightforward way for users to reach out.
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>Next.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Framer Motion</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Lottie</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Figma</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Jitter</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Nodemailer</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Intersection Observer API</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Greensock animation (GSAP)</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>react-confetti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd proj */}
      <div className='mt-40 mb-20'>
        <Image src="/media/projects2/blindcoding2.png" alt="" width={300} height={200} className='relative z-10 m-auto transition duration-300 ease-in-out cursor-pointer hover:opacity-0' />
        <Image src="/media/projects2/blindcoding3.png" alt="" width={300} height={200} className='sm1:hidden lg:block absolute lg:left-[22.75rem] xl:left-[30.75rem] 2xl:left-[38.5rem] -mt-[38.25rem] z-0 m-auto cursor-pointer' />
        <div className='absolute z-20 whitespace-nowrap overflow-hidden -mt-[25rem] font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white sm1:left-[1rem] md:left-[15rem] lg:left-[7rem] tracking-tighter border-0 border-red-500 leading-[24rem]'>02.</div>
        <Lottie animationData={sketch} className='sm1:hidden lg:block absolute w-1/2 -rotate-45 -mt-80 invert -left-[5rem] grayscale'/>
        <div className='flex mt-4 sm1:flex-col lg:flex-row'> 
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 bg-black/20 rounded-3xl backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline border-0 border-red-500 underline-offset-8'>
                  Blind <span className='text-blue-400 '>Coding&nbsp;</span>
                </p>
                <a href={'https://github.com/anantJjain/ReverseCoding'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>  
                  <div className='pt-2'>
                    <span className="text-4xl"><FaGithub /></span>
                    {/* <span>Visit Github Repo</span> */}
                  </div>
                </a>
              </div>
              <p className='mt-12'>Blind Coding is one of the flagship event held in APOGEE(2023) which is the annual technical fest of BITS Pilani(Pilani Campus).The website was utilized as the central hub for the 2 hour long coding event where participants had to write code for a DSA-based problem without being able to see the actual problem statement instead they have to guess the problem and its code from the outputs generated by the downloadable executable files the webapp catered to 100+ users and provided easy access to the executable files through the website for coding-related problems, and for Hacker Rank link where the contest was hosted.</p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 space-x-2'>
                <p className='p-2 text-white bg-white/20 rounded-xl'>React.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Python</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Vanilla CSS</p>
              </div>
            </div>
          </div>
          <div className='border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={blindcoding} className="mt-10 overflow-hidden sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div>
        </div>
      </div>
      {/* 3rd proj */}
      <div className='mt-20 mb-20'>
        <Image src="/media/projects2/optistock1.png" alt="" width={300} height={200} className='relative z-10 m-auto cursor-pointer' />
        <Image src="/media/projects2/optistock2.png" alt="" width={300} height={200} className='sm1:hidden lg:block  transition ease-in-out duration-300 absolute lg:left-[22.75rem] xl:left-[30.75rem] 2xl:left-[38.75rem] -mt-[38.25rem] z-10 m-auto hover:opacity-0 border-0 cursor-pointer border-red-500' />
        <div className='absolute z-20 whitespace-nowrap overflow-hidden -mt-[25rem] font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white sm1:-left-[5rem] lg:left-[28rem] xl:left-[48rem] tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem]'>03.</div>
        <Lottie animationData={sketch} className='absolute -rotate-45 md:block w-lg:1/2 sm1:hidden left-1/2 -mt-80 invert grayscale'/>
        <div className='flex mt-4 sm1:flex-col lg:flex-row'>
          <div className='mt-24 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={optistock} className="overflow-hidden sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div> 
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline border-0 border-red-500 underline-offset-8'>
                  Opti<span className='text-blue-400'>Stock</span>
                </p>
                <a href={'https://github.com/anantJjain/OptiStock-Inventory_Management_Software'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                  <div className='pt-2'>
                    <span className="text-4xl"><FaGithub /></span>
                    {/* <span>Visit Github Repo</span> */}
                  </div>
                </a>
              </div>
              <p className='mt-12'>Introducing a robust full-stack inventory management app built with the MERN stack—enabling seamless user authentication through JWT. This application empowers users to effortlessly add and remove items from the inventory while efficiently tracking the availability of products in the store. Leveraging the power of Redux, the app ensures streamlined state management, enhancing the overall user experience. Experience a sophisticated solution for inventory control and management with user-friendly features tailored for efficient business operations.
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>React.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>MongoDB</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Express</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Redux</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Node.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Nodemailer</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>JWT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
