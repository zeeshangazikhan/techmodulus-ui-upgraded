'use client'

import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { getProjectBySlug } from "@/util/portfolioData"

export default function PortfolioDetailsPage() {
    const params = useParams()
    const { slug } = params
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [scroll])

    const project = getProjectBySlug(slug)

    if (!project) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '100vh' }}>
                <h2>Project Not Found</h2>
                <p>The portfolio project you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/portfolio-style-1" className="btn_default">
                    Back to Portfolio
                </Link>
            </div>
        )
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
                                        <img src={project.detailImage} className="img-fluid w_100" alt={project.title} />
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="section_title medium type_one">
                                        <div className="title_whole">
                                            <h2 className="title">{project.title} - {project.category}</h2>
                                        </div>
                                        <p>{project.fullDescription}</p>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="position-relative">
                                                <h4 style={{ marginBottom: '20px', color: '#008BF9' }}>Technologies Used</h4>
                                                <ul className="list_box list">
                                                    {project.technologies.map((tech, idx) => (
                                                        <li key={idx}>
                                                            <div className="d-flex align-items-center">
                                                                <div className="icon trans">
                                                                    <i className="fi-rr-checkbox" />
                                                                </div>
                                                                <span className="links">{tech}</span>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_30" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="position-relative">
                                                <h4 style={{ marginBottom: '20px', color: '#008BF9' }}>Key Features</h4>
                                                <ul className="list_box list">
                                                    {project.features.map((feature, idx) => (
                                                        <li key={idx}>
                                                            <div className="d-flex align-items-center">
                                                                <div className="icon trans">
                                                                    <i className="fi-rr-checkbox" />
                                                                </div>
                                                                <span className="links">{feature}</span>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_30" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image_box" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                        <img src={project.summaryImage || '/assets/images/testimonial/testimonial-image-1.jpg'} className="img-fluid w_100" alt={`${project.title} - Project Summary`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="section_title medium type_one">
                                        <div className="title_whole">
                                            <h2 className="title">Project Summary</h2>
                                        </div>
                                        {Array.isArray(project.summary) ? (
                                            project.summary.map((paragraph, idx) => (
                                                <p key={idx} style={{ marginBottom: '18px', lineHeight: '1.8', textAlign: 'justify' }}>{paragraph}</p>
                                            ))
                                        ) : (
                                            <p style={{ lineHeight: '1.8', textAlign: 'justify' }}>{project.summary}</p>
                                        )}
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="section_title medium type_one">
                                        <div className="title_whole">
                                            <h2 className="title">About Project</h2>
                                        </div>
                                        <p>{project.description}</p>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative rounded_radius_10 pd_left_30 pd_right_30 md_pd_left_15 md_pd_right_15 pd_top_30 pd_bottom_20 bg_light_1 overflow-hidden bg_op_1">
                                        <ul className="list_box list">
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Client</span>
                                                    <strong className="w_50">{project.client}</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Year</span>
                                                    <strong className="w_50">{project.year}</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Team Size</span>
                                                    <strong className="w_50">{project.teamSize}</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Location</span>
                                                    <strong className="w_50">{project.location}</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                                                    <span className="w_50">Category</span>
                                                    <strong className="w_50">{project.category}</strong>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="section_title type_one">
                                        <p>Built with cutting-edge technologies to deliver a scalable and performant solution that exceeds client expectations and drives measurable business results.</p>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    {project.website && (
                                        <>
                                            <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn_default" style={{ marginBottom: '15px', display: 'inline-block' }}>
                                                <i className="fi-rr-globe" style={{ marginRight: '8px' }} /> Visit Website
                                            </a>
                                            <div className="pd_bottom_15" />
                                        </>
                                    )}
                                    <Link href="/portfolio-style-1" className="btn_default">
                                        Back to Portfolio
                                    </Link>
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
