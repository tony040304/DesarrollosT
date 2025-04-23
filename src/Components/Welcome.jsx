import React from 'react'
import { SlArrowDown } from "react-icons/sl";

const Welcome = () => {
  return (
    <div className="min-h-screen w-full h-full flex flex-col items-center justify-center text-blue-950">
      <div className="px-4 py-10 grid sm:grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 2xl:px-0 2xl:py-0 2xl:grid-cols-10 gap-2 flex-1">
        <div className="lg:col-start-1 lg:col-span-2 lg:row-start-3 flex items-center justify-center lg:items-center xl:justify-start xl:items-center 2xl:justify-start 2xl:items-center 2xl:col-start-2 2xl:col-span-2">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left xl:text-6xl 2xl:text-5xl">DesarrollosT</h1>
        </div>
        <div className="lg:row-span-3 lg:row-start-3 lg:col-start-3 lg:col-span-1 xl:col-start-3 2xl:col-start-4 lg:w-128 xl:justify-center 2xl:w-fit 2xl:items-start flex flex-col h-fit">
          <h2 className="text-base md:text-xl font-bold italic mb-4 xl:w-3xl xl:text-2xl 2xl:text-2xl 2xl:text-nowrap 2xl:text-start">
            Donde hacemos crecer tu negocio con el desarrollo de una página web o de un software.
          </h2>
          <p className="text-blue-900 text-sm md:text-base lg:w-128 xl:w-3xl xl:text-xl 2xl:text-xl 2xl:w-5xl leading-relaxed">
            Nuestro objetivo es ayudarte a dar el salto al mundo digital, ofreciéndote soluciones personalizadas que se adapten a las necesidades de tu emprendimiento o empresa.
            Ya sea que necesites una página web para mostrar tus productos o servicios, o un software diseñado específicamente para optimizar tus procesos, estamos para acompañarte en cada paso.
            Trabajamos con negocios locales porque creemos en el potencial de nuestra ciudad, y queremos ayudarte a destacar en un mercado cada vez más conectado.
          </p>
        </div>
      </div>
      <div onClick={() => {document.getElementById("presentation")?.scrollIntoView({ behavior: 'smooth' });}}
       className="flex flex-col items-center justify-center transform cursor-pointer">
        <h3 className="text-blue-900/80 mb-1 text-sm md:text-base">Saber más</h3>
        <SlArrowDown className="animate-bounce text-xl md:text-2xl text-blue-900" />
      </div>
    </div>


  )
}

export default Welcome