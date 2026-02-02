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
        className="relative min-h-screen h-full flex flex-col items-center justify-center p-4 bg-primario overflow-hidden bg-[url('/azul.png')] bg-cover bg-cente"
      >

        <div className="relative z-10 w-full flex flex-col items-center">
          <PresentationComponents
            title="Pagina web"
            paragraph="Creamos páginas web 100% personalizadas, originales y funcionales, diseñadas para mostrar tus productos o servicios de manera atractiva y captar nuevos clientes. Nuestro objetivo es que tu sitio sea una verdadera herramienta de crecimiento para tu negocio."
            extra=""
            info=""
            where={'servicios'}
          />

          <PresentationComponents
            title="Community manager"
            paragraph="Gestionamos tus redes sociales con estrategias efectivas que fortalecen tu marca y generan interacción real con tu audiencia. Nos ocupamos de crear contenido atractivo, responder a tus clientes y potenciar tu presencia digital, para que puedas enfocarte en lo que realmente importa: tu negocio."
            info=""
            where={'web'}
          />

          <PresentationComponents
            title="Foto y video profesional"
            paragraph="Producimos contenido visual profesional para tus redes y página web, transmitiendo la esencia de tu marca y generando mayor impacto en tu comunicación digital."
            info=""
            where={'foto'}
          />
          <PresentationComponents
            title="Identidad visual"
            paragraph="Diseñamos la identidad gráfica de tu empresa para que destaque en el mercado y sea reconocida fácilmente por tus clientes."
            info=""
            where={'identidad'}
          />
        </div>
      </section>
    </>
  )
}

export default Presentation