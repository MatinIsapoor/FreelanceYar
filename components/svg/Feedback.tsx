/** Animated empty state — floating magnifier over documents */
export function EmptyStateIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
      <rect x="50" y="30" width="90" height="110" rx="12" fill="currentColor" opacity="0.06" />
      <rect x="50" y="30" width="90" height="110" rx="12" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />
      <g stroke="currentColor" strokeOpacity="0.18" strokeWidth="6" strokeLinecap="round">
        <line x1="66" y1="58" x2="110" y2="58" />
        <line x1="66" y1="76" x2="124" y2="76" />
        <line x1="66" y1="94" x2="100" y2="94" />
      </g>
      <g className="animate-float">
        <circle cx="155" cy="105" r="30" fill="white" stroke="#3B63F6" strokeWidth="4" />
        <line x1="177" y1="127" x2="196" y2="146" stroke="#3B63F6" strokeWidth="7" strokeLinecap="round" />
        <path d="M143 105a12 12 0 0 1 12-12" stroke="#0DBA77" strokeWidth="4" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 80;60 80" dur="2s" repeatCount="indefinite" />
        </path>
        <circle cx="155" cy="105" r="4" fill="#3B63F6" opacity="0.5">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      <g fill="currentColor" opacity="0.2">
        <circle cx="40" cy="140" r="4">
          <animate attributeName="cy" values="140;130;140" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="205" cy="50" r="5">
          <animate attributeName="cy" values="50;60;50" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

/** Elegant SVG loading spinner — morphing dual ring */
export function LoadingSpinner({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-label="Loading" role="status" className={className}>
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeOpacity="0.15" strokeWidth="4" />
      <circle cx="20" cy="20" r="16" stroke="url(#loader-g)" strokeWidth="4" strokeLinecap="round" strokeDasharray="70 40">
        <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite" />
      </circle>
      <defs>
        <linearGradient id="loader-g" x1="4" y1="4" x2="36" y2="36">
          <stop stopColor="#3B63F6" />
          <stop offset="1" stopColor="#0DBA77" />
        </linearGradient>
      </defs>
    </svg>
  );
}
