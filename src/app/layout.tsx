import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import Header from './Header'

const meta = {
  title: 'Hunter Chang - Website',
  description:
    'Sleep deprived father. FE Engineer in China. Lover of Ramen and Kpop',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Hunter Chang',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">

          {/* <header className="py-4 ">

            <div className="flex  items-center  px-6">
              <p className='font-semibold text-xl'>Komponents</p>
              <Navigation />
              <ThemeSwitch />
            </div>

          </header> */}

          <Header />

          <main className="mt-20"
          >

            <Container>

              {children}
            </Container>

          </main>

          <footer className="py-16">
            <Container>
              <p>
                Built by{' '}
                <Link className="link" href="https://twitter.com/hunterhchang">
                  Amartya Sinha
                </Link>
              </p>
            </Container>
          </footer>

        </ThemeProvider>
      </body>
    </html>
  )
}
