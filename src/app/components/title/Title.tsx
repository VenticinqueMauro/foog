export default function Title({ title }: { title: string }) {
    return (
        <h1 className="text-6xl font-bold text-center capitalize neon-effect">{title}</h1>
    )
}