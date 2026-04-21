"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);

  const smoothX = useSpring(cursorX, { damping: 20, stiffness: 220, mass: 0.3 });
  const smoothY = useSpring(cursorY, { damping: 20, stiffness: 220, mass: 0.3 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 22);
      cursorY.set(event.clientY - 22);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden size-11 rounded-full border border-cyan-300/70 bg-cyan-300/10 mix-blend-screen md:block"
      />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden size-16 rounded-full bg-rose-400/20 blur-xl md:block"
      />
    </>
  );
}
