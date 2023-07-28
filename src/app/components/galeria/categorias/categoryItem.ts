import { StaticImageData } from "next/image";
import batman from '../../../../../public/batman.jpg'
import adenture from '../../../../../public/adenture.jpg'
import pinky from '../../../../../public/pinky .jpg'
import freezer from '../../../../../public/freezer.jpg'

interface categoryItem {
    name: string;
    img: StaticImageData
}

export const categoryItems: categoryItem[] = [
    {
        name: "banos",
        img: batman
    },
    {
        name: "cocinas",
        img: adenture
    },
    {
        name: "estar",
        img: pinky
    },
    {
        name: "comedor",
        img: freezer
    }
]

