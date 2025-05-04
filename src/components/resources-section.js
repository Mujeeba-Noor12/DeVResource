
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, BookOpen, FileText, Video, Code, Download } from "lucide-react"

export function ResourcesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const resources = [
    {
      title: "MDN Web Docs",
      description: "Comprehensive documentation for web technologies",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      link: "https://developer.mozilla.org" // Add the link here
    },
    {
      title: "CSS-Tricks",
      description: "Tips, tricks, and techniques on using CSS",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      link: "https://css-tricks.com"
    },
    {
      title: "Smashing Magazine",
      description: "Professional resources for web developers and designers",
      icon: <FileText className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      link: "https://www.smashingmagazine.com"
    },
    {
      title: "Web.dev",
      description: "Guidance to build modern web experiences by Google",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      link: "https://web.dev"
    },
    {
      title: "Frontend Masters",
      description: "Advanced courses on frontend development",
      icon: <Video className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      link: "https://frontendmasters.com"
    },
    {
      title: "Can I Use",
      description: "Browser support tables for modern web technologies",
      icon: <Code className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      link: "https://caniuse.com"
    },
    {
      title: "GitHub",
      description: "Host and review code, manage projects, and build software",
      icon: <Code className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
      link: "https://github.com"
    },
    {
      title: "CodePen",
      description: "Social development environment for front-end designers and developers",
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      link: "https://codepen.io"
    },
    {
      title: "Dribbble",
      description: "Discover and connect with designers worldwide",
      icon: <Download className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      link: "https://dribbble.com"
    },
    {
      title: "Stack Overflow",
      description: "Public platform to ask and answer programming questions",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      link: "https://stackoverflow.com"
    },
    {
      title: "Dev.to",
      description: "Community of software developers who write articles",
      icon: <FileText className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      link: "https://dev.to"
    },
    {
      title: "Hashnode",
      description: "Blogging platform for developers",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      link: "https://hashnode.com"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section className="py-24 relative overflow-hidden bg-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),rgba(0,0,0,0)_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.1),rgba(0,0,0,0)_50%)]"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222222_1px,transparent_1px),linear-gradient(to_bottom,#222222_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Valuable Web Development Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore these essential resources to enhance your web development skills and stay updated with the latest
            trends.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 w-fit">
                  {resource.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a
    href={resource.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 mb-2"
  >
                <div className="mt-auto flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm">Visit resource</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
</a>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
