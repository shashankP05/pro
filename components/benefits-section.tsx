"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Clock, Users } from "lucide-react"
import Image from "next/image"

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "90% Faster MVP Delivery",
      description: "Get your minimum viable product in days or weeks, not months.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "100+ Student Ideas Launched",
      description: "Helping students turn academic concepts into real-world applications.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "70% Increase in Vendor Efficiency",
      description: "Our solutions help small businesses operate more effectively.",
    },
  ]

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Projectory</h2>
          <p className="mt-4 text-lg text-gray-600">
            We deliver tangible results that help students, entrepreneurs, and small businesses succeed.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
  className="mt-20 max-w-3xl mx-auto text-center"
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Making a Difference</h3>
  <p className="mt-4 text-lg text-gray-600">
    Our solutions create real impact for youth and local businesses. We believe in technology that serves
    people, not the other way around.
  </p>

  <ul className="mt-6 space-y-4 text-left">
    {[
      "Empowering students to build their portfolios",
      "Helping small vendors compete in the digital marketplace",
      "Creating accessible technology for underserved communities",
      "Building sustainable tech solutions with long-term impact",
    ].map((text, index) => (
      <li key={index} className="flex items-start">
        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
          <span className="text-primary font-medium text-sm">✓</span>
        </div>
        <span className="text-gray-700">{text}</span>
      </li>
    ))}
  </ul>
</motion.div>

      </div>
    </section>
  )
}
