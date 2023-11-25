import React,{ useState,useRef,useEffect } from 'react'
import ScrollText from './ScrollText'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { scrollData } from '../../../public/data/About'
  
const textVariants = {
    initial:{
      y:100,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        type:'tween',
        duration:0.75,
        ease: 'easeInOut',
      },
    }

  }

  const Scroll = () => {
    const containerRef = useRef(null);
    const [ view,setView ] = useState(false)
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setView(true)
            // console.log("hello")
          } 
          else {
            setView(false)
            // console.log("bye")
        }}  
      
      );},
      { root:document.querySelector("parent"),threshold: 0.1,rootMargin:'0px 0px 0px 0px'}
    );

    observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
    
    }, []);

    // useEffect(() => {
    //   console.log("Current view value:", view);
    // }, [view]);
    
    const [ currentImage,setCurrentImage ] = useState(0)
    return (
        <div ref={containerRef} className='relative flex w-full border-0 border-red-500 lg:pt-40 parent'>
          <div className='overflow-hidden border-0 border-gray-500 md:w-3/5 sm3:w-full'>
            {scrollData.map((screen,i) => (
                <motion.div 
                  variants={textVariants}
                  initial="initial"
                  whileInView="animate"
                  className='flex flex-col md:mb-[30em] sm1:mb-[4em] sm1:mt-16 sm2:mt-20 md:mt-40 2xl:mt-20' key={i}
                >
                  < ScrollText 
                    screen={screen} 
                    i={i} 
                    setCurrentImage={setCurrentImage} 
                    className='border-0 border-blue-400'
                  />
                </motion.div>
            ))}
          </div>
          <div className={`sm1:hidden md:flex fixed top-32 lg:right-0 md:right-2 w-2/5 border-0 border-green-500 h-fit flex justify-around ${view ? 'visible' :'not-visible'}`}>
            <div className='h-full xl:w-80 rounded-xl lg:w-72 md:w-64'>
                <div className='p-2 bg-stone-950 box-shadow-out-2 rounded-3xl'>
                    <div className='h-full overflow-hidden bg-black rounded-3xl box-shadow-in'>
                        <div className='w-2/5 p-3 m-auto mt-2 box-shadow-out rounded-3xl'></div>
                        <Image src={scrollData[currentImage].imgUrl} key={scrollData[currentImage].imgUrl} alt='' height={400} width={600} className='p-4 pt-8 transition transform duration-[800ms] slide-right h-100 grayscale hover:grayscale-0 hover:scale-105'></Image>
                    </div>
                </div>
            </div>
          </div>
        </div>
  )
}
export default Scroll