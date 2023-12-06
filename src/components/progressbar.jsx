"use client";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  // !bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
  return (
    <motion.div
      className="fixed left-0 right-0 top-[calc(auto-10px)] z-50 h-2 w-auto origin-[0%] rounded-b-xl bg-white"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
