'use client'

import Link from "next/link";
import Dropdown from "../../dropDown/Dropdown";

interface Props {
    ulClass: string;
    liClass: string;
    handleClick: () => void;
}

export default function ContainerMenu({ ulClass, liClass, handleClick }: Props) {



    return (
        <ul className={ulClass}>
            <li className={liClass} onClick={handleClick}>
                <Link href='/' className="block w-full" >home</Link>
            </li>
            <li className={liClass} onClick={handleClick}>
                <Link href='/acercade' className="block w-full">about</Link>
            </li>
            <Dropdown liClass={liClass} handleClick={handleClick}  />
        </ul>

    )
}
