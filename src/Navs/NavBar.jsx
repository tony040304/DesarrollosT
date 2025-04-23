import React, { useState } from 'react'
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

  const Open = () => {
    setNavOpen(!NavOpen)
  }

  const home = () => {
    nav('/')
  }


  return (
    <nav className='fixed flex bg-primario w-full'>
      <div className='flex flex-row items-center justify-between w-full px-6'>
         <motion.h1 className='text-4xl text-blue-950 mt-2 font-title cursor-pointer' onClick={home}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
            DT</motion.h1>
            <AnimatePresence>
          { NavOpen &&
            <motion.div className="fixed flex justify-center items-center w-full md:w-3/4 md:text-lg bg-secundario rounded-lg mx-auto left-0 right-0 top-10 md:top-14 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            variants={variants}
            layoutId="menu"
              >
              <motion.ul layout transition={{ duration: 1 }} className="flex flex-row gap-8 md:gap-12 p-4 text-blue-900 font-bold italic">
                <li className='cursor-pointer' onClick={home}>Home</li>
                <li className='cursor-pointer'>Proyectos</li>
                <li className='cursor-pointer'>Contacto</li>
              </motion.ul>
            </motion.div>}
        </AnimatePresence>
         <SlMenu className='text-blue-950 cursor-pointer' onClick={Open} />
      </div>
    </nav>
  )
}

export default NavBar