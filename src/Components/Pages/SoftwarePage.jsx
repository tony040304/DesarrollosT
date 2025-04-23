import React from 'react'
import Pages from '../Pages/Pages'

const SoftwarePage = () => {


    const video = [
        '/EstudioVideo.mp4'
      ]
  return (
    <>
        <Pages
            title="Software"
            paragraph="Desarrollo de software a medida para empresas y particulares. El cual ayuda a optimizar procesos y mejorar la eficiencia en el trabajo.
             Un software se puede desarrollar para cualquier tipo de dispositivo, ya sea móvil o de escritorio. También se puede desarrollar software para cualquier tipo de sector, ya sea sanitario, educativo, industrial, etc."
            infoList={[
                "✔️ Desarrollo de software a medida",
                "✔️ Desarrollo de software para empresas",
                "✔️ Desarrollo de software para particulares",
                "✔️ Desarrollo de software para cualquier tipo de dispositivo",
                "✔️ Desarrollo de software para cualquier tipo de sector"
            ]}
            moreInfo="Software 100% a medida, 100% escalable y 100% seguro. Porque tu negocio merece un software que se adapte a tus necesidades y no al revés."
            images={[]}
            video={video}
        />
    </>
  )
}

export default SoftwarePage