
function createEmptyArrayWithCount(count: any) {
    return Array.from({ length: count });
}

export default function LoaderGalleryPhotos() {

    const skeletonImage = createEmptyArrayWithCount(28)

    return (
        <span className='flex flex-col h-screen gap-2 animate-pulse'>
            <span className="block h-6 mb-10 rounded rounded-xl w-52 bg-zinc-700">&nbsp;</span>
            <ul className="grid grid-cols-12 gap-2">
                {
                    skeletonImage.map((image, i) => <li key={i} className="block col-span-6 rounded md:col-span-4 xl:col-span-3 h-[300px] bg-zinc-700">&nbsp;</li>)
                }
            </ul>
        </span>
    )
}
