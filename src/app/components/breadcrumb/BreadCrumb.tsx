import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function BreadCrumb({ params }: { params: { name: string } }) {
    return (
        <div className="flex items-center gap-1 mb-10 capitalize">
            <Link href='/' className="flex items-center gap-1 text-zinc-400 hover:underline ">
                <AiFillHome className="text-lg" />
                home
            </Link>
            <MdKeyboardArrowRight className="text-lg text-zinc-400" />
            <Link href='/galeria' className="font-normal hover:underline text-zinc-400">Galería</Link>
            <MdKeyboardArrowRight className="text-lg text-zinc-400" />
            <p className="text-lg font-medium">{params.name}</p>

        </div>
    )
}