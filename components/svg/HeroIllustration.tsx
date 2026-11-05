"use client";

import { motion } from "framer-motion";

/**
 * Animated hero illustration — freelancer workspace.
 * Lightweight pure-SVG + CSS/SMIL + framer-motion floats.
 * Decorative: aria-hidden.
 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* glow blobs */}
      <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-brand-400/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl animate-blob [animation-delay:2s]" />

      <motion.svg
        viewBox="0 0 520 420"
        fill="none"
        className="relative w-full drop-shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        role="presentation"
      >
        <defs>
          <linearGradient id="hero-bg" x1="0" y1="0" x2="520" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EEF4FF" />
            <stop offset="1" stopColor="#E6F9F0" />
          </linearGradient>
          <linearGradient id="hero-card" x1="140" y1="110" x2="380" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B63F6" />
            <stop offset="1" stopColor="#0DBA77" />
          </linearGradient>
          <linearGradient id="hero-screen" x1="150" y1="90" x2="370" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#DBE6FE" />
          </linearGradient>
        </defs>

        {/* backdrop card */}
        <rect x="40" y="30" width="440" height="360" rx="28" fill="url(#hero-bg)" className="dark:opacity-20" />
        <rect x="40" y="30" width="440" height="360" rx="28" stroke="currentColor" strokeOpacity="0.08" strokeWidth="2" />

        {/* floating dots grid */}
        <g fill="currentColor" opacity="0.14">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={62 + c * 16} cy={52 + r * 14} r="2.2" />
            ))
          )}
        </g>

        {/* main browser window */}
        <g className="animate-float-slow">
          <rect x="130" y="95" width="260" height="175" rx="16" fill="url(#hero-screen)" stroke="#2547EB" strokeOpacity="0.18" strokeWidth="2" />
          <rect x="130" y="95" width="260" height="34" rx="16" fill="#2547EB" fillOpacity="0.08" />
          <circle cx="150" cy="112" r="5" fill="#F87171" />
          <circle cx="166" cy="112" r="5" fill="#FBBF24" />
          <circle cx="182" cy="112" r="5" fill="#34D399" />
          {/* code lines — draw animation */}
          <g strokeLinecap="round" strokeWidth="7">
            <line x1="150" y1="152" x2="250" y2="152" stroke="#3B63F6" strokeOpacity="0.85" className="svg-draw" />
            <line x1="150" y1="172" x2="310" y2="172" stroke="#93B4FD" className="svg-draw svg-draw-delay-1" />
            <line x1="150" y1="192" x2="275" y2="192" stroke="#0DBA77" strokeOpacity="0.8" className="svg-draw svg-draw-delay-2" />
            <line x1="150" y1="212" x2="230" y2="212" stroke="#CBD5E1" className="svg-draw svg-draw-delay-3" />
            <line x1="150" y1="232" x2="290" y2="232" stroke="#2547EB" strokeOpacity="0.35" className="svg-draw svg-draw-delay-3" />
          </g>
          {/* cursor */}
          <g>
            <rect x="318" y="140" width="14" height="72" rx="4" fill="#3B63F6" opacity="0.9">
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.6s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        {/* profile card */}
        <g className="animate-float">
          <rect x="92" y="235" width="150" height="110" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
          <circle cx="118" cy="264" r="14" fill="url(#hero-card)" />
          <circle cx="118" cy="260" r="5.5" fill="white" />
          <path d="M108 274c1.5-5 5-7.5 10-7.5s8.5 2.5 10 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="140" y="254" width="70" height="9" rx="4.5" fill="#1E293B" />
          <rect x="140" y="268" width="52" height="7" rx="3.5" fill="#94A3B8" />
          <rect x="106" y="292" width="62" height="22" rx="11" fill="#0DBA77" />
          <rect x="174" y="292" width="52" height="22" rx="11" fill="#EEF4FF" stroke="#3B63F6" strokeOpacity="0.3" />
          {/* stars */}
          <g fill="#FBBF24">
            <path d="M106 326l2 4 4.5.6-3.2 3.1.7 4.4-4-2-4 2 .7-4.4-3.2-3.1L104 330z" />
          </g>
          <text x="122" y="338" fontSize="13" fontWeight="700" fill="#0F172A" fontFamily="Inter,sans-serif">
            5.0 · 48 jobs
          </text>
        </g>

        {/* payment notification */}
        <g className="animate-float-slow">
          <rect x="310" y="248" width="150" height="86" rx="16" fill="#0F172A" />
          <circle cx="332" cy="273" r="12" fill="#0DBA77">
            <animate attributeName="r" values="11;13;11" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <path d="M326.5 273l4 4 7-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="352" y="264" width="80" height="9" rx="4.5" fill="white" opacity="0.9" />
          <rect x="352" y="278" width="56" height="7" rx="3.5" fill="white" opacity="0.5" />
          <rect x="322" y="296" width="126" height="22" rx="11" fill="white" opacity="0.12" />
          <text x="332" y="311" fontSize="12" fontWeight="700" fill="white" fontFamily="Inter,sans-serif">
            + $850 received
          </text>
        </g>

        {/* floating coins / chat bubbles */}
        <g>
          <g className="animate-float">
            <circle cx="412" cy="130" r="22" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="2" />
            <text x="412" y="138" textAnchor="middle" fontSize="20" fontWeight="800" fill="#B45309" fontFamily="Inter,sans-serif">
              $
            </text>
          </g>
          <g className="animate-float-slow">
            <rect x="88" y="130" width="86" height="40" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
            <circle cx="104" cy="150" r="3" fill="#3B63F6">
              <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="114" cy="150" r="3" fill="#3B63F6" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="124" cy="150" r="3" fill="#3B63F6" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.2;0.4" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <text x="138" y="154" fontSize="11" fontWeight="700" fill="#64748B" fontFamily="Inter,sans-serif">
              Hi!
            </text>
          </g>
          {/* orbit ring */}
          <ellipse cx="260" cy="210" rx="195" ry="150" stroke="#3B63F6" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="8 10">
            <animateTransform attributeName="transform" type="rotate" from="0 260 210" to="360 260 210" dur="40s" repeatCount="indefinite" />
          </ellipse>
        </g>
      </motion.svg>
    </div>
  );
}
