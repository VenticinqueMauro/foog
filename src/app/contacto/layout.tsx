import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Acerca de | FOOG | Estudio De Visualización 3D',
    description: 'Conoce más sobre FOOG, nuestro equipo de artistas 3D y nuestra pasión por la visualización arquitectónica. Descubre cómo hemos ayudado a dar vida a las ideas de nuestros clientes a través de renders realistas y experiencias inmersivas. ¡Únete a nosotros en este emocionante viaje!',
    keywords: 'Acerca de, FOOG, Estudio de Visualización, Equipo, Renders, Experiencias Inmersivas',
    robots: 'index, follow',
    openGraph: {
        title: 'Acerca de | FOOG | Estudio De Visualización 3D',
        description: 'Conoce más sobre FOOG, nuestro equipo de artistas 3D y nuestra pasión por la visualización arquitectónica. Descubre cómo hemos ayudado a dar vida a las ideas de nuestros clientes a través de renders realistas y experiencias inmersivas. ¡Únete a nosotros en este emocionante viaje!',
        url: 'http://localhost:3000/acercade',
        type: 'website',
    },
};


export default function RootLayout({ children, params }: { children: React.ReactNode, params: { name: string } }) {
    return (
        <section className="min-h-screen px-6 pt-32 bg-black lg:px-10">
            {children}
        </section>
    )
}
