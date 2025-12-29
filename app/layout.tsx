import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Work_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
})

const workSans = Work_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
})

export const metadata: Metadata = {
    title: "Rebirth Studio - Building Digital Products",
    description:
        "At Rebirth, a creative digital studio, every idea is a rebirth and every design an emotion. We craft digital products that inspire, engage and feel thoughtfully made.",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body
            className={`${playfairDisplay.variable} ${workSans.variable} font-sans antialiased overflow-x-hidden`}
            suppressHydrationWarning
        >
        {children}
        <Analytics />
        <Toaster position="top-center" richColors />
        </body>
        </html>
    )
}
