import styles from "./celestial-art.module.css";

type CelestialArtProps = { variant: "observatory" | "research" };

/** Decorative diagrams share the geometry of the page's constellation. */
export default function CelestialArt({ variant }: CelestialArtProps) {
  return (
    <div
      className={`celestial-art celestial-${variant} ${styles.root}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 320 320" width="320" height="320" fill="none">
        <defs>
          <radialGradient id={`planet-halo-${variant}`}>
            <stop stopColor="var(--accent)" stopOpacity=".17" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {variant === "observatory" && (
          <>
            <circle
              cx="160"
              cy="160"
              r="152"
              stroke="currentColor"
              strokeOpacity=".23"
              strokeDasharray="1 9"
            />
            <g stroke="currentColor" strokeOpacity=".45" strokeWidth=".8">
              {Array.from({ length: 24 }, (_, i) => (
                <path
                  key={i}
                  d={`M160 8v${i % 3 === 0 ? 12 : 5}`}
                  transform={`rotate(${i * 15} 160 160)`}
                />
              ))}
            </g>
            <path
              d="M160 0v22m0 276v22M0 160h22m276 0h22"
              stroke="currentColor"
              strokeOpacity=".5"
            />
            <g className="observatory-satellite">
              <circle cx="160" cy="8" r="3" fill="currentColor" />
              <circle
                cx="160"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeOpacity=".3"
              />
            </g>
          </>
        )}
        {variant === "research" && (
          <>
            <circle
              cx="160"
              cy="160"
              r="140"
              fill={`url(#planet-halo-${variant})`}
            />
            <g stroke="currentColor" strokeOpacity=".3">
              {Array.from({ length: 60 }, (_, i) => (
                <path
                  key={i}
                  d={`M160 36v${i % 5 === 0 ? 7 : 2}`}
                  transform={`rotate(${i * 6} 160 160)`}
                />
              ))}
            </g>
            <circle
              cx="160"
              cy="160"
              r="105"
              stroke="currentColor"
              strokeOpacity=".13"
            />
            <circle
              cx="160"
              cy="160"
              r="73"
              stroke="currentColor"
              strokeOpacity=".22"
              strokeDasharray="2 7"
            />
            <path
              d="M160 39v28m0 186v28M39 160h28m186 0h28"
              stroke="currentColor"
              strokeOpacity=".35"
            />
            <path
              d="m84 183 53-85 73 42 29 86-100-20-55-23Z"
              stroke="currentColor"
              strokeOpacity=".4"
            />
            <path
              d="m137 98 2 108 71-66m-71 66 21-46"
              stroke="currentColor"
              strokeOpacity=".2"
              strokeDasharray="3 5"
            />
            {[
              [84, 183],
              [137, 98],
              [210, 140],
              [239, 226],
              [139, 206],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="3" fill="currentColor" />
                <circle
                  cx={cx}
                  cy={cy}
                  r="8"
                  stroke="currentColor"
                  strokeOpacity=".2"
                />
              </g>
            ))}
            <circle
              className="research-sweep"
              cx="160"
              cy="160"
              r="105"
              stroke="currentColor"
              strokeOpacity=".55"
              strokeDasharray="24 636"
            />
          </>
        )}
      </svg>
    </div>
  );
}
