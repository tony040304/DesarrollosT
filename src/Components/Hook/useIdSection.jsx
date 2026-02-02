import React from 'react'

const useIdSection = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    }

    return { scrollToSection }
}

export default useIdSection