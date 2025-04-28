import React from 'react'
import { motion } from 'framer-motion'
import { div } from 'motion/react-client'

const Draw = {
        hidden: {
            pathLength: 0,
            opacity: 0 },
        visible: (i) => {
            const delay = i *0.5
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.1 },
                }
            }

        },
      }

const CircleDraw = ({ requisito }) => {
  return (
    <div className='flex flex-col justify-center items-center w-fit h-full'>
        <h1 className='text-gray-400 text-base mb-2 2xl:text-xl'>{requisito}</h1>
        <motion.svg width="50" height="50" viewBox="0 0 200 200" className=''>
            <motion.circle cx="100" cy="100" r="90" fill="none" stroke="#00ff7f" strokeWidth="14"
                variants={Draw} initial="hidden" whileInView="visible" custom={1} />
                <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="40"
                    fill="white"
                >
                    100%
                </text>
        </motion.svg>
    </div>
  )
}


export default CircleDraw