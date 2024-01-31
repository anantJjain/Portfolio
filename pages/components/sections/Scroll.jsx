import Image from 'next/image'
import React,{ useState,useRef,useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollText from './ScrollText'
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
    const [ currentImage,setCurrentImage ] = useState(0)
    return (
        <div ref={containerRef} className='relative flex w-full overflow-hidden border-0 border-red-500 lg:pt-40 parent'>
          <div className='overflow-hidden border-0 border-gray-500 lg:w-3/5 sm3:w-full'>
            { scrollData.map((screen,i) => (
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
                  <div>
                    <Image src={screen.imgUrl} key={screen.imgUrl} alt='' height={200} width={300} className='h-64 m-auto transition transform invert sm3:w-72 sm3:h-72 box-shadow-out sm1:w-64 md:w-4/5 md:h-100 lg:hidden slide-right'></Image>
                  </div>
                </motion.div>
            ))}
          </div>
          <div className={`sm1:hidden lg:flex fixed top-20 lg:right-0 md:right-2 w-2/5 border-0 border-green-500 h-fit flex justify-around ${view ? 'visible' :'not-visible'}`}>
            <div className='h-full xl:w-80 rounded-xl lg:w-80'>
                <div className='p-2 bg-stone-950 rounded-3xl'>
                    <div className='h-full overflow-hidden bg-black rounded-3xl box-shadow-in'>
                        <div className='w-2/5 p-3 m-auto mt-2 box-shadow-out rounded-3xl'></div>
                        <Image src={scrollData[currentImage].imgUrl} key={scrollData[currentImage].imgUrl} alt='' height={500} width={800} className='object-cover p-2 pt-0 transition transform duration-[1000ms] slide-right invert h-100'></Image>
                    </div>
                </div>
            </div>
          </div>
        </div>
  )
}
export default Scroll