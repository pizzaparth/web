export default function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Relay arcs */}
      <path
        d="M6 16a10 10 0 0 1 20 0"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M9 16a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.75"
      />
      {/* Sine wave */}
      <path
        d="M4 20c3-4 6 4 9 0s6 4 9 0s3-2 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Two dots */}
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      <circle cx="20" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
