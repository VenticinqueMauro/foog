"use client";

import { useEffect } from "react";
import { useStore } from "../store/store";
import { Folder, SearchResult } from "./GetImages";
import Select from "./components/Select";

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
            <div className="absolute z-10 xl:fixed xl:top-24 xl:left-10">

                {/* VISTA DESKTOP  */}

                <p className="hidden px-2 py-1 mb-2 text-2xl underline text-zinc-200 xl:block">Proyectos</p>
                <ul className={`flex flex-col items-start gap-1 w-full px-2 py-1 border border-transparent rounded-md cursor-pointer text-foreground capitalize `}>
                    {
                        folders.map((folder: Folder) => (
                            <li
                                key={folder.name}
                                className={`${folder.name === proyecto && 'text-zinc-300 underline'
                                    } group inline-block hover:underline hover:text-zinc-300 ${'hidden xl:inline-flex gap-1'
                                    }`}
                                onClick={() => handleFilterByFolder(folder.name)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`${proyecto === folder.name ? 'block' : 'hidden'} w-6 h-6`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {folder.name}
                            </li>
                        ))
                    }
                </ul>

                {/* VISTA MOBILE  */}

                <Select folders={folders} handleFilterByFolder={handleFilterByFolder} />

            </div>
        </div>
    )
}
