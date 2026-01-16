import { lazy, Suspense } from 'react'
import './App.css'
import ButtonTop from './Components/ButtonTop'
import Proyects from './Components/Proyects'
import ProyectsPhone from './Components/ProyectsPhone'
import Plans from './Components/Plans'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from './Data/Planes'
import Planes2 from './Components/Planes2'
import Contacto from './Components/Contacto'

const LazyWelcome = lazy(() => import('./Components/Welcome'))
const LazyPresentation = lazy(() => import("./Components/Presentation/Presentation"))

const handleMessage = (servicio) => {
  console.log(servicio);
  const phoneNumber = '5493416465444'; // Reemplaza con el número de teléfono deseado
  const message = `Hola, estoy interesado en obtener más información sobre sus servicios de ${servicio}`; // Reemplaza con el mensaje deseado
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function App() {


  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <LazyWelcome />
        <LazyPresentation />
        <div className='w-full bg-cover bg-center'>
          <div className='hidden md:block'>
            <Proyects urlImg1="/optica.png" urlImg2="/optica.png" x={-100} x1={100} fondo={`bg-[url('./FondoPantalla.png')]`} />
            <Proyects urlImg1="/WebOptica.jpg" urlImg2="/MMep.jpg" x={-100} x1={100} y={0} size='md:w-96' xTrans={-300} fondo={`bg-[url('./FondoBlanco.png')]`} />
          </div>
          <div className='block md:hidden relative'>
            <ProyectsPhone fondo={`bg-[url('./FondoPantalla.png')]`} urlImg1="/optica.png" urlImg2="/optica.png" size='w-40' />
            <ProyectsPhone fondo={`bg-[url('./FondoBlanco.png')]`} urlImg1="/WebOptica.jpg" urlImg2="/MMep.jpg" />
          </div>
        </div>
        <Plans fondo={`bg-[url('./FondoPantalla(2).png')] bg-cover bg-center object-bottom-left`} planes={planesRedes} title="Community Manager" click={() => handleMessage('Community Manager')} />
        <Planes2 fondo={`bg-[url('./FondoBlanco.png')] bg-cover bg-center`} title={'Desarrollo de aplicaciones web'}
          click={() => handleMessage('Desarrollo de aplicaciones web')}
          mobile={{ plan: planesWeb, ratio: 0.5, w: 320 }}
          md={{ plan: planesWeb, ratio: 2, w: 600 }}
          lg={{ plan: planesWeb, ratio: 2, w: 1200 }}
          xl={{ plan: planesWeb, ratio: 2, w: 1400 }}
        />
        <Plans click={() => handleMessage('Fotografía y Video')} fondo={`bg-[url('./FondoPantalla(2).png')] bg-cover bg-center object-bottom-left`} planes={planesFoto} title="Fotografía y Video" />
        <Planes2 fondo={`bg-[url('./FondoBlanco.png')] bg-cover bg-center`} title={'Desarrollo de identidad visual'}
          click={() => handleMessage('Desarrollo de identidad visual')}
          mobile={{ plan: planesIdentidad, ratio: 0.5, w: 320 }}
          md={{ plan: planesIdentidad, ratio: 2, w: 600 }}
          lg={{ plan: planesIdentidad, ratio: 2, w: 1000 }}
          xl={{ plan: planesIdentidad, ratio: 2, w: 1200 }}
        />
        <Contacto />

      </Suspense>

      <ButtonTop />
    </>
  )
}

export default App
