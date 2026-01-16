import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react';
import { SlMenu } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      pathLength: 0.5,
      ease: "easeInOut",
    },
  },
}

const NavBar = () => {
  const [NavOpen, setNavOpen] = useState(false)
  const nav = useNavigate()
  const [scrollY, setScrollY] = React.useState(0)

  const Open = () => {
    setNavOpen(!NavOpen)
  }

  const home = () => {
    nav('/')
  }
  const contacto = () => {
    nav('/#contacto')
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      {
        window.scrollY > 780 && (
          <nav className='flex w-full bg-grayblue/50 backdrop-blur p-2 px-2 md:px-6 lg:px-12 xl:px-20 2xl:px-32 fixed top-0 left-0 z-50 shadow-md'>
            <div className='flex flex-row items-center justify-between w-full px-6'>
              <motion.div className='w-20 cursor-pointer' onClick={home}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <img src="/LogoAzul.png" alt="Logo" /></motion.div>
              <div className='md:block hidden font-bold text-2xl text-neonblue'>
                <div className='flex flex-row gap-x-10'>
                  <ul>Inicio</ul>
                  <ul>servicios</ul>
                  <ul>Contacto</ul>
                  <ul>Contacto</ul>
                </div>
              </div>
              <div className='md:hidden block'>
                <AnimatePresence>
                  {NavOpen &&
                    <motion.div className="fixed flex justify-center items-center w-full md:w-3/4 md:text-lg bg-secundario rounded-lg mx-auto left-0 right-0 top-10 md:top-14"
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      variants={variants}
                      layoutId="menu"
                    >
                      <motion.ul layout transition={{ duration: 1 }} className="flex flex-row gap-8 md:gap-12 p-4 text-blue-900 font-bold italic">
                        <li className='cursor-pointer' onClick={home}>Home</li>
                        <li className='cursor-not-allowed'>Proyectos</li>
                        <li className='cursor-pointer' onClick={contacto}>Contacto</li>
                      </motion.ul>
                    </motion.div>}
                </AnimatePresence>
                <SlMenu className='text-blue-950 cursor-pointer' onClick={Open} />
              </div>
            </div>
          </nav>
        )}
    </>
  )
}

export default NavBar