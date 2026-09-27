export function Trace({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`block h-3 w-full text-copper ${className}`}
      viewBox="0 0 1200 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 6 H140 V2 H320 V10 H520 V4 H760 V9 H980 V6 H1200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
