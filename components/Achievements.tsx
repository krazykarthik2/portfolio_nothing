"use client";
import { motion } from "framer-motion";
import React from "react";

const achievements = [
  "2nd Prize — RVR&JC CogniQuest technical quiz",
  "1st Prize — RVR&JC AgriTech National Level Hackathon 2025 among participants from 15 states",
  "1st Prize — AI Ignite 2024 technical event at department level (Velagapudi Ramakrishna Siddhartha College of Engineering)",
  "Participated — Hackathon at Technogeek 2k23, SRKR Engineering College",
  "Participation certification — Tech Euphoria 2k23, Vasavi Engineering College",
  "Participation certification — NIT Startup Expo",
  "1st Position — Embedded Projects at JNTUK Techfest 2k23",
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-10 text-center"
        >
          Events & Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-4 border-2 border-black rounded-lg bg-white shadow-sm flex items-start gap-3"
            >
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-semibold">
                {idx + 1}
              </span>
              <p className="text-neutral-800">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
