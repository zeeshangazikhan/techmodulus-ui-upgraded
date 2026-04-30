'use client'

import StickyContact from "@/components/elements/StickyContact"
import Preloader from "@/components/elements/Preloader"
import SmoothScroll from "@/components/elements/SmoothScroll"
import BackToTop from "@/components/elements/BackToTop"
import { useEffect, useState } from "react"

export default function ClientProviders({ children }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <SmoothScroll />
                    {children}
                    <StickyContact />
                    <BackToTop />
                </>
            )}
        </>
    )
}
