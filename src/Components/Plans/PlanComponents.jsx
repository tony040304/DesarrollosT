import React from 'react'
import NavBar from '../../Navs/NavBar'
import PreviousCard from '../Card/PreviousCard'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from '../../Data/Planes'
import { cardComm, cardWeb, cardFoto, cardIdentidad } from '../../Data/Cards.json'
import Text from './Text'

const PlanComponents = () => {
    return (
        <div className="bg-[url('/blancoAzul.png')] bg-center">
            <NavBar visible={-1} />
            <div className='flex flex-col items-center justify-center'>
                <PreviousCard title={'Community manager'} card={cardComm} planes={planesRedes} click={() => handleMessage('Community Manager')} />
                <Text titulo={"¿Qué hace realmente un Community Manager?"} descripcion={"Un community manager no es “el que sube posteos”. Ese es el error más común… y el motivo por el que muchas marcas no ven resultados. Un buen community manager está mirando todo el tiempo qué pasa con tu marca en la cabeza de la gente. Escucha, analiza, responde, prueba, ajusta. Es quien transforma redes sociales en una herramienta de negocio, no en un simple escaparate."} />
                <Text titulo={"¿Por qué es clave para tu negocio?"} descripcion={"Porque hoy la primera impresión de tu marca casi siempre ocurre en redes. Y si ahí fallás, perdiste antes de empezar. No importa qué tan bueno sea tu producto: si no se comunica bien, no existe."} />
                <Text titulo={"¿Por qué Innovanto marca la diferencia?"} descripcion={"Nosotros no gestionamos redes “por presencia”, las gestionamos para generar impacto real."} />
                <div className='flex flex-row items-center justify-center'>
                    <Text titulo={"Innovación"} descripcion={"No usamos fórmulas viejas ni contenido genérico. Probamos, medimos y aplicamos tecnología de forma inteligente para encontrar qué funciona en cada caso. Sin vueltas innecesarias."} />
                    <Text titulo={"Transparencia"} descripcion={"No te vamos a vender humo. Si algo no está funcionando, lo vas a saber. Si hay que cambiar de estrategia, se cambia. Decisiones claras, con datos sobre la mesa."} />
                    <Text titulo={"Resultados reales"} descripcion={"El foco no está en métricas superficiales. Está en lo que importa: consultas, clientes, crecimiento. Cada acción tiene un objetivo concreto detrás."} />
                </div>
            </div>
        </div>
    )
}

export default PlanComponents