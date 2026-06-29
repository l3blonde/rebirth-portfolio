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
    metadataBase: new URL("https://www.rebirthstudio.org"),
    other: {
        "color-scheme": "light",
    },
    title: "Marianne L.-P. — AI, Computer Science & Human-Centred Systems Lab",
    description:
        "Research portfolio of Marianne L.-P. focusing on the intersection of mathematics, machine learning, software systems, and human-computer interaction (HCI).",
    openGraph: {
        title: "Marianne L.-P. — AI, Computer Science & Human-Centred Systems Lab",
        description:
            "Research portfolio of Marianne L.-P. focusing on the intersection of mathematics, machine learning, software systems, and human-computer interaction (HCI).",
        url: "https://rebirthstudio.org",
        siteName: "Rebirth Studio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Marianne L.-P. — Computational Systems & AI Lab",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Marianne L.-P. — AI, Computer Science & Human-Centred Systems Lab",
        description:
            "Research portfolio of Marianne L.-P. focusing on the intersection of mathematics, machine learning, software systems, and human-computer interaction (HCI).",
        images: ["/og-image.jpg"],
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
