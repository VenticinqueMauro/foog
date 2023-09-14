"use client";

import { useEffect } from "react";
import { useStore } from "../store/store";
import { Folder, SearchResult } from "./GetImages";
import Select from "./components/Select";

interface Props {
    folders: Folder[]
    resources: SearchResult[]
}

export default function ProjectList({ folders, resources }: Props) {

    const { folder: proyecto, setFolder, filterByFolder, setRecursos } = useStore();

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
                <div className="flex items-center hidden gap-1 pb-2 text-xl border-b border-zinc-600 xl:inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-estate" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 21h18"></path>
                        <path d="M19 21v-4"></path>
                        <path d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"></path>
                        <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"></path>
                        <path d="M9 17v4"></path>
                        <path d="M8 13h2"></path>
                        <path d="M8 9h2"></path>
                    </svg>
                    <p className="mt-1 font-semibold text-zinc-200">Projects</p>
                </div>
                <ul className='flex flex-col items-start hidden w-full gap-1 py-1 capitalize border border-transparent rounded-md cursor-pointer text-foreground xl:inline-flex'>
                    {
                        folders.map((folder: Folder) => (
                            <li
                                key={folder.name}
                                className={`${folder.name === proyecto && 'text-zinc-300 underline'
                                    } ${folder.name === 'Presentacion' ? 'hidden' : 'xl:inline-flex'} group inline-block hover:underline hover:text-zinc-300 gap-1`}
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
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${folder.name === "Bedroom" || folder.name === "Vistas del YACHT" ? "block" : "hidden"} icon icon-tabler icon-tabler-star-filled `} width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" strokeWidth="0" fill="currentColor"></path>
                                </svg>
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
