"use client";
import { motion } from "framer-motion";
import React from "react";

const education = [
  {
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    institution: "VR Siddhartha Engineering College, Vijayawada",
    period: "June 2024 – March 2027",
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Smt. B. Seetha Polytechnic, Bhimavaram",
    period: "Nov 2021 – May 2023",
  },
  {
    degree: "SSC",
    institution: "Mahathi E.M.H.S, Tadepalligudem",
    period: "2021",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center"
        >
          Education
        </motion.h2>
        <div className="grid gap-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-white/10 rounded-xl p-6 bg-white/5"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                {item.period}
              </p>
              <h3 className="text-2xl font-semibold mt-2">{item.degree}</h3>
              <p className="text-white/80 mt-1">{item.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
