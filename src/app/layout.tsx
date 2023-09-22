import type { Metadata } from 'next'
import { Noto_Sans, Poppins } from 'next/font/google'
import Navbar from '../components/navbar/Navbar'
import './globals.css'
import Footer from '../components/footer/Footer'

const poppins = Poppins({ subsets: ['latin'], style: "normal", weight: ["400"] })

const noto = Noto_Sans({ subsets: ['latin'], style: "normal", weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'FOGG | 3D Visualization Studio',
  description: 'We are a specialized 3D architectural visualization studio. We transform ideas into stunning images and immersive experiences. Explore our gallery of featured projects and discover how we can bring your designs to life.',
  keywords: 'FOGG, Visualization Studio, 3D, Renders, Architecture, Immersive',
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
    <html lang="en">
      <body className={`${noto.className} relative min-h-screen w-full text-zinc-400 bg-black bgAll`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
