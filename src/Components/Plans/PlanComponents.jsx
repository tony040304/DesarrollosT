import React from 'react'
import NavBar from '../../Navs/NavBar'
import PreviousCard from '../Card/PreviousCard'
import { planesFoto, planesRedes, planesWeb, planesIdentidad } from '../../Data/Planes'
import { cardComm, cardWeb, cardFoto, cardIdentidad } from '../../Data/Cards.json'

const PlanComponents = () => {
    return (
        <>
            <NavBar visible={-1} />
            <div className='flex flex-col items-center justify-center'>
                <PreviousCard title={'Community manager'} card={cardComm} planes={planesRedes} click={() => handleMessage('Community Manager')} fondo={`bg-[url('/blancoAzul.png')] bg-center-left`} />
            </div>
        </>
    )
}

export default PlanComponents