import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Yousef Mehdizadeh | Portfolio",
  description: "Software Engineer specializing in Full Stack and Embedded Systems",
    generator: 'v0.dev',
    icons: {
      icon: "/Gemini%20Generated%20Image%20(2).png",
      shortcut: "/Gemini%20Generated%20Image%20(2).png",
      apple: "/Gemini%20Generated%20Image%20(2).png",
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'
