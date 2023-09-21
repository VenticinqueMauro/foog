'use client'

import Logo from "../logo/Logo"
import ContainerMenu from "./menu/ContainerMenu"
import MenuHamburguesa from "./menu/MenuHamburguesa"
import Sidebar from "./menu/Sidebar"
import ContainerRedes from "./redes/ContainerRedes"

const ulClassDesktop = "items-center hidden gap-1 lg:inline-flex"
const liClassDesktop = "cursor-pointer menuItem hover:text-white hover:bg-zinc-900 px-3 py-1 rounded active:text-white focus:text-white capitalize"

function Navbar() {


    return (
        <>
            <nav className="fixed top-0 left-0 z-20 flex flex-row-reverse items-center justify-between w-full px-6 py-3 text-zinc-100 md:px-10 lg:flex-row cristal">
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