'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Shield, Zap, Globe, Lock, Server, Cpu, HardDrive, Cloud, ArrowRight, Check, CheckCircle2, Rocket, Star, Award, Heart, Users, Send, Phone, User, Briefcase, MessageSquare, Mail, ChevronDown, Database, Wifi, Activity, Monitor, Clock, RefreshCw, Layers, Settings } from "lucide-react"

export default function ServiceCloudHosting() {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', service: 'Cloud Hosting', message: '' })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [visibleSections, setVisibleSections] = useState({})

    const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: 'Cloud Hosting', message: '' })
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) setVisibleSections(prev => ({ ...prev, [entry.target.id]: true })) })
        }, { threshold: 0.15 })
        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const plans = [
        {
            name: "Shared cPanel", price: "X99", period: "/month*", popular: false, color: "#008BF9",
            features: ["10GB SSD Storage", "Unlimited Bandwidth", "Free SSL Certificate", "5 Email Accounts", "cPanel Control Panel", "Daily Backups", "99.9% Uptime"],
            icon: <Server size={26} />
        },
        {
            name: "VPS Hosting", price: "XX99", period: "/month*", popular: true, color: "#008BF9",
            features: ["100GB NVMe Storage", "4GB RAM / 2 vCPU", "Root Access", "Dedicated IP", "cPanel + WHM", "Priority Support", "Free Migration"],
            icon: <Cpu size={26} />
        },
        {
            name: "Dedicated Server", price: "XXX99", period: "/month*", popular: false, color: "#008BF9",
            features: ["500GB NVMe Storage", "16GB RAM / 8 vCPU", "Full Root Access", "Dedicated IP Address", "Free cPanel License", "24/7 Priority Support", "30-Day Guarantee"],
            icon: <HardDrive size={26} />
        }
    ]

    const features = [
        { icon: <Zap size={28} />, title: "Lightning Fast", desc: "NVMe SSD storage with LiteSpeed web server delivers 20x faster page loads.", color: "#008BF9" },
        { icon: <Shield size={28} />, title: "DDoS Protection", desc: "Enterprise-grade DDoS mitigation and proactive security monitoring 24/7.", color: "#008BF9" },
        { icon: <Globe size={28} />, title: "Global CDN", desc: "180+ edge locations worldwide for ultra-low latency content delivery.", color: "#008BF9" },
        { icon: <Lock size={28} />, title: "Free SSL", desc: "Auto-renewing Let's Encrypt SSL certificates included with every plan.", color: "#008BF9" },
        { icon: <RefreshCw size={28} />, title: "Auto Backups", desc: "Daily automated backups with one-click restore for total peace of mind.", color: "#008BF9" },
        { icon: <Activity size={28} />, title: "99.9% Uptime", desc: "SLA-backed uptime guarantee with redundant infrastructure and failover.", color: "#008BF9" },
    ]

    const stats = [
        { num: "99.9%", label: "Uptime SLA", icon: <Activity size={22} /> },
        { num: "180+", label: "Edge Locations", icon: <Globe size={22} /> },
        { num: "10K+", label: "Websites Hosted", icon: <Monitor size={22} /> },
        { num: "24/7", label: "Expert Support", icon: <Users size={22} /> },
    ]

    const trustItems = [
        { icon: <Activity size={20} />, text: "99.9% Uptime SLA" },
        { icon: <RefreshCw size={20} />, text: "Free Migration" },
        { icon: <Clock size={20} />, text: "24/7 Support" },
        { icon: <Shield size={20} />, text: "30-Day Guarantee" },
    ]

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">

                    {/* HERO */}
                    <section className="svc-hero">
                        <div className="svc-hero-bg">
                            <div className="svc-orb svc-orb-1"></div>
                            <div className="svc-orb svc-orb-2"></div>
                            <div className="svc-orb svc-orb-3"></div>
                            <div className="svc-mesh"></div>
                            <div className="svc-overlay"></div>
                        </div>
                        <div className="container">
                            <div className="svc-hero-inner">
                                <div className="svc-hero-content">
                                    <div className="svc-pill"><span className="svc-pill-dot"></span><span>Cloud Hosting Services</span></div>
                                    <h1 className="svc-hero-h1">Fast, Secure & Reliable <span className="svc-gradient-text">Cloud Hosting</span></h1>
                                    <p className="svc-hero-p">Deploy your applications on enterprise-grade cloud infrastructure with NVMe storage, global CDN, and 24/7 expert support. Experience blazing-fast performance and rock-solid reliability.</p>
                                    <div className="svc-hero-chips">
                                        <div className="svc-chip"><CheckCircle2 size={16} /> 99.9% Uptime</div>
                                        <div className="svc-chip"><CheckCircle2 size={16} /> NVMe SSD</div>
                                        <div className="svc-chip"><CheckCircle2 size={16} /> Free SSL</div>
                                    </div>
                                    <div className="svc-hero-actions">
                                        <a href="#ch-plans" className="svc-btn-glow" onClick={(e) => { e.preventDefault(); document.getElementById('ch-plans').scrollIntoView({ behavior: 'smooth' }) }}>
                                            <span>View Plans & Pricing</span><ArrowRight size={18} />
                                        </a>
                                        <a href="#ch-contact" className="svc-btn-glass" onClick={(e) => { e.preventDefault(); document.getElementById('ch-contact').scrollIntoView({ behavior: 'smooth' }) }}><Mail size={16} /><span>Get A Quote</span></a>
                                    </div>
                                </div>
                                <div className="svc-hero-visual">
                                    <div className="chv">
                                        {/* Cloud Architecture Layers */}
                                        <div className="chv-stack">
                                            {/* Top: CDN Layer */}
                                            <div className="chv-layer chv-l1">
                                                <div className="chv-layer-bar"></div>
                                                <div className="chv-layer-content">
                                                    <div className="chv-layer-icon"><Globe size={18} /></div>
                                                    <div className="chv-layer-info">
                                                        <span className="chv-layer-label">CDN EDGE</span>
                                                        <div className="chv-layer-row">
                                                            <strong>180+</strong>
                                                            <span className="chv-layer-tag">Locations</span>
                                                        </div>
                                                    </div>
                                                    <span className="chv-layer-status"><i></i>Active</span>
                                                </div>
                                            </div>
                                            <div className="chv-conn"><div className="chv-conn-line"></div></div>

                                            {/* Application Layer */}
                                            <div className="chv-layer chv-l2">
                                                <div className="chv-layer-bar"></div>
                                                <div className="chv-layer-content">
                                                    <div className="chv-layer-icon"><Layers size={18} /></div>
                                                    <div className="chv-layer-info">
                                                        <span className="chv-layer-label">APP SERVER</span>
                                                        <div className="chv-layer-row">
                                                            <strong>LiteSpeed</strong>
                                                            <span className="chv-layer-tag">HTTP/3</span>
                                                        </div>
                                                    </div>
                                                    <span className="chv-layer-status"><i></i>Running</span>
                                                </div>
                                            </div>
                                            <div className="chv-conn"><div className="chv-conn-line"></div></div>

                                            {/* Compute Layer */}
                                            <div className="chv-layer chv-l3">
                                                <div className="chv-layer-bar"></div>
                                                <div className="chv-layer-content">
                                                    <div className="chv-layer-icon"><Cpu size={18} /></div>
                                                    <div className="chv-layer-info">
                                                        <span className="chv-layer-label">COMPUTE</span>
                                                        <div className="chv-layer-row">
                                                            <strong>8 vCPU</strong>
                                                            <span className="chv-layer-tag">16GB RAM</span>
                                                        </div>
                                                    </div>
                                                    <span className="chv-layer-pct">45%</span>
                                                </div>
                                            </div>
                                            <div className="chv-conn"><div className="chv-conn-line"></div></div>

                                            {/* Storage Layer */}
                                            <div className="chv-layer chv-l4">
                                                <div className="chv-layer-bar"></div>
                                                <div className="chv-layer-content">
                                                    <div className="chv-layer-icon"><Database size={18} /></div>
                                                    <div className="chv-layer-info">
                                                        <span className="chv-layer-label">NVMe STORAGE</span>
                                                        <div className="chv-layer-row">
                                                            <strong>500GB</strong>
                                                            <span className="chv-layer-tag">SSD</span>
                                                        </div>
                                                    </div>
                                                    <span className="chv-layer-pct">38%</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right-side metric cards */}
                                        <div className="chv-metrics">
                                            {[
                                                { icon: <Activity size={15} />, label: 'Uptime', val: '99.99%', sub: 'SLA Guaranteed' },
                                                { icon: <Zap size={15} />, label: 'Latency', val: '12ms', sub: 'Avg Response' },
                                                { icon: <Shield size={15} />, label: 'Security', val: 'A+', sub: 'SSL Grade' },
                                                { icon: <RefreshCw size={15} />, label: 'Backups', val: 'Daily', sub: 'Auto Restore' },
                                            ].map((m, i) => (
                                                <div className="chv-metric" key={i} style={{ '--delay': `${i * 0.12}s` }}>
                                                    <div className="chv-metric-icon">{m.icon}</div>
                                                    <div className="chv-metric-body">
                                                        <span className="chv-metric-label">{m.label}</span>
                                                        <strong>{m.val}</strong>
                                                    </div>
                                                    <span className="chv-metric-sub">{m.sub}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom result bar */}
                                        <div className="chv-result">
                                            <div className="chv-result-glow"></div>
                                            <Server size={20} />
                                            <div className="chv-result-info">
                                                <span>Requests Served</span>
                                                <strong>14.2K/sec</strong>
                                            </div>
                                            <span className="chv-result-badge">All Systems ✓</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="svc-scroll"><ChevronDown size={20} /></div>
                    </section>

                    {/* STATS */}
                    <section className="ch-stats-modern" id="ch-stats" data-animate>
                        <div className="ch-stats-overlay"></div>
                        <div className="container">
                            <div className="svc-section-head">
                                <span className="svc-label">Our Achievement</span>
                                <h2 className="svc-h2">Track Record <span>Speaks for Itself</span></h2>
                                <p className="svc-subtext">Trusted by businesses worldwide for reliable cloud infrastructure</p>
                            </div>
                            <div className={`ch-stats-grid ${visibleSections['ch-stats'] ? 'visible' : ''}`}>
                                {stats.map((s, i) => (
                                    <div className="ch-stat-card" key={i} style={{ '--i': i }}>
                                        <div className="ch-stat-card-inner">
                                            <div className="ch-stat-icon-modern">{s.icon}</div>
                                            <div className="ch-stat-number">{s.num}</div>
                                            <div className="ch-stat-title">{s.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PRICING PLANS */}
                    <section className="ch-pricing" id="ch-plans" data-animate>
                        <div className="container">
                            <div className="svc-section-head">
                                <span className="svc-label">Hosting Plans</span>
                                <h2 className="svc-h2">Simple & Transparent <span>Pricing</span></h2>
                                <p className="svc-subtext">Choose the perfect plan for your needs. Upgrade or downgrade anytime.</p>
                            </div>
                            <div className={`ch-plans-grid ${visibleSections['ch-plans'] ? 'visible' : ''}`}>
                                {plans.map((plan, i) => (
                                    <div className={`ch-plan ${plan.popular ? 'popular' : ''}`} key={i} style={{ '--i': i, '--accent': plan.color }}>
                                        {plan.popular && <div className="ch-plan-badge">Most Popular</div>}
                                        <div className="ch-plan-icon">{plan.icon}</div>
                                        <h3 className="ch-plan-name">{plan.name}</h3>
                                        <div className="ch-plan-price"><span className="ch-price">{plan.price}</span><span className="ch-period">{plan.period}</span></div>
                                        <ul className="ch-plan-features">
                                            {plan.features.map((f, j) => (<li key={j}><Check size={16} /><span>{f}</span></li>))}
                                        </ul>
                                        <a href="#ch-contact" className={`ch-plan-btn ${plan.popular ? 'primary' : ''}`} onClick={(e) => { e.preventDefault(); document.getElementById('ch-contact').scrollIntoView({ behavior: 'smooth' }) }}>
                                            Get Started <ArrowRight size={16} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="ch-trust-row">
                                {trustItems.map((t, i) => (<div className="ch-trust" key={i}>{t.icon}<span>{t.text}</span></div>))}
                            </div>
                            <div className="ch-pricing-note">
                                <p><strong>*Limited Time Offer:</strong> Special pricing available! Contact us today to unlock exclusive discounts and get a personalized quote tailored to your business needs. 🎁</p>
                            </div>
                        </div>
                    </section>

                    {/* FEATURES */}
                    <section className="svc-services" id="ch-features" data-animate>
                        <div className="container">
                            <div className="svc-section-head">
                                <span className="svc-label">Infrastructure</span>
                                <h2 className="svc-h2">Enterprise-Grade <span>Features</span></h2>
                                <p className="svc-subtext">Everything you need for high-performance, secure web hosting</p>
                            </div>
                            <div className={`svc-services-grid ${visibleSections['ch-features'] ? 'visible' : ''}`}>
                                {features.map((f, i) => (
                                    <div className="svc-card" key={i} style={{ '--i': i, '--accent': f.color }}>
                                        <div className="svc-card-glow" style={{ display: 'none' }}></div>
                                        <div className="svc-card-icon">{f.icon}</div>
                                        <h3>{f.title}</h3>
                                        <p>{f.desc}</p>
                                        <div className="svc-card-line"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* WHY CHOOSE */}
                    <section className="svc-why" id="ch-why" data-animate>
                        <div className="svc-why-bg"></div>
                        <div className="container">
                            <div className="svc-section-head center-white">
                                <span className="svc-label light">Why TechModulus</span>
                                <h2 className="svc-h2 light">Why Host With <span>TechModulus?</span></h2>
                                <p className="svc-subtext light">Trusted by 10,000+ businesses for reliable, blazing-fast hosting</p>
                            </div>
                            <div className={`svc-why-grid ${visibleSections['ch-why'] ? 'visible' : ''}`}>
                                {[
                                    { icon: <Zap size={26} />, title: "Lightning Performance", desc: "NVMe SSDs, LiteSpeed server & built-in caching deliver the fastest loading times.", highlight: "20x Faster" },
                                    { icon: <Shield size={26} />, title: "Military-Grade Security", desc: "DDoS protection, WAF, malware scanning & real-time threat monitoring included.", highlight: "Always Protected" },
                                    { icon: <Globe size={26} />, title: "Global CDN Network", desc: "180+ edge locations ensuring your content loads instantly, anywhere in the world.", highlight: "180+ Locations" },
                                    { icon: <Users size={26} />, title: "Expert Support 24/7", desc: "Certified Linux & AWS engineers available around the clock via chat, phone & ticket.", highlight: "24/7 Support" },
                                    { icon: <RefreshCw size={26} />, title: "Free Migration", desc: "We'll migrate your existing website for free with zero downtime guaranteed.", highlight: "Zero Downtime" },
                                    { icon: <Layers size={26} />, title: "Scalable Architecture", desc: "Scale resources instantly as your traffic grows — no downtime, no hassle.", highlight: "Auto Scale" },
                                ].map((item, i) => (
                                    <div className="svc-why-card" key={i} style={{ '--i': i }}>
                                        <div className="svc-why-top"><div className="svc-why-icon">{item.icon}</div><span className="svc-why-badge">{item.highlight}</span></div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* GET IN TOUCH */}
                    <section className="ch-contact-section" id="ch-contact" data-animate>
                        <div className="container">
                            <div className="ch-contact-header">
                                <span className="ch-contact-badge">Get In Touch</span>
                                <h2>Start Your <span>Project</span> With Us</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.</p>
                            </div>
                            <div className="ch-contact-wrapper">
                                <div className="ch-contact-info">
                                    {/* <div className="ch-info-item">
                                        <div className="ch-info-icon-box"><Phone size={24}/></div>
                                        <div className="ch-info-content"><h4>Phone Number</h4><a href="tel:+918329042459">+91 8329042459</a></div>
                                    </div> */}
                                    <div className="ch-info-item">
                                        <div className="ch-info-icon-box"><Mail size={24} /></div>
                                        <div className="ch-info-content"><h4>Email Address</h4><a href="mailto:info@TechModulus.com">info@TechModulus.com</a></div>
                                    </div>
                                    <div className="ch-benefits-list">
                                        {['Free Server Audit', '24 Hour Response', 'Free Migration', '30-Day Guarantee'].map((t, i) => (
                                            <div className="ch-benefit-item" key={i}><CheckCircle2 size={20} /><span>{t}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ch-contact-form-wrapper">
                                    {formSubmitted && (<div className="ch-form-success-msg"><CheckCircle2 size={60} /><h3>Thank You!</h3><p>Your message has been sent successfully. We'll contact you soon.</p></div>)}
                                    <form className="ch-contact-form" onSubmit={handleFormSubmit}>
                                        <div className="ch-form-grid">
                                            <div className="ch-form-group"><label>Your Name *</label><input type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleFormChange} /></div>
                                            <div className="ch-form-group"><label>Email Address *</label><input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleFormChange} /></div>
                                        </div>
                                        <div className="ch-form-grid">
                                            {/* <div className="ch-form-group"><label>Phone Number *</label><input type="tel" name="mobile" placeholder="Enter your phone" required value={formData.mobile} onChange={handleFormChange}/></div> */}
                                            <div className="ch-form-group"><label>Service Required *</label>
                                                <select name="service" value={formData.service} onChange={handleFormChange}>
                                                    <option value="Cloud Hosting">Cloud Hosting</option><option value="Shared Hosting">Shared cPanel Hosting</option><option value="VPS Hosting">VPS Hosting</option><option value="Dedicated Server">Dedicated Server</option><option value="Web Development">Web Development</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="ch-form-group ch-form-full"><label>Project Details</label><textarea name="message" rows="5" placeholder="Tell us about your hosting requirements..." value={formData.message} onChange={handleFormChange}></textarea></div>
                                        <button type="submit" className="ch-submit-btn"><span>Send Message</span><ArrowRight size={20} /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer4 />
            <style dangerouslySetInnerHTML={{ __html: `
                
@keyframes svcFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes svcPulse{0%,100%{transform:scale(1);opacity:.45}50%{transform:scale(1.15);opacity:.25}}
@keyframes svcFadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes svcDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.7)}}
@keyframes svcScroll{0%{transform:translateY(0);opacity:1}50%{transform:translateY(8px);opacity:.4}100%{transform:translateY(0);opacity:1}}
@keyframes svcOrb{0%{transform:translate(0,0)}33%{transform:translate(30px,-20px)}66%{transform:translate(-20px,15px)}100%{transform:translate(0,0)}}

.svc-hero{position:relative;padding:170px 0 110px;background:linear-gradient(165deg,#070d1a 0%,#0a1628 40%,#0d1f3c 70%,#091527 100%);overflow:hidden;min-height:100vh;display:flex;align-items:center}
.svc-hero-bg{position:absolute;inset:0;pointer-events:none}
.svc-orb{position:absolute;border-radius:50%;filter:blur(80px)}
.svc-orb-1{width:600px;height:600px;background:rgba(0,139,249,.12);top:-200px;right:-100px;animation:svcOrb 20s ease-in-out infinite}
.svc-orb-2{width:450px;height:450px;background:rgba(99,102,241,.08);bottom:-150px;left:-100px;animation:svcOrb 15s ease-in-out infinite reverse}
.svc-orb-3{width:250px;height:250px;background:rgba(0,139,249,.1);top:40%;left:20%;animation:svcFloat 10s ease-in-out infinite}
.svc-mesh{position:absolute;inset:0;background-image:radial-gradient(rgba(0,139,249,.07) 1px,transparent 1px);background-size:32px 32px}
.svc-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 0%,rgba(7,13,26,.5) 100%)}
.svc-hero-inner{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;position:relative;z-index:2}
.svc-hero-content{position:relative}
.svc-pill{display:inline-flex;align-items:center;gap:10px;background:rgba(0,139,249,.1);border:1px solid rgba(0,139,249,.25);padding:10px 22px;border-radius:50px;margin-bottom:28px;backdrop-filter:blur(10px)}
.svc-pill-dot{width:8px;height:8px;border-radius:50%;background:#008BF9;animation:svcDot 2s ease infinite}
.svc-pill span{color:#94b8e0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px}
.svc-hero-h1{font-size:clamp(2.2rem,4.5vw,3.4rem);font-weight:800;color:#fff;line-height:1.12;margin-bottom:22px;letter-spacing:-.5px}
.svc-gradient-text{background:linear-gradient(135deg,#008BF9 0%,#6366f1 50%,#a78bfa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.svc-hero-p{font-size:1.08rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:28px;max-width:520px}
.svc-hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:36px}
.svc-chip{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);padding:8px 16px;border-radius:8px;color:rgba(255,255,255,.75);font-size:.85rem;font-weight:500;backdrop-filter:blur(4px)}
.svc-chip svg{color:#008BF9}
.svc-hero-actions{display:flex;gap:16px;flex-wrap:wrap}
.svc-btn-glow{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#008BF9,#0070cc);color:#fff;padding:17px 34px;border-radius:14px;font-weight:700;font-size:1rem;text-decoration:none;transition:all .35s;box-shadow:0 8px 32px rgba(0,139,249,.35);position:relative;overflow:hidden}
.svc-btn-glow:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(0,139,249,.5);color:#fff}
.svc-btn-glass{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);color:#fff;padding:16px 30px;border-radius:14px;font-weight:600;font-size:1rem;text-decoration:none;transition:all .3s;backdrop-filter:blur(10px)}
.svc-btn-glass:hover{background:rgba(255,255,255,.12);border-color:rgba(0,139,249,.4);color:#fff}
.svc-hero-visual{position:relative}
.svc-float{position:absolute;background:rgba(255,255,255,.95);border-radius:14px;padding:12px 18px;display:flex;align-items:center;gap:12px;box-shadow:0 12px 40px rgba(0,0,0,.15);animation:svcFloat 5s ease-in-out infinite;z-index:3}
.svc-float svg{color:#008BF9}.svc-float div{display:flex;flex-direction:column}
.svc-float small{font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;font-weight:600}
.svc-float strong{font-size:14px;color:#0F3567;font-weight:800}
.svc-float-1{top:20px;right:-10px;animation-delay:0s}.svc-float-2{bottom:30px;left:-10px;animation-delay:1.2s}
.svc-scroll{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.3);animation:svcScroll 2s ease infinite}

.svc-stats{position:relative;z-index:10;margin-top:-50px;padding:0;background:transparent}
.svc-stats-bar{display:grid;grid-template-columns:repeat(4,1fr);background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(15,53,103,.1);border:1px solid #e8edf4;overflow:hidden}
.svc-stats-bar.visible .svc-stat{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.1s)}
.svc-stat{padding:36px 28px;display:flex;align-items:center;gap:16px;border-right:1px solid #e8edf4;transition:all .3s;opacity:0}
.svc-stat:last-child{border-right:none}
.svc-stat:hover{background:linear-gradient(135deg,rgba(0,139,249,.03),rgba(99,102,241,.03))}
.svc-stat-icon{width:54px;height:54px;background:linear-gradient(135deg,rgba(0,139,249,.1),rgba(99,102,241,.08));border-radius:14px;display:flex;align-items:center;justify-content:center;color:#008BF9;flex-shrink:0}
.svc-stat-text{display:flex;flex-direction:column}
.svc-stat-num{font-size:1.7rem;font-weight:800;color:#0F3567;line-height:1}
.svc-stat-label{font-size:.82rem;color:#64748b;margin-top:4px}

.svc-section-head{text-align:center;margin-bottom:56px}
.svc-label{display:inline-flex;align-items:center;gap:8px;background:rgba(0,139,249,.08);color:#008BF9;padding:8px 22px;border-radius:50px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:18px;border:1px solid rgba(0,139,249,.12)}
.svc-label.light{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.8)}
.svc-h2{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;color:#0F3567;margin-bottom:14px;letter-spacing:-.3px}
.svc-h2 span{color:#008BF9}.svc-h2.light{color:#fff}.svc-h2.light span{color:#38bdf8}
.svc-subtext{font-size:1.05rem;color:#64748b;max-width:540px;margin:0 auto;line-height:1.7}
.svc-subtext.light{color:rgba(255,255,255,.55)}

.svc-services{padding:110px 0;background:#f8fafc}
.svc-services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.svc-services-grid.visible .svc-card{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.08s)}
.svc-card{background:#fff;border-radius:20px;padding:36px 28px;position:relative;border:1px solid #eaeef4;overflow:hidden;transition:all .4s cubic-bezier(.4,0,.2,1);opacity:0}
.svc-card:hover{transform:translateY(-10px);box-shadow:0 28px 56px rgba(0,139,249,.1);border-color:transparent}
.svc-card-glow{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),transparent);transform:scaleX(0);transform-origin:left;transition:transform .5s}
.svc-card:hover .svc-card-glow{transform:scaleX(1)}
.svc-card-icon{width:58px;height:58px;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 70%,black));border-radius:16px;display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:20px;transition:transform .4s;box-shadow:0 8px 20px color-mix(in srgb,var(--accent) 30%,transparent)}
.svc-card:hover .svc-card-icon{transform:scale(1.1) rotate(-3deg)}
.svc-card h3{font-size:1.15rem;font-weight:700;color:#0F3567;margin-bottom:10px}
.svc-card p{font-size:.9rem;color:#64748b;line-height:1.7;margin:0}
.svc-card-line{width:40px;height:3px;background:var(--accent);border-radius:2px;margin-top:18px;opacity:.3;transition:all .4s}
.svc-card:hover .svc-card-line{width:60px;opacity:1}

.svc-why{padding:110px 0;position:relative;overflow:hidden;background:linear-gradient(165deg,#070d1a 0%,#0a1628 40%,#0F3567 100%)}
.svc-why-bg{position:absolute;inset:0;background-image:radial-gradient(rgba(99,102,241,.06) 1px,transparent 1px);background-size:30px 30px}
.svc-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;position:relative;z-index:2}
.svc-why-grid.visible .svc-why-card{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.1s)}
.svc-why-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:34px 28px;transition:all .4s cubic-bezier(.4,0,.2,1);backdrop-filter:blur(8px);opacity:0;position:relative;overflow:hidden}
.svc-why-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#008BF9,#6366f1);transform:scaleX(0);transform-origin:left;transition:transform .5s}
.svc-why-card:hover::before{transform:scaleX(1)}
.svc-why-card:hover{background:rgba(255,255,255,.08);border-color:rgba(0,139,249,.25);transform:translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,.25)}
.svc-why-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.svc-why-icon{width:54px;height:54px;background:linear-gradient(135deg,rgba(0,139,249,.15),rgba(99,102,241,.1));border-radius:14px;display:flex;align-items:center;justify-content:center;color:#38bdf8;transition:all .3s}
.svc-why-card:hover .svc-why-icon{background:linear-gradient(135deg,#008BF9,#6366f1);color:#fff;box-shadow:0 8px 20px rgba(0,139,249,.3)}
.svc-why-badge{background:rgba(0,139,249,.12);color:#38bdf8;padding:5px 14px;border-radius:20px;font-size:.72rem;font-weight:700;letter-spacing:.5px;border:1px solid rgba(0,139,249,.2)}
.svc-why-card h3{font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:8px}
.svc-why-card p{font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.7;margin:0}

.svc-quote{padding:110px 0;position:relative;overflow:hidden;background:linear-gradient(160deg,#0a1628 0%,#0F3567 50%,#0a1e3d 100%)}
.svc-quote-bg{position:absolute;inset:0;pointer-events:none}
.svc-quote-orb1{position:absolute;width:500px;height:500px;background:rgba(0,139,249,.1);border-radius:50%;top:-200px;right:-200px;filter:blur(100px)}
.svc-quote-orb2{position:absolute;width:350px;height:350px;background:rgba(99,102,241,.08);border-radius:50%;bottom:-100px;left:-100px;filter:blur(80px)}
.svc-quote-layout{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;position:relative;z-index:2}
.svc-quote-left{color:#fff}
.svc-perks{margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.svc-perk{display:flex;align-items:center;gap:10px;color:rgba(255,255,255,.8);font-size:.92rem}
.svc-perk svg{color:#38bdf8;flex-shrink:0}
.svc-contacts{margin-top:36px;display:flex;flex-direction:column;gap:14px}
.svc-contacts a{display:flex;align-items:center;gap:12px;color:rgba(255,255,255,.6);text-decoration:none;font-size:.95rem;transition:color .3s}
.svc-contacts a svg{color:#38bdf8}.svc-contacts a:hover{color:#38bdf8}
.svc-quote-right{position:relative}
.svc-form-ok{position:absolute;inset:0;background:rgba(255,255,255,.97);border-radius:24px;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;animation:svcFadeUp .4s ease}
.svc-form-ok svg{color:#22c55e;margin-bottom:14px}.svc-form-ok h4{font-size:1.3rem;color:#0F3567;margin-bottom:6px;font-weight:700}.svc-form-ok p{color:#64748b;font-size:.92rem;margin:0}
.svc-form{background:#fff;border-radius:24px;padding:40px;display:grid;grid-template-columns:1fr 1fr;gap:16px;box-shadow:0 32px 64px rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1)}
.svc-field{position:relative}.svc-field.full{grid-column:1/-1}
.svc-field svg{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:#94a3b8;pointer-events:none;z-index:2}
.svc-field.full svg{top:20px;transform:none}
.svc-field input,.svc-field select,.svc-field textarea{width:100%;padding:16px 16px 16px 48px;border:2px solid #e8edf4;border-radius:14px;font-size:.95rem;color:#0F3567;background:#f8fafc;transition:all .3s;outline:none;font-family:inherit}
.svc-field input:focus,.svc-field select:focus,.svc-field textarea:focus{border-color:#008BF9;background:#fff;box-shadow:0 0 0 4px rgba(0,139,249,.08)}
.svc-field input::placeholder,.svc-field textarea::placeholder{color:#94a3b8}
.svc-field select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;padding-right:42px}
.svc-field textarea{resize:vertical;min-height:110px}
.svc-submit{grid-column:1/-1;display:flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#008BF9,#6366f1);color:#fff;padding:18px 36px;border:none;border-radius:14px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .35s;box-shadow:0 8px 28px rgba(0,139,249,.3);font-family:inherit}
.svc-submit:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(0,139,249,.4)}

.svc-cta{padding:100px 0;background:#fff}
.svc-cta-box{background:linear-gradient(145deg,#0a1628 0%,#0F3567 60%,#1a3a6b 100%);border-radius:28px;padding:64px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden;box-shadow:0 24px 60px rgba(15,53,103,.2)}
.svc-cta-box::before{content:'';position:absolute;width:400px;height:400px;background:radial-gradient(circle,rgba(0,139,249,.12),transparent 70%);right:-100px;top:-100px;border-radius:50%}
.svc-cta-left{position:relative;z-index:2;max-width:560px}
.svc-cta-left h2{font-size:clamp(1.5rem,3vw,2.1rem);font-weight:800;color:#fff;margin-bottom:12px}
.svc-cta-left h2 span{color:#38bdf8}
.svc-cta-left p{font-size:1rem;color:rgba(255,255,255,.6);margin-bottom:30px;line-height:1.7}
.svc-cta-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap}
.svc-cta-tel{display:flex;flex-direction:column;text-decoration:none}
.svc-cta-tel small{font-size:.78rem;color:rgba(255,255,255,.45)}
.svc-cta-tel strong{font-size:1.1rem;color:#38bdf8;font-weight:700}
.svc-cta-art{position:relative;width:140px;height:140px;display:flex;align-items:center;justify-content:center;color:#38bdf8;z-index:2}
.svc-cta-ring{position:absolute;width:100%;height:100%;background:rgba(0,139,249,.12);border-radius:50%;animation:svcPulse 3s ease-in-out infinite}

@media(max-width:1199px){
.svc-hero-inner{grid-template-columns:1fr;gap:48px}
.svc-hero-visual{max-width:520px;margin:0 auto}
.svc-services-grid{grid-template-columns:repeat(2,1fr)}
.svc-stats-bar{grid-template-columns:repeat(2,1fr)}
.svc-stat:nth-child(2){border-right:none}
.svc-why-grid{grid-template-columns:repeat(2,1fr)}
.svc-quote-layout{grid-template-columns:1fr;gap:48px}
.svc-cta-art{display:none}
}
@media(max-width:991px){
.svc-hero{padding:140px 0 80px;min-height:auto}
.svc-hero-visual{display:none}
.svc-scroll{display:none}
.svc-form{padding:32px 24px}
}
@media(max-width:767px){
.svc-hero{padding:130px 0 60px}
.svc-hero-h1{font-size:2rem}
.svc-services-grid{grid-template-columns:1fr}
.svc-stats-bar{grid-template-columns:1fr}
.svc-stat{border-right:none;border-bottom:1px solid #e8edf4}
.svc-stat:last-child{border-bottom:none}
.svc-why-grid{grid-template-columns:1fr}
.svc-cta-box{padding:40px 24px;flex-direction:column;text-align:center}
.svc-cta-actions{justify-content:center;flex-direction:column}
.svc-btn-glow{width:100%;justify-content:center}
.svc-hero-actions{flex-direction:column}
.svc-hero-actions a{width:100%;justify-content:center}
.svc-hero-chips{flex-direction:column}
.svc-form{grid-template-columns:1fr;padding:28px 20px}
.svc-perks{grid-template-columns:1fr}
}


                /* ===== CLOUD INFRA VISUAL ===== */
                @keyframes chvFadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
                @keyframes chvGlow { 0%,100%{opacity:.6} 50%{opacity:1} }
                @keyframes chvDot { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.4)} 50%{box-shadow:0 0 0 6px rgba(34,197,94,0)} }

                .chv { display:grid; grid-template-columns:1fr auto; gap:20px; align-items:start; position:relative; }
                .chv-stack { display:flex; flex-direction:column; gap:0; }
                .chv-layer {
                    position:relative; background:rgba(255,255,255,.04);
                    border:1px solid rgba(255,255,255,.07); border-radius:14px;
                    overflow:hidden; transition:all .35s;
                }
                .chv-layer:hover { background:rgba(255,255,255,.07); border-color:rgba(0,139,249,.25); transform:translateX(4px); }
                .chv-layer-bar { position:absolute; top:0; left:0; bottom:0; border-radius:14px; opacity:.08; }
                .chv-l1 .chv-layer-bar { width:100%; background:#008BF9; }
                .chv-l2 .chv-layer-bar { width:78%; background:#38bdf8; }
                .chv-l3 .chv-layer-bar { width:52%; background:#6366f1; }
                .chv-l4 .chv-layer-bar { width:32%; background:#a78bfa; }

                .chv-layer-content { position:relative; z-index:2; display:flex; align-items:center; gap:14px; padding:18px 20px; }
                .chv-layer-icon {
                    width:40px; height:40px; border-radius:10px;
                    display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#fff;
                }
                .chv-l1 .chv-layer-icon { background:linear-gradient(135deg,#008BF9,#0070cc); }
                .chv-l2 .chv-layer-icon { background:linear-gradient(135deg,#38bdf8,#0ea5e9); }
                .chv-l3 .chv-layer-icon { background:linear-gradient(135deg,#6366f1,#4f46e5); }
                .chv-l4 .chv-layer-icon { background:linear-gradient(135deg,#a78bfa,#7c3aed); }

                .chv-layer-info { flex:1; display:flex; flex-direction:column; gap:2px; }
                .chv-layer-label { font-size:.6rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; }
                .chv-l1 .chv-layer-label { color:#38bdf8; }
                .chv-l2 .chv-layer-label { color:#7dd3fc; }
                .chv-l3 .chv-layer-label { color:#a5b4fc; }
                .chv-l4 .chv-layer-label { color:#c4b5fd; }

                .chv-layer-row { display:flex; align-items:baseline; gap:8px; }
                .chv-layer-row strong { font-size:1.35rem; font-weight:800; color:#fff; letter-spacing:-.5px; line-height:1; }
                .chv-layer-tag { font-size:.7rem; color:rgba(255,255,255,.35); font-weight:500; }
                .chv-layer-status {
                    display:flex; align-items:center; gap:6px;
                    font-size:.7rem; color:#34d399; font-weight:600; white-space:nowrap;
                }
                .chv-layer-status i {
                    width:6px; height:6px; border-radius:50%; background:#22c55e; display:block;
                    animation:chvDot 2s ease infinite;
                }
                .chv-layer-pct { font-size:.85rem; font-weight:700; color:rgba(255,255,255,.2); min-width:40px; text-align:right; }

                .chv-conn { display:flex; flex-direction:column; align-items:center; height:16px; }
                .chv-conn-line { width:1px; height:100%; background:linear-gradient(180deg,rgba(0,139,249,.25),rgba(0,139,249,.08)); }

                /* Metric Cards */
                .chv-metrics { display:flex; flex-direction:column; gap:10px; padding-top:8px; }
                .chv-metric {
                    background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08);
                    border-radius:12px; padding:14px 16px; display:flex; align-items:center; gap:10px;
                    min-width:150px; backdrop-filter:blur(8px); transition:all .35s;
                    animation:chvFadeIn .5s ease both; animation-delay:var(--delay);
                }
                .chv-metric:hover { background:rgba(0,139,249,.08); border-color:rgba(0,139,249,.2); transform:translateY(-2px); }
                .chv-metric-icon {
                    width:32px; height:32px; border-radius:8px; background:rgba(0,139,249,.12);
                    display:flex; align-items:center; justify-content:center; color:#38bdf8; flex-shrink:0;
                }
                .chv-metric-body { display:flex; flex-direction:column; flex:1; }
                .chv-metric-label { font-size:.6rem; color:rgba(255,255,255,.4); font-weight:600; text-transform:uppercase; letter-spacing:1px; line-height:1; }
                .chv-metric-body strong { font-size:1.1rem; color:#fff; font-weight:800; line-height:1.2; }
                .chv-metric-sub { font-size:.6rem; color:rgba(255,255,255,.25); font-weight:500; white-space:nowrap; }

                /* Result bar */
                .chv-result {
                    grid-column:1/-1; display:flex; align-items:center; gap:14px;
                    background:linear-gradient(135deg,rgba(0,139,249,.12),rgba(99,102,241,.08));
                    border:1px solid rgba(0,139,249,.2); border-radius:14px; padding:18px 24px;
                    position:relative; overflow:hidden; margin-top:4px;
                }
                .chv-result > svg { color:#38bdf8; flex-shrink:0; }
                .chv-result-glow {
                    position:absolute; top:50%; left:20px; width:60px; height:60px; border-radius:50%;
                    background:rgba(0,139,249,.15); filter:blur(20px); transform:translateY(-50%); pointer-events:none;
                }
                .chv-result-info { flex:1; display:flex; flex-direction:column; position:relative; z-index:2; }
                .chv-result-info span { font-size:.65rem; color:rgba(255,255,255,.4); font-weight:600; text-transform:uppercase; letter-spacing:1px; }
                .chv-result-info strong { font-size:1.5rem; font-weight:800; color:#fff; letter-spacing:-.5px; }
                .chv-result-badge {
                    font-size:.75rem; font-weight:700; color:#34d399; background:rgba(52,211,153,.1);
                    padding:4px 14px; border-radius:20px; border:1px solid rgba(52,211,153,.15);
                    position:relative; z-index:2; animation:chvGlow 3s ease infinite;
                }

                /* ===== STATS (web-dev style) ===== */
                .ch-stats-modern { padding:120px 0; background:#f0f7ff; position:relative; overflow:hidden; border-top:1px solid #dae9f5; border-bottom:1px solid #dae9f5; }
                .ch-stats-overlay { position:absolute; inset:0; pointer-events:none; display:none; }
                .ch-stats-modern .svc-section-head { margin-bottom:70px; position:relative; z-index:2; }
                .ch-stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; position:relative; z-index:2; background:#d4e5f4; border:1px solid #d4e5f4; }
                .ch-stats-grid.visible .ch-stat-card { animation:svcFadeUp .6s ease forwards; animation-delay:calc(var(--i)*.1s); }
                .ch-stat-card { opacity:0; }
                .ch-stat-card-inner {
                    background:#ffffff; padding:50px 40px; text-align:center; position:relative;
                    transition:all .35s ease; height:100%;
                    display:flex; flex-direction:column; align-items:center; justify-content:center;
                }
                .ch-stat-card-inner::after {
                    content:''; position:absolute; bottom:0; left:50%; transform:translateX(-50%);
                    width:0; height:2px; background:#008BF9; transition:width .4s ease;
                }
                .ch-stat-card-inner:hover { background:#f8fafc; }
                .ch-stat-card-inner:hover::after { width:50%; }
                .ch-stat-icon-modern {
                    width:48px; height:48px; margin:0 auto 24px; background:transparent;
                    border:2px solid #e1e8f0; border-radius:12px;
                    display:flex; align-items:center; justify-content:center; color:#008BF9;
                    transition:all .35s ease; position:relative; z-index:2;
                }
                .ch-stat-card-inner:hover .ch-stat-icon-modern { border-color:#008BF9; background:rgba(0,139,249,.05); }
                .ch-stat-number {
                    font-size:clamp(2.5rem,4.5vw,3.5rem); font-weight:700; line-height:1; margin-bottom:12px;
                    position:relative; z-index:2; color:#0F3567; transition:color .3s ease;
                    font-family:system-ui,-apple-system,sans-serif;
                }
                .ch-stat-card-inner:hover .ch-stat-number { color:#008BF9; }
                .ch-stat-title { font-size:.875rem; color:#64748b; font-weight:500; letter-spacing:.3px; position:relative; z-index:2; transition:color .3s ease; }
                .ch-stat-card-inner:hover .ch-stat-title { color:#475569; }

                /* ===== PRICING (Premium) ===== */
                .ch-pricing{padding:110px 0;background:#f8fafc}
                .ch-plans-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-bottom:40px}
                .ch-plans-grid.visible .ch-plan{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.15s)}
                .ch-plan{background:#fff;border:1px solid #e8edf4;border-radius:20px;padding:44px 34px;text-align:center;position:relative;transition:all .4s cubic-bezier(.4,0,.2,1);opacity:0;overflow:hidden}
                .ch-plan::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:#008BF9;transform:scaleX(0);transition:transform .5s;transform-origin:left}
                .ch-plan:hover::before{transform:scaleX(1)}
                .ch-plan:hover{transform:translateY(-8px);box-shadow:0 24px 56px rgba(0,139,249,.1);border-color:rgba(0,139,249,.15)}
                .ch-plan.popular{border-color:rgba(0,139,249,.25);box-shadow:0 12px 40px rgba(0,139,249,.1);transform:scale(1.03)}
                .ch-plan.popular::before{transform:scaleX(1)}
                .ch-plan.popular:hover{transform:scale(1.03) translateY(-8px);box-shadow:0 24px 56px rgba(0,139,249,.15)}
                .ch-plan-badge{position:absolute;top:0;left:50%;transform:translateX(-50%);background:#008BF9;color:#fff;padding:6px 24px;border-radius:0 0 12px 12px;font-size:.72rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase}
                .ch-plan-icon{width:60px;height:60px;background:rgba(0,139,249,.06);border:2px solid rgba(0,139,249,.12);border-radius:16px;display:flex;align-items:center;justify-content:center;color:#008BF9;margin:0 auto 20px;transition:all .35s}
                .ch-plan:hover .ch-plan-icon{background:linear-gradient(135deg,#008BF9,#0070cc);color:#fff;border-color:transparent;box-shadow:0 8px 20px rgba(0,139,249,.25)}
                .ch-plan-name{font-size:1.1rem;font-weight:700;color:#0F3567;margin-bottom:14px;letter-spacing:-.2px}
                .ch-plan-price{margin-bottom:28px;padding-bottom:24px;border-bottom:1px solid #f1f5f9}
                .ch-price{font-size:2.6rem;font-weight:800;color:#0F3567;letter-spacing:-1px}
                .ch-period{font-size:.9rem;color:#94a3b8;font-weight:500}
                .ch-plan-features{list-style:none;padding:0;margin:0 0 28px;text-align:left}
                .ch-plan-features li{display:flex;align-items:center;gap:10px;padding:9px 0;color:#475569;font-size:.88rem;border-bottom:1px solid #f8fafc}
                .ch-plan-features li:last-child{border:none}
                .ch-plan-features svg{color:#008BF9;flex-shrink:0}
                .ch-plan-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:15px;border-radius:12px;font-weight:700;font-size:.92rem;text-decoration:none;transition:all .35s;background:#f8fafc;color:#0F3567;border:1px solid #e8edf4}
                .ch-plan-btn:hover{background:rgba(0,139,249,.06);border-color:#008BF9;color:#008BF9}
                .ch-plan-btn.primary{background:#008BF9;color:#fff;border-color:#008BF9;box-shadow:0 6px 20px rgba(0,139,249,.25)}
                .ch-plan-btn.primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(0,139,249,.35);background:#0070cc;color:#fff}
                .ch-trust-row{display:flex;justify-content:center;gap:40px;flex-wrap:wrap;padding-top:16px}
                .ch-trust{display:flex;align-items:center;gap:8px;color:#64748b;font-size:.9rem;font-weight:500}
                .ch-trust svg{color:#008BF9}
                .ch-pricing-note{margin-top:48px;padding:20px 28px;background:linear-gradient(135deg,rgba(0,139,249,.08) 0%,rgba(0,139,249,.04) 100%);border:1px solid rgba(0,139,249,.15);border-radius:16px;text-align:center}
                .ch-pricing-note p{margin:0;color:#0F3567;font-size:.95rem;font-weight:500;line-height:1.6}

                /* ===== CONTACT (web-dev style) ===== */
                .ch-contact-section{padding:110px 0;background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f8fafc 100%);position:relative}
                .ch-contact-section::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 80%,rgba(0,139,249,.04) 0%,transparent 50%);pointer-events:none}
                .ch-contact-header{text-align:center;margin-bottom:60px}
                .ch-contact-badge{display:inline-block;background:rgba(0,139,249,.08);color:#008BF9;padding:8px 20px;border-radius:50px;font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px}
                .ch-contact-header h2{font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#0F3567;margin-bottom:16px;line-height:1.2}
                .ch-contact-header h2 span{color:#008BF9}
                .ch-contact-header p{font-size:1.05rem;color:#64748b;max-width:600px;margin:0 auto;line-height:1.7}
                .ch-contact-wrapper{display:grid;grid-template-columns:380px 1fr;gap:50px;max-width:1200px;margin:0 auto}
                .ch-contact-info{display:flex;flex-direction:column;gap:24px}
                .ch-info-item{display:flex;gap:20px;background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.06);border:1px solid #e8edf4;transition:all .3s}
                .ch-info-item:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,139,249,.12);border-color:#008BF9}
                .ch-info-icon-box{width:56px;height:56px;flex-shrink:0;background:linear-gradient(135deg,#008BF9,#0070cc);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff}
                .ch-info-content h4{font-size:1rem;font-weight:700;color:#0F3567;margin-bottom:6px}
                .ch-info-content a{font-size:.95rem;color:#64748b;text-decoration:none;transition:color .3s}
                .ch-info-content a:hover{color:#008BF9}
                .ch-benefits-list{background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.06);border:1px solid #e8edf4}
                .ch-benefit-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #f1f5f9}
                .ch-benefit-item:last-child{border-bottom:none}
                .ch-benefit-item svg{color:#008BF9;flex-shrink:0}
                .ch-benefit-item span{font-size:.95rem;color:#475569;font-weight:500}
                .ch-contact-form-wrapper{position:relative;background:#fff;padding:48px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.08);border:1px solid #e8edf4}
                .ch-form-success-msg{position:absolute;inset:0;z-index:10;background:rgba(255,255,255,.98);border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;animation:svcFadeUp .5s ease}
                .ch-form-success-msg svg{color:#22c55e;margin-bottom:20px}
                .ch-form-success-msg h3{font-size:1.6rem;font-weight:800;color:#0F3567;margin-bottom:8px}
                .ch-form-success-msg p{font-size:1rem;color:#64748b;margin:0}
                .ch-contact-form{display:flex;flex-direction:column;gap:20px}
                .ch-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
                .ch-form-group{display:flex;flex-direction:column}
                .ch-form-full{grid-column:1/-1}
                .ch-form-group label{font-size:.88rem;font-weight:600;color:#0F3567;margin-bottom:8px;display:block}
                .ch-form-group input,.ch-form-group select,.ch-form-group textarea{width:100%;padding:14px 18px;border:2px solid #e2e8f0;border-radius:12px;font-size:.95rem;color:#0F3567;background:#f8fafc;transition:all .3s;outline:none;font-family:inherit}
                .ch-form-group input:focus,.ch-form-group select:focus,.ch-form-group textarea:focus{border-color:#008BF9;background:#fff;box-shadow:0 0 0 3px rgba(0,139,249,.08)}
                .ch-form-group input::placeholder,.ch-form-group textarea::placeholder{color:#94a3b8}
                .ch-form-group select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:44px}
                .ch-form-group textarea{resize:vertical;min-height:130px}
                .ch-submit-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#008BF9,#0070cc);color:#fff;padding:16px 40px;border:none;border-radius:12px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s;box-shadow:0 8px 24px rgba(0,139,249,.3);font-family:inherit}
                .ch-submit-btn:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,139,249,.4)}

                @media(max-width:1199px){
                    .chv{grid-template-columns:1fr;gap:16px}
                    .chv-metrics{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
                    .chv-metric{min-width:auto}
                    .ch-stats-grid{grid-template-columns:repeat(2,1fr)}
                    .ch-contact-wrapper{grid-template-columns:1fr;gap:40px}
                }
                @media(max-width:991px){
                    .ch-plans-grid{grid-template-columns:1fr;max-width:420px;margin-left:auto;margin-right:auto}
                    .ch-plan.popular{transform:none}.ch-plan.popular:hover{transform:translateY(-8px)}
                    .ch-contact-form-wrapper{padding:36px 28px}
                }
                @media(max-width:767px){
                    .ch-stats-grid{grid-template-columns:1fr}
                    .ch-form-grid{grid-template-columns:1fr}
                    .ch-contact-form-wrapper{padding:28px 20px}
                }
            ` }} />
        </>
    )
}
