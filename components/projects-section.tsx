"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import { SectionHeading } from "./animations/section-heading"
import { StaggerChildren } from "./animations/stagger-children"
import { projects, type Project } from "@/lib/projects"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="px-4">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeading title="Projects" />

        {/* Project Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.summary}
              image={project.thumbnail}
              technologies={project.technologies}
              websiteUrl={project.links.website || "#"}
              sourceUrl={project.links.source || "#"}
              onClick={() => openModal(project)}
            />
          ))}
        </StaggerChildren>
        
         {/* Project Modal */}
         <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />

       
      </div>
    </div>
  )
}
