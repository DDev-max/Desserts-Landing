import { indieFlower } from "@/app/data/fonts"
import { Header } from "./Components/header/header"
import { Footer } from "./Components/footer/footer"
import Link from "next/link"

export const metadata = {
  title: 'Sweet Bliss',
  description: 'Delight in our irresistible desserts, from gourmet cakes and creamy cheesecakes to artisan pastries. Perfect for celebrations or sweet everyday treats!',
}

export default function RootLayout({children}: { children: React.ReactNode}) {

  return (

    <html lang="en">
      <body className={`${indieFlower.className}`}>
        <Link href="#mainContent">Skip to main content</Link>

        <Header/>

        {children}

        <Footer/>


      </body>
    </html>

  )
}
