export default function ConstellationTrail() {
  return (
    <div className="constellation-trail" aria-hidden="true">
      <div className="starfield">
        {Array.from({ length: 64 }, (_, index) => <span
          key={index}
          className={index % 9 === 0 ? "field-star is-bright" : "field-star"}
          style={{ left: `${(index * 37 + 11) % 100}%`, top: `${(index * 23 + 3) % 100}%`, animationDelay: `${index % 7 * -.8}s` }}
        />)}
      </div>
      {[
        {name: "north", points: [[28,105],[65,49],[114,76],[146,29],[191,60],[232,18],[272,98],[203,139],[146,170],[86,154],[39,211]], lines: "M28 105 65 49 114 76 146 29 191 60 232 18M114 76 146 170 203 139 272 98 191 60M146 170 86 154 39 211"},
        {name: "east", points: [[24,66],[77,31],[130,82],[182,58],[260,97],[224,168],[152,190],[89,155],[48,212]], lines: "M24 66 77 31 130 82 182 58 260 97 224 168 152 190 89 155 130 82M89 155 48 212"},
        {name: "south", points: [[23,117],[71,57],[121,89],[171,30],[215,67],[269,42],[247,151],[189,198],[113,174],[62,217]], lines: "M23 117 71 57 121 89 171 30 215 67 269 42M215 67 247 151 189 198 113 174 121 89M113 174 62 217"}
      ].map(({name, points, lines}) => <div key={name} className={`star-cluster cluster-${name}`} style={{position:"absolute",pointerEvents:"none"}}>
        <svg viewBox="0 0 300 240" width="300" height="240" fill="none" style={{maxWidth:"100%"}}>
          <defs><radialGradient id={`star-glow-${name}`}><stop stopColor="#e3f8be" stopOpacity=".55"/><stop offset="1" stopColor="#bdfb1f" stopOpacity="0"/></radialGradient></defs>
          <path d={lines} stroke="#9ab876" strokeOpacity=".45" strokeWidth=".7" />
          {points.map(([cx,cy],i)=><g key={i}>
            <circle cx={cx} cy={cy} r={i%3===0?13:6} fill={`url(#star-glow-${name})`} />
            <circle cx={cx} cy={cy} r={i%3===0?2.5:1.3} fill={i%3===0?"#f1f8df":"#9aae80"} />
            {i%3===0 && <path d={`M${cx-6} ${cy}h12m-6-6v12`} stroke="#e9f7d2" strokeOpacity=".65" strokeWidth=".6" />}
          </g>)}
          {Array.from({length:32},(_,i)=><circle key={i} cx={(i*71+17)%300} cy={(i*37+8)%240} r={i%4===0?.8:.4} fill="#d6e3c2" opacity={.2+i%3*.1}/>)}
        </svg>
      </div>)}
      <svg viewBox="0 0 1100 3000" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="trail-color" x1="0" y1="0" x2="900" y2="3000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#bdfb1f" stopOpacity=".65" />
            <stop offset=".48" stopColor="#bdfb1f" stopOpacity=".25" />
            <stop offset="1" stopColor="#bdfb1f" stopOpacity=".6" />
          </linearGradient>
          <path id="journey-path" d="M-50 130 C200 65 500 310 775 225 S1150 590 740 655 S-90 840 140 1190 S1070 1490 930 1790 S-120 2240 110 2530 S650 2840 590 3050" />
        </defs>
        <use href="#journey-path" stroke="#bdfb1f" strokeWidth="14" opacity=".025" />
        <use href="#journey-path" stroke="#bdfb1f" strokeWidth="6" opacity=".05" />
        <use href="#journey-path" stroke="url(#trail-color)" strokeWidth="1.6" strokeDasharray="5 6" className="journey-dashes" />
        <g stroke="#bdfb1f" strokeWidth=".7" strokeDasharray="2 5" opacity=".25">
          <path d="m0 160 100-80m620 170 210-160M85 1010l160 120m660 540-100-120M95 2460l-100 80" />
        </g>
        <g fill="#bdfb1f" className="trail-stars">
          <path d="M930 80q0 10-10 10 10 0 10 10 0-10 10-10-10 0-10-10Z" />
          <path d="M100 1000q0 9-9 9 9 0 9 9 0-9 9-9-9 0-9-9Z" />
          <path d="M805 1540q0 10-10 10 10 0 10 10 0-10 10-10-10 0-10-10Z" />
          <path d="M95 2450q0 10-10 10 10 0 10 10 0-10 10-10-10 0-10-10Z" />
        </g>
      </svg>
    </div>
  );
}
