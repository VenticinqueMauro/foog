import Link from "next/link";
import WhatsAppButton from "../whatsapp/WhatsAppButton";

export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 z-20 w-full py-2 text-xs text-center lg:z-20 text-zinc-100 cristal bg-black/10 sm:text-base">
            <p>© 2023 <Link href='https://mvdev.vercel.app/' target="_blank"><b className="transition-colors duration-100 ease-linear hover:text-white">MVDev.</b></Link> All rights reserved.</p>
            <span className="fixed hidden bottom-4 right-10 lg:block">
            <WhatsAppButton />
            </span>
        </div>
    )
}