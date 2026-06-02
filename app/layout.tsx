import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = 'https://www.draleticiasoriani.com.br'
const siteTitle = 'Dra. Letícia Soriani | Oftalmologista em Maringá'
const siteDescription =
  'Oftalmologista em Maringá com atendimento humanizado para saúde ocular, catarata, olho seco, controle de miopia, cirurgia refrativa e consultas especializadas.'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Dra. Letícia Soriani',
  },
  description: siteDescription,
  applicationName: 'Dra. Letícia Soriani Oftalmologia',
  keywords: [
    'Dra. Letícia Soriani',
    'oftalmologista em Maringá',
    'oftalmologia Maringá',
    'consulta oftalmológica',
    'cirurgia de catarata',
    'controle de miopia',
    'olho seco',
    'cirurgia refrativa',
  ],
  authors: [{ name: 'Dra. Letícia Soriani' }],
  creator: 'Dra. Letícia Soriani',
  publisher: 'Dra. Letícia Soriani',
  category: 'healthcare',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dra. Letícia Soriani Oftalmologia',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/doctor-portrait.jpg',
        width: 1200,
        height: 1500,
        alt: 'Dra. Letícia Soriani, oftalmologista em Maringá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/doctor-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/apple-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
