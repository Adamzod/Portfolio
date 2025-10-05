"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverScaleProps {
  children: ReactNode
  scale?: number
  className?: string
}

export function HoverScale({ children, scale = 1.05, className = "" }: HoverScaleProps) {
  return (
    <motion.div whileHover={{ scale }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

