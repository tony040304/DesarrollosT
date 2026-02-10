import { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nombre || !form.email || !form.mensaje) {
            alert("Completá todos los campos.");
            return;
        }

        const destinatario = "desarrollostorralba@gmail.com";
        const asunto = "Consulta desde la web";
        const cuerpo = `Nombre: ${form.nombre}
        Email: ${form.email}
        Mensaje: ${form.mensaje}`;

        const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(
            asunto
        )}&body=${encodeURIComponent(cuerpo)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="w-full flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl rounded-2xl flex flex-col  gap-4"
            >
                <h2 className="text-3xl font-black text-white">Contacto</h2>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-black/40 text-white border border-white/10 focus:outline-none focus:border-neonblue"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-black/40 text-white border border-white/10 focus:outline-none focus:border-neonblue"
                />

                <textarea
                    name="mensaje"
                    placeholder="Contanos qué necesitás..."
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-black/40 text-white border border-white/10 focus:outline-none focus:border-neonblue resize-none"
                />

                <div className="flex justify-center-safe items-center">
                    <button
                        type="submit"
                        className="bg-neonblue cursor-pointer text-white font-bold p-3 w-fit rounded-lg hover:scale-105 hover:shadow-md transition-transform shadow-lg"
                    >
                        Enviar mensaje
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
