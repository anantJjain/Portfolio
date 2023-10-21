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
            className="w-full m-auto text-sm font-normal tracking-widest sm3:w-4/5 sm1:w-full sm1:text-center sm3:text-left text-stone-400 sm1:mt-8"
          > FEATURED PROJECTS -
          </motion.div>
          <motion.div 
            variants={textVariants}
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="w-full pt-4 m-auto text-4xl font-bold text-white sm1:text-center sm1:w-full sm3:w-4/5 sm3:text-left sm3:flex sm1:text-2xl sm3:text-2xl md:text-3xl lg:text-4xl"
          > Stuff I&apos;ve Worked on 💻
          </motion.div>
          <div className="grid gap-4 m-auto mt-10 md:grid-cols-2 lg:grid-cols-3 sm1:w-4/5">
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
                        sm1:text-2xl
                        md:text-3xl
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
                        m-auto 
                        min-w-full 
                        sm3:min-h-20`
                      } 
                        key={project.id}
                    >
                      <a 
                        href={project.url}
                        target="_blank" 
                        className="grid p-4 ml-auto text-2xl text-right justify-items-end"
                      >
                        <BsGithub />
                      </a>     
                      <div className="p-2 pt-20 font-bold text-left lg:pb-10 lg:text-3xl sm1:text-2xl">{project.name}</div>
                      <div className="flex flex-wrap p-4 text-sm font-medium text-left">
                        {
                          project.skills.map((skill)=>{
                            return(
                              <div className="pr-4 text-xs uppercase" key={project.id}>{skill}</div>
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