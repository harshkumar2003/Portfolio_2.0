"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import '../styles/style.css'
import { toast, ToastContainer } from "react-toastify";

export default function ContactSection() {
  const [result, setResult] = useState("");
  async function handleSubmit(e) {
    e.preventDefault(); // Stop form reload

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e4abcd6a-ac7a-4797-88df-7f72d2840500",
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("✅ Message sent successfully!");
        e.target.reset(); // clear the form
      } else {
        toast.error("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error while sending message:", error);
      toast.error("🚫 Network error. Check your connection or API key.");
    }
  }
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      <ToastContainer position="top-right" autoClose={3000} theme="dark"/>

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
              04
            </motion.div>

            {/* Section Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold relative z-10">
              Let's
              <span className="text-gray-600"> Connect</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and create
            something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get in touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Whether you're a company looking to hire, or
                you're someone who has a project in mind, I'd love to hear from
                you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <a href="mailto:harshk8876@gmail.com">
                    <Mail className="h-5 w-5 text-white" />
                  </a>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">harshk8876@gmail.com</p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <a
                    href="https://www.linkedin.com/in/harshkumar2003/"
                    target="blank"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400">@harshkumar2003</p>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <a href="https://github.com/harshkumar2003">
                    <Github className="h-5 w-5 text-white" />
                  </a>
                </div>
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-400">@harshkumar2003</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 h-12"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 min-h-32 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-gray-200 font-medium"
                    >
                      Send Message
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
