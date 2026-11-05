import type { SVGProps } from "react";

/** FreelanceYar brand mark — friendly rounded "Yar" knot with spark */
export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} role="img" aria-label="FreelanceYar logo" {...props}>
      <defs>
        <linearGradient id="fy-g" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B63F6" />
          <stop offset="1" stopColor="#0DBA77" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="42" height="42" rx="13" fill="url(#fy-g)" />
      <rect x="3" y="3" width="42" height="42" rx="13" fill="white" fillOpacity="0.08" />
      <path
        d="M14 15.5 21.5 27v7.5M14 15.5 24 15.5M24 15.5 34 15.5 29 23l-2.2 4"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34.5" cy="31.5" r="2.6" fill="white" opacity="0.95">
        <animate attributeName="r" values="2.2;3;2.2" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
