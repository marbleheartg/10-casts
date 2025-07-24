import { Inter } from "next/font/google"
import { ReactNode } from "react"
import "./globals.css"
import { MINIAPP, PROJECT_DESCRIPTION, PROJECT_TITLE } from "./lib/constants"
import ImagesPreload from "./lib/imagesPreload"

const inter = Inter({
  variable: "--inter",
  weight: "variable",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://auth.farcaster.xyz" />
        <link rel="icon" type="image/svg+xml" href="/images/global/logo.svg" />
        <meta name="fc:miniapp" content={JSON.stringify(MINIAPP)} />
        <meta name="description" content={PROJECT_DESCRIPTION} />
        <title>{PROJECT_TITLE}</title>
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <ImagesPreload />
      </body>
    </html>
  )
}
