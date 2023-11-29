import { motion } from 'framer-motion'
import { useTransform,useScroll } from 'framer-motion';
import Scroll from './Scroll'
import { useMousePosition } from '../../../utils/useMousePosition';

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
        <div className='m-auto'>
          <Scroll />
        </div>
        </div>
      </motion.div>    
      </>
    )
  }
  export default About