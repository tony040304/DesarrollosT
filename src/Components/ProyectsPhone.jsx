import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import AnimacionBlur from './AnimacionBlur';

const ProyectsPhone = ({ urlImg1, urlImg2, size = "w-60", fondo, urlImg3, img, title, click, click2, click3 }) => {
    const [x, setX] = useState(-50);
    const [x1, setX1] = useState(50);
    const [scale1, setScale1] = useState(1);
    const [scale, setScale] = useState(1);
    const [x1bool, setX1bool] = useState(true);
    const [xbool, setXbool] = useState(true);
    const [x2, setX2] = useState(0);
    const [scale2, setScale2] = useState(1);
    const [x2bool, setX2bool] = useState(true);
    const [x2Rotate, setX2Rotate] = useState(0);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);


    const handlex1 = () => {
        if (x1bool) {
            setX1(200);
            setScale1(0.9);
            setX(-50);
            setScale(1);
            setScale2(0.9);
            setX2(150);
            setX2Rotate(5);
            setX1bool(false);
        } else {
            setX1(50);
            setScale1(1);
            setX2(0);
            setScale2(1);
            setX2Rotate(0);
            setX1bool(true);
        }
    }
    const handlex = () => {
        if (xbool) {
            setX(-200);
            setScale(0.9);
            setX1(50);
            setScale1(1);
            setScale2(0.9);
            setX2(-150);
            setX2Rotate(-5);
            setXbool(false);
        } else {
            setX(-50);
            setScale(1);
            setX2(0);
            setScale2(1);
            setX2Rotate(0);
            setXbool(true);
        }
    }
    const handlex2 = () => {
        if (x2bool) {
            setX2(0);
            setScale2(1.1);
            setX2bool(false);
        } else {
            setX2(0);
            setScale2(1.1);
            setX2bool(true);
        }
    }

    return (
        <div className={`h-screen flex flex-col items-center justify-start ${fondo} bg-cover gap-50`}>
            <h1 className='font-black text-4xl md:text-7xl xl:text-7xl text-nowrap text-neonblue p-8 w-full flex justify-center items-center text-center'>{title}</h1>
            <div className={`h-fit flex items-center justify-center`}>
                <div className="flex flex-col">
                    <div className="relative flex justify-center items-center">
                        <motion.div
                            animate={{ x: x, y: 0, scale: scale, rotate: -5 }}
                            whileTap={{ scale: 1.2, x: x }}
                            transition={{ type: "spring" }}
                            className={`relative rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer overflow-hidden`}
                            onTap={() => { setOpen(!open); handlex1(); }}
                        >
                            <img
                                src={urlImg1}
                                alt="desk"
                                className="w-full h-auto rounded-2xl shadow-md shadow-neon block"
                            />

                            <AnimacionBlur open={open} setOpen={setOpen} click={click} />
                        </motion.div>

                        <motion.div
                            animate={{ x: x1, y: 0, scale: scale1, rotate: 5 }}
                            whileTap={{ scale: 1.2, x: x1 }}
                            transition={{ type: "spring" }}
                            className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer`}
                            onTap={() => { handlex(); setOpen2(!open2); }}
                        >
                            <img
                                src={`${urlImg2}`}
                                alt="desk"
                                className={`rounded-2xl shadow-md shadow-neon ${img}`}
                            />
                            <AnimacionBlur open={open2} setOpen={setOpen2} click={click2} />
                        </motion.div>

                        {urlImg3 &&
                            <motion.div
                                animate={{ x: x2, y: -30, scale: scale2, rotate: x2Rotate }}
                                whileTap={{ scale: 1.2, x: x2 }}
                                transition={{ type: "spring" }}
                                className={`rounded-2xl shadow-lg border ${size} absolute bg-neon cursor-pointer z-20`}
                                onTap={() => { handlex2(); setOpen3(!open3); }}
                            >
                                <img
                                    src={`${urlImg3}`}
                                    alt="desk"
                                    className="rounded-2xl shadow-md shadow-neon h-30 bg-cover bg-center object-cover"
                                />
                                <AnimacionBlur open={open3} setOpen={setOpen3} click={click3} />
                            </motion.div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProyectsPhone