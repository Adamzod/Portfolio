"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center mb-16">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 200, height: 3, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-[rgba(217,217,217,0.1)]"
      />
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-[20px] font-medium text-[rgba(217,217,217,0.5)] mx-4"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 200, height: 3, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-[rgba(217,217,217,0.1)]"
      />
    </div>
  )
}

