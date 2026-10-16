"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the element animates in. */
  delay?: number;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Fades content up the first time it scrolls into view. Used only below the
 * fold so it never delays the first paint. With `reducedMotion="user"`, Motion
 * drops the movement for people who prefer reduced motion and keeps a simple fade.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
