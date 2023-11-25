import { useState,useEffect } from "react";

export const useMousePosition = () => {
    const [ mousePosition,setMousePosition ] = useState( { xPos:0,yPos:0 })
    const updateMousePosition = (e) => {
        setMousePosition({ xPos:e.clientX,yPos:e.clientY })
    }
    useEffect(
        ()=>{
            window.addEventListener("mousemove",updateMousePosition)
            // console.log(mousePosition)
            return () => {
                window.removeEventListener("mousemove",updateMousePosition)
            }
        }
    )
    return mousePosition
}
