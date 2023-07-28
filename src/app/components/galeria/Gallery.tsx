"use client";

import { useState } from "react";
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

export default function Gallery() {

    const [index, setIndex] = useState(-1);

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
            />

            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={photos}
                // styles={{ container: { backgroundColor: "#09090B" } }}
                render={{ slide: NextJsImage }}
                plugins={[Download, Slideshow, Fullscreen, Zoom]}

            />
        </>
    );
}

