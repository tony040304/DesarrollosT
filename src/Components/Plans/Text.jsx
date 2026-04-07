import React from 'react'

const Text = ({ titulo, descripcion }) => {
    return (
        <div className='flex flex-col p-4'>
            <div className='flex justify-start items-start font-bold text-4xl w-full p-2'>
                <h1>{titulo}</h1>
            </div>
            <div className='flex justify-center items-center w-fit'>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Text