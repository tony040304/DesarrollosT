import react, { lazy, Suspense } from 'react'
import './App.css'
import ButtonTop from './Components/ButtonTop'
import Proyects from './Components/Proyects'
import ProyectsPhone from './Components/ProyectsPhone'
import Plans from './Components/Plans'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from './Data/Planes'
import { cardComm, cardWeb, cardFoto, cardIdentidad } from './Data/Cards.json'
import Planes2 from './Components/Planes2'
import Contacto from './Components/Contacto'
import PreviousCard from './Card/PreviousCard'

const LazyWelcome = lazy(() => import('./Components/Welcome'))
const LazyPresentation = lazy(() => import("./Components/Presentation/Presentation"))

const handleMessage = (servicio) => {
  console.log(servicio);
  const phoneNumber = '5493416465444'; // Reemplaza con el número de teléfono deseado
  const message = `Hola, estoy interesado en obtener más información sobre sus servicios de ${servicio}`; // Reemplaza con el mensaje deseado
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

const handleProyectClick = (url) => {
  window.open(url, '_blank');
}


function App() {


  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <LazyWelcome />
        <section id='inicio' />
        <LazyPresentation />
        <section id='servicios' />
        <PreviousCard title={'Community manager'} card={cardComm} planes={planesRedes} click={() => handleMessage('Community Manager')} fondo={`bg-[url('/blancoAzul.png')] bg-center-left`} />
        <section id='web' />
        <PreviousCard title={'Desarrollo de aplicaciones web'} card={cardWeb} planes={planesWeb} click={() => handleMessage('Desarrollo de aplicaciones web')} fondo={`bg-[url('/blanco.png')]`} />
        <section id='foto' />
        <PreviousCard click={() => handleMessage('Fotografía y Video')} card={cardFoto} planes={planesFoto} title="Fotografía y Video" fondo={`bg-[url('/blancoAzul.png')] bg-center-right`} />
        <section id='identidad' />
        <PreviousCard title={'Desarrollo de identidad visual'} card={cardIdentidad} click={() => handleMessage('Desarrollo de identidad visual')} planes={planesIdentidad} fondo={`bg-[url('/blanco.png')]`} />
        <section id='proyectos' />
        <div className='w-full bg-cover bg-center'>
          <div className='hidden md:block'>
            <Proyects title={"Proyectos"} urlImg1="/optica.png" urlImg2="/optica.png" x={-100} x1={100} fondo={`bg-[url('/blancoAzul.png')]`} />
            <Proyects urlImg1="/WebOptica.jpg" urlImg2="/MMep.jpg" urlImg3="/Baires.png" x={-200} x1={200} x1trans={400} y={10} size='md:w-96' img={'w-full h-60 bg-cover bg-center object-cover'} xTrans={-400} fondo={`bg-[url('/blancoAzul.png')]`} />
          </div>
          <div className='block md:hidden relative'>
            <ProyectsPhone title={"Proyectos"} fondo={`bg-[url('/blancoAzul.png')] bg-center-left`} urlImg1="/optica.png" urlImg2="/optica.png" size='w-40' click={() => handleProyectClick('https://www.instagram.com/opticadelsiglo/')} />
            <ProyectsPhone fondo={`bg-[url('/blancoAzul.png')] bg-top-left`} urlImg1="/WebOptica.jpg" urlImg2="/MMep.jpg" urlImg3={'/Baires.png'} img={'w-full h-38 bg-cover bg-center object-cover'} click={() => handleProyectClick('https://opticadelsiglo.com.ar/')} click3={() => handleProyectClick('https://bairesdeportes.com.ar/')} />
          </div>
        </div>
        <section id='contacto' />
        <Contacto />

      </Suspense>

    </>
  )
}

export default App
