import React, { useState } from 'react'
import { motion } from "framer-motion";

const ProyectsPhone = ({ urlImg1, urlImg2, size = "w-60", fondo }) => {
    const [x, setX] = useState(-50);
    const [x1, setX1] = useState(50);
    const [scale1, setScale1] = useState(1);
    const [scale, setScale] = useState(1);
    const handlex1 = (x, s) => {
        setX1(x);
        setScale1(s);
    }
    const handlex = (x, s) => {
        setX(x);
        setScale(s);
    }

    return (
        <div className={`h-screen flex flex-col items-center justify-center ${fondo} bg-cover bg-center object-bottom-right`}>
            <div className="flex flex-col">
                <div className="relative flex justify-center items-center">
                    <motion.div
                        animate={{ x: x, y: 0, scale: scale, rotate: -5 }}
                        whileTap={{ scale: 1.2, x: x }}
                        transition={{ type: "spring" }}
                        className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer`}
                        onHoverStart={() => handlex1(200, 0.9)}
                        onHoverEnd={() => handlex1(50, 1)}
                    >
                        <img
                            src={urlImg1}
                            alt="desk"
                            className="w-full h-auto rounded-2xl shadow-md shadow-neon block"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ x: x1, y: 0, scale: scale1, rotate: 5 }}
                        whileTap={{ scale: 1.2, x: x1 }}
                        transition={{ type: "spring" }}
                        className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer`}
                        onHoverStart={() => handlex(-200, 0.9)}
                        onHoverEnd={() => handlex(-50, 1)}
                    >
                        <img
                            src={`${urlImg2}`}
                            alt="desk"
                            className="rounded-2xl shadow-md shadow-neon"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ProyectsPhone