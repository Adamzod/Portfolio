"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useEffect, useRef } from "react"

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, duration = 0.5, className = "" }: ScaleInProps) {
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
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

