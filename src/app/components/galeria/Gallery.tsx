"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import NextJsImage from "./NextImage";
import ImageGallery from "./ImageGallery";
import { PhotoAlbum } from "react-photo-album";
import photos from "./photos";
import useResize from "@/app/hooks/useResize";



export default function Gallery() {

    const [index, setIndex] = useState(-1);
    const { maxPhoto } = useResize()


    return (
        <>
            <PhotoAlbum
                layout="rows"
                photos={photos}
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
                slides={photos}
                render={{ slide: NextJsImage }}
                plugins={[Download, Slideshow, Fullscreen, Zoom]}

            />
        </>
    );
}

