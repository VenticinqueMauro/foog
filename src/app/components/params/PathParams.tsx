import Link from "next/link";

export default function PathParams({ params }: { params: { name: string } }) {
    return (
        <div className="flex items-center gap-2 mb-10 capitalize">
            <Link href='/galeria' className="font-normal hover:underline">Galería</Link>
            <span>&gt;</span>
            <p className="text-lg font-semibold">{params.name}</p>
        </div>
    )
}