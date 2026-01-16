import React from 'react'

const MySvg = ({ color = 'text-neonblue', onClick }) => {
    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500.000000 500.000000" className={`${color} w-28 fixed bottom-10 cursor-pointer -right-8 transition duration-300 ease-in-out z-50`} preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                <path xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    d="M632 4377 l-622 -622 0 -1255 0 -1255 625 -625 625 -625 625 625 625 625 0 1255 0 1255 -623 623 c-342 342 -624 622 -627 622 -3 0 -285 -280 -628 -623z" />
            </g>
            <text
                x="250"
                y="-100"
                textAnchor="middle"
                fill="white"
                fontSize="60"
                fontWeight="bold"
                className='rotate-90'
            >
                TOP
            </text>
        </svg>
    )
}

export default MySvg