import { Redes } from "@/components/navbar/redes/ContainerRedes";
import Link from "next/link";

export default function TitleAndDescription() {


    return (
        <div className="w-full h-full text-center sm:text-start">
            <h2 className="pb-5 text-6xl font-medium font-bold lg:text-8xl gradient-text">From concept to reality</h2>
            <p className="pt-5 text-base sm:text-lg text-zinc-400">Every idea is a raw diamond. Our passion lies in polishing those concepts into dazzling 3D creations. Discover how our representations transform your vision into a digital reality.</p>
            <div className="flex items-center gap-4 pt-5">
                <span className="w-full border border-zinc-500"></span>
                {
                    Redes.map((red, i) => (
                        <Link key={i} href={red.href} target="_blank" className="text-lg transition-all duration-200 ease-linear transform md:text-2xl hover:text-white hover:scale-110">{red.icon}</Link>
                    ))
                }
                <span className="w-full border border-zinc-500"></span>
            </div>
        </div>
    )
}
