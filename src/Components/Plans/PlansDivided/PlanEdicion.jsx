import React from 'react'
import NavBar from '../../../Navs/NavBar'
import PreviousCard from '../../Card/PreviousCard'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from '../../../Data/Planes.json'
import { cardComm, cardWeb, cardFoto, cardEdicion } from '../../../Data/Cards.json'
import Text from '../Text'
import { DivChildren, SkillsDiv } from '../SkillsDiv'

const PlanEdicion = () => {
    return (
        <div className="bg-zinc-950 bg-center">
            <NavBar visible={-1} />
            <div className='flex flex-col items-center justify-center'>
                <PreviousCard title={'Edición de contenido'} card={cardEdicion} planes={planesRedes} click={() => handleMessage('Edición de contenido')} />
                <div className='flex flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-2'>
                    <Text titulo={"¿Qué incluye nuestro servicio de Edición de contenido?"} descripcion={"Corte y montaje profesional, sincronización de audio, motion graphics, subtítulos, color grading y exportación optimizada para cada plataforma: Instagram, TikTok, YouTube y más."} />
                    <Text titulo={"Reels, Shorts y contenido viral"} descripcion={"Editamos con el ritmo y la estética que cada red social exige. Sabemos qué retiene la atención en los primeros segundos y lo aplicamos en cada pieza para maximizar el alcance orgánico."} />
                </div>
                <div className='flex flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-12'>
                    <Text titulo={"Videos para empresas y emprendedores"} descripcion={"Producimos videos de presentación de marca, tutoriales, testimonios y publicidades. Contenido audiovisual que refuerza tu identidad y genera confianza en tu audiencia."} />
                    <Text titulo={"¿Por qué elegir Innovanto?"} descripcion={"Hacemos que tu marca sea diferente de la competencia. Cada cliente recibe atención personalizada y un equipo dedicado comprometido con el crecimiento de tu presencia digital."} />
                </div>
                <DivChildren>
                    <SkillsDiv skill={"edición de reels"} />
                    <SkillsDiv skill={"edición YouTube"} />
                    <SkillsDiv skill={"color grading"} />
                    <SkillsDiv skill={"videos para redes sociales"} />
                    <SkillsDiv skill={"motion graphics"} />
                    <SkillsDiv skill={"video corporativo"} />
                </DivChildren>
            </div>
        </div>
    )
}

export default PlanEdicion