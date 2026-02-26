import Link from "next/link"
import VideoBox from "../elements/VideoBox"


export default function Content7() {
    return (
        <>
            <section className="who-we-are-section">
                <div className="container">
                    {/* Section Header (use site-standard classes) */}
                    <div className="section_title text-center type_one">
                        <h4 className="sm_title">About Data Driven Enterprise</h4>
                        <div className="title_whole">
                            <h2 className="title">Who We Are</h2>
                        </div>
                        <p className="section-subtitle">Transforming businesses through innovative technology solutions</p>
                    </div>

                    {/* Main Content */}
                    <div className="content-wrapper">
                        {/* Hero Text Block */}
                        <div className="hero-text-block">
                            <div className="text-content">
                                <p className="lead-paragraph">
                                    <span className="brand-name">Data Driven Enterprise</span> partners with enterprises, startups, and SMBs to coach, train, and guide their end-to-end technology journey in the era of <span className="highlight-text">AI and Quantum Computing.</span>
                                </p>
                                <div className="separator-line"></div>
                                <p className="sub-paragraph">
                                    We design and build technology-agnostic solutions, enabling organizations to adapt to change without business downtime—ensuring long-term resilience, scalability, and innovation.
                                </p>
                            </div>
                        </div>

                        {/* Mission Vision Values - Horizontal Layout */}
                        <div className="mvv-container">
                            <div className="mvv-card">
                                <div className="mvv-icon-wrap">
                                    <div className="mvv-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="mvv-content">
                                    <h3 className="mvv-title">Our Mission</h3>
                                    <p className="mvv-text">Remove technology complexity from the business equation, allowing leaders to focus on growth and success.</p>
                                </div>
                            </div>

                            <div className="mvv-card featured">
                                <div className="mvv-icon-wrap">
                                    <div className="mvv-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <circle cx="12" cy="12" r="6"/>
                                            <circle cx="12" cy="12" r="2"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="mvv-content">
                                    <h3 className="mvv-title">Our Vision</h3>
                                    <p className="mvv-text">Empower businesses with hassle-free technology, so focus remains on outcomes—not challenges.</p>
                                </div>
                            </div>

                            <div className="mvv-card">
                                <div className="mvv-icon-wrap">
                                    <div className="mvv-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="mvv-content">
                                    <h3 className="mvv-title">Our Values</h3>
                                    <p className="mvv-text">Innovation, integrity, and client success drive every solution we build and partnership we forge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .who-we-are-section {
                        position: relative;
                        padding: 90px 0;
                        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
                        overflow: hidden;
                    }

                    .who-we-are-section::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: var(--color-set-one-1, #008BF9);
                    }

                    .section-subtitle {
                        font-size: 1.05rem;
                        color: #64748b;
                        margin: 0 0 40px 0;
                        max-width: 600px;
                        margin-left: auto;
                        margin-right: auto;
                        font-weight: 400;
                        line-height: 1.7;
                    }

                    .section_title .sm_title,
                    .section_title .title {
                        color: var(--color-set-one-1, #008BF9);
                    }

                    .section_title .title {
                        color: #0F3567 !important;
                    }

                    .content-wrapper {
                        position: relative;
                        z-index: 1;
                    }

                    /* Hero Text Block */
                    .hero-text-block {
                        max-width: 950px;
                        margin: 0 auto 55px;
                        padding: 0 20px;
                        position: relative;
                    }

                    .text-content {
                        text-align: center;
                    }

                    .lead-paragraph {
                        font-size: clamp(1.25rem, 2.5vw, 1.5rem);
                        line-height: 1.75;
                        color: #1e293b;
                        margin-bottom: 0;
                        font-weight: 400;
                        position: relative;
                    }

                    .brand-name {
                        color: var(--color-set-one-1, #008BF9);
                        font-weight: 700;
                        font-size: 1.05em;
                    }

                    .highlight-text {
                        color: var(--color-set-one-1, #008BF9);
                        font-weight: 600;
                        position: relative;
                        display: inline-block;
                    }

                    .highlight-text::after {
                        content: '';
                        position: absolute;
                        bottom: 2px;
                        left: 0;
                        right: 0;
                        height: 2px;
                        background: linear-gradient(90deg, transparent 0%, var(--color-set-one-1, #008BF9) 50%, transparent 100%);
                        opacity: 0.3;
                    }

                    .separator-line {
                        width: 80px;
                        height: 3px;
                        background: var(--color-set-one-1, #008BF9);
                        margin: 25px auto;
                        border-radius: 2px;
                        position: relative;
                    }

                    .separator-line::before,
                    .separator-line::after {
                        content: '';
                        position: absolute;
                        width: 6px;
                        height: 6px;
                        background: var(--color-set-one-1, #008BF9);
                        border-radius: 50%;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    .separator-line::before {
                        left: -15px;
                    }

                    .separator-line::after {
                        right: -15px;
                    }

                    .sub-paragraph {
                        font-size: clamp(1.05rem, 2vw, 1.2rem);
                        line-height: 1.8;
                        color: #64748b;
                        margin: 0;
                        font-weight: 400;
                    }

                    /* Mission Vision Values Container */
                    .mvv-container {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 25px;
                    }

                    .mvv-card {
                        background: #ffffff;
                        border-radius: 16px;
                        padding: 30px;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
                        border: 1px solid #e2e8f0;
                        transition: all 0.4s ease;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        position: relative;
                        overflow: hidden;
                    }

                    .mvv-card::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 3px;
                        background: var(--color-set-one-1, #008BF9);
                        transform: scaleX(0);
                        transition: transform 0.4s ease;
                    }

                    .mvv-card:hover::after {
                        transform: scaleX(1);
                    }

                    .mvv-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 15px 40px rgba(0, 139, 249, 0.12);
                        border-color: rgba(0, 139, 249, 0.2);
                    }

                    .mvv-card.featured {
                        background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
                        border-color: rgba(0, 139, 249, 0.25);
                    }

                    .mvv-card.featured::after {
                        transform: scaleX(1);
                    }

                    .mvv-icon-wrap {
                        margin-bottom: 20px;
                    }

                    .mvv-icon {
                        width: 65px;
                        height: 65px;
                        background: linear-gradient(135deg, var(--color-set-one-1, #008BF9) 0%, #0066CC 100%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        transition: all 0.3s ease;
                        box-shadow: 0 8px 25px rgba(0, 139, 249, 0.25);
                    }

                    .mvv-card:hover .mvv-icon {
                        transform: scale(1.1);
                        box-shadow: 0 12px 30px rgba(0, 139, 249, 0.35);
                    }

                    .mvv-icon svg {
                        width: 28px;
                        height: 28px;
                    }

                    .mvv-content {
                        flex: 1;
                    }

                    .mvv-title {
                        font-size: 1.25rem;
                        font-weight: 700;
                        color: #0F3567;
                        margin: 0 0 12px;
                    }

                    .mvv-text {
                        font-size: 0.95rem;
                        line-height: 1.7;
                        color: #64748b;
                        margin: 0;
                    }

                    /* Responsive */
                    @media (max-width: 992px) {
                        .who-we-are-section {
                            padding: 70px 0;
                        }

                        .mvv-container {
                            grid-template-columns: 1fr;
                            gap: 20px;
                        }

                        .mvv-card.featured {
                            order: -1;
                        }

                        .hero-text-block {
                            padding: 0 15px;
                            margin-bottom: 40px;
                        }

                        .lead-paragraph {
                            font-size: 1.15rem;
                        }

                        .sub-paragraph {
                            font-size: 1.05rem;
                        }
                    }

                    @media (max-width: 576px) {
                        .who-we-are-section {
                            padding: 50px 0;
                        }

                        .section-subtitle {
                            margin-bottom: 30px;
                        }

                        .hero-text-block {
                            padding: 0 10px;
                            margin-bottom: 35px;
                        }

                        .lead-paragraph {
                            font-size: 1.1rem;
                        }

                        .sub-paragraph {
                            font-size: 1rem;
                        }

                        .separator-line {
                            width: 60px;
                            margin: 20px auto;
                        }

                        .mvv-card {
                            padding: 25px 20px;
                        }

                        .mvv-icon {
                            width: 55px;
                            height: 55px;
                        }

                        .mvv-icon svg {
                            width: 24px;
                            height: 24px;
                        }
                    }
                `}</style>
            </section>
        </>
    )
}
