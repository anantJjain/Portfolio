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
            <div className='w-full m-auto font-extrabold text-center'>
                <div className='text-3xl text-blue-400 sm1:text-4xl md:text-7xl'>Oops !</div>
                <div className='w-full m-auto font-normal text-white sm1:mt-4 md:mt-8 sm1:text-2xl'>Page not found</div>
            </div>
            <Image src="/media/404.gif" alt="Error 404" width={150} height={150} className='m-auto border-0 border-red-500'></Image>
            <button className='p-4 m-auto text-xl text-white md:text-2xl'><Link href="/" className='font-normal tracking-tighter text-blue-400 hover:transform hover:translate-y-[-0.2rem] font-stencil-error'>Back to Home</Link></button>
        </div>
    </div>
  )
}

export default ErrorPage
