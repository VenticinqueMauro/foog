import { Redes } from "@/components/navbar/redes/ContainerRedes";
import Link from "next/link";

export default function TitleAndDescription() {



    return (
        <div className="w-full h-full text-center sm:text-start">
            <h2 className="text-6xl font-medium font-bold lg:text-8xl gradient-text">Del concepto a la realidad</h2>
            <p className="pt-5 text-base sm:text-lg text-zinc-400">Cada idea es un diamante en bruto. Nuestra pasión radica en pulir esos conceptos en deslumbrantes creaciones 3D. Descubre cómo nuestras representaciones transforman tu visión en una realidad digital.</p>
            <div className="flex items-center gap-4 pt-5">
                <span className="w-full border border-zinc-700"></span>
                {
                    Redes.map((red, i) => (
                        <Link key={i} href={red.href} target="_blank" className="text-lg transition-all duration-200 ease-linear transform md:text-2xl hover:text-white hover:scale-110">{red.icon}</Link>
                    ))
                }
                <span className="w-full border border-zinc-700"></span>
            </div>
        </div>
    )
}
