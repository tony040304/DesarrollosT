import React from 'react'
import PresentationComponents from './PresentationComponents'
import '../../App.css'
import MySvg from '../../MySvg.jsx'
import NavBar from '../../Navs/NavBar.jsx'

const Presentation = () => {
  return (
    <>
      <NavBar />
      <section
        id="presentation"
        className="relative min-h-screen h-full flex flex-col items-center justify-center p-4 bg-primario overflow-hidden bg-[url('/FondoPantalla.png')] bg-cover bg-cente"
      >

        <div className="relative z-10 w-full flex flex-col items-center">
          <PresentationComponents
            title="Pagina web"
            paragraph="Creamos la pagina web que mas se adecue a tu negocio y que te ayude a atraer nuevos clientes."
            extra="100% personalizada. 100% original. 100% funcional."
            info="Página web simple que se utiliza para atraer clientes."
            where="landingPage"
          />

          <PresentationComponents
            title="Community manager"
            paragraph="Manejamos tus redes sociales para que puedas dedicarte a lo que realmente importa."
            info="Designamos un encargado para que maneje tus redes sociales."
            where="CommunityManager"
          />

          <PresentationComponents
            title="Foto y video profesional"
            paragraph="Fotografiamos y grabamos contenido profesional para tus redes sociales y página web."
            info="Gracias a nuestro equipo de fotógrafos y videógrafos profesionales."
            where="CommunityManager"
          />
          <PresentationComponents
            title="Identidad visual"
            paragraph="Creamos tu identidad visual para que te destaquen en el mercado."
            info="Logos, paletas de colores, tipografías y más."
            where="CommunityManager"
          />
        </div>
      </section>
    </>
  )
}

export default Presentation