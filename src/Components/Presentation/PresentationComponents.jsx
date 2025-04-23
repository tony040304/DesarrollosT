import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion  } from "motion/react"
import { SlInfo } from "react-icons/sl";

const PresentationComponents = ({ title, paragraph, extra, info, where }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const navigate = useNavigate(); 

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsHovered(false);
        }, 500); 
    }

    const handleClick = () => {
        navigate(`/${where}`); 
    }

  return (
    <>
        <div className="border-2 border-sky-900 rounded-lg shadow-lg p-2 flex flex-row items-start justify-start max-h-60 mb-12 md:w-6/7 lg:w-200 xl:w-2/3 2xl:w-1/2">
              <div className='flex flex-col items-center justify-center border-r-2 border-r-sky-900 pl-0 p-2' onMouseEnter={()=>{setIsHovered(!isHovered)}} onMouseLeave={handleMouseLeave}>
                <h1 className='text-blue-950 text-sm text-nowrap 2xl:text-lg'>{title}</h1>
                <SlInfo className='text-blue-950' />
                <AnimatePresence>
                    {isHovered && <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }}
                     className='absolute text-sm mb-22 ml-26 w-60 bg-gray-900/50 text-wite p-2 rounded-lg shadow-md text-center whitespace-normal transition-all transition-discrete'>{info}</motion.div>}
                </AnimatePresence>
              </div>
                <div className='p-2 flex flex-row '>
                  <p className='text-blue-900 text-sm 2xl:text-base'>{paragraph} <span className='italic font-medium'>{extra}</span> <a className='cursor-pointer' onClick={handleClick}>Ver mas</a></p>
                </div>
            </div>
    </>
  )
}

export default PresentationComponents