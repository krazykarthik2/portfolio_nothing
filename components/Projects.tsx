"use client";
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Schedule Cooker",
    description:
      "MERN-based institutional schedule management app with CI/CD via GitHub Actions.",
    tech: ["MERN", "GitHub Actions", "Scheduling"],
  },
  {
    title: "MICEAI",
    description:
      "AI/ML Python project using hand gestures as a mouse, focused on accessibility, accuracy, and speed.",
    tech: ["Python", "Computer Vision", "Accessibility"],
  },
  {
    title: "h5visualizer",
    description:
      "Published Python package that visualizes Keras (.h5) models in 3D with interactive cubes and dynamic scaling.",
    tech: ["Python", "Keras", "3D Visualization"],
  },
  {
    title: "ServerKrazy",
    description:
      "Prototype real-time chat app with server-based rooms, file sharing, emoji, location sharing, Firebase backend, and Figma design.",
    tech: ["Realtime", "Firebase", "Chat"],
  },
  {
    title: "EASYFORMS",
    description:
      "MERN-based event management and form-building system with response collection.",
    tech: ["MERN", "Forms", "Events"],
  },
];

const gpuSystems = [
  {
    title: "Boids Simulation",
    description:
      "Supports up to 10⁶ entities at 60 FPS using GPU parallelism and raylib.h.",
    tech: ["CUDA", "Raylib", "Simulation"],
  },
  {
    title: "Real-time Sand Physics Solver",
    description: "GPU-accelerated solver with interactive rendering.",
    tech: ["GPU", "Physics", "Rendering"],
  },
  {
    title: "Real-time Video Processing",
    description:
      "1080p 60 FPS pipeline with filters, grayscale, ASCII rendering, and effects.",
    tech: ["Video", "GPU", "Performance"],
  },
];

const advancedSystems = [
  {
    title: "STU-MCP",
    description:
      "Modular chatbot platform with n8n automation, cloud-hosted Mistral API, MCP layer, and React frontend.",
    tech: ["MCP", "n8n", "Mistral"],
  },
  {
    title: "PolyDecom",
    description:
      "Mesh optimization tool reducing triangle count in .obj files for efficient LOD generation.",
    tech: ["Optimization", "3D Mesh", "LOD"],
  },
  {
    title: "Netradarshak",
    description:
      "Fine-tuned Vision-Language Model for image captioning using SAM, LoRA, Google Street View dataset, and Raspberry Pi Zero 2 W for assistive real-time captioning.",
    tech: ["VLM", "SAM", "LoRA"],
  },
  {
    title: "OSPROJECT",
    description:
      "Custom x86 OS supporting real mode, protected mode, and 32-bit mode with custom kernel, GDT, IDT; under development.",
    tech: ["x86", "Kernel", "GDT/IDT"],
  },
  {
    title: "CUSTOMRASPOS",
    description:
      "ARM-based OS with system calls, kernel, scheduler, services, shell, and terminal; supports 32-bit mode; under development.",
    tech: ["ARM", "Kernel", "Scheduler"],
  },
  {
    title: "FARMONAUT GEARX",
    description:
      "Autonomous agricultural vehicle using Jetson Nano with optimized YOLO, MobileNet, and depth detection for real-time decisions.",
    tech: ["Jetson Nano", "YOLO", "Autonomy"],
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
          className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">Product Builds</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="border-2 border-black p-6 rounded-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">
              GPU / Systems / Low-level Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gpuSystems.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="border-2 border-black p-6 rounded-lg bg-white hover:shadow-xl"
                >
                  <h3 className="text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">AI / OS / Advanced Systems</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedSystems.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="border-2 border-black p-6 rounded-lg bg-white hover:shadow-xl"
                >
                  <h3 className="text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1AlTs2gb2jCAJpWSw5FrY2lCwCWZkmz5V?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.28 3h11.44l4.29 7.43-5.72 9.9H5.71L1.43 10.43 6.28 3zm5.72 1.5L7.23 12h9.54l-4.77-7.5zM4.35 11l3.1 5.36h9.1L19.65 11H4.35z" />
            </svg>
            <span>View Videos &amp; Photos of My Works</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
