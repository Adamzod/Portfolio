"use client"

import Image from "next/image"
import { Globe, Github } from "lucide-react"
import { motion } from "framer-motion"
import { HoverScale } from "./animations/hover-scale"
import { StaggerItem } from "./animations/stagger-item"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  websiteUrl: string
  sourceUrl: string
  onClick: () => void
}

const getSkillColor = (skill: string): string => {
  const colors: Record<string, string> = {
    JavaScript: "rgba(240, 219, 79, 0.6)",
    "Node.js": "rgba(104, 160, 99, 0.6)",
    "Express.js": "rgba(240, 219, 79, 0.6)",
    GraphQL: "rgba(56, 126, 184, 0.6)",
    "React.js": "rgba(60, 203, 244, 0.6)",
    PostgreSQL: "rgba(54, 105, 148, 0.6)",
    Docker: "rgba(50, 108, 229, 0.6)",
    // Add fallbacks for other skills
    Python: "rgba(53, 114, 165, 0.6)",
    TypeScript: "rgba(49, 120, 198, 0.6)",
    MongoDB: "rgba(76, 175, 80, 0.6)",
    CSS: "rgba(33, 150, 243, 0.6)",
    HTML: "rgba(244, 67, 54, 0.6)",
    Algorithms: "rgba(156, 39, 176, 0.6)",
    "Data Structures": "rgba(121, 85, 72, 0.6)",
    "Machine Learning": "rgba(255, 152, 0, 0.6)",
    "Computer Networks": "rgba(0, 188, 212, 0.6)",
    "Operating Systems": "rgba(255, 87, 34, 0.6)",
    "Programming Fundamentals": "rgba(63, 81, 181, 0.6)",
    "Web Development": "rgba(233, 30, 99, 0.6)",
    "Database Design": "rgba(0, 150, 136, 0.6)",
    "Software Engineering": "rgba(139, 195, 74, 0.6)",
  }

  return colors[skill] || "rgba(158, 158, 158, 0.6)" // Default gray if not found
}

export function ProjectCard({ title, description, image, technologies, websiteUrl, sourceUrl, onClick }: ProjectCardProps) {
  return (
    <StaggerItem>
      <HoverScale scale={1.03}>
        <div
          className="w-full md:w-[350px] rounded-[30px] overflow-hidden h-[520px] md:h-[540px] flex flex-col glass-card"
          onClick={onClick}
        >
          <div className="p-5 flex  flex-col h-full">
            <motion.div
              className="w-full h-[240px] rounded-[15px] overflow-hidden mb-6 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 310px"
                className=""
                priority={false}
              />
            </motion.div>

            <h3 className="text-xl font-semibold text-light mb-[15px]">{title}</h3>
            <p className="text-[14px] text-[rgba(217,217,217,0.8)] mb-[12px] line-clamp-3">{description}</p>

            <div className="flex flex-wrap gap-2 mb-[16px] max-h-[56px] overflow-hidden">
            {technologies.map((skill, index) => (
              <span
                key={skill}
                className="px-[5px] py-[3px] text-[10px] font-medium rounded-[2px]"
                style={{
                  background: getSkillColor(skill),
                  color: "#D9D9D9",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

            <div className="mt-auto flex gap-2" onClick={(e) => e.stopPropagation()}>
              <motion.a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1 rounded-[10px] text-sm text-light transition-colors hover:text-black"
                style={{
                  background: "rgba(43, 43, 53, 0.9)",

                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(111.48deg, rgba(217, 217, 217, 0.8) -143.64%, #D9D9D9 317.08%)",

                }}
                transition={{ duration: 0.3 }}
              >
                <Globe size={16} />
                Website
              </motion.a>
              <motion.a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm  text-light transition-colors hover:text-black"
                style={{
                  background: "rgba(43, 43, 53, 0.9)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(111.48deg, rgba(217, 217, 217, 0.8) -143.64%, #D9D9D9 317.08%)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Github size={16} />
                Source
              </motion.a>
            </div>
          </div>
        </div>
      </HoverScale>
    </StaggerItem>
  )
}

