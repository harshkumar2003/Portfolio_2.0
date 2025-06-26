"use client"

import { Button } from "./ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ChevronDown, Download } from "lucide-react"
import { useRef } from "react"

export default function HeroSection({ isPlaying, scrollToSection }) {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef)

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Name Typography */}
          <motion.div className="mb-8">
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated first name */}
              <motion.span
                className="block"
                animate={
                  isPlaying
                    ? {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }
                    : {}
                }
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                style={{
                  background: "linear-gradient(90deg, #ffffff 0%, #666666 50%, #ffffff 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                HARSH
              </motion.span>
              {/* Last name */}
              <motion.span
                className="block text-gray-600"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                KUMAR
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-2xl mx-auto mb-8 lg:mb-12 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed">
              Crafting digital experiences that push boundaries and challenge conventions through innovative design and
              cutting-edge technology.
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                Explore Work
                <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/10 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </motion.div>
    </section>
  )
}
