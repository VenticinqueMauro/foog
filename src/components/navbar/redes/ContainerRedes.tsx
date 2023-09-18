import { ReactNode } from "react";
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import RedItem from "./RedItem";

export interface Red {
    icon: ReactNode
    href: string
}

export const Redes: Red[] = [
    {
        icon: <FaBehance />,
        href: "https://www.behance.net/estudiofogg"
    },
    {
        icon: <FaInstagram />,
        href: "https://instagram.com/estudio.fogg"
    },
    {
        icon: <FaLinkedinIn />,
        href: "https://www.linkedin.com/in/estudiofogg/"
    }
]

export default function ContainerRedes() {


    return (
        <ul className="flex items-center justify-end hidden w-auto gap-4 lg:inline-flex md:w-[130px] md:justify-end">
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
