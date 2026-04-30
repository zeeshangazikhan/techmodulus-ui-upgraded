'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false, loading: () => null })

/**
 * Lazy mounter for Hero3D with hardware + motion gating.
 *
 * Skips entirely when:
 *  - prefers-reduced-motion: reduce
 *  - hardwareConcurrency < 4 (very low-end devices)
 *  - WebGL is unavailable
 *  - deviceMemory < 2 GB (when reported)
 *
 * Mounts only after the user is past first paint to keep LCP fast.
 */
export default function Hero3DLazy({ className = '', style = {} }) {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduce) return

        const cores = navigator.hardwareConcurrency || 4
        if (cores < 4) return

        const mem = navigator.deviceMemory
        if (typeof mem === 'number' && mem < 2) return

        // WebGL availability
        try {
            const c = document.createElement('canvas')
            const gl = c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl')
            if (!gl) return
        } catch (_) {
            return
        }

        // Defer mount to after first idle frame so LCP is unaffected
        const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200))
        const id = idle(() => setEnabled(true))
        return () => {
            if (window.cancelIdleCallback && typeof id === 'number') {
                try { window.cancelIdleCallback(id) } catch (_) { /* noop */ }
            } else {
                clearTimeout(id)
            }
        }
    }, [])

    if (!enabled) return null
    return <Hero3D className={className} style={style} />
}
