import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Contacto | FOOG | Estudio De Visualización 3D',
    description: '¿Quieres ponerte en contacto con nosotros? Estamos aquí para ayudarte. Completa el formulario o utiliza nuestros datos de contacto para hablar con nuestro equipo. ¡Esperamos saber de ti pronto!',
    keywords: 'Contacto, FOOG, Estudio de Visualización, Formulario de Contacto, Datos de Contacto',
    robots: 'index, follow',
    openGraph: {
        title: 'Contacto | FOOG | Estudio De Visualización 3D',
        description: '¿Quieres ponerte en contacto con nosotros? Estamos aquí para ayudarte. Completa el formulario o utiliza nuestros datos de contacto para hablar con nuestro equipo. ¡Esperamos saber de ti pronto!',
        url: 'http://localhost:3000/contacto',
        type: 'website',
    },
};


export default function RootLayout({ children }: { children: React.ReactNode, params: { name: string } }) {
    return (
        <section className="min-h-screen px-6 pt-24 pb-10 bg-black md:pt-32 lg:px-10">
            {children}
        </section>
    )
}
