import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    icon: ReactNode
    href: string;
}

export default function RedItem({ icon, href }: Props) {

    return (
        <Link href={href} className="focus:text-white hover:text-white " target="_blank">
            {icon}
        </Link>
    )
}
