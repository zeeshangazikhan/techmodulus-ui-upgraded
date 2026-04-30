'use client'

import Link from "next/link"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { useState } from "react"

export default function ServiceDetails() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">
                    {/* Breadcrumb Section */}
                    <section className="page_header_default pg_bg_cover alignment_center">
                        <div className="bakground_cover" style={{ backgroundImage: 'url(assets/images/page-image-1-min.jpg)' }} />
                        <div className="page_header_content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="banner_title_inner">
                                            <div className="title">
                                                <span className="main_tit">Web Development Services</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 vankine">
                                        <ul className="breadcrumb m-auto">
                                            <li><Link href="#">Home</Link></li>
                                            <li><Link href="#">Services</Link></li>
                                            <li className="active">Web Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*content*/}
                    <section className="content-section">
                        {/*-============spacing==========-*/}
                        <div className="pd_top_90" />
                        {/*-============spacing==========-*/}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="image_box">
                                        <img src="/assets/images/service/ser-v1-1-min.png" className="img-fluid" alt="Web Development" />
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pd_left_30">
                                    {/*-============spacing==========-*/}
                                    <div className="pd_top_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="section_title type_one">
                                        <h4 className="sm_title">Our Web Development</h4>
                                        <div className="title_whole">
                                            <h2 className="title">Scalable & Modern Web Solutions</h2>
                                        </div>
                                        <p>We build robust, scalable web applications using cutting-edge technologies like React, Next.js, Node.js, and MongoDB. Our expert developers create fully-responsive, performance-optimized web solutions that drive business growth.</p>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_30" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="position-relative">
                                                <ul className="list_box weight_500 list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rs-shield-check" />
                                                            </div>
                                                            <Link className="links" href="#">React & Next.js</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rs-shield-check" />
                                                            </div>
                                                            <Link className="links" href="#">Fast & Optimized</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rs-shield-check" />
                                                            </div>
                                                            <Link className="links" href="#">24/7 Support</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_20" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="position-relative">
                                                <ul className="list_box weight_500 list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rs-shield-check" />
                                                            </div>
                                                            <Link className="links" href="#">Cloud Deployment</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rs-shield-check" />
                                                            </div>
                                                            <Link className="links" href="#">SEO Optimized</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rs-shield-check" />
                                                            </div>
                                                            <Link className="links" href="#">Security First</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_20" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_50" />
                        {/*-============spacing==========-*/}
                    </section>
                    {/*content*/}

                    {/*content*/}
                    <section className="content-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pd_right_70">
                                    <div className="section_title type_one">
                                        <h4 className="sm_title">Service Packages</h4>
                                        <div className="title_whole">
                                            <h2 className="title">Web Development Solutions for All Scales</h2>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_40" />
                                    {/*-============spacing==========-*/}
                                    <div className="icon_box_only type_five color_two d-flex trans">
                                        <div className="icon">
                                            <i className="fi-rr-comment-check" />
                                        </div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">Startup Web Apps</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_top_15" />
                                    {/*-============spacing==========-*/}
                                    <div className="divider" />
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                    <div className="icon_box_only type_five color_two d-flex trans">
                                        <div className="icon">
                                            <i className="fi-rr-comment-check" />
                                        </div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">Enterprise Solutions</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_top_15" />
                                    {/*-============spacing==========-*/}
                                    <div className="divider" />
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                    <div className="icon_box_only type_five color_two d-flex trans">
                                        <div className="icon">
                                            <i className="fi-rr-comment-check" />
                                        </div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">E-Commerce Platforms</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_top_15" />
                                    {/*-============spacing==========-*/}
                                    <div className="divider" />
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_45" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="image_box mr_bottom_minus_200 position-relative z_2">
                                        <img src="/assets/images/service/ser-v1-2-min.png" className="img-fluid" alt="Service Solutions" />
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_50" />
                        {/*-============spacing==========-*/}
                    </section>
                    {/*content*/}

                    {/*-service features-*/}
                    <section className="service-section position-relative bg_op_1 overflow-hidden" style={{ backgroundImage: 'url(assets/images/ser-bg-bg-min.jpg)' }}>
                        {/*-============spacing==========-*/}
                        <div className="pd_top_140" />
                        {/*-============spacing==========-*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section_title text-center type_one">
                                        <h4 className="sm_title">Advanced Features</h4>
                                        <div className="title_whole">
                                            <h2 className="title">Technology Stack & Features</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="icon_box_only type_one color_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className="flaticon-code" style={{fontSize: '32px'}} />
                                            </div>
                                        </div>
                                        <div className="content_box">
                                            <h4 className="title_18">React & Next.js</h4>
                                            <p>Modern frontend frameworks for blazing-fast user interfaces</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="icon_box_only type_one color_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className="flaticon-server" style={{fontSize: '32px'}} />
                                            </div>
                                        </div>
                                        <div className="content_box">
                                            <h4 className="title_18">Node.js Backend</h4>
                                            <p>Scalable server solutions with Express & authentication</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="icon_box_only type_one color_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className="flaticon-database" style={{fontSize: '32px'}} />
                                            </div>
                                        </div>
                                        <div className="content_box">
                                            <h4 className="title_18">MongoDB & SQL</h4>
                                            <p>Flexible database solutions for any data requirement</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="icon_box_only type_one color_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className="flaticon-security" style={{fontSize: '32px'}} />
                                            </div>
                                        </div>
                                        <div className="content_box">
                                            <h4 className="title_18">Security First</h4>
                                            <p>SSL, JWT tokens, and encryption for maximum protection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*-FAQs section-*/}
                    <section className="faq-section">
                        {/*-============spacing==========-*/}
                        <div className="pd_top_80" />
                        {/*-============spacing==========-*/}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="image_box">
                                        <img src="/assets/images/service/ser-v1-3-min.png" alt="Web Development FAQs" className="img-fluid" />
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_40" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                    <div className="section_title type_one">
                                        <h4 className="sm_title">Common Questions</h4>
                                        <div className="title_whole">
                                            <h2 className="title">Web Development FAQs</h2>
                                        </div>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_20" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="position-relative br_left_3px_theme_color pd_left_10">Get answers to your most common questions about our web development services, timelines, and pricing.</div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                    <div className="block_faq">
                                        <div className="accordion-box">
                                            <div className={isActive.key == 1 ? "accordion active-block" : "accordion"}>
                                                <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                    <div className="question_box">
                                                        <div className="title_no_a_18 trans">What technologies do you use?</div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>We specialize in React, Next.js, Node.js, MongoDB, and modern web technologies to build scalable applications.</div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accordion active-block" : "accordion"}>
                                                <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                    <div className="question_box">
                                                        <div className="title_no_a_18 trans">What is the typical project timeline?</div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>Project timelines vary based on complexity. Simple websites take 2-4 weeks, while enterprise solutions may take 3-6 months.</div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accordion active-block" : "accordion"}>
                                                <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                    <div className="question_box">
                                                        <div className="title_no_a_18 trans">Do you provide post-launch support?</div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>Yes! We offer 24/7 support, maintenance packages, and continuous updates to keep your application running smoothly.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_40" />
                                    {/*-============spacing==========-*/}
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_40" />
                        {/*-============spacing==========-*/}
                    </section>
                    {/*-FAQs end-*/}
                </div>
            </div>
            <Footer4 />
        </>
    )
}

