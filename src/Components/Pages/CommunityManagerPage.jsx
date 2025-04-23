import React from 'react'
import Pages from '../Pages/Pages'

const CommunityManagerPage = () => {
  return (
    <>
        <Pages
            title="Community Manager"
            paragraph="El Community Manager es el profesional encargado de gestionar y desarrollar la comunidad online de una marca o empresa.
             Su labor incluye la creación y publicación de contenido, la interacción con los seguidores y el análisis de métricas."
            infoList={[
            "✔️ Estrategias de contenido",
            "✔️ Gestión de redes sociales",
            "✔️ Análisis de métricas",
            "✔️ Creación de campañas publicitarias"]}
            moreInfo="🔒 Aumentá tu visibilidad online y conectá con tu audiencia. 📈 Generá engagement y fidelizá a tus clientes."    
            images={[]}
            video={[]}

        />
    </>
  )
}

export default CommunityManagerPage