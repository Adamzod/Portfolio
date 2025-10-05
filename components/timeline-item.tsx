"use client"
import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface TimelineItemProps {
  date: string
  location: string
  title: string
  company: string
  description: string
  skills: string[]
  position: "left" | "right"
  details?: string[] // For expanded view
}

// Function to get color for skill tag based on skill name
const getSkillColor = (skill: string): string => {
  const colors: Record<string, string> = {
    // Programming Languages
    JavaScript: "rgba(240, 219, 79, 0.6)",
    "Node.js": "rgba(104, 160, 99, 0.6)",
    Python: "rgba(53, 114, 165, 0.6)",
    TypeScript: "rgba(49, 120, 198, 0.6)",
    
    // Frameworks & Libraries
    "Express.js": "rgba(240, 219, 79, 0.6)",
    "Express": "rgba(240, 219, 79, 0.6)",
    React: "rgba(60, 203, 244, 0.6)",
    "React.js": "rgba(60, 203, 244, 0.6)",
    "React Native": "rgba(97, 218, 251, 0.6)",
    GraphQL: "rgba(56, 126, 184, 0.6)",
    "D3.js": "rgba(255, 99, 132, 0.6)",
    Flask: "rgba(255, 255, 255, 0.6)",
    Django: "rgba(9, 45, 27, 0.6)",
    FastAPI: "rgba(16, 185, 129, 0.6)",
    
    // Databases
    PostgreSQL: "rgba(54, 105, 148, 0.6)",
    MongoDB: "rgba(76, 175, 80, 0.6)",
    SQL: "rgba(0, 123, 255, 0.6)",
    Redis: "rgba(220, 38, 38, 0.6)",
    
    // Data Science & Analytics
    "scikit-learn": "rgba(255, 152, 0, 0.6)",
    ARIMA: "rgba(156, 39, 176, 0.6)",
    "Power BI": "rgba(255, 193, 7, 0.6)",
    Tableau: "rgba(31, 81, 255, 0.6)",
    NumPy: "rgba(79, 70, 229, 0.6)",
    Pandas: "rgba(16, 185, 129, 0.6)",
    
    // Cloud & DevOps
    Docker: "rgba(50, 108, 229, 0.6)",
    AWS: "rgba(255, 153, 0, 0.6)",
    WebSockets: "rgba(59, 130, 246, 0.6)",
    
    // APIs & Services
    "Stripe API": "rgba(99, 102, 241, 0.6)",
    Stripe: "rgba(99, 102, 241, 0.6)",
    Twilio: "rgba(242, 27, 63, 0.6)",
    SendGrid: "rgba(30, 144, 255, 0.6)",
    
    // Tools & Platforms
    N8N: "rgba(255, 87, 34, 0.6)",
    BullMQ: "rgba(255, 193, 7, 0.6)",
    "Chart.js": "rgba(255, 99, 132, 0.6)",
    Figma: "rgba(162, 89, 255, 0.6)",
    "Admin Tools": "rgba(107, 114, 128, 0.6)",
    Analytics: "rgba(234, 179, 8, 0.6)",
    "Data Analytics": "rgba(234, 179, 8, 0.6)",
    "Performance Optimization": "rgba(16, 185, 129, 0.6)",
    
    // Security & Auth
    JWT: "rgba(255, 193, 7, 0.6)",
    OAuth2: "rgba(76, 175, 80, 0.6)",
    Authentication: "rgba(99, 102, 241, 0.6)",
    
    // Web Technologies
    CSS: "rgba(33, 150, 243, 0.6)",
    HTML: "rgba(244, 67, 54, 0.6)",
    
    // Computer Science Concepts
    Algorithms: "rgba(156, 39, 176, 0.6)",
    "Data Structures": "rgba(121, 85, 72, 0.6)",
    "Machine Learning": "rgba(255, 152, 0, 0.6)",
    "Computer Networks": "rgba(0, 188, 212, 0.6)",
    "Operating Systems": "rgba(255, 87, 34, 0.6)",
    "Programming Fundamentals": "rgba(63, 81, 181, 0.6)",
    "Web Development": "rgba(233, 30, 99, 0.6)",
    "Database Design": "rgba(0, 150, 136, 0.6)",
    "Software Engineering": "rgba(139, 195, 74, 0.6)",
    "Computer Science": "rgba(63, 81, 181, 0.6)",
    Physics: "rgba(156, 39, 176, 0.6)",
    Mathematics: "rgba(255, 87, 34, 0.6)",
    Statistics: "rgba(0, 150, 136, 0.6)",
    Communication: "rgba(59, 130, 246, 0.6)",
    Teaching: "rgba(249, 115, 22, 0.6)",
    Mentoring: "rgba(147, 51, 234, 0.6)",
    "Reflective Listening": "rgba(99, 102, 241, 0.6)",
  }

  return colors[skill] || "rgba(158, 158, 158, 0.6)" // Default gray if not found
}

export function TimelineItem({
  date,
  location,
  title,
  company,
  description,
  skills,
  position,
  details = [],
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`relative flex items-start ${position === "right" ? "justify-end" : "justify-start"}`}>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: position === "left" ? -50 : 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        }}
        className="w-full md:w-[520px]"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: "pointer" }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="p-[20px] rounded-[30px] glass-hero"
          style={{
            flex: "none",
            order: 0,
            flexGrow: 0,
          }}
          animate={{
            height: isExpanded ? "auto" : "auto",
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="flex flex-col gap-2">
            {/* Header row with date and location */}
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-[#2BA8A0]">{date}</span>
              <div className="flex items-center gap-1">
              <MapPin size={14} style={{ color: "rgba(198, 134, 215, 0.9)" }} />
              <span className="text-[14px] font-medium" style={{ color: "rgba(198, 134, 215, 0.9)" }}>
                {location}
              </span>
            </div>
            </div>

            {/* Role title */}
            <h3 className="text-[18px] font-medium text-[#D9D9D9]">
              {company} - <span style={{ color: "rgba(217, 217, 217, 0.8)" }}>{title}</span>
            </h3>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 mt-[15px]">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 text-[10px] font-medium rounded-[2px]"
                style={{
                  background: getSkillColor(skill),
                  color: "#D9D9D9",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.2 + (index * 0.05),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>


            {/* Description */}
            <p className="text-[14px] font-medium leading-relaxed text-[rgba(217,217,217,0.8)] mt-[15px]">{description}</p>

            {/* Expanded content */}
            <AnimatePresence mode="wait">
              {isExpanded && details.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    height: { duration: 0.4 }
                  }}
                  className="pt-4 overflow-hidden"
                >
                  <motion.ul 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {details.map((detail, index) => (
                      <motion.li 
                        key={index} 
                        className="text-[16px] font-medium pl-5 relative text-[rgba(217,217,217,0.8)]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.3 + (index * 0.1),
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <motion.span 
                          className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-[#2BA8A0]"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.4 + (index * 0.1),
                            duration: 0.3,
                            ease: "backOut"
                          }}
                        ></motion.span>
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand/collapse indicator */}
            <div className="flex justify-center mt-2">
              <motion.div 
                animate={{ rotate: isExpanded ? 180 : 0 }} 
                transition={{ 
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronDown size={20} className="text-[#BE8D2D]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

