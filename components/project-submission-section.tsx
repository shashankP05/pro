"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Check, ChevronRight, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function ProjectSubmissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: "",
    description: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
  })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      
      // Check file size - 10MB limit
      const oversizedFiles = filesArray.filter(file => file.size > 10 * 1024 * 1024)
      if (oversizedFiles.length > 0) {
        setErrorMessage("Some files exceed the 10MB size limit and won't be uploaded")
        setTimeout(() => setErrorMessage(""), 5000)
        
        // Filter out oversized files
        const validFiles = filesArray.filter(file => file.size <= 10 * 1024 * 1024)
        setSelectedFiles(prev => [...prev, ...validFiles])
      } else {
        setSelectedFiles(prev => [...prev, ...filesArray])
      }
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const nextStep = () => {
    if (step === 1) {
      const { projectType, description, timeline } = formData
      if (!projectType || !description.trim() || !timeline) {
        setErrorMessage("Please fill in all project details before continuing.")
        setTimeout(() => setErrorMessage(""), 5000)
        return
      }
    }
  
    if (step === 3) {
      const { name, email } = formData
      if (!name.trim() || !email.trim()) {
        setErrorMessage("Please fill in your name and email before submitting.")
        setTimeout(() => setErrorMessage(""), 5000)
        return
      }
    }
  
    setStep((prev) => prev + 1)
  }
  
  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email } = formData
    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please fill in your name and email before submitting.")
      setTimeout(() => setErrorMessage(""), 5000)
      return
    }

    setIsLoading(true)
    setErrorMessage("")

    try {
      // Create a form data object to send both form data and files
      const formDataToSend = new FormData()
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })
      
      // Add files
      selectedFiles.forEach(file => {
        formDataToSend.append("files", file)
      })

      const res = await fetch("/api/submitProject", {
        method: "POST",
        body: formDataToSend,
        // Don't set Content-Type header - FormData sets it with the correct boundary
      })

      const data = await res.json()
      if (data.success) {
        setStep(4) // Move to success step
      } else {
        setErrorMessage(data.message || "Failed to submit project. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setErrorMessage("Something went wrong while submitting the project.")
    } finally {
      setIsLoading(false)
    }
  }

  // Format file size to human-readable format
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes"
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Start Your Project</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to bring your idea to life? Fill out our simple project submission form, and we'll get back to you
            within 48 hours.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 md:p-8">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= i ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    {step > i ? <Check className="h-5 w-5" /> : i}
                  </div>
                  <span className={`text-sm mt-2 ${step >= i ? "text-primary" : "text-gray-500"}`}>
                    {i === 1 ? "Project Details" : i === 2 ? "Upload Files" : "Contact Info"}
                  </span>
                </div>
              ))}
            </div>

            {/* Error Message Display */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("projectType", value)}
                      value={formData.projectType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="app">Mobile App Development</SelectItem>
                        <SelectItem value="python">Python Solutions</SelectItem>
                        <SelectItem value="data">Data Science & ML</SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="ai">AI Agent Building</SelectItem>
                        <SelectItem value="api">API Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Describe Your Idea</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Tell us about your project idea..."
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select onValueChange={(value) => handleSelectChange("timeline", value)} value={formData.timeline}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                        <SelectItem value="relaxed">Flexible (1-2 months)</SelectItem>
                        <SelectItem value="planning">Just Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end">
                    <Button type="button" onClick={nextStep}>
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: File Upload */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Upload Files/Sketches (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
                      <p className="text-gray-400 text-sm">Accepts images, PDFs, and documents (Max 10MB)</p>
                      <Input 
                        type="file" 
                        className="hidden" 
                        id="file-upload" 
                        multiple 
                        onChange={handleFileChange}
                        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
                      />
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => document.getElementById("file-upload")?.click()}
                        type="button"
                      >
                        Browse Files
                      </Button>
                    </div>

                    {/* Selected Files Display */}
                    {selectedFiles.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-700 mb-2">Selected Files</h4>
                        <ul className="space-y-2">
                          {selectedFiles.map((file, index) => (
                            <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                              <div className="truncate">
                                <span className="text-sm font-medium">{file.name}</span>
                                <span className="text-xs text-gray-500 ml-2">({formatFileSize(file.size)})</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => removeFile(index)}
                                type="button"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep}>
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit Project"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Success Message */}
              {step === 4 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your submission. We'll review your project details and get back to you within 48
                    hours.
                  </p>
                  <Button
                    onClick={() => {
                      setStep(1)
                      setFormData({
                        projectType: "",
                        description: "",
                        timeline: "",
                        name: "",
                        email: "",
                        phone: "",
                      })
                      setSelectedFiles([])
                    }}
                  >
                    Submit Another Project
                  </Button>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}