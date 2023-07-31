'use client'

import { useState } from "react"
import Logo from "../logo/Logo"
import ContainerMenu from "./menu/ContainerMenu"
import MenuHamburguesa from "./menu/MenuHamburguesa"
import ContainerRedes from "./redes/ContainerRedes"

function Navbar() {

    const [isOpen, setisOpen] = useState(false)

    const handleClick = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
            <nav className="fixed top-0 left-0 z-10 flex flex-row-reverse items-center justify-between w-full px-3 py-3 text-gray-300 bg-transparent md:px-10 md:flex-row cristal backdrop-blur-sm">
                <MenuHamburguesa handleClick={handleClick} />
                <Logo />
                <ContainerMenu />
                <ContainerRedes />
            </nav>
            <section className={`${isOpen ? 'w-60 opacity-100' : 'w-0 opacity-0'} transition-all duration-300 fixed top-0 left-0 z-20 min-h-screen bg-[#161716]`}>
            </section>
        </>
    )
}

export default Navbar