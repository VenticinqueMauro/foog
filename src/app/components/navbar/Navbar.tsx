'use client'

import Logo from "../logo/Logo"
import ContainerMenu from "./menu/ContainerMenu"
import MenuHamburguesa from "./menu/MenuHamburguesa"
import Sidebar from "./menu/Sidebar"
import ContainerRedes from "./redes/ContainerRedes"

const ulClassDesktop = "items-center hidden gap-1 md:flex"
const liClassDesktop = "cursor-pointer text-[#ACAA9E] menuItem hover:text-white hover:bg-[#161f20] px-3 py-1 rounded active:text-white focus:text-white capitalize"

function Navbar() {


    return (
        <>
            <nav className="fixed top-0 left-0 z-20 flex flex-row-reverse items-center justify-between w-full px-3 py-3 text-gray-300 bg-transparent md:px-10 md:flex-row cristal">
                <MenuHamburguesa  />
                <Logo />
                <ContainerMenu ulClass={ulClassDesktop} liClass={liClassDesktop} />
                <ContainerRedes />
            </nav>
            <Sidebar />
        </>
    )
}

export default Navbar