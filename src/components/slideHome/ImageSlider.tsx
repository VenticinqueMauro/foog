'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';

import image2 from '../../../public/2.jpg';
import image3 from '../../../public/3.jpg';
import image4 from '../../../public/4.jpg';
import image5 from '../../../public/5.jpg';
import image6 from '../../../public/6.jpg';
import Image from 'next/image';

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
        <div className="relative w-screen h-screen overflow-hidden">
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
                        // <div
                        //     key={index}
                        //     className="w-screen h-screen bg-center bg-cover"
                        //     style={{ backgroundImage: `url(${image.src})` }}
                        // ></div>
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

