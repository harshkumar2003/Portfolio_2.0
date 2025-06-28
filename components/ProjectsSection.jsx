"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Tales Of the Day",
      category: "Content / Blogging",
      description:"A beautifully curated platform sharing daily stories or tales.",
      image: "/tales.png?height=600&width=500",
      tags: ["HTML5", "Tailwind CSS", "Firebase"],
      year: "2025",
      featured: true,
    },
    {
      id: 2,
      title: "Dev Foster Tech",
      category: "Agency Website",
      description: "A professional IT service provider offering website development, SEO, and digital branding solutions to help businesses grow online.",
      image: "/dft.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS" , "Responsive Design", "SEO"],
      year: "2024",
      featured: false,
    },
    {
      id: 3,
      title: "BMW Academy (NIFSE)",
      category: "Educational Institute Website",
      description: "A modern, responsive website built for BMW Academy to showcase courses and admission details, enhancing the institute's digital presence.",
      image: "/nifse.png?height=400&width=600",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design" , "SEO"],
      year: "2024",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="relative">
            {/* Section Number */}
            <motion.div
              className="text-6xl sm:text-7xl lg:text-9xl font-black text-gray-900 absolute -top-16 left-1/2 transform -translate-x-1/2 select-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              03
            </motion.div>

            {/* Section Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold relative z-10">
              Featured
              <span className="text-gray-600"> Work</span>
            </h2>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-2xl lg:rounded-3xl"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Links */}
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3 lg:space-x-4">
                      <Button
                        size="icon"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 h-10 w-10 lg:h-12 lg:w-12"
                      >
                        <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                      </Button>
                      <Button
                        size="icon"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 h-10 w-10 lg:h-12 lg:w-12"
                      >
                        <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className={`space-y-4 lg:space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                {/* Project Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                  <span className="text-sm text-gray-400 font-medium">{project.category}</span>
                  <div className="hidden sm:block w-px h-4 bg-gray-600" />
                  <span className="text-sm text-gray-400 font-medium">{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{project.title}</h3>

                {/* Project Description */}
                <p className="text-base lg:text-lg text-gray-400 leading-relaxed">{project.description}</p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 lg:px-4 py-1 lg:py-2 bg-white/10 border border-white/20 rounded-full text-xs lg:text-sm font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-gray-300 p-0 h-auto font-medium text-base lg:text-lg group"
                  >
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
