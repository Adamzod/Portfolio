"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./animations/section-heading";
import { FadeIn } from "./animations/fade-in";
import { PostModal } from "./post-modal";
import { useState } from "react";

interface Post {
  title: string;
  summary: string;
  date: string;
  image?: string;
  content: {
    introduction: string;
    keyFeatures: {
      title: string;
      description: string;
    }[];
  };
}

const recentPosts: Post[] = [
  {
    title: "My Portfolio is Live: Here's What I Learned",
    summary:
      "After weeks of hard work, I'm excited to finally share my developer portfolio with the world! My goal was to create a clean, functional, and professional site...",
    date: "September 27, 2024",
    image: "/placeholder.svg?height=400&width=800",
    content: {
      introduction:
        "After weeks of hard work, I'm excited to finally share my developer portfolio with the world! My goal was to create a clean, functional, and professional site that not only highlights my skills and projects but also offers a simple, user-friendly experience. In this post, I'll walk you through the main features of the site and share a few key lessons I learned along the way.",
      keyFeatures: [
        {
          title: "Minimalistic UI with Shadcn UI Library",
          description:
            "I used Shadcn UI to build clean, minimal UI components that keep the design simple and to the point, without distracting from the content.",
        },
        {
          title: "Responsive Design",
          description:
            "The portfolio is fully responsive and looks great on all devices, from mobile phones to large desktop screens.",
        },
        {
          title: "Dark Mode Support",
          description:
            "Implemented a sleek dark mode that's easy on the eyes and perfect for late-night browsing.",
        },
      ],
    },
  },
  {
    title: "Getting Started with Next.js and TypeScript",
    summary:
      "A comprehensive guide to setting up a new project with Next.js and TypeScript. Learn about the benefits of static typing and how to leverage Next.js features for better performance.",
    date: "February 20, 2025",
    image: "/placeholder.svg?height=400&width=800",
    content: {
      introduction:
        "Next.js and TypeScript are powerful tools that, when combined, can help you build robust and type-safe web applications. In this guide, we'll explore how to set up a new project and make the most of these technologies.",
      keyFeatures: [
        {
          title: "Type Safety",
          description:
            "TypeScript provides compile-time type checking, helping catch errors before they reach production.",
        },
        {
          title: "Next.js Features",
          description:
            "Explore key Next.js features like server-side rendering, static site generation, and API routes.",
        },
        {
          title: "Best Practices",
          description:
            "Learn about project structure, code organization, and performance optimization techniques.",
        },
      ],
    },
  },
];

export function RecentPostsSection() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="px-4">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeading title="Recent Posts" />

        {/* Posts */}
        <div className="space-y-8 mb-12">
          {recentPosts.map((post, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                className="w-full rounded-[30px] p-8 flex flex-col md:flex-row justify-between glass-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(post)}
              >
                <div className="md:w-3/4 mb-4 md:mb-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl font-semibold text-light mb-3"
                  >
                    {post.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-base md:text-lg text-[rgba(217,217,217,0.8)] line-clamp-2"
                  >
                    {post.summary}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="md:w-1/4 flex md:justify-end items-start"
                >
                  <span className="text-base md:text-lg text-[rgba(198,134,215,0.9)]">
                    {post.date}
                  </span>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Post Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={closeModal}
          post={selectedPost}
        />
       
      </div>
    </div>
  );
}
