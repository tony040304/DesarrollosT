import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react';
import { SlMenu } from "react-icons/sl";
import setScroll from '../Components/Hook/setScroll';

const menuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3 }
  }
};

const NavBar = () => {
  const [NavOpen, setNavOpen] = useState(false)
  const [scrollY, setScrollY] = React.useState(0)
  const { handleScrollTo } = setScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  console.log(scrollY);
  return (
    <>
      {
        window.scrollY > 800 && (
          <nav className='flex w-full bg-grayblue/50 backdrop-blur p-2 px-2 md:px-6 lg:px-12 xl:px-20 2xl:px-32 fixed top-0 left-0 z-50 shadow-md'>
            <div className='flex flex-row items-center justify-between w-full px-6'>
              <motion.div className='w-20 cursor-pointer'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <img src="/LogoAzul.png" alt="Logo" /></motion.div>
              <div className='md:block hidden font-bold text-2xl text-neonblue'>
                <div className='flex flex-row gap-x-10'>
                  <ul className='cursor-pointer' onClick={() => handleScrollTo(950)}>Inicio</ul>
                  <ul className='cursor-pointer' onClick={() => handleScrollTo(1890)}>Servicios</ul>
                  <ul className='cursor-pointer' onClick={() => handleScrollTo(5686)}>Proyectos</ul>
                  <ul className='cursor-pointer' onClick={() => handleScrollTo(7584)}>Contacto</ul>
                </div>
              </div>
              <div className='md:hidden block'>
                <AnimatePresence>
                  {NavOpen && (
                    <motion.aside
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="fixed top-0 right-0 h-screen w-3/4 bg-zinc-900 z-50 p-6"
                    >
                      <button
                        onClick={() => setNavOpen(false)}
                        className="text-neon text-2xl mb-10"
                      >
                        ✕
                      </button>

                      <ul className="flex flex-col gap-6 text-white text-lg">
                        <li onClick={() => { setNavOpen(false); handleScrollTo(800) }}>Inicio</li>
                        <li onClick={() => { setNavOpen(!NavOpen); handleScrollTo(1600) }}>Servicios</li>
                        <li onClick={() => { setNavOpen(!NavOpen); handleScrollTo(6800) }}>Proyectos</li>
                        <li onClick={() => { setNavOpen(!NavOpen); handleScrollTo(8415) }}>Contacto</li>
                      </ul>
                    </motion.aside>
                  )}
                </AnimatePresence>
                <SlMenu onClick={() => setNavOpen(!NavOpen)} className='text-blue-950 cursor-pointer' />
              </div>
            </div>
          </nav>
        )}
    </>
  )
}

export default NavBar