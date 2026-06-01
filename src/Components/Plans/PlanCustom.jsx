import { useState, useMemo } from "react";
import { VideoCameraIcon, ImageIcon, MegaphoneIcon, CheckIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Navbar from "../../Navs/NavBar";

const precios = {
    reel: 25,
    post: 15,
    anuncio: 15,
};

const extras = [
    { nombre: "Historias diarias", precio: 15, obligatorio: false },
    { nombre: "Guiones de reels", precio: 10, obligatorio: false },
    { nombre: "Análisis mensual de contenido", precio: 10, obligatorio: true },
    { nombre: "Optimización mensual de contenido", precio: 10, obligatorio: true },
    { nombre: "Edición cinematográfica", precio: 45, obligatorio: true },
    { nombre: "Planificación mensual", precio: 15, obligatorio: true },
];

export default function PlanPersonalizado() {
    const [reels, setReels] = useState(2);
    const [posts, setPosts] = useState(6);
    const [anuncios, setAnuncios] = useState(1);
    const [selectedExtras, setSelectedExtras] = useState([
        extras[2],
        extras[3],
        extras[4],
        extras[5],
    ]);

    const toggleExtra = (extra) => {
        if (extra.obligatorio) return;
        setSelectedExtras((prev) =>
            prev.includes(extra)
                ? prev.filter((e) => e !== extra)
                : [...prev, extra]
        );
    };

    const total = useMemo(() => {
        const extrasTotal = selectedExtras.reduce(
            (acc, item) => acc + item.precio,
            0
        );

        return (
            reels * precios.reel +
            posts * precios.post +
            anuncios * precios.anuncio +
            extrasTotal
        );
    }, [reels, posts, anuncios, selectedExtras]);

    const mensaje = encodeURIComponent(`
        Hola, quiero solicitar un plan personalizado.

        Reels: ${reels}
        Posts: ${posts}
        Anuncios: ${anuncios}

        Extras:
    ${selectedExtras.map((e) => `• ${e.nombre}`).join("\n")}

        Total estimado: USD ${total}
    `);

    return (
        <>
            <Navbar visible={-1} />
            <section className="py-20 px-6 bg-zinc-950 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-neon uppercase text-sm tracking-widest">
                            Community Manager
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            Creá tu propio plan
                        </h2>

                        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                            Elegí únicamente los servicios que necesitás y obtené un
                            presupuesto personalizado al instante.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Configuración */}
                        <div className="bg-gradient-to-b from-neon/10 to-transparent border border-neon/20 rounded-3xl p-8">
                            <h3 className="text-2xl font-semibold mb-8">
                                Configuración
                            </h3>

                            <div className="space-y-6">
                                <Selector
                                    icon={<VideoCameraIcon size={20} />}
                                    title="Reels mensuales"
                                    value={reels}
                                    setValue={setReels}
                                />

                                <Selector
                                    icon={<ImageIcon size={20} />}
                                    title="Posts mensuales"
                                    value={posts}
                                    setValue={setPosts}
                                />

                                <Selector
                                    icon={<MegaphoneIcon size={20} />}
                                    title="Anuncios mensuales"
                                    value={anuncios}
                                    setValue={setAnuncios}
                                />
                            </div>

                            <div className="mt-10">
                                <h4 className="font-semibold text-lg mb-4">
                                    Servicios adicionales
                                </h4>

                                <div className="grid gap-3">
                                    {extras.map((extra) => (
                                        <button
                                            key={extra.nombre}
                                            onClick={() => toggleExtra(extra)}
                                            className={`flex items-center justify-between p-4 rounded-xl border transition ${selectedExtras.includes(extra)
                                                ? "border-neon bg-cyan-400/10"
                                                : "border-zinc-800"
                                                }`}
                                        >
                                            <span>{extra.nombre}</span>

                                            <div className="flex items-center gap-3">
                                                <span className="text-neon">
                                                    +USD {extra.precio}
                                                </span>

                                                {selectedExtras.includes(extra) && (
                                                    <CheckIcon size={18} />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Resumen */}
                        <div className="bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-3xl p-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                Tu plan personalizado
                            </h3>

                            <div className="space-y-4 text-zinc-300">
                                <div className="flex justify-between">
                                    <span>Reels</span>
                                    <span>{reels}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Posts</span>
                                    <span>{posts}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Anuncios</span>
                                    <span>{anuncios}</span>
                                </div>

                                {selectedExtras.length > 0 && (
                                    <>
                                        <hr className="border-zinc-800" />

                                        {selectedExtras.map((extra) => (
                                            <div
                                                key={extra.nombre}
                                                className="flex justify-between"
                                            >
                                                <span>{extra.nombre}</span>
                                                <span>+USD {extra.precio}</span>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>

                            <div className="mt-10">
                                <p className="text-zinc-400 text-sm">
                                    Inversión mensual estimada
                                </p>

                                <h4 className="text-5xl font-bold mt-2 text-neon">
                                    USD {total}
                                </h4>
                            </div>

                            <a
                                href={`https://wa.me/5493416465444?text=${mensaje}`}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 w-full flex justify-center items-center rounded-xl bg-lightblue hover:bg-neonblue transition py-4 font-semibold"
                            >
                                Solicitar este plan
                                <WhatsappLogoIcon size={24} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Selector({ title, value, setValue, icon }) {
    return (
        <div className="flex items-center justify-between border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-3">
                {icon}
                <span>{title}</span>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => value > 0 && setValue(value - 1)}
                    className="w-8 h-8 rounded-lg bg-zinc-800"
                >
                    -
                </button>

                <span className="font-semibold w-6 text-center">
                    {value}
                </span>

                <button
                    onClick={() => setValue(value + 1)}
                    className="w-8 h-8 rounded-lg bg-zinc-800"
                >
                    +
                </button>
            </div>
        </div>
    );
}