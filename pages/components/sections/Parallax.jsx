import React from 'react'
const Parallax = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden font-extrabold tracking-tighter bg-fixed bg-no-repeat bg-cover md:pr-24 lg:pl-20 bg-backdrop md:pl-4 sm1:pr-0">
        <div className='pt-20 text-white md:pl-10 xl:text-10xl font-stencil lg:text-9xl md:text-8xl sm1:text-7xl sm1:p-0 sm1:text-center md:text-left sm1:mt-40 md:mt-0'>Scenic</div>
        <div className='text-blue-400 md:pl-10 2xl:-mt-44 xl:-mt-40 xl:text-10xl font-stencil lg:text-9xl lg:-mt-32 md:text-8xl md:-mt-24 sm1:text-7xl sm1:p-0 sm1:-mt-32 sm1:text-center md:text-left'>detour<span> :)</span></div>
        <div className='w-full pl-10 text-xl text-black'>. </div>
    </div>
  )
}
export default Parallax
