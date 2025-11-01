import type React from "react"
import type { Metadata } from "next"
import { Geist, Cormorant_Garamond, Urbanist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-urbanist",
})

export const metadata: Metadata = {
  title: "Resort - Luxury Hotel & Resort",
  description: "Experience a unique stay at our five stars luxury resort",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${cormorant.variable} ${urbanist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
