import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {

    const pageTitle = params.name;
    const siteName = 'FOOG';
    const dynamicTitle = `Visualizaciones 3D de ${pageTitle} | ${siteName}`;
    const pageDescription = `Bienvenido a ${pageTitle} - ${siteName}. Somos expertos en representaciones arquitectónicas 3D, renders y mucho más. ¡Descubre nuestros proyectos destacados en ${pageTitle}!`;


    return {
        title: dynamicTitle,
        description: pageDescription,
        keywords: 'visualizaciones 3D, representaciones arquitectónicas, renders, proyectos destacados',
        robots: 'index, follow',
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `http://localhost:3000/galeria/${params.name}`,
            type: 'website',
        },
        viewport: 'width=device-width, initial-scale=1',
        authors: [{ name: 'Venticinque Mauro', url: 'https://mvdev.vercel.app/' }],
        publisher: 'FOOG',

    }
}

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-28 ">
            {children}
        </div>
    )
}
