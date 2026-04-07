import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from 'motion/react-client';

const ValoresBox = ({ valor, descripcion, vh, posi }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [`${posi}%`, "-1000%"]);

    return (
        <div className='h-[50vh]'>
            <motion.div style={{ x, top: `${vh}vh` }} className={`flex flex-col justify-center items-center gap-4 w-1/4 bg-grayblue border border-neonblue/20 rounded-2xl p-6 shadow-lg object-cover absolute left-1/2 -translate-x-1/3`}>
                <h3 className='text-2xl font-bold text-center text-neonblue'>{valor}</h3>
                <p className='text-center'>{descripcion}</p>
            </motion.div>
        </div>
    )
}

export default ValoresBox