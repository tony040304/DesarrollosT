import React from 'react'
import { motion } from 'framer-motion'
import Info from './Info/Info'

const PlanMap = ({ planes, bg, text, button, w, click }) => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 p-4 lg:pt-12 w-full md:h-fit justify-center items-center lg:items-stretch'>
            {
                planes.map((plan, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }} className={`flex flex-col ${bg} rounded-2xl hover:shadow-lg transition-transform transform hover:scale-105 hover:shadow-blue-500 h-fit lg:w-1/4 ${w}`} key={index}>
                        <div className='border-b-4 border-white flex flex-row justify-center items-center'>
                            <Info text={text} info={plan.descripcion} />
                            <h1 className='font-bold text-3xl md:text-5xl lg:text-4xl text-white p-4'>{plan.nombre}</h1>
                        </div>
                        <div className={`flex flex-col justify-start p-4 pl-0`}>
                            <div className='text-sm md:text-lg lg:text-sm text-nowrap flex flex-col items-start justify-start p-2 w-fit'>
                                <div>
                                    <h2 className={`p-2 text-xl font-bold ${text}`}>{plan.incluye}</h2>
                                </div>
                                <ul className='w-fit'>
                                    {plan.actividades.map((servicio, idx) => (
                                        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} key={idx} className={`${text} text-wrap mb-2`}>- {servicio}</motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex w-full justify-center flex-col items-center pt-0 px-4 pb-4 gap-2'>
                                <h2 className='text-white font-bold text-4xl'>${new Intl.NumberFormat("es-AR").format(plan.precio)}</h2>
                                <button onClick={click} className={`${button} font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-110 shadow-lightblue duration-200 ease-out shadow-md hover:shadow-xl hover:inset-shadow-sm focus:outline-none focus:ring-2 cursor-pointer`}>Obtener</button>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default PlanMap