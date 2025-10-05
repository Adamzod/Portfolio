"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TimelineItem } from "./timeline-item"
import { SectionHeading } from "./animations/section-heading"

// Update the experiences array to include details for expanded view
const experiences = [
  {
    date: "May 2025 - Present",
    location: "Toronto, ON",
    company: "ONEX",
    title: "Data Science and Quantitative Analyst COOP",
    skills: ["Python", "SQL", "Power BI", "Tableau", "scikit-learn", "ARIMA", "Flask", "N8N", "Redis"],
    description:
      "Developing advanced analytics solutions and executive dashboards to drive data-driven decision making across multiple portfolio companies.",
    details: [
      "Developed a consolidated executive dashboard using Python, SQL, and Power BI, eliminating 150+ manual reports/month and accelerating executive decisions",
      "Optimized portfolio forecasting with ARIMA, Prophet, and ensemble models, reducing error by 20% and improving capital allocation",
      "Collaborated with C-suite leaders across 5 companies to design segmentation logic, cutting 50K redundant contacts and generating $400K in revenue",
      "Built and deployed a churn prediction model with scikit-learn logistic regression, retaining 1,800 clients and preserving $1.2M revenue",
      "Automated ETL and reporting pipelines with Python + SQL stored procedures, saving 45 hours/month",
      "Deployed AI anomaly-detection agents via N8N + Redis, reducing incident resolution time from 8 hours to under 1 hour",
    ],
  },
  {
    date: "Sep 2024 - Apr 2025",
    location: "Waterloo, ON",
    company: "Wilfrid Laurier University",
    title: "Teaching Assistant",
    skills: [
      "Computer Science",
      "Physics",
      "Algorithms",
      "Data Structures",
      "Communication",
      "Mentoring",
    ],
    description:
      "Teaching assistant for first- and second-year courses in Physics and Computer Science.",
    details: [
      "Led weekly labs/tutorials; clarified core concepts and graded assignments/exams",
      "Held office hours and provided one-on-one support improving student outcomes",
      "Created walkthroughs and practice problems to reinforce lecture material",
    ],
  },
  {
    date: "Sep 2024 - Apr 2025",
    location: "Toronto, ON (Remote)",
    company: "Stealth Startup",
    title: "Full‑stack Developer",
    skills: [
      "React",
      "TypeScript",
      "D3.js",
      "Python",
      "FastAPI",
      "GraphQL",
      "WebSockets",
      "NumPy",
      "Pandas",
      "Docker",
    ],
    description:
      "Contributed to the development of a visual reasoning engine that translated complex AI decision processes into interpretable, interactive visual representations.",
    details: [
      "Built front-end visualization tools using React, TypeScript, and D3.js, enabling real-time exploration of model reasoning paths and inference steps",
      "Collaborated with a multidisciplinary team of ML researchers and engineers to design data pipelines and visualization schemas for large-scale reasoning outputs",
      "Developed internal tools for data preprocessing, feature mapping, and reasoning trace interpretation, improving model explainability and debugging workflows",
      "Designed lightweight API layers to connect visualization interfaces with backend inference services, ensuring low latency and secure communication",
    ],
  },
  {
    date: "Jul 2024 - Jan 2025",
    location: "Toronto, ON (Hybrid)",
    company: "MZ tutors",
    title: "Full‑stack Developer (Contract)",
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "Stripe",
      "React",
      "Authentication",
      "Admin Tools",
      "Performance Optimization",
      "Analytics",
    ],
    description:
      "Architected and developed an e-commerce system using Python/Django, PostgreSQL, and Stripe, powering online sales for a company with ~2,000 SKUs and monthly revenue in the low six figures (~$120K–$150K).",
    details: [
      "Integrated backend order management, stock tracking, and analytics dashboards, consolidating reporting and eliminating 15+ hours of manual spreadsheet work per week.",
      "Built secure authentication and role-based admin controls, safeguarding operations across 10 internal staff and ~1,500 active customer accounts.",
      "Optimized product listing workflows and site performance (lazy loading, query optimization), cutting average page load times from 5+ seconds to under 2 seconds, improving customer conversion rates.",
      "Automated nightly inventory reconciliation and restock alerts, preventing overselling and reducing out-of-stock complaints by ~25 per month.",
    ],
  },
  {
    date: "May 2024 - Jul 2024",
    location: "Toronto, ON (On‑site)",
    company: "Sylvan Learning",
    title: "Academic Tutor (Contract)",
    skills: [
      "Mathematics",
      "Physics",
      "Teaching",
      "Programming",
      "Communication",
      "Reflective Listening",
    ],
    description:
      "Tutored students in math, physics and programming with individualized lesson plans.",
    details: [
      "Adapted instruction to student learning styles and goals",
      "Measured progress with formative assessments and feedback loops",
      "Improved confidence and subject mastery through practice and coaching",
    ],
  },
  {
    date: "Apr 2022 - Sep 2023",
    location: "Toronto, ON (On‑site)",
    company: "Canadian Smart Business",
    title: "Web Developer (Contract)",
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "Stripe",
      "React.js",
      "Performance Optimization",
      "Data Analytics",
      "Admin Tools",
      "Authentication",
    ],
    description:
      "Developed an e-commerce system with Django + PostgreSQL, managing 500+ products and generating $25K–$40K monthly sales.",
    details: [
      "Automated order management and analytics dashboards with Stripe + Django ORM, saving 10–15 hours/week and preventing overselling incidents.",
      "Optimized queries and enabled lazy loading, cutting page load times from 5s+ to under 2s, boosting conversion rates.",
    ],
  },
  {
    date: "Sep 2021 - Apr 2022",
    location: "Toronto, ON",
    company: "Prime Factor",
    title: "Full Stack Developer",
    skills: ["Stripe API", "Redis", "BullMQ", "React", "Chart.js", "Twilio", "SendGrid", "Node.js", "PostgreSQL", "JWT", "OAuth2"],
    description:
      "Engineered automated financial systems and billing workflows to streamline accounting operations and improve cash flow management.",
    details: [
      "Engineered an automated invoicing system with Node.js, PostgreSQL, and Stripe API, removing manual invoice creation and enabling secure auto-payments",
      "Automated billing workflows with Twilio + SendGrid, reducing overdue collections and improving cash flow stability",
      "Implemented retry queues using Redis + BullMQ, reducing failed payment delinquency",
      "Built a real-time reconciliation dashboard with React + Chart.js, saving 20+ hours/month and replacing Excel workflows",
      "Expanded accountant productivity by 60%, enabling each to manage 800 clients vs. 500 previously",
      "Secured financial operations with JWT/OAuth2, protecting sensitive client payment data",
    ],
  },
]

// Update the education array to include details for expanded view
const education = [
  {
    date: "2022 - Present",
    location: "Waterloo, ON",
    company: "Wilfrid Laurier University",
    title: "Honours Bachelor of Science: Computer Science and Physics",
    skills: ["Computer Science", "Physics", "Mathematics", "Data Structures", "Algorithms", "Machine Learning", "Statistics"],
    description:
      "Pursuing a comprehensive education combining computer science fundamentals with advanced physics concepts, preparing for a career in data science and quantitative analysis.",
    details: [
      "Double majoring in Computer Science and Physics for a well-rounded technical foundation",
      "Studying advanced algorithms, data structures, and machine learning concepts",
      "Learning statistical methods and mathematical modeling through physics coursework",
      "Developing strong analytical and problem-solving skills through interdisciplinary studies",
      "Gaining hands-on experience with programming languages and scientific computing tools",
    ],
  },
  {
    date: "2018 - 2022",
    location: "Mississauga, ON",
    company: "Port Credit Secondary School",
    title: "Ontario Secondary School Diploma (OSSD)",
    skills: [
      "STEM Enriched Program",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "Leadership",
      "Extracurricular Activities"
    ],
    description:
      "Completed the Ontario Secondary School Diploma with a focus on STEM, participating in enriched science and mathematics courses and a variety of extracurricular activities.",
    details: [
      "Graduated with honours from the STEM Enriched Program",
      "Participated in science fairs, math contests, and coding clubs",
      "Developed foundational skills in mathematics, physics, and computer science",
      "Engaged in leadership roles and team-based extracurriculars",
      "Built a strong academic base for university studies"
    ],
  },
]

export function JourneySection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience")

  return (
    <div className="px-4">
    <div className="max-w-[1180px] mx-auto">
      <SectionHeading title="My Journey" />

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-16">
        <motion.button
          onClick={() => setActiveTab("experience")}
          className={`w-[150px] py-3 px-6 rounded-[10px] transition-all duration-300 ${
            activeTab === "experience"
              ? "bg-[rgba(190,141,45,0.9)] text-light"
              : "border border-[rgba(217,217,217,0.1)] text-[rgba(217,217,217,0.5)]"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience
        </motion.button>
        <motion.button
          onClick={() => setActiveTab("education")}
          className={`w-[150px] py-3 px-6 rounded-[10px] transition-all duration-300 ${
            activeTab === "education"
              ? "bg-[rgba(190,141,45,0.9)] text-light"
              : "border border-[rgba(217,217,217,0.1)] text-[rgba(217,217,217,0.5)]"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Education
        </motion.button>
      </div>

        {/* Timeline with vertical line and dots */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[rgba(43,168,160,0.2)] transform -translate-x-1/2 z-0"></div>

            {/* Timeline Items */}
            <div className="relative z-10">
              {(activeTab === "experience" ? experiences : education).map((item, index) => (
                <motion.div 
                  key={index} 
                  className="mb-16 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08, // reduced delay for sooner appearance
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    transform: 'translateY(0)',
                  }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-1/2 top-[80px] w-[40px] h-[40px] max-[1200px]:hidden bg-[#2BA8A0] bg-opacity-20 rounded-full transform -translate-x-1/2 lg:flex items-center justify-center z-20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (index * 0.08) + 0.15, // reduced delay for sooner appearance
                      ease: "backOut"
                    }}
                    style={{ 
                      left: '48.5%',
                      transform: 'translateX(-50%)',
                      marginLeft: '-1px' // Adjust for the 2px line width to center perfectly
                    }}
                  >
                    <motion.div 
                      className="w-[20px] h-[20px] bg-[#2BA8A0] rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (index * 0.08) + 0.22, // reduced delay for sooner appearance
                        ease: "backOut"
                      }}
                    ></motion.div>
                  </motion.div>

                  <TimelineItem {...item} position={index % 2 === 0 ? "left" : "right"} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

