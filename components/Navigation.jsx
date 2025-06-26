"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"



export default function Navigation({
  activeSection,
  scrollToSection,
  isPlaying,
  setIsPlaying,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  // Navigation menu items
  const menuItems = ["home", "about", "skills", "projects", "contact"]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-4 pb-2 lg:py-4">
          {/* Logo */}
          <motion.div
            className="text-xl lg:text-2xl font-bold tracking-tight flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              {/* <span className="text-white font-black">HARSH</span>
              <span className="text-gray-500 font-light ml-1">KUMAR</span> */}
              <img src="/logo (2).svg" alt="" className="w-[60px] h-[40px]"/>
              {/* Subtle underline accent */}
              {/* <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-gray-500"></div> */}
            </div>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-12 relative">
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative capitalize text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                {/* Simple underline that always works */}
                <div
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-white transition-all duration-300 ${
                    activeSection === item ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Controls and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Animation Control (Desktop) */}
            <motion.div
              className="hidden sm:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-gray-400 hover:text-white"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button> */}
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                {/* Animated hamburger menu */}
                <motion.span
                  className="w-6 h-0.5 bg-white block transition-all duration-300"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Full Page Mobile Menu */}
        <motion.div
          className="lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-gray-900 via-black to-gray-900"
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl " />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col justify-center items-center min-h-screen px-8 py-20 relative z-10 bg-black">
            <div className="space-y-6 text-center max-w-sm w-full">
              {/* Mobile Navigation Items */}
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    scrollToSection(item)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block capitalize text-3xl font-bold transition-colors w-full ${
                    activeSection === item ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : 50,
                  }}
                  transition={{
                    delay: isMobileMenuOpen ? index * 0.1 + 0.2 : 0,
                    duration: 0.3,
                  }}
                >
                  {item}
                  {/* Mobile active indicator */}
                  {activeSection === item && (
                    <motion.div
                      className="w-8 h-0.5 bg-white mx-auto mt-2"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Mobile Animation Control */}
              <motion.div
                className="pt-6 border-t border-white/20 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{ delay: isMobileMenuOpen ? 0.7 : 0 }}
              >
                {/* <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-gray-400 hover:text-white text-base"
                >
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? "Pause" : "Play"} Animations
                </Button> */}
              </motion.div>

              {/* Mobile Social Links */}
              <motion.div
                className="flex space-x-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{ delay: isMobileMenuOpen ? 0.8 : 0 }}
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-10 w-10">
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
