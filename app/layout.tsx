import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sea Park Activities | Snorkeling Adventures in Nusa Lembongan",
  description:
    "Discover incredible snorkeling experiences at Manta Bay, Manta Point, Gamat Bay & Crystal Bay. Shared & Private tours with experienced guides in Nusa Lembongan, Bali.",
  keywords: [
    "snorkeling",
    "Nusa Lembongan",
    "manta ray",
    "Bali",
    "Crystal Bay",
    "underwater tour",
  ],
  openGraph: {
    title: "Sea Park Activities | Snorkeling Adventures in Nusa Lembongan",
    description:
      "Shared & Private snorkeling tours to Manta Bay, Manta Point, Gamat Bay & Crystal Bay.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
