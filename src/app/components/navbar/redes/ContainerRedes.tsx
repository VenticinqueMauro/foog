import { FaArtstation, FaBehance, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import RedItem from "./RedItem";
import { ReactNode } from "react";

export interface Red {
    icon: ReactNode
    href: string
}

export const Redes: Red[] = [
    {
        icon: <FaBehance />,
        href: "#"
    },
    {
        icon: <FaInstagram />,
        href: "#"
    },
    {
        icon: <FaLinkedinIn />,
        href: "#"
    },
    {
        icon: <FaArtstation />,
        href: "#"
    },
    {
        icon: <FaFacebookF />,
        href: "#"
    },
]

export default function ContainerRedes() {


    return (
        <ul className="hidden lg:inline-flex flex items-center gap-4 md:w-[200px] w-auto justify-end md:justify-center">
            {
                Redes.map((red, i) => (
                    <li key={i} className="text-xl icon-container">
                        <RedItem icon={red.icon} href={red.href} />
                    </li>
                ))
            }
        </ul>
    )
}
