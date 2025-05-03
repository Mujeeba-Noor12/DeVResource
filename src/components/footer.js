import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="mt-10  border-gray-800 pt-2 pb-6 px-4 md:px-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer Text */}
        <div className="text-sm text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} DevResources. All rights reserved.</p>
        </div>
        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>
            Made by <span className="text-pink-400 font-semibold">Mujeeba Noor</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
