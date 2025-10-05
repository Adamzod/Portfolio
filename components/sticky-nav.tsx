"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyNav() {
  const [isSticky, setIsSticky] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.intersectionRatio < 0.5)
      },
      {
        threshold: [0.5],
        rootMargin: "0px 0px 0px 0px",
      },
    )

    const heroSection = document.querySelector("#hero")
    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
        >
          <div className="flex flex-col md:flex-row justify-between max-w-[1180px] mx-auto gap-3">
            {/* Left Section - Full width on mobile, normal on desktop */}
            <motion.div
              className="flex gap-[10px] rounded-[30px] w-full md:w-3/4 md:max-w-[43.75rem] h-[4.375rem] px-[1.25rem] glass-nav"
              style={{
                alignItems: "stretch",
              }}
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {/* Profile */}
              <div className="flex items-center">
                <div className="h-[3.75rem] w-[3.75rem] overflow-hidden rounded-full">
                  <Image
                    src="/IMG_9231.jpg"
                    alt="Profile"
                    width={60}
                    height={60}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <div
                className="flex items-center gap-4 md:gap-10"
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  padding: "0 10px",
                }}
              >
                {[
                  { name: "Yousef", target: "hero" },
                  { name: "Portfolio website", target: "journey-section" },
                  { name: "Projects", target: "projects-section" }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className={index === 0 ? "md:block" : index === 1 ? "hidden md:block" : "hidden md:block"}
                  >
                    <button
                      onClick={() => {
                        if (item.target === "hero") {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        } else {
                          document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-light hover:text-teal transition-colors text-sm md:text-lg font-medium cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}

                {/* Social icons - Shown on mobile only */}
                <div className="flex md:hidden items-center gap-4">
                  {[
                    { 
                      icon: <Linkedin size={20} />, 
                      href: "https://www.linkedin.com/in/yousef-mehdizadeh", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      type: "link"
                    },
                    { 
                      icon: <Github size={20} />, 
                      href: "#", 
                      type: "link"
                    },
                    { 
                      icon: <Mail size={20} />, 
                      type: "modal"
                    },
                  ].map((item, index) => (
                    item.type === "link" ? (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                        className="text-light hover:text-teal transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        {item.icon}
                      </motion.a>
                    ) : (
                      <motion.div
                        key={index}
                        className="text-light hover:text-teal transition-colors cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setIsContactModalOpen(true)}
                      >
                        {item.icon}
                      </motion.div>
                    )
                  ))}

                  {/* Resume button - Mobile version */}
                  <motion.a
                    href="#"
                    className="flex items-center gap-1 rounded-[10px] bg-[#242938] px-3 py-1 text-light text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium">Resume</span>
                    <Download size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Hidden on mobile */}
            <motion.div
              className="hidden md:flex items-center rounded-[30px] px-6 py-3 glass-nav"
              style={{
                alignItems: "stretch",
              }}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {/* Social icons */}
              <div className="flex items-center gap-6 mr-6">
                {[
                  { 
                    icon: <Linkedin size={24} />, 
                    href: "https://www.linkedin.com/in/yousef-mehdizadeh", 
                    target: "_blank", 
                    rel: "noopener noreferrer",
                    type: "link"
                  },
                  { 
                    icon: <Mail size={24} />, 
                    type: "modal"
                  },
                ].map((item, index) => (
                  item.type === "link" ? (
                    <motion.a
                      key={index}
                      href={item.href}
                      target={item.target}
                      rel={item.rel}
                      className="text-light hover:text-teal transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay:   0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.icon}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={index}
                      className="text-light hover:text-teal transition-colors cursor-pointer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay:   0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setIsContactModalOpen(true)}
                    >
                      {item.icon}
                    </motion.div>
                  )
                ))}
              </div>

              {/* Resume button */}
              <motion.a
                href="#"
                className="flex items-center gap-2 rounded-[10px] bg-[#242938] px-5 py-2 text-light transition-colors hover:bg-[#2d2a47]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">Resume</span>
                <Download size={18} />
              </motion.a>
            </motion.div>
          </div>
        </motion.nav>
      )}

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-modal rounded-[20px] p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 text-light hover:text-teal transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Modal content */}
              <div className="text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <h3 className="text-2xl font-bold text-light mb-2">Get in Touch</h3>
                  <p className="text-[rgba(217,217,217,0.8)]">Feel free to reach out to me</p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  {/* Email */}
                  <div className="flex items-center justify-center gap-3 p-4 rounded-[15px] bg-[rgba(43,168,160,0.1)] border border-[rgba(43,168,160,0.2)]">
                    <Mail size={20} className="text-teal" />
                    <div className="text-left">
                      <p className="text-sm text-[rgba(217,217,217,0.6)]">Email</p>
                      <p className="text-light font-medium">mehd3660@mylaurier.ca</p>
                    </div>
                    <motion.button
                      onClick={() => {
                        navigator.clipboard.writeText('mehd3660@mylaurier.ca');
                        // You could add a toast notification here
                      }}
                      className="ml-auto text-teal hover:text-light transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </motion.button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-center gap-3 p-4 rounded-[15px] bg-[rgba(198,134,215,0.1)] border border-[rgba(198,134,215,0.2)]">
                    <Phone size={20} className="text-[#C686D7]" />
                    <div className="text-left">
                      <p className="text-sm text-[rgba(217,217,217,0.6)]">Phone</p>
                      <p className="text-light font-medium">(647) 551-4266</p>
                    </div>
                    <motion.button
                      onClick={() => {
                        navigator.clipboard.writeText('6475514266');
                        // You could add a toast notification here
                      }}
                      className="ml-auto text-[#C686D7] hover:text-light transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <p className="text-sm text-[rgba(217,217,217,0.6)]">
                    Click the copy icon to copy to clipboard
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

