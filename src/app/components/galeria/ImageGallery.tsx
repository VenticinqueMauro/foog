
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function ImageGallery({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {


    return (
        <>
            <div style={{ ...wrapperStyle, position: "relative" }}>
                <Image
                    fill
                    src={photo}
                    placeholder={"blurDataURL" in photo ? "blur" : undefined}
                    {...{ alt, title, sizes, className, onClick }}
                    className="rounded-md zoomimg cursor-crosshair"
                    loading="eager"
                />
            </div>
        </>
    );
}