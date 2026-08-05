import React from 'react'

const CardLogo = ({ children }) => {
  return (
    <div className='flex items-center justify-center bg-white shadow-lg shadow-black/50 rounded-3xl p-2'>
      {children}
    </div>
  )
}

export default CardLogo