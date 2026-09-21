"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  // "rise" fades text and cards up; "wipe" uncovers an image from the top.
  variant?: "rise" | "wipe";
  delay?: number;
};

const variants = {
  rise: {
    hidden: { opacity: 0, y: 28 },
    shown: { opacity: 1, y: 0 },
  },
  wipe: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    shown: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  },
};

export default function Reveal({
  children,
  className,
  variant = "rise",
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={variants[variant].hidden}
      whileInView={variants[variant].shown}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: variant === "wipe" ? 1.1 : 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
