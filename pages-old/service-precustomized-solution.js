import Link from "next/link"
import { useState, useEffect } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { ShoppingCart, Users, BarChart3, Building2, ArrowRight, Check, CheckCircle2, Rocket, Star, Award, Heart, Zap, Shield, Send, Phone, User, Briefcase, MessageSquare, Mail, ChevronDown, Settings, Package, Layers, Database, FileText, Clock, CreditCard, LineChart, Boxes, Stethoscope, Factory, Cog, Workflow, CircleDot, Target, Palette } from "lucide-react"

export default function ServicePrecustomizedSolution() {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', service: 'Pre Customised Solution', message: '' })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [visibleSections, setVisibleSections] = useState({})
    const [activeSolution, setActiveSolution] = useState(0)

    const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: 'Pre Customised Solution', message: '' })
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) setVisibleSections(prev => ({ ...prev, [entry.target.id]: true })) })
        }, { threshold: 0.15 })
        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const solutions = [
        {
            icon: <ShoppingCart size={28} />, title: "E-Commerce Suite", color: "#008BF9",
            desc: "Complete online store platform with inventory management, multi-gateway payments, and order tracking — ready to launch in weeks.",
            features: ["Multi-gateway Payments", "Inventory Sync", "Order Tracking", "Customer Portal", "Analytics Dashboard", "Mobile Responsive"],
            tag: "Most Popular"
        },
        {
            icon: <Users size={28} />,
            title: "CRM Platform",
            color: "#008BF9",
            desc: "Enterprise-grade customer relationship management with lead tracking, sales pipeline automation, and custom reporting.",
            features: ["Lead Management", "Sales Automation", "Custom Reports", "Email Integration", "Task Management", "Pipeline Tracking"],
            tag: "Enterprise",
        },
        {
            icon: <Factory size={28} />,
            title: "ERP System",
            color: "#008BF9",
            desc: "Integrated enterprise resource planning covering production, finance, HR, and supply chain management in one unified platform.",
            features: ["Production Planning", "Finance Module", "HR Management", "Supply Chain", "Inventory Control", "Custom Workflows"],
            tag: "Full Suite",
        },
        {
            icon: <Stethoscope size={28} />,
            title: "HMS Solution",
            color: "#008BF9",
            desc: "Hospital Management System with patient records, appointment scheduling, billing, and pharmacy management modules.",
            features: ["Patient Records", "Appointment System", "Billing & Insurance", "Pharmacy Module", "Lab Integration", "Staff Management"],
            tag: "Healthcare",
        }
    ]

    const stats = [
        { num: "2-4", label: "Weeks to Launch", icon: <Clock size={22} /> },
        { num: "70%", label: "Faster Delivery", icon: <Zap size={22} /> },
        { num: "100%", label: "Customizable", icon: <Settings size={22} /> },
        { num: "50+", label: "Solutions Deployed", icon: <Boxes size={22} /> },
    ]

    const processSteps = [
        { num: "01", icon: <Target size={24} />, title: "Choose Your Solution", desc: "Pick from our battle-tested solution templates that match your industry and requirements." },
        { num: "02", icon: <Cog size={24} />, title: "Customize & Configure", desc: "We tailor the platform to your brand, workflows, and specific business processes." },
        { num: "03", icon: <Rocket size={24} />, title: "Deploy & Launch", desc: "Go live with full training, documentation, and dedicated post-launch support." },
    ]

    const benefits = [
        { icon: <Zap size={26} />, title: "Lightning Fast Deployment", desc: "Go from concept to launch in just 2-4 weeks instead of months of custom development.", highlight: "2-4 Weeks" },
        { icon: <CreditCard size={26} />, title: "70% Cost Savings", desc: "Pre-built foundations dramatically cut development costs while maintaining quality.", highlight: "70% Savings" },
        { icon: <Settings size={26} />, title: "Fully Customizable", desc: "Every module, workflow, and interface element can be tailored to your exact needs.", highlight: "100% Flexible" },
        { icon: <Shield size={26} />, title: "Battle-Tested Code", desc: "Built on production-proven codebases serving thousands of users daily.", highlight: "Enterprise Ready" },
        { icon: <Layers size={26} />, title: "Scalable Architecture", desc: "Designed to grow with your business — from 10 users to 10,000 without rewriting.", highlight: "Auto Scale" },
        { icon: <Users size={26} />, title: "Dedicated Support", desc: "Full onboarding, training, and ongoing technical support with your dedicated team.", highlight: "24/7 Support" },
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
                                    <div className="svc-pill"><span className="svc-pill-dot"></span><span>Pre-Customized Solutions</span></div>
                                    <h1 className="svc-hero-h1">Ready-to-Deploy <span className="svc-gradient-text">Enterprise Solutions</span></h1>
                                    <p className="svc-hero-p">Skip months of development. Choose from our battle-tested solution templates — E-Commerce, CRM, ERP & HMS — fully customizable and ready to launch in weeks, not months.</p>
                                    <div className="svc-hero-chips">
                                        <div className="svc-chip"><CheckCircle2 size={16} /> Launch in 2-4 Weeks</div>
                                        <div className="svc-chip"><CheckCircle2 size={16} /> 70% Faster</div>
                                        <div className="svc-chip"><CheckCircle2 size={16} /> Fully Customizable</div>
                                    </div>
                                    <div className="svc-hero-actions">
                                        <a href="#pcs-solutions" className="svc-btn-glow" onClick={(e) => { e.preventDefault(); document.getElementById('pcs-solutions').scrollIntoView({ behavior: 'smooth' }) }}>
                                            <span>Explore Solutions</span><ArrowRight size={18} />
                                        </a>
                                        <a href="#svc-quote" className="svc-btn-glass" onClick={(e) => { e.preventDefault(); document.getElementById('svc-quote').scrollIntoView({ behavior: 'smooth' }) }}><Mail size={16} /><span>Get A Quote</span></a>
                                    </div>
                                </div>
                                <div className="svc-hero-visual">
                                    <div className="pcsv">
                                        {/* Pre-customized concept */}
                                        <div className="pcsv-header">
                                            <div className="pcsv-header-icon"><Layers size={16} /></div>
                                            <span>Pre-Built Solution Framework</span>
                                            <span className="pcsv-live"><i></i>Ready</span>
                                        </div>
                                        {/* Foundation layer */}
                                        <div className="pcsv-foundation">
                                            <div className="pcsv-found-label">CORE PLATFORM</div>
                                            <div className="pcsv-found-row">
                                                {['Auth', 'Database', 'API', 'Payments', 'Dashboard'].map((m, i) =>
                                                    <div className="pcsv-module" key={i}><Check size={12} /><span>{m}</span></div>
                                                )}
                                            </div>
                                            <div className="pcsv-found-bar"><div className="pcsv-found-fill"></div></div>
                                            <span className="pcsv-found-text">70% Pre-Built — Ship Faster</span>
                                        </div>
                                        {/* Customization layer */}
                                        <div className="pcsv-custom">
                                            <div className="pcsv-custom-label">YOUR CUSTOMIZATION</div>
                                            <div className="pcsv-custom-grid">
                                                <div className="pcsv-custom-item"><Settings size={14} /><span>Workflows</span></div>
                                                <div className="pcsv-custom-item"><Palette size={14} /><span>Branding</span></div>
                                                <div className="pcsv-custom-item"><Database size={14} /><span>Data Model</span></div>
                                                <div className="pcsv-custom-item"><Cog size={14} /><span>Integrations</span></div>
                                            </div>
                                        </div>
                                        {/* Output */}
                                        <div className="pcsv-output">
                                            <div className="pcsv-output-icon"><Rocket size={16} /></div>
                                            <div className="pcsv-output-info">
                                                <strong>Launch-Ready in 2–4 Weeks</strong>
                                                <span>Fully customized enterprise solution</span>
                                            </div>
                                            <span className="pcsv-output-badge">70% Faster</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="svc-scroll"><ChevronDown size={20} /></div>
                    </section>

                    {/* STATS */}
                    <section className="pcs-stats-modern" id="pcs-stats" data-animate>
                        <div className="container">
                            <div className="svc-section-head">
                                <span className="svc-label">Our Achievement</span>
                                <h2 className="svc-h2">Track Record <span>Speaks for Itself</span></h2>
                                <p className="svc-subtext">Trusted by businesses worldwide</p>
                            </div>
                            <div className={`pcs-stats-grid ${visibleSections['pcs-stats'] ? 'visible' : ''}`}>
                                {stats.map((s, i) => (
                                    <div className="pcs-stat-card" key={i} style={{ '--i': i }}>
                                        <div className="pcs-stat-card-inner">
                                            <div className="pcs-stat-icon-modern">{s.icon}</div>
                                            <div className="pcs-stat-number">{s.num}</div>
                                            <div className="pcs-stat-title">{s.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SOLUTIONS CATALOG */}
                    <section className="pcs-solutions" id="pcs-solutions" data-animate>
                        <div className="container">
                            <div className="svc-section-head">
                                <span className="svc-label">Solution Catalog</span>
                                <h2 className="svc-h2">Choose Your <span>Solution</span></h2>
                                <p className="svc-subtext">Production-ready platforms customized for your business</p>
                            </div>
                            <div className={`pcs-tabs ${visibleSections['pcs-solutions'] ? 'visible' : ''}`}>
                                <div className="pcs-tab-nav">
                                    {solutions.map((s, i) => (
                                        <button key={i} className={`pcs-tab-btn ${activeSolution === i ? 'active' : ''}`} onClick={() => setActiveSolution(i)}>
                                            {s.icon}<span>{s.title}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="pcs-tab-content">
                                    {solutions.map((sol, i) => (
                                        activeSolution === i && (
                                            <div className="pcs-sol-detail" key={i}>
                                                <div className="pcs-sol-info">
                                                    <div className="pcs-sol-tag">{sol.tag}</div>
                                                    <h3>{sol.title}</h3>
                                                    <p>{sol.desc}</p>
                                                    <a href="#svc-quote" className="svc-btn-glow" onClick={(e) => { e.preventDefault(); document.getElementById('svc-quote').scrollIntoView({ behavior: 'smooth' }) }}>
                                                        Get This Solution <ArrowRight size={18} />
                                                    </a>
                                                </div>
                                                <div className="pcs-sol-features">
                                                    <h4>Key Features</h4>
                                                    <div className="pcs-feat-list">
                                                        {sol.features.map((f, j) => (
                                                            <div className="pcs-feat" key={j}><CheckCircle2 size={18} /><span>{f}</span></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PROCESS */}
                    <section className="svc-process" id="pcs-process" data-animate>
                        <div className="svc-process-bg"></div>
                        <div className="container">
                            <div className="svc-section-head center-white" style={{ position: 'relative', zIndex: 2 }}>
                                <span className="svc-label light">How It Works</span>
                                <h2 className="svc-h2 light">3 Simple <span>Steps</span></h2>
                                <p className="svc-subtext light">From selection to deployment in just 2-4 weeks</p>
                            </div>
                            <div className={`pcs-steps-row ${visibleSections['pcs-process'] ? 'visible' : ''}`}>
                                {processSteps.map((step, i) => (
                                    <div className="pcs-step-card" key={i} style={{ '--i': i }}>
                                        <div className="pcs-step-num">{step.num}</div>
                                        <div className="pcs-step-icon">{step.icon}</div>
                                        <h4>{step.title}</h4>
                                        <p>{step.desc}</p>
                                        {i < processSteps.length - 1 && <div className="pcs-step-arrow"><ArrowRight size={20} /></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* BENEFITS / WHY CHOOSE */}
                    <section className="svc-why" id="pcs-why" data-animate>
                        <div className="svc-why-bg"></div>
                        <div className="container">
                            <div className="svc-section-head center-white">
                                <span className="svc-label light">Benefits</span>
                                <h2 className="svc-h2 light">Why Pre-Customized <span>Solutions?</span></h2>
                                <p className="svc-subtext light">The smart way to build enterprise software — faster, cheaper, better</p>
                            </div>
                            <div className={`svc-why-grid ${visibleSections['pcs-why'] ? 'visible' : ''}`}>
                                {benefits.map((item, i) => (
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
                    <section className="pcs-contact-section" id="svc-quote" data-animate>
                        <div className="container">
                            <div className="pcs-contact-header">
                                <span className="pcs-contact-badge">Get In Touch</span>
                                <h2>Start Your <span>Project</span> With Us</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.</p>
                            </div>
                            <div className="pcs-contact-wrapper">
                                <div className="pcs-contact-info">
                                    {/* <div className="pcs-info-item">
                                        <div className="pcs-info-icon-box"><Phone size={24}/></div>
                                        <div className="pcs-info-content"><h4>Phone Number</h4><a href="tel:+918329042459">+91 8329042459</a></div>
                                    </div> */}
                                    <div className="pcs-info-item">
                                        <div className="pcs-info-icon-box"><Mail size={24} /></div>
                                        <div className="pcs-info-content"><h4>Email Address</h4><a href="mailto:info@TechModulus.com">info@TechModulus.com</a></div>
                                    </div>
                                    <div className="pcs-benefits-list">
                                        {['Free Consultation', 'Custom Demo', '2-4 Week Delivery', 'Post-Launch Support'].map((t, i) => (
                                            <div className="pcs-benefit-item" key={i}><CheckCircle2 size={20} /><span>{t}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pcs-contact-form-wrapper">
                                    {formSubmitted && (<div className="pcs-form-success-msg"><CheckCircle2 size={60} /><h3>Thank You!</h3><p>Your message has been sent successfully. We'll contact you soon.</p></div>)}
                                    <form className="pcs-contact-form" onSubmit={handleFormSubmit}>
                                        <div className="pcs-form-grid">
                                            <div className="pcs-form-group"><label>Your Name *</label><input type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleFormChange} /></div>
                                            <div className="pcs-form-group"><label>Email Address *</label><input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleFormChange} /></div>
                                        </div>
                                        <div className="pcs-form-grid">
                                            {/* <div className="pcs-form-group"><label>Phone Number *</label><input type="tel" name="mobile" placeholder="Enter your phone" required value={formData.mobile} onChange={handleFormChange} /></div> */}
                                            <div className="pcs-form-group"><label>Service Required *</label>
                                                <select name="service" value={formData.service} onChange={handleFormChange}>
                                                    <option value="Pre Customised Solution">Pre Customised Solution</option><option value="E-Commerce Suite">E-Commerce Suite</option><option value="CRM Platform">CRM Platform</option><option value="ERP System">ERP System</option><option value="HMS Solution">HMS Solution</option><option value="Custom Software">Custom Software</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="pcs-form-group pcs-form-full"><label>Project Details</label><textarea name="message" rows="5" placeholder="Tell us about your business requirements..." value={formData.message} onChange={handleFormChange}></textarea></div>
                                        <button type="submit" className="pcs-submit-btn"><span>Send Message</span><ArrowRight size={20} /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
            <Footer4 />
            <style jsx>{`
                ${sharedServiceStyles}

                /* ===== PCSV HERO VISUAL ===== */
                @keyframes pcsvFadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
                @keyframes pcsvDot{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.4)}50%{box-shadow:0 0 0 5px rgba(34,197,94,0)}}
                @keyframes pcsvBarFill{from{width:0}to{width:70%}}
                .pcsv{display:flex;flex-direction:column;gap:10px;max-width:420px;margin-left:auto}
                .pcsv-header{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;animation:pcsvFadeIn .5s ease both}
                .pcsv-header-icon{width:30px;height:30px;background:linear-gradient(135deg,#008BF9,#0070cc);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0}
                .pcsv-header>span:first-of-type{flex:1;font-size:.8rem;font-weight:700;color:#fff;letter-spacing:.2px}
                .pcsv-live{display:flex;align-items:center;gap:5px;font-size:.65rem;color:#34d399;font-weight:700;background:rgba(52,211,153,.08);padding:4px 10px;border-radius:16px;border:1px solid rgba(52,211,153,.12)}
                .pcsv-live i{width:6px;height:6px;border-radius:50%;background:#22c55e;display:block;animation:pcsvDot 2s ease infinite}
                .pcsv-foundation{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 18px;animation:pcsvFadeIn .5s ease both;animation-delay:.1s}
                .pcsv-found-label{font-size:.55rem;font-weight:700;color:rgba(255,255,255,.35);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px}
                .pcsv-found-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
                .pcsv-module{display:flex;align-items:center;gap:5px;background:rgba(0,139,249,.08);border:1px solid rgba(0,139,249,.15);border-radius:6px;padding:5px 10px;font-size:.7rem;font-weight:600;color:#38bdf8}
                .pcsv-module svg{color:#34d399}
                .pcsv-found-bar{height:5px;background:rgba(255,255,255,.06);border-radius:20px;overflow:hidden;margin-bottom:6px}
                .pcsv-found-fill{height:100%;width:70%;background:linear-gradient(90deg,#008BF9,#38bdf8);border-radius:20px;animation:pcsvBarFill 1.5s ease both;animation-delay:.4s}
                .pcsv-found-text{font-size:.65rem;color:rgba(255,255,255,.35);font-weight:600}
                .pcsv-custom{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 18px;animation:pcsvFadeIn .5s ease both;animation-delay:.25s}
                .pcsv-custom-label{font-size:.55rem;font-weight:700;color:rgba(255,255,255,.35);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px}
                .pcsv-custom-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
                .pcsv-custom-item{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.03);border:1px dashed rgba(255,255,255,.1);border-radius:8px;padding:10px 12px;font-size:.75rem;font-weight:600;color:rgba(255,255,255,.6);transition:all .3s}
                .pcsv-custom-item:hover{background:rgba(0,139,249,.06);border-color:rgba(0,139,249,.2);color:#fff}
                .pcsv-custom-item svg{color:#38bdf8;flex-shrink:0}
                .pcsv-output{display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(0,139,249,.1),rgba(99,102,241,.06));border:1px solid rgba(0,139,249,.15);border-radius:10px;padding:14px 18px;animation:pcsvFadeIn .5s ease both;animation-delay:.4s}
                .pcsv-output-icon{width:36px;height:36px;background:linear-gradient(135deg,#008BF9,#0070cc);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0}
                .pcsv-output-info{flex:1;display:flex;flex-direction:column}
                .pcsv-output-info strong{font-size:.88rem;font-weight:800;color:#fff}
                .pcsv-output-info span{font-size:.65rem;color:rgba(255,255,255,.35);font-weight:500}
                .pcsv-output-badge{font-size:.68rem;font-weight:700;color:#34d399;background:rgba(52,211,153,.08);padding:3px 12px;border-radius:16px;border:1px solid rgba(52,211,153,.12)}

                /* ===== STATS (web-dev style) ===== */
                .pcs-stats-modern{padding:120px 0;background:#f0f7ff;position:relative;overflow:hidden;border-top:1px solid #dae9f5;border-bottom:1px solid #dae9f5}
                .pcs-stats-modern .svc-section-head{margin-bottom:70px;position:relative;z-index:2}
                .pcs-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;position:relative;z-index:2;background:#d4e5f4;border:1px solid #d4e5f4}
                .pcs-stats-grid.visible .pcs-stat-card{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.1s)}
                .pcs-stat-card{opacity:0}
                .pcs-stat-card-inner{background:#fff;padding:50px 40px;text-align:center;position:relative;transition:all .35s ease;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}
                .pcs-stat-card-inner::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:0;height:2px;background:#008BF9;transition:width .4s ease}
                .pcs-stat-card-inner:hover{background:#f8fafc}
                .pcs-stat-card-inner:hover::after{width:50%}
                .pcs-stat-icon-modern{width:48px;height:48px;margin:0 auto 24px;background:transparent;border:2px solid #e1e8f0;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#008BF9;transition:all .35s ease}
                .pcs-stat-card-inner:hover .pcs-stat-icon-modern{border-color:#008BF9;background:rgba(0,139,249,.05)}
                .pcs-stat-number{font-size:clamp(2.5rem,4.5vw,3.5rem);font-weight:700;line-height:1;margin-bottom:12px;color:#0F3567;transition:color .3s ease;font-family:system-ui,-apple-system,sans-serif}
                .pcs-stat-card-inner:hover .pcs-stat-number{color:#008BF9}
                .pcs-stat-title{font-size:.875rem;color:#64748b;font-weight:500;letter-spacing:.3px;transition:color .3s ease}
                .pcs-stat-card-inner:hover .pcs-stat-title{color:#475569}

                /* ===== SOLUTION TABS ===== */
                .pcs-solutions{padding:110px 0;background:#f8fafc}
                .pcs-tabs{animation:svcFadeUp .6s ease forwards}
                .pcs-tabs.visible{opacity:1}
                .pcs-tab-nav{display:flex;gap:12px;margin-bottom:32px;flex-wrap:wrap;justify-content:center}
                .pcs-tab-btn{display:flex;align-items:center;gap:10px;padding:14px 26px;border-radius:14px;border:2px solid #e8edf4;background:#fff;font-size:.95rem;font-weight:600;color:#64748b;cursor:pointer;transition:all .3s;font-family:inherit}
                .pcs-tab-btn:hover{border-color:#008BF9;color:#008BF9}
                .pcs-tab-btn.active{background:#008BF9;border-color:#008BF9;color:#fff;box-shadow:0 8px 24px rgba(0,139,249,.3)}
                .pcs-tab-btn.active svg{color:#fff}
                .pcs-tab-btn svg{color:#008BF9}
                .pcs-tab-content{animation:svcFadeUp .4s ease}
                .pcs-sol-detail{display:grid;grid-template-columns:1fr 1fr;gap:48px;background:#fff;border-radius:24px;padding:48px;border:1px solid #eaeef4;box-shadow:0 16px 40px rgba(15,53,103,.06)}
                .pcs-sol-tag{display:inline-block;background:linear-gradient(135deg,#008BF9,#0070cc);color:#fff;padding:6px 16px;border-radius:20px;font-size:.75rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;margin-bottom:18px}
                .pcs-sol-info h3{font-size:1.6rem;font-weight:800;color:#0F3567;margin-bottom:14px}
                .pcs-sol-info p{font-size:1rem;color:#64748b;line-height:1.8;margin-bottom:28px}
                .pcs-sol-features h4{font-size:1.1rem;font-weight:700;color:#0F3567;margin-bottom:20px}
                .pcs-feat-list{display:grid;grid-template-columns:1fr 1fr;gap:14px}
                .pcs-feat{display:flex;align-items:center;gap:10px;font-size:.92rem;color:#475569;font-weight:500}
                .pcs-feat svg{color:#008BF9;flex-shrink:0}

                /* ===== CONTACT (web-dev style) ===== */
                .pcs-contact-section{padding:110px 0;background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f8fafc 100%);position:relative}
                .pcs-contact-section::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 80%,rgba(0,139,249,.04) 0%,transparent 50%);pointer-events:none}
                .pcs-contact-header{text-align:center;margin-bottom:60px}
                .pcs-contact-badge{display:inline-block;background:rgba(0,139,249,.08);color:#008BF9;padding:8px 20px;border-radius:50px;font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px}
                .pcs-contact-header h2{font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#0F3567;margin-bottom:16px;line-height:1.2}
                .pcs-contact-header h2 span{color:#008BF9}
                .pcs-contact-header p{font-size:1.05rem;color:#64748b;max-width:600px;margin:0 auto;line-height:1.7}
                .pcs-contact-wrapper{display:grid;grid-template-columns:380px 1fr;gap:50px;max-width:1200px;margin:0 auto}
                .pcs-contact-info{display:flex;flex-direction:column;gap:24px}
                .pcs-info-item{display:flex;gap:20px;background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.06);border:1px solid #e8edf4;transition:all .3s}
                .pcs-info-item:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,139,249,.12);border-color:#008BF9}
                .pcs-info-icon-box{width:56px;height:56px;flex-shrink:0;background:linear-gradient(135deg,#008BF9,#0070cc);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff}
                .pcs-info-content h4{font-size:1rem;font-weight:700;color:#0F3567;margin-bottom:6px}
                .pcs-info-content a{font-size:.95rem;color:#64748b;text-decoration:none;transition:color .3s}
                .pcs-info-content a:hover{color:#008BF9}
                .pcs-benefits-list{background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.06);border:1px solid #e8edf4}
                .pcs-benefit-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #f1f5f9}
                .pcs-benefit-item:last-child{border-bottom:none}
                .pcs-benefit-item svg{color:#008BF9;flex-shrink:0}
                .pcs-benefit-item span{font-size:.95rem;color:#475569;font-weight:500}
                .pcs-contact-form-wrapper{position:relative;background:#fff;padding:48px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.08);border:1px solid #e8edf4}
                .pcs-form-success-msg{position:absolute;inset:0;z-index:10;background:rgba(255,255,255,.98);border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;animation:svcFadeUp .5s ease}
                .pcs-form-success-msg svg{color:#22c55e;margin-bottom:20px}
                .pcs-form-success-msg h3{font-size:1.6rem;font-weight:800;color:#0F3567;margin-bottom:8px}
                .pcs-form-success-msg p{font-size:1rem;color:#64748b;margin:0}
                .pcs-contact-form{display:flex;flex-direction:column;gap:20px}
                .pcs-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
                .pcs-form-group{display:flex;flex-direction:column}
                .pcs-form-full{grid-column:1/-1}
                .pcs-form-group label{font-size:.88rem;font-weight:600;color:#0F3567;margin-bottom:8px;display:block}
                .pcs-form-group input,.pcs-form-group select,.pcs-form-group textarea{width:100%;padding:14px 18px;border:2px solid #e2e8f0;border-radius:12px;font-size:.95rem;color:#0F3567;background:#f8fafc;transition:all .3s;outline:none;font-family:inherit}
                .pcs-form-group input:focus,.pcs-form-group select:focus,.pcs-form-group textarea:focus{border-color:#008BF9;background:#fff;box-shadow:0 0 0 3px rgba(0,139,249,.08)}
                .pcs-form-group input::placeholder,.pcs-form-group textarea::placeholder{color:#94a3b8}
                .pcs-form-group select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:44px}
                .pcs-form-group textarea{resize:vertical;min-height:130px}
                .pcs-submit-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#008BF9,#0070cc);color:#fff;padding:16px 40px;border:none;border-radius:12px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s;box-shadow:0 8px 24px rgba(0,139,249,.3);font-family:inherit}
                .pcs-submit-btn:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,139,249,.4)}

                /* ===== PROCESS STEPS ===== */
                .pcs-steps-row{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;position:relative;z-index:2}
                .pcs-steps-row.visible .pcs-step-card{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.15s)}
                .pcs-step-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:40px 32px;text-align:center;position:relative;backdrop-filter:blur(4px);transition:all .35s;opacity:0}
                .pcs-step-card:hover{background:rgba(255,255,255,.08);border-color:rgba(0,139,249,.3);transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,.2)}
                .pcs-step-num{font-size:3rem;font-weight:900;color:rgba(0,139,249,.1);line-height:1;margin-bottom:8px}
                .pcs-step-icon{width:60px;height:60px;background:linear-gradient(135deg,#008BF9,#0070cc);border-radius:18px;display:flex;align-items:center;justify-content:center;color:#fff;margin:0 auto 20px;box-shadow:0 8px 24px rgba(0,139,249,.25)}
                .pcs-step-card h4{font-size:1.15rem;font-weight:700;color:#fff;margin-bottom:10px}
                .pcs-step-card p{font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7;margin:0}
                .pcs-step-arrow{position:absolute;right:-24px;top:50%;transform:translateY(-50%);color:rgba(0,139,249,.3);z-index:3}

                @media(max-width:1199px){
                    .pcsv{max-width:100%}
                    .pcs-stats-grid{grid-template-columns:repeat(2,1fr)}
                    .pcs-contact-wrapper{grid-template-columns:1fr;gap:40px}
                }
                @media(max-width:991px){
                    .pcs-sol-detail{grid-template-columns:1fr;padding:32px}
                    .pcs-feat-list{grid-template-columns:1fr 1fr}
                    .pcs-steps-row{grid-template-columns:1fr;max-width:420px;margin:0 auto}
                    .pcs-step-arrow{display:none}
                    .pcs-tab-btn{padding:12px 18px;font-size:.85rem}
                    .pcs-contact-form-wrapper{padding:36px 28px}
                }
                @media(max-width:767px){
                    .pcs-tab-nav{flex-direction:column}
                    .pcs-tab-btn{justify-content:center}
                    .pcs-feat-list{grid-template-columns:1fr}
                    .pcs-sol-detail{padding:24px}
                    .pcs-stats-grid{grid-template-columns:1fr}
                    .pcs-form-grid{grid-template-columns:1fr}
                    .pcs-contact-form-wrapper{padding:28px 20px}
                    .pcsv-custom-grid{grid-template-columns:1fr}
                }
            `}</style>
        </>
    )
}

const sharedServiceStyles = `
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

.svc-process{padding:110px 0;position:relative;overflow:hidden;background:linear-gradient(160deg,#0a1628 0%,#0F3567 50%,#0a1e3d 100%)}
.svc-process-bg{position:absolute;inset:0;background-image:radial-gradient(rgba(0,139,249,.06) 1px,transparent 1px);background-size:28px 28px}

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
`
