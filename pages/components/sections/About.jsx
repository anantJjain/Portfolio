import { motion } from 'framer-motion'
import { useTransform,useScroll } from 'framer-motion';
import Scroll from './Scroll'
import { useMousePosition } from '../../../utils/useMousePosition';
import Lottie from "lottie-react";
import animationData from "../../../public/media/lotties/projects.json";

const About = () => {    
    const { scrollYProgress } = useScroll()
    const { xPos,yPos } = useMousePosition()
    const size = 40;
    const x = useTransform(scrollYProgress,[0,1],[-800,1100])
    
    return (
      <>
      <motion.div id="about" className="relative pt-20 mt-0 overflow-hidden text-white border-0 border-red-400 md:mt-20 xl:mt-40"> 
        <div>
        <div className='absolute z-0 -ml-10 -mr-40 font-extrabold tracking-tighter text-black transform bg-blue-400 sm3:p-4 md:text-4xl sm3:text-2xl sm1:p-2 sm1:text-xl'>
          <motion.div style={{x}} className='lowercase whitespace-nowrap'>About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET&apos;S GET TO KNOW EACH OTHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET&apos;S GET TO KNOW EACH OTHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET&apos;S GET TO KNOW EACH OTHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET&apos;S GET TO KNOW EACH OTHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET&apos;S GET TO KNOW EACH OTHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET&apos;S GET TO KNOW EACH OTHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET&apos;S GET TO KNOW EACH OTHER</motion.div>
        </div> 
        <div className='flex pt-0 border-0 border-red-500'>
          <Lottie
              animationData={animationData}
              className="md:w-4/5 lg:w-3/5 grayscale sm1:w-full"
              loop={true}
          />
          <div className='w-full font-extrabold tracking-tighter text-center text-white border-0 border-red-500 sm1:hidden md:block md:pt-40 lg:pt-60 md:text-7xl lg:text-8xl xl:text-9xl'>About <span className='text-blue-400'>me</span></div> 
          
        </div>
        <div className='m-auto'>
          <Scroll />
        </div>
        </div>
      </motion.div>    
      </>
    )
  }
  export default About