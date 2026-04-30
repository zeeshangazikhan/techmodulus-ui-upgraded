'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import NavbarNav from "./NavbarNav"
import MobileMenu from "./MobileMenu"

export default function StickyHeader({ handleSearch, handleOptionalPanel, handleMobileMenu }) {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setMobileOpen(false) }, [pathname])

    const isHome = pathname === '/'
    const transparent = isHome && !scrolled

    return (
        <>
            <header
                className={`tm-nav${scrolled ? ' tm-nav--scrolled' : ''}${transparent ? ' tm-nav--transparent' : ''}`}
                role="banner"
            >
                <div className="tm-nav__inner">
                    <Link href="/" className="tm-nav__logo" aria-label="TechModulus Home">
                        <img
                            src="/assets/images/theme-logo.png"
                            alt="TechModulus"
                            className={transparent ? 'tm-logo-invert' : ''}
                        />
                    </Link>

                    <nav className="tm-nav__desktop" aria-label="Primary navigation">
                        <NavbarNav />
                    </nav>

                    <div className="tm-nav__actions">
                        <Link href="/contact" className="tm-nav__cta">
                            <span className="tm-nav__cta-label">Get In Touch</span>
                            <span className="tm-nav__cta-arrow" aria-hidden="true">
                                <svg viewBox="0 0 16 16">
                                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            </span>
                        </Link>
                        <button
                            className={`tm-nav__burger${mobileOpen ? ' is-open' : ''}`}
                            onClick={() => setMobileOpen(v => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </header>

            <style jsx global>{`
                /* ============ TechModulus Premium Navbar ============ */
                .tm-nav {
                    --nh: 72px;
                    --na: #008BF9;
                    --nn: #0F3567;
                    --nt: #1e293b;
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 9999;
                    height: var(--nh);
                    background: rgba(255,255,255,.96);
                    -webkit-backdrop-filter: blur(22px) saturate(180%);
                            backdrop-filter: blur(22px) saturate(180%);
                    box-shadow: 0 1px 0 rgba(15,53,103,.07), 0 8px 32px rgba(0,0,0,.07);
                    border-bottom: 1px solid rgba(15,53,103,.07);
                    transition:
                        height .4s cubic-bezier(.4,0,.2,1),
                        background .4s ease,
                        box-shadow .4s ease,
                        border-color .4s ease;
                }
                .tm-nav--scrolled {
                    --nh: 64px;
                    box-shadow: 0 4px 40px rgba(0,0,0,.09), 0 1px 0 rgba(15,53,103,.06);
                    border-bottom-color: rgba(15,53,103,.10);
                }
                .tm-nav--transparent {
                    background: transparent;
                    -webkit-backdrop-filter: none;
                            backdrop-filter: none;
                    box-shadow: none;
                    border-bottom-color: rgba(255,255,255,.12);
                }

                .tm-nav__inner {
                    max-width: 1320px;
                    margin: 0 auto;
                    padding: 0 36px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    gap: 24px;
                }

                /* Logo */
                .tm-nav__logo {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    margin-right: 8px;
                }
                .tm-nav__logo img {
                    height: 42px;
                    width: auto;
                    transition: height .4s ease, filter .4s ease;
                }
                .tm-nav--scrolled .tm-nav__logo img { height: 36px; }
                .tm-logo-invert { filter: brightness(0) invert(1); }

                /* Desktop nav */
                .tm-nav__desktop {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .tm-nav .navbar_nav {
                    display: flex !important;
                    align-items: center;
                    gap: 4px;
                    list-style: none;
                    margin: 0; padding: 0;
                }
                .tm-nav .nav-item { position: relative; }
                .tm-nav .nav_link {
                    display: inline-flex;
                    align-items: center;
                    padding: 6px 4px;
                    margin: 0 10px;
                    font-family: 'Inter', 'Manrope', 'DM Sans', system-ui, sans-serif;
                    font-size: .9rem;
                    font-weight: 500;
                    letter-spacing: .005em;
                    color: #475569 !important;
                    text-decoration: none !important;
                    white-space: nowrap;
                    position: relative;
                    background: transparent !important;
                    border: 0 !important;
                    box-shadow: none !important;
                    border-radius: 0 !important;
                    outline: none;
                    transition: color .18s ease;
                }
                .tm-nav .nav_link:focus { outline: none; }
                .tm-nav .nav_link:focus-visible {
                    outline: 2px solid rgba(0,139,249,.4);
                    outline-offset: 4px;
                    border-radius: 4px;
                }
                .tm-nav .nav_link .text-link { color: inherit !important; }
                .tm-nav--transparent .nav_link { color: rgba(255,255,255,.78) !important; }

                /* Underline indicator — single thin line beneath text, expands on hover/active */
                .tm-nav .nav_link::after {
                    content: '';
                    position: absolute;
                    left: 0; right: 0; bottom: -2px;
                    height: 2px;
                    background: currentColor;
                    transform: scaleX(0);
                    transform-origin: center;
                    transition: transform .25s cubic-bezier(.4,0,.2,1);
                    border-radius: 2px;
                }

                /* Hover */
                .tm-nav .nav_link:hover {
                    color: #0F3567 !important;
                }
                .tm-nav--transparent .nav_link:hover {
                    color: #fff !important;
                }
                .tm-nav .nav_link:hover::after {
                    transform: scaleX(1);
                    background: var(--na);
                }
                .tm-nav--transparent .nav_link:hover::after {
                    background: #fff;
                }

                /* Active (current page) */
                .tm-nav .nav_link--active {
                    color: var(--na) !important;
                    font-weight: 600;
                }
                .tm-nav .nav_link--active::after {
                    transform: scaleX(1);
                    background: var(--na);
                }
                .tm-nav--transparent .nav_link--active {
                    color: #fff !important;
                }
                .tm-nav--transparent .nav_link--active::after {
                    transform: scaleX(1);
                    background: #fff;
                }

                /* Actions */
                .tm-nav__actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-shrink: 0;
                    margin-left: 8px;
                    /* On mobile this becomes the rightmost element */
                }

                /* CTA — premium split capsule */
                .tm-nav__cta {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 5px 5px 5px 20px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070D9 55%, #0A2C5A 130%);
                    color: #fff !important;
                    font-family: 'Inter', 'Manrope', sans-serif;
                    font-size: .82rem;
                    font-weight: 600;
                    letter-spacing: .04em;
                    border-radius: 999px;
                    border: 1px solid rgba(255,255,255,.18);
                    text-decoration: none !important;
                    box-shadow:
                        0 1px 0 0 rgba(255,255,255,.3) inset,
                        0 -1px 0 0 rgba(0,0,0,.15) inset,
                        0 8px 22px -6px rgba(0,139,249,.5),
                        0 2px 6px -2px rgba(10,44,90,.3);
                    transition: transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s ease, filter .35s ease;
                    white-space: nowrap;
                    overflow: hidden;
                    isolation: isolate;
                }
                /* Sheen sweep */
                .tm-nav__cta::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: linear-gradient(110deg,
                        transparent 30%,
                        rgba(255,255,255,.32) 50%,
                        transparent 70%);
                    transform: translateX(-110%);
                    transition: transform .75s cubic-bezier(.4,0,.2,1);
                    pointer-events: none;
                    z-index: 1;
                }
                .tm-nav__cta:hover::before { transform: translateX(110%); }
                .tm-nav__cta-label {
                    position: relative; z-index: 2;
                }
                .tm-nav__cta-arrow {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px; height: 30px;
                    background: rgba(255,255,255,.18);
                    border-radius: 999px;
                    transition: transform .35s cubic-bezier(.4,0,.2,1), background .35s ease;
                    flex-shrink: 0;
                }
                .tm-nav__cta-arrow svg { width: 14px; height: 14px; }
                .tm-nav__cta:hover {
                    transform: translateY(-2px);
                    filter: brightness(1.06);
                    box-shadow:
                        0 1px 0 0 rgba(255,255,255,.35) inset,
                        0 -1px 0 0 rgba(0,0,0,.2) inset,
                        0 14px 32px -8px rgba(0,139,249,.6),
                        0 4px 10px -2px rgba(10,44,90,.4);
                    color: #fff !important;
                }
                .tm-nav__cta:hover .tm-nav__cta-arrow {
                    transform: translateX(3px) rotate(-8deg);
                    background: rgba(255,255,255,.32);
                }
                .tm-nav__cta:active { transform: translateY(0); transition-duration: .1s; }
                .tm-nav__cta:focus-visible {
                    outline: 2px solid #fff;
                    outline-offset: 3px;
                }

                /* Transparent (hero) variant — frosted ghost */
                .tm-nav--transparent .tm-nav__cta {
                    background: rgba(255,255,255,.1);
                    border-color: rgba(255,255,255,.4);
                    box-shadow:
                        0 1px 0 0 rgba(255,255,255,.25) inset,
                        0 4px 16px -4px rgba(0,0,0,.18);
                    -webkit-backdrop-filter: blur(10px);
                            backdrop-filter: blur(10px);
                }
                .tm-nav--transparent .tm-nav__cta-arrow {
                    background: rgba(255,255,255,.2);
                }
                .tm-nav--transparent .tm-nav__cta:hover {
                    background: #fff;
                    border-color: #fff;
                    color: var(--nn) !important;
                    box-shadow:
                        0 10px 28px -6px rgba(0,0,0,.25),
                        0 2px 6px -2px rgba(0,0,0,.15);
                    filter: none;
                }
                .tm-nav--transparent .tm-nav__cta:hover .tm-nav__cta-arrow {
                    background: rgba(0,139,249,.15);
                }

                /* Hamburger */
                .tm-nav__burger {
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    width: 44px; height: 44px;
                    background: none;
                    border: 1.5px solid rgba(15,53,103,.15);
                    border-radius: 10px;
                    cursor: pointer; padding: 0;
                    transition: background .25s ease, border-color .25s ease;
                }
                .tm-nav__burger:hover {
                    background: rgba(0,139,249,.06);
                    border-color: rgba(0,139,249,.32);
                }
                .tm-nav--transparent .tm-nav__burger { border-color: rgba(255,255,255,.35); }
                .tm-nav--transparent .tm-nav__burger:hover {
                    background: rgba(255,255,255,.12);
                    border-color: rgba(255,255,255,.6);
                }
                .tm-nav__burger span {
                    display: block;
                    background: var(--nt);
                    border-radius: 2px;
                    transform-origin: center;
                    transition: transform .35s cubic-bezier(.4,0,.2,1), opacity .25s ease, width .3s ease;
                }
                .tm-nav__burger span:nth-child(1) { width: 20px; height: 2px; }
                .tm-nav__burger span:nth-child(2) { width: 14px; height: 2px; }
                .tm-nav__burger span:nth-child(3) { width: 20px; height: 2px; }
                .tm-nav--transparent .tm-nav__burger span { background: #fff; }
                .tm-nav__burger.is-open span:nth-child(1) { width: 20px; transform: translateY(7px) rotate(45deg); }
                .tm-nav__burger.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .tm-nav__burger.is-open span:nth-child(3) { width: 20px; transform: translateY(-7px) rotate(-45deg); }

                /* Responsive */
                @media (max-width: 992px) {
                    .tm-nav__desktop { display: none !important; }
                    .tm-nav__cta     { display: none; }
                    .tm-nav__burger  { display: flex; }
                    /* Push burger to far right: logo stays left, actions auto-margin */
                    .tm-nav__inner   { padding: 0 20px; gap: 0; }
                    .tm-nav__logo    { margin-right: auto; }
                    .tm-nav__actions { margin-left: 0; gap: 8px; }
                }
                @media (max-width: 480px) {
                    .tm-nav { --nh: 62px; }
                    .tm-nav--scrolled { --nh: 58px; }
                    .tm-nav__inner { padding: 0 16px; }
                    .tm-nav__logo img { height: 34px; }
                    .tm-nav--scrolled .tm-nav__logo img { height: 30px; }
                    .tm-nav__burger { width: 40px; height: 40px; }
                }
                @media (max-width: 360px) {
                    .tm-nav__inner { padding: 0 12px; }
                    .tm-nav__burger { width: 38px; height: 38px; }
                }

                /* Reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .tm-nav, .tm-nav__logo img, .tm-nav__cta,
                    .tm-nav .nav_link, .tm-nav .nav_link::after, .tm-nav__burger span {
                        transition: none !important;
                        animation: none !important;
                    }
                }
            `}</style>

            <MobileMenu isMobileMenu={mobileOpen} handleMobileMenu={() => setMobileOpen(false)} />
        </>
    )
}
