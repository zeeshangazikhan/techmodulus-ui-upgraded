'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const LINKS = [
    { href: '/',                label: 'Home' },
    { href: '/service',         label: 'Solutions',   matchPrefix: '/service' },
    { href: '/portfolio-style-1', label: 'Case Studies', matchPrefix: '/portfolio' },
    { href: '/about-us',        label: 'Who We Are',  matchPrefix: '/about' },
]

export default function NavbarNav() {
    const pathname = usePathname()

    const isActive = (link) => {
        if (link.href === '/') return pathname === '/'
        if (link.matchPrefix) return pathname.startsWith(link.matchPrefix)
        return pathname === link.href
    }

    return (
        <ul className="navbar_nav">
            {LINKS.map(link => (
                <li key={link.href} className={`menu-item nav-item${isActive(link) ? ' is-active' : ''}`}>
                    <Link href={link.href} className={`nav_link${isActive(link) ? ' nav_link--active' : ''}`}>
                        <span className="text-link">{link.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
