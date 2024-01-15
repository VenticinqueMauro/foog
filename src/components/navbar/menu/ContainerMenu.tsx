'use client'

import { useStore } from "@/app/store/store";
import { useMediaQuery } from '@react-hook/media-query';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Redes } from "../redes/ContainerRedes";
import RedItem from "../redes/RedItem";
import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(() => import("@/components/whatsapp/WhatsAppButton"), { ssr: false });

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
                    className="absolute left-0 right-0 flex flex-col gap-2 mx-auto bottom-24 lg:hidden"
                    initial={isMobile ? { x: -200, opacity: 0 } : { opacity: 0 }}
                    animate={isSidebarOpen ? (isMobile ? { x: 0, opacity: 1 } : { opacity: 1 }) : { opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={setIsSidebarOpen}
                >
                    <WhatsAppButton />
                    <span className="flex items-center justify-center gap-4 px-10 pt-3 mx-auto text-2xl border-t w-fit text-zinc-100 border-zinc-600 lg:hidden bottom-10">
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


