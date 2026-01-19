import InstagramLogo from './InstagramLogo'
import React from 'react'
import { SlArrowDown } from "react-icons/sl";

const Welcome = () => {

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between text-blue-950 bg-gradient-to-l ">
      <div className="flex flex-col h-screen justify-center items-center gap-2 xl:flex-row xl:gap-4">
        <div className="w-full flex justify-center">
          <img src="/Logo.png" alt="Innovanto" className='w-5/6 md:w-2/3 lg:w-1/2' />
        </div>
        <div className="flex flex-col h-fit p-4">
          <h2 className="text-base md:text-xl font-bold italic mb-4 xl:w-3xl xl:text-2xl 2xl:text-2xl 2xl:text-nowrap 2xl:text-start">
            Donde hacemos crecer tu negocio con el desarrollo de una página web o de un software.
          </h2>
          <p className="text-blue-900 text-sm md:text-base leading-relaxed">
            Nuestro objetivo es ayudarte a dar el salto al mundo digital, ofreciéndote soluciones personalizadas que se adapten a las necesidades de tu emprendimiento o empresa.
            Ya sea que necesites una página web para mostrar tus productos o servicios, o un software diseñado específicamente para optimizar tus procesos, estamos para acompañarte en cada paso.
            Trabajamos con negocios locales porque creemos en el potencial de nuestra ciudad, y queremos ayudarte a destacar en un mercado cada vez más conectado.
          </p>
          <div className='flex flex-row gap-4 justify-center w-full mt-4'>
            <button
              onClick={() => GoWhats()}
              className="bg-gradient-to-tr from-lime-400 to-lime-300 shadow-lg shadow-lime-900/50 p-1.5 rounded-md font-bold xl:w-fit xl:text-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer w-fit"
            >
              WhatsApp
            </button>
            <InstagramLogo />
          </div>
        </div>
      </div>
      <div onClick={() => { document.getElementById("presentation")?.scrollIntoView({ behavior: 'smooth' }); }}
        className="flex flex-col items-center justify-center transform cursor-pointer">
        <h3 className="text-blue-900/80 mb-1 text-sm md:text-base">Saber más</h3>
        <SlArrowDown className="animate-bounce text-xl md:text-2xl text-blue-900" />
      </div>
    </div>


  )
}

export default Welcome