import { StaticImageData } from "next/image";
import batman from '../../../../../public/batman.jpg'
import adenture from '../../../../../public/adenture.jpg'
import pinky from '../../../../../public/pinky .jpg'
import freezer from '../../../../../public/freezer.jpg'

interface categoryItem {
    href: string;
    name: string;
    img: StaticImageData
}

export const categoryItems: categoryItem[] = [
    {
        name: "baños",
        href: "banos",
        img: batman
    },
    {
        name: "cocinas",
        href: "cocinas",
        img: adenture
    },
    {
        name: "estar",
        href: "estar",
        img: pinky
    },
    {
        name: "comedor",
        href: "comedor",
        img: freezer
    }
]

