// "use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Code } from "lucide-react";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const navLinks = [
    { name: "Tools", href: "#tools" },
    { name: "API Tools", href: "#api-tools" },
    { name: "Deployment", href: "#deployment" },
    { name: "Resources", href: "#resources" },
    { name: "Learning", href: "#learning" },
    { name: "Community", href: "#community" },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
  <motion.div
    className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center"
    whileHover={{ scale: 1.05, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Code className="text-white" />
  </motion.div>

  <motion.span
    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
  >
    DevResources
  </motion.span>
</div>


          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.div>
              ))}
            </nav>
            <motion.div
              variants={linkVariants}
              custom={navLinks.length}
              initial="hidden"
              animate="visible"
            >
              
            </motion.div>
          </div>

          {/* Mobile Hamburger Icon - Only for md and below */}
          <motion.button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
        </div>

      {/* Mobile Menu (md:hidden) */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 md:hidden pt-10 px-6"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          {/* Close Icon at Top Right */}
          <div className="flex justify-end">
            <button
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col h-full justify-center items-center space-y-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-2xl text-white hover:text-pink-400"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
           
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
