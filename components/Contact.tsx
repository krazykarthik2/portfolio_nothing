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
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-300 mb-12"
        >
          Got a project in mind? Want to collaborate? Just want to say hi? Use the
          shortcuts beside each button or press the matching key.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-4 text-left text-white mb-10">
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Contact
            </p>
            <p className="mt-2">Email: goparajukarthik2@gmail.com</p>
            <p className="mt-1">Mobile: +91-8008107805</p>
            <p className="mt-1">LinkedIn: linkedin.com/in/karthikkrazy</p>
            <p className="mt-1">GitHub: github.com/krazykarthik2</p>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Availability
            </p>
            <p className="mt-2 text-white/80">
              Open to full-time opportunities, internships, and collaborations on
              web, systems, and AI-driven products.
            </p>
            <p className="mt-3 text-xs text-white/60">
              Shortcut keys: E (email), G (GitHub), L (LinkedIn), M (call)
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <a
            href="mailto:goparajukarthik2@gmail.com"
            className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-3"
          >
            <span>Send Email</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white text-xs font-semibold">
              E
            </span>
          </a>
          <a
            href="https://github.com/krazykarthik2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors flex items-center gap-3"
          >
            <span>GitHub</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-black text-xs font-semibold">
              G
            </span>
          </a>
          <a
            href="https://linkedin.com/in/karthikkrazy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors flex items-center gap-3"
          >
            <span>LinkedIn</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-black text-xs font-semibold">
              L
            </span>
          </a>
          <a
            href="tel:+918008107805"
            className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors flex items-center gap-3"
          >
            <span>Call</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-black text-xs font-semibold">
              M
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
