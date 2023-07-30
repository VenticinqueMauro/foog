import { Roboto_Condensed, Sora } from "next/font/google"

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: '700' })
const sora = Sora({ subsets: ['latin'], style: "normal", weight: "500" })


export default function Title({ title }: { title: string }) {

    return (
        <div className="relative">
            <h1 className={`${robotoCondensed.className} text-4xl md:text-5xl lg:text-7xl font-bold text-center capitalize text-[#ACAA9E]`} style={{ textShadow: "0px 0px 5px #161616" }}>{title}</h1>
            <span className="md:text-6xl lg:text-8xl font-bold  text-[#ACAA9E]/5 absolute bottom-0  text-center w-full capitalize">{title}</span>
        </div>
    )
}