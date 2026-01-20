import React, { useState } from 'react'
import { ArrowFatLeftIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import useBreakPoint from './Hook/useBreakPoint'
import PlanMap from './PlanMap'
import { title } from 'motion/react-client'

const Planes2 = ({ mobile, md, lg, xl, fondo, title, click }) => {
    const [isOpen, setIsOpen] = useState(false);
    const screenWidth = useBreakPoint();
    const [width, setWidth] = useState(220);
    const [aspectRatio, setAspectRatio] = useState(0.7);
    let config;

    if (screenWidth < 768) {
        config = mobile;
    } else if (screenWidth < 1024) {
        config = md;
    } else if (screenWidth < 1440) {
        config = lg;
    } else {
        config = xl;
    }

    const { plan, ratio, w } = config;
    const handleWith = () => {
        if (isOpen) {
            setAspectRatio(0.7)
            setWidth(220)
            setIsOpen(!isOpen)
        } else {
            setAspectRatio(ratio)
            setWidth(w)
            setIsOpen(!isOpen)
        }
    }
    return (
        <div className={`${!isOpen ? 'h-screen' : 'h-fit'} w-full flex flex-col justify-start items-center ${fondo}`}>
            <h1 className='font-black text-4xl md:text-7xl xl:text-7xl text-wrap text-neon p-8 text-center mt-16'>{title}</h1>
            <div className='flex justify-center items-center p-12 h-fit w-full'>
                <AnimatePresence mode="wait">
                    <motion.div
                        animate={{ aspectRatio: aspectRatio, width: width }}
                        transition={{ duration: 0.5 }}
                        className={`bg-white flex flex-col xl:flex-row justify-center items-stretch rounded-2xl shadow-2xl cursor-pointer ${!isOpen ? 'hover:shadow-lightblue transition-transform transform hover:scale-105 hover:shadow-lg' : ''}`}
                    >
                        {
                            !isOpen ? (
                                <div className='flex flex-row justify-center items-center' onClick={handleWith}>
                                    <ArrowFatLeftIcon className='text-neon' size={40} />
                                    <h1 className='text-4xl font-bold text-neonblue rotate-90'>Planes</h1>
                                </div>
                            ) : (
                                <PlanMap click={onclick} w={'xl:w-1/2 lg:w-1/3'} text={'text-white'} planes={plan} bg={"bg-neonblue"} button={"bg-neon hover:bg-neonblue hover:text-neon shadow-lightblue/30 hover:shadow-lightblue/10 hover:inset-shadow-lightblue/50"} />
                            )
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Planes2