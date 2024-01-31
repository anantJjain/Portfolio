import React,{ useEffect, useState } from "react"
import { gsap,CSSPlugin,Expo } from "gsap"
gsap.registerPlugin(CSSPlugin)

const Loader = () => {
  const [counter,setCounter] = useState(0)
  useEffect(()=>{
    const count = setInterval(()=>{
      setCounter( ( counter ) => counter<100 ? counter+1 : (clearInterval(count),setCounter(100),reveal()))
    },25)  
  },[])
  
  const reveal = () => {
    const tl = gsap.timeline({
      onComplete:()=>{
        console.log("Completed")
      }
    })
    tl.to("#line",{
      width:"100%",
      ease:Expo.easeInOut,
      duration:1.2,
      delay:0.7,
    })
    .to("#counter",{ opacity:0,duration:0.3 })
    .to("#counter",{ display:"none",duration:0.3 })
    .to("#line",{
      height:"100%",
      ease:Expo.easeInOut,
      duration:0.7,
      delay:0.5,    
    })
    .to("#content",{ opacity:1,width:"100%",ease:Expo.easeInOut,duration:0.7})
    .to("#content-lines",{ display:"block",duration:0.1 })
    .to("#content-lines",{
      opacity: 1,
      stagger: 0.15,
      ease: Expo.easeInOut,
      duration: 0.6,
    })
  }
  
  return (
    <div className="relative w-screen h-screen overflow-hidden text-black">
      <div className="h-full w-full bg-[#000] flex justify-center items-center absolute top-0">
        <div id="line" className="absolute left-0 z-20 w-0 h-[2px] bg-blue-400"></div>
        <div id="progress-bar" className="absolute left-0 w-0 h-[1px] transition bg-white/80 0.4 transform" style={{ width:counter+"%" }}></div>
        <div id="counter" className="absolute z-30 tracking-tighter transform font-extralight text-white/80 sm1:-translate-y-10 md:-translate-y-20 sm1:text-5xl md:text-8xl">{counter}%</div>
      </div>
      <div id="content" className="absolute top-0 left-0 w-0 h-full bg-[#000] p-auto z-20 text-white">
        <div className="h-screen"></div>
      <div>
        </div>
      </div>
    </div>
  )
}

export default Loader