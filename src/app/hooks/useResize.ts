'use client'

import { useEffect, useState } from "react";

const mobile = 2
const desktop = 5

export default function useResize() {

    const [maxPhoto, setMaxPhoto] = useState(0);

    const handleResize = () => {
        window.innerWidth < 768 ? setMaxPhoto(mobile) : setMaxPhoto(desktop)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return { maxPhoto }

}
