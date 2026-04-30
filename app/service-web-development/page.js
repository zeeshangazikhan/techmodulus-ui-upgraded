'use client'

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { portfolioProjects } from "@/util/portfolioData"
import { Code2, Globe, Zap, Shield, ArrowRight, Check, Layers, Database, Smartphone, Award, Monitor, Server, Rocket, Target, CheckCircle2, Sparkles, MousePointer, PenTool, Cpu, Cloud, Heart, Send, Phone, Mail, User, MessageSquare, Briefcase, Users, Star, Play, ChevronDown } from "lucide-react"

export default function ServiceWebDevelopment() {
    const [activeTab, setActiveTab] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'Web Development',
        message: ''
    })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [visibleSections, setVisibleSections] = useState({})

    const webProjects = portfolioProjects.filter(p => p.categoryType.includes('web')).slice(0, 6)

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: 'Web Development', message: '' })
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }))
                }
            })
        }, { threshold: 0.15 })

        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const techStack = {
        frontend: [
            { name: "React.js", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "Vue.js", icon: "💚" },
            { name: "Angular", icon: "🅰️" },
            { name: "TypeScript", icon: "📘" },
            { name: "Tailwind CSS", icon: "🎨" },
        ],
        backend: [
            { name: "Node.js", icon: "💚" },
            { name: "Python", icon: "🐍" },
            { name: "PHP", icon: "🐘" },
            { name: "Java", icon: "☕" },
            { name: ".NET", icon: "🔷" },
            { name: "Go", icon: "🔵" },
        ],
        database: [
            { name: "MongoDB", icon: "🍃" },
            { name: "PostgreSQL", icon: "🐘" },
            { name: "MySQL", icon: "🐬" },
            { name: "Redis", icon: "🔴" },
            { name: "Firebase", icon: "🔥" },
            { name: "AWS", icon: "☁️" },
        ]
    }

    const services = [
        { icon: <Globe size={28} />, title: "Custom Web Apps", desc: "Tailored web applications built from scratch to meet your unique business requirements and drive growth.", color: "#008BF9" },
        { icon: <Smartphone size={28} />, title: "Responsive Design", desc: "Pixel-perfect designs that look stunning and work flawlessly across all devices and screen sizes.", color: "#008BF9" },
        { icon: <Layers size={28} />, title: "E-Commerce Solutions", desc: "Powerful online stores with secure payment gateways and seamless user checkout experiences.", color: "#008BF9" },
        { icon: <Cpu size={28} />, title: "Progressive Web Apps", desc: "Native-like experiences with offline support, push notifications and lightning-fast performance.", color: "#008BF9" },
        { icon: <Cloud size={28} />, title: "Cloud Integration", desc: "Scalable cloud solutions with CI/CD pipelines, automated deployment and 99.9% uptime.", color: "#008BF9" },
        { icon: <Shield size={28} />, title: "Security & Support", desc: "Enterprise-grade security with 24/7 monitoring, SSL, firewalls and dedicated tech support.", color: "#008BF9" },
    ]

    const processSteps = [
        { num: "01", icon: <MousePointer size={24} />, title: "Discovery & Strategy", desc: "Deep dive into your vision, goals, target audience and technical requirements." },
        { num: "02", icon: <PenTool size={24} />, title: "UI/UX Design", desc: "Crafting stunning wireframes, prototypes and visual designs you'll love." },
        { num: "03", icon: <Code2 size={24} />, title: "Development", desc: "Building with clean, scalable, well-documented and test-driven code." },
        { num: "04", icon: <Rocket size={24} />, title: "Launch & Scale", desc: "Deploying, monitoring, optimizing and providing ongoing support post-launch." },
    ]

    const stats = [
        { num: "150+", label: "Projects Delivered", icon: <Rocket size={22} /> },
        { num: "50+", label: "Happy Clients", icon: <Heart size={22} /> },
        { num: "99%", label: "Client Satisfaction", icon: <Star size={22} /> },
        { num: "5+", label: "Years Experience", icon: <Award size={22} /> },
    ]

    const whyItems = [
        { icon: <Target size={26} />, title: "Goal-Oriented Approach", desc: "Every line of code serves your business objectives, ensuring maximum ROI on your investment.", highlight: "150+ Projects" },
        { icon: <Zap size={26} />, title: "Lightning Fast Performance", desc: "Optimized for speed with 90+ Google Lighthouse performance scores on every project.", highlight: "90+ Score" },
        { icon: <Shield size={26} />, title: "Security First", desc: "Enterprise-grade security baked into every project — SSL, firewalls, encryption & DDoS protection.", highlight: "A+ Grade" },
        { icon: <Users size={26} />, title: "Dedicated Team Support", desc: "24/7 dedicated team with transparent communication, regular updates and agile sprints.", highlight: "24/7 Support" },
        { icon: <Award size={26} />, title: "5+ Years of Excellence", desc: "Trusted by startups & enterprises across 10+ countries with a proven track record.", highlight: "10+ Countries" },
        { icon: <Rocket size={26} />, title: "On-Time Delivery", desc: "99% on-time delivery rate with milestone-based development and rigorous QA testing.", highlight: "99% On-Time" },
    ]

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* ==================== HERO ==================== */}
                    <section className="wdx-hero">
                        <div className="wdx-hero-bg">
                            <div className="wdx-orb wdx-orb-1"></div>
                            <div className="wdx-orb wdx-orb-2"></div>
                            <div className="wdx-orb wdx-orb-3"></div>
                            <div className="wdx-mesh"></div>
                            <div className="wdx-grid-overlay"></div>
                        </div>
                        <div className="container">
                            <div className="wdx-hero-inner">
                                <div className="wdx-hero-content">
                                    <div className="wdx-pill">
                                        <span className="wdx-pill-dot"></span>
                                        <span>Premium Web Development</span>
                                    </div>
                                    <h1 className="wdx-hero-h1">
                                        We Build <span className="wdx-gradient-text">Digital Experiences</span> That Drive Results
                                    </h1>
                                    <p className="wdx-hero-p">
                                        Transform your online presence with high-performance, scalable web solutions.
                                        From startups to enterprises — we deliver world-class websites that convert visitors into customers.
                                    </p>
                                    <div className="wdx-hero-chips">
                                        <div className="wdx-chip"><CheckCircle2 size={16} /> Clean Code</div>
                                        <div className="wdx-chip"><CheckCircle2 size={16} /> SEO Optimized</div>
                                        <div className="wdx-chip"><CheckCircle2 size={16} /> Fast & Secure</div>
                                    </div>
                                    <div className="wdx-hero-actions">
                                        <a href="#wdx-quote" className="wdx-btn-glow" onClick={(e) => { e.preventDefault(); document.getElementById('wdx-quote').scrollIntoView({ behavior: 'smooth' }) }}>
                                            <span>Get Free Quote</span>
                                            <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="wdx-hero-visual">
                                    <div className="wdx-terminal">
                                        <div className="wdx-terminal-bar">
                                            <div className="wdx-terminal-dots">
                                                <span style={{ background: '#ff5f57' }}></span>
                                                <span style={{ background: '#febc2e' }}></span>
                                                <span style={{ background: '#28c840' }}></span>
                                            </div>
                                            <span className="wdx-terminal-title">App.tsx</span>
                                        </div>
                                        <div className="wdx-terminal-body">
                                            <div className="wdx-line"><span className="wdx-ln">1</span><span className="wdx-kw">import</span> {'{'} <span className="wdx-var">useState</span> {'}'} <span className="wdx-kw">from</span> <span className="wdx-str">'react'</span></div>
                                            <div className="wdx-line"><span className="wdx-ln">2</span></div>
                                            <div className="wdx-line"><span className="wdx-ln">3</span><span className="wdx-kw">export default</span> <span className="wdx-kw">function</span> <span className="wdx-fn">App</span>() {'{'}</div>
                                            <div className="wdx-line"><span className="wdx-ln">4</span>  <span className="wdx-kw">return</span> (</div>
                                            <div className="wdx-line"><span className="wdx-ln">5</span>    {'<'}<span className="wdx-tag">Layout</span>{'>'}</div>
                                            <div className="wdx-line"><span className="wdx-ln">6</span>      {'<'}<span className="wdx-tag">Hero</span> /{'>'}</div>
                                            <div className="wdx-line"><span className="wdx-ln">7</span>      {'<'}<span className="wdx-tag">Services</span> /{'>'}</div>
                                            <div className="wdx-line"><span className="wdx-ln">8</span>      {'<'}<span className="wdx-tag">Portfolio</span> /{'>'}</div>
                                            <div className="wdx-line"><span className="wdx-ln">9</span>    {'</'}<span className="wdx-tag">Layout</span>{'>'}</div>
                                            <div className="wdx-line"><span className="wdx-ln">10</span>  )</div>
                                            <div className="wdx-line"><span className="wdx-ln">11</span>{'}'}</div>
                                        </div>
                                    </div>
                                    <div className="wdx-float wdx-float-perf">
                                        <Zap size={18} />
                                        <div><small>Performance</small><strong>98/100</strong></div>
                                    </div>
                                    <div className="wdx-float wdx-float-sec">
                                        <Shield size={18} />
                                        <div><small>Security</small><strong>A+ Grade</strong></div>
                                    </div>
                                    <div className="wdx-float wdx-float-uptime">
                                        <CheckCircle2 size={18} />
                                        <div><small>Uptime</small><strong>99.9%</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wdx-hero-scroll">
                            <ChevronDown size={20} />
                        </div>
                    </section>

                    {/* ==================== STATS SECTION ==================== */}
                    <section className="wdx-stats-modern" id="wdx-stats" data-animate>
                        <div className="wdx-stats-overlay"></div>
                        <div className="container">
                            <div className="wdx-section-head">
                                <span className="wdx-label">Our Achievement</span>
                                <h2 className="wdx-h2">Track Record <span>Speaks for Itself</span></h2>
                                <p className="wdx-subtext">Trusted by startups and enterprises worldwide</p>
                            </div>
                            <div className={`wdx-stats-grid ${visibleSections['wdx-stats'] ? 'visible' : ''}`}>
                                {stats.map((s, i) => (
                                    <div className="wdx-stat-card" key={i} style={{ '--i': i }}>
                                        <div className="wdx-stat-card-inner">
                                            <div className="wdx-stat-icon-modern">{s.icon}</div>
                                            <div className="wdx-stat-number">{s.num}</div>
                                            <div className="wdx-stat-title">{s.label}</div>
                                            <div className="wdx-stat-glow"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ==================== SERVICES ==================== */}
                    <section className="wdx-services" id="wdx-services" data-animate>
                        <div className="container">
                            <div className="wdx-section-head">
                                <span className="wdx-label">Our Services</span>
                                <h2 className="wdx-h2">Web Development <span>Solutions</span></h2>
                                <p className="wdx-subtext">Comprehensive services to power your digital success — from concept to launch and beyond</p>
                            </div>
                            <div className={`wdx-services-grid ${visibleSections['wdx-services'] ? 'visible' : ''}`}>
                                {services.map((s, i) => (
                                    <div className="wdx-svc-card" key={i} style={{ '--i': i, '--accent': s.color }}>
                                        <div className="wdx-svc-glow"></div>
                                        <div className="wdx-svc-icon">{s.icon}</div>
                                        <h3>{s.title}</h3>
                                        <p>{s.desc}</p>
                                        <div className="wdx-svc-line"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ==================== PROCESS ==================== */}
                    <section className="wdx-process" id="wdx-process" data-animate>
                        <div className="wdx-process-bg"></div>
                        <div className="container">
                            <div className="wdx-process-layout">
                                <div className="wdx-process-left">
                                    <span className="wdx-label light">How We Work</span>
                                    <h2 className="wdx-h2 light">Our Development <span>Process</span></h2>
                                    <p className="wdx-subtext light">Transparent, agile, and results-driven — our proven 4-step methodology ensures quality delivery every time.</p>
                                    <div className="wdx-process-checks">
                                        {['Transparent Communication', 'Agile Methodology', 'Regular Updates', 'Quality Assurance'].map((t, i) => (
                                            <div className="wdx-pcheck" key={i}><Check size={18} /><span>{t}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`wdx-process-right ${visibleSections['wdx-process'] ? 'visible' : ''}`}>
                                    {processSteps.map((step, i) => (
                                        <div className="wdx-step" key={i} style={{ '--i': i }}>
                                            <div className="wdx-step-num">{step.num}</div>
                                            <div className="wdx-step-icon">{step.icon}</div>
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==================== TECH STACK ==================== */}
                    <section className="wdx-tech" id="wdx-tech" data-animate>
                        <div className="container">
                            <div className="wdx-section-head">
                                <span className="wdx-label">Tech Stack</span>
                                <h2 className="wdx-h2">Technologies We <span>Master</span></h2>
                                <p className="wdx-subtext">Industry-leading technologies for modern, scalable applications</p>
                            </div>
                            <div className="wdx-tech-tabs">
                                {['Frontend', 'Backend', 'Database & Cloud'].map((tab, i) => (
                                    <button className={`wdx-tech-tab ${activeTab === i ? 'active' : ''}`} key={i} onClick={() => setActiveTab(i)}>
                                        {i === 0 && <Monitor size={16} />}
                                        {i === 1 && <Server size={16} />}
                                        {i === 2 && <Database size={16} />}
                                        <span>{tab}</span>
                                    </button>
                                ))}
                            </div>
                            <div className={`wdx-tech-grid ${visibleSections['wdx-tech'] ? 'visible' : ''}`}>
                                {Object.values(techStack)[activeTab].map((tech, i) => (
                                    <div className="wdx-tech-card" key={`${activeTab}-${i}`} style={{ '--i': i }}>
                                        <span className="wdx-tech-emoji">{tech.icon}</span>
                                        <span className="wdx-tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ==================== WHY CHOOSE ==================== */}
                    <section className="wdx-why" id="wdx-why" data-animate>
                        <div className="wdx-why-bg"></div>
                        <div className="container">
                            <div className="wdx-section-head center-white">
                                <span className="wdx-label light">Why TechModulus</span>
                                <h2 className="wdx-h2 light">Why Choose <span>TechModulus?</span></h2>
                                <p className="wdx-subtext light">Your trusted partner for digital transformation — here's what sets us apart</p>
                            </div>
                            <div className={`wdx-why-grid ${visibleSections['wdx-why'] ? 'visible' : ''}`}>
                                {whyItems.map((item, i) => (
                                    <div className="wdx-why-card" key={i} style={{ '--i': i }}>
                                        <div className="wdx-why-card-top">
                                            <div className="wdx-why-icon">{item.icon}</div>
                                            <span className="wdx-why-badge">{item.highlight}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ==================== OUR WORK (Same card style as Our Works page) ==================== */}
                    <section className="wdx-portfolio" id="wdx-portfolio" data-animate>
                        <div className="container">
                            <div className="wdx-section-head">
                                <span className="wdx-label">Portfolio</span>
                                <h2 className="wdx-h2">Our Web Development <span>Work</span></h2>
                                <p className="wdx-subtext">Real projects, real results — see what we've built for our clients</p>
                            </div>
                            <div className={`row ${visibleSections['wdx-portfolio'] ? 'wdx-visible' : ''}`}>
                                {webProjects.map((project) => {
                                    const categoryClass = project.categoryType.split(' ').map(cat => `portfolio_category-${cat}`).join(' ')
                                    return (
                                        <div key={project.id} className={`col-xl-4 col-lg-4 col-md-6 col-sm-6 wdx-port-col ${categoryClass}`}>
                                            <div className="portfolio_box type_one hover_1_get">
                                                <div className="image_box hover_1">
                                                    <img src={project.image} className="img-fluid" alt={project.title} />
                                                    <Link data-fancybox="gallery" className="zm_btn trans" href={`/portfolio/${project.slug}`}>
                                                        <span className="fi-rs-cursor-plus zoom_icon" />
                                                    </Link>
                                                    <div className="oh ho_1" />
                                                    <div className="oh ho_2" />
                                                    <div className="oh ho_3" />
                                                    <div className="oh ho_4" />
                                                </div>
                                                <div className="content_box">
                                                    <div className="content_box_in trans">
                                                        <h2 className="title_22">
                                                            <Link href={`/portfolio/${project.slug}`} rel="bookmark">
                                                                {project.title}
                                                            </Link>
                                                        </h2>
                                                        <p>{project.category}</p>
                                                        <Link href={`/portfolio/${project.slug}`} className="lnk trans">
                                                            <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="wdx-port-cta">
                                <Link href="/portfolio-style-1" className="wdx-btn-outline-dark">
                                    View All Projects <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ==================== START YOUR PROJECT ==================== */}
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
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="App Development">App Development</option>
                                                    <option value="E-Commerce Development">E-Commerce</option>
                                                    <option value="Custom Web App">Custom Web App</option>
                                                    <option value="UI/UX Design">UI/UX Design</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                    <option value="Cloud Hosting">Cloud Hosting</option>
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
                /* ======================================================
                   PREMIUM WEB DEVELOPMENT PAGE — COMPLETE STYLES
                   ====================================================== */

                /* ---------- ANIMATIONS ---------- */
                @keyframes wdxFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
                @keyframes wdxPulse { 0%,100%{transform:scale(1);opacity:.45} 50%{transform:scale(1.15);opacity:.25} }
                @keyframes wdxFadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
                @keyframes wdxGlow { 0%,100%{box-shadow:0 0 20px rgba(0,139,249,.3)} 50%{box-shadow:0 0 40px rgba(0,139,249,.5)} }
                @keyframes wdxDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
                @keyframes wdxScroll { 0%{transform:translateY(0);opacity:1} 50%{transform:translateY(8px);opacity:.4} 100%{transform:translateY(0);opacity:1} }
                @keyframes wdxSlideRight { from{transform:scaleX(0)} to{transform:scaleX(1)} }
                @keyframes wdxOrb { 0%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-20px,15px)} 100%{transform:translate(0,0)} }

                /* ---------- HERO SECTION ---------- */
                .wdx-hero {
                    position: relative;
                    padding: 170px 0 110px;
                    background: linear-gradient(165deg, #070d1a 0%, #0a1628 40%, #0d1f3c 70%, #091527 100%);
                    overflow: hidden;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                }
                .wdx-hero-bg { position:absolute; inset:0; pointer-events:none; }
                .wdx-orb { position:absolute; border-radius:50%; filter:blur(80px); }
                .wdx-orb-1 { width:600px; height:600px; background:rgba(0,139,249,.12); top:-200px; right:-100px; animation:wdxOrb 20s ease-in-out infinite; }
                .wdx-orb-2 { width:450px; height:450px; background:rgba(99,102,241,.08); bottom:-150px; left:-100px; animation:wdxOrb 15s ease-in-out infinite reverse; }
                .wdx-orb-3 { width:250px; height:250px; background:rgba(0,139,249,.1); top:40%; left:20%; animation:wdxFloat 10s ease-in-out infinite; }
                .wdx-mesh {
                    position:absolute; inset:0;
                    background-image: radial-gradient(rgba(0,139,249,.07) 1px, transparent 1px);
                    background-size: 32px 32px;
                }
                .wdx-grid-overlay {
                    position:absolute; inset:0;
                    background: linear-gradient(180deg, transparent 0%, rgba(7,13,26,.5) 100%);
                }
                .wdx-hero-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 64px;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }
                .wdx-hero-content { position:relative; }

                /* pill */
                .wdx-pill {
                    display:inline-flex; align-items:center; gap:10px;
                    background: rgba(0,139,249,.1);
                    border: 1px solid rgba(0,139,249,.25);
                    padding: 10px 22px;
                    border-radius: 50px;
                    margin-bottom: 28px;
                    backdrop-filter: blur(10px);
                }
                .wdx-pill-dot {
                    width:8px; height:8px; border-radius:50%;
                    background:#008BF9;
                    animation: wdxDot 2s ease infinite;
                }
                .wdx-pill span { color:#94b8e0; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:2px; }

                .wdx-hero-h1 {
                    font-size: clamp(2.4rem, 4.8vw, 3.6rem);
                    font-weight: 800;
                    color: #fff;
                    line-height: 1.12;
                    margin-bottom: 22px;
                    letter-spacing: -0.5px;
                }
                .wdx-gradient-text {
                    background: linear-gradient(135deg, #008BF9 0%, #6366f1 50%, #a78bfa 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .wdx-hero-p {
                    font-size: 1.1rem;
                    color: rgba(255,255,255,.6);
                    line-height: 1.8;
                    margin-bottom: 28px;
                    max-width: 520px;
                }
                .wdx-hero-chips { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:36px; }
                .wdx-chip {
                    display:flex; align-items:center; gap:7px;
                    background: rgba(255,255,255,.05);
                    border: 1px solid rgba(255,255,255,.1);
                    padding: 8px 16px;
                    border-radius: 8px;
                    color: rgba(255,255,255,.75);
                    font-size: .85rem;
                    font-weight: 500;
                    backdrop-filter: blur(4px);
                }
                .wdx-chip svg { color:#008BF9; }
                .wdx-hero-actions { display:flex; gap:16px; flex-wrap:wrap; }

                /* buttons */
                .wdx-btn-glow {
                    display:inline-flex; align-items:center; gap:10px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    color:#fff; padding:17px 34px; border-radius:14px;
                    font-weight:700; font-size:1rem; text-decoration:none;
                    transition:all .35s; position:relative; overflow:hidden;
                    box-shadow: 0 8px 32px rgba(0,139,249,.35);
                }
                .wdx-btn-glow:hover { transform:translateY(-3px); box-shadow:0 14px 40px rgba(0,139,249,.5); color:#fff; }
                .wdx-btn-glow::after {
                    content:''; position:absolute; top:-50%; left:-50%;
                    width:200%; height:200%;
                    background: linear-gradient(transparent, rgba(255,255,255,.08), transparent);
                    transform: rotate(45deg); transition: .6s;
                    opacity:0;
                }
                .wdx-btn-glow:hover::after { opacity:1; left:100%; }

                .wdx-btn-glass {
                    display:inline-flex; align-items:center; gap:10px;
                    background: rgba(255,255,255,.06);
                    border: 1px solid rgba(255,255,255,.15);
                    color:#fff; padding:16px 30px; border-radius:14px;
                    font-weight:600; font-size:1rem; text-decoration:none;
                    transition:all .3s; backdrop-filter:blur(10px);
                }
                .wdx-btn-glass:hover { background:rgba(255,255,255,.12); border-color:rgba(0,139,249,.4); color:#fff; }

                /* terminal */
                .wdx-hero-visual { position:relative; }
                .wdx-terminal {
                    background: rgba(15,23,42,.9);
                    border: 1px solid rgba(255,255,255,.08);
                    border-radius: 20px;
                    overflow: hidden;
                    backdrop-filter: blur(20px);
                    box-shadow: 0 40px 80px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.05);
                }
                .wdx-terminal-bar {
                    background: rgba(0,0,0,.4);
                    padding: 16px 20px;
                    display:flex; align-items:center; gap:16px;
                    border-bottom: 1px solid rgba(255,255,255,.06);
                }
                .wdx-terminal-dots { display:flex; gap:8px; }
                .wdx-terminal-dots span { width:12px; height:12px; border-radius:50%; }
                .wdx-terminal-title { color:rgba(255,255,255,.35); font-size:13px; font-family:'Fira Code',monospace; }
                .wdx-terminal-body { padding:24px; font-family:'Fira Code','Consolas',monospace; font-size:14px; }
                .wdx-line { display:flex; align-items:center; line-height:2; color:rgba(255,255,255,.5); }
                .wdx-ln { color:rgba(255,255,255,.15); width:28px; text-align:right; margin-right:18px; font-size:12px; user-select:none; }
                .wdx-kw { color:#c084fc; }
                .wdx-fn { color:#fbbf24; }
                .wdx-var { color:#38bdf8; }
                .wdx-str { color:#34d399; }
                .wdx-tag { color:#38bdf8; }

                /* floaters */
                .wdx-float {
                    position:absolute; background:rgba(255,255,255,.95);
                    border-radius:14px; padding:12px 18px;
                    display:flex; align-items:center; gap:12px;
                    box-shadow:0 12px 40px rgba(0,0,0,.15);
                    animation: wdxFloat 5s ease-in-out infinite;
                    z-index:5;
                }
                .wdx-float svg { color:#008BF9; flex-shrink:0; }
                .wdx-float div { display:flex; flex-direction:column; min-width:90px; }
                .wdx-float small { font-size:10px; color:#64748b; text-transform:uppercase; letter-spacing:.5px; font-weight:600; line-height:1.2; }
                .wdx-float strong { font-size:14px; color:#0F3567; font-weight:800; line-height:1.2; }
                .wdx-float-perf { top:15%; right:-40px; animation-delay:0s; }
                .wdx-float-sec { top:50%; left:-40px; transform:translateY(-50%); animation-delay:1.2s; }
                .wdx-float-uptime { bottom:15%; right:20px; animation-delay:2.4s; }

                /* scroll indicator */
                .wdx-hero-scroll {
                    position:absolute; bottom:32px; left:50%; transform:translateX(-50%);
                    color:rgba(255,255,255,.3); animation: wdxScroll 2s ease infinite;
                }

                /* ---------- STATS MODERN ---------- */
                .wdx-stats-modern {
                    padding:120px 0;
                    background:#f0f7ff;
                    position:relative; overflow:hidden;
                    border-top:1px solid #dae9f5;
                    border-bottom:1px solid #dae9f5;
                }
                .wdx-stats-overlay {
                    position:absolute; inset:0;
                    pointer-events:none;
                    display:none;
                }
                .wdx-stats-modern .wdx-section-head {
                    margin-bottom:70px;
                    position:relative; z-index:2;
                }
                .wdx-stats-grid {
                    display:grid;
                    grid-template-columns:repeat(4,1fr);
                    gap:1px; position:relative; z-index:2;
                    background:#d4e5f4;
                    border:1px solid #d4e5f4;
                }
                .wdx-stats-grid.visible .wdx-stat-card {
                    animation:wdxFadeUp .6s ease forwards;
                    animation-delay:calc(var(--i)*.1s);
                }
                .wdx-stat-card {
                    opacity:0;
                }
                .wdx-stat-card-inner {
                    background:#ffffff;
                    padding:50px 40px;
                    text-align:center;
                    position:relative;
                    transition:all .35s ease;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                }
                .wdx-stat-card-inner::after {
                    content:'';
                    position:absolute; bottom:0; left:50%; transform:translateX(-50%);
                    width:0; height:2px;
                    background:#008BF9;
                    transition:width .4s ease;
                }
                .wdx-stat-card-inner:hover {
                    background:#f8fafc;
                }
                .wdx-stat-card-inner:hover::after {
                    width:50%;
                }
                .wdx-stat-glow {
                    display:none;
                }
                .wdx-stat-icon-modern {
                    width:48px; height:48px;
                    margin:0 auto 24px;
                    background:transparent;
                    border:2px solid #e1e8f0;
                    border-radius:12px;
                    display:flex; align-items:center; justify-content:center;
                    color:#008BF9;
                    transition:all .35s ease;
                    position:relative; z-index:2;
                }
                .wdx-stat-card-inner:hover .wdx-stat-icon-modern {
                    border-color:#008BF9;
                    background:rgba(0,139,249,.05);
                }
                .wdx-stat-number {
                    font-size:clamp(2.5rem,4.5vw,3.5rem);
                    font-weight:700; 
                    line-height:1; margin-bottom:12px;
                    position:relative; z-index:2;
                    color:#0F3567;
                    transition:color .3s ease;
                    font-family:system-ui, -apple-system, sans-serif;
                }
                .wdx-stat-card-inner:hover .wdx-stat-number {
                    color:#008BF9;
                }
                .wdx-stat-title {
                    font-size:.875rem; color:#64748b;
                    font-weight:500;
                    letter-spacing:.3px; position:relative; z-index:2;
                    transition:color .3s ease;
                }
                .wdx-stat-card-inner:hover .wdx-stat-title {
                    color:#475569;
                }

                /* ---------- SECTION HEAD ---------- */
                .wdx-section-head { text-align:center; margin-bottom:56px; }
                .wdx-section-head.center-white { text-align:center; }
                .wdx-label {
                    display:inline-flex; align-items:center; gap:8px;
                    background:rgba(0,139,249,.08); color:#008BF9;
                    padding:8px 22px; border-radius:50px;
                    font-size:11px; font-weight:700;
                    text-transform:uppercase; letter-spacing:2px;
                    margin-bottom:18px;
                    border:1px solid rgba(0,139,249,.12);
                }
                .wdx-label.light { background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.12); color:rgba(255,255,255,.8); }
                .wdx-h2 {
                    font-size:clamp(1.8rem,3.5vw,2.6rem);
                    font-weight:800; color:#0F3567;
                    margin-bottom:14px; letter-spacing:-.3px;
                }
                .wdx-h2 span { color:#008BF9; }
                .wdx-h2.light { color:#fff; }
                .wdx-h2.light span { color:#38bdf8; }
                .wdx-subtext { font-size:1.05rem; color:#64748b; max-width:540px; margin:0 auto; line-height:1.7; }
                .wdx-subtext.light { color:rgba(255,255,255,.55); }

                /* ---------- SERVICES ---------- */
                .wdx-services { padding:110px 0; background:#f8fafc; position:relative; }
                .wdx-services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
                .wdx-services-grid.visible .wdx-svc-card { animation: wdxFadeUp .6s ease forwards; animation-delay:calc(var(--i)*.1s); }
                .wdx-svc-card {
                    background:#fff; border-radius:20px;
                    padding:38px 30px; position:relative;
                    border:1px solid #eaeef4; overflow:hidden;
                    transition:all .4s cubic-bezier(.4,0,.2,1);
                    opacity:0;
                }
                .wdx-svc-card:hover {
                    transform:translateY(-10px);
                    box-shadow:0 28px 56px rgba(0,139,249,.1);
                    border-color:transparent;
                }
                .wdx-svc-glow {
                    display:none;
                }
                .wdx-svc-icon {
                    width:60px; height:60px;
                    background:linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, black));
                    border-radius:16px;
                    display:flex; align-items:center; justify-content:center;
                    color:#fff; margin-bottom:22px;
                    transition:transform .4s;
                    box-shadow: 0 8px 20px color-mix(in srgb, var(--accent) 30%, transparent);
                }
                .wdx-svc-card:hover .wdx-svc-icon { transform:scale(1.1) rotate(-3deg); }
                .wdx-svc-card h3 { font-size:1.2rem; font-weight:700; color:#0F3567; margin-bottom:10px; }
                .wdx-svc-card p { font-size:.92rem; color:#64748b; line-height:1.7; margin:0; }
                .wdx-svc-line {
                    width:40px; height:3px; background:var(--accent);
                    border-radius:2px; margin-top:20px; opacity:.3;
                    transition:all .4s;
                }
                .wdx-svc-card:hover .wdx-svc-line { width:60px; opacity:1; }

                /* ---------- PROCESS ---------- */
                .wdx-process {
                    padding:110px 0; position:relative; overflow:hidden;
                    background: linear-gradient(160deg, #0a1628 0%, #0F3567 50%, #0a1e3d 100%);
                }
                .wdx-process-bg {
                    position:absolute; inset:0;
                    background-image: radial-gradient(rgba(0,139,249,.06) 1px, transparent 1px);
                    background-size: 28px 28px;
                }
                .wdx-process-layout {
                    display:grid; grid-template-columns:1fr 1.4fr;
                    gap:64px; align-items:center; position:relative; z-index:2;
                }
                .wdx-process-checks { margin-top:32px; }
                .wdx-pcheck {
                    display:flex; align-items:center; gap:12px;
                    color:rgba(255,255,255,.8); margin-bottom:14px; font-size:.95rem;
                }
                .wdx-pcheck svg { color:#38bdf8; }
                .wdx-process-right { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
                .wdx-process-right.visible .wdx-step { animation: wdxFadeUp .6s ease forwards; animation-delay:calc(var(--i)*.15s); }
                .wdx-step {
                    background:rgba(255,255,255,.04);
                    border:1px solid rgba(255,255,255,.08);
                    border-radius:20px; padding:32px; position:relative;
                    transition:all .35s; backdrop-filter:blur(4px);
                    opacity:0;
                }
                .wdx-step:hover {
                    background:rgba(255,255,255,.08);
                    border-color:rgba(0,139,249,.3);
                    transform:translateY(-5px);
                    box-shadow: 0 16px 40px rgba(0,0,0,.2);
                }
                .wdx-step-num {
                    position:absolute; top:14px; right:18px;
                    font-size:2.8rem; font-weight:900; color:rgba(0,139,249,.12);
                    line-height:1;
                }
                .wdx-step-icon {
                    width:48px; height:48px;
                    background:linear-gradient(135deg,#008BF9,#6366f1);
                    border-radius:14px;
                    display:flex; align-items:center; justify-content:center;
                    color:#fff; margin-bottom:20px;
                    box-shadow:0 8px 20px rgba(0,139,249,.2);
                }
                .wdx-step h4 { font-size:1.1rem; font-weight:700; color:#fff; margin-bottom:8px; }
                .wdx-step p { font-size:.88rem; color:rgba(255,255,255,.55); line-height:1.65; margin:0; }

                /* ---------- TECH ---------- */
                .wdx-tech { padding:110px 0; background:#fff; }
                .wdx-tech-tabs { display:flex; justify-content:center; gap:12px; margin-bottom:48px; flex-wrap:wrap; }
                .wdx-tech-tab {
                    display:flex; align-items:center; gap:9px;
                    background:#f3f6fa; border:2px solid #e2e8f0;
                    padding:13px 26px; border-radius:12px;
                    color:#64748b; font-size:.92rem; font-weight:600;
                    cursor:pointer; transition:all .3s;
                }
                .wdx-tech-tab:hover { border-color:#008BF9; color:#008BF9; }
                .wdx-tech-tab.active {
                    background:linear-gradient(135deg,#008BF9,#6366f1);
                    border-color:transparent; color:#fff;
                    box-shadow:0 6px 20px rgba(0,139,249,.25);
                }
                .wdx-tech-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:18px; max-width:880px; margin:0 auto; }
                .wdx-tech-grid.visible .wdx-tech-card { animation: wdxFadeUp .5s ease forwards; animation-delay:calc(var(--i)*.08s); }
                .wdx-tech-card {
                    background:#f8fafc; border:1px solid #e8edf4;
                    border-radius:16px; padding:28px 16px;
                    text-align:center; transition:all .35s;
                    opacity:0;
                }
                .wdx-tech-card:hover {
                    transform:translateY(-8px);
                    box-shadow:0 16px 40px rgba(0,139,249,.1);
                    border-color:#008BF9;
                    background:#fff;
                }
                .wdx-tech-emoji { font-size:2.2rem; display:block; margin-bottom:12px; }
                .wdx-tech-name { font-size:.82rem; font-weight:700; color:#0F3567; }

                /* ---------- WHY CHOOSE ---------- */
                .wdx-why {
                    padding:110px 0; position:relative; overflow:hidden;
                    background: linear-gradient(165deg, #070d1a 0%, #0a1628 40%, #0F3567 100%);
                }
                .wdx-why-bg {
                    position:absolute; inset:0;
                    background-image: radial-gradient(rgba(99,102,241,.06) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .wdx-why-grid {
                    display:grid; grid-template-columns:repeat(3,1fr); gap:22px;
                    position:relative; z-index:2;
                }
                .wdx-why-grid.visible .wdx-why-card { animation: wdxFadeUp .6s ease forwards; animation-delay:calc(var(--i)*.1s); }
                .wdx-why-card {
                    background: rgba(255,255,255,.04);
                    border: 1px solid rgba(255,255,255,.08);
                    border-radius: 20px;
                    padding: 34px 28px;
                    transition: all .4s cubic-bezier(.4,0,.2,1);
                    backdrop-filter: blur(8px);
                    opacity:0;
                    position: relative;
                    overflow: hidden;
                }
                .wdx-why-card::before {
                    content:''; position:absolute; top:0; left:0; right:0;
                    height:3px;
                    background:linear-gradient(90deg, #008BF9, #6366f1);
                    transform:scaleX(0); transform-origin:left;
                    transition:transform .5s;
                }
                .wdx-why-card:hover::before { transform:scaleX(1); }
                .wdx-why-card:hover {
                    background:rgba(255,255,255,.08);
                    border-color:rgba(0,139,249,.25);
                    transform:translateY(-6px);
                    box-shadow:0 20px 50px rgba(0,0,0,.25);
                }
                .wdx-why-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
                .wdx-why-icon {
                    width:54px; height:54px;
                    background:linear-gradient(135deg, rgba(0,139,249,.15), rgba(99,102,241,.1));
                    border-radius:14px;
                    display:flex; align-items:center; justify-content:center;
                    color:#38bdf8; transition:all .3s;
                }
                .wdx-why-card:hover .wdx-why-icon {
                    background:linear-gradient(135deg, #008BF9, #6366f1);
                    color:#fff;
                    box-shadow:0 8px 20px rgba(0,139,249,.3);
                }
                .wdx-why-badge {
                    background:rgba(0,139,249,.12); color:#38bdf8;
                    padding:5px 14px; border-radius:20px;
                    font-size:.72rem; font-weight:700;
                    letter-spacing:.5px;
                    border:1px solid rgba(0,139,249,.2);
                }
                .wdx-why-card h3 { font-size:1.1rem; font-weight:700; color:#fff; margin-bottom:8px; }
                .wdx-why-card p { font-size:.88rem; color:rgba(255,255,255,.5); line-height:1.7; margin:0; }

                /* ---------- PORTFOLIO (Uses global portfolio_box styles) ---------- */
                .wdx-portfolio { padding:110px 0; background:#f8fafc; }
                .wdx-port-col { margin-bottom:30px; }
                .wdx-visible .wdx-port-col { animation: wdxFadeUp .6s ease both; }
                .wdx-visible .wdx-port-col:nth-child(1) { animation-delay:.1s; }
                .wdx-visible .wdx-port-col:nth-child(2) { animation-delay:.2s; }
                .wdx-visible .wdx-port-col:nth-child(3) { animation-delay:.3s; }
                .wdx-visible .wdx-port-col:nth-child(4) { animation-delay:.4s; }
                .wdx-visible .wdx-port-col:nth-child(5) { animation-delay:.5s; }
                .wdx-visible .wdx-port-col:nth-child(6) { animation-delay:.6s; }
                .wdx-port-cta { text-align:center; margin-top:28px; }
                .wdx-btn-outline-dark {
                    display:inline-flex; align-items:center; gap:10px;
                    background:#fff; border:2px solid #d4dbe6;
                    color:#0F3567; padding:15px 32px;
                    border-radius:14px; font-weight:700;
                    font-size:.95rem; text-decoration:none;
                    transition:all .3s;
                    box-shadow:0 4px 12px rgba(0,0,0,.04);
                }
                .wdx-btn-outline-dark:hover {
                    border-color:#008BF9; color:#008BF9;
                    box-shadow:0 8px 24px rgba(0,139,249,.12);
                    transform:translateY(-2px);
                }

                /* ---------- CONTACT SECTION ---------- */
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



                /* ========== RESPONSIVE ========== */
                @media (max-width:1199px) {
                    .wdx-hero-inner { grid-template-columns:1fr; gap:48px; }
                    .wdx-hero-visual { max-width:520px; margin:0 auto; }
                    .wdx-services-grid { grid-template-columns:repeat(2,1fr); }
                    .wdx-stats-grid { grid-template-columns:repeat(2,1fr); }
                    .wdx-tech-grid { grid-template-columns:repeat(3,1fr); }
                    .wdx-why-grid { grid-template-columns:repeat(2,1fr); }
                    .wdx-contact-wrapper { grid-template-columns:1fr; }
                    .wdx-contact-info { display:none; }
                    .wdx-float { display:none; }
                }
                @media (max-width:991px) {
                    .wdx-hero { padding:140px 0 80px; min-height:auto; }
                    .wdx-hero-visual { display:none; }
                    .wdx-hero-scroll { display:none; }
                    .wdx-process-layout { grid-template-columns:1fr; gap:48px; }
                    .wdx-process-right { grid-template-columns:1fr 1fr; }
                    .wdx-contact-form-wrapper { padding:36px 28px; }
                }
                @media (max-width:767px) {
                    .wdx-hero { padding:130px 0 60px; }
                    .wdx-hero-h1 { font-size:2rem; }
                    .wdx-services-grid { grid-template-columns:1fr; }
                    .wdx-stats-modern { padding:80px 0; }
                    .wdx-stats-modern .wdx-section-head { margin-bottom:50px; }
                    .wdx-stats-grid { grid-template-columns:1fr; }
                    .wdx-stat-card-inner { padding:40px 30px; }
                    .wdx-process-right { grid-template-columns:1fr; }
                    .wdx-tech-grid { grid-template-columns:repeat(2,1fr); }
                    .wdx-tech-tabs { flex-direction:column; }
                    .wdx-tech-tab { width:100%; justify-content:center; }
                    .wdx-why-grid { grid-template-columns:1fr; }
                    .wdx-hero-actions { flex-direction:column; }
                    .wdx-hero-actions a { width:100%; justify-content:center; }
                    .wdx-hero-chips { flex-direction:column; }
                    .wdx-contact-form-wrapper { padding:32px 24px; }
                    .wdx-form-grid { grid-template-columns:1fr; }
                }
            `}</style>
        </>
    )
}
