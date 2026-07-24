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
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0e1a] to-[#080954] p-16">
            <h2 className="text-5xl font-bold text-center text-white mb-16">Contacto</h2>

            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Info lateral */}
                <div className="text-white space-y-6 pt-4">
                    <h3 className="text-2xl font-semibold text-neon">
                        Hablemos de tu proyecto
                    </h3>
                    <p className="text-gray-400">
                        Contanos qué necesitás y te respondemos a la brevedad.
                    </p>
                    <div className="space-y-3 text-gray-300">
                        {/* <p>📧 @innovante.com</p> */}
                        <p>📱 +54 9 11 3416-465444</p>
                        <p>📍 Rosario, Santa Fe, Argentina</p>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-[#b1e936] transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Tu email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-[#b1e936] transition-colors"
                    />
                    <textarea
                        placeholder="Contanos qué necesitás..."
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 mb-6 focus:outline-none focus:border-[#b1e936] transition-colors"
                    />
                    <button className="w-full bg-[#b1e936] text-[#0a0e1a] font-bold py-3 rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(177,233,54,0.4)] transition-all">
                        Enviar mensaje
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contacto