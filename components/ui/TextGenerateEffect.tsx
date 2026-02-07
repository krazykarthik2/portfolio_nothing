"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-black dark:text-white leading-snug tracking-tight">
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={`${word}-${idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                className="inline-block"
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
