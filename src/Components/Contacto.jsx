import React from 'react'
import ContactForm from './ContactForm'
import InstagramLogo from './InstagramLogo'

const Contacto = () => {

    const GoWhats = () => {
        window.open("https://api.whatsapp.com/send?phone=3416465444", "_blank");
    };

    return (
        <div className='w-full h-screen flex bg-white bg-center text-white flex-col items-center'>
            <div className='w-full flex justify-center items-start pt-30'>
                <h1 className='text-6xl text-neon'>Contacto</h1>
            </div>
            <div className='w-5/6 lg:w-1/2 flex items-center justify-center bg-neonblue mt-10 p-5 rounded-2xl'>
                <ContactForm />
            </div>
            <div className='w-full flex flex-col justify-center items-center pt-20 px-10 md:px-40 lg:px-60 pb-10'>
                <h2 className='text-4xl text-neon'>Redes sociales</h2>
                <div className='flex flex-col justify-between w-full pt-4'>
                    <div className='flex flex-col justify-center items-center mb-10'>
                        <h3 className='text-neonblue text-3xl mb-2'>Innovanto</h3>
                        <div className='flex flex-row justify-between gap-8'>
                            <InstagramLogo ig="innovanto.dg" />
                            <button
                                onClick={() => GoWhats()}
                                className="bg-gradient-to-r from-lime-400 to-lime-300 shadow-lg shadow-lime-900/50 p-1.5 rounded-lg font-bold xl:w-fit xl:text-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
                            >
                                WhatsApp
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-8'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl text-neonblue'>Antonella</h1>
                            <InstagramLogo ig="_antodelgado_" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl text-neonblue'>Antonio</h1>
                            <InstagramLogo ig="antoniotorralbaa" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto