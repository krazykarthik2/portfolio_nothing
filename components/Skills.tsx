"use client";
import { motion } from "framer-motion";
import React from "react";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Python", "Java", "Git",
  "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-4 border border-white/20 rounded-lg text-center hover:border-white/50 transition-colors cursor-pointer"
            >
              <p className="text-white font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
