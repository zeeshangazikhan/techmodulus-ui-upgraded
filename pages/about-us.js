import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
import { Target, Eye, Heart, ChevronRight, Globe, Zap } from "lucide-react"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function AboutUs() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={-1} breadcrumbTitle="Who We Are" footerStyle={4}>
                {/*-about*/}
                <section className="about-section position-relative">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Section Header */}
                                <div className="dde-about-header">
                                    <span className="dde-about-badge">
                                        <Globe size={14} />
                                        About Data Driven Enterprise
                                    </span>
                                    <h2 className="dde-about-title">Who We Are</h2>
                                    <div className="dde-about-divider" />
                                </div>

                                {/* Content Paragraphs */}
                                <div className="dde-about-content">
                                    <p className="dde-about-lead">
                                        <strong>Data Driven Enterprise</strong> partners with enterprises, startups, and SMBs to coach, train, and guide their end-to-end technology journey in the era of <strong>AI and Quantum Computing.</strong>
                                    </p>
                                    <p className="dde-about-text">
                                        In today's rapidly evolving digital landscape, businesses face unprecedented challenges — from managing vast amounts of data to adopting cutting-edge technologies that drive competitive advantage. That's where we step in. Our team of seasoned technologists, strategists, and innovators work hand-in-hand with your organization to bridge the gap between where you are and where you need to be.
                                    </p>
                                    <p className="dde-about-text">
                                        We design and build technology-agnostic solutions, enabling organizations to adapt to change without business downtime — ensuring long-term resilience, scalability, and innovation. Whether it's modernizing legacy systems, implementing enterprise-grade AI solutions, or creating high-performance digital platforms, we deliver measurable outcomes that matter.
                                    </p>
                                    <p className="dde-about-text">
                                        With a deep understanding of industry-specific challenges across healthcare, finance, retail, manufacturing, and beyond, we don't just deliver technology — we deliver transformation. Our client-first philosophy means every solution is tailored to your unique goals, timeline, and budget.
                                    </p>
                                </div>

                                {/* Tabs Section */}
                                <div className="dde-tabs-wrapper">
                                    <div className="dde-tabs-nav">
                                        <button 
                                            className={`dde-tab-btn ${activeIndex === 1 ? 'active' : ''}`}
                                            onClick={() => handleOnClick(1)}
                                        >
                                            <Target size={18} />
                                            <span>Our Mission</span>
                                        </button>
                                        <button 
                                            className={`dde-tab-btn ${activeIndex === 2 ? 'active' : ''}`}
                                            onClick={() => handleOnClick(2)}
                                        >
                                            <Eye size={18} />
                                            <span>Our Vision</span>
                                        </button>
                                        <button 
                                            className={`dde-tab-btn ${activeIndex === 3 ? 'active' : ''}`}
                                            onClick={() => handleOnClick(3)}
                                        >
                                            <Heart size={18} />
                                            <span>Our Values</span>
                                        </button>
                                    </div>

                                    <div className="dde-tabs-content">
                                        {activeIndex === 1 && (
                                            <div className="dde-tab-panel">
                                                <p>Remove technology complexity from the business equation, allowing leaders to focus on growth and success. We empower organizations with intelligent technology solutions that unlock new possibilities and drive sustainable growth through innovation and excellence.</p>
                                                <div className="dde-tab-tags">
                                                    <span className="dde-tag"><Zap size={14} /> Transform Industries</span>
                                                    <span className="dde-tag"><Zap size={14} /> Drive Innovation</span>
                                                    <span className="dde-tag"><Zap size={14} /> Sustainable Growth</span>
                                                </div>
                                            </div>
                                        )}
                                        {activeIndex === 2 && (
                                            <div className="dde-tab-panel">
                                                <p>Empower businesses with hassle-free technology, so focus remains on outcomes — not challenges. We envision a world where cutting-edge AI technology is accessible to every organization, transforming industries and creating a smarter, more efficient future for all.</p>
                                                <div className="dde-tab-tags">
                                                    <span className="dde-tag"><Zap size={14} /> Accessible Technology</span>
                                                    <span className="dde-tag"><Zap size={14} /> Industry Transformation</span>
                                                    <span className="dde-tag"><Zap size={14} /> Smarter Future</span>
                                                </div>
                                            </div>
                                        )}
                                        {activeIndex === 3 && (
                                            <div className="dde-tab-panel">
                                                <p>Innovation, integrity, and client success drive every solution we build and every partnership we forge. We are committed to delivering excellence through cutting-edge technology solutions that create lasting value for businesses and communities worldwide.</p>
                                                <div className="dde-tab-tags">
                                                    <span className="dde-tag"><Zap size={14} /> Advanced AI Technology</span>
                                                    <span className="dde-tag"><Zap size={14} /> Expert Team</span>
                                                    <span className="dde-tag"><Zap size={14} /> Data Security</span>
                                                    <span className="dde-tag"><Zap size={14} /> Global Reach</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_70" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    <div className="ab_img_right_bottom z_minus_1">
                        <img src="/assets/images/bg-2.png" className="img-fluid" alt="img" />
                    </div>
                </section>
                {/*-about end*/}
                {/*content*/}
                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Why Choose Us</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> We Help you to Build
                                            for Better Future</h2>
                                    </div>
                                    <p> At Data Driven Enterprise, we combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business impact. Our team is committed to helping you transform challenges into opportunities.</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="theme_btn_all">
                                    <Link href="/portfolio-style-1" className="theme_btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                        Learn More <ChevronRight size={18} style={{ verticalAlign: 'middle' }} />
                                    </Link>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6">
                                <div className="image_video_box_only type_one mr_bottom_minus_90 z_1">
                                    <div className="image one height_530px">
                                        <img src="/assets/images/service/digital-strategy.jpg" alt="Technology Solutions" className="img-fluid height_530px" style={{ objectFit: 'cover', borderRadius: '12px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*content*/}
                {/*funfacts*/}
                <section className="analysis-section position-relative bg_1 overflow-hidden">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_170" />
                    {/*-============spacing==========-*/}
                    <div className="ab_img_left_top z_0 mr_top_minus_150">
                        <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
                    </div>
                    <div className="medium-container-two">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center color_white type_one">
                                    <h4 className="sm_title">Company Statistics Analysis</h4>
                                    <div className="title_whole">
                                        <h2 className="title">CienceChip Success Metrics</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_30" />
                        {/*-============spacing==========-*/}
                        <div className="row">
                            <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-satisfaction" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={38} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_18">Happy Clients</h6>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-business-people" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={100} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_18">Team Members</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-reviews" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={50} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_18">Projects Delivered</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-reviews" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={100} time={1} />
                                        <small>
                                            % </small></h4>
                                    <h6 className="title_no_a_18">Satisfaction Rate</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-trophy" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={10} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_18">Industries Served</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>
                            <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                    <div className="ab_img_right_bottom z_0 mr_bottom_minus_250">
                        <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
                    </div>
                </section>
                {/*funfacts*/}
                {/*team*/}

                {/*team*/}
                {/*client*/}
                <section className="client-section" style={{ background: '#fff' }}>
                    {/*-============spacing==========-*/}
                    <div className="pd_top_40" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 pd_right_60">
                                <div className="section_title type_one small">
                                    <h4 className="sm_title"> Popular Clients</h4>
                                    <div className="title_whole">
                                    <h2 className="title"> Trusted by Leading Tech Innovators Worldwide</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    {[11,12,13,14,15,16].map((num) => (
                                        <div key={num} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="dde-client-logo mr_bottom_20 mr_top_20">
                                                <img src={`/assets/images/client-${num}.png`} className="img-fluid m-auto" alt="client" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_30" />
                    {/*-============spacing==========-*/}
                </section>
                {/*client*/}

                <style jsx>{`
                    /* ===== WHO WE ARE SECTION ===== */
                    .dde-about-header {
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    .dde-about-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: rgba(0,139,249,0.07);
                        color: #008BF9;
                        padding: 8px 22px;
                        border-radius: 50px;
                        font-size: 13px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        margin-bottom: 20px;
                    }
                    .dde-about-title {
                        font-size: clamp(2rem, 4vw, 2.8rem);
                        font-weight: 800;
                        color: #0F3567;
                        margin: 0 0 16px;
                        line-height: 1.15;
                    }
                    .dde-about-divider {
                        width: 60px;
                        height: 4px;
                        background: linear-gradient(90deg, #008BF9, #00c6ff);
                        border-radius: 4px;
                        margin: 0 auto;
                    }

                    /* Content */
                    .dde-about-content {
                        max-width: 880px;
                        margin: 0 auto 40px;
                        text-align: center;
                    }
                    .dde-about-lead {
                        font-size: 1.2rem;
                        line-height: 1.85;
                        color: #1e293b;
                        margin-bottom: 24px;
                    }
                    .dde-about-lead strong {
                        color: #008BF9;
                    }
                    .dde-about-text {
                        font-size: 1.02rem;
                        line-height: 1.85;
                        color: #475569;
                        margin-bottom: 18px;
                    }

                    /* Tabs */
                    .dde-tabs-wrapper {
                        max-width: 880px;
                        margin: 0 auto;
                    }
                    .dde-tabs-nav {
                        display: flex;
                        justify-content: center;
                        gap: 12px;
                        margin-bottom: 0;
                        border-bottom: 2px solid #e2e8f0;
                        padding-bottom: 0;
                    }
                    .dde-tab-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        padding: 14px 28px;
                        border: none;
                        background: transparent;
                        color: #64748b;
                        font-size: 0.95rem;
                        font-weight: 600;
                        cursor: pointer;
                        position: relative;
                        transition: all 0.3s ease;
                        border-bottom: 3px solid transparent;
                        margin-bottom: -2px;
                    }
                    .dde-tab-btn:hover {
                        color: #008BF9;
                    }
                    .dde-tab-btn.active {
                        color: #008BF9;
                        border-bottom-color: #008BF9;
                    }
                    .dde-tabs-content {
                        padding: 32px 0 0;
                    }
                    .dde-tab-panel {
                        text-align: center;
                        animation: ddeFadeIn 0.35s ease;
                    }
                    @keyframes ddeFadeIn {
                        from { opacity: 0; transform: translateY(8px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .dde-tab-panel p {
                        font-size: 1.02rem;
                        line-height: 1.85;
                        color: #475569;
                        margin-bottom: 24px;
                        max-width: 720px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .dde-tab-tags {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 10px;
                    }
                    .dde-tag {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        background: rgba(0,139,249,0.06);
                        color: #008BF9;
                        padding: 8px 18px;
                        border-radius: 50px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        border: 1px solid rgba(0,139,249,0.12);
                        transition: all 0.3s;
                    }
                    .dde-tag:hover {
                        background: #008BF9;
                        color: #fff;
                        border-color: #008BF9;
                    }

                    /* Client logos */
                    .dde-client-logo {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 10px;
                    }
                    .dde-client-logo img {
                        filter: grayscale(100%) opacity(0.45);
                        transition: all 0.4s ease;
                    }
                    .dde-client-logo:hover img {
                        filter: grayscale(0%) opacity(1);
                        transform: scale(1.05);
                    }

                    /* Responsive */
                    @media (max-width: 768px) {
                        .dde-tabs-nav {
                            flex-direction: column;
                            align-items: stretch;
                            gap: 4px;
                            border-bottom: none;
                        }
                        .dde-tab-btn {
                            justify-content: center;
                            border-bottom: none;
                            border-left: 3px solid transparent;
                            margin-bottom: 0;
                            padding: 12px 20px;
                            border-radius: 8px;
                            background: #f8fafc;
                        }
                        .dde-tab-btn.active {
                            background: rgba(0,139,249,0.06);
                            border-left-color: #008BF9;
                            border-bottom-color: transparent;
                        }
                        .dde-tab-tags {
                            gap: 8px;
                        }
                        .dde-tag {
                            padding: 6px 14px;
                            font-size: 0.8rem;
                        }
                    }
                `}</style>

            </Layout>
        </>
    )
}