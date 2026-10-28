# Ksan Relay — Visual Style Guide

Reference document for the visual identity and UI/UX conventions of the Ksan Relay website.

---

## 1. Design Philosophy

The site follows a **strict monochrome, data-forward aesthetic** inspired by scientific instrumentation and quantitative research tooling. Every visual decision reinforces credibility, precision, and restraint. There are no decorative colours, no gradients beyond opacity, and no imagery — the only expressive elements are interactive SVG data visualisations (simulated diffusion paths, autocorrelation plots, distribution curves).

Hierarchy is established exclusively through **size, weight, spacing, borders, and white-alpha opacity** — never through grey colour values.

---

## 2. Colour Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#000000` | Page background — pure black |
| `--fg` | `#ffffff` | Primary text, active elements |
| `--fg-2` | `rgba(255,255,255,0.8)` | Secondary copy (leads, body text, descriptions) |
| `--fg-3` | `rgba(255,255,255,0.62)` | Labels, metadata, muted text |
| `--line` | `rgba(255,255,255,0.12)` | Hairline dividers, section borders |
| `--line-2` | `rgba(255,255,255,0.24)` | Stronger dividers, button borders |
| `--line-3` | `rgba(255,255,255,0.45)` | Hover-state decorations, underlines |
| `--glow` | `0 0 18px rgba(255,255,255,0.06)` | Subtle card box-shadow |

Forced `color-scheme: dark`. Text selection inverts to black-on-white. The entire palette is built from white at varying opacity — there are **zero grey hex values** in the design system.

---

## 3. Typography

### Fonts

- **Sans-serif**: [Geist Variable](https://vercel.com/font) (`--font-sans`) — primary typeface for all UI and body text.
- **Monospace**: [JetBrains Mono Variable](https://www.jetbrains.com/lp/mono/) (`--font-mono`) — used for technical labels, figure readouts, code-like notation, and the `.tech-label` utility class.
- **Fallbacks**: Metric-matched via `@font-face` overrides (`ascent-override`, `size-adjust`) so that Arial and Courier New occupy the same space as the web fonts, preventing layout shift on swap.

### Type Scale (Fluid, ~1.25 modular)

All sizes use `clamp()` — no breakpoint jumps.

| Token | Range | Role |
|-------|-------|------|
| `--step--2` | 12 → 13px | Mono labels, fine print |
| `--step--1` | 14 → 15px | Small print, notes, footer links |
| `--step-0` | 17 → 19px | Body text |
| `--step-1` | 19 → 23px | Lead paragraphs, entry titles |
| `--step-2` | 21 → 26px | Card titles, section subheads |
| `--step-3` | 30 → 52px | Section titles |
| `--step-4` | 42 → 80px | Page titles (inner pages) |
| `--step-5` | 38 → 72px | Hero headline |

### Text Styles

- **Headings**: weight 500, tight negative letter-spacing (`-0.04em` hero, `-0.045em` page titles, `-0.035em` section titles). Line heights are compressed (1.0–1.25).
- **Body**: weight 400, line-height 1.55–1.7, `text-wrap: pretty`.
- **Headings**: `text-wrap: balance`.
- **Technical labels** (`.tech-label`): mono, uppercase, `letter-spacing: 0.08em`, `--fg-3` colour. Used for section markers, figure keys, and footer headings.

---

## 4. Layout & Spacing

- **Container**: max-width `1240px`, centred, with fluid gutter `clamp(20px, 4vw, 40px)`.
- **Section spacing**: `clamp(56px, 6vw, 96px)` between major sections.
- **Grid system**: CSS Grid throughout (no framework). Pages use two-column layouts on desktop (text + figure), collapsing to single-column below `1100px`.
- **Safe area insets**: respected via `env(safe-area-inset-*)` for notched devices.
- **Scrollbar gutter**: `stable` to prevent horizontal shift between short and long pages.

### Border Radii

| Token | Value | Usage |
|-------|-------|-------|
| `--r-card` | `8px` (10px on phones) | Cards, figure containers |
| `--r-item` | `16px` | Mobile nav items, nested shapes |
| `--r-panel` | `24px` | Mobile nav panel |
| `--r-pill` | `999px` | Buttons, navbar pill, tags |

Nested elements follow the rule: **inner radius = outer radius − padding** (e.g. panel 24 − 8 = item 16).

---

## 5. Navigation

### Desktop

A **floating pill navbar** fixed at the top, horizontally centred. Frosted-glass effect using `backdrop-filter: blur(12px)` over a semi-transparent black background (`rgba(0,0,0,0.4)`). The pill has a subtle `1px` white-alpha border and an inset top highlight.

- **Scroll-driven opacity**: the pill starts lighter (`rgba(0,0,0,0.15)`) at the top of the page and densifies to `rgba(0,0,0,0.5)` as content scrolls underneath, driven by `animation-timeline: scroll()` (progressive enhancement).
- **Active indicator**: a `rgba(255,255,255,0.11)` background highlight behind the active link, animated between links on page transitions via `view-transition-name: nav-indicator`.
- **Brand**: LogoMark SVG (relay/pulse icon — arcs + sine wave + two dots) + "Ksan Relay" wordmark at weight 550.

### Mobile (≤ 800px)

Desktop links collapse to a hamburger toggle. The toggle icon is two bars that **rotate into an X** driven by `aria-expanded`. The mobile panel is a dense frosted-glass dropdown (`rgba(0,0,0,0.82)`, `backdrop-filter: blur(12px)`, `border-radius: 24px`), with `@starting-style` entry animation (fade + slide up + scale). Closed via Escape, outside click, or navigation.

---

## 6. Components

### Buttons

Two variants:

- **Default** (`.button`): transparent background, `1px` `--line-2` border, pill-shaped. On hover, border brightens and background gains `rgba(255,255,255,0.07)`. Active state: `scale(0.98)`.
- **Primary** (`.button--primary`): solid white background, black text. On hover, fades to `rgba(255,255,255,0.88)`.

Min-height `48px`, weight 500, `nowrap`.

### Cards / Figures

Bordered containers (`1px solid --line`, `--r-card` radius, `--glow` shadow) on a pure black background. Figures include:
- A header row with title + hover readout (readout fades in on pointer interaction).
- SVG plot area with grid lines, axis lines, data paths, and interactive crosshair cursor.
- Optional notation table (key–value pairs).
- Source citation + action buttons (small pill controls).

The **plot path draw animation** (`stroke-dasharray` / `stroke-dashoffset`, 1.6s ease) is the **one exception** to the no-unprompted-motion rule.

### Links

Two link styles only:
- **Inline links** (in prose, notes, footers): underlined with `--line-3` decoration colour, brightening to `--fg` on hover.
- **Navigation links** (navbar, footer): no underline, colour transition `--fg-2` → `--fg` on hover.

External links show a small arrow icon (`↗`) that shifts `translate(1px, -1px)` on hover.

### Sections

Separated by `1px solid --line` top borders. Section titles are large (`--step-3`), weight 500, tight leading.

### Technical Label

Monospace, uppercase, letter-spaced, `--fg-3`. Used as section markers, breadcrumbs, figure metadata keys, and footer headings.

### Dot-Separated Lists

Inline flex lists with a centred `·` separator. The list uses a negative-margin + `clip-path` trick so no line (including after wrapping) starts with a dot.

---

## 7. Motion & Transitions

- **Rule**: transform and opacity only, triggered by user interaction (hover, navigate, open menu). No auto-playing animations except the figure path draw on load.
- **Easing**: `cubic-bezier(0.2, 0, 0, 1)` (`--ease`) for all transitions.
- **Page transitions**: Native View Transitions API via React `<ViewTransition>`. Old page fades out (120ms), new page fades in with a 4px upward slide (180ms, 40ms delay). The nav indicator slides between links (220ms). Browsers without the API swap pages instantly.
- **Mobile menu**: `@starting-style` for entry (fade + translateY(-6px) + scale(0.98) → identity, 160ms). Exit mirrors the entry. Uses `transition: display allow-discrete` to animate to/from `display: none`.
- **Hover interactions**: guarded by `@media (hover: hover)` to avoid sticky states on touch.
- **Reduced motion**: all transitions and animations disabled (`transition-duration: 0ms`, `animation: none`) including view-transition pseudo-elements.

---

## 8. Data Visualisations

Each major page features a unique interactive SVG figure:

- **Home** — "Diffusion paths": simulated Brownian motion (27 paths, 72 Gaussian steps) inside a ±2σ√t envelope. One path highlighted with draw animation. "Resimulate" button re-seeds. Interactive crosshair shows `t` and `X` values.
- **Research** — "Autocorrelation": sample ACF of synthetic returns, with Bartlett confidence bounds. Stem plot with strong/faint stems.
- **About** — "Distribution": probability density / histogram overlay.
- **Open Source** — "Spectrum": power spectral density plot.

All figures share a common `FigureFrame` component with consistent structure: header (title/readout), plot area, notation table, source line, and optional action buttons.

Plot styling is monochrome:
- Grid lines: `rgba(255,255,255,0.07)`
- Axes: `rgba(255,255,255,0.4)`
- Faint paths: `rgba(255,255,255,0.16)`, 0.75px stroke
- Highlighted path: pure white, 2px stroke
- Bars/bands: `rgba(255,255,255,0.05–0.14)`

---

## 9. Background

A fixed **faint measurement grid** (graph-paper effect) covers the viewport:
- `64px × 64px` cells, `rgba(255,255,255,0.03)` lines.
- Fades out via a radial `mask-image` (`ellipse 85% 70% at 50% 25%`) so it is most visible near the top-centre and disappears towards the edges.

This sits at `z-index: 0` behind all content.

---

## 10. Footer

Three-tier footer on pure black:
1. **Top**: brand column (logo + descriptor) on the left, four link columns (Firm, Work, Connect, Legal) on the right. Column headings use `.tech-label` style with a `--line-2` top border.
2. **Legal**: dense fine-print disclaimer in `--step--2` / `--fg-3`.
3. **Base**: copyright + dot-separated activity list (Research · Open Source · Markets).

---

## 11. Responsive Breakpoints

| Breakpoint | Behaviour |
|------------|-----------|
| `> 1100px` | Full two-column layouts, legal pages get a sticky sidebar TOC |
| `≤ 1100px` | Hero, page intros, and footer collapse to single-column. Principles go 2×2 grid |
| `> 1100px, ≤ 860px height` | Hero headline shrinks to keep actions above the fold |
| `≤ 800px` | Navbar links → hamburger + mobile dropdown panel |
| `≤ 640px` | Full single-column stacking. Entry grids, KV tables, contact rows go single-column. Footer nav → 2×2. Card radius increases to 10px. Plot text scales up to 19px |
| `≤ 380px` | Figure notation rows go single-column |

---

## 12. Accessibility

- **Skip link**: hidden off-screen, appears on `:focus-visible` as a white pill.
- **Focus indicator**: `2px solid --fg`, `3px` offset, `4px` radius on all focusable elements.
- **ARIA**: navbar uses `aria-label`, `aria-expanded`, `aria-controls`. Sections use `aria-labelledby`. Figures have descriptive `aria-label` text. Decorative elements carry `aria-hidden="true"`.
- **Touch targets**: minimum 44px on `pointer: coarse` devices.
- **Scroll anchors**: `scroll-margin-top` accounts for fixed navbar height.
- **Prefers-reduced-motion**: fully respected — all motion disabled.
- **Scrollbar**: custom `scrollbar-color` (white-alpha thumb on transparent track).

---

## 13. Performance & Loading

- **Fonts**: self-hosted via `@fontsource-variable` (variable-weight subsets). Metric-matched fallbacks prevent layout shift during `font-display: swap`.
- **No external resources**: no analytics, no cookies, no third-party scripts.
- **SSR/prerendering**: pages are prerendered at build time and hydrated on the client.
- **View transitions**: progressive enhancement — browsers without the API get instant swaps.
- **Scroll-driven animations**: progressive enhancement via `@supports (animation-timeline: scroll())`.
- **Icons**: Lucide React (tree-shaken, only ChevronLeft and ArrowUpRight used).

---

## 14. Key Principles Summary

1. **Pure monochrome** — black and white only, hierarchy through opacity.
2. **No decorative elements** — data visualisations are the sole visual accent.
3. **Fluid everything** — type, spacing, and layout scale smoothly with `clamp()`.
4. **Motion is earned** — only in response to user action, never auto-playing (one exception: path draw).
5. **Progressive enhancement** — view transitions, scroll-driven animations, and backdrop-filter degrade gracefully.
6. **Accessibility first** — ARIA, focus management, reduced motion, touch targets, skip links.
7. **Zero client storage** — no cookies, no localStorage, no analytics. Scroll positions are in-memory only.
