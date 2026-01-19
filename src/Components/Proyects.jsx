import React from 'react'
import { motion } from "framer-motion";

const Proyects = ({ urlImg1, urlImg2, x, x1, y = 0, xTrans = -250, size = "md:w-60", fondo }) => {
    return (
        <div className={`h-screen flex flex-col items-center justify-center ${fondo} bg-cover bg-center`}>
            <div className="flex flex-col justify-between">
                <div className="relative flex justify-center -mt-80">
                    <motion.div
                        initial={{ x: x, y: y, scale: 1, rotate: -10 }}
                        whileHover={{ scale: 1.1, x: xTrans }}
                        whileTap={{ scale: 1.1, x: xTrans }}
                        transition={{ type: "spring" }}
                        className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer`}

                    >
                        <a href="https://www.instagram.com/opticadelsiglo/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${urlImg1}`}
                                alt="desk"
                                className="rounded-2xl shadow-md shadow-neon"
                            />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ x: x1, y: 0, scale: 1, rotate: 10 }}
                        whileHover={{ scale: 1.1, x: 250 }}
                        whileTap={{ scale: 1.1, x: 250 }}
                        transition={{ type: "spring" }}
                        className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer`}
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

export default Proyects