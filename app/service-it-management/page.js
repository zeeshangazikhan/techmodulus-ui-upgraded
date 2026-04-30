'use client'

import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Monitor, Server, Shield, Wifi, ArrowRight, Check, Clock, Headphones, Activity, Database, Lock, Settings, AlertTriangle, Zap, TrendingUp, BarChart3, Eye, RefreshCw, Phone, Mail, CheckCircle2 } from "lucide-react"

export default function ServiceITManagement() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'IT Management',
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
        setFormData({ name: '', email: '', mobile: '', service: 'IT Management', message: '' })
    }

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="itm-hero">
                        <div className="itm-hero-bg">
                            <div className="itm-hero-orb itm-orb-1"></div>
                            <div className="itm-hero-orb itm-orb-2"></div>
                            <div className="itm-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="hero-left">
                                        <span className="hero-badge"><Monitor size={16} /> IT Management</span>
                                        <h1 className="hero-title">Comprehensive IT Infrastructure <span className="itm-grad">Management</span></h1>
                                        <p className="hero-desc">End-to-end IT management services including network monitoring, security management, system administration, and proactive maintenance to ensure optimal performance.</p>
                                        <div className="itm-hero-pills">
                                            <div className="itm-pill"><Check size={14} /> 24/7 Monitoring</div>
                                            <div className="itm-pill"><Check size={14} /> 99.9% Uptime</div>
                                            <div className="itm-pill"><Check size={14} /> 15min Response</div>
                                        </div>
                                        <div className="hero-actions">
                                            <Link href="/service-app-retirement" className="btn-outline-custom">
                                                Back to Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="itm-diagram">
                                        <div className="itm-dia-center">
                                            <div className="itm-dia-core"><Settings size={26} /></div>
                                            <div className="itm-dia-pulse"></div>
                                            <div className="itm-dia-pulse itm-pulse-2"></div>
                                        </div>
                                        <div className="itm-dia-node itm-dn-1"><Monitor size={16} /><span>Network</span></div>
                                        <div className="itm-dia-node itm-dn-2"><Shield size={16} /><span>Security</span></div>
                                        <div className="itm-dia-node itm-dn-3"><Server size={16} /><span>Servers</span></div>
                                        <div className="itm-dia-node itm-dn-4"><Database size={16} /><span>Backup</span></div>
                                        <div className="itm-dia-node itm-dn-5"><Wifi size={16} /><span>Cloud</span></div>
                                        <div className="itm-dia-node itm-dn-6"><Headphones size={16} /><span>Support</span></div>
                                        <svg className="itm-dia-svg" viewBox="0 0 340 340">
                                            <circle cx="170" cy="170" r="110" fill="none" stroke="rgba(0,139,249,0.1)" strokeWidth="1" strokeDasharray="6 4" />
                                            <circle cx="170" cy="170" r="145" fill="none" stroke="rgba(0,139,249,0.06)" strokeWidth="1" />
                                            <line x1="170" y1="170" x2="170" y2="30" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="291" y2="100" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="291" y2="240" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="170" y2="310" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="49" y2="240" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                                            <line x1="170" y1="170" x2="49" y2="100" stroke="rgba(0,139,249,0.15)" strokeWidth="1" strokeDasharray="4 3" />
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
                                        <span className="section-tag">Managed Services</span>
                                        <h2 className="platform-title">Complete IT Management Solutions</h2>
                                        <p className="platform-subtitle">Proactive monitoring, management, and support for your entire IT infrastructure</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="platform-features">
                                        <div className="pf-feat"><Check size={18} /> 24/7 Monitoring</div>
                                        <div className="pf-feat"><Check size={18} /> Proactive Maintenance</div>
                                        <div className="pf-feat"><Check size={18} /> Security Management</div>
                                        <div className="pf-feat"><Check size={18} /> Help Desk Support</div>
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
                                    <Settings size={20} />
                                    <span>The Challenge</span>
                                </div>
                                <h3 className="solution-title">Focus on Your Business, Not Your IT</h3>
                                <div className="solution-content">
                                    <p>Managing IT infrastructure in-house is increasingly complex and costly. Organizations face challenges with maintaining uptime, securing networks against evolving threats, managing growing data volumes, and keeping systems updated—all while trying to focus on core business objectives.</p>
                                    <p>Without proper management, IT issues lead to downtime, security breaches, and productivity losses. Studies show that unplanned downtime costs businesses an average of $5,600 per minute. Add to that the challenge of recruiting and retaining skilled IT professionals, and the burden becomes significant.</p>
                                    <p>Our comprehensive IT Management services address these challenges by providing enterprise-grade infrastructure management, proactive monitoring, and expert support—allowing you to focus on what matters most: growing your business.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="services-detail-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">What We Manage</span>
                                <h2 className="section-title">Comprehensive IT Services</h2>
                                <p className="section-sub">End-to-end management of your technology infrastructure</p>
                            </div>
                            <div className="sd-grid">
                                <div className="sd-card">
                                    <div className="sd-icon"><Activity size={28} /></div>
                                    <h4>Network Monitoring</h4>
                                    <p>24/7 proactive monitoring of your network infrastructure with real-time alerts and automated issue detection</p>
                                    <ul>
                                        <li>Performance monitoring</li>
                                        <li>Bandwidth analysis</li>
                                        <li>Uptime tracking</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Shield size={28} /></div>
                                    <h4>Security Management</h4>
                                    <p>Comprehensive security services including threat detection, vulnerability management, and incident response</p>
                                    <ul>
                                        <li>Endpoint protection</li>
                                        <li>Firewall management</li>
                                        <li>Security patching</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Server size={28} /></div>
                                    <h4>Server Management</h4>
                                    <p>Complete server administration including maintenance, optimization, and capacity planning</p>
                                    <ul>
                                        <li>Windows & Linux servers</li>
                                        <li>Virtualization</li>
                                        <li>Backup management</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Headphones size={28} /></div>
                                    <h4>Help Desk Support</h4>
                                    <p>Responsive technical support for your team with multiple contact channels and fast resolution times</p>
                                    <ul>
                                        <li>Phone, email, chat</li>
                                        <li>Remote assistance</li>
                                        <li>Ticket management</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Database size={28} /></div>
                                    <h4>Data Management</h4>
                                    <p>Comprehensive data backup, disaster recovery, and business continuity solutions</p>
                                    <ul>
                                        <li>Automated backups</li>
                                        <li>Disaster recovery</li>
                                        <li>Data retention</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><RefreshCw size={28} /></div>
                                    <h4>Patch Management</h4>
                                    <p>Systematic software updates and security patches to keep systems current and protected</p>
                                    <ul>
                                        <li>OS updates</li>
                                        <li>Application updates</li>
                                        <li>Compliance reporting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="stats-section">
                        <div className="container">
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <div className="stat-number">99.9%</div>
                                    <div className="stat-label">Uptime SLA</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">15min</div>
                                    <div className="stat-label">Average Response</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">24/7</div>
                                    <div className="stat-label">Support Available</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">40%</div>
                                    <div className="stat-label">Cost Savings</div>
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
                                                    <option value="IT Management">IT Management</option>
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
                .itm-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 110px;
                    position: relative; overflow: hidden;
                }
                .itm-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: itmShimmer 3s ease infinite;
                }
                @keyframes itmShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .itm-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .itm-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .itm-orb-1 { width:400px; height:400px; background:rgba(0,139,249,0.07); top:-12%; right:0; animation:itmFloat 8s ease-in-out infinite; }
                .itm-orb-2 { width:280px; height:280px; background:rgba(0,212,255,0.05); bottom:-8%; left:10%; animation:itmFloat 10s ease-in-out infinite reverse; }
                @keyframes itmFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(12px,-12px)} }
                .itm-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,249,0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 60% 60% at 70% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 60% 60% at 70% 50%, black, transparent);
                }
                .hero-left { position: relative; z-index: 1; }
                .hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2px;
                    margin-bottom: 28px;
                }
                .hero-title {
                    font-size: clamp(2rem, 4.5vw, 2.8rem);
                    font-weight: 800; color: #fff;
                    line-height: 1.15; margin-bottom: 20px;
                }
                .itm-grad {
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
                .itm-hero-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
                .itm-pill {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(0,139,249,0.08); border: 1px solid rgba(0,139,249,0.15);
                    padding: 7px 16px; border-radius: 50px;
                    font-size: 0.82rem; color: rgba(255,255,255,0.7); font-weight: 500;
                }
                .itm-pill :global(svg) { color: #4db8ff; }
                .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .btn-outline-custom {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 14px 28px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all .3s;
                }
                .btn-outline-custom:hover { border-color: rgba(0,139,249,0.5); color: #4db8ff; background: rgba(0,139,249,0.05); }

                /* Hexagonal Diagram */
                .itm-diagram {
                    position: relative; width: 340px; height: 340px; margin: 0 auto;
                }
                .itm-dia-svg { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .itm-dia-center {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .itm-dia-core {
                    width: 64px; height: 64px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .itm-dia-pulse {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 64px; height: 64px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: itmPulse 3s ease-out infinite;
                }
                .itm-pulse-2 { animation-delay: 1.5s; }
                @keyframes itmPulse { 0%{width:64px;height:64px;opacity:0.6}100%{width:160px;height:160px;opacity:0} }
                .itm-dia-node {
                    position: absolute; display: flex; align-items: center; gap: 6px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 8px 14px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.78rem; font-weight: 600;
                    backdrop-filter: blur(8px); z-index: 2; transition: all 0.3s;
                }
                .itm-dia-node:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); box-shadow: 0 0 20px rgba(0,139,249,0.3); }
                .itm-dia-node span { color: rgba(255,255,255,0.8); }
                .itm-dia-node :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .itm-dn-1 { top: 5px; left: 50%; transform: translateX(-50%); }
                .itm-dn-2 { top: 22%; right: 0; }
                .itm-dn-3 { bottom: 22%; right: 0; }
                .itm-dn-4 { bottom: 5px; left: 50%; transform: translateX(-50%); }
                .itm-dn-5 { bottom: 22%; left: 0; }
                .itm-dn-6 { top: 22%; left: 0; }

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

                /* ===== SERVICES DETAIL ===== */
                .services-detail-section { padding: 90px 0; background: #f8fafc; }
                .sd-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .sd-card {
                    background: #fff; padding: 36px 30px; border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .sd-card:hover {
                    border-color: transparent;
                    box-shadow: 0 20px 40px rgba(0,139,249,0.12);
                    transform: translateY(-8px);
                }
                .sd-icon {
                    width: 64px; height: 64px; border-radius: 14px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 22px;
                    box-shadow: 0 8px 20px rgba(0,139,249,0.25);
                }
                .sd-card h4 {
                    font-size: 1.2rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 12px;
                }
                .sd-card > p {
                    font-size: 0.95rem; color: #64748b;
                    line-height: 1.7; margin-bottom: 18px;
                }
                .sd-card ul {
                    list-style: none; padding: 0; margin: 0;
                }
                .sd-card ul li {
                    font-size: 0.9rem; color: #475569;
                    padding: 6px 0;
                    border-top: 1px solid #f1f5f9;
                }
                .sd-card ul li:first-child { border-top: none; }

                /* ===== STATS ===== */
                .stats-section { padding: 80px 0; background: #0F3567; }
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                }
                .stat-item { text-align: center; }
                .stat-number {
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    font-weight: 800; color: #fff;
                    line-height: 1; margin-bottom: 8px;
                }
                .stat-label {
                    font-size: 1rem; color: rgba(255,255,255,0.7);
                    font-weight: 500;
                }

                /* ===== BENEFITS ===== */
                .benefits-section {
                    padding: 90px 0;
                    background: linear-gradient(180deg, #fff 0%, #f8fafc 100%);
                }
                .benefits-header {
                    display: flex; align-items: flex-end;
                    justify-content: space-between;
                    margin-bottom: 56px; padding-bottom: 32px;
                    border-bottom: 1px solid #e2e8f0;
                }
                .benefits-header-text {
                    max-width: 380px;
                    font-size: 1rem; color: #64748b;
                    line-height: 1.65; text-align: right;
                }
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                .benefit-card {
                    background: #fff; border: 1px solid #e2e8f0;
                    border-radius: 16px; padding: 32px;
                    display: flex; align-items: flex-start; gap: 20px;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .benefit-card:hover {
                    border-color: #008BF9;
                    box-shadow: 0 16px 36px rgba(0,139,249,0.1);
                    transform: translateY(-6px);
                }
                .benefit-icon {
                    width: 56px; height: 56px; min-width: 56px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff;
                    box-shadow: 0 6px 16px rgba(0,139,249,0.3);
                }
                .benefit-content h5 {
                    font-size: 1.1rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 8px;
                }
                .benefit-content p {
                    font-size: 0.92rem; color: #64748b;
                    line-height: 1.6; margin: 0;
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
                    .itm-hero { padding: 120px 0 80px; }
                    .platform-content { padding-right: 0; margin-bottom: 32px; }
                    .platform-features { padding-left: 20px; grid-template-columns: 1fr; }
                    .sd-grid { grid-template-columns: repeat(2, 1fr); }
                    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
                    .benefits-header { flex-direction: column; align-items: flex-start; gap: 20px; }
                    .benefits-header-text { text-align: left; max-width: 100%; }
                    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
                    .cta-content { padding: 48px 32px; }
                }
                @media (max-width: 576px) {
                    .itm-hero { padding: 100px 0 60px; }
                    .solution-content { padding: 28px; }
                    .sd-grid { grid-template-columns: 1fr; }
                    .sd-card { padding: 28px 24px; }
                    .stats-grid { grid-template-columns: 1fr; gap: 32px; }
                    .benefits-grid { grid-template-columns: 1fr; }
                    .benefit-card { flex-direction: column; text-align: center; }
                    .benefit-icon { margin: 0 auto; }
                    .hero-actions { flex-direction: column; }
                    .hero-actions a { width: 100%; justify-content: center; }
                    .cta-content { padding: 36px 20px; border-radius: 16px; }
                    .cta-actions { flex-direction: column; }
                    .cta-actions a { width: 100%; justify-content: center; }
                    .itm-contact-wrapper { grid-template-columns: 1fr; gap: 40px; }
                    .itm-contact-header h2 { font-size: 32px; }
                    .itm-form-grid { grid-template-columns: 1fr; gap: 16px; }
                    .itm-contact-form { padding: 30px 20px; }
                }

                /* ===== CONTACT SECTION ===== */
                .itm-contact-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%);
                }

                .itm-contact-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .itm-contact-badge {
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

                .itm-contact-header h2 {
                    font-size: 42px;
                    font-weight: 700;
                    color: #1a202c;
                    margin-bottom: 16px;
                }

                .itm-contact-header h2 span {
                    color: #008bf9;
                }

                .itm-contact-header p {
                    font-size: 16px;
                    color: #666;
                    margin: 0;
                }

                .itm-contact-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    align-items: start;
                }

                .itm-contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .itm-info-item {
                    display: flex;
                    gap: 16px;
                }

                .itm-info-icon-box {
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

                .itm-info-content h4 {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1a202c;
                    margin: 0 0 4px 0;
                }

                .itm-info-content a {
                    font-size: 16px;
                    color: #008bf9;
                    text-decoration: none;
                    transition: color 0.3s;
                }

                .itm-info-content a:hover {
                    color: #0066cc;
                }

                .itm-benefits-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-top: 24px;
                }

                .itm-benefit-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: #2d3748;
                }

                .itm-benefit-item svg {
                    color: #008bf9;
                    flex-shrink: 0;
                }

                .itm-contact-form-wrapper {
                    position: relative;
                }

                .itm-form-success-msg {
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

                .itm-form-success-msg svg {
                    color: #008bf9;
                }

                .itm-form-success-msg h3 {
                    font-size: 24px;
                    font-weight: 700;
                    color: #1a202c;
                    margin: 0;
                }

                .itm-form-success-msg p {
                    font-size: 14px;
                    color: #666;
                    margin: 0;
                }

                .itm-contact-form {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                }

                .itm-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .itm-form-group {
                    display: flex;
                    flex-direction: column;
                }

                .itm-form-group label {
                    font-size: 14px;
                    font-weight: 600;
                    color: #2d3748;
                    margin-bottom: 8px;
                }

                .itm-form-group input,
                .itm-form-group select,
                .itm-form-group textarea {
                    padding: 12px 16px;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                    font-size: 14px;
                    font-family: inherit;
                    transition: all 0.3s;
                }

                .itm-form-group input:focus,
                .itm-form-group select:focus,
                .itm-form-group textarea:focus {
                    outline: none;
                    border-color: #008bf9;
                    box-shadow: 0 0 0 3px rgba(0, 139, 249, 0.1);
                }

                .itm-form-group.itm-form-full {
                    grid-column: 1 / -1;
                }

                .itm-form-group textarea {
                    resize: vertical;
                }

                .itm-submit-btn {
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

                .itm-submit-btn:hover {
                    background: #0066cc;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 16px rgba(0, 139, 249, 0.3);
                }

                @media (max-width: 768px) {
                    .itm-form-grid { grid-template-columns: 1fr; }
                    .itm-contact-form-wrapper { padding: 28px; }
                    .itm-form-group textarea { min-height: 120px; }
                }
            `}</style>
        </>
    )
}
