import Link from "next/link"
import { useState, useEffect } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { portfolioProjects } from "@/util/portfolioData"
import { Smartphone, Layers, Zap, Shield, ArrowRight, Check, Cpu, RefreshCw, Bell, Star, Download, Code, Palette, TestTube, Rocket, ChevronRight, Apple, Play, Monitor, Heart, Award, Target, Globe, Settings, TrendingUp, Users, Clock, Database, Lock, Wifi, Cloud, BarChart, Sparkles, Layout, GitBranch, CircleDot, Gem, Phone, TabletSmartphone, Boxes, CheckCircle2, Mail, User, MessageSquare, ChevronDown, ChevronUp } from "lucide-react"

export default function ServiceAppDevelopment() {
    const [activeTab, setActiveTab] = useState(0)
    const [hoveredService, setHoveredService] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: 'App Development',
        message: ''
    })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [visibleSections, setVisibleSections] = useState({})

    const mobileProjects = portfolioProjects.filter(p => p.categoryType.includes('mobile')).slice(0, 6)

    useEffect(() => {
        setIsVisible(true)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id
                    setVisibleSections(prev => ({ ...prev, [id]: true }))
                }
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('[data-animate]').forEach((el) => {
            if (el.id) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormSubmitted(true)
        setTimeout(() => {
            setFormSubmitted(false)
            setFormData({ name: '', email: '', mobile: '', service: 'App Development', message: '' })
        }, 3000)
    }

    const capabilities = [
        {
            id: "cross",
            title: "Cross-Platform",
            subtitle: "One Codebase, All Platforms",
            icon: <Globe size={28} />,
            gradient: "linear-gradient(135deg, #008BF9 0%, #0070cc 100%)",
            description: "Accelerate development with cross-platform frameworks that deliver native-like experiences while maintaining a single, efficient codebase.",
            technologies: [
                { name: "React Native", category: "Framework" },
                { name: "Flutter", category: "Framework" },
                { name: "Expo", category: "Tooling" },
                { name: "Dart", category: "Language" },
            ],
            benefits: ["Cost Efficient", "Faster Time-to-Market", "Code Reusability", "Unified Experience"]
        },
        {
            id: "native",
            title: "Native Development",
            subtitle: "iOS & Android Excellence",
            icon: <Smartphone size={28} />,
            gradient: "linear-gradient(135deg, #008BF9 0%, #0070cc 100%)",
            description: "Build platform-specific applications that leverage the full potential of iOS and Android ecosystems for optimal performance and user experience.",
            technologies: [
                { name: "Swift", category: "iOS" },
                { name: "Kotlin", category: "Android" },
                { name: "SwiftUI", category: "iOS" },
                { name: "Jetpack Compose", category: "Android" },
            ],
            benefits: ["Native Performance", "Platform Guidelines", "Hardware Access", "Store Optimization"]
        },
        {
            id: "enterprise",
            title: "Enterprise Apps",
            subtitle: "Business-Critical Solutions",
            icon: <Database size={28} />,
            gradient: "linear-gradient(135deg, #008BF9 0%, #0070cc 100%)",
            description: "Develop secure, scalable enterprise applications that integrate seamlessly with your existing systems and drive business efficiency.",
            technologies: [
                { name: "Azure Mobile", category: "Cloud" },
                { name: "AWS Amplify", category: "Cloud" },
                { name: "GraphQL", category: "API" },
                { name: "Firebase", category: "Backend" },
            ],
            benefits: ["Enterprise Security", "System Integration", "Scalable Architecture", "Compliance Ready"]
        }
    ]

    const services = [
        {
            icon: <Palette size={28} />,
            title: "UI/UX Design",
            desc: "Research-driven design that creates intuitive, engaging user experiences aligned with your brand identity.",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
            accent: "#008BF9"
        },
        {
            icon: <Code size={28} />,
            title: "App Development",
            desc: "Expert development using modern architectures and best practices for reliable, maintainable applications.",
            features: ["Clean Architecture", "Agile Process", "Code Reviews", "CI/CD Pipeline"],
            accent: "#008BF9"
        },
        {
            icon: <Cloud size={28} />,
            title: "Backend & APIs",
            desc: "Robust backend infrastructure and APIs that power your application with security and scalability.",
            features: ["RESTful APIs", "Real-time Sync", "Cloud Functions", "Database Design"],
            accent: "#008BF9"
        },
        {
            icon: <TestTube size={28} />,
            title: "QA & Testing",
            desc: "Comprehensive testing strategies ensuring your app performs flawlessly across all devices and scenarios.",
            features: ["Automated Testing", "Performance Testing", "Security Audits", "Beta Testing"],
            accent: "#008BF9"
        },
        {
            icon: <Rocket size={28} />,
            title: "Launch & Deployment",
            desc: "Strategic app store optimization and launch support to maximize visibility and downloads.",
            features: ["Store Optimization", "Launch Strategy", "Analytics Setup", "Growth Planning"],
            accent: "#008BF9"
        },
        {
            icon: <Settings size={28} />,
            title: "Maintenance & Support",
            desc: "Ongoing maintenance, updates, and support to keep your app current and performing at its best.",
            features: ["Bug Fixes", "OS Updates", "Feature Updates", "24/7 Monitoring"],
            accent: "#008BF9"
        },
    ]

    const techStack = [
        { name: "React Native", icon: "⚛️" },
        { name: "Flutter", icon: "🦋" },
        { name: "Swift", icon: "🍎" },
        { name: "Kotlin", icon: "🤖" },
        { name: "Firebase", icon: "🔥" },
        { name: "AWS", icon: "☁️" },
        { name: "GraphQL", icon: "◈" },
        { name: "Node.js", icon: "💚" },
    ]

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* ===== HERO SECTION ===== */}
                    <section className={`mad-hero ${isVisible ? 'visible' : ''}`}>
                        <div className="mad-hero-bg">
                            <div className="mad-orb mad-orb-1"></div>
                            <div className="mad-orb mad-orb-2"></div>
                            <div className="mad-orb mad-orb-3"></div>
                            <div className="mad-grid-bg"></div>
                        </div>
                        <div className="container">
                            <div className="mad-hero-layout">
                                <div className="mad-hero-content">
                                    <div className="mad-hero-badge">
                                        <Sparkles size={14} />
                                        <span>Premier Mobile Development Partner</span>
                                    </div>
                                    <h1 className="mad-hero-title">
                                        <span className="mad-title-line">We Craft</span>
                                        <span className="mad-title-gradient">Mobile Experiences</span>
                                        <span className="mad-title-line">That Users Love</span>
                                    </h1>
                                    <p className="mad-hero-desc">
                                        From concept to App Store — we architect enterprise-grade mobile
                                        applications that drive measurable business impact and deliver
                                        exceptional user experiences across every platform.
                                    </p>
                                    <div className="mad-hero-ctas">
                                        <Link href="/contact" className="mad-btn-hero-primary">
                                            <span>Start Your Project</span>
                                            <ArrowRight size={18} />
                                        </Link>
                                        <Link href="/portfolio-style-1" className="mad-btn-hero-outline">
                                            <span>View Our Work</span>
                                            <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mad-hero-visual">
                                    <div className="mad-phone-showcase">
                                        <div className="mad-phone-frame">
                                            <div className="mad-phone-notch"></div>
                                            <div className="mad-phone-screen">
                                                <div className="mad-screen-header">
                                                    <div className="mad-sh-dot"></div>
                                                    <div className="mad-sh-bar"></div>
                                                    <div className="mad-sh-dot"></div>
                                                </div>
                                                <div className="mad-screen-hero-block"></div>
                                                <div className="mad-screen-cards">
                                                    <div className="mad-sc-card"></div>
                                                    <div className="mad-sc-card"></div>
                                                </div>
                                                <div className="mad-screen-list">
                                                    <div className="mad-sl-item"></div>
                                                    <div className="mad-sl-item"></div>
                                                    <div className="mad-sl-item"></div>
                                                </div>
                                                <div className="mad-screen-nav">
                                                    <div className="mad-sn-item active"></div>
                                                    <div className="mad-sn-item"></div>
                                                    <div className="mad-sn-item"></div>
                                                    <div className="mad-sn-item"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Floating Elements */}
                                        <div className="mad-float-card mad-fc-1">
                                            <Apple size={18} />
                                            <span>iOS Ready</span>
                                        </div>
                                        <div className="mad-float-card mad-fc-2">
                                            <Play size={18} />
                                            <span>Android</span>
                                        </div>
                                        <div className="mad-float-card mad-fc-3">
                                            <Star size={16} />
                                            <strong>4.9</strong>
                                        </div>
                                        <div className="mad-float-ring mad-fr-1"></div>
                                        <div className="mad-float-ring mad-fr-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Trusted By Bar */}
                        <div className="mad-trust-bar">
                            <div className="container">
                                <div className="mad-trust-inner">
                                    <span className="mad-trust-label">Trusted Technologies</span>
                                    <div className="mad-trust-logos">
                                        {techStack.map((t, i) => (
                                            <div key={i} className="mad-trust-item">
                                                <span className="mad-trust-emoji">{t.icon}</span>
                                                <span>{t.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ===== CAPABILITIES ===== */}
                    <section className="mad-capabilities">
                        <div className="container">
                            <div className="mad-section-header">
                                <div className="mad-sh-left">
                                    <span className="mad-overline">
                                        <CircleDot size={14} />
                                        App Development
                                    </span>
                                    <h2 className="mad-heading-xl">
                                        Mobile Solutions <br />
                                        <span className="mad-text-accent">That Scale</span>
                                    </h2>
                                </div>
                                <p className="mad-sh-desc">
                                    Every project is unique. We offer flexible development approaches
                                    tailored to your specific business goals, timeline, and budget.
                                </p>
                            </div>

                            <div className="mad-cap-showcase">
                                {capabilities.map((cap, i) => (
                                    <div
                                        key={i}
                                        className={`mad-cap-card ${activeTab === i ? 'active' : ''}`}
                                        onClick={() => setActiveTab(i)}
                                    >
                                        <div className="mad-cap-card-glow" style={{ background: cap.gradient }}></div>
                                        <div className="mad-cap-card-inner">
                                            <div className="mad-cap-icon" style={{ background: cap.gradient }}>
                                                {cap.icon}
                                            </div>
                                            <div className="mad-cap-info">
                                                <h3>{cap.title}</h3>
                                                <span className="mad-cap-subtitle">{cap.subtitle}</span>
                                            </div>
                                            <div className="mad-cap-accordion-icon">
                                                {activeTab === i ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </div>
                                            <div className={`mad-cap-expand ${activeTab === i ? 'show' : ''}`}>
                                                <p>{cap.description}</p>
                                                <div className="mad-cap-techs">
                                                    {cap.technologies.map((t, ti) => (
                                                        <div key={ti} className="mad-cap-tech">
                                                            <span className="mad-ct-name">{t.name}</span>
                                                            <span className="mad-ct-badge">{t.category}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mad-cap-benefits">
                                                    {cap.benefits.map((b, bi) => (
                                                        <span key={bi} className="mad-cap-benefit">
                                                            <Check size={14} /> {b}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== SERVICES BENTO ===== */}
                    <section className="mad-services">
                        <div className="container">
                            <div className="mad-section-header center">
                                <span className="mad-overline">
                                    <Gem size={14} />
                                    What We Deliver
                                </span>
                                <h2 className="mad-heading-xl">
                                    End-to-End <span className="mad-text-accent">Services</span>
                                </h2>
                                <p className="mad-sh-desc center">
                                    Comprehensive mobile development services from concept to market and beyond
                                </p>
                            </div>

                            <div className="mad-bento-grid">
                                {services.map((service, i) => (
                                    <div
                                        key={i}
                                        className={`mad-bento-card bento-${i + 1}`}
                                        onMouseEnter={() => setHoveredService(i)}
                                        onMouseLeave={() => setHoveredService(null)}
                                    >
                                        <div className="mad-bento-content">
                                            <div className="mad-bento-top">
                                                <div className="mad-bento-icon" style={{ color: service.accent, background: `${service.accent}15` }}>
                                                    {service.icon}
                                                </div>
                                                <span className="mad-bento-num" style={{ color: `${service.accent}30` }}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <h3 className="mad-bento-title">{service.title}</h3>
                                            <p className="mad-bento-desc">{service.desc}</p>
                                            <div className="mad-bento-tags">
                                                {service.features.map((f, fi) => (
                                                    <span key={fi} className="mad-bento-tag" style={{ borderColor: `${service.accent}25` }}>
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ==================== PORTFOLIO ==================== */}
                    <section className="mad-portfolio" id="mad-portfolio" data-animate>
                        <div className="container">
                            <div className="mad-section-header center">
                                <span className="mad-overline">
                                    <Sparkles size={14} />
                                    Portfolio
                                </span>
                                <h2 className="mad-heading-xl">
                                    Our Mobile App <span className="mad-text-accent">Work</span>
                                </h2>
                                <p className="mad-sh-desc center">
                                    Real projects, real results — see what we've built for our clients
                                </p>
                            </div>
                            <div className={`portfoliocontainer row ${visibleSections['mad-portfolio'] ? 'mad-visible' : ''}`}>
                                {mobileProjects.map((project) => {
                                    const categoryClass = project.categoryType.split(' ').map(cat => `portfolio_category-${cat}`).join(' ')
                                    return (
                                        <div key={project.id} className={`portfolio-wrapper col-xl-4 col-lg-4 col-md-6 col-sm-6 ${categoryClass}`}>
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
                            <div className="mad-port-cta">
                                <Link href="/portfolio-style-1" className="mad-btn-outline-dark">
                                    View All Projects <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ==================== CONTACT FORM ==================== */}
                    <section className="mad-contact-section" id="mad-quote" data-animate>
                        <div className="container">
                            <div className="mad-contact-header">
                                <span className="mad-contact-badge">Get In Touch</span>
                                <h2>Start Your <span>Project</span> With Us</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.</p>
                            </div>

                            <div className="mad-contact-wrapper">
                                <div className="mad-contact-info">
                                    {/* <div className="mad-info-item">
                                        <div className="mad-info-icon-box">
                                            <Phone size={24} />
                                        </div>
                                        <div className="mad-info-content">
                                            <h4>Phone Number</h4>
                                            <a href="tel:+918329042459">+91 8329042459</a>
                                        </div>
                                    </div> */}

                                    <div className="mad-info-item">
                                        <div className="mad-info-icon-box">
                                            <Mail size={24} />
                                        </div>
                                        <div className="mad-info-content">
                                            <h4>Email Address</h4>
                                            <a href="mailto:info@ciencechip.com">info@ciencechip.com</a>
                                        </div>
                                    </div>

                                    <div className="mad-benefits-list">
                                        <div className="mad-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>Free Consultation</span>
                                        </div>
                                        <div className="mad-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>24 Hour Response</span>
                                        </div>
                                        <div className="mad-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>NDA Protection</span>
                                        </div>
                                        <div className="mad-benefit-item">
                                            <CheckCircle2 size={20} />
                                            <span>Transparent Pricing</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mad-contact-form-wrapper">
                                    {formSubmitted && (
                                        <div className="mad-form-success-msg">
                                            <CheckCircle2 size={60} />
                                            <h3>Thank You!</h3>
                                            <p>Your message has been sent successfully. We'll contact you soon.</p>
                                        </div>
                                    )}

                                    <form className="mad-contact-form" onSubmit={handleFormSubmit}>
                                        <div className="mad-form-grid">
                                            <div className="mad-form-group">
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

                                            <div className="mad-form-group">
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

                                        <div className="mad-form-grid">
                                            {/* <div className="mad-form-group">
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

                                            <div className="mad-form-group">
                                                <label>Service Required *</label>
                                                <select name="service" value={formData.service} onChange={handleFormChange}>
                                                    <option value="App Development">App Development</option>
                                                    <option value="iOS Development">iOS Development</option>
                                                    <option value="Android Development">Android Development</option>
                                                    <option value="Cross-Platform App">Cross-Platform App</option>
                                                    <option value="UI/UX Design">UI/UX Design</option>
                                                    <option value="Backend Development">Backend Development</option>
                                                    <option value="App Maintenance">App Maintenance</option>
                                                    <option value="IT Consulting">IT Consulting</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mad-form-group mad-form-full">
                                            <label>Project Details</label>
                                            <textarea
                                                name="message"
                                                rows="5"
                                                placeholder="Tell us about your project requirements..."
                                                value={formData.message}
                                                onChange={handleFormChange}
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="mad-submit-btn">
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
                /* ===== DESIGN TOKENS ===== */
                .mad-hero, .mad-capabilities, .mad-services,
                .mad-portfolio, .mad-contact-section {
                    --accent: #008BF9;
                    --accent-bright: #0095FF;
                    --accent-dark: #0070cc;
                    --accent-glow: rgba(0, 139, 249, 0.25);
                    --gold: #f59e0b;
                    --navy: #0f172a;
                    --navy-light: #1e293b;
                    --navy-lighter: #334155;
                    --surface: #ffffff;
                    --surface-dim: #f8fafc;
                    --surface-muted: #f1f5f9;
                    --text-primary: #0f172a;
                    --text-secondary: #475569;
                    --text-muted: #94a3b8;
                    --border: #e2e8f0;
                    --border-light: #f1f5f9;
                    --radius-sm: 8px;
                    --radius-md: 12px;
                    --radius-lg: 18px;
                    --radius-xl: 24px;
                    --radius-2xl: 32px;
                    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
                    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                /* ============================================ */
                /*                    HERO                      */
                /* ============================================ */
                .mad-hero {
                    position: relative;
                    padding: 170px 0 0;
                    background: var(--navy);
                    overflow: hidden;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .mad-hero .container {
                    position: relative;
                    z-index: 2;
                }
                .mad-hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    overflow: hidden;
                }
                .mad-grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
                    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
                }
                .mad-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    pointer-events: none;
                }
                .mad-orb-1 {
                    width: 600px; height: 600px;
                    background: rgba(0, 139, 249, 0.15);
                    top: -10%; right: -5%;
                    animation: orb-float 12s ease-in-out infinite;
                }
                .mad-orb-2 {
                    width: 400px; height: 400px;
                    background: rgba(0, 139, 249, 0.1);
                    bottom: 10%; left: -5%;
                    animation: orb-float 15s ease-in-out infinite reverse;
                }
                .mad-orb-3 {
                    width: 300px; height: 300px;
                    background: rgba(0, 139, 249, 0.08);
                    top: 40%; left: 40%;
                    animation: orb-float 10s ease-in-out infinite 2s;
                }
                @keyframes orb-float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -20px) scale(1.05); }
                    66% { transform: translate(-20px, 20px) scale(0.95); }
                }
                .mad-hero-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                    padding-bottom: 80px;
                }
                .mad-hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--accent-bright);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 32px;
                    background: rgba(0, 139, 249, 0.1);
                    border: 1px solid rgba(0, 139, 249, 0.2);
                    padding: 10px 20px;
                    border-radius: 50px;
                    backdrop-filter: blur(10px);
                }
                .mad-hero-title {
                    margin-bottom: 32px;
                    line-height: 1;
                }
                .mad-title-line {
                    display: block;
                    font-size: clamp(2.5rem, 4.5vw, 3.75rem);
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: -1.5px;
                    line-height: 1.15;
                }
                .mad-title-gradient {
                    display: block;
                    font-size: clamp(2.5rem, 5vw, 4.25rem);
                    font-weight: 900;
                    letter-spacing: -2px;
                    line-height: 1.15;
                    color: #008BF9;
                    padding: 4px 0;
                }
                .mad-hero-desc {
                    font-size: 1.125rem;
                    color: rgba(255,255,255,0.55);
                    line-height: 1.8;
                    margin-bottom: 40px;
                    max-width: 520px;
                }
                .mad-hero-stats {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                    margin-bottom: 44px;
                }
                .mad-stat-pill {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    padding: 16px 20px;
                    border-radius: var(--radius-md);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s var(--ease-out);
                }
                .mad-stat-pill:hover {
                    background: rgba(255,255,255,0.08);
                    border-color: rgba(0, 139, 249, 0.3);
                    transform: translateY(-2px);
                }
                .mad-stat-icon {
                    width: 44px; height: 44px;
                    background: linear-gradient(135deg, var(--accent), var(--accent-dark));
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }
                .mad-stat-info {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .mad-stat-info strong {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: -0.5px;
                    line-height: 1;
                }
                .mad-stat-info small {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.45);
                    font-weight: 500;
                }
                .mad-hero-ctas {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .mad-btn-hero-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: linear-gradient(135deg, var(--accent-bright), var(--accent-dark));
                    color: #ffffff;
                    padding: 18px 36px;
                    border-radius: var(--radius-md);
                    font-weight: 700;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.4s var(--ease-out);
                    box-shadow: 0 8px 32px rgba(0, 139, 249, 0.4), inset 0 1px 0 rgba(255,255,255,0.15);
                    border: none;
                    position: relative;
                    overflow: hidden;
                }
                .mad-btn-hero-primary::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, transparent, rgba(255,255,255,0.1));
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .mad-btn-hero-primary:hover::before { opacity: 1; }
                .mad-btn-hero-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 14px 44px rgba(0, 139, 249, 0.5);
                    color: #ffffff;
                }
                .mad-btn-hero-outline {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    color: rgba(255,255,255,0.8);
                    padding: 18px 32px;
                    border-radius: var(--radius-md);
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s var(--ease-out);
                    border: 1px solid rgba(255,255,255,0.15);
                    background: rgba(255,255,255,0.04);
                    backdrop-filter: blur(10px);
                }
                .mad-btn-hero-outline:hover {
                    border-color: var(--accent-bright);
                    color: #ffffff;
                    background: rgba(0, 139, 249, 0.1);
                }

                /* Phone Showcase */
                .mad-hero-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .mad-phone-showcase {
                    position: relative;
                    width: 320px;
                    margin: 0 auto;
                }
                .mad-phone-frame {
                    width: 280px;
                    height: 560px;
                    background: linear-gradient(145deg, #1e293b, #0f172a);
                    border-radius: 40px;
                    border: 3px solid rgba(255,255,255,0.1);
                    padding: 12px;
                    position: relative;
                    box-shadow: 
                        0 0 0 1px rgba(255,255,255,0.05),
                        0 40px 80px rgba(0,0,0,0.5),
                        0 0 120px rgba(0, 139, 249, 0.15);
                    margin: 0 auto;
                }
                .mad-phone-notch {
                    width: 120px;
                    height: 28px;
                    background: #0f172a;
                    border-radius: 0 0 20px 20px;
                    margin: 0 auto;
                    position: absolute;
                    top: 3px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                }
                .mad-phone-screen {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(160deg, #1a1f36, #0d1321);
                    border-radius: 30px;
                    padding: 48px 18px 18px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .mad-screen-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 4px 10px;
                }
                .mad-sh-dot {
                    width: 10px; height: 10px;
                    background: rgba(0, 139, 249, 0.6);
                    border-radius: 50%;
                }
                .mad-sh-bar {
                    height: 6px;
                    flex: 1;
                    margin: 0 14px;
                    background: rgba(255,255,255,0.06);
                    border-radius: 3px;
                }
                .mad-screen-hero-block {
                    height: 120px;
                    background: linear-gradient(135deg, rgba(37,99,235,0.3), rgba(139,92,246,0.2));
                    border-radius: 16px;
                    animation: screen-pulse 4s ease-in-out infinite;
                }
                @keyframes screen-pulse {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 1; }
                }
                .mad-screen-cards {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
                .mad-sc-card {
                    height: 72px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 12px;
                }
                .mad-screen-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    flex: 1;
                }
                .mad-sl-item {
                    height: 44px;
                    background: rgba(255,255,255,0.03);
                    border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.04);
                }
                .mad-screen-nav {
                    display: flex;
                    gap: 6px;
                    justify-content: center;
                    padding-top: 10px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }
                .mad-sn-item {
                    width: 36px; height: 4px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 2px;
                }
                .mad-sn-item.active {
                    background: var(--accent-bright);
                    width: 48px;
                }

                /* Floating Cards */
                .mad-float-card {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.15);
                    padding: 12px 18px;
                    border-radius: var(--radius-md);
                    color: #ffffff;
                    font-size: 0.85rem;
                    font-weight: 600;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                    z-index: 5;
                }
                .mad-fc-1 {
                    top: 60px; left: -40px;
                    animation: float-1 6s ease-in-out infinite;
                }
                .mad-fc-2 {
                    bottom: 100px; right: -50px;
                    animation: float-2 7s ease-in-out infinite 1s;
                }
                .mad-fc-3 {
                    top: 200px; right: -30px;
                    animation: float-1 5s ease-in-out infinite 2s;
                    gap: 6px;
                }
                .mad-fc-3 strong {
                    font-size: 1rem;
                    color: var(--gold);
                }
                @keyframes float-1 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes float-2 {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                .mad-float-ring {
                    position: absolute;
                    border: 2px solid rgba(0, 139, 249, 0.15);
                    border-radius: 50%;
                    z-index: 1;
                }
                .mad-fr-1 {
                    width: 400px; height: 400px;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    animation: ring-spin 20s linear infinite;
                }
                .mad-fr-2 {
                    width: 500px; height: 500px;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    border-style: dashed;
                    border-color: rgba(139, 92, 246, 0.08);
                    animation: ring-spin 30s linear infinite reverse;
                }
                @keyframes ring-spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes madFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Trust Bar */
                .mad-trust-bar {
                    position: relative;
                    z-index: 2;
                    padding: 32px 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    margin-top: 40px;
                }
                .mad-trust-inner {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }
                .mad-trust-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: rgba(255,255,255,0.3);
                    white-space: nowrap;
                }
                .mad-trust-logos {
                    display: flex;
                    gap: 28px;
                    flex: 1;
                    align-items: center;
                    justify-content: space-between;
                    overflow-x: auto;
                }
                .mad-trust-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255,255,255,0.4);
                    font-size: 0.8rem;
                    font-weight: 600;
                    white-space: nowrap;
                    transition: color 0.3s;
                }
                .mad-trust-item:hover { color: rgba(255,255,255,0.7); }
                .mad-trust-emoji { font-size: 1.1rem; }

                /* ============================================ */
                /*             SECTION COMMONS                   */
                /* ============================================ */
                .mad-section-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 0;
                    margin-bottom: 48px;
                }
                .mad-section-header.center {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 0;
                }
                .mad-overline {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--accent);
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    margin-bottom: 6px;
                    background: rgba(0, 139, 249, 0.06);
                    padding: 8px 18px;
                    border-radius: 50px;
                    border: 1px solid rgba(0, 139, 249, 0.1);
                }
                .mad-overline.light {
                    background: rgba(255,255,255,0.06);
                    color: var(--accent-bright);
                    border-color: rgba(255,255,255,0.1);
                }
                .mad-heading-xl {
                    font-size: clamp(2rem, 3.5vw, 2.75rem);
                    font-weight: 800;
                    color: var(--text-primary);
                    line-height: 1.15;
                    letter-spacing: -0.75px;
                    margin-bottom: 6px;
                }
                .mad-section-header.light .mad-heading-xl {
                    color: #ffffff;
                }
                .mad-text-accent {
                    color: #008BF9;
                }
                .mad-text-glow {
                    color: #008BF9;
                }
                .mad-sh-desc {
                    font-size: 1.05rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    max-width: 400px;
                    margin: 0;
                }
                .mad-sh-desc.center {
                    max-width: 560px;
                    text-align: center;
                }
                .mad-sh-desc.light,
                .mad-section-header.light .mad-sh-desc {
                    color: rgba(255,255,255,0.5);
                }

                /* ============================================ */
                /*              CAPABILITIES                     */
                /* ============================================ */
                .mad-capabilities {
                    padding: 120px 0;
                    background: var(--surface);
                    position: relative;
                }
                .mad-cap-showcase {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .mad-cap-card {
                    position: relative;
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.5s var(--ease-out);
                    border: 1px solid var(--border);
                    background: var(--surface);
                }
                .mad-cap-card:hover {
                    border-color: rgba(0, 139, 249, 0.2);
                    box-shadow: 0 8px 40px rgba(0, 139, 249, 0.08);
                }
                .mad-cap-card.active {
                    border-color: rgba(0, 139, 249, 0.25);
                    box-shadow: 0 16px 64px rgba(0, 139, 249, 0.12);
                }
                .mad-cap-card-glow {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    opacity: 0;
                    transition: opacity 0.4s;
                }
                .mad-cap-card.active .mad-cap-card-glow {
                    opacity: 1;
                }
                .mad-cap-card-inner {
                    padding: 32px 40px;
                }
                .mad-cap-icon {
                    width: 58px; height: 58px;
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    flex-shrink: 0;
                    margin-bottom: 0;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
                }
                .mad-cap-card-inner {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 24px;
                }
                .mad-cap-info h3 {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0 0 4px 0;
                    letter-spacing: -0.3px;
                }
                .mad-cap-subtitle {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .mad-cap-accordion-icon {
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent);
                    transition: all 0.3s var(--ease-out);
                }
                .mad-cap-card:hover .mad-cap-accordion-icon {
                    color: var(--accent-bright);
                }
                .mad-cap-expand {
                    width: 100%;
                    max-height: 0;
                    overflow: hidden;
                    opacity: 0;
                    transition: all 0.5s var(--ease-out);
                    padding-top: 0;
                }
                .mad-cap-expand.show {
                    max-height: 400px;
                    opacity: 1;
                    padding-top: 28px;
                    margin-top: 4px;
                }
                .mad-cap-expand p {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.75;
                    margin: 0 0 24px 0;
                    max-width: 640px;
                }
                .mad-cap-techs {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
                }
                .mad-cap-tech {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: var(--surface-dim);
                    border: 1px solid var(--border);
                    padding: 10px 18px;
                    border-radius: var(--radius-sm);
                    transition: all 0.25s;
                }
                .mad-cap-tech:hover {
                    border-color: var(--accent);
                    background: rgba(0, 139, 249, 0.04);
                    transform: translateY(-2px);
                }
                .mad-ct-name {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }
                .mad-ct-badge {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: var(--accent);
                    background: rgba(0, 139, 249, 0.08);
                    padding: 3px 10px;
                    border-radius: 50px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .mad-cap-benefits {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .mad-cap-benefit {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    background: var(--surface);
                    border: 1px solid var(--border);
                    padding: 8px 16px;
                    border-radius: var(--radius-sm);
                }
                .mad-cap-benefit svg { color: #10b981; }

                /* ============================================ */
                /*                SERVICES BENTO                 */
                /* ============================================ */
                .mad-services {
                    padding: 120px 0;
                    background: var(--surface-dim);
                }
                .mad-bento-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-auto-rows: auto;
                    gap: 24px;
                }
                .mad-bento-card {
                    background: var(--surface);
                    border: 2px solid var(--border);
                    border-radius: var(--radius-xl);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.45s var(--ease-out);
                    padding: 0;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                }
                .mad-bento-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 28px 70px rgba(0,139,249,0.12);
                    border-color: rgba(0,139,249,0.2);
                }
                .mad-bento-content {
                    padding: 36px 32px 38px;
                }
                .mad-bento-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 24px;
                }
                .mad-bento-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s var(--ease-out);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                }
                .mad-bento-card:hover .mad-bento-icon {
                    transform: scale(1.12) rotate(5deg);
                    box-shadow: 0 10px 28px rgba(0,139,249,0.25);
                }
                .mad-bento-num {
                    font-size: 2rem;
                    font-weight: 900;
                    line-height: 1;
                    letter-spacing: -1px;
                    transition: all 0.3s;
                }
                .mad-bento-title {
                    font-size: 1.28rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 14px;
                    letter-spacing: -0.4px;
                    transition: color 0.3s;
                }
                .mad-bento-card:hover .mad-bento-title {
                    color: var(--accent);
                }
                .mad-bento-desc {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.75;
                    margin-bottom: 26px;
                }
                .mad-bento-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .mad-bento-tag {
                    font-size: 0.77rem;
                    color: var(--text-secondary);
                    background: var(--surface-dim);
                    padding: 8px 16px;
                    border-radius: var(--radius-sm);
                    font-weight: 600;
                    border: 1px solid var(--border);
                    transition: all 0.3s;
                }
                .mad-bento-card:hover .mad-bento-tag {
                    background: rgba(0,139,249,0.06);
                    border-color: rgba(0,139,249,0.15);
                    color: var(--accent);
                }
                /* Make first two cards span larger for bento effect */
                .bento-1 { grid-row: span 1; }
                .bento-2 { grid-row: span 1; }

                /* ============================================ */
                /*                  PORTFOLIO                    */
                /* ============================================ */
                .mad-portfolio {
                    padding: 110px 0;
                    background: #f8fafc;
                }
                .portfolio-wrapper {
                    margin-bottom: 30px;
                }
                .mad-visible .portfolio-wrapper {
                    animation: madFadeUp 0.6s ease both;
                }
                .mad-visible .portfolio-wrapper:nth-child(1) { animation-delay: 0.1s; }
                .mad-visible .portfolio-wrapper:nth-child(2) { animation-delay: 0.2s; }
                .mad-visible .portfolio-wrapper:nth-child(3) { animation-delay: 0.3s; }
                .mad-visible .portfolio-wrapper:nth-child(4) { animation-delay: 0.4s; }
                .mad-visible .portfolio-wrapper:nth-child(5) { animation-delay: 0.5s; }
                .mad-visible .portfolio-wrapper:nth-child(6) { animation-delay: 0.6s; }
                .mad-port-cta {
                    text-align: center;
                    margin-top: 28px;
                }
                .mad-btn-outline-dark {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #fff;
                    border: 2px solid #d4dbe6;
                    color: #0F3567;
                    padding: 15px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
                }
                .mad-btn-outline-dark:hover {
                    border-color: #008BF9;
                    color: #008BF9;
                    box-shadow: 0 8px 24px rgba(0,139,249,0.12);
                    transform: translateY(-2px);
                }

                /* ============================================ */
                /*                  CONTACT                      */
                /* ============================================ */
                .mad-contact-section {
                    padding: 110px 0;
                    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
                    position: relative;
                }
                .mad-contact-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle at 20% 80%, rgba(0,139,249,0.04) 0%, transparent 50%);
                    pointer-events: none;
                }
                .mad-contact-header {
                    text-align: center;
                    margin-bottom: 48px;
                }
                .mad-contact-badge {
                    display: inline-block;
                    background: rgba(0,139,249,0.08);
                    color: #008BF9;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 6px;
                }
                .mad-contact-header h2 {
                    font-size: clamp(2rem, 4vw, 2.8rem);
                    font-weight: 800;
                    color: #0F3567;
                    margin-bottom: 6px;
                    line-height: 1.2;
                }
                .mad-contact-header h2 span {
                    color: #008BF9;
                }
                .mad-contact-header p {
                    font-size: 1.05rem;
                    color: #64748b;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                
                .mad-contact-wrapper {
                    display: grid;
                    grid-template-columns: 380px 1fr;
                    gap: 50px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                /* Info Side */
                .mad-contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .mad-info-item {
                    display: flex;
                    gap: 20px;
                    background: #fff;
                    padding: 28px;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    border: 1px solid #e8edf4;
                    transition: all 0.3s;
                }
                .mad-info-item:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 32px rgba(0,139,249,0.12);
                    border-color: #008BF9;
                }
                .mad-info-icon-box {
                    width: 56px;
                    height: 56px;
                    flex-shrink: 0;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                }
                .mad-info-content h4 {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #0F3567;
                    margin-bottom: 6px;
                }
                .mad-info-content a {
                    font-size: 0.95rem;
                    color: #64748b;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .mad-info-content a:hover {
                    color: #008BF9;
                }
                
                .mad-benefits-list {
                    background: #fff;
                    padding: 28px;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    border: 1px solid #e8edf4;
                }
                .mad-benefit-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 0;
                    border-bottom: 1px solid #f1f5f9;
                }
                .mad-benefit-item:last-child {
                    border-bottom: none;
                }
                .mad-benefit-item svg {
                    color: #008BF9;
                    flex-shrink: 0;
                }
                .mad-benefit-item span {
                    font-size: 0.95rem;
                    color: #475569;
                    font-weight: 500;
                }
                
                /* Form Side */
                .mad-contact-form-wrapper {
                    position: relative;
                    background: #fff;
                    padding: 48px;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    border: 1px solid #e8edf4;
                }
                .mad-form-success-msg {
                    position: absolute;
                    inset: 0;
                    z-index: 10;
                    background: rgba(255,255,255,0.98);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 40px;
                    animation: madFadeUp 0.5s ease;
                }
                .mad-form-success-msg svg {
                    color: #22c55e;
                    margin-bottom: 20px;
                }
                .mad-form-success-msg h3 {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #0F3567;
                    margin-bottom: 8px;
                }
                .mad-form-success-msg p {
                    font-size: 1rem;
                    color: #64748b;
                    margin: 0;
                }
                
                .mad-contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .mad-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .mad-form-group {
                    display: flex;
                    flex-direction: column;
                }
                .mad-form-full {
                    grid-column: 1/-1;
                }
                .mad-form-group label {
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: #0F3567;
                    margin-bottom: 8px;
                    display: block;
                }
                .mad-form-group input,
                .mad-form-group select,
                .mad-form-group textarea {
                    width: 100%;
                    padding: 14px 18px;
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    font-size: 0.95rem;
                    color: #0F3567;
                    background: #f8fafc;
                    transition: all 0.3s;
                    outline: none;
                    font-family: inherit;
                }
                .mad-form-group input:focus,
                .mad-form-group select:focus,
                .mad-form-group textarea:focus {
                    border-color: #008BF9;
                    background: #fff;
                    box-shadow: 0 0 0 3px rgba(0,139,249,0.08);
                }
                .mad-form-group input::placeholder,
                .mad-form-group textarea::placeholder {
                    color: #94a3b8;
                }
                .mad-form-group select {
                    cursor: pointer;
                    -webkit-appearance: none;
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 14px center;
                    padding-right: 44px;
                }
                .mad-form-group textarea {
                    resize: vertical;
                    min-height: 130px;
                }
                
                .mad-submit-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: linear-gradient(135deg, #008BF9, #0070cc);
                    color: #fff;
                    padding: 16px 40px;
                    border: none;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 8px 24px rgba(0,139,249,0.3);
                    margin-top: 8px;
                    font-family: inherit;
                }
                .mad-submit-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 14px 36px rgba(0,139,249,0.4);
                }

                /* ============================================ */
                /*                RESPONSIVE                     */
                /* ============================================ */
                @media (max-width: 1199px) {
                    .mad-hero-layout {
                        grid-template-columns: 1fr;
                        gap: 60px;
                        text-align: center;
                    }
                    .mad-hero-content { max-width: 640px; margin: 0 auto; }
                    .mad-hero-desc { margin-left: auto; margin-right: auto; }
                    .mad-hero-stats { max-width: 460px; margin-left: auto; margin-right: auto; margin-bottom: 44px; }
                    .mad-hero-ctas { justify-content: center; }
                    .mad-hero-visual { order: -1; }
                    .mad-phone-showcase { width: 280px; }
                    .mad-phone-frame { width: 240px; height: 480px; }
                    .mad-section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
                    .mad-section-header.center { align-items: center; }
                    .mad-sh-desc { max-width: 100%; }
                    .mad-bento-grid { grid-template-columns: repeat(2, 1fr); }
                    .mad-contact-wrapper { grid-template-columns: 1fr; }
                    .mad-contact-info { display: none; }
                }
                @media (max-width: 991px) {
                    .mad-hero { padding: 140px 0 0; min-height: auto; }
                    .mad-capabilities, .mad-services { padding: 100px 0; }
                    .mad-portfolio, .mad-contact-section { padding: 90px 0; }
                    .mad-trust-inner { flex-direction: column; gap: 20px; }
                    .mad-trust-logos { justify-content: center; flex-wrap: wrap; gap: 20px; }
                    .mad-contact-form-wrapper { padding: 36px; }
                }
                @media (max-width: 767px) {
                    .mad-hero { padding: 120px 0 0; }
                    .mad-hero-visual { display: none; }
                    .mad-hero-stats { grid-template-columns: 1fr; max-width: 300px; }
                    .mad-hero-ctas { flex-direction: column; width: 100%; }
                    .mad-hero-ctas a { width: 100%; justify-content: center; }
                    .mad-section-header { margin-bottom: 48px; }
                    .mad-bento-grid { grid-template-columns: 1fr; }
                    .mad-cap-card-inner { padding: 24px; }
                    .mad-form-grid { grid-template-columns: 1fr; }
                    .mad-contact-form-wrapper { padding: 28px; }
                }
                @media (max-width: 480px) {
                    .mad-hero-badge { font-size: 0.7rem; padding: 8px 14px; }
                    .mad-trust-item { font-size: 0.7rem; }
                    .mad-contact-form-wrapper { padding: 24px; }
                    .mad-submit-btn { padding: 14px 32px; }
                }
            `}</style>
        </>
    )
}
