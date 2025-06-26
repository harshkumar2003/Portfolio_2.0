"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 lg:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm lg:text-base text-center sm:text-left">
            © 2024 Harsh Kumar. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 lg:space-x-6">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
              <Github className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
              <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
              <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
