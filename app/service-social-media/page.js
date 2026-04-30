'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import { Instagram, Youtube, Facebook, Linkedin, ArrowRight, Check, CheckCircle2, Rocket, Star, Award, Heart, Zap, Shield, Send, Phone, User, Briefcase, MessageSquare, Mail, ChevronDown, Users, Target, Eye, TrendingUp, BarChart3, Calendar, PenTool, Camera, Megaphone, Share2, MessageCircle, PlayCircle, Palette, Sparkles } from "lucide-react"

export default function ServiceSocialMedia() {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', service: 'Social Media Management', message: '' })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [visibleSections, setVisibleSections] = useState({})

    const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: 'Social Media Management', message: '' })
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) setVisibleSections(prev => ({ ...prev, [entry.target.id]: true })) })
        }, { threshold: 0.15 })
        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const services = [
        { icon: <PenTool size={26} />, title: "Content Strategy", desc: "Data-driven content calendars, brand voice development & creative storytelling that resonates with your audience.", color: "#008BF9" },
        { icon: <Users size={26} />, title: "Community Management", desc: "Active engagement, comment moderation, DM management & building loyal brand communities.", color: "#008BF9" },
        { icon: <BarChart3 size={26} />, title: "Performance Analytics", desc: "Detailed reporting, competitor analysis, audience insights & growth tracking dashboards.", color: "#008BF9" },
        { icon: <Megaphone size={26} />, title: "Paid Social Ads", desc: "Targeted ad campaigns on Instagram, Facebook, LinkedIn & YouTube with optimized ROAS.", color: "#008BF9" },
        { icon: <Camera size={26} />, title: "Content Production", desc: "Professional photography, video production, Reels creation & graphic design for all platforms.", color: "#008BF9" },
        { icon: <Share2 size={26} />, title: "Influencer Partnerships", desc: "Strategic brand collaborations with verified creators for authentic reach and engagement.", color: "#008BF9" },
    ]

    const stats = [
        { num: "500K+", label: "Followers Grown", icon: <Users size={22} /> },
        { num: "50M+", label: "Total Reach", icon: <Eye size={22} /> },
        { num: "200+", label: "Brands Managed", icon: <Star size={22} /> },
        { num: "12x", label: "Avg. Engagement", icon: <Heart size={22} /> },
    ]

    const platforms = [
        { name: "Instagram", icon: <Instagram size={28} />, color: "#008BF9", followers: "150K+", desc: "Reels, Stories, Posts & Shopping" },
        { name: "YouTube", icon: <Youtube size={28} />, color: "#008BF9", followers: "200K+", desc: "Videos, Shorts & Live Streams" },
        { name: "Facebook", icon: <Facebook size={28} />, color: "#008BF9", followers: "100K+", desc: "Pages, Groups & Ads" },
        { name: "LinkedIn", icon: <Linkedin size={28} />, color: "#008BF9", followers: "50K+", desc: "B2B Content & Lead Generation" },
    ]

    const creators = [
        { name: "RK Aadil", image: "/assets/images/rk-aadil.jpg", followers: "1.3M+", socials: [{ icon: <Youtube size={16} />, link: '#' }, { icon: <Facebook size={16} />, link: '#' }, { icon: <Instagram size={16} />, link: '#' }] },
        { name: "Shubham Mishra", image: "/assets/images/shubham-mishra.jpg", followers: "200K+", socials: [{ icon: <Facebook size={16} />, link: '#' }, { icon: <Instagram size={16} />, link: '#' }] },
        { name: "Abbas Alizada", image: "/assets/images/abbas-alizada.jpg", followers: "1M+", socials: [{ icon: <Youtube size={16} />, link: '#' }, { icon: <Instagram size={16} />, link: '#' }] },
        { name: "Ryusei Imai", image: "/assets/images/ryusei-imai.jpg", followers: "10M+", socials: [{ icon: <Youtube size={16} />, link: '#' }, { icon: <Facebook size={16} />, link: '#' }, { icon: <Instagram size={16} />, link: '#' }] },
    ]

    const whyItems = [
        { icon: <Target size={26} />, title: "Platform-First Strategy", desc: "Tailored strategies for each platform — what works on Instagram differs from LinkedIn and YouTube.", highlight: "Multi-Platform" },
        { icon: <TrendingUp size={26} />, title: "Data-Driven Growth", desc: "Every post, story and ad is backed by analytics and audience insights for maximum impact.", highlight: "Analytics First" },
        { icon: <Palette size={26} />, title: "Creative Excellence", desc: "In-house designers, videographers & copywriters creating scroll-stopping content daily.", highlight: "In-House Team" },
        { icon: <Calendar size={26} />, title: "Consistent Posting", desc: "Automated scheduling with strategic timing to maximize reach and engagement on every post.", highlight: "Daily Content" },
        { icon: <Shield size={26} />, title: "Brand Safety", desc: "Strict brand guidelines, crisis management protocols & reputation monitoring across platforms.", highlight: "Brand Protected" },
        { icon: <Sparkles size={26} />, title: "Viral Content", desc: "Trend-jacking, Reels optimization & engagement-first content that gets shared organically.", highlight: "Organic Growth" },
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
                                    <div className="svc-pill"><span className="svc-pill-dot"></span><span>Social Media Management</span></div>
                                    <h1 className="svc-hero-h1">Grow Your Brand. <span className="svc-gradient-text">Engage Your Audience.</span></h1>
                                    <p className="svc-hero-p">We create, manage, and grow your social media presence across Instagram, YouTube, Facebook & LinkedIn with data-driven strategies and creative content that converts followers into customers.</p>
                                    <div className="svc-hero-chips">
                                        <div className="svc-chip"><CheckCircle2 size={16} /> Content Creation</div>
                                        <div className="svc-chip"><CheckCircle2 size={16} /> Community Management</div>
                                        <div className="svc-chip"><CheckCircle2 size={16} /> Paid Ads</div>
                                    </div>
                                    <div className="svc-hero-actions">
                                        <a href="#sm-contact" className="svc-btn-glow" onClick={(e) => { e.preventDefault(); document.getElementById('sm-contact').scrollIntoView({ behavior: 'smooth' }) }}>
                                            <span>Get Free Social Audit</span><ArrowRight size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="svc-hero-visual">
                                    <div className="smv">
                                        {/* Hero badge */}
                                        <div className="smv-hero-badge">
                                            <Megaphone size={16} />
                                            <span>200+ Brands Successfully Promoted</span>
                                        </div>
                                        {/* Total Reach Showcase */}
                                        <div className="smv-reach-card">
                                            <div className="smv-reach-header">
                                                <div className="smv-reach-icon"><TrendingUp size={22} /></div>
                                                <div className="smv-reach-info">
                                                    <span className="smv-reach-label">COMBINED INFLUENCER REACH</span>
                                                    <strong className="smv-reach-number">50M+</strong>
                                                </div>
                                                <span className="smv-reach-live"><i></i>Live</span>
                                            </div>
                                            <div className="smv-reach-bar-wrap">
                                                <div className="smv-reach-bar" style={{ width: '92%' }}></div>
                                            </div>
                                        </div>
                                        {/* Platform breakdown */}
                                        <div className="smv-platforms">
                                            {[
                                                { icon: <Instagram size={20} />, name: 'Instagram', reach: '12M+', followers: '500K+', pct: 75, color: '#E1306C' },
                                                { icon: <Youtube size={20} />, name: 'YouTube', reach: '28M+', followers: '1.2M+', pct: 90, color: '#FF0000' },
                                                { icon: <Facebook size={20} />, name: 'Facebook', reach: '8M+', followers: '300K+', pct: 55, color: '#1877F2' },
                                            ].map((p, i) => (
                                                <div className="smv-plat-row" key={i} style={{ '--delay': `${i * 0.15}s` }}>
                                                    <div className="smv-plat-icon" style={{ background: `${p.color}20`, color: p.color }}>{p.icon}</div>
                                                    <div className="smv-plat-info">
                                                        <div className="smv-plat-top">
                                                            <span className="smv-plat-name">{p.name}</span>
                                                            <span className="smv-plat-reach">{p.reach} Reach</span>
                                                        </div>
                                                        <div className="smv-plat-bar-wrap">
                                                            <div className="smv-plat-bar" style={{ width: `${p.pct}%`, background: p.color }}></div>
                                                        </div>
                                                        <span className="smv-plat-followers"><Users size={12} /> {p.followers} Followers</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Result bar */}
                                        <div className="smv-result">
                                            <div className="smv-result-glow"></div>
                                            <Award size={20} />
                                            <div className="smv-result-info">
                                                <span>Total Creators Managed</span>
                                                <strong>50+ Influencers</strong>
                                            </div>
                                            <span className="smv-result-badge">Trusted ✓</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="svc-scroll"><ChevronDown size={20} /></div>
                    </section>



                    {/* SERVICES */}
                    <section className="svc-services" id="sm-services" data-animate>
                        <div className="container">
                            <div className="svc-section-head">
                                <span className="svc-label">What We Do</span>
                                <h2 className="svc-h2">Complete Social Media <span>Services</span></h2>
                                <p className="svc-subtext">End-to-end social media management to grow your brand online</p>
                            </div>
                            <div className={`svc-services-grid ${visibleSections['sm-services'] ? 'visible' : ''}`}>
                                {services.map((s, i) => (
                                    <div className="svc-card" key={i} style={{ '--i': i, '--accent': s.color }}>
                                        <div className="svc-card-glow" style={{ display: 'none' }}></div>
                                        <div className="svc-card-icon">{s.icon}</div>
                                        <h3>{s.title}</h3>
                                        <p>{s.desc}</p>
                                        <div className="svc-card-line"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PLATFORMS */}
                    <section className="sm-platforms" id="sm-platforms" data-animate>
                        <div className="sm-platforms-bg"></div>
                        <div className="container">
                            <div className="svc-section-head center-white" style={{ position: 'relative', zIndex: 2 }}>
                                <span className="svc-label light">Platforms</span>
                                <h2 className="svc-h2 light">We Manage All Major <span>Platforms</span></h2>
                                <p className="svc-subtext light">Tailored strategies for each platform to maximize your growth</p>
                            </div>
                            <div className={`sm-plat-grid ${visibleSections['sm-platforms'] ? 'visible' : ''}`}>
                                {platforms.map((p, i) => (
                                    <div className="sm-plat-card" key={i} style={{ '--i': i, '--accent': p.color }}>
                                        <div className="sm-plat-icon">{p.icon}</div>
                                        <h3>{p.name}</h3>
                                        <div className="sm-plat-followers">{p.followers} managed</div>
                                        <p>{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CREATORS */}
                    <section className="sm-creators" id="sm-creators" data-animate>
                        <div className="container">
                            <div className="svc-section-head">
                                <span className="svc-label">Managed Talent</span>
                                <h2 className="svc-h2">Creators Under Our <span>Management</span></h2>
                                <p className="svc-subtext">Industry-leading influencers powered by our strategic management & brand partnerships</p>
                            </div>
                            <div className={`sm-creators-grid ${visibleSections['sm-creators'] ? 'visible' : ''}`}>
                                {creators.map((c, i) => (
                                    <div className="sm-creator-card" key={i} style={{ '--i': i }}>
                                        <div className="sm-creator-img-wrap">
                                            <img src={c.image} alt={c.name} className="sm-creator-img" />
                                            <div className="sm-creator-overlay"></div>
                                            <div className="sm-creator-badge"><CheckCircle2 size={14} /> Verified</div>
                                        </div>
                                        <div className="sm-creator-body">
                                            <h4>{c.name}</h4>
                                            <div className="sm-creator-stats">
                                                <div className="sm-creator-stat-num">{c.followers}</div>
                                                <div className="sm-creator-stat-label">Followers</div>
                                            </div>
                                            <div className="sm-creator-socials">
                                                {c.socials.map((s, j) => (
                                                    <a href={s.link} key={j} className="sm-creator-social-link" target="_blank" rel="noopener noreferrer">{s.icon}</a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    <section className="sm-contact-section" id="sm-contact" data-animate>
                        <div className="container">
                            <div className="sm-contact-header">
                                <span className="sm-contact-badge">Get In Touch</span>
                                <h2>Start Your <span>Project</span> With Us</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.</p>
                            </div>
                            <div className="sm-contact-wrapper">
                                <div className="sm-contact-info">
                                    {/* <div className="sm-info-item">
                                        <div className="sm-info-icon-box"><Phone size={24}/></div>
                                        <div className="sm-info-content"><h4>Phone Number</h4><a href="tel:+918329042459">+91 8329042459</a></div>
                                    </div> */}
                                    <div className="sm-info-item">
                                        <div className="sm-info-icon-box"><Mail size={24} /></div>
                                        <div className="sm-info-content"><h4>Email Address</h4><a href="mailto:info@TechModulus.com">info@TechModulus.com</a></div>
                                    </div>
                                    <div className="sm-benefits-list">
                                        {['Free Social Audit', 'Content Calendar', '24hr Response', 'Monthly Reports'].map((t, i) => (
                                            <div className="sm-benefit-item" key={i}><CheckCircle2 size={20} /><span>{t}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="sm-contact-form-wrapper">
                                    {formSubmitted && (<div className="sm-form-success-msg"><CheckCircle2 size={60} /><h3>Thank You!</h3><p>Your message has been sent successfully. We'll contact you soon.</p></div>)}
                                    <form className="sm-contact-form" onSubmit={handleFormSubmit}>
                                        <div className="sm-form-grid">
                                            <div className="sm-form-group"><label>Your Name *</label><input type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleFormChange} /></div>
                                            <div className="sm-form-group"><label>Email Address *</label><input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleFormChange} /></div>
                                        </div>
                                        <div className="sm-form-grid">
                                            {/* <div className="sm-form-group"><label>Phone Number *</label><input type="tel" name="mobile" placeholder="Enter your phone" required value={formData.mobile} onChange={handleFormChange} /></div> */}
                                            <div className="sm-form-group"><label>Service Required *</label>
                                                <select name="service" value={formData.service} onChange={handleFormChange}>
                                                    <option value="Social Media Management">Social Media Management</option><option value="Instagram Marketing">Instagram Marketing</option><option value="YouTube Management">YouTube Management</option><option value="Facebook Marketing">Facebook Marketing</option><option value="Influencer Marketing">Influencer Marketing</option><option value="Content Creation">Content Creation</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sm-form-group sm-form-full"><label>Project Details</label><textarea name="message" rows="5" placeholder="Tell us about your social media goals..." value={formData.message} onChange={handleFormChange}></textarea></div>
                                        <button type="submit" className="sm-submit-btn"><span>Send Message</span><ArrowRight size={20} /></button>
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


                /* ===== SMV HERO VISUAL ===== */
                @keyframes smvFadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
                @keyframes smvGlow { 0%,100%{opacity:.6} 50%{opacity:1} }
                @keyframes smvDot { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.4)} 50%{box-shadow:0 0 0 6px rgba(34,197,94,0)} }
                @keyframes smvBarFill { from{width:0} to{width:var(--w)} }
                @keyframes smvSlideIn { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }

                .smv{display:flex;flex-direction:column;gap:10px;max-width:420px;margin-left:auto}
                .smv-hero-badge{display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(0,139,249,.12),rgba(99,102,241,.08));border:1px solid rgba(0,139,249,.2);border-radius:10px;padding:11px 16px;color:#fff;animation:smvFadeIn .5s ease both}
                .smv-hero-badge svg{color:#38bdf8;flex-shrink:0}
                .smv-hero-badge span{font-size:.82rem;font-weight:700;letter-spacing:.2px}
                .smv-reach-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 18px;backdrop-filter:blur(12px);animation:smvFadeIn .6s ease both;animation-delay:.1s}
                .smv-reach-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
                .smv-reach-icon{width:38px;height:38px;background:linear-gradient(135deg,#008BF9,#0070cc);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0}
                .smv-reach-info{flex:1;display:flex;flex-direction:column}
                .smv-reach-label{font-size:.55rem;color:rgba(255,255,255,.35);font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
                .smv-reach-number{font-size:1.5rem;font-weight:900;color:#fff;line-height:1;letter-spacing:-.5px}
                .smv-reach-live{display:flex;align-items:center;gap:5px;font-size:.65rem;color:#34d399;font-weight:700;background:rgba(52,211,153,.08);padding:4px 10px;border-radius:16px;border:1px solid rgba(52,211,153,.12)}
                .smv-reach-live i{width:6px;height:6px;border-radius:50%;background:#22c55e;display:block;animation:smvDot 2s ease infinite}
                .smv-reach-bar-wrap{height:5px;background:rgba(255,255,255,.06);border-radius:20px;overflow:hidden}
                .smv-reach-bar{height:100%;background:linear-gradient(90deg,#008BF9,#38bdf8,#6366f1);border-radius:20px;animation:smvBarFill 1.5s ease both;animation-delay:.3s}
                .smv-platforms{display:flex;flex-direction:column;gap:7px}
                .smv-plat-row{display:flex;align-items:center;gap:11px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:12px 14px;transition:all .35s;animation:smvSlideIn .5s ease both;animation-delay:var(--delay)}
                .smv-plat-row:hover{background:rgba(255,255,255,.07);border-color:rgba(0,139,249,.18);transform:translateX(3px)}
                .smv-plat-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
                .smv-plat-info{flex:1;display:flex;flex-direction:column;gap:4px}
                .smv-plat-top{display:flex;align-items:center;justify-content:space-between}
                .smv-plat-name{font-size:.8rem;font-weight:700;color:#fff}
                .smv-plat-reach{font-size:.72rem;font-weight:700;color:#38bdf8}
                .smv-plat-bar-wrap{height:3px;background:rgba(255,255,255,.06);border-radius:10px;overflow:hidden}
                .smv-plat-bar{height:100%;border-radius:10px;transition:width 1.2s ease}
                .smv-plat-followers{display:flex;align-items:center;gap:4px;font-size:.65rem;color:rgba(255,255,255,.35);font-weight:600}
                .smv-plat-followers svg{color:rgba(255,255,255,.25)}
                .smv-result{display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(0,139,249,.1),rgba(99,102,241,.06));border:1px solid rgba(0,139,249,.15);border-radius:10px;padding:14px 18px;position:relative;overflow:hidden}
                .smv-result>svg{color:#38bdf8;flex-shrink:0}
                .smv-result-glow{position:absolute;top:50%;left:16px;width:50px;height:50px;border-radius:50%;background:rgba(0,139,249,.12);filter:blur(18px);transform:translateY(-50%);pointer-events:none}
                .smv-result-info{flex:1;display:flex;flex-direction:column;position:relative;z-index:2}
                .smv-result-info span{font-size:.6rem;color:rgba(255,255,255,.35);font-weight:600;text-transform:uppercase;letter-spacing:1px}
                .smv-result-info strong{font-size:1.25rem;font-weight:800;color:#fff;letter-spacing:-.3px}
                .smv-result-badge{font-size:.68rem;font-weight:700;color:#34d399;background:rgba(52,211,153,.08);padding:3px 12px;border-radius:16px;border:1px solid rgba(52,211,153,.12);position:relative;z-index:2;animation:smvGlow 3s ease infinite}

                /* ===== PLATFORMS (premium, no multi-color) ===== */
                .sm-platforms{padding:110px 0;position:relative;overflow:hidden;background:linear-gradient(165deg,#070d1a 0%,#0a1628 40%,#0F3567 100%)}
                .sm-platforms-bg{position:absolute;inset:0;background-image:radial-gradient(rgba(0,139,249,.06) 1px,transparent 1px);background-size:28px 28px}
                .sm-plat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;position:relative;z-index:2}
                .sm-plat-grid.visible .sm-plat-card{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.12s)}
                .sm-plat-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:40px 28px;text-align:center;transition:all .4s;backdrop-filter:blur(8px);opacity:0;position:relative;overflow:hidden}
                .sm-plat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:#008BF9;transform:scaleX(0);transition:transform .5s;transform-origin:left}
                .sm-plat-card:hover::before{transform:scaleX(1)}
                .sm-plat-card:hover{background:rgba(255,255,255,.08);border-color:rgba(0,139,249,.25);transform:translateY(-8px);box-shadow:0 24px 56px rgba(0,0,0,.25)}
                .sm-plat-icon{width:64px;height:64px;background:rgba(0,139,249,.08);border:2px solid rgba(0,139,249,.15);border-radius:18px;display:flex;align-items:center;justify-content:center;color:#38bdf8;margin:0 auto 20px;transition:all .35s}
                .sm-plat-card:hover .sm-plat-icon{background:linear-gradient(135deg,#008BF9,#0070cc);color:#fff;border-color:transparent;box-shadow:0 8px 24px rgba(0,139,249,.3)}
                .sm-plat-card h3{font-size:1.15rem;font-weight:700;color:#fff;margin-bottom:6px}
                .sm-plat-followers{font-size:.82rem;color:#38bdf8;font-weight:700;margin-bottom:12px}
                .sm-plat-card p{font-size:.85rem;color:rgba(255,255,255,.5);line-height:1.6;margin:0}

                /* ===== CREATORS (premium branded cards) ===== */
                .sm-creators{padding:110px 0;background:linear-gradient(165deg,#070d1a 0%,#0a1628 40%,#0F3567 100%);position:relative;overflow:hidden}
                .sm-creators::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,139,249,.04) 1px,transparent 1px);background-size:30px 30px}
                .sm-creators .svc-section-head{position:relative;z-index:2}
                .sm-creators .svc-label{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.8)}
                .sm-creators .svc-h2{color:#fff}
                .sm-creators .svc-h2 span{color:#38bdf8}
                .sm-creators .svc-subtext{color:rgba(255,255,255,.5)}
                .sm-creators-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;position:relative;z-index:2}
                .sm-creators-grid.visible .sm-creator-card{animation:svcFadeUp .6s ease forwards;animation-delay:calc(var(--i)*.12s)}
                .sm-creator-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:0;text-align:center;transition:all .45s cubic-bezier(.4,0,.2,1);opacity:0;overflow:hidden;backdrop-filter:blur(8px)}
                .sm-creator-card:hover{transform:translateY(-10px);box-shadow:0 32px 64px rgba(0,0,0,.35);border-color:rgba(0,139,249,.3);background:rgba(255,255,255,.07)}
                .sm-creator-img-wrap{width:100%;height:260px;position:relative;overflow:hidden;background:#0a1628}
                .sm-creator-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease}
                .sm-creator-card:hover .sm-creator-img{transform:scale(1.06)}
                .sm-creator-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(7,13,26,.85) 100%);pointer-events:none}
                .sm-creator-badge{position:absolute;top:14px;right:14px;display:flex;align-items:center;gap:5px;background:rgba(0,139,249,.85);backdrop-filter:blur(8px);padding:5px 12px;border-radius:20px;color:#fff;font-size:.68rem;font-weight:700;letter-spacing:.3px}
                .sm-creator-badge svg{width:14px;height:14px}
                .sm-creator-body{padding:24px 22px 26px}
                .sm-creator-card h4{font-size:1.2rem;font-weight:800;color:#fff;margin:0 0 16px;letter-spacing:-.2px}
                .sm-creator-stats{display:flex;flex-direction:column;align-items:center;gap:2px;margin-bottom:20px;padding:14px 0;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)}
                .sm-creator-stat-num{font-size:1.6rem;font-weight:900;color:#38bdf8;letter-spacing:-.5px;line-height:1}
                .sm-creator-stat-label{font-size:.7rem;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:1.5px}
                .sm-creator-socials{display:flex;align-items:center;justify-content:center;gap:10px}
                .sm-creator-social-link{width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);transition:all .35s;text-decoration:none}
                .sm-creator-social-link:hover{background:#008BF9;color:#fff;border-color:#008BF9;box-shadow:0 6px 20px rgba(0,139,249,.35);transform:translateY(-3px)}

                /* ===== CONTACT (web-dev style) ===== */
                .sm-contact-section{padding:110px 0;background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f8fafc 100%);position:relative}
                .sm-contact-section::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 80%,rgba(0,139,249,.04) 0%,transparent 50%);pointer-events:none}
                .sm-contact-header{text-align:center;margin-bottom:60px}
                .sm-contact-badge{display:inline-block;background:rgba(0,139,249,.08);color:#008BF9;padding:8px 20px;border-radius:50px;font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px}
                .sm-contact-header h2{font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#0F3567;margin-bottom:16px;line-height:1.2}
                .sm-contact-header h2 span{color:#008BF9}
                .sm-contact-header p{font-size:1.05rem;color:#64748b;max-width:600px;margin:0 auto;line-height:1.7}
                .sm-contact-wrapper{display:grid;grid-template-columns:380px 1fr;gap:50px;max-width:1200px;margin:0 auto}
                .sm-contact-info{display:flex;flex-direction:column;gap:24px}
                .sm-info-item{display:flex;gap:20px;background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.06);border:1px solid #e8edf4;transition:all .3s}
                .sm-info-item:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,139,249,.12);border-color:#008BF9}
                .sm-info-icon-box{width:56px;height:56px;flex-shrink:0;background:linear-gradient(135deg,#008BF9,#0070cc);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff}
                .sm-info-content h4{font-size:1rem;font-weight:700;color:#0F3567;margin-bottom:6px}
                .sm-info-content a{font-size:.95rem;color:#64748b;text-decoration:none;transition:color .3s}
                .sm-info-content a:hover{color:#008BF9}
                .sm-benefits-list{background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.06);border:1px solid #e8edf4}
                .sm-benefit-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #f1f5f9}
                .sm-benefit-item:last-child{border-bottom:none}
                .sm-benefit-item svg{color:#008BF9;flex-shrink:0}
                .sm-benefit-item span{font-size:.95rem;color:#475569;font-weight:500}
                .sm-contact-form-wrapper{position:relative;background:#fff;padding:48px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.08);border:1px solid #e8edf4}
                .sm-form-success-msg{position:absolute;inset:0;z-index:10;background:rgba(255,255,255,.98);border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;animation:svcFadeUp .5s ease}
                .sm-form-success-msg svg{color:#22c55e;margin-bottom:20px}
                .sm-form-success-msg h3{font-size:1.6rem;font-weight:800;color:#0F3567;margin-bottom:8px}
                .sm-form-success-msg p{font-size:1rem;color:#64748b;margin:0}
                .sm-contact-form{display:flex;flex-direction:column;gap:20px}
                .sm-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
                .sm-form-group{display:flex;flex-direction:column}
                .sm-form-full{grid-column:1/-1}
                .sm-form-group label{font-size:.88rem;font-weight:600;color:#0F3567;margin-bottom:8px;display:block}
                .sm-form-group input,.sm-form-group select,.sm-form-group textarea{width:100%;padding:14px 18px;border:2px solid #e2e8f0;border-radius:12px;font-size:.95rem;color:#0F3567;background:#f8fafc;transition:all .3s;outline:none;font-family:inherit}
                .sm-form-group input:focus,.sm-form-group select:focus,.sm-form-group textarea:focus{border-color:#008BF9;background:#fff;box-shadow:0 0 0 3px rgba(0,139,249,.08)}
                .sm-form-group input::placeholder,.sm-form-group textarea::placeholder{color:#94a3b8}
                .sm-form-group select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:44px}
                .sm-form-group textarea{resize:vertical;min-height:130px}
                .sm-submit-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#008BF9,#0070cc);color:#fff;padding:16px 40px;border:none;border-radius:12px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s;box-shadow:0 8px 24px rgba(0,139,249,.3);font-family:inherit}
                .sm-submit-btn:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,139,249,.4)}

                @media(max-width:1199px){
                    .smv{max-width:100%}
                    .smv-cta-row{grid-template-columns:1fr}
                    .sm-plat-grid{grid-template-columns:repeat(2,1fr)}
                    .sm-creators-grid{grid-template-columns:repeat(2,1fr)}
                    .sm-contact-wrapper{grid-template-columns:1fr;gap:40px}
                }
                @media(max-width:991px){
                    .sm-contact-form-wrapper{padding:36px 28px}
                    .sm-creator-img-wrap{height:220px}
                }
                @media(max-width:767px){
                    .sm-plat-grid{grid-template-columns:1fr}
                    .sm-creators-grid{grid-template-columns:1fr;max-width:380px;margin:0 auto}
                    .sm-creator-img-wrap{height:280px}
                    .sm-form-grid{grid-template-columns:1fr}
                    .sm-contact-form-wrapper{padding:28px 20px}
                }
            ` }} />
        </>
    )
}
