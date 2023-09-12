"use client";

import { useEffect } from "react";
import { useStore } from "../store/store";
import { Folder, SearchResult } from "./Test";

interface Props {
    folders: Folder[]
    resources: SearchResult[]
}

export default function MapFolders({ folders, resources }: Props) {

    const { folder: proyecto, setFolder, filterByFolder, images, setImages, setRecursos, recursos } = useStore()

    useEffect(() => {
        if (resources) {
            setRecursos(resources)
        }
    }, [resources, setRecursos])

    const handleFilterByFolder = (folder: string) => {
        setFolder(folder)
        filterByFolder(folder)
    }

    return (
        <>
            {
                folders.map((folder: Folder) => (
                    <div
                        key={folder.name}
                        className={`flex items-center w-full px-2 py-1 border border-transparent rounded-md cursor-pointer font- hover:underline hover:text-zinc-300 text-foreground capitalize`}
                        onClick={() => handleFilterByFolder(folder.name)}
                    >
                        <span className={`${folder.name === proyecto && 'text-zinc-300 underline'}`}>
                            {folder.name}
                        </span>
                    </div>
                ))
            }
        </>
    )
}
