import { TfiMenu } from "react-icons/tfi"
import Logo from "../logo/Logo"
import ContainerMenu from "./menu/ContainerMenu"
import ContainerRedes from "./redes/ContainerRedes"
import Link from "next/link"

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-10 flex flex-row-reverse items-center justify-between w-full px-6 py-3 text-gray-300 bg-transparent md:flex-row cristal">
            <div className="block text-3xl md:hidden">
                <TfiMenu />
            </div>
            <Logo />
            <ContainerMenu />
            <ContainerRedes />
        </nav>
    )
}

export default Navbar