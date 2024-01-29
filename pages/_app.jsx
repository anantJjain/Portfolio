

import { useState,useEffect } from 'react'
import Head from 'next/head'
import Loader from './components/layout/Loader'
import { motion } from 'framer-motion'
import '../styles/globals.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import { Noto_Sans } from 'next/font/google' 

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
const notoSans = Noto_Sans({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin-ext']
})

const MyApp = ({ Component, pageProps }) => {
  const [ loading,setLoading ] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false),6000)
  })
  const [ isOpen,setOpen ] = useState(false)
  const toggleOpen = () => setOpen(true)
  const toggleClose = () => setOpen(false)
  
  return(
        <>
          <Head>
              <title>Anant Jain | Portfolio </title>
          </Head>
          {
            loading ? 
              <>
                <Loader />
              </>
              : 
              <>
                <Header isOpen={isOpen} toggleClose={toggleClose} toggleOpen={toggleOpen}/>
                <motion.div 
                  initial={{opacity:0}}
                  whileInView={{opacity:1,transition:{type:'spring',duration:1}}}
                  className={`${notoSans.className} overflow-hidden bg-[#000] relative`}
                  
                >
                  {
                    !isOpen && (
                      <div className='z-10 border-0 border-red-500'>
                        <Component {...pageProps}/>
                      </div>
                    )
                  }
                  <div><Footer /></div>
                </motion.div>
              </>
          }
        </> 
  )}

  export default MyApp