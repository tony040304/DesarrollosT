import React from 'react'
import useIdSection from '../Hook/useIdSection';
import Info from '../Info/Info';

const PresentationComponents = ({ title, paragraph, extra, info, where }) => {
  const { scrollToSection } = useIdSection();


  return (
    <>
      <div className="border-2 border-neonblue rounded-2xl shadow-lg flex flex-row items-center justify-center max-h-60 mb-12 md:w-6/7 lg:w-200 xl:w-2/3 2xl:w-1/2 bg-grayblue">
        <div className='flex flex-col items-center justify-center border-r-2 h-full border-neonblue pl-0 p-2 min-w-1/3 lg:min-w-1/4'>
          <h1 className='text-neon text-center font-bold text-md text-wrap 2xl:text-lg text-shadow-xs p-2'>{title}</h1>
          <Info info={info} />
        </div>
        <div className='p-2 flex flex-row '>
          <p className='text-blue-900 text-sm 2xl:text-base line-clamp-4 lg:line-clamp-5 xl:line-clamp-none'>{paragraph} <span className='italic font-medium'>{extra}</span><a onClick={() => scrollToSection(where)} className='cursor-pointer font-bold'>Ver mas</a></p>
        </div>
      </div>
    </>
  )
}

export default PresentationComponents