"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    date: string;
    image?: string;
    content: {
      introduction: string;
      keyFeatures: {
        title: string;
        description: string;
      }[];
    };
  } | null;
}

export function PostModal({ isOpen, onClose, post }: PostModalProps) {
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
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && post && (
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
            className="w-full max-w-4xl h-[90vh] rounded-[30px] overflow-hidden glass-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.1)]">
              <motion.button
                onClick={onClose}
                className="flex items-center gap-3 text-[rgba(217,217,217,0.8)] hover:text-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back to Posts</span>
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
            <div className="flex flex-col h-[calc(90vh-80px)]">
              <div className="flex-1 p-8 overflow-y-auto">
                {/* Post Header */}
                <div className="mb-6">
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold text-light mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {post.title}
                  </motion.h1>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-[rgba(217,217,217,0.8)] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="px-3 py-1 rounded-full bg-[rgba(43,168,160,0.2)] text-teal text-sm font-medium">
                      {post.date}
                    </span>
                  </motion.div>
                </div>

                {/* Post Content */}
                <div className="space-y-6">
                  {/* Introduction */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-semibold text-light mb-4">Introduction</h3>
                    <p className="text-lg text-[rgba(217,217,217,0.8)] leading-relaxed">
                      {post.content.introduction}
                    </p>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold text-light mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {post.content.keyFeatures.map((feature, index) => (
                        <motion.div 
                          key={index}
                          className="p-4 rounded-[15px] border border-[rgba(255,255,255,0.1)]"
                          style={{
                            background: "rgba(43, 43, 53, 0.3)",
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <h4 className="text-lg font-semibold text-light mb-2">
                            {index + 1}. {feature.title}
                          </h4>
                          <p className="text-[rgba(217,217,217,0.8)]">{feature.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
