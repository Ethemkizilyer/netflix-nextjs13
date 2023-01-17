import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
       <Providers>
        <Header/>
        <main>{children}</main>
        <Footer/>
       </Providers>
        </body>
    </html>
  )
}
