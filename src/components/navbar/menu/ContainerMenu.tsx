'use client'

import { useStore } from "@/app/store/store";
import { useMediaQuery } from '@react-hook/media-query';
import { motion } from 'framer-motion';
import Link from "next/link";
import RedItem from "../redes/RedItem";
import { Redes } from "../redes/ContainerRedes";


interface Props {
    ulClass: string;
    liClass: string;
}

export const pathNames = [
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
        <>
            <ul className={`${ulClass} pt-14 lg:pt-0 relative`}>
                {
                    pathNames.map((path, i) => (
                        <motion.li
                            key={path.name}
                            initial={isMobile ? { x: -200, opacity: 0 } : { opacity: 0 }}
                            animate={isSidebarOpen ? (isMobile ? { x: 0, opacity: 1 } : { opacity: 1 }) : { opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: i * (isMobile ? 0.13 : 0.2) }}
                            className={`${liClass} gradient-text`}
                            onClick={setIsSidebarOpen}
                        >
                            <Link href={path.href} className={` block w-full text-3xl lg:text-lg `}>{path.name}</Link>
                        </motion.li>
                    ))
                }
                <motion.div
                    className="absolute left-0 right-0 flex flex-col gap-2 mx-auto bottom-10 lg:hidden"
                    initial={isMobile ? { x: -200, opacity: 0 } : { opacity: 0 }}
                    animate={isSidebarOpen ? (isMobile ? { x: 0, opacity: 1 } : { opacity: 1 }) : { opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={setIsSidebarOpen}
                >
                    <a
                        href="https://api.whatsapp.com/send?phone=+5493875433333&text=Hello!%20%F0%9F%98%8A%20I'm%20on%20https://estudiofoog.com/%20%F0%9F%8C%90"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-2 mx-auto mb-2 font-medium bg-green-600 rounded-full w-fit bottom-28 text-zinc-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                        </svg>
                        WhatsApp us
                    </a>
                    <span className="flex items-center justify-center gap-3 px-10 pt-3 mx-auto text-2xl border-t w-fit text-zinc-100 border-zinc-600 lg:hidden bottom-10">
                        {
                            Redes.map(red => (
                                <RedItem key={red.href} href={red.href} icon={red.icon} />
                            ))
                        }
                    </span>

                </motion.div>
            </ul>
        </>
    )
}


