import { Project } from "../../../public/data/Projects"
import { BsGithub} from 'react-icons/bs'
import { motion } from "framer-motion"


const fadeInAnimationVariants={
    initial:{
      opacity:0,
      y:100
    },
    animate: (id) => ({
      opacity:1,
      y:0,
      transition:{delay:0.1*id,type: 'spring',stiffness:150}
    })
} 

const textVariants = {
  textInitial:{
    y:100
  },
  textAnimate:{
    y:0,
    transition:{type:'spring',stiffness:200},
  }
}

const Projects = () => {
  return (
      <div id="projects"  className="pt-10 pb-20 mt-26">
          <motion.div
            variants={textVariants} 
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="w-4/5 pt-4 m-auto text-sm font-normal tracking-widest l-20 text-stone-400"
          > FEATURED PROJECTS -
          </motion.div>
          <motion.div 
            variants={textVariants}
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="w-4/5 pt-4 m-auto text-4xl font-bold text-white"
          > Stuff I&apos;ve Worked on 💻
          </motion.div>
          <div className="grid gap-4 m-auto mt-10 md:grid-cols-2 lg:grid-cols-3 md:w-4/5 lg:w-4/5">
            {
                Project.map((project)=>{
                  return(
                    <motion.div 
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once:true }}
                      custom={project.id}
                      whileHover={{scale:0.95}}
                      className={
                        `${project.bgKey}
                        text-3xl
                        projectTiles
                        border-2
                        transition
                        ease-linear
                        duration-200
                        bg-[linear-gradient(to_top,#ffecd2,#fcb69f)]
                        border-black
                        hover:bg-[linear-gradient(to_top,#000,#000)]
                      hover:text-white
                      hover:border-white
                        m-auto min-w-full min-h-20`} 
                        key={project.id}
                    >
                      <a 
                        href={project.url}
                        target="_blank" 
                        className="grid p-4 ml-auto text-2xl text-right justify-items-end"
                      >
                        <BsGithub />
                      </a>     
                      <div className="pt-20 pb-10 pl-4 text-3xl font-bold text-left">{project.name}</div>
                      <div className="flex p-4 space-x-4 text-sm font-medium text-left">
                        {
                          project.skills.map((skill)=>{
                            return(
                              <div className="text-xs uppercase" key={project.id}>{skill}</div>
                            )
                          })
                        }
                      </div>
                    </motion.div>  
                  )
                })
              }
          </div>
      </div>
    )
  }
  
  export default Projects