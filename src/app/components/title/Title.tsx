import { Roboto_Condensed } from "next/font/google"

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: '700' })

export default function Title({ title }: { title: string }) {

    return (
        <h1 className={`${robotoCondensed.className} text-6xl font-bold text-center capitalize`}>{title}</h1>
    )
}