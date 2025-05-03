"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { ExternalLink } from "lucide-react"
import { SiVuedotjs, SiNodedotjs  } from 'react-icons/si';

export function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1})

  const categories = [
    {
      name: "Frontend",
      color: "from-blue-500 to-cyan-500",
      tools: [
        {
          name: "React",
          description: "A JavaScript library for building user interfaces",
          link: "https://reactjs.org/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg", // React icon
        },
        {
          name: "Vue.js",
          description: "Progressive JavaScript framework for building UIs",
          link: "https://vuejs.org/",
          icon: <SiVuedotjs className="w-6 h-6" />  
 
        },
        
        {
          name: "Angular",
          description: "Platform for building mobile & desktop web applications",
          link: "https://angular.io/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/angular.svg", // Angular icon
        },
        {
          name: "Next.js",
          description: "React framework for production-grade applications",
          link: "https://nextjs.org/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nextdotjs.svg", // Next.js icon
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development",
          link: "https://tailwindcss.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg", // Tailwind CSS icon
        },
        {
          name: "Framer Motion",
          description: "Production-ready motion library for React",
          link: "https://www.framer.com/motion/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/framer.svg", // Framer Motion icon
        },
      ],
    },
    //
    {
      name: "Fronted Styling",
      color: "from-sky-500 to-indigo-500",
      tools: [
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development",
          link: "https://tailwindcss.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg",
        },
        {
          name: "Framer Motion",
          description: "Production-ready motion library for React",
          link: "https://www.framer.com/motion/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/framer.svg",
        },
        {
          name: "Bootstrap",
          description: "Popular framework for building responsive, mobile-first sites",
          link: "https://getbootstrap.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg",
        },
        {
          name: "Material UI",
          description: "React components for faster and easier web development",
          link: "https://mui.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/materialui.svg",
        },
        {
          name: "Styled Components",
          description: "Visual primitives for styling React components",
          link: "https://styled-components.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/styledcomponents.svg",
        },
        {
          name: "Sass",
          description: "CSS extension language for more advanced styling features",
          link: "https://sass-lang.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sass.svg",
        },
      ],
    },
    
    {
      name: "Backend",
      color: "from-green-500 to-emerald-500",
      tools: [
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 engine",
          link: "https://nodejs.org/",
          icon: <SiNodedotjs className="w-6 h-6" />,
        },
        {
          name: "Express",
          description: "Fast, unopinionated, minimalist web framework for Node.js",
          link: "https://expressjs.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg", // Express icon
        },
        {
          name: "Django",
          description: "High-level Python web framework",
          link: "https://www.djangoproject.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/django.svg", // Django icon
        },
        {
          name: "Ruby on Rails",
          description: "Server-side web application framework written in Ruby",
          link: "https://rubyonrails.org/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/ruby.svg", // Ruby icon
        },
        {
          name: "Laravel",
          description: "PHP web application framework with expressive syntax",
          link: "https://laravel.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/laravel.svg", // Laravel icon
        },
        {
          name: "Flask",
          description: "Lightweight WSGI web application framework in Python",
          link: "https://flask.palletsprojects.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/flask.svg", // Flask icon
        },
      ],
    },
    {
      name: "Design",
      color: "from-pink-500 to-rose-500",
      tools: [
        {
          name: "Figma",
          description: "Collaborative interface design tool",
          link: "https://www.figma.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg", // Figma icon
        },
        {
          name: "Adobe XD",
          description: "Vector-based user experience design tool",
          link: "https://www.adobe.com/products/xd.html",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/adobexd.svg", // Adobe XD icon
        },
        {
          name: "Sketch",
          description: "Digital design app for Mac",
          link: "https://www.sketch.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sketch.svg", // Sketch icon
        },
        {
          name: "Canva",
          description: "Graphic design platform for creating visual content",
          link: "https://www.canva.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/canva.svg", // Canva icon
        },
        {
          name: "Dribbble",
          description: "Community of designers sharing their work",
          link: "https://dribbble.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/dribbble.svg", // Dribbble icon
        },
        {
          name: "Behance",
          description: "Platform for showcasing creative work",
          link: "https://www.behance.net/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/behance.svg", // Behance icon
        },
      ],
    },
    {
      name: "Database",
      color: "from-purple-500 to-violet-500",
      tools: [
        {
          name: "MongoDB",
          description: "Document-oriented NoSQL database",
          link: "https://www.mongodb.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg", // MongoDB icon
        },
        {
          name: "PostgreSQL",
          description: "Powerful, open source object-relational database",
          link: "https://www.postgresql.org/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postgresql.svg", // PostgreSQL icon
        },
        {
          name: "MySQL",
          description: "Open-source relational database management system",
          link: "https://www.mysql.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg", // MySQL icon
        },
        {
          name: "Firebase",
          description: "Platform for building web and mobile applications",
          link: "https://firebase.google.com/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/firebase.svg", // Firebase icon
        },
        {
          name: "Redis",
          description: "In-memory data structure store",
          link: "https://redis.io/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/redis.svg", // Redis icon
        },
        {
          name: "Supabase",
          description: "Open source Firebase alternative",
          link: "https://supabase.io/",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/supabase.svg", // Supabase icon
        },
      ],
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
    <section className="py-24 relative overflow-hidden">
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),rgba(0,0,0,0)_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),rgba(0,0,0,0)_50%)]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Essential Web Development Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the most popular and powerful tools that modern web developers use every day.
          </motion.p>
        </div>

        <div ref={ref} className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div key={category.name} className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`text-2xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
              >
                {category.name}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.tools.map((tool, index) => (
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
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        ></div>
                      

                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                            {/* <img src={tool.icon || "/placeholder.svg"} alt={tool.name} className="w-6 h-6" /> */}
                            
                            {typeof tool.icon === 'string' ? (
            <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
          ) : (
            tool.icon
          )} 

                          </div>
                          
                          <h4 className="text-xl font-bold text-white">{tool.name}</h4>
                         
                        </div>

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
                        </div></a>
                        
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
