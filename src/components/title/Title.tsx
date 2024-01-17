
export default function Title({ title }: { title: string }) {

    return (
        <div>
            <h1 className="hidden w-full font-medium text-center capitalize gradient-text md:block md:text-6xl lg:text-8xl text-zinc-300/90">{title}</h1>
        </div>
    )
}