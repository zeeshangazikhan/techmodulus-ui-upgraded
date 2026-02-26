import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import Link from "next/link"
import { useState } from "react"

export default function PortfolioDetails() {
    const [scroll, setScroll] = useState(0)

    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }

    return (
        <>
            <StickyHeader scroll={scroll} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">
                    {/*-portfolio*/}
                    <section className="portfolio-dtail-section">
                        {/*-============spacing==========-*/}
                        <div className="pd_top_90" />
                        {/*-============spacing==========-*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 pd_right_30">
                                    <div className="image_box">
                                        <img src="/assets/images/portfolio/pro-details-min.png" className="img-fluid w_100" alt="img" />
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="section_title medium type_one">
                                        <div className="title_whole">
                                            <h2 className="title"> E-Commerce Platform Development</h2>
                                        </div>
                                        <p> A comprehensive e-commerce solution built with modern technologies to provide seamless shopping experience. This platform includes advanced product management, secure payment processing, and real-time inventory tracking. The system is designed to handle high traffic with optimized performance and scalability.</p>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="position-relative">
                                                <ul className="list_box list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> React Frontend </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> Node.js Backend </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> MongoDB Database </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_30" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="position-relative">
                                                <ul className="list_box list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> Stripe Integration </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> Admin Dashboard </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> User Analytics </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_30" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="position-relative">
                                                <ul className="list_box list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> AWS Hosting </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> SSL Security </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className=" fi-rr-checkbox" />
                                                            </div>
                                                            <Link className="links" href="#"> SEO Optimized </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_30" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/testimonial/testimonial-image-1.jpg" className="img-fluid" alt="img" />
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="section_title medium type_one">
                                        <div className="title_whole">
                                            <h2 className="title"> Project Summary</h2>
                                        </div>
                                        <p> This e-commerce platform was developed to revolutionize online shopping with cutting-edge technology. The project involved building a robust API, implementing complex business logic, and creating an intuitive user interface. We focused on performance optimization, security, and user experience to deliver a world-class platform.</p>
                                        <p> The platform successfully handles thousands of concurrent users, processes multiple payment gateways, and maintains real-time inventory synchronization across multiple channels. Our team implemented automated testing, continuous integration, and deployment pipelines for reliable updates.</p>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="section_title medium type_one">
                                        <div className="title_whole">
                                            <h2 className="title"> About Project</h2>
                                        </div>
                                        <p> A modern e-commerce platform built with latest web technologies and best practices. Designed for scalability, security, and exceptional user experience.</p>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative rounded_radius_10 pd_left_30 pd_right_30 md_pd_left_15 md_pd_right_15 pd_top_30 pd_bottom_20 bg_light_1 overflow-hidden bg_op_1" style={{ backgroundImage: 'url(assets/images/bg-2-2.png)!important' }}>
                                        <ul className="list_box list">
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Client</span>
                                                    <strong className="w_50"> TechCorp Inc </strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Year</span>
                                                    <strong className="w_50"> January {new Date().getFullYear()} </strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Team Size</span>
                                                    <strong className="w_50"> 8 Developers </strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Location </span>
                                                    <strong className="w_50"> San Francisco </strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Category </span>
                                                    <strong className="w_50"> Full Stack Development </strong>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="section_title type_one">
                                        <p> Built with React, Node.js, and MongoDB to create a scalable and performant e-commerce solution that drives sales and customer satisfaction.</p>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="social-icons">
                                        <ul>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-linkedin" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-github" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_60" />
                        {/*-============spacing==========-*/}
                    </section>
                    {/*-slider end*/}
                </div>
            </div>
            <Footer4 />
        </>
    )
}