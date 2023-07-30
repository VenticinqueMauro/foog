import Image from "next/image";
import ZoomButton from "../../button/ZoomButton";
import { categoryItems } from "./categoryItem";
import Title from "@/app/components/title/Title"

export default function CategoryContainer() {
    return (
        <div className="flex flex-col h-screen gap-2 overflow-y-hidden pt-28 ">
            <Title title={'galería de imagenes'} />
            <div className="flex items-center justify-center flex-grow">
                {categoryItems.map((item, i) => (
                    <div
                        key={i}
                        className="relative h-[90%] md:h-[80%] w-[30%] md:w-[25%] lg:w-[17%] hover:w-[100%] md:hover:w-[40%] lg:hover:w-[25%] opacity-60 hover:opacity-100 group transition-all duration-300 reflejo"
                    >
                        <Image
                            src={item.img}
                            placeholder="blur"
                            loading="eager"
                            alt="fotoCategory"
                            className="object-cover w-full h-full rounded "
                        />
                        <p className="absolute top-0 left-0 flex flex-col items-start md:flex-row md:items-end group-hover:flex-row group-hover:items-end gap-2 md:gap-4 py-2 px-2 mt-4 text-xl font-semibold capitalize group-hover:bg-black/70 group-hover:rounded-r-[6px] pr-4 group-hover:border-[#d6fb41] group-hover:border-t-2 group-hover:border-b-2 group-hover:border-r-2 ">
                            <b className="text-3xl md:text-5xl text-[#d6fb41] typing-text">0{Number(i + 1)}</b> {item.name}
                        </p>
                        <ZoomButton categoryName={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}
