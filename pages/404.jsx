import Link from 'next/link'
import React,{ useState } from 'react'
import Lottie from 'lottie-react'
import errorGif from '../public/media/lotties/404Error(ErrorPage).json'


const ErrorPage = () =>{
    const [isHovered,setHover] = useState(false)
    const getHover = () => {
        setHover(true)
        console.log("hover ho gya")
    }
    const escapeHover = () => {
        setHover(false)
        console.log("hover chala gya")
    }
    return (
    <div className={`max-h-screen min-h-screen overflow-hidden bg-white ${isHovered ? 'invert-0 transition ease-in-out duration-300' : 'invert transition ease-in-out duration-300' }`}> 
        <div className='relative z-10 w-full pt-20 font-bold text-center text-black sm1:text-2xl md:text-4xl'>Oops! Page not found</div>
        <div className="z-0 m-auto overflow-hidden border-0 border-red-500 sm1:-mt-4 md:-mt-20 md:w-3/5 lg:w-2/5 sm1:w-full">
            <Lottie animationData={errorGif} className="scale-75 border-0 border-red-500" onMouseEnter={getHover} onMouseLeave={escapeHover}/>
        </div>
        <div className='relative z-20 flex justify-center m-auto border-0 border-red-500 sm1:-mt-10 lg:-mt-10 2xl:-mt-20 2xl:lg:w-2/5 lg:w-3/5 sm2:w-4/5'>
            <button onMouseEnter={getHover} onMouseLeave={escapeHover} className='md:w-1/3 sm1:p-2 md:p-4 m-auto font-bold text-center text-black border-2 border-black rounded-0 hover:scale-[1.1] transform transition ease-in-out duration-300'><Link href="/" className=''>Back to Home</Link></button>
            <button onMouseEnter={getHover} onMouseLeave={escapeHover} className='md:w-1/3 sm1:p-2 md:p-4 m-auto font-bold text-center text-black border-2 border-black rounded-0 hover:scale-[1.1] transform transition ease-in-out duration-300'><Link href="mailto:anantjain.8k@gmail.com" className=''>Report an Error</Link></button>
        </div>
    </div>
  )
}

ErrorPage.getLayout = function PageLayout(page){
    return <>{ page }</>
}

export default ErrorPage


