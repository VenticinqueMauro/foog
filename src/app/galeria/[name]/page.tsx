import BreadCrumb from "@/app/components/breadcrumb/BreadCrumb";
import Gallery from "@/app/components/galeria/Gallery";

export default function GalleryLayout({ params }: { params: { name: string } }) {
    return (
        <>
            <BreadCrumb params={params} />
            <Gallery />
        </>
    )
}
