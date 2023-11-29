import { motion } from 'framer-motion'
import { AiFillLinkedin,AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { PiArrowUpRightBold } from 'react-icons/pi';
import Link from 'next/link'
import { useTransform,useScroll } from 'framer-motion';
import { useMousePosition } from '../../../utils/useMousePosition';
import { useHover } from '@uidotdev/usehooks';

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
    const { xPos,yPos } = useMousePosition()
    const [ ref,isHover] = useHover()
    const [ ref2,isHovering] = useHover()
    const size = isHover ? 200 : 0;
    const size2 = isHovering ? 200 : 100;
    const { scrollYProgress } = useScroll()
    const x = useTransform(scrollYProgress,[0,1],[-2000,10])
    return (
      <div id='contact' className="pt-20 mt-20 mb-2 overflow-hidden">
        <div className="font-extrabold tracking-tighter text-black bg-blue-400 sm3:p-4 lg:text-4xl md:text-3xl sm3:text-2xl sm1:text-xl sm1:p-2">
          <motion.div style={{x}} className="whitespace-nowrap">your inputs matter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let&apos;s connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your inputs matter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let&apos;s connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your inputs matter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&apos;s connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your inputs matter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let&apos;s connect</motion.div>
        </div>
        <div className="grid mt-16 border-0 border-blue-500 md:grid-cols-2 sm1:grid-cols-1">
          
          <motion.div 
            // initial={{opacity:0,y:'10vh',scale:0.7}}
            // whileInView={{opacity:1,y:0,scale:1,transition:{type:'tween',duration:0.5}}}
            // viewport={{once:true}}
            className="flex flex-col font-bold tracking-tighter text-white border-0 border-blue-500 xl:text-9xl lg:text-8xl lg:pl-12 xl:pl-20 lg:mt-20 xl:mt-0 md:text-7xl sm2:text-7xl sm3:pl-10 md:pl-2 sm1:pl-8 sm2:pl-4 sm1:text-5xl 2xl:text-10xl">
            
            <div>  
            <div>
              <span className='border-0 border-red-500'>Let</span>
              <span className='text-blue-400 border-0 border-red-500'>&apos;</span>
              <span className='border-0 border-red-500'>s</span> 
              <span className='border-0 border-red-500 lg:pl-8 font-stencil-contact sm1:pl-4 md:pl-6'>work</span>   
            </div>
            <div>
              <span className="text-black border-0 border-red-500 invert-75 lg:text-7xl xl:text-9xl">—</span>
              <span className="pl-4 text-blue-400 border-0 border-red-500 xl:pl-8 lg:text-8xl xl:text-[0.97em] sm2:text-6xl sm3:text-7xl">together.</span>   
            </div>
            </div>
          
          </motion.div>
          
          <div className="flex items-end justify-center text-blue-400 border-0 border-blue-500 md:gap-32 lg:text-5xl lg:pt-60 md:pt-20 md:text-4xl sm2:gap-16 sm1:gap-12 sm3:text-4xl sm2:mt-10 sm1:mt-6 md:mt-0 sm1:text-3xl">
            <motion.a
                  href="https://www.linkedin.com/in/anantjainBE/" target="_blank" rel="noreferrer"
   
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once:true }}
                  custom={1}
                  whileHover="hover"  
                > 
                <AiFillLinkedin />
            </motion.a>
                
            <motion.a
              href="https://github.com/anantJjain" target="_blank" rel="noreferrer" 
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once:true }}
              custom={3}
              whileHover="hover"
            >
              <AiFillGithub />
            </motion.a>
                
            <motion.a
              href="https://www.instagram.com/anantjain.8k/" target="_blank" rel="noreferrer"  
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once:true }}
              custom={5}
              whileHover="hover"
            >
              <AiFillInstagram />
            </motion.a>  
          </div>

          


          
        </div>
        
        <motion.div 
          initial={{opacity:0,y:'10vh',scale:0.7}}
          whileInView={{opacity:1,y:0,scale:1,transition:{type:'tween',duration:0.5}}}
          viewport={{once:true}}
          className='m-auto font-bold leading-snug tracking-tighter text-center text-white border-0 border-red-500 lg:text-5xl xl:w-3/5 xl:mt-28 lg:w-4/5 lg:mt-20 md:text-3xl md:mt-16 sm1:mt-8 sm3:text-2xl sm3:p-6 md:p-2 sm1:p-4 sm2:text-xl sm1:text-lg sm1:font-normal sm2:font-bold'
        >
          Drop me an email and send your <span className='text-blue-400 font-stencil-contact-nonsmallText'>Ideas</span> ,<span className='text-blue-400 font-stencil-contact-nonsmallText'> Suggestions</span> ,<span className='text-blue-400 font-stencil-contact-nonsmallText'> Collaborative </span> sparks , and <span className='text-blue-400 font-stencil-contact-nonsmallText'> Queries </span>directly to my <span className='tracking-wider font-stencil-contact'>inbox.</span>
        </motion.div>
        <motion.div 
          animate={{
            WebkitMaskPosition: isHover ? `${xPos-2*size}px ${yPos-2*size}px` : `${xPos-5*size}px ${yPos-2*size}px` ,
            WebkitMaskSize:`${size}px`
          }}
          transition={{ type:'tween',ease:'backOut'}}
          className='mask sm1:hidden md:block m-auto font-bold leading-snug tracking-tighter text-center text-white border-0 border-red-500 lg:text-5xl xl:w-3/5 xl:-mt-40 lg:w-4/5 lg:-mt-40 md:text-3xl md:-mt-[3em] sm3:mt-0 sm3:text-2xl sm3:p-6 md:p-2 sm1:p-4 sm2:text-xl sm1:text-lg sm1:font-normal sm2:font-bold'
        >
          <p 
            ref={ref}
          >
            Drop me an email and send your <span className='text-blue-400 font-stencil-contact-nonsmallText'>Ideas</span> ,<span className='text-blue-400 font-stencil-contact-nonsmallText'> Suggestions</span> ,<span className='text-blue-400 font-stencil-contact-nonsmallText'> Collaborative </span> sparks , and <span className='text-blue-400 font-stencil-contact-nonsmallText'> Queries </span>directly to my <span className='tracking-wider font-stencil-contact'>inbox.</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{opacity:0,y:'10vh'}}
          whileInView={{opacity:1,y:0,transition:{type:'tween',duration:0.7,staggerChildren:0.09,}}}
          viewport={{once:true}}  
          className='justify-around m-auto text-center text-white border-0 border-green-500 md:flex md:mt-16 lg:w-4/5 md:w-full sm3:w-full sm3:mt-4 sm1:mt-2'
        >
          <a className="flex flex-col transition duration-500 ease-in-out" href="mailto:anantjain.8k@gmail.com">
            <span className="underline xl:text-3xl underline-offset-8 hover:text-blue-400 lg:text-2xl md:text-xl sm2:text-lg sm3:font-normal md:font-bold sm1:text-md">anantjain.8k@gmail.com</span>
            <span className="tracking-tighter text-left text-black sm2:mt-2 xl:text-2xl sm3:invert-50 lg:text-xl md:text-lg sm1:text-center md:text-left sm1:invert-75 sm1:mt-1">Personal Email</span>
          </a>
          <a className="flex flex-col transition duration-500 ease-in-out sm3:mt-4 md:mt-0" href="mailto:f20200641@pilani.bits-pilani.ac.in">
            <span className="underline xl:text-3xl hover:text-blue-400 underline-offset-8 lg:text-2xl md:text-xl sm2:text-lg sm3:font-normal md:font-bold sm1:text-md">f20200641@pilani.bits-pilani.ac.in</span>
            <span className="tracking-tighter text-left text-black sm2:mt-2 xl:text-2xl sm3:invert-50 lg:text-xl md:text-lg sm1:text-center md:text-left sm1:invert-75 sm1:mt-1">University Email</span>
          </a>
        </motion.div>
        <div className='z-10 -ml-4 -mr-20 font-extrabold tracking-tighter text-black transform bg-blue-400 lg:p-4 lg:mt-24 xl:text-4xl -rotate-6 lg:text-3xl md:text-2xl md:mt-16 md:p-3 sm2:mt-8 sm1:mt-6 sm1:p-2'>
          <motion.div style={{x}} className='whitespace-nowrap'>that&apos;s too much scrolling for a day&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that&apos;s too much scrolling for a day&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that&apos;s too much scrolling for the day&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that&apos;s too much scrolling for a day</motion.div>
        </div>
        <div className='z-10 font-extrabold tracking-tighter text-black transform bg-blue-400 lg:p-4 lg:mt-24 xl:text-4xl -rotate-0 lg:text-3xl md:text-2xl md:mt-12 md:p-3 sm2:mt-6 sm1:mt-4 sm1:p-2'>
          <motion.div style={{x}} className='whitespace-nowrap'>thanks for sticking around&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;thanks for sticking around&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;thanks for sticking around&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;thanks for sticking around&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;thanks for sticking around</motion.div>
        </div>  
      </div>  
    );
}
export default Contact;