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
            © 2025 Harsh Kumar. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 lg:space-x-6">
            <a
                      href="https://github.com/harshkumar2003"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 "
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harshkumar2003/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 "
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>

                    {/* Email */}
                    <a href="mailto:harshk8876@gmail.com">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 "
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
