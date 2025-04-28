import React from 'react'
import NavBar from '../../Navs/NavBar'
import ImageCarousel from '../imageCarousel'
import PopUp from './PopUp'

const Pages = ({ backGround, title, paragraph, infoList, moreInfo, images, video }) => {
  return (
    <>
        <NavBar/>
        <section id='landingPage' className={`min-h-screen h-full flex flex-col items-center justify-center pt-24 p-4 ${backGround}`}>
            <div className='md:flex md:flex-row'>
                <div className='md:mr-12 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:ml-24'>
                    <h1 className='text-4xl font-bold text-center text-blue-950 mb-10'>{title}</h1>
                    <p className='text-base text-blue-900 mt-4'>{paragraph}</p>
                    {
                        infoList.map((item, index) => (
                            <span key={index} className='block text-blue-950'>{item}</span>
                        ))
                    }
                    <p className='text-blue-900 italic font-medium mb-12'>{moreInfo}</p>
                    <PopUp/>
                </div>
                <ImageCarousel images={images} video={video}/>
            </div>
        </section>
    </>
  )
}
export default Pages