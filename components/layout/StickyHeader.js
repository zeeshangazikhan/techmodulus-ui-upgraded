import Link from "next/link"
import { useState } from "react"
import NavbarNav from "./NavbarNav"
import MobileMenu from "./MobileMenu"

export default function StickyHeader({ scroll, handleSearch, handleOptionalPanel, handleMobileMenu }) {
    const [isMobileMenu, setMobileMenu] = useState(false)
    
    const toggleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
    }
    
    return (
        <>
            <div className="sticky-header-wrapper">
                <header className="sticky-header">
                    <div className="header-inner">
                        {/* Logo */}
                        <div className="logo-box">
                            <Link href="/" className="logo-link">
                                <img src="/assets/images/theme-logo.png" alt="Data Driven Enterprise" />
                            </Link>
                        </div>

                        {/* Navigation */}
                        <nav className="main-nav">
                            <NavbarNav />
                        </nav>

                        {/* Mobile Toggle */}
                        <div className="hamburger" onClick={toggleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </header>
            </div>

            <style jsx>{`
                .sticky-header-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 9999;
                    background: #ffffff;
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
                }

                .sticky-header {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 30px;
                }

                .header-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 80px;
                }

                /* Logo */
                .logo-box {
                    flex-shrink: 0;
                }

                .logo-link {
                    display: block;
                }

                .logo-link img {
                    height: 48px;
                    width: auto;
                }

                /* Navigation */
                .main-nav {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                }

                /* Hamburger */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    gap: 6px;
                    width: 44px;
                    height: 44px;
                    padding: 10px;
                    cursor: pointer;
                    border-radius: 8px;
                    transition: background 0.3s ease;
                }

                .hamburger:hover {
                    background: #f1f5f9;
                }

                .hamburger span {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background: #1e293b;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }

                /* Responsive */
                @media (max-width: 992px) {
                    .sticky-header {
                        padding: 0 20px;
                    }

                    .header-inner {
                        height: 70px;
                    }

                    .main-nav {
                        display: none;
                    }

                    .hamburger {
                        display: flex;
                    }

                    .logo-link img {
                        height: 42px;
                    }
                }

                @media (max-width: 576px) {
                    .sticky-header {
                        padding: 0 15px;
                    }

                    .header-inner {
                        height: 65px;
                    }

                    .logo-link img {
                        height: 36px;
                    }

                    .hamburger {
                        width: 40px;
                        height: 40px;
                        gap: 5px;
                    }
                }
            `}</style>

            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={toggleMobileMenu} />
        </>
    )
}
