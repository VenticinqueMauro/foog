import { Roboto_Condensed, Sora } from "next/font/google"

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: '700' })
const sora = Sora({ subsets: ['latin'], style: "normal", weight: "500"})


export default function Title({ title }: { title: string }) {

    return (
        <h1 className={`${robotoCondensed.className} text-6xl font-bold text-center capitalize text-[#ACAA9E]`} style={{textShadow: "0px 0px 5px #161616"}}>{title}</h1>
    )
}