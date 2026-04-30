'use client'

import { useState, useRef, useEffect } from 'react'
import CountUp from "react-countup"

export default function CounterUp({ count, time, color }) {
    const [counterOn, setCounterOn] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { setCounterOn(entry.isIntersecting) },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.unobserve(el)
    }, [])

    return (
        <span ref={ref}>
            {counterOn && (
                <CountUp end={count} duration={time} redraw={true}>
                    {({ countUpRef }) => (
                        <span className={`count ${color ? color : ""}`} ref={countUpRef}></span>
                    )}
                </CountUp>
            )}
        </span>
    )
}

