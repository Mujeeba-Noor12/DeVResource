// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { ArrowUpRight, BookOpen, Video, Code, Award } from "lucide-react"

// export function LearningSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: false, amount: 0.2 })

//   const learningResources = [
//     {
//       title: "freeCodeCamp",
//       description: "Learn to code for free with interactive tutorials",
//       link: "https://www.freecodecamp.org/",
//       category: "Interactive",
//       icon: <Code className="w-5 h-5" />,
//     },
//     {
//       title: "Codecademy",
//       description: "Interactive learning platform with hands-on coding exercises",
//       link: "https://www.codecademy.com/",
//       category: "Interactive",
//       icon: <Code className="w-5 h-5" />,
//     },
//     {
//       title: "The Odin Project",
//       description: "Full stack curriculum completely free and open source",
//       link: "https://www.theodinproject.com/",
//       category: "Curriculum",
//       icon: <BookOpen className="w-5 h-5" />,
//     },
//     {
//       title: "Udemy",
//       description: "Online courses taught by expert instructors",
//       link: "https://www.udemy.com/",
//       category: "Courses",
//       icon: <Video className="w-5 h-5" />,
//     },
//     {
//       title: "Coursera",
//       description: "Build skills with courses from top universities",
//       link: "https://www.coursera.org/",
//       category: "Courses",
//       icon: <Award className="w-5 h-5" />,
//     },
//     {
//       title: "YouTube Tutorials",
//       description: "Free video tutorials on web development",
//       link: "https://www.youtube.com/",
//       category: "Videos",
//       icon: <Video className="w-5 h-5" />,
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   }

//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.1),rgba(0,0,0,0)_50%)]"></div>

//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
//           >
//             Learning Resources
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl text-gray-300 max-w-3xl mx-auto"
//           >
//             Expand your knowledge with these top-rated learning platforms and resources.
//           </motion.p>
//         </div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {learningResources.map((resource, index) => (
//             <motion.div
//               key={resource.title}
//               variants={itemVariants}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
//               <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden h-full flex flex-col hover:border-gray-700 transition-colors duration-300 group">
//                 <div className="relative h-48 overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
//                   {/* Replace Image component with a placeholder color */}
//                   <div className="w-full h-full bg-gray-600"></div>
//                   <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-medium bg-gray-800/80 text-gray-300 backdrop-blur-sm flex items-center gap-1.5">
//                     {resource.icon}
//                     {resource.category}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
//                   <p className="text-gray-400 mb-4">{resource.description}</p>
//                   <div className="mt-auto flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
//                     <span className="text-sm">Start learning</span>
//                     <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, BookOpen, Video, Code, Award } from "lucide-react"

export function LearningSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const learningResources = [
    {
      title: "freeCodeCamp",
      description: "Learn to code for free with interactive tutorials",
      link: "https://www.freecodecamp.org/",
      category: "Interactive",
      icon: <Code className="w-5 h-5" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWxdiT0sLHH7AfQbXEIIGd2rrQ9WB6KlcqQ&s"
    },
    {
      title: "Codecademy",
      description: "Interactive learning platform with hands-on coding exercises",
      link: "https://www.codecademy.com/",
      category: "Interactive",
      icon: <Code className="w-5 h-5" />,
      image: "https://sm.pcmag.com/pcmag_uk/review/c/codecademy/codecademy_rps1.png"
    },
    {
      title: "The Odin Project",
      description: "Full stack curriculum completely free and open source",
      link: "https://www.theodinproject.com/",
      category: "Curriculum",
      icon: <BookOpen className="w-5 h-5" />,
      image: "https://miro.medium.com/v2/resize:fit:1200/1*chhKo9KEel7n7hi0O_cEPA.png"
    },
    {
      title: "Udemy",
      description: "Online courses taught by expert instructors",
      link: "https://www.udemy.com/",
      category: "Courses",
      icon: <Video className="w-5 h-5" />,
      image: "https://about.udemy.com/wp-content/uploads/2021/12/udemy-logo-share.png"
    },
    {
      title: "Coursera",
      description: "Build skills with courses from top universities",
      link: "https://www.coursera.org/",
      category: "Courses",
      icon: <Award className="w-5 h-5" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQom_RDSo7huDq0YdKnoGPpc-gBQ8ez7tI9Q&s"
    },
    {
      title: "YouTube Tutorials",
      description: "Free video tutorials on web development",
      link: "https://www.youtube.com/",
      category: "Videos",
      icon: <Video className="w-5 h-5" />,
      image: "https://i.guim.co.uk/img/media/afc9d908f91a89fbb7a4d65d7c60d17a92cca5bc/0_0_3500_2099/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=3594e72c77483a4960b45ef2247645dd"
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.1),rgba(0,0,0,0)_50%)]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Learning Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Expand your knowledge with these top-rated learning platforms and resources.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {learningResources.map((resource, index) => (
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
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden h-full flex flex-col hover:border-gray-700 transition-colors duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                  {/* Image */}
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-medium bg-gray-800/80 text-gray-300 backdrop-blur-sm flex items-center gap-1.5">
                    {resource.icon}
                    {resource.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <a
    href={resource.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 mb-2"
  >
                  <div className="mt-auto flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm">Start learning</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
