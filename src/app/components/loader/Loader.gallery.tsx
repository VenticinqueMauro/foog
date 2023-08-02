import { categoryItems } from '../galeria/categorias/categoryItem'

export default function LoaderGallery() {
    return (
        <div className='flex flex-col h-screen gap-10 pt-32 animate-pulse'>
            <span className='block h-12 w-[250px] md:w-[400px] lg:w-[600px] mx-auto rounded bg-zinc-600'>&nbsp;</span>
            <ul className='flex items-center justify-center flex-grow gap-2'>
                {categoryItems.map((category) => (
                    <li key={category.name} className='bg-zinc-600 rounded h-[90%] md:h-[80%] w-[30%] md:w-[25%] lg:w-[17%]  reflejo'>
                        &nbsp;
                    </li>
                ))}
            </ul>

        </div>
    )
}
