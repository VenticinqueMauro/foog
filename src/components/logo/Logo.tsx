import Image from "next/image";
import logo from "../../../public/logo.png"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href='/' className="z-30">
            <Image
                priority
                width={140}
                className="cursor-pointer logo"
                src={logo}
                alt="logo"
            />
        </Link>
    )
}
