import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <div className='bg-blue-950/70 w-full h-20 flex justify-start p-4 items-center'>
      <div>
        <h1>Requisitos que cumplimos:</h1>
      </div>
          <h1 className='font-bold mb-2'>Contactate via:</h1>
          <div className='flex gap-4 text-2xl text-blue-50 justify-center'>
            <SlSocialInstagram />
            <SiWhatsapp />
          </div>
    </div>
  )
}

export default Footer