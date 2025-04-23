import React from 'react'
import Pages from './Pages'


const LandingPage = () => {

  const infoList = [
    "🛠️ Tecnologías con las que trabajo:",
    "React.js, JavaScript, HTML, Tailwind, Motion, ente otra.",
    "✔️ Velocidad, usabilidad y estructura pensadas para SEO.",
    "✔️ Diseño único adaptado a tu marca.",
    "✔️ Optimización para dispositivos móviles.",
    "✔️ Enfocadas en convertir visitantes en clientes."
  ]

  
  

  return (
    <>
      <Pages backGround={"bg-secundario"}
       title="Landing Page"
      paragraph="Creamos páginas diseñadas estratégicamente para que tu negocio aparezca en los primeros resultados de búsqueda en Google. No solo diseñamos una web atractiva:
       también la optimizamos para que te encuentren, te conozcan y te elijan." 
      infoList={infoList}
      moreInfo="Cada landing page es 100% personalizada, 100% original y 100% funcional. Porque tu presencia online merece más que una plantilla genérica."
      images={[]}
      video={[]} />
    </>
  )
}

export default LandingPage
