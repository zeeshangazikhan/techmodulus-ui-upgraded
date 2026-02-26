import Link from "next/link"
import { Briefcase, TrendingUp, Zap } from "lucide-react"


export default function Service9() {
    return (
        <>
            <section className="service-section bg_2">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="section_title type_one color_white">
                                <h4 className="sm_title"> What We Offer</h4>
                                <div className="title_whole">
                                    <h2 className="title">Hire Industry's Best talents for Branding.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="color_white mr_bottom_10">CienceChip builds custom web, desktop, and mobile
                                <br />applications focused on usability, performance,
                                and enterprise-grade security for every deployment.</p>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="service_post position-relative">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_three hover_1_get">
                                    <Link href="/service" className="img_bx">
                                        <div className="image trans hover_1">
                                            <img src="/assets/images/service/brand-consulting.jpg" className="img-fluid" alt="service" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                    </Link>
                                    <div className="content_box trans">
                                        <div className="content_box_in trans">
                                            <div className="icon trans">
                                                <Briefcase className="trans" size={40} style={{ color: '#ffffff', transition: 'color 0.6s ease' }} /></div>
                                            <div className="steps trans">1</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">Brand<br/>Consulting</Link></h4>
                                            <p className="trans">
                                                Real-time data and insights<br/>to optimize brand visibility<br/>across digital channels</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_three hover_1_get">
                                    <Link href="/service" className="img_bx">
                                        <div className="image trans hover_1">
                                            <img src="/assets/images/service/digital-strategy.jpg" className="img-fluid" alt="service" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                    </Link>
                                    <div className="content_box trans">
                                        <div className="content_box_in trans">
                                            <div className="icon trans">
                                                <TrendingUp className="trans" size={40} style={{ color: '#ffffff', transition: 'color 0.6s ease' }} /></div>
                                            <div className="steps trans">2</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">Digital<br/>Strategy</Link></h4>
                                            <p className="trans">
                                                Focus next business milestone<br/>with our well accomplished<br/>Digital strategies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_three hover_1_get">
                                    <Link href="/service" className="img_bx">
                                        <div className="image trans hover_1">
                                            <img src="/assets/images/service/cross-platform-3.jpg" className="img-fluid" alt="service" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                    </Link>
                                    <div className="content_box trans">
                                        <div className="content_box_in trans">
                                            <div className="icon trans">
                                                <Zap className="trans" size={40} style={{ color: '#ffffff', transition: 'color 0.6s ease' }} /></div>
                                            <div className="steps trans">3</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">Cross-Platform</Link></h4>
                                            <p className="trans">
                                                Experience highly scalable & secure<br/>Cross-Platform Technology<br/>Integrations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </div>
            </section>

        </>
    )
}
