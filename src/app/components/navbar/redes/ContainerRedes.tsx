import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import RedItem from "./RedItem";
import { ReactNode } from "react";

interface Red {
    icon: ReactNode
    href: string
}

export default function ContainerRedes() {

    const Redes: Red[] = [
        {
            icon: <InstagramIcon />,
            href: "#"
        },
        {
            icon: <FacebookIcon />,
            href: "#"
        },
        {
            icon: <TwitterIcon />,
            href: "#"
        },
    ]

    return (
        <ul className="hidden md:inline-flex flex items-center gap-4 md:w-[200px] w-auto justify-end md:justify-center">
            {
                Redes.map((red, i) => (
                    <li key={i} className="icon-container ">
                        <RedItem icon={red.icon} href={red.href} />
                    </li>
                ))
            }
        </ul>
    )
}
