import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Lightbulb, Search, Cloud, Shield, ArrowRight, Check, TrendingUp, Zap, FileSearch, Settings, BarChart3, RefreshCw, Database, Lock, Cpu, Globe, Building, Layers, Phone, Mail, CheckCircle2 } from "lucide-react"

export default function ServiceITConsulting() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'IT Consulting',
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
        setFormData({ name: '', email: '', mobile: '', service: 'IT Consulting', message: '' })
    }

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="itc-hero">
                        <div className="itc-hero-bg">
                            <div className="itc-hero-orb itc-orb-1"></div>
                            <div className="itc-hero-orb itc-orb-2"></div>
                            <div className="itc-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="hero-left">
                                        <span className="hero-badge"><Lightbulb size={16} /> IT Consulting</span>
                                        <h1 className="hero-title">Expert Technology <span className="itc-grad">Consulting</span> Services</h1>
                                        <p className="hero-desc">Assess your current infrastructure, identify improvement opportunities, and implement solutions that align with your business objectives and drive growth.</p>
                                        <div className="itc-hero-pills">
                                            <div className="itc-pill"><Check size={14} /> Infrastructure Assessment</div>
                                            <div className="itc-pill"><Check size={14} /> Cloud Strategy</div>
                                            <div className="itc-pill"><Check size={14} /> Security Audits</div>
                                        </div>
                                        <div className="hero-actions">
                                            <Link href="/service-app-retirement" className="btn-outline-custom">
                                                Back to Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="itc-diagram">
                                        <div className="itc-dia-hub">
                                            <div className="itc-dia-hub-inner"><Lightbulb size={26} /></div>
                                            <div className="itc-dia-pulse"></div>
                                            <div className="itc-dia-pulse itc-p2"></div>
                                        </div>
                                        <div className="itc-dnode itc-dn1"><Search size={16} /><span>Assess</span></div>
                                        <div className="itc-dnode itc-dn2"><Cloud size={16} /><span>Cloud</span></div>
                                        <div className="itc-dnode itc-dn3"><Shield size={16} /><span>Security</span></div>
                                        <div className="itc-dnode itc-dn4"><Database size={16} /><span>Data</span></div>
                                        <div className="itc-dnode itc-dn5"><RefreshCw size={16} /><span>Transform</span></div>
                                        <svg className="itc-dia-svg" viewBox="0 0 340 340">
                                            <circle cx="170" cy="170" r="115" fill="none" stroke="rgba(0,139,249,0.08)" strokeWidth="1" strokeDasharray="6 4" />
                                            <circle cx="170" cy="170" r="78" fill="none" stroke="rgba(0,139,249,0.12)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="170" y2="30" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="303" y2="113" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="252" y2="290" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="88" y2="290" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="37" y2="113" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
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
                                        <span className="section-tag">Expert Guidance</span>
                                        <h2 className="platform-title">Technology Consulting Excellence</h2>
                                        <p className="platform-subtitle">Strategic technology guidance to optimize your infrastructure and accelerate digital transformation</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="platform-features">
                                        <div className="pf-feat"><Check size={18} /> Infrastructure Assessment</div>
                                        <div className="pf-feat"><Check size={18} /> Digital Transformation</div>
                                        <div className="pf-feat"><Check size={18} /> Cloud Strategy</div>
                                        <div className="pf-feat"><Check size={18} /> Security Audits</div>
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
                                    <FileSearch size={20} />
                                    <span>The Challenge</span>
                                </div>
                                <h3 className="solution-title">Navigate Technology Complexity with Expert Guidance</h3>
                                <div className="solution-content">
                                    <p>Today's technology landscape is more complex than ever. Organizations face critical decisions about cloud adoption, digital transformation, cybersecurity, and emerging technologies—decisions that can significantly impact business success or create costly missteps.</p>
                                    <p>Without objective, expert guidance, businesses often struggle with choosing the right technologies, managing complex implementations, avoiding vendor lock-in, and ensuring security and compliance. These challenges are compounded by rapidly evolving technology trends and the difficulty of finding unbiased advice.</p>
                                    <p>Our IT Consulting services provide the expertise you need to make informed technology decisions. We bring deep industry knowledge, vendor-neutral recommendations, and proven methodologies to help you achieve your technology goals while minimizing risk.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Consulting Areas */}
                    <section className="consulting-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Our Expertise</span>
                                <h2 className="section-title">IT Consulting Services</h2>
                                <p className="section-sub">Comprehensive consulting across all technology domains</p>
                            </div>
                            <div className="consulting-grid">
                                <div className="consulting-card">
                                    <div className="cc-num">01</div>
                                    <div className="cc-icon"><FileSearch size={28} /></div>
                                    <h4>Infrastructure Assessment</h4>
                                    <p>Comprehensive evaluation of your current IT infrastructure to identify strengths, weaknesses, and optimization opportunities</p>
                                    <ul>
                                        <li>Network architecture review</li>
                                        <li>Server & storage analysis</li>
                                        <li>Performance benchmarking</li>
                                        <li>Capacity planning</li>
                                    </ul>
                                </div>
                                <div className="consulting-card">
                                    <div className="cc-num">02</div>
                                    <div className="cc-icon"><RefreshCw size={28} /></div>
                                    <h4>Digital Transformation</h4>
                                    <p>Strategic guidance for modernizing your business through technology, process automation, and digital innovation</p>
                                    <ul>
                                        <li>Transformation roadmap</li>
                                        <li>Process automation</li>
                                        <li>Technology modernization</li>
                                        <li>Change management</li>
                                    </ul>
                                </div>
                                <div className="consulting-card">
                                    <div className="cc-num">03</div>
                                    <div className="cc-icon"><Cloud size={28} /></div>
                                    <h4>Cloud Strategy</h4>
                                    <p>Expert guidance for cloud adoption, migration, and optimization across AWS, Azure, GCP, and hybrid environments</p>
                                    <ul>
                                        <li>Cloud readiness assessment</li>
                                        <li>Migration planning</li>
                                        <li>Cost optimization</li>
                                        <li>Multi-cloud strategy</li>
                                    </ul>
                                </div>
                                <div className="consulting-card">
                                    <div className="cc-num">04</div>
                                    <div className="cc-icon"><Shield size={28} /></div>
                                    <h4>Security & Compliance</h4>
                                    <p>Comprehensive security assessments and compliance audits to protect your organization and meet regulatory requirements</p>
                                    <ul>
                                        <li>Vulnerability assessment</li>
                                        <li>Compliance audits</li>
                                        <li>Security architecture</li>
                                        <li>Risk mitigation</li>
                                    </ul>
                                </div>
                                <div className="consulting-card">
                                    <div className="cc-num">05</div>
                                    <div className="cc-icon"><Database size={28} /></div>
                                    <h4>Data & Analytics</h4>
                                    <p>Strategic guidance for data management, analytics, and AI/ML initiatives to unlock business insights</p>
                                    <ul>
                                        <li>Data architecture</li>
                                        <li>Analytics strategy</li>
                                        <li>AI/ML readiness</li>
                                        <li>Data governance</li>
                                    </ul>
                                </div>
                                <div className="consulting-card">
                                    <div className="cc-num">06</div>
                                    <div className="cc-icon"><Building size={28} /></div>
                                    <h4>Enterprise Architecture</h4>
                                    <p>Design scalable, resilient enterprise architectures that support current needs and future growth</p>
                                    <ul>
                                        <li>Application portfolio</li>
                                        <li>Integration strategy</li>
                                        <li>Technology standards</li>
                                        <li>Architecture governance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Process - Our Approach (Unique Timeline) */}
                    <section className="itc-approach">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Our Approach</span>
                                <h2 className="section-title">Consulting Methodology</h2>
                                <p className="section-sub">A proven approach that delivers actionable insights and measurable results</p>
                            </div>
                            <div className="itc-timeline">
                                <div className="itc-timeline-line"></div>
                                <div className="itc-step itc-step-left">
                                    <div className="itc-step-content">
                                        <div className="itc-step-icon"><Search size={22} /></div>
                                        <h4>Discover</h4>
                                        <p>Understand your business objectives, challenges, and current technology landscape through stakeholder interviews and assessments</p>
                                    </div>
                                    <div className="itc-step-num">01</div>
                                </div>
                                <div className="itc-step itc-step-right">
                                    <div className="itc-step-num">02</div>
                                    <div className="itc-step-content">
                                        <div className="itc-step-icon"><BarChart3 size={22} /></div>
                                        <h4>Analyze</h4>
                                        <p>Perform detailed analysis of your infrastructure, processes, and requirements to identify gaps and opportunities</p>
                                    </div>
                                </div>
                                <div className="itc-step itc-step-left">
                                    <div className="itc-step-content">
                                        <div className="itc-step-icon"><Lightbulb size={22} /></div>
                                        <h4>Recommend</h4>
                                        <p>Develop actionable recommendations with clear prioritization, business cases, and implementation roadmaps</p>
                                    </div>
                                    <div className="itc-step-num">03</div>
                                </div>
                                <div className="itc-step itc-step-right">
                                    <div className="itc-step-num">04</div>
                                    <div className="itc-step-content">
                                        <div className="itc-step-icon"><Zap size={22} /></div>
                                        <h4>Implement</h4>
                                        <p>Support implementation with project management, technical guidance, and change management expertise</p>
                                    </div>
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
                                            <a href="mailto:info@ciencechip.com">info@ciencechip.com</a>
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
                                                    <option value="IT Consulting">IT Consulting</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="AI Governance">AI Governance</option>
                                                    <option value="Data Management">Data Management</option>
                                                    <option value="Enterprise Archiving">Enterprise Archiving</option>
                                                    <option value="Application Archiving">Application Archiving</option>
                                                    <option value="File Archiving">File Archiving</option>
                                                    <option value="App Retirement">App Retirement</option>
                                                    <option value="VCIO">VCIO</option>
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
                .itc-hero {
                    background: linear-gradient(135deg, #0a1628 0%, #0F3567 40%, #0d2d5a 100%);
                    padding: 140px 0 110px;
                    position: relative; overflow: hidden;
                }
                .itc-hero-bg { position: absolute; inset: 0; pointer-events: none; }
                .itc-hero-orb {
                    position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.18;
                }
                .itc-orb-1 { width: 400px; height: 400px; background: #008BF9; top: -80px; right: -60px; }
                .itc-orb-2 { width: 300px; height: 300px; background: #00d4ff; bottom: -60px; left: -40px; }
                .itc-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.04) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(0,139,249,0.04) 1px, transparent 1px);
                    background-size: 48px 48px;
                }
                .itc-hero::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: itcShimmer 3s linear infinite;
                }
                @keyframes itcShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
                .hero-left { position: relative; z-index: 1; }
                .hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.12);
                    border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff;
                    padding: 8px 20px; border-radius: 50px;
                    font-size: 13px; font-weight: 600;
                    text-transform: uppercase; letter-spacing: 2px;
                    margin-bottom: 28px;
                }
                .hero-title {
                    font-size: clamp(2rem, 4.5vw, 3rem);
                    font-weight: 700; color: #fff;
                    line-height: 1.18; margin-bottom: 20px;
                }
                .itc-grad {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                }
                .hero-desc {
                    font-size: 1.1rem;
                    color: rgba(255,255,255,0.72);
                    line-height: 1.7; max-width: 520px;
                    margin-bottom: 24px;
                }
                .itc-hero-pills {
                    display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px;
                }
                .itc-pill {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.2);
                    padding: 6px 14px; border-radius: 6px;
                    color: #4db8ff; font-size: 0.82rem; font-weight: 600;
                }
                .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .btn-outline-custom {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.9);
                    padding: 14px 28px; border-radius: 8px;
                    border: 1px solid rgba(255,255,255,0.2);
                    font-weight: 600; font-size: 0.95rem;
                    text-decoration: none; transition: all .3s;
                }
                .btn-outline-custom:hover {
                    border-color: #008BF9; color: #008BF9;
                }
                /* Diagram */
                .itc-diagram {
                    position: relative; width: 340px; height: 340px; margin: 0 auto;
                }
                .itc-dia-svg {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                }
                .itc-dia-hub {
                    position: absolute; top: 50%; left: 50%;
                    transform: translate(-50%, -50%); z-index: 2;
                }
                .itc-dia-hub-inner {
                    width: 64px; height: 64px; border-radius: 50%;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; box-shadow: 0 0 30px rgba(0,139,249,0.35);
                }
                .itc-dia-pulse {
                    position: absolute; inset: -10px; border-radius: 50%;
                    border: 1.5px solid rgba(0,139,249,0.3);
                    animation: itcPulse 2.5s ease-out infinite;
                }
                .itc-p2 { inset: -22px; animation-delay: 1.2s; }
                @keyframes itcPulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                .itc-dnode {
                    position: absolute; z-index: 2;
                    display: flex; flex-direction: column; align-items: center; gap: 4px;
                    background: rgba(0,20,60,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 10px 14px; border-radius: 10px; color: #4db8ff;
                    font-size: 0.72rem; font-weight: 600; white-space: nowrap;
                    backdrop-filter: blur(6px); transition: all .3s;
                }
                .itc-dnode:hover { border-color: #008BF9; background: rgba(0,139,249,0.15); }
                .itc-dn1 { top: -2px; left: 50%; transform: translateX(-50%); }
                .itc-dn2 { top: 25%; right: -8px; }
                .itc-dn3 { bottom: 8%; right: 10px; }
                .itc-dn4 { bottom: 8%; left: 10px; }
                .itc-dn5 { top: 25%; left: -8px; }

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
                .section-title.white { color: #fff; }
                .section-sub {
                    font-size: 1.05rem; color: #64748b;
                    max-width: 580px; margin: 0 auto;
                    line-height: 1.7;
                }
                .section-sub.white { color: rgba(255,255,255,0.7); }
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

                /* ===== CONSULTING ===== */
                .consulting-section { padding: 90px 0; background: #f8fafc; }
                .consulting-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .consulting-card {
                    background: #fff; padding: 36px 30px; border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    position: relative; overflow: hidden;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .consulting-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px; background: #008BF9;
                    transform: scaleX(0);
                    transition: transform .4s;
                }
                .consulting-card:hover::before { transform: scaleX(1); }
                .consulting-card:hover {
                    border-color: transparent;
                    box-shadow: 0 20px 40px rgba(0,139,249,0.12);
                    transform: translateY(-8px);
                }
                .cc-num {
                    position: absolute;
                    top: 20px; right: 24px;
                    font-size: 3.5rem; font-weight: 900;
                    color: #f1f5f9; line-height: 1;
                }
                .cc-icon {
                    width: 64px; height: 64px; border-radius: 14px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 22px;
                    box-shadow: 0 8px 20px rgba(0,139,249,0.25);
                }
                .consulting-card h4 {
                    font-size: 1.2rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 12px;
                }
                .consulting-card > p {
                    font-size: 0.95rem; color: #64748b;
                    line-height: 1.7; margin-bottom: 18px;
                }
                .consulting-card ul {
                    list-style: none; padding: 0; margin: 0;
                }
                .consulting-card ul li {
                    font-size: 0.9rem; color: #475569;
                    padding: 6px 0;
                    border-top: 1px solid #f1f5f9;
                }
                .consulting-card ul li:first-child { border-top: none; }

                /* ===== APPROACH TIMELINE ===== */
                .itc-approach {
                    padding: 90px 0;
                    background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
                }
                .itc-timeline {
                    position: relative; max-width: 820px; margin: 0 auto;
                }
                .itc-timeline-line {
                    position: absolute; top: 0; bottom: 0;
                    left: 50%; width: 2px;
                    background: linear-gradient(180deg, #008BF9 0%, rgba(0,139,249,0.15) 100%);
                    transform: translateX(-50%);
                }
                .itc-step {
                    display: flex; align-items: center; gap: 32px;
                    margin-bottom: 48px; position: relative;
                }
                .itc-step:last-child { margin-bottom: 0; }
                .itc-step-left { flex-direction: row; }
                .itc-step-right { flex-direction: row-reverse; }
                .itc-step-left .itc-step-content { text-align: right; }
                .itc-step-right .itc-step-content { text-align: left; }
                .itc-step-num {
                    width: 52px; height: 52px; min-width: 52px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    color: #fff; display: flex; align-items: center; justify-content: center;
                    font-size: 1.1rem; font-weight: 800;
                    box-shadow: 0 6px 20px rgba(0,139,249,0.3);
                    z-index: 2; position: relative;
                }
                .itc-step-content {
                    flex: 1; background: #fff;
                    border: 1px solid #e2e8f0; border-radius: 16px;
                    padding: 28px 30px;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.04);
                    transition: all .4s;
                }
                .itc-step-content:hover {
                    border-color: rgba(0,139,249,0.3);
                    box-shadow: 0 12px 32px rgba(0,139,249,0.1);
                    transform: translateY(-4px);
                }
                .itc-step-icon {
                    width: 48px; height: 48px; border-radius: 12px;
                    background: rgba(0,139,249,0.08);
                    display: inline-flex; align-items: center; justify-content: center;
                    color: #008BF9; margin-bottom: 14px;
                }
                .itc-step-left .itc-step-icon { margin-left: auto; }
                .itc-step-content h4 {
                    font-size: 1.15rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 8px;
                }
                .itc-step-content p {
                    font-size: 0.92rem; color: #64748b;
                    line-height: 1.65; margin: 0;
                }

                /* ===== WDX CONTACT ===== */
                .wdx-contact-section {
                    padding: 90px 0;
                    background: linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%);
                }
                .wdx-contact-header {
                    text-align: center; margin-bottom: 48px;
                }
                .wdx-contact-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.08); color: #008BF9;
                    padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2px;
                    margin-bottom: 16px;
                }
                .wdx-contact-header h2 {
                    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
                    font-weight: 800; color: #0F3567;
                    margin-bottom: 12px; line-height: 1.2;
                }
                .wdx-contact-header h2 span { color: #008BF9; }
                .wdx-contact-header p {
                    font-size: 1rem; color: #64748b;
                    line-height: 1.7; max-width: 600px; margin: 0 auto;
                }
                .wdx-contact-wrapper {
                    display: grid; grid-template-columns: 1fr 1.3fr; gap: 40px; align-items: start;
                }
                .wdx-contact-info { display: flex; flex-direction: column; gap: 20px; }
                .wdx-info-item {
                    display: flex; align-items: center; gap: 16px;
                    background: #fff; border: 1px solid #e2e8f0;
                    padding: 18px 22px; border-radius: 12px;
                    transition: all .3s;
                }
                .wdx-info-item:hover {
                    border-color: #008BF9; box-shadow: 0 8px 20px rgba(0,139,249,0.08);
                }
                .wdx-info-icon-box {
                    width: 48px; height: 48px; min-width: 48px;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    display: flex; align-items: center; justify-content: center; color: #fff;
                }
                .wdx-info-content h4 {
                    font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;
                    color: #94a3b8; font-weight: 600; margin-bottom: 4px;
                }
                .wdx-info-content a, .wdx-info-content p {
                    font-size: 0.95rem; color: #0F3567; font-weight: 600;
                    text-decoration: none; margin: 0;
                }
                .wdx-benefits-list {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
                    margin-top: 8px;
                }
                .wdx-benefit-item {
                    display: flex; align-items: center; gap: 10px;
                    font-size: 0.9rem; color: #334155; font-weight: 500;
                }
                .wdx-benefit-item :global(svg) { color: #22c55e; flex-shrink: 0; }
                .wdx-contact-form-wrapper {
                    background: #fff; border-radius: 20px; padding: 40px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.06);
                    position: relative;
                }
                .wdx-contact-form { display: flex; flex-direction: column; gap: 16px; }
                .wdx-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .wdx-form-group { display: flex; flex-direction: column; }
                .wdx-form-full { grid-column: 1/-1; }
                .wdx-form-group label {
                    font-size: 0.82rem; font-weight: 600; color: #334155; margin-bottom: 6px;
                }
                .wdx-form-group input, .wdx-form-group select, .wdx-form-group textarea {
                    padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px;
                    font-size: 0.92rem; font-family: inherit; transition: all .3s;
                    background: #f8fafc;
                }
                .wdx-form-group input:focus, .wdx-form-group select:focus, .wdx-form-group textarea:focus {
                    outline: none; border-color: #008BF9; background: #fff;
                    box-shadow: 0 0 0 3px rgba(0,139,249,0.08);
                }
                .wdx-submit-btn {
                    width: 100%; padding: 14px; border: none; border-radius: 10px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    color: #fff; font-size: 0.95rem; font-weight: 700;
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    cursor: pointer; transition: all .3s; margin-top: 8px;
                }
                .wdx-submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0,139,249,0.35);
                }
                .wdx-form-success-msg {
                    position: absolute; inset: 0; z-index: 5;
                    background: white; border-radius: 20px;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center; gap: 12px;
                }
                .wdx-form-success-msg :global(svg) { color: #22c55e; }
                .wdx-form-success-msg h3 { font-size: 1.3rem; font-weight: 700; color: #0F3567; margin: 0; }
                .wdx-form-success-msg p { color: #64748b; font-size: 0.9rem; margin: 0; }
                @media (max-width: 768px) {
                    .wdx-contact-wrapper { grid-template-columns: 1fr; }
                    .wdx-form-grid { grid-template-columns: 1fr; }
                    .wdx-benefits-list { grid-template-columns: 1fr; }
                    .wdx-contact-form-wrapper { padding: 24px; }
                }

                /* ===== CTA ===== */
                .cta-section { padding: 90px 0; background: #f8fafc; }
                .cta-wrapper {
                    max-width: 800px; margin: 0 auto;
                    text-align: center;
                }
                .cta-content {
                    background: #0F3567;
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

                /* ===== RESPONSIVE ===== */
                @media (max-width: 991px) {
                    .itc-hero { padding: 120px 0 80px; }
                    .platform-content { padding-right: 0; margin-bottom: 32px; }
                    .platform-features { padding-left: 20px; grid-template-columns: 1fr; }
                    .consulting-grid { grid-template-columns: repeat(2, 1fr); }
                    .itc-timeline-line { left: 26px; }
                    .itc-step, .itc-step-left, .itc-step-right { flex-direction: row !important; }
                    .itc-step-left .itc-step-content, .itc-step-right .itc-step-content { text-align: left; }
                    .itc-step-left .itc-step-icon { margin-left: 0; }
                    .cta-content { padding: 48px 32px; }
                    .wdx-form-row { grid-template-columns: 1fr; }
                }
                @media (max-width: 576px) {
                    .itc-hero { padding: 100px 0 60px; }
                    .solution-content { padding: 28px; }
                    .consulting-grid { grid-template-columns: 1fr; }
                    .consulting-card { padding: 28px 24px; }
                    .itc-step-content { padding: 20px; }
                    .hero-actions { flex-direction: column; }
                    .hero-actions a { width: 100%; justify-content: center; }
                    .cta-content { padding: 36px 20px; border-radius: 16px; }
                    .cta-actions { flex-direction: column; }
                    .cta-actions a { width: 100%; justify-content: center; }
                    .wdx-form-card { padding: 24px 18px; }
                }

                /* ===== CONTACT SECTION ===== */
                .itc-contact-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%);
                }

                .itc-contact-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .itc-contact-badge {
                    display: inline-block;
                    padding: 8px 16px;
                    background: #e0eeff;
                    color: #008bf9;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 12px;
                }

                .itc-contact-header h2 {
                    font-size: 42px;
                    font-weight: 700;
                    color: #1a202c;
                    margin-bottom: 16px;
                }

                .itc-contact-header h2 span {
                    color: #008bf9;
                }

                .itc-contact-header p {
                    font-size: 16px;
                    color: #666;
                    margin: 0;
                }

                .itc-contact-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    align-items: start;
                }

                .itc-contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .itc-info-item {
                    display: flex;
                    gap: 16px;
                }

                .itc-info-icon-box {
                    width: 50px;
                    height: 50px;
                    background: #008bf9;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }

                .itc-info-content h4 {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1a202c;
                    margin: 0 0 4px 0;
                }

                .itc-info-content a {
                    font-size: 16px;
                    color: #008bf9;
                    text-decoration: none;
                    transition: color 0.3s;
                }

                .itc-info-content a:hover {
                    color: #0066cc;
                }

                .itc-benefits-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-top: 24px;
                }

                .itc-benefit-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: #2d3748;
                }

                .itc-benefit-item svg {
                    color: #008bf9;
                    flex-shrink: 0;
                }

                .itc-contact-form-wrapper {
                    position: relative;
                }

                .itc-form-success-msg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    z-index: 10;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .itc-form-success-msg svg {
                    color: #008bf9;
                }

                .itc-form-success-msg h3 {
                    font-size: 24px;
                    font-weight: 700;
                    color: #1a202c;
                    margin: 0;
                }

                .itc-form-success-msg p {
                    font-size: 14px;
                    color: #666;
                    margin: 0;
                }

                .itc-contact-form {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                }

                .itc-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .itc-form-group {
                    display: flex;
                    flex-direction: column;
                }

                .itc-form-group label {
                    font-size: 14px;
                    font-weight: 600;
                    color: #2d3748;
                    margin-bottom: 8px;
                }

                .itc-form-group input,
                .itc-form-group select,
                .itc-form-group textarea {
                    padding: 12px 16px;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                    font-size: 14px;
                    font-family: inherit;
                    transition: all 0.3s;
                }

                .itc-form-group input:focus,
                .itc-form-group select:focus,
                .itc-form-group textarea:focus {
                    outline: none;
                    border-color: #008bf9;
                    box-shadow: 0 0 0 3px rgba(0, 139, 249, 0.1);
                }

                .itc-form-group.itc-form-full {
                    grid-column: 1 / -1;
                }

                .itc-form-group textarea {
                    resize: vertical;
                }

                .itc-submit-btn {
                    width: 100%;
                    padding: 14px 24px;
                    background: #008bf9;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: all 0.3s;
                    margin-top: 10px;
                }

                .itc-submit-btn:hover {
                    background: #0066cc;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 16px rgba(0, 139, 249, 0.3);
                }

                @media (max-width: 768px) {
                    .itc-form-grid { grid-template-columns: 1fr; }
                    .itc-contact-form-wrapper { padding: 28px; }
                    .itc-form-group textarea { min-height: 120px; }
                }
            `}</style>
        </>
    )
}
