import React from 'react'
import { motion } from "framer-motion";
import CardLogo from './Card/CardLogo';

const Proyects = ({ urlImg1, urlImg2, urlImg3, x, x1, y = 0, xTrans = -250, x1trans = 250, size = "md:w-60", fondo, img, title }) => {
    return (
        <div className={`h-screen flex flex-col items-center justify-start  bg-[url('/blanco.png')] bg-cover bg-center object-bottom-right gap-40`}>
            <h1 className='font-black pt-4 text-5xl md:text-7xl xl:text-7xl text-nowrap text-neonblue  w-full flex justify-center items-center text-center'>{title}</h1>
            <div className="h-screen flex-col items-center justify-center gap-8">
                <div className="relative flex flex-row items-end justify-center gap-8 xl:gap-70">
                    <CardLogo>
                        <img src="/Logos/MostraGalery.png" alt="" className="w-15 lg:w-20 lg:pb-10 rounded-4xl" />
                    </CardLogo>
                    <CardLogo>
                        <img src="/Logos/ColegioOpticos.png" alt="" className="w-12 top-20 lg:w-20 lg:pt-50 rounded-3xl" />
                    </CardLogo>
                    <CardLogo>
                        <img src="/Logos/Musa.png" alt="" className="lg:w-40 w-15 rounded-4xl" />
                    </CardLogo>
                </div>
                <div className="flex flex-row items-end justify-center gap-4 xl:gap-70">
                    <CardLogo>
                        <img src="/Logos/Marvel.png" alt="" className="w-15 lg:w-40" />
                    </CardLogo>
                    <CardLogo>
                        <img src="/Logos/Opticadelsiglo.png" alt="" className="w-20 lg:w-40" />
                    </CardLogo>
                </div>
            </div>
        </div>
    )
}

export default Proyects