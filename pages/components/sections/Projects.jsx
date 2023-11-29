import { useState } from "react";
import { motion } from "framer-motion"
import { useTransform,useScroll } from 'framer-motion';
import { Project } from "../../../public/data/Projects"
import { useMousePosition } from "../../../utils/useMousePosition";
import { useHover } from '@uidotdev/usehooks';

const fadeInAnimationVariants={
    initial:{
      opacity:0,
      y:100
    },
    animate: (id) => ({
      opacity:1,
      y:0,
      transition:{ ease:'linear'}
    })
} 

const textVariants = {
  textInitial:{
    y:20
  },
  textAnimate:{
    y:0,
    transition:{type:'spring',stiffness:200},
  }
}

const Projects = () => {
  const { xPos,yPos } = useMousePosition()
  const [ ref,isHover] = useHover()
  const size = isHover ? 300 : 40;
  const [ display,setDisplay ] = useState(false)
  const [ displayId,setDisplayId ] = useState(null)
  
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress,[0,1],[1000,-400])
  return (
      <>
        
        <div id="projects" className="overflow-hidden mt-26">
          <div className="mt-24 -ml-24 -mr-24 overflow-hidden text-black transform bg-blue-400 md:p-4 whitespace-nowrap sm1:p-2">
            <motion.div className="font-extrabold tracking-tighter lg:text-4xl md:text-3xl sm1:text-xl" style={{x}}>creative corner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;my work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creative corner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;my work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creative corner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;my work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creative corner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;my work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creative corner</motion.div>
          </div>
          <motion.div 
            variants={textVariants}
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="w-full pt-4 m-auto font-bold tracking-tighter text-white sm1:text-center sm1:w-full sm3:w-4/5 sm3:flex sm3:flex-row sm3:text-center sm1:text-4xl sm3:text-5xl md:text-7xl xl:text-9xl lg:text-8xl lg:text-center"
          > 
            <motion.div 
              initial={{opacity:0,y:'10vh',scale:0.7}}
              whileInView={{opacity:1,y:0,scale:1,transition:{type:'tween',duration:0.5}}}
              viewport={{once:true}}
              className="text-center border-0 border-red-500"
              >Featured <span className="font-stencil-skill">Projects.</span>
            </motion.div>
            <motion.div 
              animate={{
                WebkitMaskPosition: isHover ? `${xPos-size}px ${yPos-size}px` : `${xPos-6*size}px ${yPos-8*size}px` ,
                WebkitMaskSize:`${size}px`
              }}
              transition={{ type:'tween',ease:'backOut'}}
              className="absolute border-0 border-red-500 sm1:text-3xl md:text-7xl xl:text-9xl lg:text-8xl lg:text-center sm1:hidden md:flex lg:pl-12 xl:pl-16 mask"
            >
              <p ref={ref} className="pb-20 pl-2 pr-2">Stuff I&apos;ve worked on.</p>
            </motion.div>
          </motion.div>
          {/* <div className="-ml-24 -mr-24 overflow-hidden text-black transform bg-blue-400 md:p-4 md:mt-10 -rotate-6 whitespace-nowrap sm3:mt-2 sm3:p-2">
            <motion.div className="font-extrabold tracking-tighter lg:text-4xl md:text-3xl sm3:text-xl sm1:hidden sm3:block" style={{x}}>Click on the project to know more !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click on the project to know more ! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click on the project to know more !</motion.div>
          </div> */}
          <div className="grid w-4/5 pt-0 m-auto mt-12 border-0 border-red-500 rounded-sm md:grid-cols-2 sm1:grid-cols-1">
            {
                  Project.map( (project) => {
                    return(
                      <motion.a 
                        key={project.id}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once:true }}
                        custom={project.id}
                        className={`${project.bgKey} sm1:text-2xl md:text-3xl projectTiles border-0 border-blue-500 transition ease-linear duration-200 text-black sm3:min-h-20 image zoom-in rounded-xl box-shadow-out-projects sm1:w-60 sm1:h-60 m-auto sm1:mt-4 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-4/5 md:mt-8 xl:mt-12`} 
                        href={project.url}
                        target="_blank"
                        onMouseEnter={()=>{ setDisplay(true);setDisplayId(project.id);console.log(display) }}
                        onMouseLeave={()=>{ setDisplay(false);setDisplayId(null);console.log(display) }}
                      >
                        <div className="z-10 w-full p-2 text-2xl font-bold tracking-tighter text-center text-white lg:text-3xl bg-black/30 backdrop-blur-sm md:text-xl sm1:text-lg">{project.name}</div>
                        {/* <div className="z-10 flex justify-center w-full p-2 space-x-2 text-sm font-light tracking-widest text-center text-white fflex bg-black/30 backdrop-blur-sm">
                          {
                            project.skills.map((skill)=>{
                              return(
                                <span className="p-2 mb-2 text-black border-2 border-white bg-white/50 rounded-xl backdrop-blur-sm" key={skill.id}>{skill}</span>
                              )
                            })
                          }
                        </div> */}
                        <div className="z-10 w-full p-2 pt-2 font-thin text-center text-white lg:text-sm bg-black/30 backdrop-blur-sm sm1:text-xs">{project.desc}</div>
                      </motion.a>  
                    )
                  }) 
                }
          </div>
        </div>

        {/* {
          display && (
            <div className="bg-black ">
              <span className="text-2xl text-white">{`displaying details of project ${displayId}`}</span>
            </div>
          )
        }       */}
        
      </>
    )
  }  
export default Projects