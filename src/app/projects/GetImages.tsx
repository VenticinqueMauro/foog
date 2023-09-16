
import Gallery from "@/components/galeria/Gallery";
import cloudinary from "cloudinary";
import ProjectList from "./ProjectList";


export type Folder = {
    name: string
}

export type SearchResult = {
    asset_id: string,
    public_id: string,
    folder: string
    filename: string,
    secure_url: string,
    width: string,
    heigth: string
}

export default async function GetImages() {

    const { folders }: { folders: Folder[] } = await cloudinary.v2.api.root_folders();

    const { resources }: { resources: SearchResult[] } = await cloudinary.v2.search
        .expression(`resource_type:image`)
        .sort_by('public_id', 'desc')
        .max_results(150)
        .execute()

    return (
        <div className="flex flex-col pt-24 overflow-x-hidden gap-y-20 xl:gap-2 xl:flex-row md:pt-28">
            <ProjectList folders={folders} resources={resources} />
            <Gallery />
        </div>
    )
}
