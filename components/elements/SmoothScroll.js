'use client'

import { useEffect } from 'react'

/**
 * Lightweight smooth-scroll wrapper using Lenis (lazy-loaded).
 *
 * - Skips on touch devices (native momentum feels better).
 * - Skips when the user prefers reduced motion.
 * - Falls back gracefully if `lenis` is not installed yet.
 */
export default function SmoothScroll() {
    useEffect(() => {
        if (typeof window === 'undefined') return

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduce) return

        // Detect coarse pointer (mobile/tablet) — let the OS handle inertia there
        const coarse = window.matchMedia('(pointer: coarse)').matches
        if (coarse) return

        let rafId
        let lenis
        let cancelled = false

        ;(async () => {
            try {
                const mod = await import('lenis')
                if (cancelled) return
                const Lenis = mod.default || mod.Lenis || mod
                lenis = new Lenis({
                    duration: 1.05,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true,
                    smoothTouch: false,
                    wheelMultiplier: 1,
                    touchMultiplier: 1.5,
                })
                const tick = (time) => {
                    lenis?.raf(time)
                    rafId = requestAnimationFrame(tick)
                }
                rafId = requestAnimationFrame(tick)
            } catch (err) {
                // Lenis not installed yet — silently skip; native scroll still works.
                if (process.env.NODE_ENV !== 'production') {
                    console.info('[SmoothScroll] lenis not installed, skipping smooth scroll.')
                }
            }
        })()

        return () => {
            cancelled = true
            if (rafId) cancelAnimationFrame(rafId)
            try { lenis?.destroy() } catch (_) { /* noop */ }
        }
    }, [])

    return null
}
