
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Cloud, Server, Globe, Box, Layers, Upload, Cpu } from "lucide-react"

export function DeploymentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false})

  const deploymentTools = [
    {
      name: "Vercel",
      description: "Platform for frontend frameworks and static sites",
      link: "https://vercel.com/",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Netlify",
      description: "Web hosting and automation platform",
      link: "https://www.netlify.com/",
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "AWS Amplify",
      description: "Deployment and hosting for web applications",
      link: "https://aws.amazon.com/amplify/",
      icon: <Server className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Heroku",
      description: "Cloud platform for deploying and managing applications",
      link: "https://www.heroku.com/",
      icon: <Box className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "DigitalOcean App Platform",
      description: "PaaS for building, deploying, and scaling apps",
      link: "https://www.digitalocean.com/products/app-platform/",
      icon: <Layers className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Firebase Hosting",
      description: "Fast and secure web hosting",
      link: "https://firebase.google.com/products/hosting",
      icon: <Upload className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "GitHub Pages",
      description: "Hosting for static websites directly from GitHub",
      link: "https://pages.github.com/",
      icon: <Globe className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Cloudflare Pages",
      description: "JAMstack platform for frontend developers",
      link: "https://pages.cloudflare.com/",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),rgba(0,0,0,0)_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.1),rgba(0,0,0,0)_50%)]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Deployment & Hosting Platforms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Deploy your applications quickly and efficiently with these powerful hosting solutions.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {deploymentTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              
             
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full flex flex-col hover:border-gray-700 transition-colors duration-300 overflow-hidden group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 w-fit">
                  {tool.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{tool.name}</h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2"
  >
                <div className="mt-auto flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm">Visit website</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                </a>


                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

