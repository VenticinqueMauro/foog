import Link from "next/link";

export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 w-full py-2 text-xs text-center text-zinc-100 cristal bg-black/10 sm:text-base ">
            <p>© 2023 <Link href='https://mvdev.vercel.app/' target="_blank"><b className="transition-colors duration-100 ease-linear hover:text-white">MVDev.</b></Link> Todos los derechos reservados.</p>
        </div>
    )
}