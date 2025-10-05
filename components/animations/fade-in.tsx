"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useEffect, useRef } from "react"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, direction = "up", delay = 0, duration = 0.5, className = "" }: FadeInProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  }

  const initialDirection = directions[direction]
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      element.classList.add('animate-optimized')
      
      return () => {
        element.classList.remove('animate-optimized')
        element.classList.add('animate-optimized-complete')
      }
    }
  }, [])

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, ...initialDirection }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1],
        type: "tween"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

