"use client";

import { useEffect, useState } from 'react';

const images = [
    'https://res.cloudinary.com/dqftmoekg/image/upload/v1694688541/Presentacion/Marenco_003_fwqwpy.jpg',
    'https://res.cloudinary.com/dqftmoekg/image/upload/v1694688537/Presentacion/bb_001_gpl53f.jpg',
    'https://res.cloudinary.com/dqftmoekg/image/upload/v1694688534/Presentacion/Ecoreserva004_oqr6kv.jpg',
    'https://res.cloudinary.com/dqftmoekg/image/upload/v1694688532/Presentacion/render_002_l5wylo.jpg',
    'https://res.cloudinary.com/dqftmoekg/image/upload/v1694688525/Presentacion/estar_edit_zpb4p3.jpg',
    'https://res.cloudinary.com/dqftmoekg/image/upload/v1694688504/Presentacion/quincho_001_edit_k2csjb.jpg',
    'https://res.cloudinary.com/dqftmoekg/image/upload/v1694688477/Presentacion/parques_del_yacht_gym_yhx13m.jpg',

];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-screen h-screen bg-center bg-cover"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;





