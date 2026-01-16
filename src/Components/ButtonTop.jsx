import React from 'react'
import MySvg from '../MySvg'

const ButtonTop = () => {
    const [scrollY, setScrollY] = React.useState(0)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            {
                window.scrollY > 250 && window.scrollY < 7880 && (
                    <MySvg onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                )
            }
        </>
    )
}

export default ButtonTop