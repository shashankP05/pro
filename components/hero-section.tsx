// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"

// export function HeroSection() {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-fade-in")
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
//     elements?.forEach((el) => observer.observe(el))

//     return () => {
//       elements?.forEach((el) => observer.unobserve(el))
//     }
//   }, [])

//   return (
//     <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden" ref={containerRef}>
//       {/* Background Elements */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300 blur-3xl" />
//         <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-teal-300 blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="text-center lg:text-left">
//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 animate-on-scroll"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Build. Innovate. Empower.
//               <span className="block text-primary mt-2">Your Idea Starts Here.</span>
//             </motion.h1>

//             <motion.p
//               className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 animate-on-scroll"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Supporting tech projects, small business tools, and real-world student ideas. We turn your vision into
//               reality with expert development and innovative solutions.
//             </motion.p>

//             <motion.div
//               className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-on-scroll"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <Button size="lg" asChild>
//                 <Link href="#contact">Start Your Project Today</Link>
//               </Button>
//               <Button variant="outline" size="lg" asChild>
//                 <Link href="#services">Explore Services</Link>
//               </Button>
//             </motion.div>
//           </div>

//           <motion.div
//             className="relative h-[400px] lg:h-[500px] animate-on-scroll"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative w-full h-full">
//                 {/* Animated elements showing idea-to-prototype transformations */}
//                 <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//                   <div className="relative w-[80%] h-[80%] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
//                     <Image
//                       src="/placeholder.svg?height=600&width=800"
//                       alt="Mobile App Development"
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
//                       <h3 className="text-white text-xl font-bold">Mobile App Development</h3>
//                       <p className="text-white/80 text-sm mt-2">From concept to app store</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentService, setCurrentService] = useState(0)

  const services = [
    {
      title: "Flutter App Development",
      subtitle: "From concept to app store",
      image: "/images/flutter.png",
    },
    {
      title: "Python Solutions",
      subtitle: "Efficient scripts, automation, and backend tools",
      image: "/images/pythonsolutions.jpg",
    },
    {
      title: "Data Science & ML",
      subtitle: "Insights and automation from your data",
      image: "/images/datascience.jpg",
    },
    {
      title: "Web Development",
      subtitle: "Modern, fast, responsive websites",
      image: "/images/webd.jpg",
    },
    {
      title: "AI Agent Building",
      subtitle: "Smart autonomous agents for your workflows",
      image: "/images/ai agent.jpg",
    },
    {
      title: "API Development",
      subtitle: "Robust and scalable APIs for your apps",
      image: "/images/apidev.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-teal-300 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Where Your Next Big Idea Finds Its
              <span className="block text-primary mt-2"> Blueprint.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We build innovative tech solutions, support small business tools, and collaborate with vendors to turn ideas into reality. Whether you're starting up or scaling up, our expert team is here to help.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="#contact">Start Your Project Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Rotating Image Card */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] animate-on-scroll"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <motion.div
                    key={currentService}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-[80%] h-[80%] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105"
                  >
                    <Image
                      src={services[currentService].image}
                      alt={services[currentService].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">{services[currentService].title}</h3>
                      <p className="text-white/80 text-sm mt-2">{services[currentService].subtitle}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
