import ContainerMenu from './ContainerMenu';

interface Props {
    isOpen: boolean;
    handleClick: () => void;
}

const ulClassMobile = "flex flex-col items-start gap-2 px-6 py-6 text-[#ACAA9E]"
const liClassMobile = "p-2 rounded hover:bg-[#25292B] hover:border  border-[#ACAA9E] w-full capitalize"



export default function Sidebar({ isOpen, handleClick }: Props) {
    return (
        <>
            <div
                className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-100 absolute top-0 z-10 w-full h-screen cristal bg-black/50`}
                onClick={handleClick}
            ></div>
            <section
                className={`${isOpen ? 'w-60 opacity-100' : 'w-0 opacity-0'} transition-all duration-300 fixed top-0 left-0 z-20 min-h-screen bg-[#161716] py-3`}
            >
                <ContainerMenu ulClass={ulClassMobile} liClass={liClassMobile} handleClick={handleClick}  />
            </section>
        </>
    )
}
