import React from "react";

const setScroll = () => {
    const handleScrollTo = (y) => {
        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return {
        handleScrollTo,
    };
};

export default setScroll;