'use client'

import { sendContactEnquiry } from "@/util/sendContact"

import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Database, Archive, HardDrive, ArrowRight, Check, Layers, ShieldCheck, BarChart3, Users, Lock, Cloud, Server, ChevronRight, Phone, Mail, CheckCircle2, Cpu } from "lucide-react"

export default function ServiceDataManagement() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'Data Management',
        message: ''
    })
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const result = await sendContactEnquiry({ ...formData, service: formData.service || 'Data Management' })
        if (!result.ok) {
            if (typeof window !== 'undefined') window.alert(result.error)
            return
        }
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: 'Data Management', message: '' })
    }

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="dm-hero">
                        <div className="dm-hero-bg">
                            <div className="dm-hero-orb dm-orb-1"></div>
                            <div className="dm-hero-orb dm-orb-2"></div>
                            <div className="dm-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="dm-hero-inner">
                                <div className="dm-hero-content">
                                    <div className="dm-badge-wrap">
                                        <span className="dm-hero-badge"><Database size={14} /> Data Management</span>
                                        <span className="dm-badge-line"></span>
                                    </div>
                                    <h1 className="dm-hero-title">Complete Data Growth <span>Management Solutions</span></h1>
                                    <p className="dm-hero-desc">Cloud-native archiving solutions to manage enterprise data growth, reduce costs, and ensure compliance across all your data assets.</p>
                                    <div className="dm-hero-features">
                                        <div className="dm-hero-feat"><Check size={16} /> 70% Storage Savings</div>
                                        <div className="dm-hero-feat"><Check size={16} /> 100% Compliance Ready</div>
                                        <div className="dm-hero-feat"><Check size={16} /> 24/7 Data Access</div>
                                    </div>
                                    <div className="dm-hero-actions">
                                        <a href="#services" className="dm-btn-primary">
                                            Explore Solutions <ArrowRight size={18} />
                                        </a>
                                        <a href="#wdx-quote" className="dm-btn-outline">
                                            Get In Touch
                                        </a>
                                    </div>
                                </div>
                                <div className="dm-hero-visual">
                                    <div className="dm-visual-container">
                                        <div className="dm-visual-core">
                                            <div className="dm-visual-core-inner"><Database size={28} /></div>
                                            <div className="dm-visual-ring"></div>
                                            <div className="dm-visual-ring dm-ring-2"></div>
                                        </div>
                                        <div className="dm-vnode dm-vn-1"><Archive size={16} /><span>Enterprise</span></div>
                                        <div className="dm-vnode dm-vn-2"><Server size={16} /><span>Application</span></div>
                                        <div className="dm-vnode dm-vn-3"><HardDrive size={16} /><span>File</span></div>
                                        <div className="dm-vnode dm-vn-4"><Cloud size={16} /><span>Cloud</span></div>
                                        <svg className="dm-visual-lines" viewBox="0 0 380 380">
                                            <line x1="190" y1="190" x2="190" y2="35" className="dm-conn-line" />
                                            <line x1="190" y1="190" x2="340" y2="190" className="dm-conn-line" />
                                            <line x1="190" y1="190" x2="190" y2="345" className="dm-conn-line" />
                                            <line x1="190" y1="190" x2="40" y2="190" className="dm-conn-line" />
                                            <line x1="190" y1="35" x2="340" y2="190" className="dm-conn-ring" />
                                            <line x1="340" y1="190" x2="190" y2="345" className="dm-conn-ring" />
                                            <line x1="190" y1="345" x2="40" y2="190" className="dm-conn-ring" />
                                            <line x1="40" y1="190" x2="190" y2="35" className="dm-conn-ring" />
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
                                        <h2 className="section-title">Unified Data Archiving for Modern Enterprises</h2>
                                        <p>For as long as the enterprise has or will endure, the one constant is the ever-growing creation of new data. New and existing digital processes, compliance requirements, and IT modernization continue to challenge our ability to manage data growth simply and efficiently.</p>
                                        <p>The vast majority of enterprise data is older than two years, yet is rarely accessed by the organization. Our comprehensive archiving solutions help you manage this data intelligently while reducing costs and maintaining compliance.</p>
                                        <div className="intro-stats">
                                            <div className="stat-item">
                                                <span className="stat-num">70%</span>
                                                <span className="stat-text">Storage Cost Reduction</span>
                                            </div>
                                            <div className="stat-item">
                                                <span className="stat-num">100%</span>
                                                <span className="stat-text">Compliance Ready</span>
                                            </div>
                                            <div className="stat-item">
                                                <span className="stat-num">24/7</span>
                                                <span className="stat-text">Data Accessibility</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="intro-cards">
                                        <div className="intro-card">
                                            <div className="intro-card-icon"><Cloud size={24} /></div>
                                            <div>
                                                <h4>Cloud-Native Architecture</h4>
                                                <p>Built for the cloud with scalable object storage and enterprise-grade security</p>
                                            </div>
                                        </div>
                                        <div className="intro-card">
                                            <div className="intro-card-icon"><ShieldCheck size={24} /></div>
                                            <div>
                                                <h4>Compliance & Governance</h4>
                                                <p>Meet regulatory requirements with built-in retention policies and audit trails</p>
                                            </div>
                                        </div>
                                        <div className="intro-card">
                                            <div className="intro-card-icon"><BarChart3 size={24} /></div>
                                            <div>
                                                <h4>Cost Optimization</h4>
                                                <p>Reduce primary storage costs by moving cold data to low-cost cloud storage</p>
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
                                <span className="section-tag">Our Solutions</span>
                                <h2 className="section-title">Three Pillars of Enterprise Archiving</h2>
                                <p className="section-sub">Comprehensive data archiving solutions designed to handle every aspect of enterprise data growth</p>
                            </div>

                            <div className="services-row">
                                {/* Enterprise Archiving */}
                                <div className="service-card">
                                    <div className="sc-header">
                                        <div className="sc-icon"><Archive size={30} /></div>
                                        <span className="sc-num">01</span>
                                    </div>
                                    <h3>Enterprise Archiving</h3>
                                    <p className="sc-desc">A cloud-native application bundle including Application Retirement, Database Archiving, Email Archiving, and File Archiving for complete enterprise data management.</p>
                                    <div className="sc-features">
                                        <div className="sc-feat"><Check size={16} /> Application Retirement</div>
                                        <div className="sc-feat"><Check size={16} /> Database Archiving</div>
                                        <div className="sc-feat"><Check size={16} /> Email Archiving</div>
                                        <div className="sc-feat"><Check size={16} /> File Archiving</div>
                                    </div>
                                    <Link href="/service-enterprise-archiving" className="sc-link">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>

                                {/* Application Archiving */}
                                <div className="service-card">
                                    <div className="sc-header">
                                        <div className="sc-icon"><Server size={30} /></div>
                                        <span className="sc-num">02</span>
                                    </div>
                                    <h3>Application Archiving</h3>
                                    <p className="sc-desc">Multi-cloud data growth solution for enterprise applications. Reduce costs and improve performance by archiving older, less frequently accessed data to low-cost cloud storage.</p>
                                    <div className="sc-features">
                                        <div className="sc-feat"><Check size={16} /> Database Archiving</div>
                                        <div className="sc-feat"><Check size={16} /> Performance Optimization</div>
                                        <div className="sc-feat"><Check size={16} /> ILM Policies</div>
                                        <div className="sc-feat"><Check size={16} /> Universal Data Access</div>
                                    </div>
                                    <Link href="/service-application-archiving" className="sc-link">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>

                                {/* File Archiving */}
                                <div className="service-card">
                                    <div className="sc-header">
                                        <div className="sc-icon"><HardDrive size={30} /></div>
                                        <span className="sc-num">03</span>
                                    </div>
                                    <h3>File Archiving</h3>
                                    <p className="sc-desc">Cloud-native data growth solution for file servers. Reduce costs, declutter storage, and stay compliant with intelligent file lifecycle management.</p>
                                    <div className="sc-features">
                                        <div className="sc-feat"><Check size={16} /> File Server Migration</div>
                                        <div className="sc-feat"><Check size={16} /> Storage Optimization</div>
                                        <div className="sc-feat"><Check size={16} /> Compliance Controls</div>
                                        <div className="sc-feat"><Check size={16} /> E-Discovery Ready</div>
                                    </div>
                                    <Link href="/service-file-archiving" className="sc-link">
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
                                    <h2 className="section-title light">Enterprise-Grade Archiving Built for Scale</h2>
                                    <p className="why-desc">We combine deep expertise in data management with cutting-edge cloud technology. Our solutions are designed to handle petabytes of data while maintaining performance, compliance, and cost efficiency.</p>
                                </div>
                                <div className="col-lg-7">
                                    <div className="why-grid">
                                        <div className="why-card">
                                            <div className="why-icon"><Layers size={22} /></div>
                                            <h5>Unified Platform</h5>
                                            <p>Single platform for all archiving needs</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="why-icon"><Lock size={22} /></div>
                                            <h5>Security First</h5>
                                            <p>Enterprise-grade encryption and access controls</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="why-icon"><BarChart3 size={22} /></div>
                                            <h5>Proven ROI</h5>
                                            <p>Measurable cost savings from day one</p>
                                        </div>
                                        <div className="why-card">
                                            <div className="why-icon"><Users size={22} /></div>
                                            <h5>Expert Support</h5>
                                            <p>Dedicated team with enterprise experience</p>
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
                                    <div className="wdx-info-item">
                                        <div className="wdx-info-icon-box">
                                            <Phone size={24} />
                                        </div>
                                        {/* <div className="wdx-info-content">
                                            <h4>Phone Number</h4>
                                            <a href="tel:+918329042459">+91 8329042459</a>
                                        </div> */}
                                    </div>

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
                                                    <option value="Data Management">Data Management</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="AI Governance">AI Governance</option>
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
                .dm-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 120px;
                    position: relative; overflow: hidden;
                }
                .dm-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: dmShimmer 3s ease infinite;
                }
                @keyframes dmShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .dm-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .dm-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .dm-orb-1 { width:450px; height:450px; background:rgba(0,139,249,0.08); top:-15%; right:-5%; animation:dmFloat 8s ease-in-out infinite; }
                .dm-orb-2 { width:300px; height:300px; background:rgba(0,212,255,0.06); bottom:-10%; left:10%; animation:dmFloat 10s ease-in-out infinite reverse; }
                @keyframes dmFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(15px,-15px)} }
                .dm-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,249,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                }
                .dm-hero-inner {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 60px; align-items: center;
                    position: relative; z-index: 2;
                }
                .dm-badge-wrap { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
                .dm-hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 2px; white-space: nowrap;
                }
                .dm-badge-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(0,139,249,0.3), transparent); }
                .dm-hero-title {
                    font-size: clamp(2.2rem, 4.5vw, 3rem);
                    font-weight: 800; color: #fff; line-height: 1.15;
                    margin-bottom: 22px; letter-spacing: -0.02em;
                }
                .dm-hero-title span {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .dm-hero-desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.65);
                    line-height: 1.75; max-width: 520px; margin-bottom: 24px;
                }
                .dm-hero-features { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px; }
                .dm-hero-feat {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.88rem; color: rgba(255,255,255,0.7); font-weight: 500;
                }
                .dm-hero-feat :global(svg) { color: #4db8ff; }
                .dm-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .dm-btn-primary {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: linear-gradient(135deg, #008BF9, #0070cc); color: #fff;
                    padding: 15px 30px; border-radius: 10px; font-weight: 700;
                    font-size: 0.95rem; text-decoration: none; transition: all .3s;
                    box-shadow: 0 4px 20px rgba(0,139,249,0.3);
                }
                .dm-btn-primary:hover { transform: translateY(-2px); color: #fff; box-shadow: 0 12px 32px rgba(0,139,249,0.45); }
                .dm-btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 15px 30px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all .3s;
                }
                .dm-btn-outline:hover { border-color: rgba(0,139,249,0.5); color: #4db8ff; background: rgba(0,139,249,0.05); }

                /* Hero Visual */
                .dm-hero-visual { display: flex; align-items: center; justify-content: center; }
                .dm-visual-container { position: relative; width: 380px; height: 380px; }
                .dm-visual-lines { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .dm-conn-line { stroke: rgba(0,139,249,0.2); stroke-width: 1; stroke-dasharray: 6 4; animation: dmDash 15s linear infinite; }
                .dm-conn-ring { stroke: rgba(0,139,249,0.1); stroke-width: 1; stroke-dasharray: 4 6; animation: dmDash 20s linear infinite; }
                @keyframes dmDash { to { stroke-dashoffset: -100; } }
                .dm-visual-core {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .dm-visual-core-inner {
                    width: 76px; height: 76px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .dm-visual-ring {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 76px; height: 76px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: dmPulse 3s ease-out infinite;
                }
                .dm-ring-2 { animation-delay: 1.5s; }
                @keyframes dmPulse { 0%{width:76px;height:76px;opacity:0.6}100%{width:190px;height:190px;opacity:0} }
                .dm-vnode {
                    position: absolute; display: flex; align-items: center; gap: 7px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 9px 14px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.78rem; font-weight: 600;
                    backdrop-filter: blur(8px); z-index: 2; transition: all 0.3s;
                }
                .dm-vnode:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); box-shadow: 0 0 20px rgba(0,139,249,0.4); }
                .dm-vnode span { color: rgba(255,255,255,0.8); }
                .dm-vnode :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .dm-vn-1 { top: 10px; left: 50%; transform: translateX(-50%); }
                .dm-vn-2 { top: 50%; right: 0; transform: translateY(-50%); }
                .dm-vn-3 { bottom: 10px; left: 50%; transform: translateX(-50%); }
                .dm-vn-4 { top: 50%; left: 0; transform: translateY(-50%); }

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
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .service-card {
                    background: #fff; border-radius: 16px;
                    padding: 36px; border: 1px solid #e2e8f0;
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
                    font-size: 1.35rem; font-weight: 700;
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
                @media (max-width: 991px) {
                    .dm-hero { padding: 120px 0 80px; }
                    .dm-hero-inner { grid-template-columns: 1fr; gap: 40px; }
                    .dm-hero-visual { display: none; }
                    .services-row { grid-template-columns: 1fr; }
                    .intro-cards { padding-left: 0; margin-top: 36px; }
                    .why-grid { margin-top: 36px; }
                }
                @media (max-width: 576px) {
                    .dm-hero { padding: 110px 0 60px; }
                    .dm-hero-features { flex-direction: column; gap: 10px; }
                    .dm-hero-actions { flex-direction: column; }
                    .dm-hero-actions a { width: 100%; justify-content: center; }
                    .intro-stats { flex-direction: column; gap: 16px; }
                    .sc-features { grid-template-columns: 1fr; }
                    .why-grid { grid-template-columns: 1fr; }
                    .cta-card { padding: 36px 20px; }
                    .cta-actions { flex-direction: column; }
                    .cta-actions a { width: 100%; justify-content: center; }
                    .hero-actions { flex-direction: column; }
                    .hero-actions a { width: 100%; justify-content: center; }
                    .dm-contact-wrapper { grid-template-columns: 1fr; gap: 40px; }
                    .dm-contact-header h2 { font-size: 32px; }
                    .dm-form-grid { grid-template-columns: 1fr; gap: 16px; }
                    .dm-contact-form { padding: 30px 20px; }
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
                @media (max-width: 768px) {
                    /* small adjustments for very small screens */
                    .wdx-contact-form-wrapper { padding: 24px 18px; }
                    .intro-cards .intro-card { flex-direction: column; align-items: flex-start; }
                    .services-row { grid-template-columns: 1fr; }
                }
                `}</style>
        </>
    )
}
