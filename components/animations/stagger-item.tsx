"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerItemProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  delay?: number
}

export function StaggerItem({ children, direction = "up", className = "", delay }: StaggerItemProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  }

  const initialDirection = directions[direction]

  const item = {
    hidden: { opacity: 0, ...initialDirection },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        type: "tween"
      },
    },
  }

  return (
    <motion.div variants={item} className={className}  >
      {children}
    </motion.div>
  )
}

