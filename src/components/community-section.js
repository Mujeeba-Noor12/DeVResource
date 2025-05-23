"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import Link from "next/link"
import { ArrowUpRight, Users, MessageSquare, Globe, Github } from "lucide-react"

export function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const communities = [
    {
      name: "Stack Overflow",
      description: "Public platform to ask and answer programming questions",
      link: "https://stackoverflow.com/",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      members: "15M+",
    },
    {
      name: "GitHub",
      description: "Host and review code, manage projects, and build software",
      link: "https://github.com/",
      icon: <Github className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
      members: "73M+",
    },
    {
      name: "Dev.to",
      description: "Community of software developers who write articles",
      link: "https://dev.to/",
      icon: <Globe className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      members: "800K+",
    },
    {
      name: "Reddit r/webdev",
      description: "Subreddit for web developers",
      link: "https://www.reddit.com/r/webdev/",
      icon: <Users className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      members: "1M+",
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
    <section className="py-24 relative overflow-hidden bg-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),rgba(0,0,0,0)_50%)]"></div>

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
            Join Developer Communities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Connect with other developers, share knowledge, and grow your network.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              {/* <Link href={community.link} target="_blank" rel="noopener noreferrer"> */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full flex flex-col hover:border-gray-700 transition-colors duration-300 overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${community.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 w-fit">
                    {community.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">{community.name}</h3>
                  <p className="text-gray-400 mb-2">{community.description}</p>
                  <p className="text-sm text-purple-400 mb-4">{community.members} members</p>
                  <a
    href={community.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 mb-2"
  >
                  <div className="mt-auto flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm">Join community</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
