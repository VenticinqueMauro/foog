import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Galería de Visualizaciones 3D | FOOG',
    description: 'Explora nuestra galería de visualizaciones arquitectónicas 3D. Descubre una amplia variedad de renders y representaciones 3D de interiores y exteriores. ¡Inspírate con nuestros proyectos destacados!',
    keywords: 'galería, visualizaciones 3D, renders, arquitectura, interiores, exteriores',
    robots: 'index, follow',
    openGraph: {
        title: 'Galería de Visualizaciones 3D | FOOG',
        description: 'Explora nuestra galería de visualizaciones arquitectónicas 3D. Descubre una amplia variedad de renders y representaciones 3D de interiores y exteriores. ¡Inspírate con nuestros proyectos destacados!',
        url: 'http://localhost:3000/gallery',
        type: 'website',
    },
    viewport: 'width=device-width, initial-scale=1',
    authors: [{ name: 'Venticinque Mauro', url: 'https://mvdev.vercel.app/' }],
    publisher: 'FOOG',
};



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-screen px-10 bg-zinc-950">
            {children}
        </section>
    )
}
