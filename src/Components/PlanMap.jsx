import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Info from './Info/Info'

const PlanMap = ({ planes, bg, text, button, w, click }) => {

    const servicio = planes.map(plan => plan.nombre).join(', ');


    useEffect(() => {
        fbq('track', 'ViewContent', {
            content_name: servicio
        });
    }, []);

    return (
        <div className='flex flex-col h-full lg:flex-row gap-8 lg:gap-10 p-4 lg:pt-12 w-full md:h-fit justify-center items-center lg:items-stretch'>
            {
                planes.map((plan, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex flex-col border-2 border-black/10 rounded-2xl hover:shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl/20 h-fit w-5/6 lg:w-1/3 `} key={index}>
                        <div className=' flex flex-row justify-center items-center'>
                            <Info text={text} info={plan.descripcion} />
                            <h1 className='font-bold text-2xl text-neonblue p-4'>{plan.nombre}</h1>
                        </div>
                        <div className={`border-t-4 border-white shadow-md flex flex-col justify-start p-4 pl-0 bg-neutral-100 rounded-b-2xl z-0`}>
                            <div className='text-sm md:text-lg lg:text-sm text-nowrap flex flex-col items-start justify-start p-2 w-fit'>
                                <div>
                                    <h2 className={`p-2 text-xl font-bold ${text}`}>{plan.incluye}</h2>
                                </div>
                                <ul className='w-fit'>
                                    {plan.actividades.map((servicio, idx) => (
                                        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} key={idx} className={`${text} text-wrap mb-2`}> {servicio}</motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex w-full justify-center flex-col items-center pt-0 px-4 pb-4 gap-2'>
                                <h2 className='text-neonblue font-bold text-4xl'>{plan.precio === "Consultar" ? plan.precio : `$${plan.precio}`}</h2>
                                <button onClick={click} className={`${button} font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-110 duration-200 ease-out shadow-md hover:shadow-xl/20 cursor-pointer`}>Obtener</button>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default PlanMap