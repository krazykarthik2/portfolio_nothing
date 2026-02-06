"use client";
import { motion } from "framer-motion";
import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-300 mb-12"
        >
          Got a project in mind? Want to collaborate? Just want to say hi?
          <br />
          Feel free to reach out!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Send Email
          </a>
          <a
            href="https://github.com/krazykarthik2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};
