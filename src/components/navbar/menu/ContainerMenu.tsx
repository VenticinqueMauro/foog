'use client'

import { useStore } from "@/app/store/store";
import Link from "next/link";

interface Props {
    ulClass: string;
    liClass: string;
}

const pathNames = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'projects',
        href: '/projects'
    },
    {
        name: 'contact',
        href: '/contact'
    }
]


export default function ContainerMenu({ ulClass, liClass }: Props) {

    const { setIsSidebarOpen } = useStore();

    return (
        <ul className={ulClass}>
            {
                pathNames.map(path => (
                    <li 
                    key={path.name} 
                    className={liClass} 
                    onClick={setIsSidebarOpen}
                    >
                        <Link href={path.href} className={`block w-full text-3xl md:text-lg`}>{path.name}</Link>
                    </li>
                ))
            }
        </ul>
    )
}


