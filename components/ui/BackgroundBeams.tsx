"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="absolute inset-[-40%] animate-[spin_18s_linear_infinite] motion-reduce:animate-none motion-reduce:opacity-30 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(120,119,198,0.25),rgba(59,130,246,0.05),rgba(236,72,153,0.15),rgba(120,119,198,0.25))] blur-3xl opacity-50" />
    </div>
  );
};
