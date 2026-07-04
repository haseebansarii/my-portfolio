import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

type Pt = { x: number; y: number };
type Sample = { len: number; x: number; y: number };

function buildSmoothPath(pts: Pt[]): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

// BFS through a section's DOM to find the depth with the most
// "significant" child elements (the actual cards / components).
// Returns their centers in wrapper-relative SVG coordinates.
function detectComponentCenters(
  sec: HTMLElement,
  wrapperRect: DOMRect,
  wrapperW: number
): Pt[] {
  let best: HTMLElement[] = [];

  // A significant element: tall enough to be a real card, not a full-width wrapper
  const isSig = (el: HTMLElement) =>
    el.offsetHeight > 60 &&
    el.offsetWidth > 120 &&
    el.offsetWidth < wrapperW * 0.92;

  function bfs(els: HTMLElement[], depth: number) {
    if (depth > 8) return;
    const sig = els.filter(isSig);
    if (sig.length > best.length) best = sig;
    // Continue one more level regardless — grids may be inside wrappers
    const next: HTMLElement[] = [];
    for (const el of els) {
      for (const child of Array.from(el.children) as HTMLElement[]) {
        next.push(child);
      }
    }
    if (next.length < 80) bfs(next, depth + 1);
  }

  bfs(Array.from(sec.children) as HTMLElement[], 0);
  if (best.length < 2) return [];

  // Cap at 6 per section — more would make the path unreadable
  const items = best.slice(0, 6);

  const pts: Pt[] = items.map(el => {
    const r = el.getBoundingClientRect();
    return {
      x: Math.max(
        wrapperW * 0.08,
        Math.min(wrapperW * 0.92, r.left - wrapperRect.left + r.width / 2)
      ),
      // getBoundingClientRect offsets cancel each other, giving wrapper-relative y
      y: r.top - wrapperRect.top + r.height / 2,
    };
  });

  // Reading order: top-to-bottom, left-to-right within the same row
  pts.sort((a, b) => {
    const dy = a.y - b.y;
    if (Math.abs(dy) > 40) return dy;
    return a.x - b.x;
  });

  return pts;
}

export default function ScrollPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const samplesRef = useRef<Sample[]>([]);
  const totalRef = useRef(0);
  const lastPathRef = useRef('');

  const [path, setPath] = useState('');
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [nodes, setNodes] = useState<Pt[]>([]);

  const progress = useMotionValue(0);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const dotOpacity = useMotionValue(0);

  // ── Measure DOM, build the weaving path ──────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    const wrapper = container?.parentElement;
    if (!container || !wrapper) return;

    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = wrapper.offsetWidth;
        const h = wrapper.offsetHeight;
        const sections = Array.from(wrapper.querySelectorAll('section')) as HTMLElement[];
        if (!w || !sections.length) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const pts: Pt[] = [{ x: w / 2, y: 0 }];
        const nodePts: Pt[] = [];

        sections.forEach((sec, i) => {
          const comps = detectComponentCenters(sec, wrapperRect, w);

          if (comps.length >= 2) {
            const first = comps[0];
            const last = comps[comps.length - 1];

            // Gentle approach: come from where we are toward the first component
            pts.push({ x: first.x, y: first.y - 50 });

            comps.forEach(c => {
              pts.push(c);
              nodePts.push(c);
            });

            // Gentle exit toward the next section
            pts.push({ x: last.x, y: last.y + 50 });
          } else {
            // Fallback for sections where detection finds nothing useful:
            // simple left/right alternating pattern
            const sideX = i % 2 === 0 ? w * 0.15 : w * 0.85;
            const secTop = sec.offsetTop;
            const secBot = sec.offsetTop + sec.offsetHeight;
            const inset = Math.min(60, (secBot - secTop) * 0.12);
            const mid = { x: sideX, y: (secTop + secBot) / 2 };
            pts.push({ x: sideX, y: secTop + inset });
            pts.push(mid);
            nodePts.push(mid);
            pts.push({ x: sideX, y: secBot - inset });
          }
        });

        pts.push({ x: w / 2, y: h });

        const next = buildSmoothPath(pts);
        if (next === lastPathRef.current) return;
        lastPathRef.current = next;
        setSize({ w, h });
        setNodes(nodePts);
        setPath(next);
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrapper);
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    const t = window.setTimeout(measure, 800);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
      window.clearTimeout(t);
    };
  }, []);

  // ── Precompute path samples → move indicator to viewport center ──────────
  useEffect(() => {
    const el = trackRef.current;
    const wrapper = containerRef.current?.parentElement;
    if (!el || !wrapper || !path) return;

    const total = el.getTotalLength();
    totalRef.current = total;
    const N = 800;
    const samples: Sample[] = [];
    for (let i = 0; i <= N; i++) {
      const len = (i / N) * total;
      const p = el.getPointAtLength(len);
      samples.push({ len, x: p.x, y: p.y });
    }
    samplesRef.current = samples;

    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const h = rect.height;
      if (h <= 0) return;
      const targetY = window.innerHeight / 2 - rect.top;

      if (targetY <= 0) { progress.set(0); dotOpacity.set(0); return; }
      if (targetY >= h) { progress.set(1); dotOpacity.set(0); return; }

      const s = samplesRef.current;
      let lo = 0, hi = s.length - 1;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (s[mid].y < targetY) lo = mid + 1;
        else hi = mid;
      }
      const b = s[lo];
      const a = s[Math.max(0, lo - 1)];
      let x = b.x, len = b.len;
      if (b.y !== a.y) {
        const f = (targetY - a.y) / (b.y - a.y);
        x = a.x + (b.x - a.x) * f;
        len = a.len + (b.len - a.len) * f;
      }
      dotX.set(x);
      dotY.set(targetY);
      dotOpacity.set(1);
      progress.set(total ? len / total : 0);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [path, dotOpacity, dotX, dotY, progress]);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
    >
      {path && (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient
              id="spGrad" x1="0" y1="0" x2="0"
              gradientUnits="userSpaceOnUse"
              y2={size.h}
            >
              <stop offset="0%"   stopColor="#38bdf8" />
              <stop offset="50%"  stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {/* Dashed track — full route, very faint */}
          <path
            ref={trackRef}
            d={path}
            stroke="#38bdf8"
            strokeOpacity="0.1"
            strokeWidth="1.5"
            strokeDasharray="5 9"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Diamond node at each detected component */}
          {nodes.map((n, i) => (
            <g key={i} transform={`translate(${n.x.toFixed(1)}, ${n.y.toFixed(1)})`}>
              <rect x="-6" y="-6" width="12" height="12" rx="1"
                transform="rotate(45)"
                stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.22" fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <rect x="-3.5" y="-3.5" width="7" height="7" rx="0.5"
                transform="rotate(45)"
                fill="#38bdf8" fillOpacity="0.3"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          ))}

          {/* Bloom layer — wide, very faint */}
          <motion.path d={path} stroke="url(#spGrad)" strokeWidth="22"
            strokeLinecap="round" strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: progress, opacity: 0.06 }}
          />

          {/* Halo layer */}
          <motion.path d={path} stroke="url(#spGrad)" strokeWidth="7"
            strokeLinecap="round" strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: progress, opacity: 0.18 }}
          />

          {/* Core line */}
          <motion.path d={path} stroke="url(#spGrad)" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: progress, opacity: 0.95 }}
          />

          {/* Pulsing ring 1 */}
          <motion.circle cx={dotX} cy={dotY} r="0"
            stroke="#38bdf8" strokeWidth="1" fill="none"
            style={{ opacity: dotOpacity }}
            animate={{ r: [16, 26], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            vectorEffect="non-scaling-stroke"
          />

          {/* Pulsing ring 2 — half-cycle offset */}
          <motion.circle cx={dotX} cy={dotY} r="0"
            stroke="#2dd4bf" strokeWidth="1" fill="none"
            style={{ opacity: dotOpacity }}
            animate={{ r: [12, 22], opacity: [0.4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
            vectorEffect="non-scaling-stroke"
          />

          {/* Static ring */}
          <motion.circle cx={dotX} cy={dotY} r="11"
            stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" fill="none"
            style={{ opacity: dotOpacity }}
            vectorEffect="non-scaling-stroke"
          />

          {/* 4-pointed star + center dot, translated to indicator position */}
          <motion.g style={{ x: dotX, y: dotY, opacity: dotOpacity }}>
            <path
              d="M 0,-8 L 2,-2 L 8,0 L 2,2 L 0,8 L -2,2 L -8,0 L -2,-2 Z"
              fill="#99f6e4"
              opacity="0.9"
            />
            <circle r="2.5" fill="#ffffff" opacity="0.95" />
          </motion.g>
        </svg>
      )}
    </div>
  );
}
