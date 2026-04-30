import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Archive, Database, Mail, HardDrive, Server, ArrowRight, Check, Cloud, ShieldCheck, Zap, TrendingUp, Lock, BarChart3, Users, Clock, Phone, CheckCircle2, Layers } from "lucide-react"

export default function ServiceEnterpriseArchiving() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'Enterprise Archiving',
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
        setFormData({ name: '', email: '', mobile: '', service: 'Enterprise Archiving', message: '' })
    }
    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="ea-hero">
                        <div className="ea-hero-bg">
                            <div className="ea-hero-orb ea-orb-1"></div>
                            <div className="ea-hero-orb ea-orb-2"></div>
                            <div className="ea-hero-grid"></div>
                        </div>
                        <div className="container">
                            <div className="ea-hero-inner">
                                <div className="ea-hero-content">
                                    <div className="ea-badge-wrap">
                                        <span className="ea-hero-badge"><Archive size={14} /> Enterprise Archiving</span>
                                        <span className="ea-badge-line"></span>
                                    </div>
                                    <h1 className="ea-hero-title">Complete Cloud-Native <span>Enterprise Archiving</span> Solution</h1>
                                    <p className="ea-hero-desc">A comprehensive application bundle including Application Retirement, Database Archiving, Email Archiving, and File Archiving to manage all your enterprise data growth needs.</p>
                                    <div className="ea-hero-features">
                                        <div className="ea-hero-feat"><Check size={16} /> Application Retirement</div>
                                        <div className="ea-hero-feat"><Check size={16} /> Database Archiving</div>
                                        <div className="ea-hero-feat"><Check size={16} /> Email Archiving</div>
                                        <div className="ea-hero-feat"><Check size={16} /> File Archiving</div>
                                    </div>
                                    <div className="ea-hero-actions">
                                        <Link href="/service-data-management" className="ea-btn-outline">
                                            Back to Solutions
                                        </Link>
                                    </div>
                                </div>
                                <div className="ea-hero-visual">
                                    <div className="ea-visual-container">
                                        <div className="ea-visual-core">
                                            <div className="ea-visual-core-inner"><Archive size={28} /></div>
                                            <div className="ea-visual-ring"></div>
                                            <div className="ea-visual-ring ea-ring-2"></div>
                                        </div>
                                        <div className="ea-vnode ea-vn-1"><Server size={16} /><span>App Retire</span></div>
                                        <div className="ea-vnode ea-vn-2"><Database size={16} /><span>Database</span></div>
                                        <div className="ea-vnode ea-vn-3"><Mail size={16} /><span>Email</span></div>
                                        <div className="ea-vnode ea-vn-4"><HardDrive size={16} /><span>File</span></div>
                                        <svg className="ea-visual-lines" viewBox="0 0 380 380">
                                            <line x1="190" y1="190" x2="190" y2="35" className="ea-conn-line" />
                                            <line x1="190" y1="190" x2="340" y2="190" className="ea-conn-line" />
                                            <line x1="190" y1="190" x2="190" y2="345" className="ea-conn-line" />
                                            <line x1="190" y1="190" x2="40" y2="190" className="ea-conn-line" />
                                            <line x1="190" y1="35" x2="340" y2="190" className="ea-conn-ring" />
                                            <line x1="340" y1="190" x2="190" y2="345" className="ea-conn-ring" />
                                            <line x1="190" y1="345" x2="40" y2="190" className="ea-conn-ring" />
                                            <line x1="40" y1="190" x2="190" y2="35" className="ea-conn-ring" />
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
                                        <span className="section-tag">Enterprise Archiving</span>
                                        <h2 className="platform-title">TechModulus Enterprise Archiving</h2>
                                        <p className="platform-subtitle">Complete Suite of Cloud-Native Archiving Applications</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="platform-features">
                                        <div className="pf-feat"><Check size={18} /> Application Retirement</div>
                                        <div className="pf-feat"><Check size={18} /> Database Archiving</div>
                                        <div className="pf-feat"><Check size={18} /> Email Archiving</div>
                                        <div className="pf-feat"><Check size={18} /> File Archiving</div>
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
                                <h3 className="solution-title">Data Growth Solution For All Enterprise Data</h3>
                                <div className="solution-content">
                                    <p>TechModulus Enterprise Archiving is a complete suite of archiving applications including Application Retirement, Database Archiving, Email Archiving and File Archiving to manage enterprise data growth.</p>
                                    <p>For as long as the enterprise has or will endure, the one constant is the ever growing creation of new data. New and existing digital processes, compliance, and IT modernization continue to challenge our ability to manage data growth simply and efficiently.</p>
                                    <p>The vast majority of enterprise data is older than two years, yet is rarely accessed by the organization. Our comprehensive solution helps you manage this data intelligently while reducing costs and maintaining compliance.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diagram */}
                    <section className="diagram-section">
                        <div className="container">
                            <div className="diagram-wrapper">
                                <div className="diagram-label">
                                    <span>Architecture Overview</span>
                                </div>
                                <div className="diagram-card">
                                    <img src="/assets/images/enterprise-archiving.svg" alt="Enterprise Archiving Architecture" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Components */}
                    <section className="components-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Complete Suite</span>
                                <h2 className="section-title">Archiving Components</h2>
                                <p className="section-sub">Everything you need to manage enterprise data growth in one unified platform</p>
                            </div>
                            <div className="comp-grid">
                                <div className="comp-card">
                                    <div className="comp-icon"><Server size={28} /></div>
                                    <h4>Application Retirement</h4>
                                    <p>Safely retire legacy applications while maintaining access to historical data for compliance and business needs.</p>
                                    <ul className="comp-list">
                                        <li>Decommission legacy systems</li>
                                        <li>Maintain data accessibility</li>
                                        <li>Reduce infrastructure costs</li>
                                    </ul>
                                </div>
                                <div className="comp-card">
                                    <div className="comp-icon"><Database size={28} /></div>
                                    <h4>Database Archiving</h4>
                                    <p>Archive inactive database records to low-cost storage while maintaining full query access and compliance.</p>
                                    <ul className="comp-list">
                                        <li>Improve database performance</li>
                                        <li>Reduce licensing costs</li>
                                        <li>Ensure data governance</li>
                                    </ul>
                                </div>
                                <div className="comp-card">
                                    <div className="comp-icon"><Mail size={28} /></div>
                                    <h4>Email Archiving</h4>
                                    <p>Capture, index, and archive email communications for compliance, e-discovery, and storage optimization.</p>
                                    <ul className="comp-list">
                                        <li>Compliance ready archiving</li>
                                        <li>Fast e-discovery search</li>
                                        <li>Reduce mailbox bloat</li>
                                    </ul>
                                </div>
                                <div className="comp-card">
                                    <div className="comp-icon"><HardDrive size={28} /></div>
                                    <h4>File Archiving</h4>
                                    <p>Migrate and archive unstructured file data from file servers and content management systems.</p>
                                    <ul className="comp-list">
                                        <li>File server optimization</li>
                                        <li>Intelligent tiering</li>
                                        <li>Content governance</li>
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
                                    <h2 className="section-title">Why Enterprise Archiving?</h2>
                                </div>
                                <p className="benefits-header-text">Discover the tangible benefits of implementing a unified enterprise archiving solution.</p>
                            </div>
                            <div className="benefits-grid">
                                <div className="benefit-card">
                                    <div className="benefit-icon"><TrendingUp size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Cost Reduction</h5>
                                        <p>Reduce storage and infrastructure costs by up to 70% with intelligent archiving</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><Zap size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Improved Performance</h5>
                                        <p>Boost application and database performance by removing historical data</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><ShieldCheck size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Compliance Ready</h5>
                                        <p>Meet regulatory requirements with built-in retention and audit capabilities</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><Lock size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Data Security</h5>
                                        <p>Enterprise-grade encryption and access controls for all archived data</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><Clock size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>24/7 Accessibility</h5>
                                        <p>Universal access to archived data through search, reports, and queries</p>
                                    </div>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon"><BarChart3 size={26} /></div>
                                    <div className="benefit-content">
                                        <h5>Unified Management</h5>
                                        <p>Single console to manage all archiving activities across the enterprise</p>
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
                                                    <option value="Enterprise Archiving">Enterprise Archiving</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="AI Governance">AI Governance</option>
                                                    <option value="Data Management">Data Management</option>
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
                .ea-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 120px;
                    position: relative; overflow: hidden;
                }
                .ea-hero::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: eaShimmer 3s ease infinite;
                }
                @keyframes eaShimmer { 0%{background-position:200% 0}100%{background-position:-200% 0} }
                .ea-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
                .ea-hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
                .ea-orb-1 { width:450px; height:450px; background:rgba(0,139,249,0.08); top:-15%; right:-5%; animation:eaFloat 8s ease-in-out infinite; }
                .ea-orb-2 { width:300px; height:300px; background:rgba(0,212,255,0.06); bottom:-10%; left:10%; animation:eaFloat 10s ease-in-out infinite reverse; }
                @keyframes eaFloat { 0%,100%{transform:translate(0,0)}50%{transform:translate(15px,-15px)} }
                .ea-hero-grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(0,139,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,249,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent);
                }
                .ea-hero-inner {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 60px; align-items: center;
                    position: relative; z-index: 2;
                }
                .ea-badge-wrap { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
                .ea-hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1); border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px; border-radius: 50px;
                    font-size: 12px; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 2px; white-space: nowrap;
                }
                .ea-badge-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(0,139,249,0.3), transparent); }
                .ea-hero-title {
                    font-size: clamp(2.2rem, 4.5vw, 3rem);
                    font-weight: 800; color: #fff; line-height: 1.15;
                    margin-bottom: 22px; letter-spacing: -0.02em;
                }
                .ea-hero-title span {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .ea-hero-desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.65);
                    line-height: 1.75; max-width: 520px; margin-bottom: 24px;
                }
                .ea-hero-features { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px; }
                .ea-hero-feat {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.88rem; color: rgba(255,255,255,0.7); font-weight: 500;
                }
                .ea-hero-feat :global(svg) { color: #4db8ff; }
                .ea-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .ea-btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 15px 30px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all .3s;
                }
                .ea-btn-outline:hover { border-color: rgba(0,139,249,0.5); color: #4db8ff; background: rgba(0,139,249,0.05); }

                /* Hero Visual */
                .ea-hero-visual { display: flex; align-items: center; justify-content: center; }
                .ea-visual-container { position: relative; width: 380px; height: 380px; }
                .ea-visual-lines { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
                .ea-conn-line { stroke: rgba(0,139,249,0.2); stroke-width: 1; stroke-dasharray: 6 4; animation: eaDash 15s linear infinite; }
                .ea-conn-ring { stroke: rgba(0,139,249,0.1); stroke-width: 1; stroke-dasharray: 4 6; animation: eaDash 20s linear infinite; }
                @keyframes eaDash { to { stroke-dashoffset: -100; } }
                .ea-visual-core {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;
                }
                .ea-visual-core-inner {
                    width: 76px; height: 76px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .ea-visual-ring {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 76px; height: 76px; border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%; animation: eaPulse 3s ease-out infinite;
                }
                .ea-ring-2 { animation-delay: 1.5s; }
                @keyframes eaPulse { 0%{width:76px;height:76px;opacity:0.6}100%{width:190px;height:190px;opacity:0} }
                .ea-vnode {
                    position: absolute; display: flex; align-items: center; gap: 7px;
                    background: rgba(10,22,40,0.85); border: 1px solid rgba(0,139,249,0.25);
                    padding: 9px 14px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap; font-size: 0.78rem; font-weight: 600;
                    backdrop-filter: blur(8px); z-index: 2; transition: all 0.3s;
                }
                .ea-vnode:hover { background: rgba(0,139,249,0.15); border-color: rgba(0,139,249,0.5); box-shadow: 0 0 20px rgba(0,139,249,0.4); }
                .ea-vnode span { color: rgba(255,255,255,0.8); }
                .ea-vnode :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .ea-vn-1 { top: 10px; left: 50%; transform: translateX(-50%); }
                .ea-vn-2 { top: 50%; right: 0; transform: translateY(-50%); }
                .ea-vn-3 { bottom: 10px; left: 50%; transform: translateX(-50%); }
                .ea-vn-4 { top: 50%; left: 0; transform: translateY(-50%); }

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

                /* ===== DIAGRAM ===== */
                .diagram-section { padding: 80px 0; background: #fff; }
                .diagram-wrapper { max-width: 1300px; margin: 0 auto; }
                .diagram-label { text-align: center; margin-bottom: 32px; }
                .diagram-label span {
                    display: inline-block;
                    font-size: 13px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2px;
                    color: #64748b;
                    background: #f1f5f9; padding: 8px 20px;
                    border-radius: 50px;
                }
                .diagram-card {
                    background: #fff; border-radius: 24px;
                    padding: 52px 48px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.06);
                }
                .diagram-card img { width: 100%; height: auto; display: block; }

                /* ===== COMPONENTS ===== */
                .components-section { padding: 90px 0; background: #f8fafc; }
                .comp-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 28px;
                }
                .comp-card {
                    background: #fff; padding: 36px; border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .comp-card:hover {
                    border-color: #008BF9;
                    box-shadow: 0 16px 40px rgba(0,139,249,0.1);
                    transform: translateY(-6px);
                }
                .comp-icon {
                    width: 64px; height: 64px; border-radius: 14px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 22px;
                    box-shadow: 0 8px 20px rgba(0,139,249,0.25);
                }
                .comp-card h4 {
                    font-size: 1.25rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 12px;
                }
                .comp-card p {
                    font-size: 0.95rem; color: #64748b;
                    line-height: 1.7; margin-bottom: 18px;
                }
                .comp-list {
                    margin: 0; padding: 0; list-style: none;
                }
                .comp-list li {
                    font-size: 0.9rem; color: #475569;
                    padding: 6px 0; padding-left: 20px;
                    position: relative;
                    list-style: none;
                }
                .comp-list li::before {
                    content: '✓'; position: absolute;
                    left: 0; color: #008BF9; font-weight: 700;
                }
                .comp-list li::marker { display: none; }

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
                    .ea-hero { padding: 120px 0 80px; }
                    .ea-hero-inner { grid-template-columns: 1fr; gap: 40px; }
                    .ea-hero-visual { display: none; }
                    .platform-content { padding-right: 0; margin-bottom: 32px; }
                    .platform-features { padding-left: 20px; grid-template-columns: 1fr; }
                    .comp-grid { grid-template-columns: 1fr; }
                    .benefits-header { flex-direction: column; align-items: flex-start; gap: 20px; }
                    .benefits-header-text { text-align: left; max-width: 100%; }
                    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
                    .cta-content { padding: 48px 32px; }
                }
                @media (max-width: 576px) {
                    .ea-hero { padding: 110px 0 60px; }
                    .ea-hero-features { flex-direction: column; gap: 10px; }
                    .ea-hero-actions { flex-direction: column; }
                    .ea-hero-actions a { width: 100%; justify-content: center; }
                    .solution-content { padding: 28px; }
                    .diagram-card { padding: 24px; border-radius: 16px; }
                    .comp-card { padding: 28px; }
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
