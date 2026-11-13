type CelestialArtProps = { variant: "observatory" | "planet" | "research" };

/** Decorative diagrams share the geometry of the page's constellation. */
export default function CelestialArt({ variant }: CelestialArtProps) {
  return (
    <div className={`celestial-art celestial-${variant}`} style={{ position: "absolute", pointerEvents: "none" }} aria-hidden="true">
      <svg viewBox="0 0 320 320" width="320" height="320" fill="none" style={{ maxWidth: "100%" }}>
        <defs>
          <radialGradient id={`planet-light-${variant}`} cx="28%" cy="23%" r="80%"><stop stopColor="#e4f6bb" /><stop offset=".3" stopColor="#9bb367" /><stop offset=".64" stopColor="#485b2c" /><stop offset="1" stopColor="#10160b" /></radialGradient>
          <radialGradient id={`planet-halo-${variant}`}><stop stopColor="#bdfb1f" stopOpacity=".17" /><stop offset="1" stopColor="#bdfb1f" stopOpacity="0" /></radialGradient>
          <linearGradient id={`ring-light-${variant}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d3e2ab" stopOpacity=".15" /><stop offset=".45" stopColor="#b5d47a" stopOpacity=".8" /><stop offset="1" stopColor="#657f36" stopOpacity=".15" /></linearGradient>
          <clipPath id={`planet-clip-${variant}`}><circle cx="160" cy="160" r="55" /></clipPath>
        </defs>
        {variant === "observatory" && <>
          <circle cx="160" cy="160" r="152" stroke="currentColor" strokeOpacity=".23" strokeDasharray="1 9" />
          <g stroke="currentColor" strokeOpacity=".45" strokeWidth=".8">
            {Array.from({ length: 24 }, (_, i) => <path key={i} d={`M160 8v${i % 3 === 0 ? 12 : 5}`} transform={`rotate(${i * 15} 160 160)`} />)}
          </g>
          <path d="M160 0v22m0 276v22M0 160h22m276 0h22" stroke="currentColor" strokeOpacity=".5" />
          <g className="observatory-satellite"><circle cx="160" cy="8" r="3" fill="currentColor" /><circle cx="160" cy="8" r="7" stroke="currentColor" strokeOpacity=".3" /></g>
        </>}
        {variant === "planet" && <>
          <circle cx="160" cy="160" r="146" fill={`url(#planet-halo-${variant})`} />
          <g transform="rotate(-28 160 160)">{Array.from({ length: 12 }, (_, i) => <ellipse key={i} cx="160" cy="160" rx={88 + i * 3} ry={23 + i * .9} stroke={`url(#ring-light-${variant})`} strokeWidth={i % 3 === 0 ? 1.8 : .6} />)}</g>
          <circle cx="160" cy="160" r="55" fill={`url(#planet-light-${variant})`} stroke="#dbefb1" strokeOpacity=".4" strokeWidth=".6" />
          <g clipPath={`url(#planet-clip-${variant})`} transform="rotate(-28 160 160)" stroke="#d8e5ac" fill="none">{Array.from({length: 17}, (_, i) => <path key={i} d={`M98 ${115+i*6} Q160 ${130+i*6} 222 ${115+i*6}`} strokeOpacity={i%3===0 ? .16 : .07} strokeWidth={i%4===0 ? 3 : 1} />)}</g>
          <g transform="rotate(-28 160 160)">{Array.from({length: 12}, (_,i) => <path key={i} d={`M${160-(88+i*3)} 160 A${88+i*3} ${23+i*.9} 0 0 0 ${160+88+i*3} 160`} stroke={`url(#ring-light-${variant})`} strokeWidth={i%3===0 ? 1.8 : .6} />)}</g>
          <path d="M253 66v16m-8-8h16M72 236v10m-5-5h10" stroke="currentColor" strokeOpacity=".5" />
          <circle cx="66" cy="93" r="2" fill="currentColor" />
          <circle cx="256" cy="221" r="1.5" fill="currentColor" fillOpacity=".6" />
        </>}
        {variant === "research" && <>
          <circle cx="160" cy="160" r="140" fill={`url(#planet-halo-${variant})`} />
          <g stroke="currentColor" strokeOpacity=".3">{Array.from({length:60},(_,i)=><path key={i} d={`M160 36v${i%5===0?7:2}`} transform={`rotate(${i*6} 160 160)`} />)}</g>
          <circle cx="160" cy="160" r="105" stroke="currentColor" strokeOpacity=".13" />
          <circle cx="160" cy="160" r="73" stroke="currentColor" strokeOpacity=".22" strokeDasharray="2 7" />
          <path d="M160 39v28m0 186v28M39 160h28m186 0h28" stroke="currentColor" strokeOpacity=".35" />
          <path d="m84 183 53-85 73 42 29 86-100-20-55-23Z" stroke="currentColor" strokeOpacity=".4" />
          <path d="m137 98 2 108 71-66m-71 66 21-46" stroke="currentColor" strokeOpacity=".2" strokeDasharray="3 5" />
          {[[84,183],[137,98],[210,140],[239,226],[139,206]].map(([cx,cy],i) => <g key={i}><circle cx={cx} cy={cy} r="3" fill="currentColor" /><circle cx={cx} cy={cy} r="8" stroke="currentColor" strokeOpacity=".2" /></g>)}
          <circle className="research-sweep" cx="160" cy="160" r="105" stroke="currentColor" strokeOpacity=".55" strokeDasharray="24 636" />
        </>}
      </svg>
    </div>
  );
}
