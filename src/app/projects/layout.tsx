import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '3D Visualization Gallery | FOGG',
    description: 'Explore our gallery of 3D architectural projects. Discover a wide variety of renders and 3D representations for interiors and exteriors. Get inspired by our featured projects!',
    keywords: 'projects, gallery, 3D visualizations, renders, architecture, interiors, exteriors',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    authors: [{ name: 'Mauro Venticinque', url: 'https://mvdev.vercel.app/' }],
    publisher: 'FOGG',
};



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="min-h-screen px-6 lg:px-10 bgProjects">
            {children}
        </section>
    )
}
