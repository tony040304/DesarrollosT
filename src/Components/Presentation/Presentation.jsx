import React from 'react'
import PresentationComponents from './PresentationComponents'
import '../../App.css'

const Presentation = () => {
  return (
    <section id='presentation' className='min-h-screen h-full flex flex-col items-center justify-center p-4 bg-primario'>
        <PresentationComponents
         title="Landing Page"
         paragraph="Creamos la pagina web que mas se adecue a tu negocio y que te ayude a atraer nuevos clientes."
         extra="100% personalizada. 100% original. 100% funcional."
         info="Página web simple que se utiliza para atraer clientes."
         where="landingPage" />
         <PresentationComponents
         title="Software"
         paragraph="Creamos el software a medida que necesitas para reducir el tiempo de trabajo tedioso para ganar tiempo y clientes."
         extra="Servicio 1 a 1 con atención inmediata."
         info="Sistema que ejecutaras en tus dispositivos."
         where="Software" />
         <PresentationComponents
         title="Aplicaciones Full"
         paragraph="Creamos la pagina web que mas se adecue a tu negocio, que te ayude a atraer nuevos clientes, agilizar ventas online, manejar stock y mas."
         extra="Incluye landing page."
         info="Pagina web completa. incluye con servidor y base de datos."
         where="FullStack" />
         <PresentationComponents
         title="Community manager"
         paragraph="Manejamos tus redes sociales para que puedas dedicarte a lo que realmente importa."
         info="Designamos un encargado para que maneje tus redes sociales."
         where="CommunityManager" />
    </section>
  )
}

export default Presentation