"use client";
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A minimal, elegant portfolio showcasing my work and skills. Built with Next.js and Aceternity UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "Cool Project",
    description:
      "An awesome project that does something amazing. Built with modern technologies and best practices.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Another Project",
    description:
      "Yet another cool project that solves real-world problems. Clean code and great UX.",
    tech: ["TypeScript", "PostgreSQL", "Docker"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-black mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="border-2 border-black p-6 rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-black mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-black font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
