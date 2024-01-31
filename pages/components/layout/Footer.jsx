import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex justify-between w-11/12 sm1:pt-2 md:pt-4 m-auto border-t-[0.1rem] border-white/10 pb-4">
      <div className="pl-4 mt-1 text-sm font-light text-white/50">made with <span className="text-white">❤️</span> by <span className="font-bold text-white">Anant</span></div>
      <div className="pr-4 text-white md:text-xl sm1:hidden md:flex"><Link href="mailto:anantjain.8k@gmail.com" target="_blank" className="hover:text-blue-400 hover:scale-110">Get in touch</Link></div>
    </div>
  )
}

export default Footer
