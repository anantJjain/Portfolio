import Link from 'next/link'
import React, { use } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMousePosition } from '../utils/useMousePosition'

const ErrorPage = () =>{
    const { xPos,yPos } = useMousePosition()
    const size = 20
    return (
    <div className='min-h-screen overflow-hidden'>
        <div className='flex flex-col justify-center min-h-screen pt-20 pb-20 border-0 border-red-500'>   
            <div className='w-full m-auto font-extrabold tracking-tighter text-center text-white md:text-7xl'>
                <div className='text-blue-400'>Whoops !</div>
                <div className='w-full m-auto mt-20 text-4xl font-normal'>Page not found</div>
            </div>
            <Image src="/media/404.gif" alt="Error 404" width={150} height={150} className='m-auto border-0 border-red-500'></Image>
            <button className='p-4 m-auto text-3xl text-white'><Link href="/" className='font-bold tracking-tighter text-blue-400 hover:transform hover:translate-y-[-0.2rem] font-stencil-error'>Back to Home</Link></button>
        </div>
        
        <motion.div 
            animate={{
                WebkitMaskPosition: `${xPos-size/2}px ${yPos-size/2}px` ,
                WebkitMaskSize:`${size}px`
            }}
            transition={{ type:'tween',ease:'backOut'}}
            className='absolute top-0 flex flex-col justify-center w-full min-h-screen pt-20 pb-20 border-0 border-red-500 mask'
        >   
            <div className='w-2/5 m-auto font-extrabold tracking-tighter text-center text-white text-7xl'><span className='text-blue-400'>Whoops !</span> Something went wrong</div>
            <Image src="/media/404.gif" alt="Error 404" width={150} height={150} className='m-auto border-0 border-red-500'></Image>
            <button className='p-4 m-auto text-3xl text-white border-0 border-blue-400 hover:transform hover:translate-y-[-0.2rem] font-stencil-error'><Link href="/">Back to Home</Link></button>
        </motion.div>
    
    </div>
  )
}

export default ErrorPage
