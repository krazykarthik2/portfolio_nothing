"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-neutral-400 text-center mb-4">
          Nothing-inspired portfolio interface
        </p>
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
    </div>
  );
};
