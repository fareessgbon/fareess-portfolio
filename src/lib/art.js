// "Data Bloom" — a generative plate for each project, in the spirit of Refik
// Anadol's data-sculpture work (Melting Memories): a dense field of flowing
// strands driven by seeded pseudo-noise, an ambient glow core, sensor-like
// particles, and thin scan glitches, all reduced to static, dependency-free
// SVG. Every mark is derived deterministically from the project's own
// metadata (id, title, start date, tags), so a project always renders the
// same plate, and no two projects render the same one.

export function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A cheap, deterministic stand-in for curl noise: three summed sine waves at
// incommensurate frequencies, seeded by phase. Smooth, organic, no lookup
// tables, no runtime cost beyond a handful of Math.sin calls per sample.
function noise1d(x, phase) {
  return (
    Math.sin(x * 0.021 + phase) * 0.5 +
    Math.sin(x * 0.047 + phase * 1.7) * 0.3 +
    Math.sin(x * 0.0093 + phase * 3.1) * 0.2
  );
}

// Bell-shaped envelope so strands are calm at the bleed edges and turbulent
// through the center, the way Melting Memories' data-mass blooms outward
// from a core rather than filling the frame uniformly.
function bloom(x, width) {
  const t = Math.min(1, Math.max(0, x / width));
  return Math.sin(Math.PI * t);
}

const GOLD = ['#c9a04e', '#8a6423'];
const CHAMPAGNE = ['#ecd9a8', '#b98d3d'];
const BRONZE = ['#a1703a', '#6b4518'];
const BLUSH = ['#d9a58f', '#a86450'];
const HERO = '#f7ead0'; // the bright, near-white streaks that read as data flares

const FAMS = {
  design: { hues: [BLUSH, CHAMPAGNE, GOLD], count: 42, amp: [30, 64], freq: [0.7, 1.4], weight: [0.4, 0.95], grid: false },
  data: { hues: [GOLD, BRONZE, CHAMPAGNE], count: 68, amp: [10, 28], freq: [1.3, 2.7], weight: [0.28, 0.7], grid: true },
  ops: { hues: [BRONZE, GOLD, BLUSH], count: 56, amp: [14, 32], freq: [1.0, 1.9], weight: [0.32, 0.8], grid: false },
};

export function familyFor(tags) {
  if (tags.includes('data') || tags.includes('code')) return 'data';
  if (tags.includes('ops')) return 'ops';
  return 'design';
}

const W = 600;
const H = 400;

export function artFor(entry) {
  const { title, start, tags } = entry.data;
  const seed = fnv1a(`${entry.id}·${title}·${start}·${tags.join(',')}`);
  const rng = mulberry32(seed);
  const family = familyFor(tags);
  const conf = FAMS[family];
  const p = `a${seed % 1000000}`;

  let defs = '';
  let body = '';

  // Ground: a warm near-black vignette, the "screen" the data plays across.
  defs += `<radialGradient id="${p}-bg" cx="${(38 + rng() * 24).toFixed(0)}%" cy="${(38 + rng() * 24).toFixed(0)}%" r="75%"><stop offset="0%" stop-color="#231a0d"/><stop offset="55%" stop-color="#140f08"/><stop offset="100%" stop-color="#0a0704"/></radialGradient>`;
  body += `<rect width="${W}" height="${H}" fill="url(#${p}-bg)"/>`;

  // Ambient glow cores, softly blurred, seeding the bloom's light source.
  defs += `<filter id="${p}-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="${(38 + rng() * 20).toFixed(0)}"/></filter>`;
  const glowCount = 2 + Math.floor(rng() * 2);
  for (let i = 0; i < glowCount; i++) {
    const [c1] = conf.hues[i % conf.hues.length];
    const gx = W * (0.3 + rng() * 0.4);
    const gy = H * (0.3 + rng() * 0.4);
    const gr = 90 + rng() * 90;
    body += `<circle cx="${gx.toFixed(0)}" cy="${gy.toFixed(0)}" r="${gr.toFixed(0)}" fill="${c1}" opacity="${(0.16 + rng() * 0.14).toFixed(2)}" filter="url(#${p}-blur)"/>`;
  }

  // Optional faint data-grid, only for the "data" family: a few hairline
  // horizontal rules suggesting a table or waveform readout beneath the flow.
  if (conf.grid) {
    const rows = 4 + Math.floor(rng() * 3);
    for (let i = 0; i < rows; i++) {
      const gy = (H / (rows + 1)) * (i + 1) + (rng() - 0.5) * 8;
      body += `<line x1="0" y1="${gy.toFixed(1)}" x2="${W}" y2="${gy.toFixed(1)}" stroke="${conf.hues[0][0]}" stroke-width="0.5" opacity="${(0.05 + rng() * 0.05).toFixed(2)}"/>`;
    }
  }

  // The strand field itself: many seeded flow-lines, most faint, a few
  // bright, all bulging through a central bloom envelope.
  const step = 40;
  const strandPts = [];
  for (let i = 0; i < conf.count; i++) {
    const y0 = 24 + (i + 0.5) * ((H - 48) / conf.count) + (rng() - 0.5) * 6;
    const amp = conf.amp[0] + rng() * (conf.amp[1] - conf.amp[0]);
    const freq = conf.freq[0] + rng() * (conf.freq[1] - conf.freq[0]);
    const phase = rng() * Math.PI * 2;
    const isHero = rng() < 0.055;
    const [c1, c2] = conf.hues[Math.floor(rng() * conf.hues.length)];
    const color = isHero ? HERO : rng() < 0.5 ? c1 : c2;
    const weight = isHero ? 1.1 + rng() * 0.5 : conf.weight[0] + rng() * (conf.weight[1] - conf.weight[0]) * 0.5;
    const opacity = isHero ? 0.55 + rng() * 0.4 : 0.06 + rng() * 0.22;

    const pts = [];
    for (let x = -20; x <= W + 20; x += step) {
      const y = y0 + amp * bloom(x, W) * noise1d(x * freq * 0.05, phase);
      pts.push([x, y]);
    }
    strandPts.push(pts);

    let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    const [qx, qy] = pts[1];
    d += ` Q ${qx.toFixed(1)} ${qy.toFixed(1)}, ${((pts[1][0] + pts[2][0]) / 2).toFixed(1)} ${((pts[1][1] + pts[2][1]) / 2).toFixed(1)}`;
    for (let k = 2; k < pts.length; k++) {
      d += ` T ${pts[k][0].toFixed(1)} ${pts[k][1].toFixed(1)}`;
    }
    body += `<path d="${d}" fill="none" stroke="${color}" stroke-width="${weight.toFixed(2)}" opacity="${opacity.toFixed(2)}" stroke-linecap="round"/>`;
  }

  // Sensor particles: bright points sampled from the strand field, each with
  // a soft halo, like the data-points a point-cloud renders on top of.
  const particleCount = 16 + Math.floor(rng() * 14);
  for (let i = 0; i < particleCount; i++) {
    const strand = strandPts[Math.floor(rng() * strandPts.length)];
    const [x, y] = strand[Math.floor(rng() * strand.length)];
    const r = 1 + rng() * 1.8;
    const bright = rng() < 0.3;
    body += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r * 2.4).toFixed(1)}" fill="${bright ? HERO : conf.hues[0][0]}" opacity="${(0.05 + rng() * 0.06).toFixed(2)}"/>`;
    body += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${bright ? HERO : conf.hues[0][0]}" opacity="${(bright ? 0.55 : 0.3) + rng() * 0.25}"/>`;
  }

  // Scan glitches: thin horizontal flares that fade at both ends, the
  // read-out artifacts of a system rendering the field in real time.
  defs += `<linearGradient id="${p}-scan" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${HERO}" stop-opacity="0"/><stop offset="50%" stop-color="${HERO}" stop-opacity="0.55"/><stop offset="100%" stop-color="${HERO}" stop-opacity="0"/></linearGradient>`;
  const scans = 2 + Math.floor(rng() * 3);
  for (let i = 0; i < scans; i++) {
    const sy = 20 + rng() * (H - 40);
    const sw = W * (0.3 + rng() * 0.45);
    const sx = rng() * (W - sw);
    body += `<rect x="${sx.toFixed(0)}" y="${sy.toFixed(1)}" width="${sw.toFixed(0)}" height="${(0.6 + rng() * 0.6).toFixed(2)}" fill="url(#${p}-scan)" opacity="${(0.18 + rng() * 0.16).toFixed(2)}"/>`;
  }

  // Fine grain so the dark ground and glows never band on real displays.
  defs += `<filter id="${p}-n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>`;
  body += `<rect width="${W}" height="${H}" filter="url(#${p}-n)" opacity="0.05"/>`;

  const svg = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Generative data plate for ${title}, seeded from its own metadata"><defs>${defs}</defs>${body}</svg>`;
  return { svg, seed, family };
}
