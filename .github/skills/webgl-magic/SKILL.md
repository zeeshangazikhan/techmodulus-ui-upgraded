---
name: webgl-magic
description: "WebGL Magic — premium UI/animation playbook for this Next.js project. USE WHEN: redesigning pages, adding hero animations, scroll effects, 3D tilt/parallax, smooth scroll, micro-interactions, mobile-first polish, hover/reveal motion, or page transitions. Bundles patterns from three.js, GSAP, Lenis, Framer Motion, AOS, anime.js, Barba.js, Spline, Popper, Tailwind/21st.dev. DO NOT USE for: backend logic, API work, build/deploy config (cPanel build is frozen), or unrelated bugfixes."
---

# WebGL Magic — UI & Animation Skill

This skill is the **single source of truth** for redesigning and animating the
TechModulus marketing site (`app/` directory, Next.js App Router). It is
explicitly tuned for a project that:

- Ships as a **cPanel `standalone`** Node deployment (`server.js`, `scripts/prepare-cpanel.mjs`).
- Already loads Bootstrap 5, Swiper, slick, owl, fancybox, wowjs, animate.css, font-awesome (`app/layout.js`).
- Uses React 19 + Next 16 with `'use client'` islands.
- Targets **99% mobile traffic** — every change MUST be mobile-first, touch-safe, and battery-conscious.

> **Hard rules (do not violate):**
> 1. Never edit `next.config.js`, `server.js`, `scripts/prepare-cpanel.mjs`, or the `cpanel-runtime/` folder.
> 2. Never break SSR — every animation library import must be guarded for `typeof window === 'undefined'`.
> 3. Never add a global library that runs on every route without `prefers-reduced-motion` respect.
> 4. Never replace existing functional components — only **wrap, layer, or extend**.
> 5. New animation deps must be tree-shakeable and total < 80 kB gzip on the homepage.

---

## 1. Library Decision Matrix

| Goal | Pick | Why | Bundle (gz) |
|------|------|-----|-------------|
| Smooth inertial scroll | **Lenis** | 4 kB, RAF-driven, plays nicely with GSAP ScrollTrigger | ~4 kB |
| Scroll-linked timelines, pinning, parallax | **GSAP + ScrollTrigger** | Industry standard; handles 60 fps on mid-range Android | ~30 kB |
| Component-level enter/exit, gestures, layout anim | **Framer Motion** | Declarative, React-native API, `LazyMotion` keeps it small | ~18 kB w/ LazyMotion |
| One-shot scroll reveals (fade/slide-up) | **AOS** *or* IntersectionObserver | AOS is plug-and-play; raw IO is zero-dep and faster on mobile | ~4 kB / 0 |
| Numeric/SVG morph animations | **anime.js v4** | Tiny, no deps, great for counters & path morphs | ~10 kB |
| Page transitions (multi-page apps) | **Barba.js** | NOT for Next.js App Router — App Router has built-in route transitions. Skip Barba here, use Framer Motion `AnimatePresence` instead. | — |
| 3D hero / WebGL canvas | **three.js** (lazy) | Full control, stream via dynamic import | ~150 kB lazy |
| Designer-made 3D scenes | **Spline** (`@splinetool/react-spline`) | Drop-in, but heavy; lazy-load only when in viewport | ~100 kB lazy |
| Floating menus, tooltips, dropdowns | **@floating-ui/react** (Popper successor) | Modern Popper rewrite; accessible | ~6 kB |
| Pre-built premium React UI | **21st.dev / shadcn-style** snippets | Copy-paste, tweak with Tailwind tokens; do NOT introduce Tailwind here unless the whole theme is migrated | — |

### When NOT to add a library
- A single hover effect → CSS only.
- A counter → `react-countup` (already installed).
- A carousel → `swiper` (already installed).
- A reveal-on-scroll → IntersectionObserver + a CSS class. **No dep.**

---

## 2. Mobile-First Animation Rules

1. **Default to CSS transforms + opacity.** They are GPU-composited; everything else jank's on mid-range Android.
2. **Disable heavy effects below 768 px** unless the effect is explicitly designed for touch:
   ```css
   @media (max-width: 767px) {
     .fx-3d-tilt { transform: none !important; }
     .fx-parallax { background-attachment: scroll !important; }
   }
   ```
3. **Always honour `prefers-reduced-motion`:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.001ms !important;
       transition-duration: 0.001ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
4. **Lazy-load WebGL/Spline** with `next/dynamic({ ssr: false })` and `IntersectionObserver` — never on first paint.
5. **Cap DPR** for three.js on mobile: `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))`.
6. **Touch ≠ hover.** Every hover micro-interaction needs an `:active` / `:focus-visible` equivalent.
7. **No `position: fixed` parallax** on iOS Safari — use `transform: translate3d` driven by scroll RAF.
8. **Sticky CTAs** — keep one persistent "Contact / WhatsApp" button (the project already has `StickyContact`); animations must not occlude it.

---

## 3. Patterns (copy-paste ready)

### 3.1 Smooth scroll wrapper (Lenis, SSR-safe)
```jsx
// components/elements/SmoothScroll.js
'use client'
import { useEffect } from 'react'
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf, lenis
    ;(async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, smoothTouch: false })
      const tick = (t) => { lenis.raf(t); raf = requestAnimationFrame(tick) }
      raf = requestAnimationFrame(tick)
    })()
    return () => { cancelAnimationFrame(raf); lenis?.destroy() }
  }, [])
  return null
}
```
Mount once inside `app/ClientProviders.js`. **Note `smoothTouch: false`** — forced smooth scroll on touch breaks native momentum and feels wrong on mobile.

### 3.2 Zero-dep scroll reveal (IntersectionObserver)
```jsx
// components/elements/Reveal.js
'use client'
import { useEffect, useRef } from 'react'
export default function Reveal({ children, as: Tag = 'div', delay = 0, y = 24, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-revealed'); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`fx-reveal ${className}`} style={{ '--fx-delay': `${delay}ms`, '--fx-y': `${y}px` }}>
      {children}
    </Tag>
  )
}
```
Pair with this CSS (load once globally):
```css
.fx-reveal { opacity: 0; transform: translate3d(0, var(--fx-y, 24px), 0);
  transition: opacity .8s cubic-bezier(.2,.7,.2,1) var(--fx-delay,0ms),
              transform .8s cubic-bezier(.2,.7,.2,1) var(--fx-delay,0ms); will-change: opacity, transform; }
.fx-reveal.is-revealed { opacity: 1; transform: none; }
```

### 3.3 GSAP + ScrollTrigger (lazy)
```jsx
'use client'
import { useEffect, useRef } from 'react'
export function useGsapScroll(setup) {
  const scope = useRef(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    let ctx
    ;(async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => setup(gsap, ScrollTrigger), scope)
    })()
    return () => ctx?.revert()
  }, [])
  return scope
}
```

### 3.4 Framer Motion with `LazyMotion` (small bundle)
```jsx
'use client'
import { LazyMotion, domAnimation, m } from 'framer-motion'
export default function FadeUp({ children, delay = 0 }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: .7, delay, ease: [.2,.7,.2,1] }}>
        {children}
      </m.div>
    </LazyMotion>
  )
}
```
Use `m.*` (not `motion.*`) with `LazyMotion` to keep bundle small.

### 3.5 Three.js hero (lazy, mobile-safe)
```jsx
'use client'
import dynamic from 'next/dynamic'
const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false, loading: () => null })
```
Inside `HeroCanvas.js`: clamp DPR, pause RAF when `document.hidden`, dispose geometries on unmount, and **skip render entirely** if `navigator.hardwareConcurrency < 4` or `matchMedia('(prefers-reduced-motion: reduce)')`.

### 3.6 Spline scene (extra heavy — only above-the-fold-on-desktop)
```jsx
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false })
// Don't render below 992 px viewport — show a poster image instead.
```

### 3.7 3D tilt card (CSS-only, mobile auto-disabled)
```css
.fx-card-3d { transform-style: preserve-3d; transition: transform .4s ease; }
@media (hover: hover) and (pointer: fine) {
  .fx-card-3d:hover { transform: perspective(900px) rotateX(4deg) rotateY(-6deg) translateZ(8px); }
}
```

### 3.8 Anime.js counter (already have react-countup, prefer that)
Only reach for anime.js when morphing SVG paths or doing stagger > 30 elements.

### 3.9 Floating UI (Popper successor) for menus
```js
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/react'
```
Use this instead of legacy `popper.js`. Bootstrap 5 already ships Popper — only add Floating UI for custom dropdowns outside Bootstrap.

---

## 4. Visual System (project tokens)

Add ONCE in `public/assets/css/ui-magic.css` and import after `theme.css`:

```css
:root {
  --tm-bg-0: #0a0e1a;
  --tm-bg-1: #0f1424;
  --tm-fg-0: #e7ecff;
  --tm-accent: #4f46e5;     /* indigo */
  --tm-accent-2: #06b6d4;   /* cyan */
  --tm-grad: linear-gradient(135deg, #4f46e5 0%, #06b6d4 50%, #22d3ee 100%);
  --tm-glass: rgba(255,255,255,.06);
  --tm-glass-bd: rgba(255,255,255,.12);
  --tm-shadow-lg: 0 30px 80px -20px rgba(79,70,229,.45);
  --tm-radius: 18px;
  --tm-ease: cubic-bezier(.2,.7,.2,1);
}
```

**Glassmorphic card:**
```css
.fx-glass { background: var(--tm-glass); border: 1px solid var(--tm-glass-bd);
  backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%);
  border-radius: var(--tm-radius); }
```

**Gradient text:**
```css
.fx-grad-text { background: var(--tm-grad); -webkit-background-clip: text;
  background-clip: text; color: transparent; }
```

**Animated gradient blob (replaces heavy WebGL on mobile):**
```css
.fx-blob { position:absolute; inset:auto; width:60vmin; height:60vmin; border-radius:50%;
  filter: blur(60px); opacity:.55; background: var(--tm-grad);
  animation: fxBlob 18s var(--tm-ease) infinite alternate; }
@keyframes fxBlob {
  0%   { transform: translate3d(-10%, -5%, 0) scale(1); }
  50%  { transform: translate3d( 8%,  6%, 0) scale(1.15); }
  100% { transform: translate3d(-4%, 10%, 0) scale(.95); }
}
```

**Magnetic / glow button:**
```css
.fx-btn { position:relative; isolation:isolate; padding:14px 26px; border-radius:999px;
  background: var(--tm-grad); color:#fff; font-weight:600; letter-spacing:.02em;
  transition: transform .35s var(--tm-ease), box-shadow .35s var(--tm-ease);
  box-shadow: 0 10px 30px -10px rgba(79,70,229,.6); }
.fx-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--tm-shadow-lg); }
.fx-btn:active { transform: translateY(0) scale(.99); }
```

---

## 5. Redesign Workflow (apply to one section at a time)

1. Identify the section (e.g. `components/sections/Slider5.js`).
2. Wrap **only** the visual JSX in `<Reveal>` or Framer Motion `<m.div>`. Do **not** touch event handlers, state, or fetch logic.
3. Add a `data-fx="..."` attribute and target it with `ui-magic.css`.
4. Test:
   - Desktop Chrome (1920) — animation present.
   - Chrome DevTools mobile emulation (iPhone 14, throttle 4× CPU) — must stay > 50 fps.
   - `prefers-reduced-motion` toggled — animations collapse.
5. Run `npm run build` to confirm cPanel build still succeeds.
6. Move to next section.

### Recommended homepage attack order
1. `Slider5` — gradient blob + GSAP text split-reveal + magnetic CTA.
2. `Service5` / `Service9` — staggered card reveal + 3D tilt on desktop only.
3. `Portfolio7` — image scale-in + mask reveal.
4. `Content7` / `Content8` — `fx-grad-text` on headlines + `<Reveal>` on body.
5. `Client5` — marquee with CSS `@keyframes` (no JS).
6. `Footer4` — subtle blob behind, no animation on touch.

---

## 6. Anti-patterns specific to this repo

- ❌ Don't wrap the whole `<RootLayout>` in Framer Motion — it re-mounts trees and breaks Bootstrap collapse/dropdown state.
- ❌ Don't import `gsap` at top level of a page component — always lazy-load inside `useEffect`.
- ❌ Don't add Tailwind unless migrating the entire `theme.scss`. Mixing Tailwind utilities with the existing Bootstrap + custom SCSS produces specificity wars.
- ❌ Don't enable smooth scroll for touch devices (`smoothTouch: false` always).
- ❌ Don't rely on `wowjs` for new work — it depends on `animate.css` and is unmaintained. Use `<Reveal>` instead. Existing `wowjs` usages can stay.
- ❌ Don't ship a Spline scene > 1.5 MB on a marketing page — export to `.splinecode` and gate behind viewport detection.

---

## 7. Reference links (for deeper reading)

- three.js — https://threejs.org/
- GSAP — https://gsap.com/docs/v3/
- Lenis — https://lenis.darkroom.engineering/
- Framer Motion — https://www.framer.com/motion/
- AOS — https://michalsnik.github.io/aos/
- anime.js — https://animejs.com/
- Barba.js — https://barba.js.org/ (skip on Next App Router)
- Spline — https://spline.design/
- Floating UI (Popper) — https://floating-ui.com/
- 21st.dev — https://21st.dev/home
- Taste skill (inspiration) — https://github.com/leonxlnx/taste-skill

---

## 8. Pre-flight checklist (run before every PR)

- [ ] `npm run build` succeeds.
- [ ] `npm run build:cpanel` succeeds and `cpanel-runtime/` is updated only if intentional.
- [ ] Lighthouse Mobile score: **Performance ≥ 80, CLS < 0.1, LCP < 2.5 s**.
- [ ] `prefers-reduced-motion: reduce` collapses all motion.
- [ ] No new top-level imports of `gsap`, `three`, `@splinetool/*` (must be dynamic).
- [ ] Touch targets ≥ 44×44 px.
- [ ] No regression in `StickyHeader`, `StickyContact`, `Preloader` behaviour.
