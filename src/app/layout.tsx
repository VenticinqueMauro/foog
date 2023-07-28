import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], style: "normal", weight: ["400"] })

export const metadata: Metadata = {
  title: 'FOOG | Estudio De Visualización 3D',
  description: 'Somos un estudio especializado en visualización arquitectónica 3D. Transformamos ideas en imágenes asombrosas y experiencias inmersivas. Explora nuestra galería de proyectos destacados y descubre cómo podemos dar vida a tus diseños.',
  keywords: 'FOOG, Estudio de Visualización, 3D, Renders, Arquitectura, Inmersivo',
  robots: 'index, follow',
  openGraph: {
    title: 'FOOG | Estudio De Visualización 3D',
    description: 'Somos un estudio especializado en visualización arquitectónica 3D. Transformamos ideas en imágenes asombrosas y experiencias inmersivas. Explora nuestra galería de proyectos destacados y descubre cómo podemos dar vida a tus diseños.',
    url: 'http://localhost:3000/',
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
    <html lang="en">
      <body className={`${poppins.className} relative min-h-screen w-full text-white bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
