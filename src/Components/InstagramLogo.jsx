import React from 'react'
import { InstagramLogoIcon } from '@phosphor-icons/react'

const InstagramLogo = () => {
    return (
        <div className='bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:scale-110 transition-transform cursor-pointer hover:shadow-lg hover:shadow-pink-500/50 rounded-xl'>
            <InstagramLogoIcon
                size={38}
                className=""
            />
        </div>
    )
}
export default InstagramLogo