"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Users, Lightbulb, BookOpen, Heart } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Pushing boundaries with creative tech solutions",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accessibility",
      description: "Making technology available to everyone",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "Honest, transparent, and ethical practices",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Learning",
      description: "Continuous growth and knowledge sharing",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "Building connections and supporting each other",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900" variants={itemVariants}>
            About Projectory
          </motion.h2>

          <motion.p className="mt-4 text-lg text-gray-600" variants={itemVariants}>
            Enabling everyday innovators—from students to small business owners—to turn their ideas into working tech
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
<div className="max-w-3xl mx-auto px-8 py-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <motion.div variants={itemVariants}>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
    <p className="text-gray-600">
      We empower everyday innovators—from students to small business owners—to turn their ideas into working
      tech solutions. By providing accessible development services, we bridge the gap between vision and
      execution.
    </p>
  </motion.div>
</div>



<div className="max-w-3xl mx-auto px-8 py-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To democratize access to quality development, ML, and AI services for underrepresented creators and
              vendors. We believe everyone deserves the opportunity to bring their tech ideas to life, regardless of
              their technical background.
            </p>
          </motion.div>
</div>
<motion.div 
  variants={itemVariants} 
  className="md:col-span-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
>
  <div className="container mx-auto">
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
    <p className="text-gray-600">
      Born from student struggles and vendor tech gaps, Projectory became a bridge between ideas and execution.
      We recognized that many brilliant ideas never see the light of day due to technical barriers. Our
      founders, once students themselves, created Projectory to solve this problem and help turn concepts into
      reality.
    </p>
  </div>
</motion.div>

        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" variants={itemVariants}>
            Our Core Values
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center text-center">
                  {value.icon}
                  <h4 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h4>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
