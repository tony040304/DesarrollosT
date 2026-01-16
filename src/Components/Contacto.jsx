import React from 'react'
import ContactForm from './ContactForm'
import InstagramLogo from './InstagramLogo'

const Contacto = () => {
    return (
        <div className='w-full h-screen flex bg-[url(../FondoContacto.jpg)] bg-center text-white flex-col items-center'>
            <div className='w-full flex justify-center items-start pt-30'>
                <h1 className='text-6xl text-neon'>Contacto</h1>
            </div>
            <div className='w-1/2 flex items-center justify-center bg-neonblue/50 mt-10 p-5 rounded-lg'>
                <ContactForm />
            </div>
            <div className='w-full flex flex-row justify-between pt-20 px-10 md:px-40 lg:px-60'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl'>Antonella</h1>
                    <InstagramLogo />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl'>Antonio</h1>
                    <InstagramLogo />
                </div>
            </div>
        </div>
    )
}

export default Contacto