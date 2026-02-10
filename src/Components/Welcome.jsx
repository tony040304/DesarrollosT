import InstagramLogo from './InstagramLogo'
import React from 'react'
import { SlArrowDown } from "react-icons/sl";

const Welcome = () => {

  return (
    <div className="h-screen w-full flex flex-col bg-[url('/verde.png')] items-center justify-between text-white">
      <div className="flex flex-col h-screen justify-center items-center gap-2 xl:flex-row xl:gap-4">
        <div className="w-full flex justify-center">
          <img src="/Logo.png" alt="Innovanto" className='w-5/6 md:w-2/3 lg:w-1/2' />
        </div>
        <div className="flex flex-col h-fit p-4">
          <div className='flex flex-col items-center justify-center bg-[#081321] p-10 lg:p-16 rounded-4xl'>
            <h1 className="text-4xl text-center font-bold italic mb-4 xl:w-3xl xl:text-2xl 2xl:text-4xl 2xl:text-nowrap">
              Impulsamos tu crecimiento digital.
            </h1>
            <p className="text-sm md:text-base leading-relaxed xl:w-3xl">
              En Innovanto te ayudamos a dar el salto al mundo digital con soluciones adaptadas a tu negocio. Desde páginas web y gestión de redes sociales hasta software
              a medida y contenido visual, trabajamos para que tu marca crezca y se consolide en un mercado cada vez más competitivo.
            </p>
            <div className='flex flex-row gap-4 justify-center w-full mt-4'>
              <button
                onClick={() => GoWhats()}
                className="bg-gradient-to-r from-lime-400 to-lime-300 shadow-lg shadow-lime-900/50 p-1.5 rounded-md font-bold xl:w-fit xl:text-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer w-fit"
              >
                WhatsApp
              </button>
              <InstagramLogo />
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => { document.getElementById("presentation")?.scrollIntoView({ behavior: 'smooth' }); }}
        className="flex flex-col items-center justify-center transform cursor-pointer">
        <h3 className=" mb-1 text-sm md:text-base">Saber más</h3>
        <SlArrowDown className="animate-bounce text-xl md:text-2xl " />
      </div>
    </div>


  )
}

export default Welcome