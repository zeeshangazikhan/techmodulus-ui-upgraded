'use client'

import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Monitor, Users, Lightbulb, ArrowRight, Check, Shield, TrendingUp, Zap, Clock, Settings, BarChart3, Headphones, Target, Cpu, Globe, Lock, Phone, Mail, CheckCircle2 } from "lucide-react"

export default function ServiceAppRetirement() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'App Retirement',
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
        setFormData({ name: '', email: '', mobile: '', service: 'App Retirement', message: '' })
    }
    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero Section */}
                    <section className="ar-hero">
                        <div className="ar-hero-bg">
                            <div className="ar-hero-orb ar-orb-1"></div>
                            <div className="ar-hero-orb ar-orb-2"></div>
                            <div className="ar-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="ar-hero-inner">
                                <div className="ar-hero-left">
                                    <div className="ar-badge-wrap">
                                        <span className="hero-badge"><Settings size={16} /> Professional Services</span>
                                    </div>
                                    <h1 className="hero-title">IT Professional Services <span className="ar-gradient">&</span> Strategic Consulting</h1>
                                    <p className="hero-desc">Streamline your IT infrastructure with our professional management services. Comprehensive IT Management, vCIO services, and IT consulting to optimize your technology investments.</p>
                                    <div className="ar-hero-stats">
                                        <div className="ar-stat-pill"><TrendingUp size={16} /><strong>40%</strong> Cost Reduction</div>
                                        <div className="ar-stat-pill"><Clock size={16} /><strong>99.9%</strong> Uptime SLA</div>
                                        <div className="ar-stat-pill"><Headphones size={16} /><strong>24/7</strong> Support</div>
                                    </div>
                                    <div className="hero-actions">
                                        <Link href="/contact" className="btn-primary-custom">
                                            Schedule Consultation <ArrowRight size={18} />
                                        </Link>
                                        <Link href="/#services" className="btn-outline-custom">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                                <div className="ar-hero-right d-none d-lg-flex">
                                    <div className="ar-hero-diagram">
                                        <div className="ar-dia-center">
                                            <div className="ar-dia-center-inner"><Settings size={28} /></div>
                                            <div className="ar-dia-ring"></div>
                                            <div className="ar-dia-ring ar-ring-2"></div>
                                        </div>
                                        <div className="ar-dia-node ar-n1"><Monitor size={18} /><span>IT Mgmt</span></div>
                                        <div className="ar-dia-node ar-n2"><Users size={18} /><span>vCIO</span></div>
                                        <div className="ar-dia-node ar-n3"><Lightbulb size={18} /><span>Consulting</span></div>
                                        <svg className="ar-dia-lines" viewBox="0 0 320 320">
                                            <line x1="160" y1="160" x2="160" y2="30" className="ar-conn" />
                                            <line x1="160" y1="160" x2="280" y2="260" className="ar-conn" />
                                            <line x1="160" y1="160" x2="40" y2="260" className="ar-conn" />
                                            <line x1="160" y1="30" x2="280" y2="260" className="ar-conn-ring" />
                                            <line x1="280" y1="260" x2="40" y2="260" className="ar-conn-ring" />
                                            <line x1="40" y1="260" x2="160" y2="30" className="ar-conn-ring" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Intro Section */}
                    <section className="intro-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="intro-content">
                                        <span className="section-tag">Why TechModulus</span>
                                        <h2 className="intro-title">Transform Your IT Operations</h2>
                                        <p className="intro-text">In today's fast-paced digital landscape, businesses need reliable IT partners who understand both technology and business objectives. Our professional services team bridges this gap, delivering solutions that drive efficiency, reduce costs, and accelerate growth.</p>
                                        <ul className="intro-list">
                                            <li><Check size={20} /> Reduce operational complexity</li>
                                            <li><Check size={20} /> Optimize technology investments</li>
                                            <li><Check size={20} /> Strategic IT roadmap alignment</li>
                                            <li><Check size={20} /> 24/7 expert support</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="intro-stats">
                                        <div className="stat-card">
                                            <div className="stat-icon"><TrendingUp size={28} /></div>
                                            <div className="stat-number">40%</div>
                                            <div className="stat-label">Cost Reduction</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon"><Clock size={28} /></div>
                                            <div className="stat-number">99.9%</div>
                                            <div className="stat-label">Uptime SLA</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon"><Headphones size={28} /></div>
                                            <div className="stat-number">24/7</div>
                                            <div className="stat-label">Support Available</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="services-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Our Services</span>
                                <h2 className="section-title">Professional IT Services</h2>
                                <p className="section-sub">Comprehensive solutions designed to optimize your technology infrastructure and drive business growth.</p>
                            </div>
                            <div className="services-grid">
                                {/* IT Management */}
                                <div className="service-card">
                                    <div className="sc-icon">
                                        <Monitor size={32} />
                                    </div>
                                    <h3 className="sc-title">IT Management</h3>
                                    <p className="sc-desc">End-to-end IT infrastructure management including network monitoring, security management, system administration, and proactive maintenance to ensure optimal performance.</p>
                                    <ul className="sc-features">
                                        <li><Check size={16} /> Network Monitoring</li>
                                        <li><Check size={16} /> Security Management</li>
                                        <li><Check size={16} /> Help Desk Support</li>
                                        <li><Check size={16} /> Proactive Maintenance</li>
                                    </ul>
                                    <Link href="/service-it-management" className="sc-link">
                                        Learn More <ArrowRight size={18} />
                                    </Link>
                                </div>

                                {/* vCIO */}
                                <div className="service-card featured">
                                    <div className="sc-icon">
                                        <Users size={32} />
                                    </div>
                                    <h3 className="sc-title">vCIO Services</h3>
                                    <p className="sc-desc">Virtual Chief Information Officer services providing strategic IT leadership, technology roadmap planning, and executive-level guidance without the full-time executive cost.</p>
                                    <ul className="sc-features">
                                        <li><Check size={16} /> Strategic IT Planning</li>
                                        <li><Check size={16} /> Technology Roadmap</li>
                                        <li><Check size={16} /> Budget Optimization</li>
                                        <li><Check size={16} /> Vendor Management</li>
                                    </ul>
                                    <Link href="/service-vcio" className="sc-link">
                                        Learn More <ArrowRight size={18} />
                                    </Link>
                                </div>

                                {/* IT Consulting */}
                                <div className="service-card">
                                    <div className="sc-icon">
                                        <Lightbulb size={32} />
                                    </div>
                                    <h3 className="sc-title">IT Consulting</h3>
                                    <p className="sc-desc">Expert technology consulting to assess your current infrastructure, identify improvement opportunities, and implement solutions that align with your business objectives.</p>
                                    <ul className="sc-features">
                                        <li><Check size={16} /> Infrastructure Assessment</li>
                                        <li><Check size={16} /> Digital Transformation</li>
                                        <li><Check size={16} /> Cloud Strategy</li>
                                        <li><Check size={16} /> Security Audits</li>
                                    </ul>
                                    <Link href="/service-it-consulting" className="sc-link">
                                        Learn More <ArrowRight size={18} />
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
                                    <span className="section-tag">Why Choose Us</span>
                                    <h2 className="why-title">Partner with TechModulus for IT Excellence</h2>
                                    <p className="why-text">We combine deep technical expertise with business acumen to deliver IT solutions that drive real results. Our team becomes an extension of your organization, committed to your success.</p>
                                    <Link href="/contact" className="btn-primary-custom">
                                        Schedule Consultation <ArrowRight size={18} />
                                    </Link>
                                </div>
                                <div className="col-lg-7">
                                    <div className="why-grid">
                                        <div className="why-card">
                                            <div className="wc-icon"><Shield size={24} /></div>
                                            <h4>Proven Expertise</h4>
                                            <p>Certified professionals with extensive enterprise experience</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="wc-icon"><Zap size={24} /></div>
                                            <h4>Rapid Response</h4>
                                            <p>15-minute average response time for critical issues</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="wc-icon"><Target size={24} /></div>
                                            <h4>Business Aligned</h4>
                                            <p>Solutions designed around your specific business goals</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="wc-icon"><BarChart3 size={24} /></div>
                                            <h4>Measurable Results</h4>
                                            <p>Transparent reporting and KPI tracking</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="process-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Our Approach</span>
                                <h2 className="section-title">How We Work</h2>
                                <p className="section-sub">A proven methodology that ensures successful IT transformation</p>
                            </div>
                            <div className="process-grid">
                                <div className="process-card">
                                    <div className="p-number">01</div>
                                    <h4>Discovery</h4>
                                    <p>Comprehensive assessment of your current IT environment and business objectives</p>
                                </div>
                                <div className="process-card">
                                    <div className="p-number">02</div>
                                    <h4>Strategy</h4>
                                    <p>Develop a customized IT roadmap aligned with your goals and budget</p>
                                </div>
                                <div className="process-card">
                                    <div className="p-number">03</div>
                                    <h4>Implementation</h4>
                                    <p>Execute solutions with minimal disruption using industry best practices</p>
                                </div>
                                <div className="process-card">
                                    <div className="p-number">04</div>
                                    <h4>Optimization</h4>
                                    <p>Continuous monitoring and improvement to maximize ROI</p>
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
                                                    <option value="App Retirement">App Retirement</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="AI Governance">AI Governance</option>
                                                    <option value="Data Management">Data Management</option>
                                                    <option value="Enterprise Archiving">Enterprise Archiving</option>
                                                    <option value="Application Archiving">Application Archiving</option>
                                                    <option value="File Archiving">File Archiving</option>
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
                .ar-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 110px;
                    position: relative; overflow: hidden;
                }
                .ar-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: arShimmer 3s ease infinite;
                }
                @keyframes arShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .ar-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .ar-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .ar-orb-1 { width:400px; height:400px; background:rgba(0,139,249,0.08); top:-10%; right:5%; animation:arFloat 8s ease-in-out infinite; }
                .ar-orb-2 { width:280px; height:280px; background:rgba(0,212,255,0.06); bottom:-10%; left:15%; animation:arFloat 10s ease-in-out infinite reverse; }
                @keyframes arFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(12px,-12px)} }
                .ar-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,249,0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 70% 60% at 35% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 35% 50%, black, transparent);
                }
                .ar-hero-inner {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 50px; align-items: center;
                    position: relative; z-index: 2;
                }
                .ar-hero-left { position: relative; }
                .ar-badge-wrap { margin-bottom: 24px; }
                .hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .hero-title {
                    font-size: clamp(2rem, 4.5vw, 2.8rem);
                    font-weight: 800; color: #fff;
                    line-height: 1.15; margin-bottom: 20px;
                }
                .ar-gradient {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .hero-desc {
                    font-size: 1.05rem;
                    color: rgba(255,255,255,0.65);
                    line-height: 1.75; max-width: 520px;
                    margin-bottom: 24px;
                }
                .ar-hero-stats {
                    display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px;
                }
                .ar-stat-pill {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(0,139,249,0.08); border: 1px solid rgba(0,139,249,0.15);
                    padding: 8px 16px; border-radius: 50px;
                    font-size: 0.82rem; color: rgba(255,255,255,0.7);
                }
                .ar-stat-pill strong { color: #4db8ff; font-weight: 700; }
                .ar-stat-pill :global(svg) { color: #4db8ff; }
                .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                /* Hero Right Diagram */
                .ar-hero-right {
                    display: flex; align-items: center; justify-content: center;
                }
                .ar-hero-diagram {
                    position: relative; width: 320px; height: 320px;
                }
                .ar-dia-center {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .ar-dia-center-inner {
                    width: 72px; height: 72px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .ar-dia-ring {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 72px; height: 72px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: arPulse 3s ease-out infinite;
                }
                .ar-ring-2 { animation-delay: 1.5s; }
                @keyframes arPulse { 0%{width:72px;height:72px;opacity:0.6}100%{width:180px;height:180px;opacity:0} }
                .ar-dia-lines { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .ar-conn { stroke: rgba(0,139,249,0.2); stroke-width: 1; stroke-dasharray: 6 4; animation: arDash 15s linear infinite; }
                .ar-conn-ring { stroke: rgba(0,139,249,0.08); stroke-width: 1; stroke-dasharray: 4 6; animation: arDash 20s linear infinite; }
                @keyframes arDash { to { stroke-dashoffset: -100; } }
                .ar-dia-node {
                    position: absolute; display: flex; align-items: center; gap: 7px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 10px 16px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.8rem; font-weight: 600;
                    backdrop-filter: blur(8px); z-index: 2; transition: all 0.3s;
                }
                .ar-dia-node:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); }
                .ar-dia-node span { color: rgba(255,255,255,0.8); }
                .ar-dia-node :global(svg) { color: #4db8ff; }
                .ar-n1 { top: 5px; left: 50%; transform: translateX(-50%); }
                .ar-n2 { bottom: 20px; right: 0; }
                .ar-n3 { bottom: 20px; left: 0; }
                .btn-primary-custom {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: #008BF9; color: #fff;
                    padding: 14px 28px; border-radius: 8px;
                    font-weight: 600; font-size: 0.95rem;
                    text-decoration: none; transition: all .3s;
                }
                .btn-primary-custom:hover {
                    background: #0070cc; color: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0,139,249,0.35);
                }
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

                /* ===== INTRO ===== */
                .intro-section { padding: 100px 0; background: #fff; }
                .intro-title {
                    font-size: clamp(1.75rem, 3.5vw, 2.4rem);
                    font-weight: 800; color: #0F3567;
                    line-height: 1.25; margin-bottom: 20px;
                }
                .intro-text {
                    font-size: 1.05rem; color: #64748b;
                    line-height: 1.8; margin-bottom: 28px;
                }
                .intro-list { list-style: none; padding: 0; margin: 0; }
                .intro-list li {
                    display: flex; align-items: center; gap: 12px;
                    font-size: 1rem; font-weight: 600;
                    color: #0F3567; margin-bottom: 14px;
                }
                .intro-list li :global(svg) { color: #008BF9; }
                .intro-stats {
                    display: grid; grid-template-columns: repeat(3, 1fr);
                    gap: 20px; padding-left: 40px;
                }
                .stat-card {
                    background: #f8fafc; border: 1px solid #e2e8f0;
                    border-radius: 16px; padding: 28px 20px;
                    text-align: center; transition: all .3s;
                }
                .stat-card:hover {
                    border-color: #008BF9;
                    box-shadow: 0 12px 32px rgba(0,139,249,0.12);
                    transform: translateY(-4px);
                }
                .stat-icon {
                    width: 56px; height: 56px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin: 0 auto 16px;
                }
                .stat-number {
                    font-size: 2rem; font-weight: 800;
                    color: #0F3567; line-height: 1;
                    margin-bottom: 6px;
                }
                .stat-label {
                    font-size: 0.85rem; color: #64748b;
                    font-weight: 600;
                }

                /* ===== SERVICES ===== */
                .services-section { padding: 100px 0; background: #f8fafc; }
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }
                .service-card {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 40px 32px;
                    position: relative;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                }
                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 4px; background: #008BF9;
                    border-radius: 20px 20px 0 0;
                    opacity: 0;
                    transition: opacity .3s;
                }
                .service-card:hover::before { opacity: 1; }
                .service-card:hover {
                    border-color: transparent;
                    box-shadow: 0 24px 48px rgba(0,139,249,0.15);
                    transform: translateY(-10px);
                }
                .service-card.featured {
                    border-color: #008BF9;
                    box-shadow: 0 16px 40px rgba(0,139,249,0.12);
                }
                .service-card.featured::before { opacity: 1; }
                .sc-badge {
                    position: absolute;
                    top: 12px; right: 24px;
                    background: #008BF9; color: #fff;
                    font-size: 11px; font-weight: 700;
                    padding: 6px 14px; border-radius: 50px;
                    text-transform: uppercase; letter-spacing: 1px;
                    z-index: 10;
                }
                .sc-icon {
                    width: 72px; height: 72px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    border-radius: 18px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 24px;
                    box-shadow: 0 10px 24px rgba(0,139,249,0.3);
                }
                .sc-title {
                    font-size: 1.4rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 14px;
                }
                .sc-desc {
                    font-size: 0.95rem; color: #64748b;
                    line-height: 1.7; margin-bottom: 24px;
                }
                .sc-features {
                    list-style: none; padding: 0; margin: 0 0 28px;
                }
                .sc-features li {
                    display: flex; align-items: center; gap: 10px;
                    font-size: 0.9rem; font-weight: 500;
                    color: #475569; margin-bottom: 10px;
                }
                .sc-features li :global(svg) { color: #008BF9; }
                .sc-link {
                    display: inline-flex; align-items: center; gap: 8px;
                    color: #008BF9; font-weight: 600;
                    font-size: 0.95rem; text-decoration: none;
                    transition: all .3s;
                }
                .sc-link:hover {
                    color: #0070cc;
                    gap: 12px;
                }

                /* ===== WHY SECTION ===== */
                .why-section { padding: 100px 0; background: #0F3567; }
                .why-section .section-tag { background: rgba(0,139,249,0.2); }
                .why-title {
                    font-size: clamp(1.75rem, 3.5vw, 2.4rem);
                    font-weight: 800; color: #fff;
                    line-height: 1.25; margin-bottom: 20px;
                }
                .why-text {
                    font-size: 1.05rem; color: rgba(255,255,255,0.72);
                    line-height: 1.8; margin-bottom: 32px;
                }
                .why-section .btn-primary-custom {
                    background: #fff; color: #0F3567;
                }
                .why-section .btn-primary-custom:hover {
                    background: #008BF9; color: #fff;
                }
                .why-grid {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 20px; padding-left: 40px;
                }
                .why-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px; padding: 28px;
                    transition: all .3s;
                }
                .why-card:hover {
                    background: rgba(255,255,255,0.06);
                    border-color: rgba(0,139,249,0.3);
                }
                .wc-icon {
                    width: 52px; height: 52px;
                    background: #008BF9; border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 18px;
                }
                .why-card h4 {
                    font-size: 1.1rem; font-weight: 700;
                    color: #fff; margin-bottom: 8px;
                }
                .why-card p {
                    font-size: 0.9rem; color: rgba(255,255,255,0.65);
                    line-height: 1.6; margin: 0;
                }

                /* ===== PROCESS ===== */
                .process-section { padding: 100px 0; background: #fff; }
                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 28px;
                }
                .process-card {
                    background: #f8fafc; border: 1px solid #e2e8f0;
                    border-radius: 16px; padding: 32px 24px;
                    text-align: center; position: relative;
                    transition: all .3s;
                }
                .process-card:hover {
                    border-color: #008BF9;
                    box-shadow: 0 12px 32px rgba(0,139,249,0.1);
                    transform: translateY(-6px);
                }
                .p-number {
                    font-size: 3rem; font-weight: 900;
                    color: #e2e8f0; line-height: 1;
                    margin-bottom: 16px;
                }
                .process-card:hover .p-number { color: #008BF9; }
                .process-card h4 {
                    font-size: 1.2rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 10px;
                }
                .process-card p {
                    font-size: 0.9rem; color: #64748b;
                    line-height: 1.6; margin: 0;
                }

                /* ===== CTA ===== */
                .cta-section { padding: 100px 0; background: #f8fafc; }
                .cta-wrapper {
                    max-width: 800px; margin: 0 auto;
                    text-align: center;
                }
                .cta-content {
                    background: #0F3567;
                    border-radius: 24px; padding: 64px 48px;
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
                    .intro-stats { padding-left: 20px; }
                    .why-grid { padding-left: 20px; }
                }
                @media (max-width: 991px) {
                    .ar-hero { padding: 120px 0 80px; }
                    .ar-hero-inner { grid-template-columns: 1fr; gap: 30px; }
                    .ar-hero-right { display: none !important; }
                    .intro-content { margin-bottom: 48px; }
                    .intro-stats { padding-left: 0; grid-template-columns: repeat(3, 1fr); }
                    .services-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
                    .why-section .col-lg-5 { margin-bottom: 48px; }
                    .why-grid { padding-left: 0; }
                    .process-grid { grid-template-columns: repeat(2, 1fr); }
                    .cta-content { padding: 48px 32px; }
                }
                @media (max-width: 576px) {
                    .ar-hero { padding: 110px 0 70px; }
                    .intro-stats { grid-template-columns: 1fr; }
                    .stat-card { padding: 24px; }
                    .service-card { padding: 32px 24px; }
                    .why-grid { grid-template-columns: 1fr; }
                    .process-grid { grid-template-columns: 1fr; }
                    .hero-actions { flex-direction: column; }
                    .hero-actions a { width: 100%; justify-content: center; }
                    .cta-content { padding: 36px 20px; border-radius: 16px; }
                    .cta-actions { flex-direction: column; }
                    .cta-actions a { width: 100%; justify-content: center; }
                }
            `}</style>
        </>
    )
}
