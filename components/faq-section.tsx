"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "Is this service only for students?",
      answer:
        "Not at all! While we have a strong focus on helping students bring their ideas to life, our services are available to anyone with a tech project idea. This includes small business owners, independent creators, researchers, and more.",
    },
    {
      question: "Can small vendors benefit from tech too?",
      answer:
        "Small vendors can greatly benefit from custom tech solutions. Whether it's inventory management, order processing, customer relationship management, or online presence, we can help streamline operations and increase efficiency.",
    },
    {
      question: "What if I don't know anything about tech?",
      answer:
        "That's exactly why we're here! Our team specializes in translating non-technical ideas into functional tech solutions. We'll guide you through the entire process, explain concepts in plain language, and ensure you understand what we're building for you.",
    },
    {
      question: "How do you ensure my idea stays private?",
      answer:
        "We take confidentiality very seriously. All clients sign a non-disclosure agreement (NDA) before we begin work, and we have strict internal policies to protect your intellectual property. Your ideas remain yours, and we'll never share them without your explicit permission.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Yes, we offer flexible payment options including installment plans. Typically, we require a deposit to begin work, with remaining payments tied to project milestones. This helps distribute the cost over the development period and ensures you only pay for completed work.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. Simple projects might take 2-4 weeks, while more complex solutions can take 2-3 months. During our initial consultation, we'll provide a detailed timeline estimate for your specific project.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
