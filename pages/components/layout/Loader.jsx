import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import logo  from '../../../public/media/Loader.gif'


const loaderVariants ={
    initial:{
        height:0,
    },
    animate: (id) => ({
        height:800,
        transition:{ delay:0.3*id,type: 'spring',stiffness:150 }
    }),
}

const textVariants={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{ delay:2,type: 'spring',stiffness:150 }
    }
}

const sliderVariants = {
    initial:{
      scaleY:0,
      opacity:0,
    },
    animate:{
      scaleY:1,
      opacity:1,
      transition:{
        duration:0.2,
        ease:[0.12,0,0.39,0]
      }
    },
    exit:{
      scaleY:0,
      opacity:0,
      transition:{
        delay:1,
        duration:0.5,
        ease:[0.22,1,0.36,1]
      }
    }
  }

const Loader = () => {
  return (
    <AnimatePresence>
    <motion.div 
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid h-screen grid-cols-5 overflow-hidden text-5xl text-white origin-top"
    >

            <Image src={logo} alt="Anant" className='fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
    </motion.div>
    </AnimatePresence>
  )
}
export default Loader
