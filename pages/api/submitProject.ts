import type { NextApiRequest, NextApiResponse } from "next"
import multer from "multer"
import { createRouter } from "next-connect"
import path from "path"
import fs from "fs"
import nodemailer from "nodemailer"

// Configure multer for file storage
const upload = multer({
  storage: multer.diskStorage({
    destination: "/tmp", // Temporary storage for uploaded files
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB file size limit
  },
})

// Interface for the form data
interface FormData {
  projectType: string
  description: string
  timeline: string
  name: string
  email: string
  phone: string
}

// Create a next-connect router
const router = createRouter<NextApiRequest & { files?: Express.Multer.File[] }, NextApiResponse>()

// Configure API to parse multipart/form-data
router.use(upload.array("files"))

// Handle POST requests
router.post(async (req, res) => {
  try {
    console.log("Environment variables:", {
      user: process.env.EMAIL_USER,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
    })
    
    // Extract form data from request body
    const formData: FormData = req.body

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Using a predefined service instead of custom host
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Set up email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Fallback to sender's email if recipient not specified
      subject: `New Project Submission: ${formData.projectType}`,
      text: `
        Project Type: ${formData.projectType}
        Description: ${formData.description}
        Timeline: ${formData.timeline}
        
        Contact Information:
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
      `,
      html: `
        <h2>New Project Submission</h2>
        <h3>Project Details</h3>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Description:</strong> ${formData.description}</p>
        <p><strong>Timeline:</strong> ${formData.timeline}</p>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
      `,
      attachments: [] as { filename: string; path: string }[],
    }

    // Add file attachments if any
    if (req.files && Array.isArray(req.files)) {
      req.files.forEach((file) => {
        mailOptions.attachments.push({
          filename: file.originalname,
          path: file.path,
        })
      })
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    // Clean up temp files after sending
    if (req.files && Array.isArray(req.files)) {
      req.files.forEach((file) => {
        fs.unlink(file.path, (err) => {
          if (err) console.error(`Failed to delete temp file: ${file.path}`, err)
        })
      })
    }

    res.status(200).json({ success: true, messageId: info.messageId })
  } catch (error) {
    console.error("Email sending failed:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ 
      success: false, 
      message: "Failed to send project submission email", 
      error: errorMessage
    })
  }
})

// Handle other HTTP methods
router.all((req, res) => {
  res.status(405).json({ error: "Method not allowed" })
})

// Disable body parser to allow multer to handle the form
export const config = {
  api: {
    bodyParser: false,
  },
}

// Export the router as the default handler
export default router.handler()