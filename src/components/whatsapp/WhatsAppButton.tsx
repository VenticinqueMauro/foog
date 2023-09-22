'use client';

import { useEffect, useState } from "react";

const joseNumber = 5493875433333
const rodrigoNumber = 5493875435211

export default function WhatsAppButton() {

    const [number, setNumber] = useState<number>();

    useEffect(() => {

        const random = Math.random();

        if (random < 0.5) {
            setNumber(joseNumber);
        } else {
            setNumber(rodrigoNumber);
        }

    }, []);

    return (
        <a
            href={`https://api.whatsapp.com/send?phone=+${number}&text=Hello!%20%F0%9F%98%8A%20I'm%20on%20https://foogstudio.com/%20%F0%9F%8C%90`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-3 py-2 mx-auto mb-2 font-medium bg-green-600 rounded-full shadow-md w-fit bottom-28 text-zinc-100 shadow-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
            </svg>
            WhatsApp us
        </a>
    )
}
