import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function BreadCrumb({ params }: { params: { name: string } }) {
    return (
        <div className="flex items-center gap-1 mb-5 capitalize">
            <Link href='/' className="flex items-center gap-1 hover:text-[#d6fb41] ">
                <AiFillHome className="text-lg " />
            </Link>
            <MdKeyboardArrowRight className="text-lg text-[#d6fb41] " />
            <Link href='/galeria' className="font-normal hover:underline">Galería</Link>
            <MdKeyboardArrowRight className="text-lg text-[#d6fb41] " />
            <p >{params.name}</p>
        </div>
    )
} 