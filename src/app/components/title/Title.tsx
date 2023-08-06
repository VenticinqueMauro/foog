import { Roboto_Condensed, Sora } from "next/font/google"

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: '700' })
const sora = Sora({ subsets: ['latin'], style: "normal", weight: "500" })


export default function Title({ title }: { title: string }) {

    return (
        <div className="relative">
            <h1 className={`${robotoCondensed.className} text-4xl md:text-5xl lg:text-7xl font-bold text-center capitalize text-[#ACAA9E]`} >{title}</h1>
            <span className="md:text-6xl lg:text-8xl xl:text-9xl font-bold  text-[#ACAA9E]/[0.03] absolute bottom-0  text-center w-full capitalize">{title}</span>
        </div>
    )
}