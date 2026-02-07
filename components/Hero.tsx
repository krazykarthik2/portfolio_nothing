"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black antialiased relative overflow-hidden"
    >
      <BackgroundBeams />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 bg-opacity-50">
          Karthik &mdash; Full-Stack Engineer
        </h1>
        <TextGenerateEffect
          words="Designing and building minimal, Nothing-inspired web experiences that stay clear, fast, and thoughtful."
          className="text-center text-lg md:text-xl mt-5 text-neutral-200 max-w-3xl mx-auto"
        />
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-neutral-300">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            Karthik Goparaju
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            goparajukarthik2@gmail.com
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            +91-8008107805
          </span>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="relative inline-flex items-center justify-center rounded-full p-[1px] overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin-slow" />
            <div className="relative z-[2] bg-black text-white rounded-full px-8 py-3 text-sm font-medium flex items-center gap-2">
              <span>View My Work</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                5
              </span>
            </div>
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center rounded-full p-[1px] overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin-slow" />
            <div className="relative z-[2] bg-black text-white rounded-full px-8 py-3 text-sm font-medium flex items-center gap-2">
              <span>Get in Touch</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                7
              </span>
            </div>
          </a>
        </div>
        <p className="mt-6 text-center text-sm text-neutral-400">
          Use number keys 1-7 or the shortcut bar to jump across sections. Keys are
          shown beside every quick action.
        </p>
      </div>
      <div className="absolute right-6 top-6 md:right-10 md:top-10 z-10">
        <div className="relative h-14 w-14 md:h-16 md:w-16">
          <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_12px_40px_rgba(255,255,255,0.12)]" />
          <div className="absolute inset-1 rounded-full bg-white/5 border border-white/10" />
          <div className="relative h-full w-full flex items-center justify-center text-white">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="7.5" r="3.25" />
              <path d="M5.75 18.5c.6-2.6 3.2-4.5 6.25-4.5s5.65 1.9 6.25 4.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
