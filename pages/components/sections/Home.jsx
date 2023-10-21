import React, { useState, useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three";
import { motion } from 'framer-motion'
const textVariants = {
  initial:{
    y:-100
  },
  animate:{
    y:0,
    transition:{type:'spring',stiffness:200},
  }
}

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          // minHeight: 600.00,
          // minWidth: 600.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x000000,
          color: 0x60A5FA,
          spacing: 10.00,
          chaos: 10.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="h-screen"
      ref={vantaRef}  
    > 
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="w-full text-5xl md:pt-40 sm3:pt-28 sm1:pt-24 md:ml-24 sm1:w-4/5 lg:w-2/5 md:w-4/5 sm1:ml-10 lg:ml-48"
      >
        <div className="text-sm font-normal tracking-widest text-white ">HEY THERE 👋, I AM</div>
        <div className="pb-4 mt-2 mb-2 text-5xl font-extrabold text-white">Anant</div>
        <div className="pt-0 mb-2 text-lg tracking-widest text-blue-400 sm1:text-sm sm1:font-bold sm3:font-normal">FULL STACK DEVELOPER 👨‍💻</div>
        <div className="pr-24 text-sm font-normal sm1:w-full sm1:pr-0 white text-stone-400 sm3:w-3/4 md:w-2/4 lg:w-3/4 xl:w-2/4 xl:text-sm">
          I’m a Software Developer specializing in building (and occassionally   designing) exceptional applications,web sites, and everything in between.
        </div>
        <div className="">
          <button className="p-2 mt-8 tracking-wider text-white transition duration-200 ease-linear border-2 border-white shadow-inner md:text-lg md:pr-8 md:pl-8 sm1:text-sm sm1:pr-4 sm1:pl-4 hover:shadow-inner-2xl rounded-3xl hover:bg-blue-400 hover:text-black hover:border-blue-400 hover:scale-110">
            <a href="#contact">HIRE ME</a>
          </button>
        </div>
      </motion.div>       
    </div>
  )
}

export default Home