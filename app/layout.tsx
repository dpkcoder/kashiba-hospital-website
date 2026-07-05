import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kashiba Multispeciality Hospital – ICU & NICU | Kamrej, Surat',
  description: 'Advanced ICU & NICU care at Kashiba Multispeciality Hospital in Surat. 24×7 emergency services, experienced specialists, and compassionate healthcare for your family.',
  generator: 'v0.app',
  keywords: ['hospital', 'ICU', 'NICU', 'Surat', 'healthcare', 'emergency', 'specialist'],
  metadataBase: new URL('https://kashiba-hospital.local'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kashiba-hospital.local',
    title: 'Kashiba Multispeciality Hospital – ICU & NICU | Kamrej, Surat',
    description: 'Advanced ICU & NICU care at Kashiba Multispeciality Hospital in Surat. 24×7 emergency services, experienced specialists, and compassionate healthcare for your family.',
    images: [{ url: '/logo.png' }],
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
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A2E' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
