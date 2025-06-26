"use client"

import { useState, useEffect } from "react"
import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
// import { Toaster } from "@/components/ui/toaster"

export default function Portfolio() {
  // State for tracking which section is currently active
  const [activeSection, setActiveSection] = useState("home")
  // State for controlling animations play/pause
  const [isPlaying, setIsPlaying] = useState(true)
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track scroll position to highlight active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight)  {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
console.log("Active Section:", activeSection)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Main Navigation */}
      {/* <Toaster /> */}

      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Hero/Landing Section */}
      <HeroSection isPlaying={isPlaying} scrollToSection={scrollToSection} />

      {/* About Me Section */}
      <AboutSection />

      {/* Skills & Expertise Section */}
      <SkillsSection />

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* Contact Form Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
