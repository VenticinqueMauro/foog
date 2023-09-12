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
        <div className="relative w-1/6 h-full ">
            <div className="fixed top-24 left-10 ">
                <p className="px-2 py-1 mb-2 text-2xl underline text-zinc-200">Proyectos</p>
                <ul

                    className={`flex flex-col items-start gap-1 w-full px-2 py-1 border border-transparent rounded-md cursor-pointer text-foreground capitalize `}
                >
                    {
                        folders.map((folder: Folder) => (
                            <li
                                key={folder.name}
                                className={`${folder.name === proyecto && 'text-zinc-300 underline'} group inline-block hover:underline hover:text-zinc-300 flex items-center gap-1`}
                                onClick={() => handleFilterByFolder(folder.name)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${proyecto === folder.name ? 'block' : 'hidden'} icon icon-tabler icon-tabler-select`} width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M9 11l3 3l3 -3"></path>
                                </svg>
                                {folder.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
