"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Hero = () => {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hey, I&apos;m Karthik 👋
        </h1>
        <TextGenerateEffect
          words="I build cool stuff on the web and solve problems with code. Passionate about creating elegant solutions that make a difference."
          className="text-center text-lg md:text-2xl mt-4 text-neutral-300 max-w-3xl mx-auto"
        />
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="relative inline-flex items-center justify-center rounded-full p-[1px] overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin-slow" />
            <div className="relative z-[2] bg-black text-white rounded-full px-8 py-3 text-sm font-medium">
              View My Work
            </div>
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center rounded-full p-[1px] overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin-slow" />
            <div className="relative z-[2] bg-black text-white rounded-full px-8 py-3 text-sm font-medium">
              Get in Touch
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
