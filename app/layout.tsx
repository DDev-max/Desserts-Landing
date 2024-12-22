import { fontFamilyTxt } from "@/app/data/fonts"
import { Header } from "./Components/header/header"
import { Footer } from "./Components/footer/footer"
import Link from "next/link"
import { CntxtProvider } from "./Context/CntxtProvider"

export const metadata = {
  title: 'Sweet Bliss',
  description: 'Delight in our irresistible desserts, from gourmet cakes and creamy cheesecakes to artisan pastries. Perfect for celebrations or sweet everyday treats!',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en">
      <body className={`${fontFamilyTxt.className}`}>
        <Link href="#mainContent">Skip to main content</Link>



        <CntxtProvider >
          <Header />
          {children}
        </CntxtProvider>

        <Footer />


      </body>
    </html>

  )
}
