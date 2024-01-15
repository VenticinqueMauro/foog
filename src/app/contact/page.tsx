import PageTransitions from "@/components/framer/PageTransition";
import dynamic from "next/dynamic";

const ContainerAll = dynamic(() => import("./components/ContainerAll"));


export default function page() {

    return (
        <PageTransitions>
            <ContainerAll />
        </PageTransitions>
    )
}

