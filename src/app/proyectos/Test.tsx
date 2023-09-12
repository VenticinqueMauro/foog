
import Gallery from "@/components/galeria/Gallery";
import cloudinary from "cloudinary";
import MapFolders from "./MapFolders";


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

export default async function TestGallery({ name }: Folder) {

    const { folders }: { folders: Folder[] } = await cloudinary.v2.api.root_folders();

    const { resources }: { resources: SearchResult[] } = await cloudinary.v2.search
        // .expression(`resource_type:image`)
        .sort_by('public_id', 'desc')
        .max_results(100)
        .execute()

    console.log(resources.length)
    return (
        <div className="flex gap-2 pt-24 overflow-x-hidden md:pt-28">
            <MapFolders folders={folders} resources={resources} />
            <div className="w-full h-full mb-20">
                <Gallery />
            </div>
        </div>
    )
}
