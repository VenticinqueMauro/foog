
interface Props {
    handleClick: () => void
}

export default function MenuHamburguesa({ handleClick }: Props) {

    return (
        <label htmlFor="burger" className="block burger md:hidden" >
            <input id="burger" type="checkbox" onClick={handleClick} />
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}
