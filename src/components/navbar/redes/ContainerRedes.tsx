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
