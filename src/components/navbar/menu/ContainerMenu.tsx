'use client'

import { useStore } from "@/app/store/store";
import Link from "next/link";
import { useMediaQuery } from '@react-hook/media-query';
import { motion } from 'framer-motion';


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

    const { setIsSidebarOpen, isSidebarOpen } = useStore();

    const isMobile = useMediaQuery('(max-width: 1023px)');

    return (
        <ul className={ulClass}>
            {
                pathNames.map((path, i) => (
                    <motion.li
                        key={path.name}
                        initial={isMobile ? { x: -100, opacity: 0 } : { opacity: 0 }}
                        animate={isSidebarOpen ? (isMobile ? { x: 0, opacity: 1 } : { opacity: 1 }) : {opacity: 1}}
                        exit={isMobile ? { x: -100, opacity: 0 } : { opacity: 0 }}
                        transition={{ delay: i * (isMobile ? 0.13 : 0.2) }}
                        className={liClass}
                        onClick={setIsSidebarOpen}
                    >
                        <Link href={path.href} className={`block w-full text-3xl lg:text-lg`}>{path.name}</Link>
                    </motion.li>
                ))
            }
        </ul>
    )
}


