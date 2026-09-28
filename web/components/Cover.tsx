import type { CoverKind } from "@/lib/content";

const FOREST = "#162B22";
const BRASS = "#A38A52";

/** Deterministic pseudo-random sequence, so a card draws the same pattern every render. */
function seeded(seed: number) {
  let r = seed * 9301 + 49297;
  return () => (r = (r * 9301 + 49297) % 233280) / 233280;
}

/*
  Abstract cover art standing in for real images (decorative, no data).
  Seeded so the same card always draws the same pattern on server and client.
*/
export function Cover({ kind, seed }: { kind: CoverKind; seed: number }) {
  const rand = seeded(seed);
  let art: React.ReactNode;

  if (kind === "lines") {
    const hi = Math.floor(rand() * 7);
    art = Array.from({ length: 7 }, (_, i) => {
      const w = 80 + rand() * 240;
      return <rect key={i} x="40" y={34 + i * 20} width={i === hi ? Math.min(w + 60, 320) : w} height="5" rx="2.5" fill={i === hi ? BRASS : FOREST} opacity={i === hi ? 0.9 : 0.12} />;
    });
  } else if (kind === "dots") {
    const cx = 120 + rand() * 180;
    const cy = 60 + rand() * 80;
    const dots = [];
    for (let x = 30; x < 400; x += 22)
      for (let y = 24; y < 200; y += 22) {
        const d = Math.hypot(x - cx, y - cy);
        const near = d < 60;
        dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={near ? 3 : 1.5} fill={near ? BRASS : FOREST} opacity={near ? 0.95 - d / 120 : 0.15} />);
      }
    art = dots;
  } else {
    const pts = Array.from({ length: 9 }, (_, i) => [30 + i * 43, Math.max(30, 150 - i * (8 + rand() * 6) + (rand() - 0.5) * 30)]);
    const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const [lx, ly] = pts[8];
    art = (
      <>
        {[60, 100, 140, 180].map((y) => (
          <line key={y} x1="0" x2="400" y1={y} y2={y} stroke={FOREST} strokeOpacity=".08" />
        ))}
        <path d={`${d} L${lx},200 L30,200 Z`} fill={FOREST} opacity=".05" />
        <path d={d} fill="none" stroke={FOREST} strokeWidth="2" strokeLinejoin="round" />
        <circle cx={lx} cy={ly} r="5" fill="#fff" stroke={BRASS} strokeWidth="2.5" />
      </>
    );
  }

  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="block h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" aria-hidden="true">
      {art}
    </svg>
  );
}
