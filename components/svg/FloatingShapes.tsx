import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/** Decorative floating blobs + grid — use behind sections */
export function FloatingShapes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" fill="none" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <circle cx="40" cy="40" r="6" fill="currentColor" opacity="0.12">
        <animate attributeName="cy" values="40;28;40" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="360" cy="60" r="10" fill="currentColor" opacity="0.08">
        <animate attributeName="cy" values="60;78;60" dur="6s" repeatCount="indefinite" />
      </circle>
      <rect x="320" y="130" width="14" height="14" rx="4" fill="currentColor" opacity="0.1" transform="rotate(20 327 137)">
        <animateTransform attributeName="transform" type="rotate" from="20 327 137" to="200 327 137" dur="12s" repeatCount="indefinite" />
      </rect>
      <path d="M20 150 Q60 120 100 150 T180 150" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <animate attributeName="d" values="M20 150 Q60 120 100 150 T180 150;M20 150 Q60 180 100 150 T180 150;M20 150 Q60 120 100 150 T180 150" dur="7s" repeatCount="indefinite" />
      </path>
      <g stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5">
        <line x1="240" y1="20" x2="280" y2="20" strokeLinecap="round" />
        <line x1="250" y1="32" x2="290" y2="32" strokeLinecap="round" />
        <line x1="240" y1="44" x2="270" y2="44" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function DottedPattern(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true" {...props}>
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={8 + c * 14} cy={8 + r * 18} r="2.5" fill="currentColor" opacity="0.18" />
        ))
      )}
    </svg>
  );
}
