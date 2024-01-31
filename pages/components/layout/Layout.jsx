import React,{ useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    const [ isOpen,setOpen ] = useState(false)
    const toggleOpen = () => setOpen(true)
    const toggleClose = () => setOpen(false)
    return (
        <div>
            <Header isOpen={isOpen} toggleClose={toggleClose} toggleOpen={toggleOpen}/>
            {
                !isOpen && (
                    <>
                        <div>
                            { children }
                        </div>    
                        <Footer />   
                    </>
                ) 
            }

        </div>
    )
}

export default Layout
