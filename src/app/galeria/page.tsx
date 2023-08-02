import { Suspense } from "react";
import CategoryContainer from "../components/galeria/categorias/CategoryContainer";
import LoaderGallery from "../components/loader/Loader.gallery";


export default function page() {
    return (
        <Suspense fallback={<LoaderGallery />}>
            <CategoryContainer />
        </Suspense>
    )
}
