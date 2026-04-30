'use client'

import { useEffect, useRef } from 'react'

/**
 * Zero-dependency, mobile-first scroll reveal.
 * Honours prefers-reduced-motion automatically (CSS handles it).
 *
 * Props:
 *  - as:        HTML tag to render (default 'div')
 *  - delay:     ms before animating (default 0)
 *  - y:         px to translate from (default 24)
 *  - variant:   'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade' (default 'up')
 *  - once:      disconnect after first reveal (default true)
 *  - className: extra classes to merge
 */
export default function Reveal({
    children,
    as: Tag = 'div',
    delay = 0,
    y = 24,
    variant = 'up',
    once = true,
    className = '',
    ...rest
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // SSR / no-IO fallback: just show
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            el.classList.add('is-revealed')
            return
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add('is-revealed')
                        if (once) io.unobserve(el)
                    } else if (!once) {
                        el.classList.remove('is-revealed')
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        )

        io.observe(el)
        return () => io.disconnect()
    }, [once])

    const style = {
        '--fx-delay': `${delay}ms`,
        '--fx-y': `${y}px`,
    }

    return (
        <Tag
            ref={ref}
            className={`fx-reveal fx-reveal--${variant} ${className}`.trim()}
            style={style}
            {...rest}
        >
            {children}
        </Tag>
    )
}
