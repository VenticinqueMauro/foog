import { useStore } from "@/app/store/store"
import { useState } from "react"

export default function MenuHamburguesa() {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    const { setIsSidebarOpen, isSidebarOpen } = useStore()

    return (
        <>
            <label htmlFor="burger" className="block burger md:hidden" >
                <input id="burger" type="checkbox" checked={isSidebarOpen} onClick={setIsSidebarOpen} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
    )
}
