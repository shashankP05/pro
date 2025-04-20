"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Computer Science Student",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Projectory helped me turn my class project into a fully functional app that I now have in my portfolio. The team was patient with my limited technical knowledge and guided me through the entire process.",
      rating: 5,
      before: "Excel Spreadsheet",
      after: "Mobile Expense Tracker App",
    },
    {
      name: "Maria Rodriguez",
      role: "Local Bakery Owner",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "As a small business owner with no tech background, I was struggling to manage orders. Projectory built me a simple but powerful order management system that has increased my efficiency by 60%.",
      rating: 5,
      before: "Paper Order Forms",
      after: "Custom Order Management System",
    },
    {
      name: "David Chen",
      role: "Research Assistant",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The AI assistant Projectory built for our research team has saved us countless hours of data processing. Their team understood our specific needs and delivered a solution that exceeded our expectations.",
      rating: 4,
      before: "Manual Data Processing",
      after: "AI-Powered Research Assistant",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we've helped students, local businesses, and creators bring their ideas to life.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>

                          <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>

                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-semibold text-gray-900 mb-2">Before</h5>
                          <p className="text-gray-700">{testimonial.before}</p>
                        </div>

                        <div className="bg-primary/10 p-4 rounded-md">
                          <h5 className="font-semibold text-gray-900 mb-2">After</h5>
                          <p className="text-gray-700">{testimonial.after}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-primary" : "bg-gray-300"}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
