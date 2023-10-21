import Image from 'next/image'
import { motion } from 'framer-motion'
import logo  from '../../../public/media/Anant.gif'

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



const Loader = () => {
  return (
    <div className="grid h-screen grid-cols-5 text-5xl text-white">
        <motion.div 
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            className='bg-blue-400'
            custom={1}
        >
        
        </motion.div>
        <motion.div 
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            className='bg-blue-400'
            custom={2}
        >
        
        </motion.div>
        <motion.div 
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            className='bg-blue-400'
            custom={3}
        >
        
        </motion.div>
        <motion.div 
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            className='bg-blue-400'
            custom={4}
        >  
        
        </motion.div>
        <motion.div 
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            className='bg-blue-400'
            custom={5}
        >
        </motion.div>

        <motion.div 
            variants={textVariants}
            initial="initial"
            animate="animate"
            className='text-5xl text-black align-middle border-2 border-red-500 top-32'
        >
        </motion.div>
        <motion.div
            variants={textVariants} 
            initial="initial"
            animate="animate"   
        >
            <Image src={logo} alt="Anant" className='fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
        </motion.div>
    </div>
  )
}
export default Loader
