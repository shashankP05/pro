"use client"

import { useState, useEffect } from "react"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <Button size="lg" className="rounded-full shadow-lg" asChild>
        <Link href="#contact">
          <MessageSquare className="mr-2 h-5 w-5" />
          Get a Quote
        </Link>
      </Button>
    </div>
  )
}
