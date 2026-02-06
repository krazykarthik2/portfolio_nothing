"use client";
import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Building awesome web applications and solving complex problems. Working with modern tech stack and contributing to open source.",
  },
  {
    title: "Student Developer",
    company: "University Projects",
    period: "2020 - 2023",
    description:
      "Learned programming, built projects, participated in hackathons, and developed a passion for creating things.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-black mb-12 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="border-l-2 border-black pl-6 pb-8"
            >
              <div className="relative">
                <div className="absolute -left-[25px] top-0 w-3 h-3 bg-black rounded-full" />
                <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                <p className="text-lg text-neutral-600 mt-1">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-neutral-700 mt-3">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
