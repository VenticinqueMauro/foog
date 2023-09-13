"use client";

import useResize from "@/app/hooks/useResize";
import { useEffect, useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ImageGallery from "./ImageGallery";
import NextJsImage from "./NextImage";
import { useStore } from "@/app/store/store";

export default function Gallery() {
    const { maxPhoto } = useResize();
    const { images, setImages, recursos } = useStore();

    useEffect(() => {
        setImages(recursos);
    }, [recursos, setImages])

    const transformedResources = images.map((item) => ({
        ...item,
        src: item.secure_url,
        width: 300,
        height: 250,
    }));

    const photosLightBox = transformedResources.map((image) => ({
        src: image.src,
    }));

    const [index, setIndex] = useState(-1);

    const handlePhotoClick = ({ index: current }: { index: number }) => setIndex(current);

    const handleCloseLightbox = () => setIndex(-1);

    useEffect(() => {
        return () => handleCloseLightbox();
    }, []);

    return (
        <div className="w-full h-full mb-20">
            <PhotoAlbum
                layout="rows"
                photos={transformedResources}
                spacing={5}
                renderPhoto={ImageGallery}
                defaultContainerWidth={1200}
                sizes={{ size: "calc(100vw - 240px)" }}
                onClick={handlePhotoClick}
                rowConstraints={{ maxPhotos: maxPhoto }}
            />

            <Lightbox
                index={index}
                open={index >= 0}
                close={handleCloseLightbox}
                slides={photosLightBox}
                render={{ slide: NextJsImage }}
                plugins={[Download, Slideshow, Fullscreen, Zoom]}
            />
        </div>
    );
}
