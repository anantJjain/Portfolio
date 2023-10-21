import { useState,useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import '../styles/globals.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Loader from './components/layout/Loader'

const loaderVariants ={
  initial:{
      height:800,
  },
  animate:(id) => ({
      height:0,
      y:-200,
      transition:{ delay:0.3*id,type: 'easeInOut',stiffness:50,duration:0.3},
  }),
}

const MyApp = ({ Component, pageProps }) => {
  const [ loading,setLoading ] = useState(true)
  const [ isOpen,setOpen ] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false),8000)
  })
  
  return(
    <Head>
      <title>Anant Jain | Portfolio </title>
    </Head>,
    !loading ?
        <>
        <motion.div 
          initial={{backgroundColor:'#60a5fa',opacity:0.8}}
          whileInView={{backgroundColor:'#000',opacity:1}}
          transition={{type:'tween'}}
        >
          <Header menuState={isOpen} menuMethod={setOpen} className={isOpen?'bg-black':'bg-blue-400'}/>
        </motion.div>
          {
            isOpen ?
              <><Navbar menuState={isOpen} menuMethod={setOpen} className='border-2 border-red-500'/></>
            :
              <div className={isOpen?'bg-blue-400':'bg-black'}>
                <div className='grid grid-cols-5'>
                <motion.div 
                    variants={loaderVariants}
                    initial="initial"
                    animate="animate"
                    className='bg-blue-400'
                    custom={5}
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
                    custom={3}
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
                    custom={1}
                >
                </motion.div>
                </div>  
                <Component {...pageProps} />
                <Footer />
              </div>
          }
        </>
        :
        <>
          <Loader />
        </>
  )}

  export default MyApp