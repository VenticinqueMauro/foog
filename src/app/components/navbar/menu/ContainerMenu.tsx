
import Link from "next/link";

export default function ContainerMenu() {

    const linkStyle = "cursor-pointer menuItem hover:text-white active:text-white focus:text-white capitalize"

    return (
        <ul className="items-center hidden gap-6 md:flex">
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
