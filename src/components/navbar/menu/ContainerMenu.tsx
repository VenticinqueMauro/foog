'use client'

import Link from "next/link";
import Dropdown from "../../dropDown/Dropdown";
import { useStore } from "@/app/store/store";

interface Props {
    ulClass: string;
    liClass: string;
}

export default function ContainerMenu({ ulClass, liClass }: Props) {

    const { setIsSidebarOpen } = useStore()



    return (
        <ul className={ulClass}>
            <li className={liClass} onClick={setIsSidebarOpen}>
                <Link href='/' className="block w-full" >Inicio</Link>
            </li>
            {/* <li className={liClass} onClick={setIsSidebarOpen}>
                <Link href='/acercade' className="block w-full">Acerca de</Link>
            </li> */}
            {/* <Dropdown liClass={liClass} handleClick={setIsSidebarOpen} /> */}
            <li className={liClass} onClick={setIsSidebarOpen}>
                <Link href='/proyectos' className="block w-full">Proyectos</Link>
            </li>
            <li className={liClass} onClick={setIsSidebarOpen}>
                <Link href='/contacto' className="block w-full">Contacto</Link>
            </li>
        </ul>
    )
}