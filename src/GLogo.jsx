const G_PATH = 'M 168 86 A 48 48 0 1 0 168 154 L 138 154 L 138 124 L 162 124'

export function GLogoSmall({ size = 32 }) {
  return (
    <svg viewBox="0 0 240 240" width={size} height={size}>
      <circle cx="120" cy="120" r="108" fill="none" stroke="#F5B700" strokeWidth="6" strokeDasharray="200 80" strokeDashoffset="40" />
      <circle cx="228" cy="120" r="6" fill="#F5B700" />
      <path d={G_PATH} fill="none" stroke="#F5B700" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
