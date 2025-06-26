import type { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Harsh Kumar',
  description: `Crafted in Code, Driven by Vision.

Welcome to the digital desk of Harsh Kumar, a passionate Computer Science student and developer on a mission to build, learn, and lead in the world of technology. This portfolio is more than just a website — it's a living blueprint of my journey, skills, and spirit.

From full-stack development to solving real-world problems with elegant code, here lies a showcase of projects, achievements, and relentless pursuit of growth. Each pixel tells a story, each section echoes dedication — all rooted in one goal: to earn a place among the best, in a product-based company, and beyond.

💻 Tech Stack: Java, JavaScript, React, Node.js, Firebase, Supabase, and more  
🚀 Domains: Web Development • DSA & Problem Solving • System Design  
📈 Goals: Placement-ready, freelance-honed, and startup-bound

"Here, I don’t just display what I’ve done — I declare what I’m destined for."  
Explore. Connect. Let’s build something remarkable.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
