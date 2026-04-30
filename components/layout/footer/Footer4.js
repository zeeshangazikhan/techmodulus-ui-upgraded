'use client'

import Link from "next/link"

export default function Footer4({ }) {
    return (
        <>
            <footer className="footer style_four">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <section className="container">
                    <div className="call_to_action style_one">
                        <div className="section_title type_one">
                            <div className="title_whole">
                                <h4 className="sm_title">Contact Us</h4>
                                <h2 className="title">
                                    Start Your Software Project
                                    with TechModulus
                                </h2>
                            </div>
                        </div>
                        <div className="theme_btn_all">
                            <Link href="/contact" className="theme_btn">
                                Start a Project <span> <i className=" fi-rr-arrow-small-up" /></span>
                            </Link>
                        </div>

                    </div>
                </section>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
                <section className="mid_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list_box text-center linline">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans" />
                                            <Link className="links color_white" href="/">
                                                Home
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans" />
                                            <Link className="links color_white" href="/service">
                                                Services
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans" />
                                            <Link className="links color_white" href="/portfolio-style-1">
                                                Our Works
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans" />
                                            <Link className="links color_white" href="/about-us">
                                                About Us
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans" />
                                            <Link className="links color_white" href="/contact">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
                <section className="container">
                    <div className="bottom_content">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="logo_box">
                                    <Link href="#" className="logo navbar-brand">
                                        <img src="/assets/images/footer-logo-three.png" alt="Vankine" className="logo_default" />
                                    </Link>
                                </div>
                            </div>
                                <div className="col-lg-7 text-md-end">
                                <div className="position-relative color_white">
                                    Copyright {new Date().getFullYear()}, TechModulus. All Rights Reserved</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
                <div className="pattern_1">
                    <img src="/assets/images/dot-round-2.png" className="img-fluid" alt="img" />
                </div>
                <div className="pattern_2">
                    <img src="/assets/images/pattern-3.png" className="img-fluid" alt="img" />
                </div>
     
            </footer>

        </>
    )
}
