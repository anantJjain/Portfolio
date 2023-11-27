import React, { useEffect } from "react";
import { motion,useAnimation } from 'framer-motion'
import { useTransform,useScroll } from 'framer-motion';
import Image from "next/image";
import { useHover } from "@uidotdev/usehooks";
import { useMousePosition } from "../../../utils/useMousePosition";

const Home = () => {  
  const [ref, hovering] = useHover();
  const { xPos,yPos } = useMousePosition()
  const size = 40;
  
  // const controls = useAnimation();
  // const xPosition = hover ? xPos-innerWidth/2 : 0
  // const yPosition = hover ? yPos-innerHeight/2 : 0
  
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress,[0,1],[-1000,-5000])
  return (
    <div className="relative mt-24 border-0 border-red-500 " id="home">
      <div> 
      <div className='pt-20 m-auto text-center border-0 border-green-400 md:w-4/5 sm1:w-full'>
        <span className='mb-2 text-white border-0 border-red-500 lg:text-3xl font-extralight tracking md:text-2xl sm3:text-xl sm2:text-lg sm1:text-md md:z-50 md:relative'>👋,my name is <span className="font-normal text-blue-400">Anant</span> and I am a</span>
        <div className="font-bold tracking-tighter border-0 border-red-500 lg:text-8xl xl:text-10xl md:text-8xl sm3:text-7xl sm3:mt-4 sm2:text-5xl sm2:mt-2 sm1:text-5xl sm1:mt-2 sm1:pl-2 md:mt-24 lg:flex xl:pl-20">
          <div className='text-white border-0 border-red-500 md:w-fit lg:w-full sm1:pt-2'>Web</div>
          <div className={`text-blue-400 border-0 border-red-500 md:w-fit md:-pl-20 md:relative md:z-50 lg:w-full lg:pl-10 lg:pt-2 font-stencil-home`}> Developer</div>
          <div className={`text-blue-400 border-0 border-red-500 md:w-fit md:-pl-20 md:relative md:z-50 lg:w-full lg:pl-0 lg:pt-2 sm1:hidden lg:block lg:opacity-0`}> Developer</div>
        </div>
        <div className={`border-0 border-blue-500 pt-4 font-bold tracking-tighter text-white font-7 transition duration-300 xl:text-10xl lg:-mt-2 xl:-mt-4 lg:text-8xl sm3:text-7xl md:text-7xl sm1:text-5xl`}>
            <span className="text-blue-400 border-0 border-blue-400 font-stencil-nonhome sm1:text-5xl md:text-6xl sm1:text-white">&</span>
            <span className="border-0 border-blue-400 md:pl-8 sm2:pl-2 sm1:pl-4 sm1:relative sm1:z-50">Web <span className="relative sm1:text-blue-400 sm1:z-50">Designer</span></span>
        </div>
      </div>
      <motion.div 
        ref={ref}
        className="relative z-10 flex justify-center m-auto xl:-mt-[28em] cursorChange box-shadow-inside lg:-mt-[24em] md:-mt-[25em] sm3:-mt-[5em] sm2:-mt-[2em] sm1:-mt-[4em] border-0 border-blue-500 sm1:w-3/5 md:w-4/5 xl:w-fit"
      >
        <Image src="/media/images/me.png" alt="" width={400} height={200} className={`rounded-2xl sm1:z-10 image-mask md:hidden ${hovering ? '' : ''} }`}></Image>
        <Image src="/media/images/me.png" alt="" width={420} height={200} className={`rounded-2xl image-mask sm1:z-10  sm1:hidden md:block  ${hovering ? '-mt-20' : ''} }`}></Image>
      </motion.div>
      
      <div className="absolute z-20 ml-40 font-extrabold tracking-tighter text-white transform md:text-5xl lg:text-6xl xl:-mt-48 whitespace-nowrap -rotate-6 font-stencil-home-smallText lg:-mt-72 md:-mt-64 sm1:-mt-[9em] sm1:text-3xl sm3:text-4xl">
        <motion.div className="" style={{x}}>I design and code and aims to do it well . I design and code and aims to do it well . I design and code and aims to do it well .</motion.div>
      </div>
      <div className="absolute z-20 ml-40 lg:text-6xl md:text-5xl font-extrabold tracking-tighter text-blue-400 transform xl:-mt-[3.5em] whitespace-nowrap -rotate-6 lg:-mt-[5em] md:-mt-[5.7em] sm1:-mt-[9.3em] sm1:text-3xl sm3:text-4xl">
        <motion.div className="" style={{x}}>Hello there! Delighted to have you here. I&apos;m on a quest to bring ideas to life through code and design. Feel free to navigate through my work, where simplicity meets innovation.</motion.div>
      </div>
      </div> 
      <motion.div 
        className="absolute min-w-full min-h-screen text-white border-0 border-red-500 top-12 text-9xl homemask"
        animate={{
          WebkitMaskPosition: `${xPos-size/2}px ${yPos-3.3*size}px`,
          WebkitMaskSize:`${size}px`
        }}
        transition={{ type:'tween',ease:'backOut'}}
      > 
      </motion.div>
      
    </div>
  )
}
export default Home