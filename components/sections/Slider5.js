'use client'

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Hero3DLazy from "@/components/elements/Hero3DLazy"

export default function Slider5() {
    const [current, setCurrent] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const slides = [
        {
            id: 1,
            image: '/assets/images/slider/hero-slider-2.jpg',
            eyebrow: 'Custom Software',
            titleAccent: 'Software',
            title: 'Development',
            subtitle: 'Enterprise-grade web and mobile applications built with cutting-edge technologies.',
            btnText: 'Start Your Project',
            btnLink: '/contact',
        },
        {
            id: 2,
            image: '/assets/images/slider/hero-slider-5.jpg',
            eyebrow: 'Cloud & DevOps',
            titleAccent: 'Cloud',
            title: 'Solutions',
            subtitle: 'Scalable cloud infrastructure and DevOps solutions for modern businesses.',
            btnText: 'Explore Services',
            btnLink: '/service',
        },
        {
            id: 3,
            image: '/assets/images/slider/hero-slider-6.jpg',
            eyebrow: 'Product Design',
            titleAccent: 'Digital',
            title: 'Innovation',
            subtitle: 'Transform your ideas into powerful digital products that drive growth.',
            btnText: 'View Our Work',
            btnLink: '/portfolio-style-1',
        },
        {
            id: 4,
            image: '/assets/images/slider/hero-slider-4.jpg',
            eyebrow: 'Architecture',
            titleAccent: 'Enterprise',
            title: 'Intelligence',
            subtitle: 'We provide end-to-end Enterprise Architecture services to align business needs and deliver IT solutions.',
            btnText: 'Learn More',
            btnLink: '/service-enterprise-intelligence',
        },
        {
            id: 5,
            image: '/assets/images/slider/hero-slider-3.jpg',
            eyebrow: 'Data Platform',
            titleAccent: 'Data',
            title: 'Management',
            subtitle: 'Enterprise Archiving, Application Archiving, File Archiving — comprehensive data management solutions.',
            btnText: 'Learn More',
            btnLink: '/service-data-management',
        },
        {
            id: 6,
            image: '/assets/images/slider/hero-slider-1.jpg',
            eyebrow: 'Managed IT',
            titleAccent: 'Application',
            title: 'Retirement',
            subtitle: 'Application retirement services and support: Professional Services, IT Management, vCIO, and IT consulting.',
            btnText: 'Learn More',
            btnLink: '/service-app-retirement',
        },
    ]

    const goTo = useCallback((index) => {
        if (isAnimating || index === current) return
        setIsAnimating(true)
        setCurrent(index)
        setTimeout(() => setIsAnimating(false), 1200)
    }, [current, isAnimating])

    const next = useCallback(() => {
        goTo((current + 1) % slides.length)
    }, [current, goTo, slides.length])

    const prev = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length)
    }, [current, goTo, slides.length])

    useEffect(() => {
        const interval = setInterval(next, 6000)
        return () => clearInterval(interval)
    }, [next])

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', handleKeydown)
        return () => window.removeEventListener('keydown', handleKeydown)
    }, [next, prev])

    return (
        <>
            <section className="cc-slider">
                {/* 3D background layer (lazy, gated) */}
                <div className="cc-slider__hero3d">
                    <Hero3DLazy />
                </div>

                {/* Slides */}
                {slides.map((slide, i) => (
                    <div 
                        key={slide.id} 
                        className={`cc-slider__slide ${current === i ? 'cc-slider__slide--active' : ''}`}
                    >
                        {/* Background */}
                        <div className="cc-slider__bg">
                            <img src={slide.image} alt={slide.title} />
                        </div>

                        {/* Overlay */}
                        <div className="cc-slider__overlay" />

                        {/* Content */}
                        <div className="cc-slider__content">
                            <div className="cc-slider__inner">
                                <h1 className="cc-slider__title">
                                    <span className="cc-slider__title-accent">{slide.titleAccent}</span>
                                    <span> {slide.title}</span>
                                </h1>
                                <span className="cc-slider__title-rule" aria-hidden="true" />
                                <p className="cc-slider__subtitle">{slide.subtitle}</p>
                                <div className="cc-slider__actions">
                                    <Link href={slide.btnLink} className="cc-slider__btn">
                                        {slide.btnText}
                                        <svg viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link href="/portfolio-style-1" className="cc-slider__btn cc-slider__btn--ghost">
                                        Our Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button 
                    className="cc-slider__nav cc-slider__nav--prev" 
                    onClick={prev}
                    aria-label="Previous slide"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    className="cc-slider__nav cc-slider__nav--next" 
                    onClick={next}
                    aria-label="Next slide"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots */}
                <div className="cc-slider__dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`cc-slider__dot ${current === i ? 'cc-slider__dot--active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        >
                            <span className="cc-slider__dot-fill" />
                        </button>
                    ))}
                </div>

                {/* Slide Number */}
                <div className="cc-slider__number">
                    {String(current + 1).padStart(2, '0')}
                    <span className="cc-slider__number-total">/{String(slides.length).padStart(2, '0')}</span>
                </div>

                {/* Scroll hint */}
                <a href="#content" className="cc-slider__scroll" aria-label="Scroll down">
                    <span className="cc-slider__scroll-mouse">
                        <span className="cc-slider__scroll-wheel" />
                    </span>
                    <span className="cc-slider__scroll-text">Scroll</span>
                </a>
            </section>

            <style jsx global>{`
                .cc-slider {
                    --cc-accent: #008BF9;
                    --cc-accent-2: #36619A;
                    --cc-navy: #0F3567;
                    --cc-grad: linear-gradient(135deg, #008BF9 0%, #36619A 60%, #008BF9 100%);
                    --cc-autoplay: 6s;
                    --cc-display-font: 'Manrope', 'Inter', system-ui, -apple-system, Segoe UI, sans-serif;
                    --cc-body-font: 'Inter', 'Manrope', system-ui, -apple-system, Segoe UI, sans-serif;
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    height: 100svh;
                    min-height: 600px;
                    overflow: hidden;
                    font-family: var(--cc-body-font);
                    background: #0F3567;
                }

                /* Slide */
                .cc-slider__slide {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity .8s ease;
                }
                .cc-slider__slide--active {
                    opacity: 1;
                    pointer-events: auto;
                }

                /* Background Image */
                .cc-slider__bg { position: absolute; inset: 0; }
                .cc-slider__bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0;
                    transform: scale(1.12);
                    will-change: transform, opacity;
                    filter: brightness(.92) saturate(1.05);
                }
                .cc-slider__slide--active .cc-slider__bg img {
                    animation: ccImgReveal 8s ease-out forwards;
                }
                @keyframes ccImgReveal {
                    0%   { opacity: 0; transform: scale(1.12); }
                    8%   { opacity: 1; }
                    100% { opacity: 1; transform: scale(1.02); }
                }

                /* Overlay (theme-navy scrim for legibility) */
                .cc-slider__overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(80% 60% at 50% 50%,
                            rgba(15, 53, 103, .45) 0%,
                            rgba(15, 53, 103, .62) 60%,
                            rgba(8, 37, 75, .78) 100%),
                        linear-gradient(180deg,
                            rgba(8, 37, 75, .42) 0%,
                            rgba(15, 53, 103, .48) 35%,
                            rgba(8, 37, 75, .82) 100%);
                }
                /* Soft dark gradient behind copy block — boosts contrast on busy hero photos */
                .cc-slider__inner::before {
                    content: '';
                    position: absolute;
                    inset: -40px -8% -40px -8%;
                    background: radial-gradient(60% 70% at 50% 50%,
                        rgba(8, 37, 75, .35) 0%,
                        rgba(8, 37, 75, 0) 70%);
                    z-index: -1;
                    pointer-events: none;
                    filter: blur(2px);
                }
                .cc-slider__inner { position: relative; z-index: 1; }

                /* Content */
                .cc-slider__content {
                    position: relative;
                    z-index: 5;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 5%;
                }
                .cc-slider__inner {
                    max-width: 820px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* Eyebrow badge — REMOVED */

                /* Title (single line) */
                .cc-slider__title {
                    font-family: var(--cc-display-font);
                    font-size: clamp(1.75rem, 5vw, 3.5rem);
                    font-weight: 800;
                    color: #fff;
                    margin: 0 0 1rem;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(110%);
                }
                .cc-slider__slide--active .cc-slider__title {
                    animation: ccTextUp .9s cubic-bezier(.33,1,.68,1) .25s forwards;
                }
                .cc-slider__title-accent {
                    color: #fff;
                    margin-right: 0.2em;
                }

                /* Subtitle */
                .cc-slider__subtitle {
                    font-family: var(--cc-body-font);
                    font-size: clamp(1rem, 1.4vw, 1.15rem);
                    color: rgba(255, 255, 255, .94);
                    margin: 0 0 2rem;
                    line-height: 1.65;
                    font-weight: 400;
                    max-width: 640px;
                    opacity: 0;
                    transform: translateY(20px);
                }
                .cc-slider__slide--active .cc-slider__subtitle {
                    animation: ccFadeUp .8s ease-out .55s forwards;
                }
                @keyframes ccFadeUp {
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes ccTextUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Action buttons */
                .cc-slider__actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-bottom: 2.5rem;
                    opacity: 0;
                    transform: translateY(20px);
                }
                .cc-slider__slide--active .cc-slider__actions {
                    animation: ccFadeUp .8s ease-out .7s forwards;
                }

                .cc-slider__btn {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 28px;
                    background: #008BF9;
                    color: #fff;
                    text-decoration: none;
                    font-family: 'Inter', 'Manrope', sans-serif;
                    font-size: .9rem;
                    font-weight: 600;
                    letter-spacing: .02em;
                    border-radius: 8px;
                    border: 0;
                    cursor: pointer;
                    box-shadow: 0 1px 2px rgba(0,0,0,.08), 0 8px 24px -8px rgba(0,139,249,.45);
                    transition: background .2s ease, box-shadow .25s ease, transform .25s ease;
                }
                .cc-slider__btn svg {
                    width: 16px; height: 16px;
                    fill: none;
                    stroke: currentColor;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    transition: transform .25s ease;
                    flex-shrink: 0;
                }
                .cc-slider__btn:hover {
                    background: #0070D9;
                    box-shadow: 0 2px 4px rgba(0,0,0,.1), 0 14px 32px -10px rgba(0,139,249,.55);
                    transform: translateY(-1px);
                    color: #fff;
                }
                .cc-slider__btn:hover svg { transform: translateX(3px); }
                .cc-slider__btn:active { transform: translateY(0); transition-duration: .1s; }
                .cc-slider__btn:focus-visible {
                    outline: 2px solid #fff;
                    outline-offset: 3px;
                }

                .cc-slider__btn--ghost {
                    background: transparent;
                    border: 1px solid rgba(255,255,255,.35);
                    color: #fff;
                    box-shadow: none;
                    -webkit-backdrop-filter: blur(6px);
                            backdrop-filter: blur(6px);
                }
                .cc-slider__btn--ghost:hover {
                    background: rgba(255,255,255,.1);
                    border-color: rgba(255,255,255,.6);
                    color: #fff;
                    box-shadow: none;
                    transform: translateY(-1px);
                }

                /* Decorative rule between title and subtitle */
                .cc-slider__title-rule {
                    display: block;
                    width: 0;
                    height: 2px;
                    margin: 0 auto 26px;
                    background: linear-gradient(90deg, transparent, var(--cc-accent) 30%, var(--cc-accent) 70%, transparent);
                    box-shadow: 0 0 20px rgba(0, 139, 249, .55);
                    transform-origin: center;
                }
                .cc-slider__slide--active .cc-slider__title-rule {
                    animation: ccRuleGrow .9s cubic-bezier(.33,1,.68,1) .55s forwards;
                }
                @keyframes ccRuleGrow {
                    from { width: 0; opacity: 0; }
                    to   { width: 96px; opacity: 1; }
                }

                /* Navigation Arrows */
                .cc-slider__nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 20;
                    width: 56px;
                    height: 56px;
                    background: rgba(15, 53, 103, .55);
                    border: 1px solid rgba(255, 255, 255, .3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    -webkit-backdrop-filter: blur(10px);
                            backdrop-filter: blur(10px);
                    transition: all .35s ease;
                }
                .cc-slider__nav:hover {
                    background: var(--cc-accent);
                    border-color: var(--cc-accent);
                    transform: translateY(-50%) scale(1.06);
                    box-shadow: 0 16px 40px -10px rgba(0, 139, 249, .6);
                }
                .cc-slider__nav svg {
                    width: 20px;
                    height: 20px;
                    fill: none;
                    stroke: #fff;
                    stroke-width: 1.8;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
                .cc-slider__nav--prev { left: 3%; }
                .cc-slider__nav--next { right: 3%; }

                /* Dots (progress bars) */
                .cc-slider__dots {
                    position: absolute;
                    bottom: 28px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 20;
                    display: flex;
                    gap: 8px;
                }
                .cc-slider__dot {
                    position: relative;
                    width: 38px;
                    height: 4px;
                    padding: 0;
                    background: rgba(255, 255, 255, .22);
                    border: none;
                    cursor: pointer;
                    border-radius: 2px;
                    overflow: hidden;
                    transition: width .4s ease, background .4s ease;
                }
                .cc-slider__dot:hover { background: rgba(255, 255, 255, .4); }
                .cc-slider__dot--active { width: 64px; }
                .cc-slider__dot-fill {
                    position: absolute;
                    inset: 0;
                    transform-origin: left center;
                    transform: scaleX(0);
                    background: var(--cc-accent);
                    border-radius: 2px;
                }
                .cc-slider__dot--active .cc-slider__dot-fill {
                    animation: ccProgress var(--cc-autoplay) linear forwards;
                }
                @keyframes ccProgress {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                /* Slide Number */
                .cc-slider__number {
                    position: absolute;
                    bottom: 28px;
                    left: 4%;
                    z-index: 20;
                    font-family: var(--theme-body-font, 'Poppins'), sans-serif;
                    font-size: 5rem;
                    font-weight: 700;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, .14);
                    line-height: 1;
                    pointer-events: none;
                    user-select: none;
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                }
                .cc-slider__number-total {
                    font-size: 1rem;
                    -webkit-text-stroke: none;
                    color: rgba(255, 255, 255, .35);
                    font-weight: 500;
                }

                /* Scroll hint */
                .cc-slider__scroll {
                    position: absolute;
                    right: 4%;
                    bottom: 28px;
                    z-index: 20;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255, 255, 255, .7);
                    text-decoration: none;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: .2em;
                    text-transform: uppercase;
                    transition: color .3s ease, transform .3s ease;
                }
                .cc-slider__scroll:hover { color: #fff; transform: translateY(-3px); }
                .cc-slider__scroll-mouse {
                    width: 22px;
                    height: 36px;
                    border: 1.5px solid currentColor;
                    border-radius: 12px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    padding-top: 6px;
                }
                .cc-slider__scroll-wheel {
                    width: 3px;
                    height: 7px;
                    background: currentColor;
                    border-radius: 2px;
                    animation: ccWheel 1.6s ease-in-out infinite;
                }
                @keyframes ccWheel {
                    0%   { transform: translateY(0);   opacity: 1; }
                    70%  { transform: translateY(8px); opacity: 0; }
                    71%  { transform: translateY(0);   opacity: 0; }
                    100% { transform: translateY(0);   opacity: 1; }
                }

                /* ========== Responsive ========== */
                @media (max-width: 1200px) {
                    .cc-slider__nav { width: 50px; height: 50px; }
                    .cc-slider__number { font-size: 4rem; }
                }

                @media (max-width: 991px) {
                    .cc-slider__number { font-size: 3rem; }
                    .cc-slider__scroll { display: none; }
                }

                /* ========== Mobile-first refinements ========== */
                @media (max-width: 768px) {
                    .cc-slider {
                        min-height: 100svh;
                        height: 100svh;
                    }
                    .cc-slider__content {
                        align-items: flex-end;
                        padding: 0 22px 130px;
                    }
                    .cc-slider__inner {
                        align-items: flex-start;
                        text-align: left;
                    }
                    .cc-slider__overlay {
                        background:
                            radial-gradient(140% 90% at 30% 20%,
                                rgba(6, 8, 20, .15) 0%,
                                rgba(6, 8, 20, .72) 60%,
                                rgba(6, 8, 20, .97) 100%);
                    }
                    .cc-slider__title {
                        font-size: clamp(1.6rem, 7vw, 2.8rem);
                        margin-bottom: 12px;
                    }
                    .cc-slider__subtitle {
                        font-size: .92rem;
                        line-height: 1.6;
                        margin-bottom: 1.5rem;
                    }
                    .cc-slider__actions {
                        justify-content: flex-start;
                        gap: 10px;
                        margin-bottom: 1.4rem;
                        width: 100%;
                    }
                    .cc-slider__btn {
                        padding: 13px 22px;
                        font-size: .82rem;
                        flex: 0 0 auto;
                        justify-content: center;
                        min-height: 48px;
                    }
                    .cc-slider__btn--ghost { display: none !important; }
                    .cc-slider__title-rule { margin-left: 0; margin-right: auto; margin-bottom: 18px; }
                    .cc-slider__trust { font-size: .65rem; letter-spacing: .18em; }

                    .cc-slider__nav {
                        width: 44px;
                        height: 44px;
                        top: auto;
                        bottom: 26px;
                        transform: none;
                    }
                    .cc-slider__nav:hover { transform: scale(1.05); }
                    .cc-slider__nav--prev { left: 22px; }
                    .cc-slider__nav--next { right: 22px; }

                    .cc-slider__dots {
                        bottom: 38px;
                        gap: 6px;
                    }
                    .cc-slider__dot { width: 22px; height: 3px; }
                    .cc-slider__dot--active { width: 36px; }

                    .cc-slider__number { display: none; }
                }

                @media (max-width: 420px) {
                    .cc-slider__content { padding: 0 18px 120px; }
                    .cc-slider__title { font-size: clamp(1.9rem, 10vw, 2.6rem); }
                    .cc-slider__subtitle {
                        font-size: .88rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .cc-slider__btn { padding: 12px 20px; font-size: .8rem; }
                }

                /* ========== Reduced motion ========== */
                @media (prefers-reduced-motion: reduce) {
                    .cc-slider__bg img,
                    .cc-slider__title,
                    .cc-slider__subtitle,
                    .cc-slider__actions,
                    .cc-slider__title-rule,
                    .cc-slider__dot-fill,
                    .cc-slider__scroll-wheel {
                        animation: none !important;
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </>
    )
}

