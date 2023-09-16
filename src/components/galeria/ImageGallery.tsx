'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import type { RenderPhotoProps } from "react-photo-album";


export default function ImageGallery({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {

    const [loader, setloader] = useState(true)

    useEffect(() => {
        photo?.src && setloader(false)
    }, [photo])


    return (
        <>
            <div style={{ ...wrapperStyle, position: "relative" }}>
                {
                    loader ? (
                        <span className="block w-full h-full bg-zinc-700 animate-pulse"></span>
                    ) :
                        (
                            <Image
                                fill
                                src={photo}
                                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                                {...{ alt, title, sizes, className, onClick }}
                                className="rounded-md shadow-md shadow-black zoomimg cursor-crosshair"
                                loading="eager"
                                priority
                            />
                        )
                }
            </div>
        </>
    );
}