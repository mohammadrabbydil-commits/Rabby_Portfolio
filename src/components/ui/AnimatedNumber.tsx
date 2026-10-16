"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  /** Display value such as "500+", "204" or "3×". Any non-numeric text is kept as is. */
  value: string;
  className?: string;
}

/** Counts up to the number inside `value` once it scrolls into view. */
export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const match = /^(\D*)(\d+)(.*)$/.exec(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const target = match ? Number(match[2]) : 0;
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    if (!inView || reduceMotion || target === 0) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {match[1]}
        {current}
        {match[3]}
      </span>
    </span>
  );
}
