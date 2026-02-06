"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) => {
  return (
    <Tag
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-[1px] overflow-hidden",
        containerClassName
      )}
      {...props}
    >
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full z-[1]",
          clockwise ? "bg-gradient-to-r" : "bg-gradient-to-l",
          "from-transparent via-white/20 to-transparent"
        )}
        animate={{
          rotate: clockwise ? 360 : -360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative z-[2] bg-black rounded-full flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};
