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
    title: "Marianne Legrelle — AI, Computer Science & Human-Centred Systems Lab",
    description:
        "Research portfolio of Marianne Legrelle focusing on the intersection of mathematics, machine learning, software systems, and human-computer interaction (HCI).",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
    },
    openGraph: {
        title: "Marianne Legrelle — AI, Computer Science & Human-Centred Systems Lab",
        description:
            "Research portfolio of Marianne Legrelle focusing on the intersection of mathematics, machine learning, software systems, and human-computer interaction (HCI).",
        url: "https://rebirthstudio.org",
        siteName: "Rebirth Studio",
        images: [
            {
                url: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Marianne Legrelle — Computational Systems & AI Lab",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Marianne Legrelle — AI, Computer Science & Human-Centred Systems Lab",
        description:
            "Research portfolio of Marianne Legrelle focusing on the intersection of mathematics, machine learning, software systems, and human-computer interaction (HCI).",
        images: ["https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/og-image.jpg"],
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
