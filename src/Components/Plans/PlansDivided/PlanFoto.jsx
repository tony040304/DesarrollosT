import React from 'react'
import NavBar from '../../../Navs/NavBar'
import PreviousCard from '../../Card/PreviousCard'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from '../../../Data/Planes.json'
import { cardComm, cardWeb, cardFoto, cardEdicion } from '../../../Data/Cards.json'
import Text from '../Text'
import { DivChildren, SkillsDiv } from '../SkillsDiv'

const PlanFoto = () => {
    return (
        <div className="bg-zinc-950 bg-center">
            <NavBar visible={-1} />
            <div className='flex flex-col items-center justify-center'>
                <PreviousCard title={'Fotografía'} card={cardFoto} planes={planesFoto} click={() => handleMessage('Fotografía')} />
                <div className='flex flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-2'>
                    <Text titulo={"Fotografía de producto y marca"} descripcion={"Nos encargamos de la producción completa de contenido: reels, stories, posts y anuncios pagos. Cada pieza es creada con ilustraciones propias y edición cinematográfica, pensada para destacar en el feed y conectar con tu audiencia."} />
                    <Text titulo={"Fotografía corporativa y de equipo"} descripcion={"Somos expertos en campañas de Facebook e Instagram Ads. Planificamos, segmentamos y optimizamos cada anuncio para maximizar tu presupuesto y obtener el mayor retorno posible de tu inversión publicitaria."} />
                </div>
                <div className='flex flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-12'>
                    <Text titulo={"Producción de video profesional"} descripcion={"Filmamos con equipos de alta calidad y criterio cinematográfico. Videos de marca, publicidades, coberturas de eventos y contenido para redes con la estética y el ritmo que tu audiencia espera."} />
                    <Text titulo={"¿Por qué elegir Innovanto?"} descripcion={"Hacemos que tu marca sea diferente de la competencia. Cada cliente recibe atención personalizada y un equipo dedicado comprometido con el crecimiento de tu presencia digital."} />
                </div>
                <DivChildren>
                    <SkillsDiv skill={"producción audiovisual"} />
                    <SkillsDiv skill={"video de eventos"} />
                    <SkillsDiv skill={"fotos de eventos"} />
                    <SkillsDiv skill={"fotografía de producto"} />
                    <SkillsDiv skill={"video corporativo"} />
                    <SkillsDiv skill={"video de shows"} />
                </DivChildren>
            </div>
        </div>
    )
}

export default PlanFoto