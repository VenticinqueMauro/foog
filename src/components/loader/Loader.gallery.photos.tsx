
function createEmptyArrayWithCount(count: any) {
    return Array.from({ length: count });
}

export default function LoaderGalleryPhotos() {

    const skeletonImage = createEmptyArrayWithCount(28)

    return (
        <div className="pt-24 overflow-x-hidden gap-y-20 xl:gap-2 xl:flex-row md:pt-28">
            <span className='flex flex-col h-screen gap-2 animate-pulse'>
                <ul className="grid grid-cols-12 gap-2">
                    {
                        skeletonImage.map((image, i) => <li key={i} className="block col-span-6 rounded md:col-span-4 xl:col-span-3 h-40 md:h-[300px] bg-zinc-700">&nbsp;</li>)
                    }
                </ul>
            </span>
        </div>
    )
}
