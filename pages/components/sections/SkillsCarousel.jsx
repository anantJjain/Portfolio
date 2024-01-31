import Image from 'next/image';
import React from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'
import Marquee from "react-fast-marquee";
import { Skills } from '../../../public/data/Skills'

const SkillsCarousel = () => {
    const { scrollYProgress } = useScroll()
    const toRight = useTransform(scrollYProgress,[0,1],[-500,100])
    const toLeft = useTransform(scrollYProgress,[0,1],[10,-1000]) 
  return (
    <div>
      <motion.div 
            className="font-extrabold tracking-tighter text-white border-0 border-red-500 font-mine2 md:text-10xl sm1:text-8xl"
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
    </div>
  )
}

export default SkillsCarousel
