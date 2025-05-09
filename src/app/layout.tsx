import Link from 'next/link'
import { fontFamilyTxt } from '../data/fonts'
import { CntxtProvider } from '../Context/CntxtProvider'
import { Header } from '../Components/header/header'
import { Footer } from '../Components/footer/footer'
import { Suspense } from 'react'

export const metadata = {
  title: 'Sweet Bliss',
  description:
    'Delight in our irresistible desserts, from gourmet cakes and creamy cheesecakes to artisan pastries. Perfect for celebrations or sweet everyday treats!',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${fontFamilyTxt.className}`}>
        <Link href='#mainContent'>Skip to main content</Link>

        <CntxtProvider>
          <Suspense>
            <Header />
          </Suspense>
          {children}
        </CntxtProvider>

        <Footer />
      </body>
    </html>
  )
}
