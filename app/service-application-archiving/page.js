'use client'

import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Server, Database, Cloud, Archive, ArrowRight, Check, Layers, ShieldCheck, Zap, TrendingUp, Lock, BarChart3, RefreshCw, Globe, Settings, Cpu, Phone, Mail, CheckCircle2 } from "lucide-react"

export default function ServiceApplicationArchiving() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'Application Archiving',
        message: ''
    })
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: 'Application Archiving', message: '' })
    }
    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="aa-hero">
                        <div className="aa-hero-bg">
                            <div className="aa-hero-orb aa-orb-1"></div>
                            <div className="aa-hero-orb aa-orb-2"></div>
                            <div className="aa-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="aa-hero-inner">
                                <div className="aa-hero-content">
                                    <div className="aa-badge-wrap">
                                        <span className="aa-hero-badge"><Server size={14} /> Application Archiving</span>
                                        <span className="aa-badge-line"></span>
                                    </div>
                                    <h1 className="aa-hero-title">Multi-Cloud Data Growth <span>Solution for Enterprise</span> Applications</h1>
                                    <p className="aa-hero-desc">Reduce costs and improve performance of enterprise applications with intelligent data lifecycle management across multi-cloud environments.</p>
                                    <div className="aa-hero-features">
                                        <div className="aa-hero-feat"><Check size={16} /> ILM Policies</div>
                                        <div className="aa-hero-feat"><Check size={16} /> Multi-Cloud Support</div>
                                        <div className="aa-hero-feat"><Check size={16} /> Universal Access</div>
                                    </div>
                                    <div className="aa-hero-actions">
                                        <Link href="/service-data-management" className="aa-btn-outline">
                                            Back to Solutions
                                        </Link>
                                    </div>
                                </div>
                                <div className="aa-hero-visual">
                                    <div className="aa-visual-container">
                                        <div className="aa-visual-core">
                                            <div className="aa-visual-core-inner"><Server size={28} /></div>
                                            <div className="aa-visual-ring"></div>
                                            <div className="aa-visual-ring aa-ring-2"></div>
                                        </div>
                                        <div className="aa-vnode aa-vn-1"><Database size={16} /><span>Database</span></div>
                                        <div className="aa-vnode aa-vn-2"><Cloud size={16} /><span>Cloud</span></div>
                                        <div className="aa-vnode aa-vn-3"><Archive size={16} /><span>Archive</span></div>
                                        <div className="aa-vnode aa-vn-4"><Layers size={16} /><span>ILM</span></div>
                                        <svg className="aa-visual-lines" viewBox="0 0 380 380">
                                            <line x1="190" y1="190" x2="190" y2="35" className="aa-conn-line" />
                                            <line x1="190" y1="190" x2="340" y2="190" className="aa-conn-line" />
                                            <line x1="190" y1="190" x2="190" y2="345" className="aa-conn-line" />
                                            <line x1="190" y1="190" x2="40" y2="190" className="aa-conn-line" />
                                            <line x1="190" y1="35" x2="340" y2="190" className="aa-conn-ring" />
                                            <line x1="340" y1="190" x2="190" y2="345" className="aa-conn-ring" />
                                            <line x1="190" y1="345" x2="40" y2="190" className="aa-conn-ring" />
                                            <line x1="40" y1="190" x2="190" y2="35" className="aa-conn-ring" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Platform Header */}
                    <section className="platform-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="platform-content">
                                        <span className="section-tag">Application Archiving</span>
                                        <h2 className="platform-title">TechModulus Application Archiving</h2>
                                        <p className="platform-subtitle">Intelligent Data Lifecycle Management for Enterprise Applications</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="platform-features">
                                        <div className="pf-feat"><Check size={18} /> Multi-Cloud Support</div>
                                        <div className="pf-feat"><Check size={18} /> ILM Policies</div>
                                        <div className="pf-feat"><Check size={18} /> Universal Access</div>
                                        <div className="pf-feat"><Check size={18} /> Zero Downtime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Solution */}
                    <section className="solution-section">
                        <div className="container">
                            <div className="solution-wrapper">
                                <div className="solution-badge">
                                    <Cloud size={20} />
                                    <span>The Solution</span>
                                </div>
                                <h3 className="solution-title">Reduce Costs and Improve Performance of Enterprise Applications</h3>
                                <div className="solution-content">
                                    <p>Enterprise applications like SAP, Oracle E-Business Suite, PeopleSoft, and JD Edwards are mission-critical systems that drive business operations. However, as these applications age, their databases grow exponentially, leading to degraded performance, increased storage costs, and compliance challenges.</p>
                                    <p>Application data grows at 20-40% annually, while only 10-20% of the data is actively used. This inactive data not only consumes expensive primary storage but also impacts backup windows, increases maintenance overhead, and slows down system performance. The traditional approach of adding more storage is no longer sustainable.</p>
                                    <p>TechModulus Application Archiving provides a comprehensive solution to manage data growth while ensuring universal access to historical data, meeting compliance requirements, and preparing your data for AI initiatives.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Architecture - Layered Flow */}
                    <section className="mc-arch">
                        <div className="mc-arch-bg">
                            <div className="mc-arch-glow"></div>
                        </div>
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="mc-tag">Architecture</span>
                                <h2 className="mc-title">Multi-Cloud <span>Architecture</span></h2>
                                <p className="mc-sub">Seamless data lifecycle management across cloud environments</p>
                            </div>

                            {/* Layered Architecture Flow */}
                            <div className="mc-flow">
                                {/* Source Layer */}
                                <div className="mc-layer">
                                    <div className="mc-layer-label">Source Systems</div>
                                    <div className="mc-layer-cards">
                                        <div className="mc-lcard">
                                            <div className="mc-lcard-icon"><Database size={18} /></div>
                                            <span>SAP</span>
                                        </div>
                                        <div className="mc-lcard">
                                            <div className="mc-lcard-icon"><Database size={18} /></div>
                                            <span>Oracle EBS</span>
                                        </div>
                                        <div className="mc-lcard">
                                            <div className="mc-lcard-icon"><Database size={18} /></div>
                                            <span>PeopleSoft</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Flow Connector */}
                                <div className="mc-connector">
                                    <svg width="40" height="60" viewBox="0 0 40 60">
                                        <line x1="20" y1="0" x2="20" y2="44" stroke="rgba(0,139,249,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                                        <polygon points="12,44 20,58 28,44" fill="#008BF9" />
                                    </svg>
                                </div>

                                {/* Engine Layer */}
                                <div className="mc-engine">
                                    <div className="mc-engine-glow"></div>
                                    <div className="mc-engine-inner">
                                        <div className="mc-engine-icon"><Settings size={28} /></div>
                                        <div className="mc-engine-text">
                                            <h4>TechModulus Archiving Engine</h4>
                                            <p>ILM Policies &bull; Data Classification &bull; Automated Tiering</p>
                                        </div>
                                    </div>
                                    <div className="mc-engine-metrics">
                                        <div className="mc-metric"><Zap size={14} /><span>Real-time Processing</span></div>
                                        <div className="mc-metric"><Lock size={14} /><span>Encrypted Transit</span></div>
                                        <div className="mc-metric"><RefreshCw size={14} /><span>Zero Downtime</span></div>
                                    </div>
                                </div>

                                {/* Flow Connector Split */}
                                <div className="mc-connector-split">
                                    <svg width="100%" height="60" viewBox="0 0 800 60" preserveAspectRatio="none">
                                        <line x1="400" y1="0" x2="400" y2="20" stroke="rgba(0,139,249,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                                        <line x1="400" y1="20" x2="133" y2="20" stroke="rgba(0,139,249,0.3)" strokeWidth="1.5" />
                                        <line x1="400" y1="20" x2="400" y2="20" stroke="rgba(0,139,249,0.3)" strokeWidth="1.5" />
                                        <line x1="400" y1="20" x2="667" y2="20" stroke="rgba(0,139,249,0.3)" strokeWidth="1.5" />
                                        <line x1="133" y1="20" x2="133" y2="44" stroke="rgba(0,139,249,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                                        <line x1="400" y1="20" x2="400" y2="44" stroke="rgba(0,139,249,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                                        <line x1="667" y1="20" x2="667" y2="44" stroke="rgba(0,139,249,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                                        <polygon points="125,44 133,58 141,44" fill="#008BF9" />
                                        <polygon points="392,44 400,58 408,44" fill="#008BF9" />
                                        <polygon points="659,44 667,58 675,44" fill="#008BF9" />
                                    </svg>
                                </div>

                                {/* Cloud Targets Layer */}
                                <div className="mc-layer">
                                    <div className="mc-layer-label">Cloud Targets</div>
                                    <div className="mc-layer-cards">
                                        <div className="mc-cloud-card mc-aws">
                                            <div className="mc-cloud-badge">AWS</div>
                                            <Cloud size={20} />
                                            <span>S3 / Glacier</span>
                                            <div className="mc-cloud-bar">
                                                <div className="mc-cloud-fill" style={{ width: '72%' }}></div>
                                            </div>
                                        </div>
                                        <div className="mc-cloud-card mc-azure">
                                            <div className="mc-cloud-badge">Azure</div>
                                            <Cloud size={20} />
                                            <span>Blob Storage</span>
                                            <div className="mc-cloud-bar">
                                                <div className="mc-cloud-fill" style={{ width: '58%' }}></div>
                                            </div>
                                        </div>
                                        <div className="mc-cloud-card mc-gcp">
                                            <div className="mc-cloud-badge">GCP</div>
                                            <Cloud size={20} />
                                            <span>Cloud Storage</span>
                                            <div className="mc-cloud-bar">
                                                <div className="mc-cloud-fill" style={{ width: '45%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Bar - Governance */}
                                <div className="mc-governance">
                                    <div className="mc-gov-item"><ShieldCheck size={16} /><span>Compliance & Audit</span></div>
                                    <div className="mc-gov-divider"></div>
                                    <div className="mc-gov-item"><Globe size={16} /><span>Universal Access</span></div>
                                    <div className="mc-gov-divider"></div>
                                    <div className="mc-gov-item"><Layers size={16} /><span>Retention Policies</span></div>
                                    <div className="mc-gov-divider"></div>
                                    <div className="mc-gov-item"><BarChart3 size={16} /><span>AI Data Readiness</span></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Challenges */}
                    <section className="challenges-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">The Challenge</span>
                                <h2 className="section-title">Why Application Archiving Matters</h2>
                                <p className="section-sub">Critical challenges with growing enterprise application data</p>
                            </div>
                            <div className="challenge-grid">
                                <div className="challenge-card">
                                    <div className="ch-icon"><TrendingUp size={26} /></div>
                                    <h4>Exponential Growth</h4>
                                    <p>Application data grows 20-40% annually while only 10-20% is actively used</p>
                                </div>
                                <div className="challenge-card">
                                    <div className="ch-icon"><Zap size={26} /></div>
                                    <h4>Performance Impact</h4>
                                    <p>Large databases slow down queries, reports, and overall system responsiveness</p>
                                </div>
                                <div className="challenge-card">
                                    <div className="ch-icon"><BarChart3 size={26} /></div>
                                    <h4>Rising Costs</h4>
                                    <p>Premium storage, extended backup windows, and increased maintenance overhead</p>
                                </div>
                                <div className="challenge-card">
                                    <div className="ch-icon"><ShieldCheck size={26} /></div>
                                    <h4>Compliance Risks</h4>
                                    <p>Difficulty meeting retention requirements and audit demands</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features */}
                    <section className="features-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Capabilities</span>
                                <h2 className="section-title">Comprehensive Application Archiving</h2>
                                <p className="section-sub">Enterprise-grade features for complete data lifecycle management</p>
                            </div>
                            <div className="feat-grid">
                                <div className="feat-card">
                                    <div className="feat-num">01</div>
                                    <div className="feat-icon"><Layers size={28} /></div>
                                    <h4>ILM Policies</h4>
                                    <p>Intelligent data lifecycle policies that automatically tier data based on age, access patterns, and business rules.</p>
                                </div>
                                <div className="feat-card">
                                    <div className="feat-num">02</div>
                                    <div className="feat-icon"><Globe size={28} /></div>
                                    <h4>Universal Access</h4>
                                    <p>Unified access to archived data through the native application interface or web-based portal.</p>
                                </div>
                                <div className="feat-card">
                                    <div className="feat-num">03</div>
                                    <div className="feat-icon"><Cloud size={28} /></div>
                                    <h4>Multi-Cloud Storage</h4>
                                    <p>Archive to AWS, Azure, GCP, or private cloud storage with vendor-neutral portability.</p>
                                </div>
                                <div className="feat-card">
                                    <div className="feat-num">04</div>
                                    <div className="feat-icon"><RefreshCw size={28} /></div>
                                    <h4>Zero Downtime</h4>
                                    <p>Archive data without impacting production systems or requiring application downtime.</p>
                                </div>
                                <div className="feat-card">
                                    <div className="feat-num">05</div>
                                    <div className="feat-icon"><ShieldCheck size={28} /></div>
                                    <h4>Compliance Controls</h4>
                                    <p>Automated retention management with legal hold and defensible disposition capabilities.</p>
                                </div>
                                <div className="feat-card">
                                    <div className="feat-num">06</div>
                                    <div className="feat-icon"><Cpu size={28} /></div>
                                    <h4>AI Data Readiness</h4>
                                    <p>Prepare archived data for AI and analytics initiatives with proper governance and access controls.</p>
                                </div>
                            </div>
                        </div>
                    </section>







                    {/* Get In Touch */}
                    <section className="wdx-contact-section" id="wdx-quote">
                        <div className="container">
                            <div className="wdx-contact-header">
                                <span className="wdx-contact-badge">Get In Touch</span>
                                <h2>Start Your <span>Project</span> With Us</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.</p>
                            </div>

                            <div className="wdx-contact-wrapper">
                                <div className="wdx-contact-info">
                                    {/* <div className="wdx-info-item">
                                        <div className="wdx-info-icon-box">
                                            <Phone size={24} />
                                        </div>
                                        <div className="wdx-info-content">
                                            <h4>Phone Number</h4>
                                            <a href="tel:+918329042459">+91 8329042459</a>
                                        </div>
                                    </div> */}

                                    <div className="wdx-info-item">
                                        <div className="wdx-info-icon-box">
                                            <Mail size={24} />
                                        </div>
                                        <div className="wdx-info-content">
                                            <h4>Email Address</h4>
                                            <a href="mailto:info@TechModulus.com">info@TechModulus.com</a>
                                        </div>
                                    </div>

                                    <div className="wdx-benefits-list">
                                        <div className="wdx-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>Free Consultation</span>
                                        </div>
                                        <div className="wdx-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>24 Hour Response</span>
                                        </div>
                                        <div className="wdx-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>NDA Protection</span>
                                        </div>
                                        <div className="wdx-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>Transparent Pricing</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="wdx-contact-form-wrapper">
                                    {formSubmitted && (
                                        <div className="wdx-form-success-msg">
                                            <CheckCircle2 size={60} />
                                            <h3>Thank You!</h3>
                                            <p>Your message has been sent successfully. We'll contact you soon.</p>
                                        </div>
                                    )}

                                    <form className="wdx-contact-form" onSubmit={handleFormSubmit}>
                                        <div className="wdx-form-grid">
                                            <div className="wdx-form-group">
                                                <label>Your Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleFormChange}
                                                />
                                            </div>

                                            <div className="wdx-form-group">
                                                <label>Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="wdx-form-grid">
                                            {/* <div className="wdx-form-group">
                                                <label>Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    placeholder="Enter your phone"
                                                    required
                                                    value={formData.mobile}
                                                    onChange={handleFormChange}
                                                />
                                            </div> */}

                                            <div className="wdx-form-group">
                                                <label>Service Required *</label>
                                                <select name="service" value={formData.service} onChange={handleFormChange}>
                                                    <option value="Application Archiving">Application Archiving</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="AI Governance">AI Governance</option>
                                                    <option value="Data Management">Data Management</option>
                                                    <option value="Enterprise Archiving">Enterprise Archiving</option>
                                                    <option value="File Archiving">File Archiving</option>
                                                    <option value="App Retirement">App Retirement</option>
                                                    <option value="VCIO">VCIO</option>
                                                    <option value="IT Consulting">IT Consulting</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="wdx-form-group wdx-form-full">
                                            <label>Project Details</label>
                                            <textarea
                                                name="message"
                                                rows="5"
                                                placeholder="Tell us about your project requirements..."
                                                value={formData.message}
                                                onChange={handleFormChange}
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="wdx-submit-btn">
                                            <span>Send Message</span>
                                            <ArrowRight size={20} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer4 />

            <style jsx>{`

                /* ===== HERO ===== */
                .aa-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 120px;
                    position: relative; overflow: hidden;
                }
                .aa-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: aaShimmer 3s ease infinite;
                }
                @keyframes aaShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .aa-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .aa-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .aa-orb-1 { width:450px; height:450px; background:rgba(0,139,249,0.08); top:-15%; right:-5%; animation:aaFloat 8s ease-in-out infinite; }
                .aa-orb-2 { width:300px; height:300px; background:rgba(0,212,255,0.06); bottom:-10%; left:10%; animation:aaFloat 10s ease-in-out infinite reverse; }
                @keyframes aaFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(15px,-15px)} }
                .aa-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,249,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                }
                .aa-hero-inner {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 60px; align-items: center;
                    position: relative; z-index: 2;
                }
                .aa-badge-wrap { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
                .aa-hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 2px; white-space: nowrap;
                }
                .aa-badge-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(0,139,249,0.3), transparent); }
                .aa-hero-title {
                    font-size: clamp(2.2rem, 4.5vw, 3rem);
                    font-weight: 800; color: #fff; line-height: 1.15;
                    margin-bottom: 22px; letter-spacing: -0.02em;
                }
                .aa-hero-title span {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .aa-hero-desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.65);
                    line-height: 1.75; max-width: 520px; margin-bottom: 24px;
                }
                .aa-hero-features { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px; }
                .aa-hero-feat {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.88rem; color: rgba(255,255,255,0.7); font-weight: 500;
                }
                .aa-hero-feat :global(svg) { color: #4db8ff; }
                .aa-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .aa-btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 15px 30px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all .3s;
                }
                .aa-btn-outline:hover { border-color: rgba(0,139,249,0.5); color: #4db8ff; background: rgba(0,139,249,0.05); }

                /* Hero Visual */
                .aa-hero-visual { display: flex; align-items: center; justify-content: center; }
                .aa-visual-container { position: relative; width: 380px; height: 380px; }
                .aa-visual-lines { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .aa-conn-line { stroke: rgba(0,139,249,0.2); stroke-width: 1; stroke-dasharray: 6 4; animation: aaDash 15s linear infinite; }
                .aa-conn-ring { stroke: rgba(0,139,249,0.1); stroke-width: 1; stroke-dasharray: 4 6; animation: aaDash 20s linear infinite; }
                @keyframes aaDash { to { stroke-dashoffset: -100; } }
                .aa-visual-core {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .aa-visual-core-inner {
                    width: 76px; height: 76px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .aa-visual-ring {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 76px; height: 76px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: aaPulse 3s ease-out infinite;
                }
                .aa-ring-2 { animation-delay: 1.5s; }
                @keyframes aaPulse { 0%{width:76px;height:76px;opacity:0.6}100%{width:190px;height:190px;opacity:0} }
                .aa-vnode {
                    position: absolute; display: flex; align-items: center; gap: 7px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 9px 14px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.78rem; font-weight: 600;
                    backdrop-filter: blur(8px); z-index: 2; transition: all 0.3s;
                }
                .aa-vnode:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); box-shadow: 0 0 20px rgba(0,139,249,0.4); }
                .aa-vnode span { color: rgba(255,255,255,0.8); }
                .aa-vnode :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .aa-vn-1 { top: 10px; left: 50%; transform: translateX(-50%); }
                .aa-vn-2 { top: 50%; right: 0; transform: translateY(-50%); }
                .aa-vn-3 { bottom: 10px; left: 50%; transform: translateX(-50%); }
                .aa-vn-4 { top: 50%; left: 0; transform: translateY(-50%); }

                /* ===== COMMON ===== */
                .section-tag {
                    display: inline-block; color: #008BF9;
                    font-size: 12px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2px;
                    margin-bottom: 12px;
                    background: rgba(0,139,249,0.08);
                    padding: 6px 14px; border-radius: 4px;
                }
                .section-title {
                    font-size: clamp(1.75rem, 3.5vw, 2.4rem);
                    font-weight: 800; color: #0F3567;
                    line-height: 1.2; margin-bottom: 16px;
                }
                .section-sub {
                    font-size: 1.05rem; color: #64748b;
                    max-width: 580px; margin: 0 auto;
                    line-height: 1.7;
                }
                .section-header { margin-bottom: 56px; }

                /* ===== PLATFORM ===== */
                .platform-section {
                    padding: 70px 0;
                    background: linear-gradient(135deg, #f8fafc 0%, #fff 100%);
                    border-bottom: 1px solid #e2e8f0;
                }
                .platform-content { padding-right: 30px; }
                .platform-title {
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 800; color: #0F3567;
                    line-height: 1.25; margin-bottom: 12px;
                }
                .platform-subtitle {
                    font-size: 1.1rem; color: #64748b;
                    font-weight: 500; line-height: 1.6;
                }
                .platform-features {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 14px; padding-left: 30px;
                    border-left: 3px solid #008BF9;
                }
                .pf-feat {
                    display: flex; align-items: center; gap: 12px;
                    font-size: 1rem; font-weight: 600; color: #0F3567;
                }
                .pf-feat :global(svg) { color: #008BF9; }

                /* ===== SOLUTION ===== */
                .solution-section { padding: 80px 0; background: #fff; }
                .solution-wrapper { max-width: 1200px; margin: 0 auto; }
                .solution-badge {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: #008BF9; color: #fff;
                    padding: 10px 20px; border-radius: 6px;
                    font-size: 13px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 1px;
                    margin-bottom: 24px;
                }
                .solution-title {
                    font-size: clamp(1.6rem, 3vw, 2.1rem);
                    font-weight: 800; color: #0F3567;
                    margin-bottom: 24px; line-height: 1.3;
                }
                .solution-content {
                    background: #f8fafc; border-radius: 16px;
                    padding: 44px 48px; border: 1px solid #e2e8f0;
                }
                .solution-content p {
                    font-size: 1.05rem; color: #475569;
                    line-height: 1.8; margin-bottom: 20px;
                }
                .solution-content p:last-child { margin-bottom: 0; }

                /* ===== MULTI-CLOUD LAYERED FLOW ===== */
                .mc-arch {
                    padding: 100px 0 120px;
                    background: linear-gradient(180deg, #060e1a 0%, #0a1a30 30%, #0F3567 70%, #0a1628 100%);
                    position: relative; overflow: hidden;
                }
                .mc-arch-bg { position: absolute; inset: 0; pointer-events: none; }
                .mc-arch-glow {
                    position: absolute; top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px; height: 600px; border-radius: 50%;
                    background: radial-gradient(circle, rgba(0,139,249,0.08) 0%, transparent 70%);
                    filter: blur(40px);
                }
                .mc-tag {
                    display: inline-block; color: #4db8ff;
                    font-size: 12px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2.5px;
                    margin-bottom: 14px;
                    background: rgba(0,139,249,0.12);
                    padding: 7px 18px; border-radius: 50px;
                    border: 1px solid rgba(0,139,249,0.2);
                }
                .mc-title {
                    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
                    font-weight: 800; color: #fff;
                    line-height: 1.2; margin-bottom: 14px;
                }
                .mc-title span {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .mc-sub {
                    font-size: 1.05rem; color: rgba(255,255,255,0.5);
                    max-width: 520px; margin: 0 auto; line-height: 1.7;
                }

                /* Flow Container */
                .mc-flow {
                    max-width: 900px; margin: 0 auto;
                    display: flex; flex-direction: column; align-items: center;
                }

                /* Layer */
                .mc-layer { width: 100%; }
                .mc-layer-label {
                    text-align: center; font-size: 0.7rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2px;
                    color: rgba(255,255,255,0.35); margin-bottom: 14px;
                }
                .mc-layer-cards {
                    display: grid; grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                }

                /* Source Cards */
                .mc-lcard {
                    display: flex; align-items: center; gap: 10px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(0,139,249,0.15);
                    padding: 16px 20px; border-radius: 12px;
                    transition: all 0.3s; cursor: default;
                }
                .mc-lcard:hover {
                    border-color: rgba(0,139,249,0.4);
                    background: rgba(0,139,249,0.08);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0,139,249,0.15);
                }
                .mc-lcard-icon {
                    width: 36px; height: 36px; flex-shrink: 0;
                    background: linear-gradient(135deg, #008BF9, #0060cc);
                    border-radius: 8px; display: flex;
                    align-items: center; justify-content: center; color: #fff;
                }
                .mc-lcard span {
                    font-size: 0.88rem; font-weight: 600; color: #fff;
                }

                /* Connector */
                .mc-connector {
                    display: flex; justify-content: center;
                    padding: 4px 0;
                }
                .mc-connector svg { opacity: 0.9; }

                /* Engine */
                .mc-engine {
                    width: 100%; position: relative;
                    background: linear-gradient(135deg, rgba(0,139,249,0.12), rgba(0,80,170,0.08));
                    border: 1px solid rgba(0,139,249,0.3);
                    border-radius: 20px; padding: 32px;
                    backdrop-filter: blur(8px);
                }
                .mc-engine-glow {
                    position: absolute; inset: -1px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, rgba(0,139,249,0.2), transparent, rgba(0,212,255,0.1));
                    z-index: 0; opacity: 0.5;
                    filter: blur(1px);
                }
                .mc-engine-inner {
                    display: flex; align-items: center; gap: 20px;
                    position: relative; z-index: 1; margin-bottom: 20px;
                }
                .mc-engine-icon {
                    width: 60px; height: 60px; flex-shrink: 0;
                    background: linear-gradient(145deg, #008BF9, #0050aa);
                    border-radius: 14px; display: flex;
                    align-items: center; justify-content: center; color: #fff;
                    box-shadow: 0 8px 28px rgba(0,139,249,0.45);
                    animation: mcEngSpin 8s linear infinite;
                }
                @keyframes mcEngSpin {
                    0% { box-shadow: 0 8px 28px rgba(0,139,249,0.45); }
                    50% { box-shadow: 0 8px 40px rgba(0,139,249,0.65); }
                    100% { box-shadow: 0 8px 28px rgba(0,139,249,0.45); }
                }
                .mc-engine-text h4 {
                    font-size: 1.15rem; font-weight: 700; color: #fff;
                    margin: 0 0 4px 0;
                }
                .mc-engine-text p {
                    font-size: 0.82rem; color: rgba(255,255,255,0.55);
                    margin: 0;
                }
                .mc-engine-metrics {
                    display: flex; gap: 16px; position: relative; z-index: 1;
                    flex-wrap: wrap;
                }
                .mc-metric {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(0,139,249,0.08); border: 1px solid rgba(0,139,249,0.15);
                    padding: 6px 14px; border-radius: 50px;
                    font-size: 0.75rem; font-weight: 600; color: #4db8ff;
                }
                .mc-metric :global(svg) { color: #4db8ff; }

                /* Connector Split */
                .mc-connector-split {
                    width: 100%; padding: 4px 0;
                }

                /* Cloud Cards */
                .mc-cloud-card {
                    display: flex; flex-direction: column; align-items: center;
                    gap: 8px; padding: 24px 16px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(0,139,249,0.15);
                    border-radius: 14px; transition: all 0.3s; cursor: default;
                    position: relative; overflow: hidden;
                }
                .mc-cloud-card::before {
                    content: '';
                    position: absolute; top: 0; left: 0; right: 0; height: 3px;
                    border-radius: 14px 14px 0 0;
                }
                .mc-aws::before { background: linear-gradient(90deg, #FF9900, #FFB84D); }
                .mc-azure::before { background: linear-gradient(90deg, #0078D4, #50A0E8); }
                .mc-gcp::before { background: linear-gradient(90deg, #4285F4, #34A853, #FBBC04, #EA4335); }
                .mc-cloud-card:hover {
                    border-color: rgba(0,139,249,0.4);
                    background: rgba(0,139,249,0.06);
                    transform: translateY(-3px);
                    box-shadow: 0 12px 32px rgba(0,139,249,0.15);
                }
                .mc-cloud-badge {
                    font-size: 0.65rem; font-weight: 800;
                    text-transform: uppercase; letter-spacing: 1.5px;
                    color: rgba(255,255,255,0.5);
                }
                .mc-cloud-card :global(svg) { color: #4db8ff; }
                .mc-cloud-card > span {
                    font-size: 0.85rem; font-weight: 600; color: #fff;
                }
                .mc-cloud-bar {
                    width: 100%; height: 4px; background: rgba(255,255,255,0.08);
                    border-radius: 4px; margin-top: 4px; overflow: hidden;
                }
                .mc-cloud-fill {
                    height: 100%; border-radius: 4px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff);
                    transition: width 1s ease;
                }

                /* Governance Bar */
                .mc-governance {
                    margin-top: 32px; width: 100%;
                    display: flex; align-items: center; justify-content: center;
                    gap: 0; flex-wrap: wrap;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(0,139,249,0.1);
                    border-radius: 12px; padding: 16px 28px;
                }
                .mc-gov-item {
                    display: flex; align-items: center; gap: 8px;
                    padding: 6px 16px;
                }
                .mc-gov-item :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .mc-gov-item span {
                    font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.65);
                    white-space: nowrap;
                }
                .mc-gov-divider {
                    width: 1px; height: 20px;
                    background: rgba(255,255,255,0.1);
                }

                /* ===== CHALLENGES ===== */
                .challenges-section { padding: 90px 0; background: #0F3567; }
                .challenges-section .section-tag { background: rgba(0,139,249,0.2); }
                .challenges-section .section-title { color: #fff; }
                .challenges-section .section-sub { color: rgba(255,255,255,0.7); }
                .challenge-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }
                .challenge-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px; padding: 32px;
                    text-align: center; transition: all .3s;
                }
                .challenge-card:hover {
                    background: rgba(255,255,255,0.06);
                    border-color: rgba(0,139,249,0.3);
                    transform: translateY(-4px);
                }
                .ch-icon {
                    width: 60px; height: 60px;
                    background: #008BF9; border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin: 0 auto 20px;
                }
                .challenge-card h4 {
                    font-size: 1.1rem; font-weight: 700;
                    color: #fff; margin-bottom: 10px;
                }
                .challenge-card p {
                    font-size: 0.9rem; color: rgba(255,255,255,0.65);
                    line-height: 1.6; margin: 0;
                }

                /* ===== FEATURES ===== */
                .features-section { padding: 90px 0; background: #fff; }
                .feat-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .feat-card {
                    background: #f8fafc; padding: 36px 30px; border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative; overflow: hidden;
                }
                .feat-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px; background: #008BF9;
                    transform: scaleX(0);
                    transition: transform .4s;
                }
                .feat-card:hover::before { transform: scaleX(1); }
                .feat-card:hover {
                    background: #fff;
                    border-color: transparent;
                    box-shadow: 0 20px 40px rgba(0,139,249,0.12);
                    transform: translateY(-8px);
                }
                .feat-num {
                    position: absolute;
                    top: 20px; right: 24px;
                    font-size: 3rem; font-weight: 900;
                    color: #e2e8f0; line-height: 1;
                }
                .feat-icon {
                    width: 64px; height: 64px; border-radius: 14px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 22px;
                    box-shadow: 0 8px 20px rgba(0,139,249,0.25);
                }
                .feat-card h4 {
                    font-size: 1.2rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 12px;
                }
                .feat-card p {
                    font-size: 0.95rem; color: #64748b;
                    line-height: 1.7; margin: 0;
                }



                /* ===== CTA ===== */
                .cta-section { padding: 90px 0; background: #0F3567; }
                .cta-wrapper {
                    max-width: 800px; margin: 0 auto;
                    text-align: center;
                }
                .cta-content {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 24px; padding: 60px 48px;
                }
                .cta-icon-wrap {
                    width: 80px; height: 80px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    border-radius: 20px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin: 0 auto 28px;
                    box-shadow: 0 12px 32px rgba(0,139,249,0.4);
                }
                .cta-content h3 {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 800; color: #fff; margin-bottom: 16px;
                }
                .cta-content p {
                    font-size: 1.1rem; color: rgba(255,255,255,0.7);
                    max-width: 520px; margin: 0 auto 32px;
                    line-height: 1.7;
                }
                .cta-actions {
                    display: flex; gap: 16px;
                    justify-content: center; flex-wrap: wrap;
                }
                .btn-cta-primary {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: #008BF9; color: #fff;
                    padding: 16px 32px; border-radius: 10px;
                    font-weight: 700; font-size: 1rem;
                    text-decoration: none; transition: all .3s;
                }
                .btn-cta-primary:hover {
                    background: #0070cc; color: #fff;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 28px rgba(0,139,249,0.4);
                }
                .btn-cta-outline {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: transparent; color: rgba(255,255,255,0.9);
                    padding: 16px 32px; border-radius: 10px;
                    border: 2px solid rgba(255,255,255,0.2);
                    font-weight: 600; font-size: 1rem;
                    text-decoration: none; transition: all .3s;
                }
                .btn-cta-outline:hover {
                    border-color: #008BF9; color: #008BF9;
                }

                /* ===== CONTACT SECTION ===== */
                .wdx-contact-section {
                    padding:110px 0;
                    background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
                    position:relative;
                }
                .wdx-contact-section::before {
                    content:''; position:absolute; inset:0;
                    background-image:radial-gradient(circle at 20% 80%, rgba(0,139,249,.04) 0%, transparent 50%);
                    pointer-events:none;
                }
                .wdx-contact-header { text-align:center; margin-bottom:60px; }
                .wdx-contact-badge {
                    display:inline-block; background:rgba(0,139,249,.08);
                    color:#008BF9; padding:8px 20px; border-radius:50px;
                    font-size:.85rem; font-weight:700; text-transform:uppercase;
                    letter-spacing:1.5px; margin-bottom:16px;
                }
                .wdx-contact-header h2 {
                    font-size:clamp(2rem,4vw,2.8rem); font-weight:800;
                    color:#0F3567; margin-bottom:16px; line-height:1.2;
                }
                .wdx-contact-header h2 span { color:#008BF9; }
                .wdx-contact-header p {
                    font-size:1.05rem; color:#64748b;
                    max-width:600px; margin:0 auto; line-height:1.7;
                }
                .wdx-contact-wrapper {
                    display:grid; grid-template-columns:380px 1fr;
                    gap:50px; max-width:1200px; margin:0 auto;
                }
                .wdx-contact-info { display:flex; flex-direction:column; gap:24px; }
                .wdx-info-item {
                    display:flex; gap:20px; background:#fff; padding:28px;
                    border-radius:16px; box-shadow:0 4px 20px rgba(0,0,0,.06);
                    border:1px solid #e8edf4; transition:all .3s;
                }
                .wdx-info-item:hover {
                    transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,139,249,.12);
                    border-color:#008BF9;
                }
                .wdx-info-icon-box {
                    width:56px; height:56px; flex-shrink:0;
                    background:linear-gradient(135deg, #008BF9, #0070cc);
                    border-radius:12px; display:flex; align-items:center;
                    justify-content:center; color:#fff;
                }
                .wdx-info-content h4 { font-size:1rem; font-weight:700; color:#0F3567; margin-bottom:6px; }
                .wdx-info-content a { font-size:.95rem; color:#64748b; text-decoration:none; transition:color .3s; }
                .wdx-info-content a:hover { color:#008BF9; }
                .wdx-benefits-list {
                    background:#fff; padding:28px; border-radius:16px;
                    box-shadow:0 4px 20px rgba(0,0,0,.06); border:1px solid #e8edf4;
                }
                .wdx-benefit-item {
                    display:flex; align-items:center; gap:12px;
                    padding:10px 0; border-bottom:1px solid #f1f5f9;
                }
                .wdx-benefit-item:last-child { border-bottom:none; }
                .wdx-benefit-item svg { color:#008BF9; flex-shrink:0; }
                .wdx-benefit-item span { font-size:.95rem; color:#475569; font-weight:500; }
                .wdx-contact-form-wrapper {
                    position:relative; background:#fff; padding:48px;
                    border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,.08);
                    border:1px solid #e8edf4;
                }
                .wdx-form-success-msg {
                    position:absolute; inset:0; z-index:10;
                    background:rgba(255,255,255,.98); border-radius:20px;
                    display:flex; flex-direction:column; align-items:center;
                    justify-content:center; text-align:center; padding:40px;
                    animation:wdxFadeUp .5s ease;
                }
                .wdx-form-success-msg svg { color:#22c55e; margin-bottom:20px; }
                .wdx-form-success-msg h3 { font-size:1.6rem; font-weight:800; color:#0F3567; margin-bottom:8px; }
                .wdx-form-success-msg p { font-size:1rem; color:#64748b; margin:0; }
                .wdx-contact-form { display:flex; flex-direction:column; gap:20px; }
                .wdx-form-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
                .wdx-form-group { display:flex; flex-direction:column; }
                .wdx-form-full { grid-column:1/-1; }
                .wdx-form-group label {
                    font-size:.88rem; font-weight:600; color:#0F3567;
                    margin-bottom:8px; display:block;
                }
                .wdx-form-group input,
                .wdx-form-group select,
                .wdx-form-group textarea {
                    width:100%; padding:14px 18px; border:2px solid #e2e8f0;
                    border-radius:12px; font-size:.95rem; color:#0F3567;
                    background:#f8fafc; transition:all .3s; outline:none; font-family:inherit;
                }
                .wdx-form-group input:focus,
                .wdx-form-group select:focus,
                .wdx-form-group textarea:focus {
                    border-color:#008BF9; background:#fff;
                    box-shadow:0 0 0 3px rgba(0,139,249,.08);
                }
                .wdx-form-group input::placeholder,
                .wdx-form-group textarea::placeholder { color:#94a3b8; }
                .wdx-form-group select {
                    cursor:pointer; -webkit-appearance:none; appearance:none;
                    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E");
                    background-repeat:no-repeat; background-position:right 14px center; padding-right:44px;
                }
                .wdx-form-group textarea { resize:vertical; min-height:130px; }
                .wdx-submit-btn {
                    display:flex; align-items:center; justify-content:center; gap:10px;
                    background:linear-gradient(135deg, #008BF9, #0070cc);
                    color:#fff; padding:16px 40px; border:none; border-radius:12px;
                    font-size:1rem; font-weight:700; cursor:pointer; transition:all .3s;
                    box-shadow:0 8px 24px rgba(0,139,249,.3); margin-top:8px; font-family:inherit;
                }
                .wdx-submit-btn:hover {
                    transform:translateY(-3px); box-shadow:0 14px 36px rgba(0,139,249,.4);
                }
                @media (max-width:1199px) {
                    .wdx-contact-wrapper { grid-template-columns:1fr; }
                    .wdx-contact-info { display:none; }
                }
                @media (max-width:767px) {
                    .wdx-contact-form-wrapper { padding:36px 28px; }
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 991px) {
                    .aa-hero { padding: 120px 0 80px; }
                    .aa-hero-inner { grid-template-columns: 1fr; gap: 40px; }
                    .aa-hero-visual { display: none; }
                    .platform-content { padding-right: 0; margin-bottom: 32px; }
                    .platform-features { padding-left: 20px; grid-template-columns: 1fr; }
                    .arch-flow { flex-direction: column; align-items: center; }
                    .arch-line { transform: rotate(90deg); width: 60px; padding-top: 0; }
                    .arch-step { max-width: 100%; width: 100%; }
                    .challenge-grid { grid-template-columns: repeat(2, 1fr); }
                    .feat-grid { grid-template-columns: repeat(2, 1fr); }
                    .cta-content { padding: 48px 32px; }
                }
                @media (max-width: 576px) {
                    .aa-hero { padding: 110px 0 60px; }
                    .aa-hero-features { flex-direction: column; gap: 10px; }
                    .aa-hero-actions { flex-direction: column; }
                    .aa-hero-actions a { width: 100%; justify-content: center; }
                    .solution-content { padding: 28px; }
                    .mc-orbital { min-height: 420px; }
                    .mc-layer-cards { grid-template-columns: 1fr; gap: 10px; }
                    .mc-cloud-card { padding: 16px 12px; }
                    .mc-engine { padding: 20px; }
                    .mc-engine-inner { flex-direction: column; text-align: center; gap: 12px; }
                    .mc-engine-metrics { justify-content: center; }
                    .mc-governance { flex-direction: column; gap: 8px; padding: 16px; }
                    .mc-gov-divider { width: 40px; height: 1px; }
                    .mc-connector-split { display: none; }
                    .challenge-grid { grid-template-columns: 1fr; }
                    .feat-grid { grid-template-columns: 1fr; }
                    .feat-card { padding: 28px 24px; }
                    .cta-content { padding: 36px 20px; border-radius: 16px; }
                    .cta-actions { flex-direction: column; }
                    .cta-actions a { width: 100%; justify-content: center; }
                }
            `}</style>
        </>
    )
}
