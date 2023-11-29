'use client'
import React, { useState,useRef, useEffect } from 'react'
import { useMousePosition } from '../../../utils/useMousePosition';
import { motion } from 'framer-motion';
import { useHover } from "@uidotdev/usehooks";

const ScrollText = ({ screen,i,setCurrentImage,currentImage}) => {
    const [textRef, hovering] = useHover(); 
    const { xPos,yPos } = useMousePosition()
    const size = hovering ? 300 : 40;
    
    const [ showAnimation,setShowAnimation ] = useState(false);
    const ref = useRef(null)
    const toggleAnimation = (e) => {
      if(e[0]?.isIntersecting){
        setShowAnimation(true)
        setCurrentImage(i)
        // console.log("animated state "+showAnimation)
        // console.log("i value "+i)
      }
    }
    const options = {
      root:null,
      rootMargin:'0px',
      threshold:0.5
    }

    useEffect(()=>{
      const observer = new IntersectionObserver(toggleAnimation,options)
      if(ref.current){
        observer.observe(ref.current)
      }

      return () => {
        if(ref.current){
          observer.unobserve(ref.current)
        }
      }
    },[])
    return (
      <div className={`xl:p-20 lg:p-10 border-0 border-red-400 ${showAnimation ? 'text-visible' : 'screen-text'}`} ref={ref}>
        <div className='flex font-bold tracking-tighter border-0 border-blue-500'>
          <div className='p-4 text-white border-0 border-green-500 xl:text-9xl font-stencil-scroll lg:text-8xl md:text-6xl sm2:text-5xl sm1:text-4xl'>{screen.id}<span className='lg:text-6xl md:text-5xl sm2:text-4xl sm1:text-3xl'>#</span></div>
          <div className='flex flex-col border-0 border-softPink'>
            <div className='flex flex-col border-0 border-yellow'>
              <div className='w-full border-0 xl:p-6 lg:p-4 border-cyan xl:text-8xl lg:text-7xl md:text-6xl md:pt-2 lg:pt-0 sm2:text-5xl sm1:text-4xl sm1:p-4 sm1:pl-0'> 
                <div className='text-white'>{ screen.heading1 }</div>
                <div className='text-blue-400'>{ screen.heading2 }</div>
              </div>
              <motion.div 
                  animate={{
                    WebkitMaskPosition: hovering ? `${xPos-1.5*size}px ${yPos-size}px` : `${xPos-6*size}px ${yPos-6*size}px` ,
                    WebkitMaskSize:`${size}px`
                  }}
                  transition={{ type:'tween',ease:'backOut'}}
                  className='p-6 pb-8 text-blue-400 border-0 border-white lg:-mt-[11em] xl:-mt-60 sm3:-mt-32 mask sm1:hidden lg:block sm2:-mt-24 sm1:-mt-20'
                ><p className="xl:text-8xl lg:text-7xl md:text-6xl sm3:text-5xl" ref={textRef}>{ screen.maskText }</p>
              </motion.div>
            </div>
            <div className='font-normal text-left text-black border-0 border-red-500 sm1:mr-6 sm3:mr-10 md:mr-20 xl:mr-0 md:tracking-tight lg:p-8 xl:text-xl lg:invert-50 lg:text-lg md:text-md md:invert-75 sm1:invert-75 sm1:text-sm sm2:tracking-normal sm1:p-4 md:p-0 sm1:pl-0 2xl:mt-8 2xl:text-2xl'>{ screen.description}</div>
          </div>
        </div>
      </div>
  )
}

export default ScrollText
