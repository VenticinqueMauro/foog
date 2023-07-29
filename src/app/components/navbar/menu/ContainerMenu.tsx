
import Link from "next/link";

export default function ContainerMenu() {

    const linkStyle = "cursor-pointer text-[#ACAA9E] menuItem hover:text-white hover:bg-[#ACAA9E]/10 px-3 py-1 rounded active:text-white focus:text-white capitalize"

    return (
        <ul className="items-center hidden gap-1 md:flex">
            <li>
                <Link href='/' className={linkStyle}>home</Link>
            </li>
            <li>
                <Link href='/acercade' className={linkStyle}>about</Link>
            </li>
            <li>
                <Link href='/galeria' className={linkStyle}>Gallery</Link>
            </li>
        </ul>

    )
}
