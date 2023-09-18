
function createEmptyArrayWithCount(count: any) {
    return Array.from({ length: count });
}

export default function LoaderGalleryPhotos() {

    const skeletonImage = createEmptyArrayWithCount(12)

    return (
        <div className="pt-24 overflow-x-hidden gap-y-20 xl:gap-2 xl:flex-row md:pt-28">
            <div className="flex flex-col justify-between xl:flex-row animate-pulse">
                <div className="block h-10 m-1 mb-6 w-52 lg:w-1/4 xl:min-h-screen bg-zinc-700">
                    &nbsp;
                </div>
                <span className='flex flex-col w-full h-screen gap-2 p-1 x'>
                    <ul className="grid grid-cols-12 gap-2">
                        {
                            skeletonImage.map((image, i) => <li key={i} className="block col-span-6  md:col-span-4  xl:col-span-3 h-40 sm:h-[300px] md:h-[300px] bg-zinc-700">&nbsp;</li>)
                        }
                    </ul>
                </span>
            </div>
        </div>
    )
}
