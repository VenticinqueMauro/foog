import { StaticImageData } from "next/image";
import { MdOutlineKitchen, MdOutlineLiving, MdOutlineDinnerDining } from "react-icons/md";
import { LiaToiletSolid } from "react-icons/lia";
import { PiArmchair } from "react-icons/pi";

import { ReactNode } from "react";
import adenture from '../../../../../public/adenture.jpg';
import batman from '../../../../../public/batman.jpg';
import freezer from '../../../../../public/freezer.jpg';
import pinky from '../../../../../public/pinky .jpg';
interface categoryItem {
    href: string;
    name: string;
    icon?: ReactNode;
    img: StaticImageData
}

export const categoryItems: categoryItem[] = [
    {
        name: "baños",
        href: "banos",
        img: batman,
        icon: <LiaToiletSolid />
    },
    {
        name: "cocinas",
        href: "cocinas",
        img: adenture,
        icon: <MdOutlineKitchen />
    },
    {
        name: "estar",
        href: "estar",
        img: pinky,
        icon: <PiArmchair />
    },
    {
        name: "comedor",
        href: "comedor",
        img: freezer,
        icon: <MdOutlineDinnerDining />
    }
]

