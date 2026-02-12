import React from 'react'
import ContactForm from './ContactForm'
import InstagramLogo from './InstagramLogo'

const Contacto = () => {

    const GoWhats = () => {
        window.open("https://api.whatsapp.com/send?phone=3416465444", "_blank");
        fbq('track', 'Contact', {
            method: 'WhatsApp'
        });
    };

    return (
        <div className={`w-full h-screen flex bg-[url('/azul.png')] bg-center bg-cover text-white flex-col items-center`}>
            <div className='w-full flex justify-center items-start pt-20'>
                <h1 className='text-6xl text-white'>Contacto</h1>
            </div>
            <div className='w-5/6 lg:w-1/3 flex items-center justify-center bg-gray-300/30 backdrop-blur-sm mt-10 p-2 rounded-2xl'>
                <ContactForm />
            </div>
            <div className='w-full flex flex-col justify-center items-center px-10 md:mt-12'>
                <h2 className='text-4xl text-white'>Redes sociales</h2>
                <div className='flex flex-col justify-between w-full'>
                    <div className='flex flex-col justify-center items-center md:mb-8'>
                        <h3 className='text-white text-3xl'>Innovanto</h3>
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
                            <h1 className='text-2xl text-white'>Antonella</h1>
                            <InstagramLogo ig="_antodelgado_" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl text-white'>Antonio</h1>
                            <InstagramLogo ig="antoniotorralbaa" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto