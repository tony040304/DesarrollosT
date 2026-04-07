import React from 'react'

const SvgCard = ({ path }) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#000000" viewBox="0 0 256 256">
                <path d={path}>
                </path>
            </svg>
        </div>
    )
}

export default SvgCard