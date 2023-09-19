import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Contacto | FOOG | Estudio De Visualización 3D',
    description: '¿Quieres ponerte en contacto con nosotros? Estamos aquí para ayudarte. Completa el formulario o utiliza nuestros datos de contacto para hablar con nuestro equipo. ¡Esperamos saber de ti pronto!',
    keywords: 'Contacto, FOOG, Estudio de Visualización, Formulario de Contacto, Datos de Contacto',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    authors: [{ name: 'Venticinque Mauro', url: 'https://mvdev.vercel.app/' }],
    publisher: 'FOOG',
};


export default function RootLayout({ children }: { children: React.ReactNode, params: { name: string } }) {
    return (
        <section className="min-h-screen px-6 pt-24 pb-10 md:pt-28 lg:px-10 bg-contact">
            {children}
        </section>
    )
}
