


"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../components/ui/Button.js";
import Section from "./Section.js";
import { ArrowDown, Code, Github, Figma, Database, Globe } from "lucide-react";
import curve from "../curve.png";
import codee from "./codee.jpg";

function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Ultimate Web Developer Resources";
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const floatingIcons = [
    { icon: <Github />, color: "text-gray-200" },
    { icon: <Code />, color: "text-blue-400" },
   
    
    { icon: <Globe />, color: "text-purple-400" },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black text-white"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),rgba(0,0,0,0)_50%)]" />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className={`absolute ${item.color}`}
            style={{
              left: `${15 + (i % 5) * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: `${3 + (i % 2)}rem`,
              height: `${3 + (i % 2)}rem`,
            }}
          >
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {item.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Section Content */}
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
              {text}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              A curated collection of the best tools, libraries, frameworks, and
              resources for modern web developers.
            </p>

            
          </div>

          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ y }}
          >
            <img
              src={codee}
              alt="Code preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 flex items-center px-4 z-20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </motion.section>
  );
}

export default HeroSection;
