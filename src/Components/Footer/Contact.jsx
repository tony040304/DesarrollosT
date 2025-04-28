import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { SlEnvolope } from "react-icons/sl";
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {

    const handleClickIg = () => {
        window.open("https://www.instagram.com/desarrollost/", "_blank")
    }

    const handleClickWhats = () => {
      window.open("https://wa.me/3416465444?text=Hola%20quiero%20más%20información", "_blank")
  }

  const handleClickMail = () => {
    navigator.clipboard.writeText("desarrollostorralba@gmail.com")
    toast.info("Email copiado al portapapeles", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
}

  return (
    <div className='flex mt-10 w-full flex-col items-center justify-center h-fit gap-2 md:flex-row md:gap-10'>
        <h1 className='font-bold mb-2 2xl:text-xl text-nowrap'>Contactate via:</h1>
            <div className='flex gap-4 text-xl 2xl:text-3xl  text-blue-50 justify-center'>
                <SlSocialInstagram className='cursor-pointer' onClick={handleClickIg}/>
                <SiWhatsapp className='cursor-pointer' onClick={handleClickWhats}/>
                <SlEnvolope className='cursor-pointer' onClick={handleClickMail}/>
            </div>
            <ToastContainer/>
    </div>
  )
}

export default Contact