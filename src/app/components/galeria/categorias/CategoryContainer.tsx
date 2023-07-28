import Image from "next/image";
import ZoomButton from "../../button/ZoomButton";
import { categoryItems } from "./categoryItem";
import Title from "@/app/components/title/Title"

export default function CategoryContainer() {
    return (
        <div className="flex flex-col h-screen gap-2 overflow-y-hidden pt-28 ">
            <Title title={'galería de imagenes'} />
            <div className="flex items-center justify-center flex-grow ">
                {categoryItems.map((item, i) => (
                    <div
                        key={i}
                        className="relative h-[80%] w-[300px] hover:w-[500px] opacity-30 hover:opacity-100 group transition-all duration-300 reflejo"
                    >
                        <Image
                            src={item.img}
                            placeholder="blur"
                            loading="eager"
                            alt="fotoCategory"
                            className="object-cover w-full h-full"
                        />
                        <p className="absolute top-0 left-0 flex items-end gap-4 p-3 mt-4 text-xl font-semibold capitalize group-hover:bg-black/60 group-hover:rounded-r-[6px] pr-8">
                            <b className="text-3xl text-[#E72081] typing-text">0{Number(i + 1)}</b> {item.name}
                        </p>
                        <ZoomButton categoryName={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}
