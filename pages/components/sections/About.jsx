import React,{ useRef } from 'react'
import { motion,useTransform,useScroll} from "framer-motion"
import Lottie from "lottie-react";
import Scroll from './Scroll';
import Parallax from './Parallax';
import about from "../../../public/media/lotties/FloatingYogaMan(About).json";


const boxVariants = {
    initial:{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
    },
    animate:{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        transition: { duration:0.7,delay:1,type:'tween',ease:'linear'}
    }
}
const About = () => {
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll()
    const toRight = useTransform(scrollYProgress,[0,1],[-200,200])
    const toLeft = useTransform(scrollYProgress,[0,1],[0,-2000])  
    const toRight1 = useTransform(scrollYProgress,[0,1],[-1000,100])
    const toRight2 = useTransform(scrollYProgress,[0,1],[100,-1000])
    const toUp = useTransform(scrollYProgress,[0,1],[10,-800])
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    return (
        <div className='bg-[#000] text-white'>
            <div className='w-2/3 m-auto border-0 border-red-500 md:text-sm sm1:text-xs fontwt'>
                <div className='border-0 border-red-500 xl:w-1/5 sm1:w-4/5 md:w-2/5'>Available for freelance & remote jobs/internships after</div>
                <div className='mt-2 font-bold text-blue-400 border-0 border-red-500 sm1:text-sm md:text-lg'>{ formattedDate }</div>
            </div>
            <motion.div 
                className="font-extrabold leading-[4rem] tracking-tighter text-10xl text-white mt-10 whitespace-nowrap uppercase"
                style={{x:toRight}}
            >   
                <span className='font-mine sm1:text-7xl md:text-10xl'>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                </span>
            </motion.div>
            <motion.div 
                style={{x:toLeft}}
                className="relative z-20 font-extrabold tracking-tighter text-white uppercase md:-mt-10 text-10xl whitespace-nowrap sm1:-mt-4"
            >
                <span className='font-mine sm1:text-7xl md:text-10xl'>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>—
                    <span>myself </span>
                </span>
            </motion.div>
            <motion.div 
                className={`relative z-10 sm1:w-10/12 md:w-2/3 m-auto md:-mt-24 sm1:-mt-16 border-0 border-red-500`}
                style={{y:toUp}}
                variants={boxVariants}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                ref={imageRef}
            >
                <div className='sm1:bg-blue-400 md:bg-blue-400 w-fit md:p-10'>
                    <Lottie
                        animationData={about}
                        className="grayscale-0"
                        loop={true}
                    />
                </div>
            </motion.div>
            <motion.div 
                style={{y:toUp}}
                className='w-2/3 m-auto border-0 border-red-500 md:mt-20 sm1:mt-10'
            >
                <div className='border-0 border-red-500 xl:w-1/3 sm1:w-full sm1:text-sm md:text-md md:w-2/3'>
                    I am a self taught full stack web developer with experience in creating digital interfaces, websites and have the ability to bring those concepts to life.
                </div>
            </motion.div>
            <div className='mt-24'>
                <div className='w-2/3 m-auto font-bold text-blue-400 border-0 border-red-500 md:mt-40 sm1:mt-10 sm1:text-sm md:text-md'>MY PROCESS</div>
                <motion.div style={{x:toRight1}} className='relative z-20 sm1:mt-8 sm1:text-5xl md:mt-12 font-extrabold leading-[4rem] tracking-tighter md:text-8xl uppercase whitespace-nowrap font-mine text-white'>user study — research — goals — user study — research — goals — user study — research — goals</motion.div>
                <motion.div style={{x:toRight2}} className='relative z-20 font-extrabold tracking-tighter text-white uppercase sm1:-mt-0 md:-mt-2 lg:-mt-1 sm1:text-5xl md:text-8xl font-stencil2 whitespace-nowrap font-mine'>problem f<span className="font-change">i</span>nd<span className="font-change">i</span>ng — goal analys<span className="font-change">i</span>s — goals — problem f<span className="font-change">i</span>nd<span className="font-change">i</span>ng — goal analys<span className="font-change">i</span>s — goals </motion.div>
                <motion.div style={{x:toRight1}} className='relative z-20 sm1:-mt-0 sm1:text-5xl md:-mt-2 lg:-mt-1  font-extrabold leading-[4rem] tracking-tighter md:text-8xl uppercase whitespace-nowrap font-mine text-white'>develop<span className="font-change">i</span>ng ux — v<span className="font-change">i</span>sual strategy — develop<span className="font-change">i</span>ng ux — v<span className="font-change">i</span>sual strategy</motion.div>
                <motion.div style={{x:toRight2}} className='relative z-20 font-extrabold tracking-tighter text-white uppercase sm1:-mt-0 md:-mt-2 lg:-mt-1 sm1:text-5xl md:text-8xl font-stencil2 whitespace-nowrap font-mine'>user test<span className="font-change">i</span>ng — des<span className="font-change">i</span>gn & deploy — user test<span className="font-change">i</span>ng — des<span className="font-change">i</span>gn & deploy  </motion.div>
                <div className='relative z-10 m-auto border-0 border-red-500 md:grid sm1:hidden md:grid-cols-2 xl:w-3/5 mt-28 sm1:w-2/3 md:w-3/4'>
                    <div className='font-bold text-blue-400 border-0 border-red-500 xl:text-center sm1:text-left'>Background</div>
                    <div className='border-0 border-red-500 sm1:w-full md:text-sm sm1:mt-2 md:mt-0 sm1:text-xs xl:w-3/4'>
                        <div>Currently l am in my prefinal year at BITS Pilani,I have a good experience as a freelancer from past 1+ years,on college level I have worked on many practical projects being a member of college&apos;s coding socities.</div>
                        <div className='md:mt-12 sm1:mt-4'>I have 2 years of experience as a full stack developer with the ability to bring concepts to life through creative front-end development. I love everything that has to do with product & visual design,mobile & web as well as typography, and animations.</div>
                    </div>
                </div>
            </div>
            <div className='lg:pb-80'>
                <Scroll />      
            </div>
        </div>
  )
}
export default About
