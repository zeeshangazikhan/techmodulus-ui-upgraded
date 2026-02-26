import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Users, Target, Map, DollarSign, ArrowRight, Check, TrendingUp, Shield, Briefcase, FileText, PieChart, Calendar, Lightbulb, BarChart3, Compass, Award, Handshake, Building, Phone, Mail, CheckCircle2 } from "lucide-react"

export default function ServiceVCIO() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'VCIO',
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
        setFormData({ name: '', email: '', mobile: '', service: 'VCIO', message: '' })
    }
    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="vcio-hero">
                        <div className="vcio-hero-bg">
                            <div className="vcio-hero-orb vcio-orb-1"></div>
                            <div className="vcio-hero-orb vcio-orb-2"></div>
                            <div className="vcio-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="hero-left">
                                        <span className="hero-badge"><Users size={16} /> vCIO Services</span>
                                        <h1 className="hero-title">Virtual Chief Information <span className="vcio-grad">Officer</span> Services</h1>
                                        <p className="hero-desc">Strategic IT leadership and technology roadmap planning without the cost of a full-time executive. Get executive-level guidance to align technology with your business objectives.</p>
                                        <div className="vcio-hero-pills">
                                            <div className="vcio-pill"><Check size={14} /> Strategic Planning</div>
                                            <div className="vcio-pill"><Check size={14} /> Technology Roadmap</div>
                                            <div className="vcio-pill"><Check size={14} /> Budget Optimization</div>
                                        </div>
                                        <div className="hero-actions">
                                            <Link href="/service-app-retirement" className="btn-outline-custom">
                                                Back to Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="vcio-diagram">
                                        <div className="vcio-dia-hub">
                                            <div className="vcio-dia-hub-inner"><Users size={26} /></div>
                                            <div className="vcio-dia-pulse"></div>
                                            <div className="vcio-dia-pulse vcio-p2"></div>
                                        </div>
                                        {/* Strategy Nodes in a circle */}
                                        <div className="vcio-snode vcio-sn1"><Target size={16} /><span>Strategy</span></div>
                                        <div className="vcio-snode vcio-sn2"><Map size={16} /><span>Roadmap</span></div>
                                        <div className="vcio-snode vcio-sn3"><DollarSign size={16} /><span>Budget</span></div>
                                        <div className="vcio-snode vcio-sn4"><Briefcase size={16} /><span>Vendors</span></div>
                                        <div className="vcio-snode vcio-sn5"><Shield size={16} /><span>Risk</span></div>
                                        <svg className="vcio-dia-svg" viewBox="0 0 340 340">
                                            <circle cx="170" cy="170" r="120" fill="none" stroke="rgba(0,139,249,0.08)" strokeWidth="1" strokeDasharray="6 4" />
                                            <circle cx="170" cy="170" r="80" fill="none" stroke="rgba(0,139,249,0.12)" strokeWidth="1" strokeDasharray="4 3" />
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
                                        <span className="section-tag">Strategic Leadership</span>
                                        <h2 className="platform-title">Executive IT Leadership On Demand</h2>
                                        <p className="platform-subtitle">Access strategic technology guidance and leadership without the overhead of a full-time CIO</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="platform-features">
                                        <div className="pf-feat"><Check size={18} /> Strategic Planning</div>
                                        <div className="pf-feat"><Check size={18} /> Technology Roadmap</div>
                                        <div className="pf-feat"><Check size={18} /> Budget Optimization</div>
                                        <div className="pf-feat"><Check size={18} /> Vendor Management</div>
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
                                    <Lightbulb size={20} />
                                    <span>The Challenge</span>
                                </div>
                                <h3 className="solution-title">Strategic IT Leadership Made Accessible</h3>
                                <div className="solution-content">
                                    <p>Many small and medium businesses face a critical challenge: they need strategic IT leadership to compete effectively but can't justify the cost of a full-time CIO. The average CIO salary exceeds $250,000 annually, plus benefits and bonuses—a significant investment that may not be feasible for growing organizations.</p>
                                    <p>Without strategic IT leadership, organizations often make reactive technology decisions, miss opportunities for innovation, overspend on solutions that don't align with business goals, and struggle to prioritize IT initiatives that drive growth.</p>
                                    <p>Our vCIO services bridge this gap by providing seasoned IT executives who work as an extension of your leadership team. You get the strategic guidance and technology vision you need at a fraction of the cost of a full-time hire.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="services-detail-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">What We Deliver</span>
                                <h2 className="section-title">vCIO Service Components</h2>
                                <p className="section-sub">Comprehensive strategic IT leadership tailored to your business</p>
                            </div>
                            <div className="sd-grid">
                                <div className="sd-card">
                                    <div className="sd-icon"><Compass size={28} /></div>
                                    <h4>Strategic IT Planning</h4>
                                    <p>Develop comprehensive IT strategies aligned with your business objectives and growth plans</p>
                                    <ul>
                                        <li>Business alignment analysis</li>
                                        <li>Technology gap assessment</li>
                                        <li>Strategic recommendations</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Map size={28} /></div>
                                    <h4>Technology Roadmap</h4>
                                    <p>Create detailed technology roadmaps that guide your IT investments over 1-5 year horizons</p>
                                    <ul>
                                        <li>Infrastructure planning</li>
                                        <li>Application modernization</li>
                                        <li>Digital transformation</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><DollarSign size={28} /></div>
                                    <h4>Budget Management</h4>
                                    <p>Optimize IT spending and develop budgets that maximize ROI on technology investments</p>
                                    <ul>
                                        <li>Cost optimization</li>
                                        <li>Budget forecasting</li>
                                        <li>ROI analysis</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Handshake size={28} /></div>
                                    <h4>Vendor Management</h4>
                                    <p>Manage vendor relationships, negotiate contracts, and ensure you get the best value</p>
                                    <ul>
                                        <li>Vendor evaluation</li>
                                        <li>Contract negotiation</li>
                                        <li>Performance monitoring</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Shield size={28} /></div>
                                    <h4>Risk & Compliance</h4>
                                    <p>Identify technology risks and ensure compliance with industry regulations and standards</p>
                                    <ul>
                                        <li>Risk assessment</li>
                                        <li>Compliance audits</li>
                                        <li>Security governance</li>
                                    </ul>
                                </div>
                                <div className="sd-card">
                                    <div className="sd-icon"><Building size={28} /></div>
                                    <h4>Board & Executive Support</h4>
                                    <p>Present technology strategies to board members and provide executive-level reporting</p>
                                    <ul>
                                        <li>Executive presentations</li>
                                        <li>Board reporting</li>
                                        <li>Stakeholder communication</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="benefits-section">
                        <div className="container">
                            <div className="benefits-header">
                                <div className="benefits-header-left">
                                    <span className="section-tag">Business Impact</span>
                                    <h2 className="section-title">Why vCIO Services?</h2>
                                </div>
                                <p className="benefits-header-text">Transform your IT strategy with executive-level leadership.</p>
                            </div>
                            <div className="benefits-grid">
                                <div className="benefit-card">
                                    <div className="benefit-icon"><TrendingUp size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Cost Savings</h5>
                                        <p>Get CIO-level expertise at 60-80% less than a full-time executive hire</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><Target size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Strategic Alignment</h5>
                                        <p>Ensure technology investments directly support your business objectives</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><Award size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Expert Guidance</h5>
                                        <p>Access seasoned IT executives with cross-industry experience</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><PieChart size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Optimized Spending</h5>
                                        <p>Eliminate waste and maximize ROI on technology investments</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><Calendar size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Flexible Engagement</h5>
                                        <p>Scale services up or down based on your needs and budget</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><BarChart3 size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Clear Roadmap</h5>
                                        <p>Get a documented technology roadmap with clear milestones</p>
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
                                                    <option value="VCIO">VCIO</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="AI Governance">AI Governance</option>
                                                    <option value="Data Management">Data Management</option>
                                                    <option value="Enterprise Archiving">Enterprise Archiving</option>
                                                    <option value="Application Archiving">Application Archiving</option>
                                                    <option value="File Archiving">File Archiving</option>
                                                    <option value="App Retirement">App Retirement</option>
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
                .vcio-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 110px;
                    position: relative; overflow: hidden;
                }
                .vcio-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: vcioShimmer 3s ease infinite;
                }
                @keyframes vcioShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .vcio-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .vcio-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .vcio-orb-1 { width:400px; height:400px; background:rgba(0,139,249,0.07); top:-10%; right:2%; animation:vcFloat 8s ease-in-out infinite; }
                .vcio-orb-2 { width:280px; height:280px; background:rgba(0,212,255,0.05); bottom:-8%; left:12%; animation:vcFloat 10s ease-in-out infinite reverse; }
                @keyframes vcFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(12px,-12px)} }
                .vcio-hero-grid {
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
                .vcio-grad {
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
                .vcio-hero-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
                .vcio-pill {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(0,139,249,0.08); border: 1px solid rgba(0,139,249,0.15);
                    padding: 7px 16px; border-radius: 50px;
                    font-size: 0.82rem; color: rgba(255,255,255,0.7); font-weight: 500;
                }
                .vcio-pill :global(svg) { color: #4db8ff; }
                .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .btn-outline-custom {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 14px 28px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all .3s;
                }
                .btn-outline-custom:hover { border-color: rgba(0,139,249,0.5); color: #4db8ff; background: rgba(0,139,249,0.05); }

                /* vCIO Diagram */
                .vcio-diagram {
                    position: relative; width: 340px; height: 340px; margin: 0 auto;
                }
                .vcio-dia-svg { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .vcio-dia-hub {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .vcio-dia-hub-inner {
                    width: 64px; height: 64px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .vcio-dia-pulse {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 64px; height: 64px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: vcioPulse 3s ease-out infinite;
                }
                .vcio-p2 { animation-delay: 1.5s; }
                @keyframes vcioPulse { 0%{width:64px;height:64px;opacity:0.6}100%{width:160px;height:160px;opacity:0} }
                .vcio-snode {
                    position: absolute; display: flex; align-items: center; gap: 6px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 8px 14px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.78rem; font-weight: 600;
                    backdrop-filter: blur(8px); z-index: 2; transition: all 0.3s;
                }
                .vcio-snode:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); box-shadow: 0 0 20px rgba(0,139,249,0.3); }
                .vcio-snode span { color: rgba(255,255,255,0.8); }
                .vcio-snode :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .vcio-sn1 { top: 5px; left: 50%; transform: translateX(-50%); }
                .vcio-sn2 { top: 25%; right: 0; }
                .vcio-sn3 { bottom: 15%; right: 5px; }
                .vcio-sn4 { bottom: 15%; left: 5px; }
                .vcio-sn5 { top: 25%; left: 0; }

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

                /* ===== COMPARISON ===== */
                .comparison-section { padding: 90px 0; background: #0F3567; }
                .comparison-section .section-tag { background: rgba(0,139,249,0.2); }
                .comparison-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .comparison-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 20px;
                    overflow: hidden;
                    position: relative;
                }
                .comparison-card.featured {
                    border-color: #008BF9;
                    box-shadow: 0 16px 40px rgba(0,139,249,0.25);
                }
                .cc-badge {
                    position: absolute;
                    top: -1px; right: 24px;
                    background: #008BF9; color: #fff;
                    font-size: 11px; font-weight: 700;
                    padding: 8px 16px; border-radius: 0 0 8px 8px;
                    text-transform: uppercase; letter-spacing: 1px;
                }
                .cc-header {
                    padding: 28px; text-align: center;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }
                .cc-header h4 {
                    font-size: 1.3rem; font-weight: 700;
                    color: #fff; margin: 0;
                }
                .cc-body { padding: 32px; }
                .cc-price {
                    font-size: 3rem; font-weight: 800;
                    color: #fff; text-align: center;
                    margin-bottom: 24px;
                }
                .cc-price span {
                    font-size: 1rem; font-weight: 500;
                    color: rgba(255,255,255,0.6);
                }
                .cc-body ul {
                    list-style: none; padding: 0; margin: 0;
                }
                .cc-body ul li {
                    display: flex; align-items: center; gap: 12px;
                    font-size: 0.95rem; color: rgba(255,255,255,0.7);
                    padding: 12px 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }
                .cc-body ul li:first-child { border-top: none; }
                .comparison-card.featured .cc-body ul li {
                    color: rgba(255,255,255,0.9);
                }
                .comparison-card.featured .cc-body ul li :global(svg) {
                    color: #00d26a;
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
                @media (max-width: 991px) {
                    .vcio-hero { padding: 120px 0 80px; }
                    .platform-content { padding-right: 0; margin-bottom: 32px; }
                    .platform-features { padding-left: 20px; grid-template-columns: 1fr; }
                    .sd-grid { grid-template-columns: repeat(2, 1fr); }
                    .comparison-grid { grid-template-columns: 1fr; max-width: 400px; }
                    .benefits-header { flex-direction: column; align-items: flex-start; gap: 20px; }
                    .benefits-header-text { text-align: left; max-width: 100%; }
                    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
                    .cta-content { padding: 48px 32px; }
                }
                @media (max-width: 576px) {
                    .vcio-hero { padding: 100px 0 60px; }
                    .solution-content { padding: 28px; }
                    .sd-grid { grid-template-columns: 1fr; }
                    .sd-card { padding: 28px 24px; }
                    .benefits-grid { grid-template-columns: 1fr; }
                    .benefit-card { flex-direction: column; text-align: center; }
                    .benefit-icon { margin: 0 auto; }
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
