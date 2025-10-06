"use client";

import type React from "react";
import { ArrowLeft, Globe, Github, X, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";

const getSkillColor = (skill: string): string => {
  const colors: Record<string, string> = {
    JavaScript: "rgba(240, 219, 79, 0.6)",
    "Node.js": "rgba(104, 160, 99, 0.6)",
    "Express.js": "rgba(240, 219, 79, 0.6)",
    GraphQL: "rgba(56, 126, 184, 0.6)",
    "React.js": "rgba(60, 203, 244, 0.6)",
    "React 18": "rgba(60, 203, 244, 0.6)",
    "Next.js": "rgba(97, 97, 97, 0.6)",
    PostgreSQL: "rgba(54, 105, 148, 0.6)",
    Docker: "rgba(50, 108, 229, 0.6)",
    Supabase: "rgba(62, 207, 142, 0.6)",
    TailwindCSS: "rgba(6, 182, 212, 0.6)",
    "shadcn/ui": "rgba(167, 139, 250, 0.6)",
    Firebase: "rgba(255, 179, 0, 0.6)",
    Firestore: "rgba(255, 179, 0, 0.6)",
    "TanStack Query": "rgba(255, 65, 84, 0.6)",
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
  };

  return colors[skill] || "rgba(158, 158, 158, 0.6)"; // Default gray if not found
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{
            background: "rgba(0, 0, 0, 0.8)",
          }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl h-[90vh] rounded-[30px] overflow-hidden glass-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-[rgba(255,255,255,0.1)]">
              <motion.button
                onClick={onClose}
                className="flex items-center gap-3 text-[rgba(217,217,217,0.8)] hover:text-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back to Projects</span>
              </motion.button>

              <motion.button
                onClick={onClose}
                className="p-2 rounded-full text-[rgba(217,217,217,0.8)] hover:text-light hover:bg-[rgba(255,255,255,0.1)] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex flex-col h-full]">
              <div className="flex-1 p-8 overflow-y-auto">
                {/* Project Header */}
                <div className="mb-6">
                  <motion.h1 
                    className="text-2xl md:text-3xl font-bold text-light mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h1>
                  
                  {(project.company || project.role || project.period) && (
                    <motion.div 
                      className="flex flex-wrap items-center gap-2 text-[rgba(217,217,217,0.8)] mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.role && (
                        <span className="px-3 py-1 rounded-full bg-[rgba(190,141,45,0.2)] text-musterd text-sm font-medium">
                          {project.role}
                        </span>
                      )}
                      {project.period && (
                        <span className="text-sm">
                          {project.period.start}
                          {project.period.end ? ` – ${project.period.end}` : " – Present"}
                        </span>
                      )}
                    </motion.div>
                  )}
                </div>

               

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-6">
                    {/* Description */}
                     {/* Project Image */}
                <motion.div 
                  className="w-full h-[300px] md:h-[350px] mb-6 rounded-[20px] overflow-hidden relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                >
                  <Image
                    src={project.heroImage || project.thumbnail || "/placeholder.svg?height=500&width=800"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className=""
                    priority={false}
                  />
                </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-2xl font-semibold text-light mb-4">About This Project</h3>
                      <p className="text-lg text-[rgba(217,217,217,0.8)] leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>

                 
                    
                  </div>
                  

                  {/* Sidebar */}
                  <div className="space-y-4">
                       {/* Highlights */}
                       {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="text-2xl font-semibold text-light mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {project.highlights.map((highlight, index) => (
                            <motion.li 
                              key={highlight}
                              className="flex items-start gap-3 text-[rgba(217,217,217,0.9)]"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold text-light mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((skill: string, index: number) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-2 text-sm font-medium rounded-[8px]"
                            style={{
                              background: getSkillColor(skill),
                              color: "#D9D9D9",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                      
                    </motion.div>
                    

                    {/* Action Buttons */}
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.a
                        href={project.links.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-[15px] text-light font-medium transition-all"
                        style={{
                          background: "rgba(43, 43, 53, 0.8)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        whileHover={{
                          scale: 1.02,
                          background: "rgba(43, 168, 160, 0.2)",
                          borderColor: "rgba(43, 168, 160, 0.5)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Globe size={20} />
                        <span>Visit Website</span>
                        <ExternalLink size={16} className="ml-auto" />
                      </motion.a>
                      
                      
                      <motion.a
                        href={project.links.source || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-[15px] text-light font-medium transition-all"
                        style={{
                          background: "rgba(43, 43, 53, 0.8)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        whileHover={{
                          scale: 1.02,
                          background: "rgba(43, 43, 53, 0.9)",
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Github size={20} />
                        <span>View Source</span>
                        <ExternalLink size={16} className="ml-auto" />
                      </motion.a>
                    </motion.div>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
