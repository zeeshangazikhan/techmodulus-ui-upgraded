import Link from "next/link"
import { useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Brain, Cpu, BarChart3, Workflow, Zap, TrendingUp, ArrowRight, Check, Cog, Bot, Database, LineChart, Target, Rocket, Users, Shield, Phone, Mail, CheckCircle2 } from "lucide-react"

export default function ServiceEnterpriseAI() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'Enterprise AI',
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
        setFormData({ name: '', email: '', mobile: '', service: 'Enterprise AI', message: '' })
    }
    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* Hero */}
                    <section className="eai-hero">
                        <div className="eai-hero-bg-elements">
                            <div className="eai-hero-orb eai-hero-orb-1"></div>
                            <div className="eai-hero-orb eai-hero-orb-2"></div>
                            <div className="eai-hero-grid-pattern"></div>
                        </div>
                        <div className="container">
                            <div className="eai-hero-inner">
                                <div className="eai-hero-content">
                                    <div className="eai-hero-badge-wrap">
                                        <span className="eai-hero-badge"><Brain size={14} /> Enterprise AI</span>
                                        <span className="eai-hero-badge-line"></span>
                                    </div>
                                    <h1 className="eai-hero-title">Unlock Enterprise Value with <span>Intelligent AI</span> Solutions</h1>
                                    <p className="eai-hero-desc">Transform your organization with production-ready AI that drives automation, generates insights, and powers intelligent decision-making at scale.</p>
                                    <div className="eai-hero-stats">
                                        <div className="eai-hero-stat">
                                            <span className="eai-stat-num">40%</span>
                                            <span className="eai-stat-label">Cost Reduction</span>
                                        </div>
                                        <div className="eai-hero-stat-divider"></div>
                                        <div className="eai-hero-stat">
                                            <span className="eai-stat-num">3x</span>
                                            <span className="eai-stat-label">Faster Decisions</span>
                                        </div>
                                        <div className="eai-hero-stat-divider"></div>
                                        <div className="eai-hero-stat">
                                            <span className="eai-stat-num">98%</span>
                                            <span className="eai-stat-label">Accuracy Rate</span>
                                        </div>
                                    </div>
                                    <div className="eai-hero-actions">

                                        <Link href="/service-enterprise-intelligence" className="eai-btn-outline">
                                            Back to Services
                                        </Link>
                                    </div>
                                </div>
                                <div className="eai-hero-visual">
                                    <div className="eai-neural-container">
                                        {/* Central brain node */}
                                        <div className="eai-neural-core">
                                            <div className="eai-neural-core-inner">
                                                <Brain size={32} />
                                            </div>
                                            <div className="eai-neural-pulse"></div>
                                            <div className="eai-neural-pulse eai-neural-pulse-2"></div>
                                        </div>
                                        {/* Orbiting nodes */}
                                        <div className="eai-orbit eai-orbit-1">
                                            <div className="eai-orbit-node eai-orbit-node-1">
                                                <Cpu size={18} />
                                                <span>ML Models</span>
                                            </div>
                                        </div>
                                        <div className="eai-orbit eai-orbit-2">
                                            <div className="eai-orbit-node eai-orbit-node-2">
                                                <Database size={18} />
                                                <span>Data Lake</span>
                                            </div>
                                        </div>
                                        <div className="eai-orbit eai-orbit-3">
                                            <div className="eai-orbit-node eai-orbit-node-3">
                                                <BarChart3 size={18} />
                                                <span>Analytics</span>
                                            </div>
                                        </div>
                                        <div className="eai-orbit eai-orbit-4">
                                            <div className="eai-orbit-node eai-orbit-node-4">
                                                <Shield size={18} />
                                                <span>Governance</span>
                                            </div>
                                        </div>
                                        <div className="eai-orbit eai-orbit-5">
                                            <div className="eai-orbit-node eai-orbit-node-5">
                                                <Workflow size={18} />
                                                <span>Automation</span>
                                            </div>
                                        </div>
                                        <div className="eai-orbit eai-orbit-6">
                                            <div className="eai-orbit-node eai-orbit-node-6">
                                                <Bot size={18} />
                                                <span>NLP</span>
                                            </div>
                                        </div>
                                        {/* Connection lines */}
                                        <svg className="eai-neural-connections" viewBox="0 0 400 400">
                                            <line x1="200" y1="200" x2="200" y2="50" className="eai-conn-line" />
                                            <line x1="200" y1="200" x2="340" y2="120" className="eai-conn-line" />
                                            <line x1="200" y1="200" x2="340" y2="280" className="eai-conn-line" />
                                            <line x1="200" y1="200" x2="200" y2="350" className="eai-conn-line" />
                                            <line x1="200" y1="200" x2="60" y2="280" className="eai-conn-line" />
                                            <line x1="200" y1="200" x2="60" y2="120" className="eai-conn-line" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AI-Ready Data Platform */}
                    <section className="data-platform-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="dp-content">
                                        <span className="section-tag">Enterprise AI</span>
                                        <h2 className="dp-title">AI-Ready Fourth-Generation Data Platform</h2>
                                        <p className="dp-subtitle">Unifying Generative AI, Governance, and Enterprise Analytics</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="dp-features">
                                        <div className="dp-feat"><Check size={18} /> Real-time Data Access</div>
                                        <div className="dp-feat"><Check size={18} /> Enterprise-Grade Security</div>
                                        <div className="dp-feat"><Check size={18} /> Scalable Infrastructure</div>
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
                                    <Database size={20} />
                                    <span>The Solution</span>
                                </div>
                                <h3 className="solution-title">Information Architecture for Enterprise AI</h3>
                                <div className="solution-content">
                                    <p>Data is the critical foundation for successful AI adoption by enabling models to deliver accurate, scalable, and reliable results. Enterprise AI ready data must be clean, governed, and well-integrated datasets that are accessible in real-time and aligned with business needs.</p>
                                    <p>Enterprises struggle when data remains siloed, incomplete, or poorly structured—leading to failed AI initiatives. Organizations that prioritize data readiness for AI will consistently achieve higher ROI, faster deployment cycles, and stronger productivity gains from their AI investments.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diagram - SVG */}
                    <section className="diagram-section">
                        <div className="diagram-wrapper">
                            <div className="diagram-label">
                                <span>Architecture Overview</span>
                            </div>
                            <div className="diagram-card-fullwidth">
                                <img src="/assets/images/enterprise-ai-1.svg" alt="Enterprise AI Architecture" />
                            </div>
                        </div>
                    </section>

                    {/* Overview */}
                    <section className="overview-section">
                        <div className="container">
                            <div className="overview-wrapper">
                                <div className="overview-left">
                                    <span className="section-tag">Overview</span>
                                    <h2 className="section-title">Why Enterprise AI?</h2>
                                    <div className="overview-decoration">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                                <div className="overview-right">
                                    <p className="lead-text">Enterprise AI goes beyond basic automation. It's about embedding <strong>intelligent capabilities</strong> across every function — from operations and finance to customer experience and supply chain.</p>
                                    <p className="body-text">Our approach delivers AI solutions that are production-ready, scalable, and aligned to your specific business outcomes. We handle the complexity so you can focus on results.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Capabilities */}
                    <section className="capabilities-section">
                        <div className="container">
                            <div className="text-center section-header">
                                <span className="section-tag">Capabilities</span>
                                <h2 className="section-title">AI Solutions We Deliver</h2>
                                <p className="section-sub">End-to-end AI capabilities tailored to enterprise requirements</p>
                            </div>
                            <div className="cap-grid">
                                <div className="cap-card">
                                    <div className="cap-num">01</div>
                                    <div className="cap-icon"><Bot size={28} /></div>
                                    <h4>Machine Learning</h4>
                                    <p>Custom ML models for prediction, classification, and pattern recognition tailored to your data and domain.</p>
                                </div>
                                <div className="cap-card">
                                    <div className="cap-num">02</div>
                                    <div className="cap-icon"><Cpu size={28} /></div>
                                    <h4>Natural Language Processing</h4>
                                    <p>Extract insights from unstructured text, automate document processing, and power conversational AI.</p>
                                </div>
                                <div className="cap-card">
                                    <div className="cap-num">03</div>
                                    <div className="cap-icon"><LineChart size={28} /></div>
                                    <h4>Predictive Analytics</h4>
                                    <p>Forecast trends, anticipate risks, and identify opportunities with AI-driven predictive models.</p>
                                </div>
                                <div className="cap-card">
                                    <div className="cap-num">04</div>
                                    <div className="cap-icon"><Workflow size={28} /></div>
                                    <h4>Process Automation</h4>
                                    <p>Intelligent automation for repetitive tasks, workflows, and business processes with AI at the core.</p>
                                </div>
                                <div className="cap-card">
                                    <div className="cap-num">05</div>
                                    <div className="cap-icon"><Database size={28} /></div>
                                    <h4>Data Engineering</h4>
                                    <p>Build robust data pipelines and infrastructure that fuel reliable AI models at enterprise scale.</p>
                                </div>
                                <div className="cap-card">
                                    <div className="cap-num">06</div>
                                    <div className="cap-icon"><Cog size={28} /></div>
                                    <h4>MLOps & Deployment</h4>
                                    <p>Production-grade model deployment, monitoring, and continuous improvement frameworks.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits - Value Showcase */}
                    <section className="val-section">
                        <div className="container">
                            <div className="val-header">
                                <span className="section-tag">Business Impact</span>
                                <h2 className="section-title">How Enterprise AI Drives Value</h2>
                                <p className="section-sub">Discover the tangible outcomes that come from implementing enterprise-grade AI solutions across your organization.</p>
                            </div>
                            <div className="val-showcase">
                                <div className="val-timeline-line"></div>
                                <div className="val-item val-item-left">
                                    <div className="val-item-content">
                                        <div className="val-item-icon"><Zap size={22} /></div>
                                        <div className="val-item-body">
                                            <div className="val-item-metric">Up to 40%</div>
                                            <h4>Operational Efficiency</h4>
                                            <p>Automate manual processes and reduce operational costs with intelligent AI-powered workflows and decision systems.</p>
                                        </div>
                                    </div>
                                    <div className="val-item-dot"><span></span></div>
                                </div>
                                <div className="val-item val-item-right">
                                    <div className="val-item-dot"><span></span></div>
                                    <div className="val-item-content">
                                        <div className="val-item-icon"><TrendingUp size={22} /></div>
                                        <div className="val-item-body">
                                            <div className="val-item-metric">2-5x ROI</div>
                                            <h4>Revenue Growth</h4>
                                            <p>Data-driven insights that identify new opportunities, optimize pricing strategies, and unlock hidden revenue streams.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="val-item val-item-left">
                                    <div className="val-item-content">
                                        <div className="val-item-icon"><Target size={22} /></div>
                                        <div className="val-item-body">
                                            <div className="val-item-metric">Real-Time</div>
                                            <h4>Better Decisions</h4>
                                            <p>Real-time analytics and predictions for faster, smarter business decisions across every level of the organization.</p>
                                        </div>
                                    </div>
                                    <div className="val-item-dot"><span></span></div>
                                </div>
                                <div className="val-item val-item-right">
                                    <div className="val-item-dot"><span></span></div>
                                    <div className="val-item-content">
                                        <div className="val-item-icon"><Users size={22} /></div>
                                        <div className="val-item-body">
                                            <div className="val-item-metric">360° View</div>
                                            <h4>Customer Experience</h4>
                                            <p>Personalized interactions and proactive engagement at every touchpoint throughout the entire customer journey.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="val-item val-item-left">
                                    <div className="val-item-content">
                                        <div className="val-item-icon"><Rocket size={22} /></div>
                                        <div className="val-item-body">
                                            <div className="val-item-metric">3x Faster</div>
                                            <h4>Innovation Speed</h4>
                                            <p>Accelerate product development and time-to-market with AI-assisted rapid prototyping and testing tools.</p>
                                        </div>
                                    </div>
                                    <div className="val-item-dot"><span></span></div>
                                </div>
                                <div className="val-item val-item-right">
                                    <div className="val-item-dot"><span></span></div>
                                    <div className="val-item-content">
                                        <div className="val-item-icon"><Shield size={22} /></div>
                                        <div className="val-item-body">
                                            <div className="val-item-metric">99.9%</div>
                                            <h4>Risk Mitigation</h4>
                                            <p>Proactively detect fraud, compliance issues, and operational anomalies before they impact your business.</p>
                                        </div>
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
                                                    <option value="Enterprise AI">Enterprise AI</option>
                                                    <option value="Enterprise Intelligence">Enterprise Intelligence</option>
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
                .eai-hero {
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 40%, #112d52 100%);
                    padding: 150px 0 120px;
                    position: relative;
                    overflow: hidden;
                }
                .eai-hero::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #008BF9, #00d4ff, #008BF9);
                    background-size: 200% 100%;
                    animation: eaiShimmer 3s ease infinite;
                }
                @keyframes eaiShimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .eai-hero-bg-elements {
                    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
                }
                .eai-hero-orb {
                    position: absolute; border-radius: 50%; filter: blur(80px);
                }
                .eai-hero-orb-1 {
                    width: 500px; height: 500px;
                    background: rgba(0,139,249,0.08);
                    top: -20%; right: -5%;
                    animation: eaiFloat 8s ease-in-out infinite;
                }
                .eai-hero-orb-2 {
                    width: 350px; height: 350px;
                    background: rgba(0,212,255,0.06);
                    bottom: -15%; left: 10%;
                    animation: eaiFloat 10s ease-in-out infinite reverse;
                }
                @keyframes eaiFloat {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(20px, -20px); }
                }
                .eai-hero-grid-pattern {
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(0,139,249,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,139,249,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 70% 60% at 70% 50%, black, transparent);
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 70% 50%, black, transparent);
                }
                .eai-hero-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                    position: relative; z-index: 2;
                }
                .eai-hero-content { position: relative; }
                .eai-hero-badge-wrap {
                    display: flex; align-items: center; gap: 16px;
                    margin-bottom: 28px;
                }
                .eai-hero-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,139,249,0.1);
                    border: 1px solid rgba(0,139,249,0.25);
                    color: #4db8ff; padding: 8px 20px;
                    border-radius: 50px; font-size: 12px;
                    font-weight: 700; text-transform: uppercase;
                    letter-spacing: 2px; white-space: nowrap;
                }
                .eai-hero-badge-line {
                    flex: 1; height: 1px;
                    background: linear-gradient(90deg, rgba(0,139,249,0.3), transparent);
                }
                .eai-hero-title {
                    font-size: clamp(2.2rem, 4.5vw, 3.2rem);
                    font-weight: 800; color: #fff;
                    line-height: 1.15; margin-bottom: 22px;
                    letter-spacing: -0.02em;
                }
                .eai-hero-title span {
                    background: linear-gradient(135deg, #4db8ff, #00d4ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .eai-hero-desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.65);
                    line-height: 1.75; max-width: 520px; margin-bottom: 32px;
                }
                .eai-hero-stats {
                    display: flex; align-items: center; gap: 28px;
                    margin-bottom: 36px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 14px; padding: 20px 28px;
                }
                .eai-hero-stat { text-align: center; }
                .eai-stat-num {
                    display: block; font-size: 1.6rem; font-weight: 800;
                    color: #4db8ff; line-height: 1.2;
                }
                .eai-stat-label {
                    display: block; font-size: 0.78rem; color: rgba(255,255,255,0.5);
                    font-weight: 500; text-transform: uppercase;
                    letter-spacing: 0.5px; margin-top: 4px;
                }
                .eai-hero-stat-divider {
                    width: 1px; height: 36px;
                    background: rgba(255,255,255,0.1);
                }
                .eai-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
                .eai-btn-primary {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    color: #fff; padding: 15px 30px; border-radius: 10px;
                    font-weight: 700; font-size: 0.95rem;
                    text-decoration: none; transition: all .3s;
                    box-shadow: 0 4px 20px rgba(0,139,249,0.3);
                }
                .eai-btn-primary:hover {
                    transform: translateY(-2px); color: #fff;
                    box-shadow: 0 12px 32px rgba(0,139,249,0.45);
                }
                .eai-btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: rgba(255,255,255,0.85);
                    padding: 15px 30px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.15);
                    font-weight: 600; font-size: 0.95rem;
                    text-decoration: none; transition: all .3s;
                }
                .eai-btn-outline:hover {
                    border-color: rgba(0,139,249,0.5); color: #4db8ff;
                    background: rgba(0,139,249,0.05);
                }

                /* Hero Visual - Neural Network */
                .eai-hero-visual {
                    display: flex; align-items: center; justify-content: center;
                }
                .eai-neural-container {
                    position: relative; width: 400px; height: 400px;
                }
                .eai-neural-connections {
                    position: absolute; inset: 0; width: 100%; height: 100%;
                    z-index: 0;
                }
                .eai-conn-line {
                    stroke: rgba(0,139,249,0.2); stroke-width: 1;
                    stroke-dasharray: 6 4;
                    animation: eaiDash 15s linear infinite;
                }
                @keyframes eaiDash {
                    to { stroke-dashoffset: -100; }
                }
                .eai-neural-core {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 3;
                }
                .eai-neural-core-inner {
                    width: 80px; height: 80px;
                    background: linear-gradient(135deg, #008BF9, #0050aa);
                    border-radius: 50%; display: flex;
                    align-items: center; justify-content: center;
                    color: #fff; position: relative; z-index: 2;
                    box-shadow: 0 0 40px rgba(0,139,249,0.4), 0 0 80px rgba(0,139,249,0.15);
                }
                .eai-neural-pulse {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px; height: 80px;
                    border: 2px solid rgba(0,139,249,0.3);
                    border-radius: 50%;
                    animation: eaiPulse 3s ease-out infinite;
                }
                .eai-neural-pulse-2 { animation-delay: 1.5s; }
                @keyframes eaiPulse {
                    0% { width: 80px; height: 80px; opacity: 0.6; }
                    100% { width: 200px; height: 200px; opacity: 0; }
                }

                /* Orbit nodes */
                .eai-orbit-node {
                    position: absolute;
                    display: flex; align-items: center; gap: 8px;
                    background: rgba(10, 22, 40, 0.85);
                    border: 1px solid rgba(0,139,249,0.25);
                    padding: 10px 16px; border-radius: 10px;
                    color: #4db8ff; white-space: nowrap;
                    font-size: 0.8rem; font-weight: 600;
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    z-index: 2;
                    transition: all 0.3s ease;
                }
                .eai-orbit-node:hover {
                    background: rgba(0,139,249,0.15);
                    border-color: rgba(0,139,249,0.5);
                    box-shadow: 0 0 20px rgba(0,139,249,0.4);
                }
                .eai-orbit-node span { color: rgba(255,255,255,0.8); }
                .eai-orbit-node :global(svg) { color: #4db8ff; flex-shrink: 0; }
                .eai-orbit-node-1 { top: 15px; left: 50%; transform: translateX(-50%); }
                .eai-orbit-node-2 { top: 85px; right: 5px; }
                .eai-orbit-node-3 { top: 235px; right: 5px; }
                .eai-orbit-node-4 { bottom: 15px; left: 50%; transform: translateX(-50%); }
                .eai-orbit-node-5 { top: 235px; left: 5px; }
                .eai-orbit-node-6 { top: 85px; left: 5px; }

                /* ===== COMMON ===== */
                .section-tag {
                    display: inline-block;
                    color: #008BF9;
                    font-size: 12px; font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 12px;
                    background: rgba(0,139,249,0.08);
                    padding: 6px 14px;
                    border-radius: 4px;
                }
                .section-tag.light { 
                    color: #008BF9; 
                    background: rgba(0,139,249,0.15);
                }
                .section-title {
                    font-size: clamp(1.75rem, 3.5vw, 2.4rem);
                    font-weight: 800; color: #0F3567;
                    line-height: 1.2; margin-bottom: 16px;
                }
                .section-title.light { color: #fff; }
                .section-sub {
                    font-size: 1.05rem; color: #64748b;
                    max-width: 580px; margin: 0 auto;
                    line-height: 1.7;
                }
                .section-header { margin-bottom: 56px; }

                /* ===== DATA PLATFORM ===== */
                .data-platform-section { 
                    padding: 70px 0; 
                    background: linear-gradient(135deg, #f8fafc 0%, #fff 100%);
                    border-bottom: 1px solid #e2e8f0;
                }
                .dp-content { padding-right: 30px; }
                .dp-title {
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 800; color: #0F3567;
                    line-height: 1.25; margin-bottom: 12px;
                }
                .dp-subtitle {
                    font-size: 1.1rem; color: #64748b;
                    font-weight: 500; line-height: 1.6;
                }
                .dp-features { 
                    display: flex; flex-direction: column; gap: 14px;
                    padding-left: 30px;
                    border-left: 3px solid #008BF9;
                }
                .dp-feat {
                    display: flex; align-items: center; gap: 12px;
                    font-size: 1rem; font-weight: 600; color: #0F3567;
                }
                .dp-feat :global(svg) { color: #008BF9; }

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

                /* ===== DIAGRAM - HTML/CSS ===== */
                .diagram-section { padding: 90px 0; background: #fff; }
                .diagram-wrapper { max-width: 1300px; margin: 0 auto; padding: 0 40px; }
                .diagram-label {
                    text-align: center; margin-bottom: 40px;
                }
                .diagram-label span {
                    display: inline-block;
                    font-size: 13px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 2px;
                    color: #64748b; background: #f1f5f9;
                    padding: 8px 20px; border-radius: 50px;
                }
                .diagram-card-fullwidth {
                    overflow-x: auto;
                }
                .diagram-card-fullwidth img {
                    width: 100%; height: auto; display: block;
                }

                /* ===== OVERVIEW ===== */
                .overview-section { 
                    padding: 90px 0; 
                    background: #0F3567;
                    position: relative;
                    overflow: hidden;
                }
                .overview-section::before {
                    content: '';
                    position: absolute;
                    top: 0; right: 0;
                    width: 40%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(0,139,249,0.05));
                }
                .overview-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                    align-items: center;
                    position: relative; z-index: 1;
                }
                .overview-left .section-tag { background: rgba(0,139,249,0.2); }
                .overview-left .section-title { color: #fff; margin-bottom: 20px; }
                .overview-decoration {
                    display: flex; gap: 8px;
                }
                .overview-decoration span {
                    width: 40px; height: 4px;
                    background: #008BF9; border-radius: 2px;
                }
                .overview-decoration span:nth-child(2) { width: 20px; opacity: 0.6; }
                .overview-decoration span:nth-child(3) { width: 10px; opacity: 0.3; }
                .overview-right {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    padding: 36px;
                }
                .lead-text { 
                    font-size: 1.15rem; color: rgba(255,255,255,0.95); 
                    line-height: 1.75; margin-bottom: 18px;
                }
                .lead-text strong { color: #008BF9; }
                .body-text { 
                    font-size: 1rem; color: rgba(255,255,255,0.7); 
                    line-height: 1.75; margin: 0;
                }

                /* ===== CAPABILITIES ===== */
                .capabilities-section { padding: 90px 0; background: #f8fafc; }
                .cap-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .cap-card {
                    background: #fff; padding: 36px 30px; border-radius: 16px;
                    border: 1px solid #e2e8f0; 
                    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }
                .cap-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px; background: #008BF9;
                    transform: scaleX(0);
                    transition: transform .4s;
                }
                .cap-card:hover::before { transform: scaleX(1); }
                .cap-card:hover {
                    border-color: transparent;
                    box-shadow: 0 20px 40px rgba(0,139,249,0.12);
                    transform: translateY(-8px);
                }
                .cap-num {
                    position: absolute;
                    top: 20px; right: 24px;
                    font-size: 3rem; font-weight: 900;
                    color: #f1f5f9;
                    line-height: 1;
                }
                .cap-icon {
                    width: 64px; height: 64px; border-radius: 14px;
                    background: linear-gradient(135deg, #008BF9 0%, #0070cc 100%);
                    display: flex; align-items: center; justify-content: center;
                    color: #fff; margin-bottom: 22px;
                    box-shadow: 0 8px 20px rgba(0,139,249,0.25);
                }
                .cap-card h4 {
                    font-size: 1.2rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 12px;
                }
                .cap-card p { 
                    font-size: 0.95rem; color: #64748b; 
                    line-height: 1.7; margin: 0;
                }

                /* ===== VALUE SHOWCASE (Timeline) ===== */
                .val-section {
                    padding: 100px 0;
                    background: linear-gradient(180deg, #f8fafc 0%, #fff 50%, #f8fafc 100%);
                }
                .val-header {
                    text-align: center; margin-bottom: 70px;
                }
                .val-showcase {
                    position: relative; max-width: 900px; margin: 0 auto;
                }
                .val-timeline-line {
                    position: absolute;
                    left: 50%; top: 0; bottom: 0;
                    width: 2px;
                    background: linear-gradient(180deg, transparent, #008BF9 10%, #008BF9 90%, transparent);
                    transform: translateX(-50%);
                }
                .val-item {
                    display: flex; align-items: center;
                    margin-bottom: 24px; position: relative;
                }
                .val-item:last-child { margin-bottom: 0; }
                .val-item-left { justify-content: flex-end; padding-right: calc(50% + 40px); }
                .val-item-right { justify-content: flex-start; padding-left: calc(50% + 40px); }
                .val-item-left .val-item-dot { position: absolute; left: 50%; transform: translateX(-50%); }
                .val-item-right .val-item-dot { position: absolute; left: 50%; transform: translateX(-50%); }
                .val-item-dot {
                    width: 18px; height: 18px;
                    background: #fff; border: 3px solid #008BF9;
                    border-radius: 50%; z-index: 2;
                    display: flex; align-items: center; justify-content: center;
                }
                .val-item-dot span {
                    width: 6px; height: 6px;
                    background: #008BF9; border-radius: 50%;
                }
                .val-item-content {
                    display: flex; align-items: flex-start; gap: 18px;
                    background: #fff; border: 1px solid #e2e8f0;
                    border-radius: 16px; padding: 28px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
                    max-width: 400px;
                }
                .val-item-content:hover {
                    border-color: #008BF9;
                    box-shadow: 0 16px 40px rgba(0,139,249,0.1);
                    transform: translateY(-4px);
                }
                .val-item-icon {
                    width: 48px; height: 48px; min-width: 48px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    border-radius: 12px; display: flex;
                    align-items: center; justify-content: center;
                    color: #fff;
                    box-shadow: 0 4px 14px rgba(0,139,249,0.25);
                }
                .val-item-body { flex: 1; }
                .val-item-metric {
                    display: inline-block;
                    font-size: 0.75rem; font-weight: 800;
                    color: #008BF9; background: rgba(0,139,249,0.08);
                    padding: 3px 10px; border-radius: 6px;
                    text-transform: uppercase; letter-spacing: 0.5px;
                    margin-bottom: 8px;
                }
                .val-item-body h4 {
                    font-size: 1.08rem; font-weight: 700;
                    color: #0F3567; margin-bottom: 8px;
                }
                .val-item-body p {
                    font-size: 0.9rem; color: #64748b;
                    line-height: 1.65; margin: 0;
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
                @media (max-width: 1199px) {
                    .eai-hero-inner { grid-template-columns: 1fr; gap: 40px; }
                    .eai-hero-visual { display: none; }
                    .eai-hero-desc { max-width: 100%; }
                    .arch-diagram { padding: 48px 60px; }
                }
                @media (max-width: 991px) {
                    .eai-hero { padding: 120px 0 80px; }
                    .dp-content { padding-right: 0; margin-bottom: 32px; }
                    .dp-features { padding-left: 20px; }
                    .overview-wrapper { grid-template-columns: 1fr; gap: 32px; }
                    .overview-decoration { margin-bottom: 24px; }
                    .cap-grid { grid-template-columns: repeat(2, 1fr); }
                    .cta-content { padding: 48px 32px; }
                    /* Timeline stacks to single column */
                    .val-timeline-line { left: 20px; }
                    .val-item-left,
                    .val-item-right {
                        padding-left: 60px; padding-right: 0;
                        justify-content: flex-start;
                    }
                    .val-item-left .val-item-dot,
                    .val-item-right .val-item-dot {
                        left: 20px;
                    }
                    .val-item-content { max-width: 100%; }
                    .diagram-wrapper { padding: 0 20px; }
                }
                @media (max-width: 576px) {
                    .eai-hero { padding: 110px 0 60px; }
                    .eai-hero-stats { flex-direction: column; gap: 16px; padding: 20px; }
                    .eai-hero-stat-divider { width: 40px; height: 1px; }
                    .data-platform-section { padding: 50px 0; }
                    .solution-content { padding: 28px; }
                    .diagram-wrapper { padding: 0 16px; }
                    .cap-grid { grid-template-columns: 1fr; }
                    .cap-card { padding: 28px 24px; }
                    .val-section { padding: 70px 0; }
                    .val-item-content { flex-direction: column; padding: 20px; }
                    .val-item-icon { margin: 0; }
                    .eai-hero-actions { flex-direction: column; }
                    .eai-hero-actions a { width: 100%; justify-content: center; }
                    .cta-content { padding: 36px 20px; border-radius: 16px; }
                    .cta-actions { flex-direction: column; }
                    .cta-actions a { width: 100%; justify-content: center; }
                }
            `}</style>
        </>
    )
}
