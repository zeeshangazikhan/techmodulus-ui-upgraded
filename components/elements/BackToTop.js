'use client'

import { useEffect, useState, useCallback } from 'react'

/**
 * Back-to-top button with circular scroll progress.
 * Self-styled so it works on every page regardless of theme CSS.
 * Mobile position is offset so it doesn't collide with StickyContact bar.
 */
export default function BackToTop() {
    const [visible, setVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (typeof window === 'undefined') return

        let raf = 0
        const update = () => {
            const y = window.scrollY || window.pageYOffset || 0
            const max = (document.documentElement.scrollHeight - window.innerHeight) || 1
            const pct = Math.max(0, Math.min(1, y / max))
            setProgress(pct)
            setVisible(y > 200)
            raf = 0
        }

        const onScroll = () => {
            if (raf) return
            raf = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })
        return () => {
            if (raf) cancelAnimationFrame(raf)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    const scrollTop = useCallback((e) => {
        e.preventDefault()
        if (typeof window === 'undefined') return
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    }, [])

    // Circle math
    const r = 26
    const C = 2 * Math.PI * r
    const dash = C * progress

    return (
        <>
            <button
                type="button"
                onClick={scrollTop}
                aria-label="Back to top"
                className={`tm-back-top ${visible ? 'is-visible' : ''}`}
            >
                <svg className="tm-back-top__ring" viewBox="0 0 60 60" aria-hidden="true">
                    <circle cx="30" cy="30" r={r} className="tm-back-top__track" />
                    <circle
                        cx="30"
                        cy="30"
                        r={r}
                        className="tm-back-top__fill"
                        style={{
                            strokeDasharray: `${C}`,
                            strokeDashoffset: `${C - dash}`,
                        }}
                    />
                </svg>
                <svg viewBox="0 0 24 24" className="tm-back-top__arrow" aria-hidden="true">
                    <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <style jsx>{`
                .tm-back-top {
                    position: fixed;
                    right: 22px;
                    bottom: 22px;
                    z-index: 9998;
                    width: 52px;
                    height: 52px;
                    padding: 0;
                    border: none;
                    border-radius: 50%;
                    background: rgba(15, 53, 103, .92);
                    color: #fff;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 12px 30px -8px rgba(0, 0, 0, .35);
                    -webkit-backdrop-filter: blur(10px);
                            backdrop-filter: blur(10px);
                    opacity: 0;
                    transform: translateY(20px) scale(.85);
                    pointer-events: none;
                    transition:
                        opacity .35s ease,
                        transform .35s cubic-bezier(.2,.7,.2,1),
                        background .25s ease;
                }
                .tm-back-top.is-visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    pointer-events: auto;
                }
                .tm-back-top:hover {
                    background: #008BF9;
                }
                .tm-back-top:active {
                    transform: translateY(0) scale(.95);
                }
                .tm-back-top__ring {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    transform: rotate(-90deg);
                }
                .tm-back-top__track {
                    fill: none;
                    stroke: rgba(255, 255, 255, .18);
                    stroke-width: 2;
                }
                .tm-back-top__fill {
                    fill: none;
                    stroke: #008BF9;
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    transition: stroke-dashoffset .15s linear;
                }
                .tm-back-top:hover .tm-back-top__fill {
                    stroke: #fff;
                }
                .tm-back-top__arrow {
                    position: relative;
                    z-index: 1;
                    width: 18px;
                    height: 18px;
                }

                /* Keep clear of the right-side StickyContact bar on tablets+ */
                @media (min-width: 768px) {
                    .tm-back-top {
                        right: 22px;
                        bottom: 26px;
                    }
                }

                /* Mobile: bottom-left so right-side WhatsApp/call/email bar stays clean */
                @media (max-width: 767px) {
                    .tm-back-top {
                        left: 16px;
                        right: auto;
                        bottom: 16px;
                        width: 46px;
                        height: 46px;
                    }
                    .tm-back-top__arrow {
                        width: 16px;
                        height: 16px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .tm-back-top { transition: opacity .2s ease; transform: none; }
                    .tm-back-top.is-visible { transform: none; }
                }
            `}</style>
        </>
    )
}


