"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Section Number */}
              <motion.div
                className="text-6xl sm:text-7xl lg:text-9xl font-black text-gray-900 absolute -top-8 sm:-top-12 lg:-top-16 -left-4 sm:-left-6 lg:-left-8 select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                01
              </motion.div>

              {/* Section Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 relative z-10">
                About
                <span className="text-gray-600"> Me</span>
              </h2>

              {/* About Text */}
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate creative developer with a unique blend of
                  technical expertise and artistic vision. My journey spans over
                  6 years of crafting digital experiences that not only function
                  flawlessly but also inspire and engage users on an emotional
                  level.
                </p>
                <p>
                  Specializing in modern web technologies, I create immersive
                  interfaces that bridge the gap between functionality and
                  artistry. Every project is an opportunity to push creative
                  boundaries while maintaining the highest standards of
                  performance and accessibility.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Profile Card */}
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Profile Info */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center space-x-4 mb-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                      HK
                    </div>
                    <div>
                      <h3 className="font-semibold">Harsh Kumar</h3>
                      <p className="text-gray-400 text-sm">
                        Creative Developer
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
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
              </motion.div>

              {/* Floating Stats Cards */}
              {/* <motion.div
                className="absolute -top-8 -right-8 bg-white text-black p-6 rounded-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </motion.div> */}

              {/* <motion.div
                className="absolute -bottom-8 -left-8 bg-gray-900 border border-white/20 p-6 rounded-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}>
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-gray-400">Years</div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
