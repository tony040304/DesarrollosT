import React from 'react'
import PlanMap from './PlanMap'

const Plans = ({ planes, fondo, title, click }) => {
    return (
        <div className={`lg:h-screen h-full flex flex-col justify-center items-center ${fondo}`}>
            <div className='flex justify-start items-start h-fit'>
                <h1 className='font-black text-4xl md:text-7xl xl:text-7xl text-nowrap text-neonblue p-8'>{title}</h1>
            </div>
            <div>
                <PlanMap click={click} planes={planes} bg="bg-neon" text="text-black" button="bg-neonblue text-white hover:bg-neon hover:text-neonblue" />
            </div>
        </div >
    )
}

export default Plans