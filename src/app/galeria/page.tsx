import { Suspense } from "react";
import CategoryContainer from "../components/galeria/categorias/CategoryContainer";
import LoaderGallery from "../components/loader/Loader.gallery";
import PageTransitions from "../components/framer/PageTransition";


export default function page() {
    return (
        <Suspense fallback={<LoaderGallery />}>
            <PageTransitions>
                <CategoryContainer />
            </PageTransitions>
        </Suspense>
    )
}
