import InstagramLogo from './InstagramLogo'
import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { motion, useTransform } from 'framer-motion';

const Welcome = ({ progress }) => {

  const GoWhats = () => {
    window.open('https://wa.me/5493416465444', '_blank');
    fbq('track', 'Contact', {
      method: 'WhatsApp'
    });
  }

  const scale = useTransform(progress, [0, 1], [1, 0.4]);
  const opacity = useTransform(progress, [0, 1], [1, 0.5]);

  return (
    <div className="h-screen sticky top-0 w-full flex flex-col bg-[#07101D] items-center justify-between text-white">
      <motion.div
        style={{ scale, opacity }}
      >
        <div className="flex flex-col h-screen justify-start items-start gap-2 xl:flex-row xl:gap-4">
          <div className="w-full flex justify-start items-start">
            <img src="/Logo.png" alt="Innovanto" className='w-1/2 md:w-2/3 lg:w-1/2' />
          </div>
          <div className="flex flex-col h-full items-center justify-center p-4">
            <div className='flex flex-col items-center justify-center bg-gradient-to-b from-neon/40 to-zinc-950/80 border border-neon/20 p-10 lg:p-16 rounded-4xl'>
              <h1 className="text-4xl text-center font-bold italic mb-4 xl:w-3xl xl:text-2xl 2xl:text-4xl 2xl:text-nowrap">
                Impulsamos tu crecimiento digital.
              </h1>
              <p className="text-sm md:text-base leading-relaxed xl:w-3xl">
                Te ayudamos a dar el salto al mundo digital: <strong>gestión de redes sociales, contenido audiovisual y páginas web</strong> para que tu marca crezca y se consolide.
              </p>
              <div className='flex flex-row gap-4 justify-center w-full mt-4'>
                <button
                  onClick={() => GoWhats()}
                  className="bg-gradient-to-r from-lime-400 to-lime-300 shadow-lg shadow-lime-900/50 p-1.5 rounded-md font-bold xl:w-fit xl:text-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer w-fit"
                >
                  WhatsApp
                </button>
                <InstagramLogo ig={'innovanto.dg'} />
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => { document.getElementById("presentation")?.scrollIntoView({ behavior: 'smooth' }); }}
          className="flex flex-col items-center justify-center transform cursor-pointer">
          <h3 className=" mb-1 text-sm md:text-base">Ver más</h3>
          <SlArrowDown className="animate-bounce text-xl md:text-2xl " />
        </div>
      </motion.div>
    </div>


  )
}

export default Welcome