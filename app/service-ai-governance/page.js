'use client'

import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Shield, Lock, Scale, Eye, FileCheck, ShieldCheck, Database, AlertTriangle, CheckCircle2, Layers, Settings, Network, ArrowRight, Check, ChevronRight, Handshake, Phone, Mail, Cpu, BarChart3 } from "lucide-react"

export default function ServiceAIGovernance() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'AI Governance',
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
        setFormData({ name: '', email: '', mobile: '', service: 'AI Governance', message: '' })
    }
    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="gov-hero">
                        <div className="gov-hero-bg">
                            <div className="gov-hero-orb gov-orb-1"></div>
                            <div className="gov-hero-orb gov-orb-2"></div>
                            <div className="gov-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="gov-hero-inner">
                                <div className="gov-hero-content">
                                    <div className="gov-badge-wrap">
                                        <span className="gov-hero-badge"><Shield size={14} /> AI Governance</span>
                                        <span className="gov-badge-line"></span>
                                    </div>
                                    <h1 className="gov-hero-title">Enterprise Data Governance for <span>Trusted, AI-Ready</span> Data</h1>
                                    <p className="gov-hero-desc">Building the foundation for responsible and compliant AI deployment across your enterprise with robust governance frameworks.</p>
                                    <div className="gov-hero-features">
                                        <div className="gov-hero-feat"><Check size={16} /> GDPR & CCPA Compliant</div>
                                        <div className="gov-hero-feat"><Check size={16} /> Enterprise-Grade Security</div>
                                        <div className="gov-hero-feat"><Check size={16} /> Real-Time Monitoring</div>
                                    </div>
                                    <div className="gov-hero-actions">
                                        <Link href="/service-enterprise-intelligence" className="gov-btn-outline">
                                            Back to Services
                                        </Link>
                                    </div>
                                </div>
                                <div className="gov-hero-visual">
                                    <div className="gov-visual-container">
                                        {/* Central Shield */}
                                        <div className="gov-visual-core">
                                            <div className="gov-visual-core-inner"><Shield size={30} /></div>
                                            <div className="gov-visual-ring"></div>
                                            <div className="gov-visual-ring gov-ring-2"></div>
                                        </div>
                                        {/* Surrounding nodes */}
                                        <div className="gov-vnode gov-vn-1"><Lock size={16} /><span>Privacy</span></div>
                                        <div className="gov-vnode gov-vn-2"><Scale size={16} /><span>Fairness</span></div>
                                        <div className="gov-vnode gov-vn-3"><Eye size={16} /><span>Transparency</span></div>
                                        <div className="gov-vnode gov-vn-4"><FileCheck size={16} /><span>Compliance</span></div>
                                        <div className="gov-vnode gov-vn-5"><Database size={16} /><span>Data Quality</span></div>
                                        <div className="gov-vnode gov-vn-6"><ShieldCheck size={16} /><span>Security</span></div>
                                        {/* SVG Connection lines */}
                                        <svg className="gov-visual-lines" viewBox="0 0 380 380">
                                            <line x1="190" y1="190" x2="190" y2="35" className="gov-conn-line" />
                                            <line x1="190" y1="190" x2="330" y2="110" className="gov-conn-line" />
                                            <line x1="190" y1="190" x2="330" y2="270" className="gov-conn-line" />
                                            <line x1="190" y1="190" x2="190" y2="345" className="gov-conn-line" />
                                            <line x1="190" y1="190" x2="50" y2="270" className="gov-conn-line" />
                                            <line x1="190" y1="190" x2="50" y2="110" className="gov-conn-line" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Question */}
                    <section className="question-section">
                        <div className="container">
                            <div className="question-card">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <span className="section-tag">The Question</span>
                                        <h2 className="section-title">Is AI Governable?</h2>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="question-body">
                                            <p className="lead-text">AI governance sits at the top of enterprise challenges and has proven to be a showstopper for many projects — primarily due to concerns over <strong>data privacy</strong>, <strong>data security</strong>, and <strong>regulatory compliance</strong>.</p>
                                            <p>The answer lies not in avoiding AI, but in establishing robust governance frameworks that transform these challenges into competitive advantages.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Challenges */}
                    <section className="challenges-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Key Challenges</span>
                                <h2 className="section-title">Understanding the AI Governance Landscape</h2>
                            </div>
                            <div className="challenges-grid">
                                <div className="challenge-card">
                                    <div className="card-icon-wrap"><Database size={26} /></div>
                                    <h4>The Data Imperative</h4>
                                    <p>Enterprise AI requires clean, governed, well-integrated datasets aligned with business needs — accessible in real-time and optimized for operational workflows.</p>
                                </div>
                                <div className="challenge-card">
                                    <div className="card-icon-wrap"><AlertTriangle size={26} /></div>
                                    <h4>Shadow AI Risks</h4>
                                    <p>Citizen-led innovation, or "shadow AI," poses significant risks by bypassing governance frameworks entirely, creating compliance vulnerabilities.</p>
                                </div>
                                <div className="challenge-card">
                                    <div className="card-icon-wrap"><CheckCircle2 size={26} /></div>
                                    <h4>The Path Forward</h4>
                                    <p>Organizations must fundamentally transform how data is governed, accessed, and monetized to build a trusted, governed, and integrated data foundation.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diagram 1 */}
                    <section className="diagram-section">
                        <div className="diagram-wrapper">
                            <img src="/assets/images/ai-governance-1.svg" alt="AI Governance Architecture" />
                        </div>
                    </section>

                    {/* Framework */}
                    <section className="framework-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">The Framework</span>
                                <h2 className="section-title">Framework for Secure & Safe AI Operations</h2>
                                <p className="section-sub">A comprehensive governance approach ensuring compliance and responsible AI deployment across all enterprise layers</p>
                            </div>
                            <div className="framework-stack">
                                <div className="layer-card">
                                    <div className="layer-icon"><Layers size={26} /></div>
                                    <div className="layer-body">
                                        <div className="layer-top">
                                            <span className="layer-num">01</span>
                                            <h4>Foundational Layer</h4>
                                        </div>
                                        <p>Establishes core data governance policies, metadata management, and data privacy protections including GDPR, CCPA, and HIPAA compliance.</p>
                                        <div className="tag-row">
                                            <span className="tag-chip">Data Governance</span>
                                            <span className="tag-chip">Metadata Management</span>
                                            <span className="tag-chip">Privacy Protection</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="layer-card">
                                    <div className="layer-icon"><Settings size={26} /></div>
                                    <div className="layer-body">
                                        <div className="layer-top">
                                            <span className="layer-num">02</span>
                                            <h4>Operational Layer</h4>
                                        </div>
                                        <p>Enhances governance with real-time data accessibility, auditability, and AI model risk management with algorithmic fairness and traceability.</p>
                                        <div className="tag-row">
                                            <span className="tag-chip">Real-time Access</span>
                                            <span className="tag-chip">Model Risk Management</span>
                                            <span className="tag-chip">Explainability</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="layer-card">
                                    <div className="layer-icon"><Network size={26} /></div>
                                    <div className="layer-body">
                                        <div className="layer-top">
                                            <span className="layer-num">03</span>
                                            <h4>Experience Layer</h4>
                                        </div>
                                        <p>Prioritizes user access controls, federated governance, and continuous monitoring — enabling seamless data activation without compromising security.</p>
                                        <div className="tag-row">
                                            <span className="tag-chip">Access Controls</span>
                                            <span className="tag-chip">Federated Governance</span>
                                            <span className="tag-chip">Continuous Monitoring</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diagram 2 */}
                    <section className="diagram-section alt">
                        <div className="diagram-wrapper">
                            <img src="/assets/images/ai-governance-2.svg" alt="AI Governance Framework" />
                        </div>
                    </section>

                    {/* Six Core Principles */}
                    <section className="principles-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag light">Six Core Principles</span>
                                <h2 className="section-title light">Embedded Across All Governance Layers</h2>
                            </div>
                            <div className="principles-grid">
                                <div className="principle-card">
                                    <div className="principle-icon"><Lock size={28} /></div>
                                    <h5>Data Privacy</h5>
                                    <p>Robust privacy controls and encryption protocols to protect sensitive information</p>
                                </div>
                                <div className="principle-card">
                                    <div className="principle-icon"><Scale size={28} /></div>
                                    <h5>Algorithmic Fairness</h5>
                                    <p>Ensure unbiased AI decisions through continuous monitoring and testing</p>
                                </div>
                                <div className="principle-card">
                                    <div className="principle-icon"><Eye size={28} /></div>
                                    <h5>Explainability</h5>
                                    <p>Make AI decisions transparent and understandable for all stakeholders</p>
                                </div>
                                <div className="principle-card">
                                    <div className="principle-icon"><FileCheck size={28} /></div>
                                    <h5>Auditability</h5>
                                    <p>Comprehensive logs and audit trails for full regulatory compliance</p>
                                </div>
                                <div className="principle-card">
                                    <div className="principle-icon"><Shield size={28} /></div>
                                    <h5>Security</h5>
                                    <p>Enterprise-grade security measures protecting every layer of AI systems</p>
                                </div>
                                <div className="principle-card">
                                    <div className="principle-icon"><ShieldCheck size={28} /></div>
                                    <h5>Compliance</h5>
                                    <p>Meet GDPR, CCPA, HIPAA and industry-specific regulatory standards</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Regulations */}
                    <section className="regulations-section">
                        <div className="container">
                            <div className="regulations-card">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <span className="section-tag">Growing Regulations</span>
                                        <h2 className="reg-title">Anticipatory Regulations Across All Industries</h2>
                                        <p className="reg-text">Generative AI offers transformative potential, but CIOs and technology leaders face the challenge of deploying it safely and responsibly. Robust AI governance is essential for predictable, controlled, and compliant outcomes.</p>
                                        <p className="reg-text">As AI grows, organizations must prepare for evolving regulations across federal, state, and local levels.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checklist-box">
                                            <h4>Key Compliance Actions</h4>
                                            <ul>
                                                <li><Check size={16} /> Data Privacy (GDPR, CCPA, HIPAA)</li>
                                                <li><Check size={16} /> Data Sovereignty Management</li>
                                                <li><Check size={16} /> AI Explainability Requirements</li>
                                                <li><Check size={16} /> Algorithmic Fairness Monitoring</li>
                                                <li><Check size={16} /> Model Risk Management</li>
                                                <li><Check size={16} /> RBAC & Policy Enforcement</li>
                                                <li><Check size={16} /> Sector-Specific Standards</li>
                                                <li><Check size={16} /> Cybersecurity Frameworks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diagram 3 */}
                    <section className="diagram-section">
                        <div className="diagram-wrapper">
                            <img src="/assets/images/ai-governance-3.svg" alt="AI Governance Compliance" />
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
                                                    <option value="AI Governance">AI Governance</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="Data Management">Data Management</option>
                                                    <option value="Enterprise Archiving">Enterprise Archiving</option>
                                                    <option value="Application Archiving">Application Archiving</option>
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
                .gov-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 120px;
                    position: relative; overflow: hidden;
                }
                .gov-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: govShimmer 3s ease infinite;
                }
                @keyframes govShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .gov-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .gov-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .gov-orb-1 { width:450px; height:450px; background:rgba(0,139,249,0.08); top:-15%; right:-5%; animation:govFloat 8s ease-in-out infinite; }
                .gov-orb-2 { width:300px; height:300px; background:rgba(0,212,255,0.06); bottom:-10%; left:10%; animation:govFloat 10s ease-in-out infinite reverse; }
                @keyframes govFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(15px,-15px)} }
                .gov-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,249,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                }
                .gov-hero-inner {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 60px; align-items: center;
                    position: relative; z-index: 2;
                }
                .gov-badge-wrap { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
                .gov-hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 2px; white-space: nowrap;
                }
                .gov-badge-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(0,139,249,0.3), transparent); }
                .gov-hero-title {
                    font-size: clamp(2.2rem, 4.5vw, 3rem);
                    font-weight: 800; color: #fff; line-height: 1.15;
                    margin-bottom: 22px; letter-spacing: -0.02em;
                }
                .gov-hero-title span {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .gov-hero-desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.65);
                    line-height: 1.75; max-width: 520px; margin-bottom: 24px;
                }
                .gov-hero-features {
                    display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
                }
                .gov-hero-feat {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.88rem; color: rgba(255,255,255,0.7); font-weight: 500;
                }
                .gov-hero-feat :global(svg) { color: #4db8ff; }
                .gov-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .gov-btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 15px 30px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all .3s;
                }
                .gov-btn-outline:hover { border-color: rgba(0,139,249,0.5); color: #4db8ff; background: rgba(0,139,249,0.05); }

                /* Hero Visual */
                .gov-hero-visual { display: flex; align-items: center; justify-content: center; }
                .gov-visual-container { position: relative; width: 380px; height: 380px; }
                .gov-visual-lines { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .gov-conn-line { stroke: rgba(0,139,249,0.2); stroke-width: 1; stroke-dasharray: 6 4; animation: govDash 15s linear infinite; }
                @keyframes govDash { to { stroke-dashoffset: -100; } }
                .gov-visual-core {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .gov-visual-core-inner {
                    width: 76px; height: 76px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .gov-visual-ring {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 76px; height: 76px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: govPulse 3s ease-out infinite;
                }
                .gov-ring-2 { animation-delay: 1.5s; }
                @keyframes govPulse { 0%{width:76px;height:76px;opacity:0.6}100%{width:190px;height:190px;opacity:0} }
                .gov-vnode {
                    position: absolute; display: flex; align-items: center; gap: 7px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 9px 14px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.78rem; font-weight: 600;
                    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
                    z-index: 2; transition: all 0.3s;
                }
                .gov-vnode:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); box-shadow: 0 0 20px rgba(0,139,249,0.4); }
                .gov-vnode span { color: rgba(255,255,255,0.8); }
                .gov-vnode :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .gov-vn-1 { top: 10px; left: 50%; transform: translateX(-50%); }
                .gov-vn-2 { top: 75px; right: 10px; }
                .gov-vn-3 { top: 230px; right: 10px; }
                .gov-vn-4 { bottom: 10px; left: 50%; transform: translateX(-50%); }
                .gov-vn-5 { top: 230px; left: 10px; }
                .gov-vn-6 { top: 75px; left: 10px; }

                /* ===== COMMON ===== */
                .section-tag {
                    display: inline-block; color: #008BF9;
                    font-size: 12px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2px;
                    margin-bottom: 12px;
                    background: rgba(0,139,249,0.08);
                    padding: 6px 14px; border-radius: 4px;
                }
                .section-tag.light { color: #008BF9; background: rgba(0,139,249,0.15); }
                .section-title {
                    font-size: clamp(1.75rem, 3.5vw, 2.4rem);
                    font-weight: 800; color: #0F3567;
                    line-height: 1.2; margin-bottom: 16px;
                }
                .section-title.light { color: #fff; }
                .section-sub {
                    font-size: 1.05rem; color: #64748b;
                    max-width: 620px; margin: 0 auto; line-height: 1.7;
                }
                .section-header { margin-bottom: 56px; }

                /* ===== QUESTION ===== */
                .question-section { padding: 90px 0; background: #fff; }
                .question-card {
                    background: linear-gradient(135deg, #f8fafc, #fff);
                    border-radius: 20px; padding: 52px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                }
                .question-body { padding-left: 28px; border-left: 3px solid #008BF9; }
                .lead-text { font-size: 1.1rem; color: #1e293b; line-height: 1.75; margin-bottom: 16px; }
                .lead-text strong { color: #008BF9; }
                .question-body p:last-child { font-size: 0.95rem; color: #64748b; line-height: 1.7; margin: 0; }

                /* ===== CHALLENGES ===== */
                .challenges-section { padding: 90px 0; background: #f8fafc; }
                .challenges-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .challenge-card {
                    background: #fff; padding: 36px 30px; border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative; overflow: hidden;
                }
                .challenge-card::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: #008BF9; transform: scaleX(0); transition: transform .4s;
                }
                .challenge-card:hover::before { transform: scaleX(1); }
                .challenge-card:hover {
                    border-color: transparent;
                    box-shadow: 0 20px 40px rgba(0,139,249,0.12);
                    transform: translateY(-8px);
                }
                .card-icon-wrap {
                    width: 60px; height: 60px; border-radius: 14px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 22px;
                    box-shadow: 0 8px 20px rgba(0,139,249,0.25);
                }
                .challenge-card h4 {
                    font-size: 1.2rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 12px;
                }
                .challenge-card p { font-size: 0.95rem; color: #64748b; line-height: 1.7; margin: 0; }

                /* ===== DIAGRAMS ===== */
                .diagram-section { padding: 60px 0; background: #fff; }
                .diagram-section.alt { background: #f8fafc; }
                .diagram-wrapper {
                    max-width: 1300px; margin: 0 auto; padding: 0 40px;
                }
                .diagram-wrapper img { width: 100%; height: auto; display: block; }

                /* ===== FRAMEWORK ===== */
                .framework-section { padding: 90px 0; background: #fff; }
                .framework-stack { display: flex; flex-direction: column; gap: 24px; }
                .layer-card {
                    display: flex; align-items: flex-start; gap: 28px;
                    background: linear-gradient(135deg, #f8fafc, #fff);
                    border-radius: 16px; padding: 36px;
                    border: 1px solid #e2e8f0;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .layer-card:hover {
                    border-color: #008BF9;
                    box-shadow: 0 16px 40px rgba(0,139,249,0.1);
                    transform: translateY(-4px);
                }
                .layer-icon {
                    width: 58px; height: 58px; min-width: 58px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff;
                    box-shadow: 0 6px 18px rgba(0,139,249,0.25);
                }
                .layer-body { flex: 1; }
                .layer-top { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
                .layer-num {
                    background: rgba(0,139,249,0.1);
                    color: #008BF9; padding: 4px 12px;
                    border-radius: 6px; font-size: 12px; font-weight: 800;
                }
                .layer-body h4 { font-size: 1.25rem; font-weight: 700; color: #0F3567; margin: 0; }
                .layer-body p { font-size: 0.95rem; color: #64748b; line-height: 1.7; margin-bottom: 16px; }
                .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
                .tag-chip {
                    background: #fff; border: 1px solid #e2e8f0;
                    padding: 6px 16px; border-radius: 8px;
                    font-size: 0.82rem; color: #475569; font-weight: 600;
                    transition: all .3s;
                }
                .tag-chip:hover { border-color: #008BF9; color: #008BF9; }

                /* ===== PRINCIPLES ===== */
                .principles-section { padding: 90px 0; background: #0F3567; position: relative; overflow: hidden; }
                .principles-section::before {
                    content: ''; position: absolute; top: 0; right: 0;
                    width: 40%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(0,139,249,0.05));
                }
                .principles-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px; position: relative; z-index: 1;
                }
                .principle-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px; padding: 34px;
                    text-align: center;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .principle-card:hover {
                    background: rgba(255,255,255,0.08);
                    border-color: rgba(0,139,249,0.35);
                    transform: translateY(-6px);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.2);
                }
                .principle-icon {
                    width: 64px; height: 64px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    border-radius: 16px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin: 0 auto 20px;
                    box-shadow: 0 8px 20px rgba(0,139,249,0.3);
                }
                .principle-card h5 {
                    font-size: 1.1rem; font-weight: 700;
                    color: #fff; margin-bottom: 10px;
                }
                .principle-card p {
                    font-size: 0.9rem; color: rgba(255,255,255,0.6);
                    line-height: 1.65; margin: 0;
                }

                /* ===== REGULATIONS ===== */
                .regulations-section { padding: 90px 0; background: linear-gradient(135deg, #f8fafc 0%, #fff 100%); }
                .regulations-card {
                    background: #fff; border-radius: 20px;
                    padding: 52px; border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                }
                .reg-title {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 800; color: #0F3567;
                    margin-bottom: 20px; line-height: 1.3;
                }
                .reg-text { font-size: 0.95rem; color: #64748b; line-height: 1.75; margin-bottom: 16px; }
                .checklist-box {
                    background: linear-gradient(160deg, #0a1628, #0F3567);
                    border-radius: 16px; padding: 36px;
                }
                .checklist-box h4 {
                    font-size: 1.15rem; font-weight: 700;
                    color: #fff; margin-bottom: 22px;
                }
                .checklist-box ul { list-style: none; padding: 0; margin: 0; }
                .checklist-box li {
                    display: flex; align-items: center; gap: 12px;
                    padding: 12px 0; color: rgba(255,255,255,0.88);
                    font-size: 0.93rem;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                }
                .checklist-box li:last-child { border-bottom: none; }
                .checklist-box li :global(svg) { color: #4db8ff; flex-shrink: 0; }

                /* ===== CTA ===== */
                .cta-section { padding: 80px 0; background: #fff; }
                .cta-card {
                    text-align: center; max-width: 680px;
                    margin: 0 auto; background: #f8fafc;
                    border-radius: 16px; padding: 52px 40px;
                    border: 1px solid #e2e8f0;
                }
                .cta-card :global(.cta-icon) { color: #008BF9; margin-bottom: 20px; }
                .cta-card h3 {
                    font-size: clamp(1.3rem, 3vw, 1.8rem);
                    font-weight: 700; color: #0F3567; margin-bottom: 14px;
                }
                .cta-card p {
                    font-size: 1rem; color: #64748b;
                    max-width: 520px; margin: 0 auto 28px;
                    line-height: 1.65;
                }

                /* ===== CONTACT SECTION ===== */
                .wdx-contact-section {
                    padding:110px 0;
                    background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
                    position:relative;
                }
                .wdx-contact-section::before {
                    content:'';
                    position:absolute; inset:0;
                    background-image:radial-gradient(circle at 20% 80%, rgba(0,139,249,.04) 0%, transparent 50%);
                    pointer-events:none;
                }
                .wdx-contact-header {
                    text-align:center; margin-bottom:60px;
                }
                .wdx-contact-badge {
                    display:inline-block;
                    background:rgba(0,139,249,.08);
                    color:#008BF9; padding:8px 20px;
                    border-radius:50px; font-size:.85rem;
                    font-weight:700; text-transform:uppercase;
                    letter-spacing:1.5px; margin-bottom:16px;
                }
                .wdx-contact-header h2 {
                    font-size:clamp(2rem,4vw,2.8rem);
                    font-weight:800; color:#0F3567;
                    margin-bottom:16px; line-height:1.2;
                }
                .wdx-contact-header h2 span {
                    color:#008BF9;
                }
                .wdx-contact-header p {
                    font-size:1.05rem; color:#64748b;
                    max-width:600px; margin:0 auto; line-height:1.7;
                }
                
                .wdx-contact-wrapper {
                    display:grid; grid-template-columns:380px 1fr;
                    gap:50px; max-width:1200px; margin:0 auto;
                }
                
                /* Info Side */
                .wdx-contact-info {
                    display:flex; flex-direction:column; gap:24px;
                }
                .wdx-info-item {
                    display:flex; gap:20px;
                    background:#fff; padding:28px;
                    border-radius:16px;
                    box-shadow:0 4px 20px rgba(0,0,0,.06);
                    border:1px solid #e8edf4;
                    transition:all .3s;
                }
                .wdx-info-item:hover {
                    transform:translateY(-4px);
                    box-shadow:0 12px 32px rgba(0,139,249,.12);
                    border-color:#008BF9;
                }
                .wdx-info-icon-box {
                    width:56px; height:56px; flex-shrink:0;
                    background:linear-gradient(135deg, #008BF9, #0070cc);
                    border-radius:12px; display:flex;
                    align-items:center; justify-content:center;
                    color:#fff;
                }
                .wdx-info-content h4 {
                    font-size:1rem; font-weight:700;
                    color:#0F3567; margin-bottom:6px;
                }
                .wdx-info-content a {
                    font-size:.95rem; color:#64748b;
                    text-decoration:none; transition:color .3s;
                }
                .wdx-info-content a:hover {
                    color:#008BF9;
                }
                
                .wdx-benefits-list {
                    background:#fff; padding:28px;
                    border-radius:16px;
                    box-shadow:0 4px 20px rgba(0,0,0,.06);
                    border:1px solid #e8edf4;
                }
                .wdx-benefit-item {
                    display:flex; align-items:center; gap:12px;
                    padding:10px 0;
                    border-bottom:1px solid #f1f5f9;
                }
                .wdx-benefit-item:last-child {
                    border-bottom:none;
                }
                .wdx-benefit-item svg {
                    color:#008BF9; flex-shrink:0;
                }
                .wdx-benefit-item span {
                    font-size:.95rem; color:#475569;
                    font-weight:500;
                }
                
                /* Form Side */
                .wdx-contact-form-wrapper {
                    position:relative;
                    background:#fff; padding:48px;
                    border-radius:20px;
                    box-shadow:0 10px 40px rgba(0,0,0,.08);
                    border:1px solid #e8edf4;
                }
                .wdx-form-success-msg {
                    position:absolute; inset:0; z-index:10;
                    background:rgba(255,255,255,.98);
                    border-radius:20px; display:flex;
                    flex-direction:column; align-items:center;
                    justify-content:center; text-align:center;
                    padding:40px; animation:wdxFadeUp .5s ease;
                }
                .wdx-form-success-msg svg {
                    color:#22c55e; margin-bottom:20px;
                }
                .wdx-form-success-msg h3 {
                    font-size:1.6rem; font-weight:800;
                    color:#0F3567; margin-bottom:8px;
                }
                .wdx-form-success-msg p {
                    font-size:1rem; color:#64748b; margin:0;
                }
                
                .wdx-contact-form {
                    display:flex; flex-direction:column; gap:20px;
                }
                .wdx-form-grid {
                    display:grid; grid-template-columns:1fr 1fr;
                    gap:20px;
                }
                .wdx-form-group {
                    display:flex; flex-direction:column;
                }
                .wdx-form-full {
                    grid-column:1/-1;
                }
                .wdx-form-group label {
                    font-size:.88rem; font-weight:600;
                    color:#0F3567; margin-bottom:8px;
                    display:block;
                }
                .wdx-form-group input,
                .wdx-form-group select,
                .wdx-form-group textarea {
                    width:100%; padding:14px 18px;
                    border:2px solid #e2e8f0;
                    border-radius:12px; font-size:.95rem;
                    color:#0F3567; background:#f8fafc;
                    transition:all .3s; outline:none;
                    font-family:inherit;
                }
                .wdx-form-group input:focus,
                .wdx-form-group select:focus,
                .wdx-form-group textarea:focus {
                    border-color:#008BF9;
                    background:#fff;
                    box-shadow:0 0 0 3px rgba(0,139,249,.08);
                }
                .wdx-form-group input::placeholder,
                .wdx-form-group textarea::placeholder {
                    color:#94a3b8;
                }
                .wdx-form-group select {
                    cursor:pointer; -webkit-appearance:none;
                    appearance:none;
                    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E");
                    background-repeat:no-repeat;
                    background-position:right 14px center;
                    padding-right:44px;
                }
                .wdx-form-group textarea {
                    resize:vertical; min-height:130px;
                }
                
                .wdx-submit-btn {
                    display:flex; align-items:center;
                    justify-content:center; gap:10px;
                    background:linear-gradient(135deg, #008BF9, #0070cc);
                    color:#fff; padding:16px 40px;
                    border:none; border-radius:12px;
                    font-size:1rem; font-weight:700;
                    cursor:pointer; transition:all .3s;
                    box-shadow:0 8px 24px rgba(0,139,249,.3);
                    margin-top:8px; font-family:inherit;
                }
                .wdx-submit-btn:hover {
                    transform:translateY(-3px);
                    box-shadow:0 14px 36px rgba(0,139,249,.4);
                }

                @media (max-width:1199px) {
                    .wdx-contact-wrapper { grid-template-columns:1fr; }
                    .wdx-contact-info { display:none; }
                }
                @media (max-width:767px) {
                    .wdx-contact-form-wrapper { padding:36px 28px; }
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 1199px) {
                    .gov-hero-inner { grid-template-columns: 1fr; gap: 40px; }
                    .gov-hero-visual { display: none; }
                    .gov-hero-desc { max-width: 100%; }
                }
                @media (max-width: 991px) {
                    .gov-hero { padding: 120px 0 80px; }
                    .question-body { padding-left: 0; border-left: none; margin-top: 24px; padding-top: 24px; border-top: 3px solid #008BF9; }
                    .challenges-grid { grid-template-columns: 1fr; }
                    .principles-grid { grid-template-columns: repeat(2, 1fr); }
                    .layer-card { flex-direction: column; }
                    .checklist-box { margin-top: 28px; }
                    .diagram-wrapper { padding: 0 20px; }
                }
                @media (max-width: 576px) {
                    .gov-hero { padding: 110px 0 60px; }
                    .gov-hero-features { flex-direction: column; gap: 10px; }
                    .question-card { padding: 28px; }
                    .principles-grid { grid-template-columns: 1fr; }
                    .gov-hero-actions { flex-direction: column; }
                    .gov-hero-actions a { width: 100%; justify-content: center; }
                    .regulations-card { padding: 28px; }
                    .diagram-wrapper { padding: 0 16px; }
                }
            `}</style>
        </>
    )
}
