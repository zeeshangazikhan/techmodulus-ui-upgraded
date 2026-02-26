import Link from 'next/link'
export default function MobileMenu({ handleMobileMenu, isMobileMenu }) {

    return (
        <>
            <div className={isMobileMenu ? "mobile_menu_box-visible" : ""}>
                <div className="mobile_menu_box">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box scrollbarcolor">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #eee' }}>
                            <div className="mobile_logo">
                                <Link href="/" className="logo navbar-brand" onClick={handleMobileMenu}>
                                    <img src="/assets/images/theme-logo.png" alt="Vankine" className="img-fluid" style={{ maxHeight: '50px' }} />
                                </Link>
                            </div>
                            <div className="close-btn" onClick={handleMobileMenu} style={{ margin: 0, padding: '5px', fontSize: '24px' }}>
                                <i className="fi-rr-cross" />
                            </div>
                        </div>
                        <div className="menu-outer">
                            <div className="navigation_menu">
                                <ul className="navbar_nav">
                                    <li className="menu-item nav-item">
                                        <Link href="/" className="nav_link">
                                            <span className="text-link">Home</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/service" className="nav_link">
                                            <span className="text-link">Services</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/portfolio-style-1" className="nav_link">
                                            <span className="text-link">Our Works</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/about-us" className="nav_link">
                                            <span className="text-link">About Us</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link href="/contact" className="nav_link">
                                            <span className="text-link">Contact Us</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info">
                                <Link href="tel:9806071234" className="cnt">
                                    <i className="fi-rs-headphones" />9806071234 </Link>
                            </div>
                            <div className="single-mobile-header-info cont_over">
                                <Link href="mailto:sendmail@example.com" className="cnt">
                                    <i className="fi-rs-envelope" />sendmail@example.com </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#" className="theme_btn tp_one">Contact</Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#" className="theme_btn">Service</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
