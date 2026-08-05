import react, { lazy, Suspense, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import './App.css'
import ButtonTop from './Components/ButtonTop'
import Proyects from './Components/Proyects'
import ProyectsPhone from './Components/ProyectsPhone'
import Valores from './Components/Valores'
import Plans from './Components/Plans'
import Contacto from './Components/Contacto'
import Lenis from "@studio-freight/lenis";
import Welcome from './Components/Welcome'
import Presentation from './Components/Presentation/Presentation'
import AuroraBoreal from './Components/AuroraBoreal'

const LazyWelcome = lazy(() => import('./Components/Welcome'))
const LazyPresentation = lazy(() => import("./Components/Presentation/Presentation"))

const handleMessage = (servicio) => {
  const phoneNumber = '5493416465444'; // Reemplaza con el número de teléfono deseado
  const message = `Hola, estoy interesado en obtener más información sobre sus servicios de ${servicio}`; // Reemplaza con el mensaje deseado
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

const handleProyectClick = (url) => {
  window.open(url, '_blank');
}

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.3,
      smoothWheel: true,
      smoothTouch: false,
    });
    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const containerRef = useRef(null);

  // Medimos el progreso de scroll SOLO dentro de este contenedor de 200vh.
  // Todo lo que esté fuera de containerRef no se ve afectado por esto.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <div className=" h-[200vh]" ref={containerRef}>
          <Welcome progress={scrollYProgress} />
          <section id='inicio' />
          <LazyPresentation />
        </div>
        <div className="flex h-screen flex-col items-center justify-center "></div>
        <section id='valores' />
        <Valores />
        <div className='w-full bg-cover bg-center relative overflow-hidden'>
          <AuroraBoreal />
            <Proyects title={"Clientes"} urlImg1="/optica.png" urlImg2="estudiommep.jpeg" x={-100} x1={100} /> 
        <section id='contacto' />
        <Contacto />
        </div>


      </Suspense>

    </>
  )
}

export default App
