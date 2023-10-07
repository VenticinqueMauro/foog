'use client';

import { useMediaQuery } from '@react-hook/media-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import image2 from '../../../public/2.webp';
import image3 from '../../../public/3.webp';
import image4 from '../../../public/4.webp';
import image5 from '../../../public/5.webp';
import image6 from '../../../public/6.webp';

const images = [image2, image3, image4, image5, image6];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery('(max-width: 1023px)');

    useEffect(() => {
        const interval = setInterval(() => {
            // Avanzar al siguiente índice de imagen
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Cambia la duración en función del dispositivo

        return () => {
            // Limpia el intervalo cuando el componente se desmonta
            clearInterval(interval);
        };
    }, [isMobile]);

    return (
        <div className="relative w-screen h-screen overflow-hidden ">
            <div className='absolute z-10  w-full portada h-screen'>
                <div className='absolute bottom-16 left-[2%]  inline-block  text-start bg-black cristal px-5 py-3 rounded-xl'>
                    <h1 className='font-bold text-6xl text-white' style={{ textShadow: '0px 2px 10px #000' }}>Designing Tomorrow, Today</h1>
                    <h2 className='pt-3 text-xl font-semibold text-white' style={{ textShadow: '0px 2px 10px #000' }}>Pioneering 3D Architectural Visualization Excellence</h2>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }} // Ajusta la duración de la animación aquí (1 segundo en este ejemplo)
                    className={`flex ${isMobile ? 'duration-3000' : 'duration-10000'}`}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                        width: `${images.length * 100}%`,
                    }}
                >
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image.src}
                            alt={`Image ${index}`}
                            className="object-cover w-screen h-screen"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ImageSlider;












