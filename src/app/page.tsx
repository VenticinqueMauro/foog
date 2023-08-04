import PageTransitions from "./components/framer/PageTransition"

function page() {

  return (
    <PageTransitions>
      <div className="w-screen h-screen">
        <video className="object-cover w-full h-full" autoPlay muted>
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      </div>
    </PageTransitions>

  )
}

export default page