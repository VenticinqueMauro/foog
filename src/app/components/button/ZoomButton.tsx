import { BiSolidZoomIn } from "react-icons/bi";
import Link from "next/link";

interface Props{
    categoryName: string;
}

export default function ZoomButton({categoryName}: Props) {
    return (
        <Link href={`/galeria/${categoryName}`} className="absolute w-0 h-0 transition-all transform -translate-x-1/2 -translate-y-1/2 rounded-full group:duration-300 md:group-hover:w-32 group-hover:w-28 group-hover:h-28 md:group-hover:h-32 bg-black/40 top-1/2 left-1/2 cristal">
            <div className="absolute w-16 h-16 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 md:w-20 md:h-20 group-hover:opacity-100 bg-black/40 top-1/2 left-1/2 md:hover:w-32 md:hover:h-32">
                <BiSolidZoomIn className="absolute text-2xl transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 md:text-3xl top-1/2 left-1/2 text-zinc-300 hover:text-white group-hover:opacity-100"   />
            </div>
        </Link>
    )
}
