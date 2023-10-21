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
          minHeight: 600.00,
          minWidth: 600.00,
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
        className="w-full pt-40 ml-48 text-5xl sm:w-4/5 lg:w-2/5 md:w-4/5"
      >
        <div className="text-sm font-normal tracking-widest text-white ">HEY THERE 👋, I AM</div>
        <div className="pb-4 mt-2 mb-2 text-5xl font-extrabold text-white">Anant</div>
        <div className="pt-0 mb-2 text-lg tracking-widest text-blue-400">FULL STACK DEVELOPER 👨‍💻</div>
        <div className="w-3/4 pr-24 text-sm font-normal white text-stone-400">I’m a Software Developer specializing in building (and occassionally   designing) exceptional applications,web sites, and everything in between.</div>
        <div className="">
          <button className="p-2 pl-8 pr-8 mt-8 text-lg tracking-wider text-white transition duration-200 ease-linear border-2 border-white shadow-inner hover:shadow-inner-2xl rounded-3xl hover:bg-blue-400 hover:text-black hover:border-blue-400 hover:scale-110">
            <a href="#contact">HIRE ME</a>
          </button>
        </div>
      </motion.div>       
    </div>
  )
}

export default Home