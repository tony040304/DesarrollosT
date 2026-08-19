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
        <motion.div
            style={{
                x,
                top: `${vh}vh`,
                height: `calc(100vh - ${vh}vh)`
            }}
            className="absolute left-1/2 -translate-x-1/2 w-1/3 border border-neon/20 bg-gradient-to-b from-[#191E0F] to-slate-950/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
        >
            <h3 className="text-2xl font-bold text-center text-white">
                {valor}
            </h3>

            <p className="mt-3 text-center text-sm leading-7 text-slate-300">
                {descripcion}
            </p>
        </motion.div>
    )
}

export default ValoresBox