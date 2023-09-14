"use client";

import image1 from '../../../public/1.jpg';
import image2 from '../../../public/2.jpg';
import image3 from '../../../public/3.jpg';
import image4 from '../../../public/4.jpg';
import image5 from '../../../public/5.jpg';
import image6 from '../../../public/6.jpg';
import image7 from '../../../public/7.jpg';

import { useEffect, useState } from 'react';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
];

const ImageSlider = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div
                className="flex transition-transform duration-1000"
                style={{
                    transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-screen h-screen bg-center bg-cover"
                        style={{ backgroundImage: `url(${image.src})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;





