"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Smartphone,
  Code,
  Database,
  Globe,
  Bot,
  ArrowRight,
  CheckCircle,
  Server,
  Tags,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      id: "flutter-app-development",
      icon: <Smartphone className="h-10 w-10 text-teal-500" />,
      title: "Flutter App Development",
      description:
        "Custom mobile apps for ideas, businesses, or academic prototypes.",
      useCase: "Small shop inventory app, student expense tracker",
      color: "bg-teal-50 border-teal-200",
    },
    {
      id: "python-solutions",
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "Python Solutions",
      description:
        "Scripts, automations, and backend tools to streamline processes.",
      useCase: "Data processing, automation scripts, web scrapers",
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: "data-science-ml",
      icon: <Database className="h-10 w-10 text-blue-500" />,
      title: "Data Science & ML",
      description:
        "Predictive models, dashboards, and business intelligence tools.",
      useCase: "Sales forecasting, customer segmentation, trend analysis",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "web-development",
      icon: <Globe className="h-10 w-10 text-green-500" />,
      title: "Web Development",
      description: "Static sites, eCommerce, portals for students or vendors.",
      useCase: "Business websites, online stores, student portfolios",
      color: "bg-green-50 border-green-200",
    },
    {
      id: "ai-agent-building",
      icon: <Bot className="h-10 w-10 text-orange-500" />,
      title: "AI Agent Building",
      description:
        "Intelligent assistants for automation, customer support, or research.",
      useCase: "Customer service bots, research assistants, data analyzers",
      color: "bg-orange-50 border-orange-200",
    },
    {
      id: "api-development",
      icon: <Server className="h-10 w-10 text-yellow-500" />,
      title: "API Development",
      description:
        "Robust, scalable APIs for web, mobile, and third-party integrations.",
      useCase: "Backend services, SaaS platforms, mobile app support",
      color: "bg-yellow-50 border-yellow-200",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of tech solutions to bring your ideas to life, no matter your technical background.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} id={service.id}>
              <Card
                className={`h-full border-2 hover:shadow-lg transition-all ${service.color}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mt-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white/50 p-3 rounded-md">
                    <h4 className="font-medium text-sm text-gray-700">
                      Use Cases:
                    </h4>
                    <p className="mt-1 text-gray-600">{service.useCase}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group"
                    asChild
                  >
                    <Link href="#contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Updated Pricing Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Transparent Pricing
          </h3>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="relative rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Tags className="h-12 w-12 text-primary shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Pay Only for What You Need
                  </h4>
                  <p className="text-gray-700 text-base mb-4">
                    We don't believe in rigid pricing tiers. Instead, we provide a customized quote tailored to the complexity and requirements of your project — big or small.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      <span>In-depth project planning and strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      <span>Advanced functionalities and integrations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      <span>Multiple revision rounds during development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      <span>Detailed user documentation & handover</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      <span>Ongoing support based on agreement</span>
                    </li>
                  </ul>

                  <Button className="mt-6" asChild>
                    <Link href="#contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}