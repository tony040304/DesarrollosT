import React from 'react'

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
            window.scrollY > 250 && (
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        className='fixed bottom-10 right-2 bg-blue-950 text-white p-3 rounded-full shadow-lg hover:bg-blue-950 transition duration-300 ease-in-out'>
                    Ir arriba
                </button>
            )
        }
    </>
  )
}

export default ButtonTop