"use client";

import { useState } from "react";

export default function CuriousCat() {
  const [reaching, setReaching] = useState(false);

  return (
    <button
      type="button"
      className={`curious-cat ${reaching ? "is-reaching" : ""}`}
      aria-label="Jugar con el gato y su estrella"
      aria-pressed={reaching}
      onClick={() => setReaching(!reaching)}
    >
      <svg viewBox="0 0 180 150" fill="none" aria-hidden="true">
        <ellipse cx="85" cy="134" rx="48" ry="6" fill="currentColor" opacity=".06" />
        <path d="M35 134h104" stroke="currentColor" strokeOpacity=".35" strokeDasharray="2 5" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="cat-tail" d="M76 128c-22 8-39-3-36-17 2-11 13-9 12-2-.6 5-6 5-6 1" />
          <path d="M78 79c-11 10-17 28-13 43 1 5 7 8 13 8h25c4 0 5-6 1-8l-8-2c2-10 2-20-1-29" />
          <path d="M83 96c-3 9-4 21-2 31m9-27c-1 9 0 19 3 25" />
          <path d="m72 63-2-20 15 10c4-1 8-1 12 0l13-12-1 23c3 4 3 10 0 15-5 9-24 12-33 4-6-5-7-14-4-20Z" />
          <path d="m76 54 4 3m22-3-4 4" strokeOpacity=".5" />
          <g className="cat-eyes"><path d="m80 67 2 1m16-2 2-1" strokeWidth="3" /></g>
          <path d="m89 72 3 0-1.5 2Z" fill="currentColor" strokeWidth="1" />
          <path d="M90.5 74v3m0 0-3 1m3-1 3 1M77 74l-13-2m13 6-12 2m37-7 14-3m-13 7 13 1" strokeWidth="1.2" />
          <path className="cat-paw" d="M99 95c8-5 13-13 17-23 2-5 8-3 7 2-2 14-9 27-20 33" />
        </g>
        <g className="cat-star" fill="currentColor">
          <path d="M131 13c0 14-4 19-16 21 12 2 16 7 16 21 2-14 6-19 18-21-12-2-16-7-18-21Z" />
          <circle cx="151" cy="65" r="1.5" opacity=".6" />
          <circle cx="111" cy="15" r="1" opacity=".6" />
        </g>
      </svg>
    </button>
  );
}
