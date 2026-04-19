export function GLogoSmall({ size = 32 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none" shapeRendering="geometricPrecision">
      {/* Outer C — large arc, gap on the right (~90° opening) */}
      <path
        d="M 76.9 23.1 A 38 38 0 1 0 76.9 76.9"
        stroke="#F5B700"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Inner G — arc ending at 3-o'clock, with horizontal shelf and short downstroke */}
      <path
        d="M 66.3 33.7 A 23 23 0 1 0 73 50 L 54 50 L 54 61"
        stroke="#F5B700"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
