import React from 'react'
import { InstagramLogoIcon } from '@phosphor-icons/react'

const InstagramLogo = ({ ig }) => {

    const GoIg = () => {
        window.open(`https://www.instagram.com/${ig}/`, "_blank");
        fbq('track', 'OutboundClick', {
            destination: 'Instagram'
        });
    };
    return (
        <button
            onClick={() => GoIg()}
            className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400 shadow-lg shadow-yellow-500/30 hover:shadow-pink-700/50 p-1.5 rounded-lg font-bold text-white xl:w-fit xl:text-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer w-fit"
        >
            Instagram
        </button>
    )
}
export default InstagramLogo