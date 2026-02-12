import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { SlInfo } from "react-icons/sl";

const Info = ({ info, text = 'text-black' }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsHovered(false);
        }, 500);
    }

    return (
        <div className='p-2 z-20' onMouseEnter={() => { setIsHovered(!isHovered) }} onMouseLeave={handleMouseLeave}>
            <SlInfo className={`${text} cursor-pointer`} />
            <AnimatePresence>
                {isHovered && <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, x: -220 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }}
                    className='z-20 absolute text-sm mb-22 ml-26 w-60 bg-black/60 p-2 rounded-lg shadow-md text-center whitespace-normal transition-all transition-discrete text-white'>{info}</motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default Info