"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { StaggerItem } from "./animations/stagger-item"


interface SkillIconProps {
  name: string
  icon: string
  color: string
}

export function SkillIcon({ name, icon, color }: SkillIconProps) {
  return (
    <StaggerItem>
      <motion.div
        className="flex flex-col items-center justify-center"
        style={{
          width: "3.44rem",
          height: "4.375rem",
          borderRadius: "15px",
        }}
        whileHover={{ scale: 1.1, borderRadius: "15px" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className=" flex items-center justify-center rounded-[15px] "
  
          whileHover={{
            borderRadius: "15px",
            boxShadow: `0 0 15px rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(color.slice(5, 7), 16)}, 0.3)`,
          }}
        >
          <div className="relative h-[3.44rem] w-[3.44rem] max-[1130px]:h-[3.00rem] max-[1130px]:w-[3.00rem] max-[1000px]:w-[4.00rem] max-[1000px]:h-[4.00rem] max-[500px]:w-[3.00rem] max-[500px]:h-[3.00rem] max-[400px]:w-[2.50rem] max-[400px]:h-[2.50rem] " style={{
            // width: "3.44rem",
            // height: "3.44rem",
            borderRadius: "15px",
          }}>
            <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>
        </motion.div>
        <span className="text-xs max-[400px]:hidden text-light mt-[2px]">{name}</span>
      </motion.div>
    </StaggerItem>
  )
}

