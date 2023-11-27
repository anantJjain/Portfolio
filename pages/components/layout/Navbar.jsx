import { AnimatePresence, motion } from 'framer-motion'
import Link from "next/link"
import { GrLinkedinOption,GrGithub } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { MdEmail} from 'react-icons/md'
import { MenuItems } from '../../../public/data/MenuItems';

const Navbar = ({ toggleMenu }) => {
    return (        
        <div className='w-full'>
            <AnimatePresence>
                <motion.div 
                    // variants={sliderVariants}
                    // initial="initial"
                    // animate="animate"
                    // exit="exit"
                    className='pt-12 text-black bg-blue-400 border-0 border-red-500 pb-28'
                >
                        <div className="font-extrabold">
                            {
                                MenuItems.map( (item) => {
                                    return(
                                        <div key={item.id} className='m-auto text-center sm1:space-y-4 sm3:space-y-6 md:space-y-10 sm1:w-full sm1:text-3xl sm3:text-2xl md:text-5xl md:w-3/4'>
                                            <Link className='transition delay-200 border-0 border-red-500' href={`#${item.linkedSection}`} scroll={false}>
                                                <motion.button
                                                    // variants={linkVariants}
                                                    // initial="initial"
                                                    // whileHover="animate"
                                                    onClick={toggleMenu}
                                                    className=''
                                                >
                                                    <div className='text-4xl'>{item.name}</div> &nbsp;
                                                </motion.button>
                                            </Link>
                                        </div>    
                                    )
                                })
                            }
                        </div>
                        <div className='mt-0 text-4xl font-extrabold text-center'>
                            <div>
                                <Link 
                                    className="transition delay-200" 
                                    href='https://drive.google.com/file/d/1KgTNsw2jPpuE-QCrm2txd_l8RejSsj-M/view?usp=sharing'
                                    onClick={toggleMenu}
                                    target='_blank'
                                >
                                    <motion.button 
                                        // variants={linkVariants2}
                                        // initial="initial"
                                        // whileHover="animate"
                                        className="" onClick={toggleMenu}
                                    >
                                        <span className=''>Resume</span>    
                                    </motion.button>
                                </Link>
                            </div>
                            <div className='flex justify-between w-3/4 m-auto mt-20 text-3xl'>
                                <motion.a 
                                    // variants={iconVariants}
                                    // initial="initial"
                                    // whileHover="animate"
                                    href="https://www.linkedin.com/in/anantjainBE/" target="_blank" className=""><GrLinkedinOption /></motion.a>
                                <motion.a 
                                    // variants={iconVariants}
                                    // initial="initial"
                                    // whileHover="animate"
                                    href="https://github.com/anantJjain" target="_blank" className=""><GrGithub/></motion.a>
                                <motion.a 
                                    // variants={iconVariants}
                                    // initial="initial"
                                    // whileHover="animate"
                                    href="https://www.instagram.com/anantjain.8k/" target="_blank" className=""><RiInstagramFill /></motion.a>
                                <motion.a 
                                    // variants={iconVariants}
                                    // initial="initial"
                                    // whileHover="animate"
                                    href="mailto:anantjain.8k@gmail.com" target="_blank" className=""><MdEmail /></motion.a>
                                </div>
                        </div>
                </motion.div>    
            </AnimatePresence>
        </div>
  )
}

export default Navbar
