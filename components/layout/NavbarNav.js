import Link from "next/link"

export default function NavbarNav() {

    return (
        <>

            <ul className="navbar_nav">
                <li className="menu-item nav-item">
                    <Link href="/" className="nav_link">
                        <span className="text-link">Home</span>
                    </Link>
                </li>
                <li className="menu-item nav-item">
                    <Link href="/service" className="nav_link">
                        <span className="text-link">Solutions</span>
                    </Link>
                </li>
                <li className="menu-item nav-item">
                    <Link href="/portfolio-style-1" className="nav_link">
                        <span className="text-link">Case Studies</span>
                    </Link>
                </li>
                <li className="menu-item nav-item">
                    <Link href="/about-us" className="nav_link">
                        <span className="text-link">Who We Are</span>
                    </Link>
                </li>
                <li className="menu-item nav-item">
                    <Link href="/contact" className="nav_link">
                        <span className="text-link">Get In Touch</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
