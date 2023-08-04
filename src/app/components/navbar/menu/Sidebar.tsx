import { useStore } from '@/app/store/store';
import ContainerMenu from './ContainerMenu';


const ulClassMobile = "flex flex-col items-start gap-2 px-6 py-6 text-[#ACAA9E]"
const liClassMobile = "p-2 rounded hover:bg-[#25292B] hover:border  border-[#ACAA9E] w-full capitalize"



export default function Sidebar() {

    const { isSidebarOpen, setIsSidebarOpen } = useStore()


    return (
        <div className='overflow-hidden md:hidden'>
            <div
                className={`${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-100 fixed top-0 z-10 w-full min-h-screen cristal bg-black/20 overflow-hidden`}
                onClick={setIsSidebarOpen}
            ></div>
            <section
                className={`${isSidebarOpen ? 'w-60 opacity-100' : 'w-0 opacity-0'} transition-all duration-300 fixed top-0 left-0 z-20 min-h-screen bg-[#161716] py-3 shadow`}
            >
                <ContainerMenu ulClass={ulClassMobile} liClass={liClassMobile} />
            </section>
        </div>
    )
}
