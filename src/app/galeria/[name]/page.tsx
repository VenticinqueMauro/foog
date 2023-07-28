import Gallery from "@/app/components/galeria/Gallery";
import PathParams from "@/app/components/params/PathParams"
import Link from "next/link";

export default function GalleryLayout({ params }: { params: { name: string } }) {
    return (
        <>
            <PathParams params={params} />
            <Gallery />
        </>
    )
}
