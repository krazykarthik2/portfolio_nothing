"use client";
import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    title: "MERN Developer Intern",
    company: "EdAtoZ • Visakhapatnam",
    period: "Aug 2023 – Feb 2024",
    highlights: [
      "Developed and maintained a Learning Management System using the MERN stack.",
      "Participated in code reviews to ensure quality and best practices.",
      "Implemented CI/CD workflows using GitHub Actions and managed deployments.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "RK Info Systems • Hyderabad",
    period: "June 2023 – Dec 2023",
    highlights: [
      "Created applications using Java Swings, SQL, and JSP.",
      "Learned corporate communication and software development practices.",
      "Used project management tools like Jira.",
    ],
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
          className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-12 text-center"
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
                <ul className="text-neutral-700 mt-4 space-y-2 list-disc list-inside">
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
