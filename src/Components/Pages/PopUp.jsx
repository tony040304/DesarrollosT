import React, { useState } from 'react'
import Contact from '../Footer/Contact'

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <button className="bg-blue-950 p-2 rounded-xl" onClick={()=>setIsOpen(!isOpen)}>Quiero este producto</button>
        {isOpen && (
            <div className="fixed inset-0 m-auto p-8 flex flex-col items-center justify-center w-1/2 h-1/3 bg-gray-900 bg-opacity-50 rounded-xl 2xl:w-1/3">
                <Contact/>
                <button className="bg-red-950 p-2 rounded-xl mt-10" onClick={()=>setIsOpen(!isOpen)}>Cerrar</button>
            </div>
        )}
    </div>
  )
}

export default PopUp