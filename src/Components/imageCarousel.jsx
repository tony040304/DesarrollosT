import { s } from 'motion/react-client';
import React, { useEffect, useState } from 'react';


const ImageCarousel = ({ images, video }) => {
const [currentIndex, setCurrentIndex] = useState(0);
const [isVideo, setIsVideo] = useState(false);



const media = [
  ...images.map((src) => ({ type: 'image', src })),
  ...video.map((src) => ({ type: 'video', src })),
];


const prevSlide = () => {
  if (Array.isArray(media) && media.length > 0) {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  }
  };

  const nextSlide = () => {
    if (Array.isArray(media) && media.length > 0) {
      setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    }
    
  };

  useEffect(() => {
    if (media?.length > 0) {
      setIsVideo(true);
    }
  }, [images, video]);

  return (
    <>
    { isVideo &&
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg p-4 2xl:w-1/4 2xl:h-120">
            { media.length > 0 && media[currentIndex].type === 'image' &&
              <img
                  loading="lazy"
                  src={media[currentIndex].src}
                  alt={`Image ${currentIndex}`}
                  className="w-full h-full object-cover delay-75"
            />}
            { media.length > 0 && media[currentIndex].type === 'video' &&
              <video
                  loading="lazy"
                  src={media[currentIndex].src}
                  controls
                  className="w-full h-full object-cover delay-75"
            />}
            <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 text-black p-2 m-1 rounded-full"
            onClick={prevSlide}
            >
            &lt;
            </button>
            <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 text-black p-2 m-1 rounded-full"
            onClick={nextSlide}
            >
            &gt;
            </button>
        </div>
    }
    </>
  );
};

export default ImageCarousel;
