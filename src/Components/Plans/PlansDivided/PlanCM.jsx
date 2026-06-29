import React from 'react'
import NavBar from '../../../Navs/NavBar'
import PreviousCard from '../../Card/PreviousCard'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from '../../../Data/Planes.json'
import { cardComm, cardWeb, cardFoto, cardEdicion } from '../../../Data/Cards.json'
import Text from '../Text'
import { DivChildren, SkillsDiv } from '../SkillsDiv'

const PlanCM = () => {
    return (
        <div className="bg-zinc-950 bg-center">
            <NavBar visible={-1} />
            <div className='flex flex-col items-center justify-center'>
                <PreviousCard title={'Community manager'} card={cardComm} planes={planesRedes} click={() => handleMessage('Community Manager')} />
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-2'>
                    <Text titulo={"¿Qué incluye nuestro servicio de Community Manager?"} descripcion={"Nos encargamos de la producción completa de contenido: reels, stories, posts y anuncios pagos. Cada pieza es creada con ilustraciones propias y edición cinematográfica, pensada para destacar en el feed y conectar con tu audiencia."} />
                    <Text titulo={"Gestión profesional de Meta Ads"} descripcion={"Somos expertos en campañas de Facebook e Instagram Ads. Planificamos, segmentamos y optimizamos cada anuncio para maximizar tu presupuesto y obtener el mayor retorno posible de tu inversión publicitaria."} />
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-12'>
                    <Text titulo={"Estrategia de contenido personalizada"} descripcion={"Diseñamos un calendario editorial mensual alineado con tus objetivos de negocio. Analizamos métricas, ajustamos el contenido y te mantenemos informado con reportes claros sobre el crecimiento de tu comunidad."} />
                    <Text titulo={"¿Por qué elegir Innovanto?"} descripcion={"Hacemos que tu marca sea diferente de la competencia. Cada cliente recibe atención personalizada y un equipo dedicado comprometido con el crecimiento de tu presencia digital."} />
                </div>
                <DivChildren>
                    <SkillsDiv skill={"Estrategia de contenido"} />
                    <SkillsDiv skill={"Producción de contenido"} />
                </DivChildren>
                <DivChildren>
                    <SkillsDiv skill={"Gestión de redes sociales"} />
                    <SkillsDiv skill={"Análisis de métricas"} />
                </DivChildren>
            </div>
        </div>
    )
}

export default PlanCM