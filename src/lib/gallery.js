// Real Hush Jewels imagery, hand-tagged. These are the founder's own product
// and brand shots, so they anchor the "feed" and all thread back to the Hush
// Jewels case study.

export const photos = [
  { src: '/photos/mixed_gold_jewelry_flat_lay.jpg', alt: 'A flat lay of gold hoops, pearl earrings, and charms on cream linen', tag: 'Hush Jewels' },
  { src: '/photos/gold_hoop_earrings.jpg', alt: 'A pair of chunky gold hoop earrings', tag: 'Product' },
  { src: '/photos/gold_chain_necklace_sunglasses.jpg', alt: 'A gold chain necklace styled with sunglasses', tag: 'Campaign' },
  { src: '/photos/gold_pendant_necklace_with_charm.jpg', alt: 'A gold pendant necklace with a charm', tag: 'Product' },
  { src: '/photos/gold_curb_chain_necklace.jpg', alt: 'A gold curb chain necklace on fabric', tag: 'Product' },
  { src: '/photos/gold_padlock_charm_earrings.jpg', alt: 'Gold padlock charm earrings', tag: 'Product' },
  { src: '/photos/gold_pearl_drop_hoop_earrings.jpg', alt: 'Gold hoop earrings with pearl drops', tag: 'Product' },
  { src: '/photos/gold_chain_link_bracelet.jpg', alt: 'A gold chain link bracelet', tag: 'Product' },
  { src: '/photos/pearl_beaded_gold_bar_necklace.jpg', alt: 'A pearl-beaded gold bar necklace', tag: 'Product' },
  { src: '/photos/gold_jewelry_on_white_tray.jpg', alt: 'Gold jewelry arranged on a white tray', tag: 'Styling' },
  { src: '/photos/gold_hoop_earring_closeup.jpg', alt: 'A close-up of a gold hoop earring', tag: 'Detail' },
  { src: '/photos/gold_hoops_inspiration_board.jpg', alt: 'An inspiration board of gold hoop earrings', tag: 'Moodboard' },
];

// Split so the same photo never appears twice across the whole site: Home
// and Explore each get a disjoint slice of the pool.
export const homePhotos = [photos[0], photos[1], photos[2], photos[3], photos[5], photos[6], photos[8]];
export const explorePhotos = [photos[4], photos[7], photos[9], photos[10], photos[11]];

export const avatar = '/photos/me.jpg';

// The heart lockup (from the provided heart.svg), reused for likes and bursts.
export const HEART =
  '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

// Text + stat "pins" that give the board Pinterest-style variety, the way
// her real grid mixes product shots with type cards.
export const textTiles = [
  { kind: 'quote', theme: 'gold', big: 'I still have the original Hush Jewels order spreadsheet from 2020, and I check it more than I probably need to.', small: 'A confession' },
  { kind: 'stat', theme: 'ink', value: '2020', label: 'Founder since', note: 'Hush Jewels' },
  { kind: 'quote', theme: 'cream', big: 'A nurse changes one shift. A well-built system changes every shift after it.', small: 'A working theory' },
  { kind: 'stat', theme: 'gold', value: 'Vogue', label: 'Featured in', note: 'British Vogue · Jewelry Designer Profile' },
  { kind: 'quote', theme: 'ink', big: 'Most weeks it was Excel, Instagram insights, and a lot of squinting at conversion numbers before a campaign went out.', small: 'What running Hush Jewels actually looked like' },
  { kind: 'stat', theme: 'cream', value: "'27", label: 'UVic', note: 'B.Sc. Health Information Science + CS' },
];

// Story highlights. Icons (not initials) so nothing reads as a stray letter.
export const highlights = [
  {
    id: 'design', label: 'Design',
    icon: '<path d="M4 20l4.4-1L18 9.4a2.1 2.1 0 0 0-3-3L5.4 16 4 20z"/><path d="M13.4 8 16 10.6"/>',
    slides: [
      { theme: 'gold', kicker: 'Design', title: 'Interfaces that feel like care.', body: 'From a glucose-monitoring prototype to full brand systems, I design for clarity first and polish second.' },
      { theme: 'ink', kicker: 'Tools', title: 'Figma, Visual Paradigm, Canva.', body: 'Wireframes, design systems, and campaign graphics, produced end to end.' },
    ],
  },
  {
    id: 'data', label: 'Data',
    icon: '<path d="M4 4v16h16"/><path d="M8 15l3-4 3 2 4-6"/>',
    slides: [
      { theme: 'ink', kicker: 'Data', title: 'Decisions grounded in the record.', body: 'Four years running Hush Jewels taught me to read audience and sales data honestly, then act on it.' },
      { theme: 'gold', kicker: 'Tools', title: 'SQL, Oracle, Tableau, Excel.', body: 'Comfortable from the query to the dashboard to the readout.' },
    ],
  },
  {
    id: 'ops', label: 'Ops',
    icon: '<path d="M4 7l2 2 3-3"/><path d="M4 17l2 2 3-3"/><path d="M13 8h7"/><path d="M13 18h7"/>',
    slides: [
      { theme: 'cream', kicker: 'Operations', title: 'Systems a stranger could run.', body: 'As Community Events Director for WECS, I build pipelines that make good events repeatable.' },
    ],
  },
  {
    id: 'health', label: 'Health',
    icon: '<path d="M3 12h4l2 5 4-10 2 5h6"/>',
    slides: [
      { theme: 'gold', kicker: 'Health information', title: 'The unglamorous middle layer.', body: "Not the app a patient taps, not the machine at bedside. The record in between that has to be right, or the other two don't matter." },
    ],
  },
  {
    id: 'press', label: 'Vogue',
    icon: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',
    slides: [
      { theme: 'ink', kicker: 'Recognition', title: 'British Vogue.', body: 'Hush Jewels was selected for British Vogue’s Jewelry Designer Profile.' },
    ],
  },
  {
    id: 'hello', label: 'Contact',
    icon: '<rect x="4" y="6" width="16" height="12" rx="1.6"/><path d="m4 7.5 8 6 8-6"/>',
    slides: [
      { theme: 'gold', kicker: 'Get in touch', title: 'Let’s talk.', body: 'Open to health information, data, and operations roles in biotech and health tech.', cta: { label: 'Copy my email', email: 'hello@fareess.ca' } },
    ],
  },
];
