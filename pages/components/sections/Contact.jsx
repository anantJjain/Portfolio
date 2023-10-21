import { motion } from 'framer-motion'
import { AiFillLinkedin,AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { PiArrowUpRightBold } from 'react-icons/pi';
import Link from 'next/link'

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
        <div id='contact' className="pt-10 pb-20 mb-20 text-xlmt-26">
          <motion.div 
            variants={textVariants}
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="w-full m-auto mt-4 text-sm font-normal tracking-widest sm3:w-4/5 sm1:w-full sm1:text-center sm3:text-left text-stone-400"
          > GET IN TOUCH !
          </motion.div>
          <motion.div 
            variants={textVariants}
            initial="textInitial"
            whileInView="textAnimate"
            viewport={{once:true}}
            className="w-full pt-4 m-auto text-4xl font-bold text-white sm1:flex sm1:w-full sm1:justify-center sm3:w-4/5 sm3:justify-start"
          > 
            <span>On The Web</span>
            <motion.div 
              whileHover={{
                rotate:360,
                transition:{type:"spring",stiffness:1000}
              }}
            > 🌐</motion.div>
          </motion.div>
          
          <div className="w-4/5 m-auto mt-10 font-normal text-stone-400 hover:font-normal">
              
            <div className="grid grid-cols-3 sm1:gap-4 sm1:grid-cols-1 sm1:mt-10 md:grid-cols-2 lg:grid-cols-3">
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
          
         
          <div className="w-full m-auto text-sm font-normal tracking-widest sm3:w-4/5 sm1:w-full sm1:text-center sm3:text-left text-stone-400 sm1:mt-8 lg:mt-16">CONTACT -</div>
          <div className="flex w-full pt-4 font-bold text-white sm1:text-xl sm1:justify-center sm3:w-4/5 sm3:text-2xl sm3:m-auto md:justify-start md:text-4xl">Let&apos;s Brainstorm Together 
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
            <Link 
              href='https://drive.google.com/file/d/1M_DXhtAgd0_StuxAzvUpi4INsVqN6I2s/view?usp=share_link'
              passHref={true} //to pass external links
              target="_blank" 
              whileHover="hover"
              className="p-2 pl-10 pr-10 ml-10 text-2xl font-normal transition duration-200 ease-linear border-2 border-l-8 lg:flex sm1:hidden border-stone-500 border-l-blue-500 hover:text-white text-stone-400 hover:scale-110"
            > <span>Resume</span><span className="mt-2 ml-2"><PiArrowUpRightBold/></span> 
            </Link>
          </div>
            <Link 
              href='https://drive.google.com/file/d/1M_DXhtAgd0_StuxAzvUpi4INsVqN6I2s/view?usp=share_link'
              passHref={true} //to pass external links
              target="_blank" 
              whileHover="hover"
              className="flex p-2 text-2xl font-normal transition duration-200 ease-linear border-2 border-l-8 sm1:justify-center border-stone-500 border-l-blue-500 hover:text-white text-stone-400 hover:scale-110 lg:hidden sm1:w-3/5 sm1:m-auto sm1:mt-4 sm1:text-xl md:w-2/5"
            > <span>Resume</span><span className="mt-2 ml-2"><PiArrowUpRightBold/></span> 
            </Link>
          
          <div className="w-full m-auto text-sm font-normal tracking-widest sm3:w-4/5 sm1:w-full sm1:text-center sm3:text-left text-stone-400 sm1:mt-8 md:mt-12">EMAIL -</div>
          <div className="w-4/5 pt-4 m-auto text-3xl font-semibold text-white lg:w-full lg:pl-24 xl:w-4/5 xl:pl-0 sm1:text-center sm3:text-left">
            <a className="transition duration-500 ease-in-out hover:text-blue-400" href="mailto:anantjain.8k@gmail.com">
              <span className='sm2:text-4xl sm1:hidden sm3:inline'>📧</span> <span className="sm1:text-xl sm1:font-light sm3:text-2xl">anantjain.8k@gmail.com</span>
            </a>
            <span className='border-r-8 border-blue-400 lg:pr-10 lg:pl-10 md:pl-4 md:pr-4 sm1:hidden md:inline'></span>
            <a className="transition duration-500 ease-in-out lg:pl-10 hover:text-blue-400 md:inline-block" href="mailto:f20200641@pilani.bits-pilani.ac.in">
              <span className='sm2:text-3xl sm3:text-4xl sm1:hidden sm3:inline'>🏫</span> <span className="sm1:text-lg sm1:font-light sm3:text-xl md:text-2xl">f20200641@pilani.bits-pilani.ac.in</span>
            </a>
          </div>
          
         </div>  
      </>
    );
}
export default Contact;