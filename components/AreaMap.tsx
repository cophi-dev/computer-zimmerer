export function AreaMap() {
  return (
    <figure className="min-w-0">
      <svg
        viewBox="0 0 560 520"
        role="img"
        aria-labelledby="lage-titel lage-text"
        className="h-auto w-full"
      >
        <title id="lage-titel">Lage von Hannesried 37</title>
        <desc id="lage-text">
          Hannesried liegt knapp nördlich von Tiefenbach. Schönau liegt nordöstlich von Hannesried, Weiding
          weiter nördlich. Treffelstein liegt südöstlich von Tiefenbach. Im Osten verläuft die Grenze zu
          Tschechien.
        </desc>
        <rect width="560" height="520" fill="#ebe4d6" />
        <rect x="478" y="18" width="64" height="484" fill="#234237" opacity="0.09" />
        <line x1="478" y1="18" x2="478" y2="502" stroke="#234237" strokeWidth="1.25" strokeDasharray="2 7" />
        <text
          x="512"
          y="270"
          fill="#234237"
          fontSize="15"
          textAnchor="middle"
          transform="rotate(90 512 270)"
          style={{ fontFamily: "var(--font-sans-face), sans-serif" }}
        >
          Tschechien
        </text>

        <path
          d="M196 72 V148 H348 V164 M348 164 V210 H248 V236 M248 236 V360 M248 360 H372 V448"
          fill="none"
          stroke="#b5693c"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <g fill="#234237" style={{ fontFamily: "var(--font-sans-face), sans-serif" }}>
          <circle cx="196" cy="72" r="4.5" />
          <text x="196" y="52" textAnchor="middle" fontSize="16">
            Weiding
          </text>

          <circle cx="348" cy="164" r="4.5" />
          <text x="364" y="160" fontSize="16">
            Schönau
          </text>

          <circle cx="248" cy="360" r="4.5" />
          <text x="92" y="366" fontSize="16">
            Tiefenbach
          </text>

          <circle cx="372" cy="448" r="4.5" />
          <text x="386" y="454" fontSize="16">
            Treffelstein
          </text>
        </g>

        <circle cx="248" cy="236" r="17" fill="none" stroke="#b5693c" strokeWidth="1.7" />
        <circle cx="248" cy="236" r="5.5" fill="#234237" />
        <text
          x="222"
          y="246"
          textAnchor="end"
          fill="#1c2822"
          fontSize="30"
          style={{ fontFamily: "var(--font-display-face), Georgia, serif" }}
        >
          Hannesried 37
        </text>

        <g fill="none" stroke="#234237" strokeWidth="1.4" style={{ fontFamily: "var(--font-sans-face), sans-serif" }}>
          <path d="M48 92 V52 M48 52 L40 62 M48 52 L56 62" />
          <text x="48" y="112" textAnchor="middle" fontSize="13" fill="#234237" stroke="none">
            N
          </text>
        </g>
      </svg>
      <figcaption className="mt-4 max-w-md text-sm leading-6 text-ink-soft">
        Hannesried 37, knapp nördlich von Tiefenbach in der Oberpfalz. Schönau nordöstlich, Weiding weiter
        nördlich, Treffelstein südöstlich von Tiefenbach, im Osten die Grenze zu Tschechien.
      </figcaption>
    </figure>
  );
}
