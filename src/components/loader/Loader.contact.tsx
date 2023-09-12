const skeletonArray = Array.from({ length: 3 });


export default function LoaderContact() {
    return (
        <div className="flex flex-col items-center justify-between gap-10 mx-auto md:mt-10 sm:flex-row max-w-7xl animate-pulse">
            <div className="w-full h-full text-center sm:text-start">
                <span className="block w-full h-10 mb-5 rounded rounded-xl bg-zinc-700"></span>
                {
                    skeletonArray.map((skelenton, i) => <span key={i} className="block w-full h-4 my-1 rounded md:my-2 bg-zinc-700">&nbsp;</span>)
                }
            </div>
            <div className="block w-full m-5 rounded h-96 rounded-xl bg-zinc-700">&nbsp;</div>
        </div>
    )
}
