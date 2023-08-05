"use client";

import useResize from "@/app/hooks/useResize";
import { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ImageGallery from "./ImageGallery";
import NextJsImage from "./NextImage";
import { photosAlbum, photosLightBox } from "./photos";



export default function Gallery() {

    const [index, setIndex] = useState(-1);
    const { maxPhoto } = useResize()


    return (
        <>
            <PhotoAlbum
                layout="rows"
                photos={photosAlbum}
                spacing={5}
                renderPhoto={ImageGallery}
                defaultContainerWidth={1200}
                sizes={{ size: "calc(100vw - 240px)" }}
                onClick={({ index: current }) => setIndex(current)}
                rowConstraints={{ maxPhotos: maxPhoto }}
            />

            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={photosLightBox}
                render={{ slide: NextJsImage }}
                plugins={[Download, Slideshow, Fullscreen, Zoom]}

            />
        </>
    );
}

