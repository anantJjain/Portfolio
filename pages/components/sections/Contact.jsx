import { motion } from 'framer-motion'
import { AiFillLinkedin,AiFillGithub, AiFillInstagram } from 'react-icons/ai';


const fadeInAnimationVariants={
  initial:{
    opacity:0,
    y:100
  },
  animate: (id) => ({
    opacity:1,
    y:0,
    transition:{
      delay:0.2*id,
      ease:"linear",
      type:'spring',
      stiffness:100
    }
  }),
  hover:{
    y:-1,
    scale:1.1,
    rotate:2,
    transition:{type:'tween',stiffness:1000,duration:0.2},
    borderBottomColor:'white',
    borderRightColor:'white',
    borderTopColor:'white'
  }
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

const Contact = () => {
    return (
      <> 
        <div id='contact' className="pt-10 pb-20 mb-20 text-xl mt-26">
          <motion.div 
            variants={textVariants}
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="w-4/5 m-auto mt-4 text-sm font-normal tracking-widest l-20 text-stone-400"
          > GET IN TOUCH !
          </motion.div>
          <motion.div 
            variants={textVariants}
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="flex w-4/5 pt-4 m-auto text-4xl font-bold text-white"
          > On The Web  
            <motion.div 
              whileHover={{
                rotate:360,
                transition:{type:"spring",stiffness:1000}
              }}
            > 🌐</motion.div>
          </motion.div>
          
          <div className="w-4/5 m-auto mt-10 font-normal text-stone-400 hover:font-normal">
              
            <div className="grid grid-cols-3 sm:gap-2 md:gap-4 lg:gap-10">
              <motion.a
                href="https://www.linkedin.com/in/anantjainBE/" target="_blank" rel="noreferrer"
                className="flex justify-between p-4 transition duration-200 ease-linear border-2 border-l-8 border-stone-500 border-l-blue-500 hover:text-white" 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once:true }}
                custom={1}
                whileHover="hover"  
              > 
                <span className="text-xl">LinkedIn</span>
                <a href="https://www.linkedin.com/in/anantjainBE/" target="_blank" rel="noreferrer"><AiFillLinkedin className="text-3xl"></AiFillLinkedin></a>
              </motion.a>
                
              <motion.a
                href="https://github.com/anantJjain" target="_blank" rel="noreferrer"
                className="flex justify-between p-4 transition duration-200 ease-out border-2 border-l-8 border-stone-500 border-l-blue-500 hover:text-white" 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once:true }}
                custom={3}
                whileHover="hover"
              >
                <span className="text-xl">Github</span>
                <a href="https://github.com/anantJjain" target="_blank" rel="noreferrer"><AiFillGithub className="text-3xl"></AiFillGithub></a>
              </motion.a>
                
              <motion.a
                href="https://www.instagram.com/anantjain.8k/" target="_blank" rel="noreferrer"
                className="flex justify-between p-4 transition duration-200 ease-out border-2 border-l-8 border-l-blue-500 border-stone-500 hover:text-white"  
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once:true }}
                custom={5}
                whileHover="hover"
              >
                <span className="text-xl">Instagram</span>
                <a href="https://www.instagram.com/anantjain.8k/" target="_blank" rel="noreferrer"><AiFillInstagram className="text-3xl"></AiFillInstagram></a>
              </motion.a>
                
              
            </div>
          </div>
          
         
          <div className="w-4/5 m-auto mt-20 text-sm tracking-widest l-20 text-stone-400">CONTACT -</div>
          <div className="flex w-4/5 pt-4 m-auto text-4xl font-bold text-white">Let&apos;s Brainstorm Together 
            <motion.div 
              initial={{
                y:-200,
              }}
              whileInView={{
                viewport:{once:true},
                y:0,
                transition:{type:"spring",stiffness:200,duration:1}
              }}
              whileHover={{
                y:[-10,0,-10,0],
                transition:{type:"spring",stiffness:100}
              }}
            >🤯</motion.div>
          </div>
          
          <div className="w-4/5 m-auto mt-20 text-sm tracking-widest text-stone-400 l-20">EMAIL -</div>
          <div className="w-4/5 pt-4 m-auto text-3xl font-semibold text-white">
            <a className="transition duration-500 ease-in-out hover:text-blue-400" href="mailto:anantjain.8k@gmail.com">
              📧 anantjain.8k@gmail.com
            </a>
            <span className='pl-10 pr-10 border-r-8 border-blue-400 sm:display-none'></span>
            <a className="pl-10 transition duration-500 ease-in-out hover:text-blue-400" href="mailto:f20200641@pilani.bits-pilani.ac.in">
              🏫 f20200641@pilani.bits-pilani.ac.in
            </a>
          </div>
          
         </div>  
      </>
    );
}
export default Contact;