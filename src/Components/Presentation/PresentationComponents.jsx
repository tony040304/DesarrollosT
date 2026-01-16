import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { SlInfo } from "react-icons/sl";
import Info from '../Info/Info';

const PresentationComponents = ({ title, paragraph, extra, info, where }) => {



  return (
    <>
      <div className="border-2 border-sky-900 rounded-lg shadow-lg p-2 flex flex-row items-start justify-start max-h-60 mb-12 md:w-6/7 lg:w-200 xl:w-2/3 2xl:w-1/2 bg-grayblue">
        <div className='flex flex-col items-center justify-center border-r-2 border-r-sky-900 pl-0 p-2'>
          <h1 className='text-neon font-bold text-sm text-nowrap 2xl:text-lg text-shadow-xs'>{title}</h1>
          <Info info={info} />
        </div>
        <div className='p-2 flex flex-row '>
          <p className='text-blue-900 text-sm 2xl:text-base'>{paragraph} <span className='italic font-medium'>{extra}</span> <a href={`/${where}`} className='cursor-pointer'>Ver mas</a></p>
        </div>
      </div>
    </>
  )
}

export default PresentationComponents