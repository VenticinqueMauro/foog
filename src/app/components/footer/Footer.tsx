import Link from "next/link";

export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 w-full py-2 text-xs text-center cristal bg-black/10 sm:text-base ">
            <p>© 2023 <Link href='https://wa.me/+5493816160976?text=¡Hola!%20Estoy%20interesado/a%20en%20tus%20servicios.%20¿Podemos%20conversar%3F' target="_blank"><b className="transition-colors duration-100 ease-linear hover:text-white">MVDev.</b></Link> Todos los derechos reservados.</p>
        </div>
    )
}