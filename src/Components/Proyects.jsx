import React from 'react'
import { motion } from "framer-motion";

const Proyects = ({ urlImg1, urlImg2, urlImg3, x, x1, y = 0, xTrans = -250, x1trans = 250, size = "md:w-60", fondo, img, title }) => {
    return (
        <div className={`h-screen flex flex-col items-center justify-start ${fondo} bg-cover bg-center object-bottom-right`}>
            <h1 className='font-black text-4xl md:text-7xl xl:text-7xl text-nowrap text-neonblue p-8 w-full flex justify-center items-center text-center'>{title}</h1>
            <div className={`h-screen flex items-center justify-center`}>
                <div className="flex flex-col justify-between">
                    <div className="relative flex justify-center -mt-80">
                        <motion.div
                            initial={{ x: x, y: y, scale: 1, rotate: -10 }}
                            whileHover={{ scale: 1.1, x: xTrans }}
                            transition={{ type: "spring" }}
                            className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer z-10`}

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
                            whileHover={{ scale: 1.1, x: x1trans }}
                            transition={{ type: "spring" }}
                            className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer z-10`}
                        >
                            <img
                                src={`${urlImg2}`}
                                alt="desk"
                                className={`rounded-2xl shadow-md shadow-neon ${img}`}
                            />
                        </motion.div>

                        {urlImg3 &&
                            <motion.div
                                initial={{ x: 0, y: -20, scale: 1, rotate: 0 }}
                                whileHover={{ scale: 1.2, x: 0, y: -50 }}
                                transition={{ type: "spring" }}
                                className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer z-20`}
                            >
                                <a href="https://bairesdeportes.com.ar/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={`${urlImg3}`}
                                        alt="desk"
                                        className="rounded-2xl shadow-md shadow-neon"
                                    />
                                </a>
                            </motion.div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects