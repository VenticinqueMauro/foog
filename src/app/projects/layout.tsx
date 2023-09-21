import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Galería de Visualizaciones 3D | FOOG',
    description: 'Explora nuestra galería de proyectos arquitectónicos 3D. Descubre una amplia variedad de renders y representaciones 3D de interiores y exteriores. ¡Inspírate con nuestros proyectos destacados!',
    keywords: 'proyectos, galería, visualizaciones 3D, renders, arquitectura, interiores, exteriores',
    robots: 'index, follow',
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
        <section className="min-h-screen px-6 lg:px-10">
                {children}
        </section>
    )
}
