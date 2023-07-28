import Image from "next/image";
import logo from "../../../../public/logo.png"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href='/'>
            <Image
                priority
                className="cursor-pointer logo w-[140px] md:w-[200px]"
                src={logo}
                alt="logo"
            />
        </Link>
    )
}
