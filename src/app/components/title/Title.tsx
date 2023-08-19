import { Roboto_Condensed, Sora } from "next/font/google"

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: '700' })
const sora = Sora({ subsets: ['latin'], style: "normal", weight: "500" })


export default function Title({ title }: { title: string }) {

    return (
        // <div className="relative">
        //     <h1 className={`text-6xl lg:text-7xl font-medium  text-center capitalize gradient-text z-10`} >{title}</h1>
        //     <span className="absolute bottom-0 hidden w-full font-bold text-center capitalize -z-10 md:block md:text-6xl lg:text-8xl xl:text-9xl text-zinc-500/20">{title}</span>
        // </div>
        <div>
            <h1 className="hidden w-full font-medium text-center capitalize gradient-text md:block md:text-6xl lg:text-8xl text-zinc-300/90">{title}</h1>
        </div>
    )
}