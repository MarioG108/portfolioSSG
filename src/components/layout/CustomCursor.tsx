"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hidden on non-touch devices by default via CSS cursor:none
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    const moveCursor = (e: MouseEvent) => {
      // Ring follows with slight delay (lerp)
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      // Dot follows exactly
      gsap.set(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest(".interactive")
      ) {
        gsap.to(ringRef.current, {
          scale: 1.5,
          borderColor: "#ff0080", // Accent color on hover
          duration: 0.3,
        });
        gsap.to(dotRef.current, {
          scale: 2,
          backgroundColor: "#ff0080",
          duration: 0.3,
        });
      } else {
        gsap.to(ringRef.current, {
          scale: 1,
          borderColor: "#00fff7", // Primary color
          duration: 0.3,
        });
        gsap.to(dotRef.current, {
          scale: 1,
          backgroundColor: "#00fff7",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      {/* Outer Glow Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-neon-cyan rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out flex items-center justify-center mix-blend-screen"
        style={{ boxShadow: "0 0 10px rgba(0, 255, 247, 0.4)" }}
      ></div>
      {/* Target Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-neon-cyan rounded-full pointer-events-none z-[9999] shadow-neon-cyan mix-blend-screen"
      ></div>
    </div>
  );
};
