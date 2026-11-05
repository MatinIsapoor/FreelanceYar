"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Feature icon with animated gradient ring + hover micro-interaction.
 *  Takes `children` (a rendered <Icon /> element) instead of a component
 *  reference so it can be used safely from Server Components. */
export function AnimatedFeatureIcon({
  children,
  className,
  gradient = "from-brand-500 to-accent-500"
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}) {
  return (
    <span className={cn("group/icon relative inline-flex", className)}>
      <span
        aria-hidden
        className={cn(
          "absolute -inset-1.5 rounded-2xl bg-gradient-to-br opacity-20 blur-md transition-all duration-300 group-hover/icon:opacity-40 group-hover/icon:blur-lg",
          gradient
        )}
      />
      <motion.span
        whileHover={{ rotate: -6, scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className={cn(
          "relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-soft",
          gradient
        )}
      >
        {children}
        {/* shine sweep on hover */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <span className="absolute -left-8 top-0 h-full w-6 -skew-x-12 bg-white/30 opacity-0 transition-all duration-500 group-hover/icon:left-[120%] group-hover/icon:opacity-100" />
        </span>
      </motion.span>
    </span>
  );
}
