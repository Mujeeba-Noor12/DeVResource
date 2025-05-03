// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import  Button  from '../components/ui/Button.js'; // Inside HeroSection.js and navbar.js
// import Section from './Section.js'
// import { ArrowDown, Code, Github, Figma, Database, Globe } from "lucide-react";
// import curve from '../curve.png'
// import codee from './codee.jpg'


// function HeroSection() {
//   const parallaxRef = useRef(null);
//   const [text, setText] = useState("");
//   const fullText = "Ultimate Web Developer Resources";
//   const [index, setIndex] = useState(0);
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   useEffect(() => {
//     if (index < fullText.length) {
//       const timeout = setTimeout(() => {
//         setText((prev) => prev + fullText[index]);
//         setIndex(index + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [index, fullText]);

//   const iconVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2 + 1,
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     }),
//   };

//   const floatingIcons = [
//     { icon: <Github />, color: "text-gray-200" },
//     { icon: <Code />, color: "text-blue-400" },
//     { icon: <Figma />, color: "text-pink-400" },
//     { icon: <Database />, color: "text-green-400" },
//     { icon: <Globe />, color: "text-purple-400" },
//   ];

//   return (
//     <motion.section
//       ref={ref}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black text-white"
//       style={{ opacity }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),rgba(0,0,0,0)_50%)]" />

//       {/* Floating Icons */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {floatingIcons.map((item, i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             variants={iconVariants}
//             initial="hidden"
//             animate="visible"
//             className={`absolute ${item.color}`}
//             style={{
//               left: `${15 + (i % 5) * 15}%`,
//               top: `${20 + (i % 3) * 20}%`,
//               width: `${3 + (i % 2)}rem`,
//               height: `${3 + (i % 2)}rem`,
//             }}
//           >
//             <motion.div
//               animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
//               transition={{
//                 duration: 5 + i,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//                 delay: i * 0.5,
//               }}
//             >
//               {item.icon}
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Content */}
//       {/* <div className="container mx-auto px-4 z-10">
//         <div className="flex flex-col items-center text-center max-w-5xl mx-auto"> */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mb-6"
//           >
//             <span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800/50 border border-gray-700 text-gray-300 inline-block backdrop-blur-sm">
//               All-in-One Collection
//             </span>
//           </motion.div>

//           <motion.h1
//             className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {text}
//             <span className="animate-pulse">|</span>
//           </motion.h1>

//           <motion.p
//             className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             A curated collection of the best tools, libraries, frameworks, and
//             resources for modern web developers.
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg px-8 py-6 text-lg transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center gap-2 group">
//               Explore Resources
//               <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
//             </Button>
//             <Button
//               variant="outline"
//               className="border-gray-700 text-white hover:bg-gray-800 rounded-lg px-8 py-6 text-lg backdrop-blur-sm"
//             >
//               Bookmark Collection
//             </Button>
//           </motion.div>

//           <motion.div
//             className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             style={{ y }}
//           >
            
             
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10 pointer-events-none"></div>
//             <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 flex items-center px-4 z-20">
//               <div className="flex space-x-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                 <div className="w-3 h-3 rounded-full bg-green-500" />
//               </div>
//             </div>
//           </motion.div> */}
//           {/* <div className="container relative" ref={parallaxRef}>
//                     <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
//                       <h1 className="h1 mb-6">
//                         Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
//                         <span className="inline-block relative">
//                           Brainwave{" "}
//                           <img
//                             src={curve}
//                             className="absolute top-full left-0 w-full xl:-mt-2"
//                             width={624}
//                             height={28}
//                             alt="Curve"
//                           />
//                         </span>
//                       </h1>
//                       <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
//                         Unleash the power of AI within Brainwave. Upgrade your productivity
//                         with Brainwave, the open AI chat app.
//                       </p>
//                       <Button href="/pricing" white>
//                         Get started
//                       </Button>
//                     </div>
//                     </div>
//         </div>
//       </div> */}
//        <Section
//             className="pt-[12rem] -mt-[5.25rem]"
//             crosses
//             crossesOffset="lg:translate-y-[5.25rem]"
//             customPaddings
//             id="hero"
//           >
//             <div className="container relative" ref={parallaxRef}>
//               <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
//                 <h1 className="h1 mb-6">
//                   Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
//                   <span className="inline-block relative">
//                     Brainwave{" "}
//                     <img
//                       src={curve}
//                       className="absolute top-full left-0 w-full xl:-mt-2"
//                       width={624}
//                       height={28}
//                       alt="Curve"
//                     />
//                   </span>
//                 </h1>
//                 <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
//                   Unleash the power of AI within Brainwave. Upgrade your productivity
//                   with Brainwave, the open AI chat app.
//                 </p>
//                 <Button href="/pricing" white>
//                   Get started
//                 </Button>
//               </div>
//               <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//                 <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
//                   <div className="relative bg-n-8 rounded-[1rem]">
//                     <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
      
//                     <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
//                       <img
//                         src={codee}
//                         className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
//                         width={1024}
//                         height={490}
//                         alt="AI"
//                       />
      
//                       {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
//        */}
//                       {/* <ScrollParallax isAbsolutelyPositioned>
//                         <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
//                           {heroIcons.map((icon, index) => (
//                             <li className="p-5" key={index}>
//                               <img src={icon} width={24} height={25} alt={icon} />
//                             </li>
//                           ))}
//                         </ul>
//                       </ScrollParallax> */}
      
//                       {/* <ScrollParallax isAbsolutelyPositioned>
//                         <Notification
//                           className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
//                           title="Code generation"
//                         />
//                       </ScrollParallax> */}
//                     </div>
//                   </div>
      
//                   {/* <Gradient /> */}
//                 </div>
//                 <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
//                   <img
//                     src={curve}
//                     className="w-full"
//                     width={1440}
//                     height={1800}
//                     alt="hero"
//                   />
//                 </div>
      
//                 {/* <BackgroundCircles /> */}
//               </div>
// {/*       
//               <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
//             </div>
      
//             {/* <BottomLine /> */}
//           </Section>
//     </motion.section>
//   );
// }
// export default HeroSection


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
