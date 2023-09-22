import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Contact Us | FOOG | 3D Visualization Studio',
    description: 'Do you want to get in touch with us? We are here to assist you. Fill out the form or use our contact details to speak with our team. We look forward to hearing from you soon!',
    keywords: 'Contact, FOOG, Visualization Studio, Contact Form, Contact Details',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    authors: [{ name: 'Mauro Venticinque', url: 'https://mvdev.vercel.app/' }],
    publisher: 'FOOG',
};



export default function RootLayout({ children }: { children: React.ReactNode, params: { name: string } }) {
    return (
        <section className="min-h-screen px-6 pt-24 pb-10 md:pt-28 lg:px-10">
            {children}
        </section>
    )
}
