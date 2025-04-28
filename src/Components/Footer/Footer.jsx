import React from 'react'
import CircleDraw from './CircleDraw';
import Contact from './Contact';

const Footer = () => {
  return (
    <section id='contacto' className='bg-blue-950/90 w-full h-fit flex flex-col justify-start p-4 items-start'>
      <div className='w-full items-center justify-center mb-4'>
        <h1 className='font-bold mb-2 2xl:text-xl'>Requisitos que cumplimos:</h1>
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-center md:justify-center md:gap-8 2xl:gap-10 place-items-center">
          <CircleDraw requisito="Rendimiento" />
          <CircleDraw requisito="Accesibilidad" />
          <CircleDraw requisito="Buenas practicas" />
          <CircleDraw requisito="SEO" />
        </div>
      </div>
          <Contact/>
    </section>
  )
}

export default Footer