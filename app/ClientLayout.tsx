"use client"

import type React from "react"

import "./globals.css"
import { Inter } from "next/font/google"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 z-0">
          <Image 
            src="/Seamless Dot.svg"
            alt="Background Pattern"
            fill
            priority
            style={{ objectFit: 'cover'}}
          />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}

