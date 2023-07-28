import { BiSolidZoomIn } from "react-icons/bi";
import Link from "next/link";

interface Props{
    categoryName: string;
}

export default function ZoomButton({categoryName}: Props) {
    return (
        <Link href={`/galeria/${categoryName}`} className="absolute w-0 h-0 transition-all transform -translate-x-1/2 -translate-y-1/2 rounded-full group:duration-300 group-hover:w-32 group-hover:h-32 bg-black/40 top-1/2 left-1/2">
            <div className="absolute w-20 h-20 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-100 bg-black/40 top-1/2 left-1/2 hover:w-32 hover:h-32">
                <BiSolidZoomIn className="absolute transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 text-zinc-300 hover:text-white group-hover:opacity-100" size={32}  />
            </div>
        </Link>
    )
}
