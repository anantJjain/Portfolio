import { text } from '@fortawesome/fontawesome-svg-core'
import { Experiences } from '../../../public/data/Experiences'
import { motion } from 'framer-motion'
const textVariants = {
  initial:{
    y:100
  },
  animate:{
    y:0,
    transition:{type:'spring',stiffness:200},
  }
}
const About = () => {
    return (
      <div id="about" className="pt-10 pb-20 text-white mt-26">
          <motion.div 
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}} 
            className="w-full m-auto text-sm font-normal tracking-widest sm3:w-4/5 sm1:w-full sm1:text-center sm3:text-left text-stone-400 sm1:mt-8"
          > BEHIND THE PORTFOLIO - 
          </motion.div>
          <motion.div 
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            className="w-full pt-4 m-auto text-4xl font-bold text-white sm1:text-center sm1:w-full sm3:w-4/5 sm3:text-left sm3:flex sm1:text-4xl">About Me😁
          </motion.div>  
          <div className="w-4/5 m-auto">
            <motion.div 
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              viewport={{once:true}}
              className='flex w-3/5 p-0 mt-10 text-2xl font-extralight text-stone-400 sm1:w-full sm1:text-xl md:w-4/5 lg:w-3/5 xl:pr-20 md:text-2xl'
            >
              Hello! I&apos;m an engineering student🤓 at BITS Pilani, Pilani.I&apos;m passionate about web development and have experience with MERN Stack.🚀
              I enjoy creating interactive web apps that not only convey information but also engage users. Outside of web development, I love playing cricket🏏. I&apos;m also a sci-fi movie🎦 enthusiast.Feel free to explore my portfolio and reach out if you&apos;d like to collaborate or chat!🤝
            </motion.div>
          </div>

          {/* Experiences */}
          {/* <div className="w-4/5 m-auto mt-20 text-sm tracking-widest text-white">EXPERIENCES - </div>
          <div className=""> 
            {
              Experiences.map((exp)=>{
                return(
                  <div key={exp.id} className='flex justify-center ml-40 text-xl'>
                    <motion.div 
                      whileInView={{x:-300}}
                      viewport={{once:false}}
                      transition={{
                        duration:0.5,
                        delay:0.05,
                      }}
                      className="z-10 w-3/5 p-10 mt-2 bg-purplebg rounded-4xl text-purple -mr-80"
                    >
                      <div className="w-3/4 mr-40">{exp.work}</div>
                    </motion.div>
                    <motion.div 
                      whileInView={{x:140}}
                      viewport={{once:false}}
                      transition={{
                        duration:0.5,
                        delay:0.05,
                      }}
                      className="z-20 w-2/5 p-20 mt-2 text-black rounded-4xl bg-gradient-to-r from-green-500 to-blue-500 -ml-80"
                    >
                      <div className="text-lg text-center">{exp.role} at</div>
                      <div className="mt-6 text-3xl font-bold text-center">{exp.org}</div>
                    </motion.div>
                  </div>
                )
              })
            }
          </div>   */}
      </div>    
    )
  }
  export default About