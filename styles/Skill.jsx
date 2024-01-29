import React from 'react'
import { motion } from 'framer-motion'
import { useTransform,useScroll } from 'framer-motion';
import Image from 'next/image'
import { Skills } from '../public/data/Skills' 
import { useMousePosition } from '../utils/useMousePosition';
import { useHover } from '@uidotdev/usehooks';
import Lottie from "lottie-react";
import animationData from "../public/media/lotties/tech.json";

const fadeInAnimationVariants={
  initial:{
    opacity:0,
    y:100
  },
  animate: (id) => ({
    opacity:1,
    y:0,
    transition:{ delay:0.2*id,type:'easeInOut' }
  })
}

const Skill = () => {
  
  const { xPos,yPos } = useMousePosition()
  const [ ref,isHover] = useHover()
  const size = isHover ? 300 : 40;
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress,[0,1],[-2000,2000])
  return (
    <>
    <div className='overflow-hidden bg-black border-t-0 border-black'>
      <div>
        <div className='flex justify-center w-full font-extrabold text-black uppercase bg-cream sm3:p-2 md:text-4xl tracking-tighteruppercase sm3:text-2xl sm1:text-xl sm1:p-2'>languages & frameworks</div>
        <motion.div
          style={{x}} 
          className='mt-8 font-bold tracking-tighter xl:text-9xl lg:text-8xl leading-2 md:text-7xl sm1:hidden md:block'
        >
            <span className='text-cream'>Technological</span>&nbsp;
            <span className='mt-10 font-bold tracking-tighter text-cream font-stencil-skill'>Toolbox.</span>
          <motion.div 
            animate={{
              WebkitMaskPosition: isHover ? `${xPos-size}px ${yPos-size}px` : `${xPos-6*size}px ${yPos-3*size}px` ,
              WebkitMaskSize:`${size}px`
            }}
            transition={{ type:'tween',ease:'backOut'}}
            className='font-bold tracking-tighter text-center lg:p-20 xl:-mt-52 lg:-mt-48 xl:text-9xl lg:text-8xl mask md:text-7xl md:-mt-48 md:p-16'
          >
            <p ref={ref} className='pb-10 overflow-hidden xl:-ml-72 lg:-ml-80 md:-ml-96 sm1:opacity-0 md:opacity-100'>Technical Proficiency.</p>
          </motion.div>
        </motion.div>
        <div className='mt-8 font-bold tracking-tighter text-center text-white sm1:text-4xl md:hidden sm2:text-5xl'>
          <div>Technological</div>
          <div className='ml-4 font-stencil-skill'>Toolbox</div> 
        </div>
        {/* <div className='border-2 border-red-500'>
          <Lottie
            animationData={animationData}
            className="flex items-center justify-center grayscale-0"
            loop={true}
          />
        </div> */}
        <div className='grid sm1:pt-2 sm3:grid-cols-3 sm2:grid-cols-2 sm1:grid-cols-1 md:-mt-20 md:p-20 sm2:p-10 sm3:mt-4 sm1:p-20'>
          { Skills.map((icon)=>{
            return(
              <motion.div key={icon.id} variants={fadeInAnimationVariants} initial="initial" whileInView="animate" custom={icon.id} viewport={{once:true}} className='flex justify-center m-2 md:p-10 sm3:p-2 sm2:p-4 sm1:p-4'>
                <Image src={icon.url} alt="" width={200} height={200} className='invert-75'></Image>
              </motion.div>
            )
          })}
        </div>  
      </div>
  </div>
  </>
  )
}

export default Skill
