import React from 'react'
import useIdSection from '../Hook/useIdSection';
import Info from '../Info/Info';
import { useNavigate } from 'react-router-dom';

const PresentationComponents = ({ title, paragraph, extra, info, where }) => {
  const [clamped, setClamped] = React.useState(true);
  const nav = useNavigate();


  return (
    <>
      <div className=" rounded-2xl flex flex-row items-center justify-center max-h-60 mb-12 md:w-6/7 lg:w-200 xl:w-2/3 2xl:w-1/2 border border-neonblue/20 bg-white shadow-[inset_0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-2xl">
        <div className='flex flex-col items-center justify-center border-r-2 h-full border-neonblue pl-0 p-2 min-w-1/3 lg:min-w-1/4'>
          <h1 onClick={() => { nav(`/${where}`); }} className='text-neon text-center font-bold text-md text-wrap 2xl:text-lg text-shadow-2xs text-shadow-black/50 p-2'>{title}</h1>
          <Info info={info} />
        </div>
        <div className='p-2 flex flex-row '>
          <p className={`text-blue-900 text-sm 2xl:text-base ${clamped ? 'line-clamp-4' : 'line-clamp-none'} lg:line-clamp-5 xl:line-clamp-none`} onClick={() => setClamped(!clamped)}>{paragraph} <span className='italic font-medium'>{extra}</span><a onClick={() => { nav(`/${where}`); }} className='cursor-pointer font-bold'>Ver mas</a></p>
        </div>
      </div>
    </>
  )
}

export default PresentationComponents