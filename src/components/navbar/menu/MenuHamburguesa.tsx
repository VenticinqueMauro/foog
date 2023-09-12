import { useStore } from "@/app/store/store"

export default function MenuHamburguesa() {

    const { setIsSidebarOpen, isSidebarOpen } = useStore()

    return (
        <>
            <label htmlFor="burger" className="block burger lg:hidden" >
                <input id="burger" type="checkbox" checked={isSidebarOpen} onChange={setIsSidebarOpen} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
    )
}
