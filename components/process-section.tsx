"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, CheckCircle, FileText, Code, Package } from "lucide-react"

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Idea Submission",
      description:
        "Share your vision with us through our simple submission form. No technical jargon required—just tell us what you want to achieve.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Feasibility Check",
      description:
        "Our experts review your idea, assess technical requirements, and determine the best approach to bring it to life.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Quotation & Plan",
      description:
        "Receive a detailed proposal with timeline, deliverables, and pricing options tailored to your specific needs.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Agile Development",
      description:
        "We build your solution with regular updates and check-ins, ensuring you're involved throughout the development process.",
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: "Delivery & Iteration",
      description:
        "Get your completed project with documentation and support. We'll help with implementation and future improvements.",
    },
  ]

  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Process</h2>
          <p className="mt-4 text-lg text-gray-600">
            We've simplified the journey from idea to implementation with our transparent, collaborative process.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                      <div
                        className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"} md:justify-start items-center mb-4`}
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 md:hidden">
                          {step.icon}
                        </div>
                        <h3
                          className={`text-xl font-bold text-gray-900 ${index % 2 === 0 ? "md:ml-0" : "ml-4 md:ml-0"}`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon for desktop */}
                  <div
                    className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"}`}
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
