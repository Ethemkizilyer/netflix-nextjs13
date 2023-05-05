"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import '../styles/globals.css'
import {useState} from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [neden,setNeden]=useState<string>("")
  return (
    <html lang="en">
      <head />
      <body>
       <Providers>
        <Header />
        <main>{children}</main>
        <Footer/>
       </Providers>
        </body>
    </html>
  )
}
