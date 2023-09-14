import ImageSlider from "@/components/slideHome/ImageSlider"
import PageTransitions from "../components/framer/PageTransition"


async function page() {

  return (
    <PageTransitions>
        <ImageSlider />
    </PageTransitions>

  )
}

export default page