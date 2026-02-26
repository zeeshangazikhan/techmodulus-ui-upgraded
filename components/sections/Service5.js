import Link from "next/link"
import { Palette, Globe, Smartphone, TrendingUp, Server, Share2, Cpu, Archive, Briefcase, Box } from "lucide-react"

export default function Service5() {
    return (
        <>
            <section className="service-section position-relative bg_op_1" style={{ backgroundImage: 'url(/assets/images/service/ser-bg-h4-min.jpg)' }}>
                <div className="background_overlay bg_10 z_0" />
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <div className="section_title text-center  color_white">
                                <h4 className="sm_title">What We Do</h4>
                                <div className="title_whole">
                                    <h2 className="title">
                                        We Provide Wide Range Business Service.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <section className="service_post position-relative">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Cpu className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />
                                            </div>
                                            <div className="steps trans">7</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-enterprise-intelligence">Enterprise <br />
                                                    Intelligence</Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Enterprise AI and AI Governance — strategic AI adoption, policy, and oversight.
                                            </p>
                                            <Link href="/service-enterprise-intelligence" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Archive className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />
                                            </div>
                                            <div className="steps trans">8</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-data-management">Enterprise
                                                    Data Management</Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Enterprise Archiving, Application Archiving, and File Archiving for secure, compliant data lifecycles.
                                            </p>
                                            <Link href="/service-data-management" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Briefcase className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />
                                            </div>
                                            <div className="steps trans">9</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-app-retirement">Application
                                                    Retirement Services</Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Professional services — IT Management, vCIO, and IT consulting.
                                            </p>
                                            <Link href="/service-app-retirement" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Globe className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} /></div>
                                            <div className="steps trans">2</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-web-development">Web
                                                    Development
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Scalable web applications using
                                                modern stacks (React/Next.js,
                                                Node.js/backends).
                                            </p>
                                            <Link href="/service-web-development" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Smartphone className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} /></div>
                                            <div className="steps trans">3</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-app-development">
                                                    App
                                                    Development
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Native and cross-platform mobile
                                                apps for iOS and Android,
                                                built for performance.
                                            </p>
                                            <Link href="/service-app-development" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <TrendingUp className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} /></div>
                                            <div className="steps trans">4</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-digital-marketing">
                                                    Digital
                                                    Marketing
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Data-driven marketing, SEO,
                                                and campaign strategies to grow
                                                your online reach.
                                            </p>
                                            <Link href="/service-digital-marketing" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Server className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} /></div>
                                            <div className="steps trans">5</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-cloud-hosting">
                                                    Cloud Hosting <br/>
                                                    Services
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Reliable cloud and managed
                                                hosting with monitoring,
                                                backups and scaling.
                                            </p>
                                            <Link href="/service-cloud-hosting" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Share2 className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} /></div>
                                            <div className="steps trans">6</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-social-media">Social Media Management
                                                  
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Brand content, community
                                                engagement, and paid social
                                                campaigns to boost visibility.
                                            </p>
                                            <Link href="/service-social-media" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                               <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_four color_three hover_1_get hover_1">
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="content_box trans">
                                        <div className="top">
                                            <div className="icon trans">
                                                <Box className="trans" size={32} style={{ color: '#3b82f6', transition: 'color 0.3s ease' }} />
                                            </div>
                                            <div className="steps trans">10</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service-precustomized-solution">Pre-customised
                                                    Solution</Link>
                                            </h4>
                                        </div>
                                        <div className="line_box">
                                            <div className="line" />
                                        </div>
                                        <div className="bottom">
                                            <p className="trans">
                                                Tailored pre-configured solutions to accelerate deployment and reduce customization time.
                                            </p>
                                            <Link href="/service-precustomized-solution" className="rd_more">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
