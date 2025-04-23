import React from 'react'
import Pages from '../Pages/Pages'

const FullStackPage = () => {
  return (
    <>
        <Pages
            title="Desarrollo Full Stack"
            paragraph="El desarrollo Full Stack se refiere a la capacidad de trabajar en todas las capas de una aplicación, desde el front-end (lado visible para el usuario)
             hasta el back-end (lado de lógica de servicios, invisible para el usuario). Esto incluye el diseño de la interfaz de usuario, la lógica del servidor y la gestión de bases de datos.
            Un desarrollador Full Stack tiene un conocimiento integral de las tecnologías y herramientas necesarias para construir aplicaciones web completas."
            infoList={["🛠️ Tecnologías con las que trabajo:",
            "React.js, .NET (C#), SQL Server, Node.js, JavaScript, HTML, CSS, APIs REST, Entity Framework, entre otras.",
            "✔️ Aplicaciones de gestión de turnos",
            "✔️ Sistemas de ventas o ecommerce",
            "✔️ Plataformas tipo red social",
            "✔️ Software administrativo o empresarial",
            "✔️ Aplicaciones móviles híbridas (con React Native, por ejemplo)"]}
            moreInfo="🔒 Seguridad, escalabilidad y buen rendimiento garantizados. 🔄 Desde la base de datos hasta la experiencia del usuario final. 🎯 Transformá una idea en una solución digital robusta y funcional."    
            images={[]}
            video={[]}
        />
    </>
  )
}

export default FullStackPage