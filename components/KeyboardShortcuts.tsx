"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

type Shortcut = {
  key: string;
  label: string;
  targetId?: string;
  href?: string;
};

const shortcuts: Shortcut[] = [
  { key: "1", label: "Hero", targetId: "hero" },
  { key: "2", label: "Experience", targetId: "experience" },
  { key: "3", label: "Education", targetId: "education" },
  { key: "4", label: "Skills", targetId: "skills" },
  { key: "5", label: "Projects", targetId: "projects" },
  { key: "6", label: "Achievements", targetId: "achievements" },
  { key: "7", label: "Contact", targetId: "contact" },
  { key: "e", label: "Send Email", href: "mailto:goparajukarthik2@gmail.com" },
  { key: "g", label: "GitHub", href: "https://github.com/krazykarthik2" },
  { key: "l", label: "LinkedIn", href: "https://linkedin.com/in/karthikkrazy" },
  { key: "m", label: "Call", href: "tel:+918008107805" },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const triggerShortcut = (shortcut: Shortcut) => {
  if (shortcut.targetId) {
    scrollToId(shortcut.targetId);
  }
  if (shortcut.href) {
    window.location.href = shortcut.href;
  }
};

export const KeyboardShortcuts = () => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;
      const isEditable =
        target?.isContentEditable ||
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT";
      if (isEditable) return;

      const match = shortcuts.find(
        (item) => item.key.toLowerCase() === event.key.toLowerCase(),
      );
      if (match) {
        event.preventDefault();
        triggerShortcut(match);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur shadow-2xl p-4 text-white max-w-sm">
        <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
          Keyboard navigation
        </p>
        <div className="flex flex-wrap gap-2">
          {shortcuts.map((shortcut) => (
            <motion.button
              key={shortcut.key}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => triggerShortcut(shortcut)}
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/15 text-xs font-semibold">
                {shortcut.key.toUpperCase()}
              </span>
              <span className="whitespace-nowrap">{shortcut.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
