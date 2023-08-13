import Form from "./Form";
import TitleAndDescription from "./TitleAndDescription";

export default function ContainerAll() {
    return (
        <div className="flex flex-col items-center justify-between gap-10 mx-auto md:mt-10 sm:flex-row max-w-7xl">
            <TitleAndDescription />
            <Form />
        </div>
    )
}
