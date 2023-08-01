'use client'

import { useState } from "react"
import Logo from "../logo/Logo"
import ContainerMenu from "./menu/ContainerMenu"
import MenuHamburguesa from "./menu/MenuHamburguesa"
import ContainerRedes from "./redes/ContainerRedes"
import { RiHomeLine } from "react-icons/ri"
import { SiAboutdotme } from "react-icons/si"
import Link from "next/link"
import Sidebar from "./menu/Sidebar"

const ulClassDesktop = "items-center hidden gap-1 md:flex"
const liClassDesktop = "cursor-pointer text-[#ACAA9E] menuItem hover:text-white hover:bg-[#25292B] px-3 py-1 rounded active:text-white focus:text-white capitalize"

function Navbar() {

    const [isOpen, setisOpen] = useState(false)

    const handleClick = () => {
        setisOpen((prev) => !prev)
    }

    return (
        <>
            <nav className="fixed top-0 left-0 z-20 flex flex-row-reverse items-center justify-between w-full px-3 py-3 text-gray-300 bg-transparent md:px-10 md:flex-row cristal">
                <MenuHamburguesa handleClick={handleClick} />
                <Logo />
                <ContainerMenu ulClass={ulClassDesktop} liClass={liClassDesktop} handleClick={handleClick} />
                <ContainerRedes />
            </nav>
            <Sidebar isOpen={isOpen} handleClick={handleClick} />
        </>
    )
}

export default Navbar