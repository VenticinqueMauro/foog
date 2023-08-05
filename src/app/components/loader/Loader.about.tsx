const skeletonArray = Array.from({ length: 30 });

export default function LoaderAbout() {

    console.log(skeletonArray.length)

    return (
        <span className="flex flex-col h-screen animate-pulse">
            <span className='block h-6 md:h-10 w-[250px] md:w-[400px] lg:w-[600px] mx-auto rounded rounded-xl bg-zinc-700 mb-10'>&nbsp;</span>
            {
                skeletonArray.map((skelenton, i) => <span key={i} className="block w-full h-4 my-1 rounded md:my-2 rounded-xl bg-zinc-700">&nbsp;</span>)
            }
        </span>
    )
}
