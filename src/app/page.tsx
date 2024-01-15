import dynamic from "next/dynamic";

const ImageSlider = dynamic(() => import("@/components/slideHome/ImageSlider"));

async function page() {

  return (
      <ImageSlider />
  )
}

export default page