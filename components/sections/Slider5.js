import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

export default function Slider5() {
    const [current, setCurrent] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const slides = [
        {
            id: 1,
            image: '/assets/images/slider/hero-slider-2.jpg',
            title: 'Software Development',
            subtitle: 'Enterprise-grade web and mobile applications built with cutting-edge technologies.',
            btnText: 'Start Your Project',
            btnLink: '/contact',
        },
        {
            id: 2,
            image: '/assets/images/slider/hero-slider-5.jpg',
            title: 'Cloud Solutions',
            subtitle: 'Scalable cloud infrastructure and DevOps solutions for modern businesses.',
            btnText: 'Explore Services',
            btnLink: '/service',
        },
        {
            id: 3,
            image: '/assets/images/slider/hero-slider-6.jpg',
            title: 'Digital Innovation',
            subtitle: 'Transform your ideas into powerful digital products that drive growth.',
            btnText: 'View Our Work',
            btnLink: '/portfolio-style-1',
        },
        {
            id: 4,
            image: '/assets/images/slider/hero-slider-4.jpg',
            title: 'Enterprise Intelligence',
            subtitle: 'We provide end-to-end Enterprise Architecture services to align business needs and deliver IT solutions.',
            btnText: 'Learn More',
            btnLink: '/service-enterprise-intelligence',
        },
        {
            id: 5,
            image: '/assets/images/slider/hero-slider-3.jpg',
            title: 'Enterprise Data Management',
            subtitle: 'Enterprise Archiving, Application Archiving, File Archiving — comprehensive data management solutions.',
            btnText: 'Learn More',
            btnLink: '/service-data-management',
        },
        {
            id: 6,
            image: '/assets/images/slider/hero-slider-1.jpg',
            title: 'Application Retirement & Support',
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
                            <div className="cc-slider__line" />
                            <h1 className="cc-slider__title">
                                <span>{slide.title}</span>
                            </h1>
                            <p className="cc-slider__subtitle">{slide.subtitle}</p>
                            <Link href={slide.btnLink} className="cc-slider__btn">
                                {slide.btnText}
                                <svg viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
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
                        />
                    ))}
                </div>

                {/* Slide Number */}
                <div className="cc-slider__number">
                    {String(current + 1).padStart(2, '0')}
                </div>
            </section>

            <style jsx global>{`
                .cc-slider {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 600px;
                    overflow: hidden;
                    font-family: var(--theme-body-font, 'Poppins'), sans-serif;
                    background: #0a0a0a;
                }

                /* Slide */
                .cc-slider__slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    pointer-events: none;
                }

                .cc-slider__slide--active {
                    opacity: 1;
                    pointer-events: auto;
                }

                /* Background Image */
                .cc-slider__bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .cc-slider__bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0;
                    transform: scale(1.1);
                }

                .cc-slider__slide--active .cc-slider__bg img {
                    animation: ccImgReveal 1.2s ease-out forwards;
                }

                @keyframes ccImgReveal {
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                /* Overlay */
                .cc-slider__overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        180deg,
                        rgba(10, 10, 10, 0.5) 0%,
                        rgba(10, 10, 10, 0.75) 100%
                    );
                }

                /* Content */
                .cc-slider__content {
                    position: relative;
                    z-index: 5;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 0 5%;
                }

                /* Animated Line */
                .cc-slider__line {
                    width: 2px;
                    height: 0;
                    background: var(--color-set-one-1, #008BF9);
                    margin-bottom: 2rem;
                }

                .cc-slider__slide--active .cc-slider__line {
                    animation: ccLineGrow 0.8s ease-out 0.2s forwards;
                }

                @keyframes ccLineGrow {
                    to {
                        height: 60px;
                    }
                }

                /* Title */
                .cc-slider__title {
                    font-family: var(--theme-body-font, 'Poppins'), sans-serif;
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 600;
                    color: #fff;
                    margin: 0 0 1rem;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                    overflow: hidden;
                }

                .cc-slider__title span {
                    display: block;
                    opacity: 0;
                    transform: translateY(100%);
                }

                .cc-slider__slide--active .cc-slider__title span {
                    animation: ccTextUp 0.9s cubic-bezier(0.33, 1, 0.68, 1) 0.4s forwards;
                }

                @keyframes ccTextUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Subtitle */
                .cc-slider__subtitle {
                    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
                    color: rgba(255, 255, 255, 0.75);
                    margin: 0 0 2.5rem;
                    line-height: 1.8;
                    font-weight: 400;
                    max-width: 550px;
                    opacity: 0;
                    transform: translateY(20px);
                }

                .cc-slider__slide--active .cc-slider__subtitle {
                    animation: ccFadeUp 0.8s ease-out 0.7s forwards;
                }

                @keyframes ccFadeUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Button */
                .cc-slider__btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 14px;
                    padding: 16px 36px;
                    background: var(--color-set-one-1, #008BF9);
                    color: #fff;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    border-radius: 4px;
                    transition: all 0.4s ease;
                    opacity: 0;
                    transform: translateY(20px);
                }

                .cc-slider__slide--active .cc-slider__btn {
                    animation: ccFadeUp 0.8s ease-out 0.9s forwards;
                }

                .cc-slider__btn:hover {
                    background: #fff;
                    color: #0a0a0a;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(0, 139, 249, 0.3);
                }

                .cc-slider__btn svg {
                    width: 18px;
                    height: 18px;
                    fill: none;
                    stroke: currentColor;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    transition: transform 0.3s ease;
                }

                .cc-slider__btn:hover svg {
                    transform: translateX(5px);
                }

                /* Navigation Arrows */
                .cc-slider__nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 20;
                    width: 56px;
                    height: 56px;
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.4s ease;
                }

                .cc-slider__nav:hover {
                    background: var(--color-set-one-1, #008BF9);
                    border-color: var(--color-set-one-1, #008BF9);
                }

                .cc-slider__nav svg {
                    width: 22px;
                    height: 22px;
                    fill: none;
                    stroke: #fff;
                    stroke-width: 1.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    transition: stroke 0.4s ease;
                }

                .cc-slider__nav--prev {
                    left: 4%;
                }

                .cc-slider__nav--next {
                    right: 4%;
                }

                /* Dots */
                .cc-slider__dots {
                    position: absolute;
                    bottom: 6%;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 20;
                    display: flex;
                    gap: 10px;
                }

                .cc-slider__dot {
                    width: 40px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.25);
                    border: none;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    border-radius: 2px;
                }

                .cc-slider__dot:hover {
                    background: rgba(255, 255, 255, 0.5);
                }

                .cc-slider__dot--active {
                    background: var(--color-set-one-1, #008BF9);
                    width: 60px;
                }

                /* Slide Number */
                .cc-slider__number {
                    position: absolute;
                    bottom: 8%;
                    left: 5%;
                    right: auto;
                    z-index: 20;
                    font-family: var(--theme-body-font, 'Poppins'), sans-serif;
                    font-size: 6rem;
                    font-weight: 700;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
                    line-height: 1;
                    pointer-events: none;
                    user-select: none;
                }

                /* ========== Responsive ========== */
                @media (max-width: 1200px) {
                    .cc-slider__nav {
                        width: 50px;
                        height: 50px;
                    }

                    .cc-slider__nav svg {
                        width: 20px;
                        height: 20px;
                    }

                    .cc-slider__number {
                        font-size: 5rem;
                    }
                }

                @media (max-width: 991px) {
                    .cc-slider__nav--prev {
                        left: 3%;
                    }

                    .cc-slider__nav--next {
                        right: 3%;
                    }

                    .cc-slider__number {
                        font-size: 4rem;
                    }
                }

                @media (max-width: 768px) {
                    .cc-slider {
                        min-height: 550px;
                    }

                    .cc-slider__content {
                        justify-content: flex-end;
                        padding-bottom: 18%;
                    }

                    .cc-slider__overlay {
                        background: linear-gradient(
                            to top,
                            rgba(10, 10, 10, 0.9) 0%,
                            rgba(10, 10, 10, 0.6) 50%,
                            rgba(10, 10, 10, 0.4) 100%
                        );
                    }

                    .cc-slider__line {
                        margin-bottom: 1.5rem;
                    }

                    @keyframes ccLineGrow {
                        to {
                            height: 40px;
                        }
                    }

                    .cc-slider__subtitle {
                        margin-bottom: 2rem;
                    }

                    .cc-slider__nav {
                        width: 46px;
                        height: 46px;
                    }

                    .cc-slider__nav svg {
                        width: 18px;
                        height: 18px;
                    }

                    .cc-slider__number {
                        display: none;
                    }

                    .cc-slider__dot {
                        width: 32px;
                    }

                    .cc-slider__dot--active {
                        width: 48px;
                    }
                }

                @media (max-width: 576px) {
                    .cc-slider__content {
                        padding-bottom: 45%;
                        padding-left: 20px;
                        padding-right: 20px;
                    }

                    .cc-slider__title {
                        font-size: 2rem;
                    }

                    .cc-slider__subtitle {
                        font-size: 0.9rem;
                    }

                    .cc-slider__btn {
                        padding: 14px 28px;
                        font-size: 0.85rem;
                    }

                    .cc-slider__nav {
                        width: 42px;
                        height: 42px;
                        top: auto;
                        bottom: 10%;
                        transform: none;
                    }

                    .cc-slider__nav--prev {
                        left: 50%;
                        right: auto;
                        transform: translateX(-60px);
                    }

                    .cc-slider__nav--next {
                        left: 50%;
                        right: auto;
                        transform: translateX(8px);
                    }

                    .cc-slider__dots {
                        bottom: auto;
                        top: 5%;
                    }

                    .cc-slider__dot {
                        width: 28px;
                    }

                    .cc-slider__dot--active {
                        width: 42px;
                    }
                }
            `}</style>
        </>
    )
}
