"use client";

import { motion } from "framer-motion";
import { Braces, Code, Database, Server, Wrench } from "lucide-react";

import { Card, CardContent } from "./ui/card";

export default function SkillsSection() {
  // Skills data with icons, levels, and colors
  const skills = [
    {
      name: "Programming Languages",
      icon: Braces,
      level: 93,
      color: "from-lime-400 to-green-500",
      tools: ["Java", "JavaScript"],
    },
    {
      name: "Frontend Fundamentals",
      icon: Code,
      level: 90,
      color: "from-emerald-400 to-cyan-400",
      tools: ["HTML5", "CSS3"],
    },
    {
      name: "Frameworks & Libraries",
      icon: Server,
      level: 92,
      color: "from-blue-400 to-indigo-500",
      tools: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
    },
    {
      name: "Databases",
      icon: Database,
      level: 85,
      color: "from-yellow-400 to-orange-500",
      tools: ["MongoDB", "Firebase", "MySQL"],
    },
    {
      name: "Tools",
      icon: Wrench,
      level: 88,
      color: "from-gray-400 to-gray-600",
      tools: ["Git", "GitHub", "Postman", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative">
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
              02
            </motion.div>

            {/* Section Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold relative z-10">
              Skills &<span className="text-gray-600"> Expertise</span>
            </h2>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  {/* Skill Icon and Name */}
                  <div className="">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {skill.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skill.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-sm font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 text-white shadow-sm hover:scale-105 hover:bg-white/20 transition-transform duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill Level Progress Bar */}
                  {/* <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-white font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
