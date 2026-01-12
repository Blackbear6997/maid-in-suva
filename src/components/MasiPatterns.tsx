interface PatternProps {
  opacity?: number;
  color?: string;
  className?: string;
}

// Traditional masi grid pattern - rectangles with cross lines
export function MasiGridPattern({
  opacity = 0.04,
  color = "#8B5A2B",
  className = "",
}: PatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="masi-grid"
          patternUnits="userSpaceOnUse"
          width="60"
          height="60"
        >
          <rect
            width="60"
            height="60"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
          />
          <line x1="0" y1="30" x2="60" y2="30" stroke={color} strokeWidth="0.5" />
          <line x1="30" y1="0" x2="30" y2="60" stroke={color} strokeWidth="0.5" />
          <line x1="0" y1="0" x2="60" y2="60" stroke={color} strokeWidth="0.3" />
          <line x1="60" y1="0" x2="0" y2="60" stroke={color} strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#masi-grid)" opacity={opacity} />
    </svg>
  );
}

// Diamond/geometric pattern inspired by masi motifs
export function MasiDiamondPattern({
  opacity = 0.05,
  color = "#8B5A2B",
  className = "",
}: PatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="masi-diamond"
          patternUnits="userSpaceOnUse"
          width="40"
          height="40"
        >
          <path
            d="M20 0 L40 20 L20 40 L0 20 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
          />
          <circle cx="20" cy="20" r="3" fill="none" stroke={color} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#masi-diamond)" opacity={opacity} />
    </svg>
  );
}

// Triangular border pattern for decorative elements
export function MasiTriangleBorder({
  opacity = 0.15,
  color = "#8B5A2B",
  className = "",
}: PatternProps) {
  return (
    <svg
      className={`w-full h-4 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="masi-triangle"
          patternUnits="userSpaceOnUse"
          width="16"
          height="16"
        >
          <polygon points="8,0 16,16 0,16" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#masi-triangle)" opacity={opacity} />
    </svg>
  );
}

// Wave pattern inspired by ocean motifs in masi
export function MasiWavePattern({
  opacity = 0.06,
  color = "#8B5A2B",
  className = "",
}: PatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="masi-wave"
          patternUnits="userSpaceOnUse"
          width="100"
          height="20"
        >
          <path
            d="M0 10 Q25 0, 50 10 T100 10"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#masi-wave)" opacity={opacity} />
    </svg>
  );
}

// Section divider with masi-inspired geometric pattern
export function MasiDivider({
  color = "#8B5A2B",
  className = "",
}: Omit<PatternProps, "opacity">) {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-current to-transparent" style={{ color }} />
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="20" stroke={color} strokeWidth="1" fill="none" />
        <line x1="10" y1="10" x2="30" y2="30" stroke={color} strokeWidth="0.5" />
        <line x1="30" y1="10" x2="10" y2="30" stroke={color} strokeWidth="0.5" />
        <circle cx="20" cy="20" r="4" stroke={color} strokeWidth="0.5" fill="none" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-current via-current to-transparent" style={{ color }} />
    </div>
  );
}

// Decorative corner element
export function MasiCorner({
  color = "#8B5A2B",
  className = "",
  position = "top-left",
}: Omit<PatternProps, "opacity"> & { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotations[position]} ${className}`}
    >
      <path d="M0 0 L60 0 L60 10 L10 10 L10 60 L0 60 Z" fill={color} opacity="0.1" />
      <line x1="0" y1="0" x2="60" y2="60" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <rect x="0" y="0" width="20" height="20" stroke={color} strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
