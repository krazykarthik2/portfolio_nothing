"use client";
import { motion } from "framer-motion";
import React from "react";

type SkillCategory = { title: string; items: string[]; note?: string };

const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Express.js", "Node.js", "Flask", "Django"],
  },
  {
    title: "Tools",
    items: ["Git", "Jira", "Docker", "Firebase", "MongoDB", "MySQL", "Figma"],
  },
  {
    title: "Platforms",
    items: ["Linux", "Windows", "Netlify", "render.com"],
    note: "Includes Dockerized runtime environments.",
  },
  {
    title: "Soft Skills",
    items: [
      "Project Management",
      "Team Collaboration",
      "Communication",
      "Problem Solving",
    ],
  },
  {
    title: "Other",
    items: ["Web scraping", "Automation", "Python automation using Selenium"],
  },
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
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ translateY: -4 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 border border-white/15 rounded-xl bg-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {skill.note ? (
                <p className="mt-3 text-xs text-white/60">{skill.note}</p>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
