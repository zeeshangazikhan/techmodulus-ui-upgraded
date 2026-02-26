import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Brain, Shield, ArrowRight, Check, Layers, ShieldCheck, BarChart3, Users, Cpu, Lock, Scale, Eye, Workflow, Zap, Target, Rocket, ChevronRight, Phone, Mail, CheckCircle2, Database, Globe } from "lucide-react"

export default function ServiceEnterpriseIntelligence() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'Enterprise Intelligence',
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
        setFormData({ name: '', email: '', mobile: '', service: 'Enterprise Intelligence', message: '' })
    }

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="ei-hero">
                        <div className="ei-hero-bg">
                            <div className="ei-hero-orb ei-hero-orb-1"></div>
                            <div className="ei-hero-orb ei-hero-orb-2"></div>
                            <div className="ei-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="ei-hero-inner">
                                <div className="ei-hero-content">
                                    <div className="ei-badge-wrap">
                                        <span className="ei-hero-badge"><Layers size={14} /> Enterprise Intelligence</span>
                                        <span className="ei-badge-line"></span>
                                    </div>
                                    <h1 className="ei-hero-title">Intelligent Solutions for <span>Modern Enterprises</span></h1>
                                    <p className="ei-hero-desc">Empowering organizations with strategic AI implementation and governance frameworks for data-driven decision making</p>
                                    <div className="ei-hero-stats">
                                        <div className="ei-stat"><span className="ei-stat-num">100+</span><span className="ei-stat-label">AI Projects</span></div>
                                        <div className="ei-stat-divider"></div>
                                        <div className="ei-stat"><span className="ei-stat-num">50+</span><span className="ei-stat-label">Clients</span></div>
                                        <div className="ei-stat-divider"></div>
                                        <div className="ei-stat"><span className="ei-stat-num">99%</span><span className="ei-stat-label">Satisfaction</span></div>
                                    </div>
                                    <div className="ei-hero-actions">
                                        <a href="#services" className="ei-btn-primary">
                                            Explore Services <ArrowRight size={18} />
                                        </a>
                                        <a href="#wdx-quote" className="ei-btn-outline">
                                            Get In Touch
                                        </a>
                                    </div>
                                </div>
                                <div className="ei-hero-visual">
                                    <div className="ei-visual-container">
                                        <div className="ei-visual-core">
                                            <div className="ei-visual-core-inner"><Layers size={30} /></div>
                                            <div className="ei-visual-pulse"></div>
                                            <div className="ei-visual-pulse ei-visual-pulse-2"></div>
                                        </div>
                                        <div className="ei-visual-node ei-vn-1"><Brain size={16} /><span>Enterprise AI</span></div>
                                        <div className="ei-visual-node ei-vn-2"><Shield size={16} /><span>AI Governance</span></div>
                                        <div className="ei-visual-node ei-vn-3"><Database size={16} /><span>Data Management</span></div>
                                        <div className="ei-visual-node ei-vn-4"><Globe size={16} /><span>Integration</span></div>
                                        <div className="ei-visual-node ei-vn-5"><Cpu size={16} /><span>Analytics</span></div>
                                        <svg className="ei-visual-lines" viewBox="0 0 400 400">
                                            {/* Center to nodes */}
                                            <line x1="200" y1="200" x2="200" y2="32" className="ei-vline" />
                                            <line x1="200" y1="200" x2="360" y2="120" className="ei-vline" />
                                            <line x1="200" y1="200" x2="330" y2="300" className="ei-vline" />
                                            <line x1="200" y1="200" x2="70" y2="300" className="ei-vline" />
                                            <line x1="200" y1="200" x2="40" y2="120" className="ei-vline" />
                                            {/* Node to node ring */}
                                            <line x1="200" y1="32" x2="360" y2="120" className="ei-vline-ring" />
                                            <line x1="360" y1="120" x2="330" y2="300" className="ei-vline-ring" />
                                            <line x1="330" y1="300" x2="70" y2="300" className="ei-vline-ring" />
                                            <line x1="70" y1="300" x2="40" y2="120" className="ei-vline-ring" />
                                            <line x1="40" y1="120" x2="200" y2="32" className="ei-vline-ring" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Intro */}
                    <section className="intro-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="intro-content">
                                        <span className="section-tag">What We Offer</span>
                                        <h2 className="section-title">Transform Your Enterprise with AI-Powered Intelligence</h2>
                                        <p>We provide end-to-end Enterprise Architecture services that bridge the gap between business needs and IT capabilities. Our intelligent solutions empower organizations with strategic AI implementation, ensuring responsible adoption that delivers measurable value.</p>
                                        <p>From building the foundational governance frameworks to deploying cutting-edge AI solutions, we help enterprises navigate technology transformation while maintaining compliance and security.</p>
                                        <div className="intro-stats">
                                            <div className="stat-item">
                                                <span className="stat-num">100+</span>
                                                <span className="stat-text">AI Projects Delivered</span>
                                            </div>
                                            <div className="stat-item">
                                                <span className="stat-num">50+</span>
                                                <span className="stat-text">Enterprise Clients</span>
                                            </div>
                                            <div className="stat-item">
                                                <span className="stat-num">99%</span>
                                                <span className="stat-text">Client Satisfaction</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="intro-cards">
                                        <div className="intro-card">
                                            <div className="intro-card-icon"><Cpu size={24} /></div>
                                            <div>
                                                <h4>Integrated Approach</h4>
                                                <p>Seamless integration of AI capabilities with existing enterprise systems and workflows</p>
                                            </div>
                                        </div>
                                        <div className="intro-card">
                                            <div className="intro-card-icon"><ShieldCheck size={24} /></div>
                                            <div>
                                                <h4>Secure & Compliant</h4>
                                                <p>Enterprise-grade security with full regulatory compliance built into every solution</p>
                                            </div>
                                        </div>
                                        <div className="intro-card">
                                            <div className="intro-card-icon"><Target size={24} /></div>
                                            <div>
                                                <h4>Results Driven</h4>
                                                <p>Every implementation is tied to clear business KPIs and measurable outcomes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services */}
                    <section className="services-section" id="services">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Our Services</span>
                                <h2 className="section-title">Two Pillars of Enterprise Intelligence</h2>
                                <p className="section-sub">Explore our specialized services designed to accelerate your AI journey while ensuring governance and compliance</p>
                            </div>

                            <div className="services-row">
                                {/* Enterprise AI */}
                                <div className="service-card">
                                    <div className="sc-header">
                                        <div className="sc-icon"><Brain size={30} /></div>
                                        <span className="sc-num">01</span>
                                    </div>
                                    <h3>Enterprise AI</h3>
                                    <p className="sc-desc">Leverage cutting-edge artificial intelligence to automate processes, generate insights, and drive intelligent decision-making across your organization.</p>
                                    <div className="sc-features">
                                        <div className="sc-feat"><Check size={16} /> Machine Learning Models</div>
                                        <div className="sc-feat"><Check size={16} /> Natural Language Processing</div>
                                        <div className="sc-feat"><Check size={16} /> Predictive Analytics</div>
                                        <div className="sc-feat"><Check size={16} /> AI-Powered Automation</div>
                                    </div>
                                    <div className="sc-benefits">
                                        <h5>Key Benefits</h5>
                                        <ul>
                                            <li>Accelerate decision-making with real-time insights</li>
                                            <li>Reduce operational costs through intelligent automation</li>
                                            <li>Enhance customer experience with personalization</li>
                                        </ul>
                                    </div>
                                    <Link href="/service-enterprise-ai" className="sc-link">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>

                                {/* AI Governance */}
                                <div className="service-card">
                                    <div className="sc-header">
                                        <div className="sc-icon"><Shield size={30} /></div>
                                        <span className="sc-num">02</span>
                                    </div>
                                    <h3>AI Governance</h3>
                                    <p className="sc-desc">Establish robust AI governance frameworks, compliance policies, and risk management strategies to ensure responsible AI adoption aligned with regulatory standards.</p>
                                    <div className="sc-features">
                                        <div className="sc-feat"><Check size={16} /> Data Privacy & Security</div>
                                        <div className="sc-feat"><Check size={16} /> Regulatory Compliance</div>
                                        <div className="sc-feat"><Check size={16} /> Risk Assessment</div>
                                        <div className="sc-feat"><Check size={16} /> Ethical AI Oversight</div>
                                    </div>
                                    <div className="sc-benefits">
                                        <h5>Key Benefits</h5>
                                        <ul>
                                            <li>Ensure compliance with GDPR, CCPA & industry standards</li>
                                            <li>Mitigate AI-related risks with proactive governance</li>
                                            <li>Build stakeholder trust through transparency</li>
                                        </ul>
                                    </div>
                                    <Link href="/service-ai-governance" className="sc-link">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="why-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <span className="section-tag light">Why Choose Us</span>
                                    <h2 className="section-title light">Enterprise-Grade AI Solutions Built for Scale</h2>
                                    <p className="why-desc">We combine deep technical expertise with a thorough understanding of enterprise challenges. We don't just implement AI — we ensure it aligns with your business objectives, governance requirements, and long-term strategy.</p>
                                </div>
                                <div className="col-lg-7">
                                    <div className="why-grid">
                                        <div className="why-card">
                                            <div className="why-icon"><Layers size={22} /></div>
                                            <h5>End-to-End Delivery</h5>
                                            <p>From strategy to implementation and ongoing support</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="why-icon"><Lock size={22} /></div>
                                            <h5>Compliance First</h5>
                                            <p>Built-in regulatory compliance and security measures</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="why-icon"><BarChart3 size={22} /></div>
                                            <h5>Measurable ROI</h5>
                                            <p>Clear metrics and KPIs to track business value</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="why-icon"><Users size={22} /></div>
                                            <h5>Expert Team</h5>
                                            <p>Certified professionals with enterprise experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="wdx-contact-section" id="wdx-quote" data-animate>
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
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="AI Governance">AI Governance</option>
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
                .ei-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 120px;
                    position: relative; overflow: hidden;
                }
                .ei-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: eiShimmer 3s ease infinite;
                }
                @keyframes eiShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .ei-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .ei-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .ei-hero-orb-1 { width:500px; height:500px; background:rgba(0,139,249,0.08); top:-20%; right:-5%; animation:eiFloat 8s ease-in-out infinite; }
                .ei-hero-orb-2 { width:350px; height:350px; background:rgba(0,212,255,0.06); bottom:-15%; left:10%; animation:eiFloat 10s ease-in-out infinite reverse; }
                @keyframes eiFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-20px)} }
                .ei-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,249,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 70% 60% at 70% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 70% 50%, black, transparent);
                }
                .ei-hero-inner {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 60px; align-items: center;
                    position: relative; z-index: 2;
                }
                .ei-badge-wrap { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
                .ei-hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 2px; white-space: nowrap;
                }
                .ei-badge-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(0,139,249,0.3), transparent); }
                .ei-hero-title {
                    font-size: clamp(2.2rem, 4.5vw, 3.2rem);
                    font-weight: 800; color: #fff; line-height: 1.15;
                    margin-bottom: 22px; letter-spacing: -0.02em;
                }
                .ei-hero-title span {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .ei-hero-desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.65);
                    line-height: 1.75; max-width: 520px; margin-bottom: 32px;
                }
                .ei-hero-stats {
                    display: flex; align-items: center; gap: 28px; margin-bottom: 36px;
                    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 14px; padding: 20px 28px;
                }
                .ei-stat { text-align: center; }
                .ei-stat-num { display: block; font-size: 1.6rem; font-weight: 800; color: #4db8ff; line-height: 1.2; }
                .ei-stat-label { display: block; font-size: 0.78rem; color: rgba(255,255,255,0.5); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px; }
                .ei-stat-divider { width: 1px; height: 36px; background: rgba(255,255,255,0.1); }
                .ei-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .ei-btn-primary {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: linear-gradient(135deg, #008BF9, #0070cc); color: #fff;
                    padding: 15px 30px; border-radius: 10px; font-weight: 700;
                    font-size: 0.95rem; text-decoration: none; transition: all .3s;
                    box-shadow: 0 4px 20px rgba(0,139,249,0.3);
                }
                .ei-btn-primary:hover { transform: translateY(-2px); color: #fff; box-shadow: 0 12px 32px rgba(0,139,249,0.45); }
                .ei-btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 15px 30px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all .3s;
                }
                .ei-btn-outline:hover { border-color: rgba(0,139,249,0.5); color: #4db8ff; background: rgba(0,139,249,0.05); }

                /* Hero Visual */
                .ei-hero-visual { display: flex; align-items: center; justify-content: center; }
                .ei-visual-container { position: relative; width: 380px; height: 380px; }
                .ei-visual-lines { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .ei-vline { stroke: rgba(0,139,249,0.2); stroke-width: 1; stroke-dasharray: 6 4; animation: eiDash 15s linear infinite; }
                @keyframes eiDash { to { stroke-dashoffset: -100; } }
                .ei-visual-core {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .ei-visual-core-inner {
                    width: 80px; height: 80px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .ei-visual-pulse {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 80px; height: 80px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: eiPulse 3s ease-out infinite;
                }
                .ei-visual-pulse-2 { animation-delay: 1.5s; }
                @keyframes eiPulse { 0%{width:80px;height:80px;opacity:0.6}100%{width:200px;height:200px;opacity:0} }
                .ei-visual-node {
                    position: absolute; display: flex; align-items: center; gap: 8px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 10px 16px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.8rem; font-weight: 600;
                    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
                    z-index: 2; transition: all 0.3s;
                }
                .ei-visual-node:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); box-shadow: 0 0 20px rgba(0,139,249,0.4); }
                .ei-visual-node span { color: rgba(255,255,255,0.8); }
                .ei-visual-node :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .ei-vline-ring { stroke: rgba(0,139,249,0.1); stroke-width: 1; stroke-dasharray: 4 6; animation: eiDash 20s linear infinite; }
                .ei-vn-1 { top: 5px; left: 50%; transform: translateX(-50%); }
                .ei-vn-2 { top: 88px; right: 0; }
                .ei-vn-3 { bottom: 55px; right: 20px; }
                .ei-vn-4 { bottom: 55px; left: 20px; }
                .ei-vn-5 { top: 88px; left: 0; }

                /* ===== COMMON ===== */
                .section-tag {
                    display: inline-block; color: #008BF9;
                    font-size: 13px; font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1.5px; margin-bottom: 10px;
                }
                .section-tag.light { color: #008BF9; }
                .section-title {
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 700; color: #0F3567;
                    line-height: 1.25; margin-bottom: 14px;
                }
                .section-title.light { color: #fff; }
                .section-sub {
                    font-size: 1rem; color: #64748b;
                    max-width: 620px; margin: 0 auto;
                    line-height: 1.65;
                }
                .section-header { margin-bottom: 48px; }

                /* ===== INTRO ===== */
                .intro-section { padding: 80px 0; background: #fff; }
                .intro-content p {
                    font-size: 1rem; color: #64748b;
                    line-height: 1.7; margin-bottom: 16px;
                }
                .intro-stats {
                    display: flex; gap: 32px;
                    margin-top: 28px; padding-top: 28px;
                    border-top: 1px solid #e2e8f0;
                }
                .stat-item { display: flex; flex-direction: column; }
                .stat-num {
                    font-size: 2.2rem; font-weight: 700;
                    color: #008BF9; line-height: 1;
                }
                .stat-text { font-size: 0.85rem; color: #64748b; margin-top: 6px; }

                .intro-cards {
                    display: flex; flex-direction: column;
                    gap: 16px; padding-left: 32px;
                }
                .intro-card {
                    display: flex; align-items: flex-start; gap: 16px;
                    background: #f8fafc; border: 1px solid #e2e8f0;
                    border-radius: 12px; padding: 22px;
                    transition: all .3s;
                }
                .intro-card:hover {
                    border-color: #008BF9;
                    box-shadow: 0 6px 20px rgba(0,139,249,0.08);
                }
                .intro-card-icon {
                    width: 46px; height: 46px; min-width: 46px;
                    background: rgba(0,139,249,0.08);
                    border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    color: #008BF9;
                }
                .intro-card h4 {
                    font-size: 1rem; font-weight: 600;
                    color: #0F3567; margin-bottom: 6px;
                }
                .intro-card p {
                    font-size: 0.88rem; color: #64748b;
                    line-height: 1.55; margin: 0;
                }

                /* ===== SERVICES ===== */
                .services-section { padding: 80px 0; background: #f8fafc; }
                .services-row {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                }
                .service-card {
                    background: #fff; border-radius: 16px;
                    padding: 38px; border: 1px solid #e2e8f0;
                    transition: all .3s;
                }
                .service-card:hover {
                    border-color: #008BF9;
                    box-shadow: 0 12px 36px rgba(0,139,249,0.1);
                }
                .sc-header {
                    display: flex; align-items: center;
                    justify-content: space-between; margin-bottom: 24px;
                }
                .sc-icon {
                    width: 68px; height: 68px;
                    background: #008BF9; border-radius: 16px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff;
                }
                .sc-num { font-size: 2.8rem; font-weight: 800; color: #e2e8f0; }
                .service-card h3 {
                    font-size: 1.4rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 14px;
                }
                .sc-desc {
                    font-size: 0.95rem; color: #64748b;
                    line-height: 1.7; margin-bottom: 22px;
                }
                .sc-features {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 10px; margin-bottom: 22px;
                }
                .sc-feat {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.88rem; color: #475569;
                }
                .sc-feat :global(svg) { color: #008BF9; flex-shrink: 0; }
                .sc-benefits {
                    background: #f8fafc; border-radius: 10px;
                    padding: 18px; margin-bottom: 22px;
                }
                .sc-benefits h5 {
                    font-size: 0.88rem; font-weight: 600;
                    color: #0F3567; margin-bottom: 10px;
                }
                .sc-benefits ul {
                    margin: 0; padding: 0; list-style: none;
                }
                .sc-benefits li {
                    font-size: 0.88rem; color: #64748b;
                    padding-left: 16px; position: relative;
                    margin-bottom: 6px;
                }
                .sc-benefits li::before {
                    content: '→'; position: absolute;
                    left: 0; color: #008BF9;
                }
                .sc-benefits li:last-child { margin-bottom: 0; }
                .sc-link {
                    display: inline-flex; align-items: center; gap: 8px;
                    color: #008BF9; font-weight: 600; font-size: 0.95rem;
                    text-decoration: none; transition: all .3s;
                }
                .sc-link:hover { gap: 12px; color: #0070cc; }

                /* ===== WHY ===== */
                .why-section { padding: 80px 0; background: #0F3567; }
                .why-desc {
                    font-size: 1rem; color: rgba(255,255,255,0.72);
                    line-height: 1.7; margin-top: 18px;
                }
                .why-grid {
                    display: grid; grid-template-columns: repeat(2, 1fr);
                    gap: 18px;
                }
                .why-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px; padding: 24px;
                    transition: all .3s;
                }
                .why-card:hover {
                    background: rgba(255,255,255,0.08);
                    border-color: rgba(0,139,249,0.3);
                }
                .why-icon {
                    width: 46px; height: 46px;
                    background: #008BF9; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 14px;
                }
                .why-card h5 {
                    font-size: 1rem; font-weight: 600;
                    color: #fff; margin-bottom: 6px;
                }
                .why-card p {
                    font-size: 0.88rem; color: rgba(255,255,255,0.65);
                    line-height: 1.55; margin: 0;
                }

                /* ===== CTA ===== */
                .cta-section { padding: 80px 0; background: #fff; }
                .cta-card {
                    background: #f8fafc; border-radius: 16px;
                    padding: 56px 40px; text-align: center;
                    border: 1px solid #e2e8f0;
                }
                .cta-card h3 {
                    font-size: clamp(1.4rem, 3vw, 1.9rem);
                    font-weight: 700; color: #0F3567; margin-bottom: 14px;
                }
                .cta-card p {
                    font-size: 1rem; color: #64748b;
                    max-width: 560px; margin: 0 auto 30px;
                    line-height: 1.65;
                }
                .cta-actions {
                    display: flex; gap: 14px;
                    justify-content: center; flex-wrap: wrap;
                }
                .btn-secondary-custom {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: #fff; color: #0F3567;
                    padding: 14px 28px; border-radius: 8px;
                    border: 2px solid #e2e8f0;
                    font-weight: 600; font-size: 0.95rem;
                    text-decoration: none; transition: all .3s;
                }
                .btn-secondary-custom:hover {
                    border-color: #008BF9; color: #008BF9;
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 1199px) {
                    .ei-hero-inner { grid-template-columns: 1fr; gap: 40px; }
                    .ei-hero-visual { display: none; }
                    .ei-hero-desc { max-width: 100%; }
                }
                @media (max-width: 991px) {
                    .ei-hero { padding: 120px 0 80px; }
                    .services-row { grid-template-columns: 1fr; }
                    .intro-cards { padding-left: 0; margin-top: 36px; }
                    .why-grid { margin-top: 36px; }
                }
                @media (max-width: 576px) {
                    .ei-hero { padding: 110px 0 60px; }
                    .ei-hero-stats { flex-direction: column; gap: 16px; padding: 20px; }
                    .ei-stat-divider { width: 40px; height: 1px; }
                    .intro-stats { flex-direction: column; gap: 16px; }
                    .sc-features { grid-template-columns: 1fr; }
                    .why-grid { grid-template-columns: 1fr; }
                    .cta-card { padding: 36px 20px; }
                    .cta-actions { flex-direction: column; }
                    .cta-actions a { width: 100%; justify-content: center; }
                    .ei-hero-actions { flex-direction: column; }
                    .ei-hero-actions a { width: 100%; justify-content: center; }
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
            `}</style>
        </>
    )
}
