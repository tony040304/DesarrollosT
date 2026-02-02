import React, { useState } from 'react'
import SvgCard from './SvgCard'
import { cardComm } from '../Data/Cards.json'
import IconRenderer from './IconRenderer'
import PlanMap from '../Components/PlanMap'

const PreviousCard = ({ click, planes, title, card, fondo }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${!isOpen ? 'h-screen' : 'h-fit'} lg:h-screen w-full flex flex-col justify-start items-center ${fondo} bg-cover `}>
            <h1 className='font-black text-4xl md:text-7xl xl:text-7xl text-wrap text-black p-2 text-center mt-16'>{title}</h1>
            <div className={`flex justify-center items-center h-fit ${!isOpen ? 'h-screen' : 'h-fit'}`}>
                {!isOpen ?
                    (
                        <div className='shadow-lg/30 rounded-xl bg-neutral-100 backdrop-blur-md p-6 gap-6 flex-row inset-shadow-2xs mx-4 md:mx-0 grid grid-cols-2 md:grid-cols-4'>
                            {card.map((card, index) => (
                                <div className='flex flex-col items-start justify-start p-4 lg:col-span-2 bg-white shadow-lg/20 rounded-lg inset-shadow-2xs border-2 border-black/10 transform transition-transform hover:scale-102 hover:inset-shadow-sm/10 cursor-default' key={index}>
                                    <div className='w-full flex justify-center items-center'>
                                        <IconRenderer iconName={card.icon} />
                                    </div>
                                    <p className='text-black'>{card.name}</p>
                                </div>
                            ))
                            }
                            <div className='bg-white col-span-2 md:col-span-4 lg:col-span-6 shadow-lg rounded-3xl inset-shadow-2xs border-2 border-black/10 p-4 flex justify-between items-center'>
                                <h1>Mas informacion</h1>
                                <button onClick={() => setIsOpen(!isOpen)} className='flex justify-center items-center p-2 cursor-pointer bg-neon rounded-2xl w-1/3 text-lg text-shadow-md shadow-lg transform transition-transform hover:scale-102 hover:shadow-xl/20'>Planes</button>
                            </div>
                        </div>
                    )
                    :
                    (
                        <PlanMap click={click} planes={planes} bg="bg-neon" text="text-black" button="bg-neon text-neonblue" />
                    )
                }
            </div>
        </div>
    )
}

export default PreviousCard