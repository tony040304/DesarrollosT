import React from 'react'
import NavBar from '../../../Navs/NavBar'
import PreviousCard from '../../Card/PreviousCard'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from '../../../Data/Planes.json'
import { cardComm, cardWeb, cardFoto, cardEdicion } from '../../../Data/Cards.json'
import Text from '../Text'
import { DivChildren, SkillsDiv } from '../SkillsDiv'

const PlanWeb = () => {
    return (
        <div className="bg-zinc-950 bg-center">
            <NavBar visible={-1} />
            <div className='flex flex-col items-center justify-center'>
                <PreviousCard title={'Pagina Web'} card={cardWeb} planes={planesWeb} click={() => handleMessage('Web Designer')} />
                <div className='flex flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-2'>
                    <Text titulo={"Diseño web personalizado"} descripcion={"Cada sitio es diseñado desde cero, alineado con la identidad visual de tu marca. Sin plantillas genéricas: creamos una experiencia única que refleja tu negocio y destaca frente a la competencia."} />
                    <Text titulo={"Posicionamiento SEO desde el día uno"} descripcion={"Estructuramos cada página con las mejores prácticas de SEO: etiquetas correctas, velocidad optimizada, contenido relevante y arquitectura que los motores de búsqueda priorizan."} />
                </div>
                <div className='flex flex-row items-center justify-center gap-4 lg:gap-10 w-full px-4 py-12'>
                    <Text titulo={"100% responsive y adaptable"} descripcion={"Todos nuestros sitios se ven perfectos en celular, tablet y escritorio. La experiencia móvil es prioritaria, ya que más del 70% del tráfico web proviene de dispositivos móviles."} />
                    <Text titulo={"¿Por qué elegir Innovanto?"} descripcion={"Hacemos que tu marca sea diferente de la competencia. Cada cliente recibe atención personalizada y un equipo dedicado comprometido con el crecimiento de tu presencia digital."} />
                </div>
                <DivChildren>
                    <SkillsDiv skill={"tienda online"} />
                    <SkillsDiv skill={"landing pag"} />
                    <SkillsDiv skill={"posicionamiento SEO"} />
                    <SkillsDiv skill={"desarrollo web a medida"} />
                    <SkillsDiv skill={"sitio web responsive"} />
                    <SkillsDiv skill={"diseño web profesional"} />
                    <SkillsDiv skill={"creación de páginas web"} />
                    <SkillsDiv skill={"páginas web para empresas"} />
                </DivChildren>
            </div>
        </div>
    )
}

export default PlanWeb