"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useEffect, useRef } from "react"

interface StaggerChildrenProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
  style?: React.CSSProperties
}

export function StaggerChildren({ children, delay = 0, staggerDelay = 0.1, className = "", style = {} }: StaggerChildrenProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
        type: "tween"
      },
    },
  }

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
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }} 
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

