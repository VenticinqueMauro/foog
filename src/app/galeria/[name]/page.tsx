import BreadCrumb from "@/app/components/breadcrumb/BreadCrumb";
import Gallery from "@/app/components/galeria/Gallery";
import Link from "next/link";

export default function GalleryLayout({ params }: { params: { name: string } }) {
    return (
        <>
            <BreadCrumb params={params} />
            <Gallery />
        </>
    )
}
