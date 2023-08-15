import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    icon: ReactNode
    href: string;
}

export default function RedItem({ icon, href }: Props) {

    return (
        <Link href={href} className="focus:text-white hover:text-white">
        {/* <Link href={href} className="focus:text-[#d6fb41] hover:text-[#d6fb41]"> */}
            {icon}
        </Link>
    )
}
