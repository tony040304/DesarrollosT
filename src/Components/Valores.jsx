import React from 'react'
import { useRef } from 'react';
import ValoresBox from './ValoresComponents/ValoresBox'

const Valores = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="h-[200vh] relative z-0">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <h3 className='absolute top-20 w-full text-center text-4xl md:text-7xl text-neonblue font-bold z-10'>Nuestros valores</h3>
                <ValoresBox vh={"30"} posi={"300"} valor={"Innovación"} descripcion={"Aplicamos tecnología y nuevas ideas de manera estratégica, enfocándonos en resolver problemas concretos y mejorar resultados, evitando la complejidad innecesaria."} />
                <ValoresBox vh={"50"} posi={"600"} valor={"Transparencia"} descripcion={"Mantenemos una comunicación clara y honesta en todo momento, brindando información precisa para la toma de decisiones, incluso en contextos desafiantes."} />
                <ValoresBox vh={"80"} posi={"900"} valor={"Resultados reales"} descripcion={"Orientamos cada proyecto a la generación de valor tangible para el cliente, priorizando soluciones que impacten directamente en sus objetivos de negocio."} />
                <ValoresBox vh={"100"} posi={"1200"} valor={"Compromiso"} descripcion={"Asumimos responsabilidad por cada entrega, cumpliendo plazos y estándares acordados, y respondiendo con seriedad ante cada desafío."} />
            </div>
        </div>
    )
}

export default Valores