import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Footer4 from "@/components/layout/footer/Footer4"
import { Cpu, Archive, Briefcase, Globe, Smartphone, TrendingUp, Server, Share2, Box } from "lucide-react"

export default function ServiceStyle4() {

    const arrowSvg = (
        <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
        </svg>
    )

    const services = [
        { icon: <Cpu className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 1, title: "Enterprise Intelligence", href: "/service-enterprise-intelligence", desc: "Enterprise AI and AI Governance — strategic AI adoption, policy, and oversight." },
        { icon: <Archive className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 2, title: "Enterprise Data Management", href: "/service-data-management", desc: "Enterprise Archiving, Application Archiving, and File Archiving for secure, compliant data lifecycles." },
        { icon: <Briefcase className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 3, title: "Application Retirement Services", href: "/service-app-retirement", desc: "Professional services — IT Management, vCIO, and IT consulting." },
        { icon: <Globe className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 4, title: "Web Development", href: "/service-web-development", desc: "Scalable web applications using modern stacks (React/Next.js, Node.js/backends)." },
        { icon: <Smartphone className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 5, title: "App Development", href: "/service-app-development", desc: "Native and cross-platform mobile apps for iOS and Android, built for performance." },
        { icon: <TrendingUp className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 6, title: "Digital Marketing", href: "/service-digital-marketing", desc: "Data-driven marketing, SEO, and campaign strategies to grow your online reach." },
        { icon: <Server className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 7, title: "Cloud Hosting Services", href: "/service-cloud-hosting", desc: "Reliable cloud and managed hosting with monitoring, backups and scaling." },
        { icon: <Share2 className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 8, title: "Social Media Management", href: "/service-social-media", desc: "Brand content, community engagement, and paid social campaigns to boost visibility." },
        { icon: <Box className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />, step: 9, title: "Pre-customised Solution", href: "/service-precustomized-solution", desc: "Tailored pre-configured solutions to accelerate deployment and reduce customization time." },
    ]

    return (
        <>
            <Layout headerStyle={-1} breadcrumbTitle="Solutions">
                {/*-service*/}
                <section className="service-section-one">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> What We Do</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> We Provide Wide Range Business Service</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6">
                                <p className="mr_bottom_10">From enterprise intelligence and data management to web development, cloud hosting, and digital marketing — we deliver end-to-end technology solutions that drive growth.</p>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_20" />
                        {/*-============spacing==========-*/}
                        <section className="service_post position-relative">
                            <div className="row">
                                {services.map((svc, i) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={i}>
                                        <div className="service_box type_four hover_1_get hover_1 color_three">
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                            <div className="content_box trans">
                                                <div className="top">
                                                    <div className="icon trans">{svc.icon}</div>
                                                    <div className="steps trans">{svc.step}</div>
                                                    <h4 className="title_24 trans">
                                                        <Link href={svc.href}>{svc.title}</Link>
                                                    </h4>
                                                </div>
                                                <div className="line_box"><div className="line" /></div>
                                                <div className="bottom">
                                                    <p className="trans">{svc.desc}</p>
                                                    <Link href={svc.href} className="rd_more">{arrowSvg}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-service end*/}


            </Layout>
            <Footer4 />
        </>
    )
}