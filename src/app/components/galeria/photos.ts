import image1 from "../../../../public/1.jpg";
import image2 from "../../../../public/2.jpg";
import image3 from "../../../../public/3.jpg";
import image4 from "../../../../public/4.jpg";
import image5 from "../../../../public/5.jpg";
import image6 from "../../../../public/6.jpg";
import image7 from "../../../../public/7.jpg";
import image8 from "../../../../public/8.jpg";
import image9 from "../../../../public/9.jpg";
import image10 from "../../../../public/10.jpg";
import image11 from "../../../../public/11.jpg";
import image12 from "../../../../public/12.jpg";
import image13 from "../../../../public/13.jpg";
import image14 from "../../../../public/14.jpg";
import image15 from "../../../../public/15.jpg";
import image16 from "../../../../public/16.jpg";
import image17 from "../../../../public/17.jpg";
import image18 from "../../../../public/18.jpg";
import image19 from "../../../../public/19.jpg";
import image20 from "../../../../public/20.jpg";
import image21 from "../../../../public/21.jpg";
import image22 from "../../../../public/22.jpg";
import image23 from "../../../../public/23.jpg";
import image24 from "../../../../public/24.jpg";
import image25 from "../../../../public/25.jpg";
import image27 from "../../../../public/27.jpg";
import image28 from "../../../../public/28.jpg";
import image29 from "../../../../public/29.jpg";
import image30 from "../../../../public/30.jpg";

interface Photo {
    key?: string;
    src: string;
    width: number;
    height: number;
    alt?: string;
    title?: string;
    srcSet?: {
        src: string;
        width: number;
        height: number;
    }[];
}

const photos: Photo[] = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image27,
    image28,
    image29,
    image30,
];

export default photos;
