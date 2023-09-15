import ImageSlider from "@/components/slideHome/ImageSlider"
import PageTransitions from "../components/framer/PageTransition"


async function page() {

  return (
    <PageTransitions>
      {/* <ImageSlider /> */}
      <div className="w-screen h-screen">
        <video className="object-cover w-full h-full" autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </PageTransitions>

  )
}

export default page