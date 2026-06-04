import { Playfair_Display, Inter } from 'next/font/google'
import ThemeProviders from '@/components/providers/ThemeProviders'
import Footer from '@/components/layout/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Татьяна Золотарева — SMM-специалист | Освещение и интерьер',
  description:
    'Контент-стратегия, видео, аналитика и визуальный стиль для брендов в нише освещения и интерьера. Кейс: Pinterest Lightstar — 11.8K показов в месяц.',
  keywords: 'SMM, контент-маркетинг, освещение, интерьер, Pinterest, Instagram, Татьяна Золотарева',
  authors: [{ name: 'Татьяна Золотарева' }],
  openGraph: {
    title: 'Татьяна Золотарева — SMM-специалист',
    description: 'Контент-стратегия и визуальный стиль для брендов в нише освещения и интерьера.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ThemeProviders>
          <main>{children}</main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
