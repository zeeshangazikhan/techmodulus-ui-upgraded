
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"
import { portfolioProjects } from '@/util/portfolioData'

export default function PortfolioStyle1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        if (typeof window === 'undefined') return
        let iso
        const timer = setTimeout(() => {
            import('isotope-layout').then((mod) => {
                const Isotope = mod.default || mod
                iso = new Isotope(".portfoliocontainer", {
                    itemSelector: ".portfolio-wrapper",
                    percentPosition: true,
                    masonry: { columnWidth: ".portfolio-wrapper" },
                    animationOptions: { duration: 750, easing: "linear", queue: false },
                })
                isotope.current = iso
            })
        }, 1000)
        return () => {
            clearTimeout(timer)
            if (iso && iso.destroy) iso.destroy()
        }
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "trans current" : "")
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="fliter_group">
                        <ul className="portfolio_filter clearfix">
                            <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All</li>
                            <li className={activeBtn("portfolio_category-web")} onClick={handleFilterKeyChange("portfolio_category-web")}>Web Development</li>
                            <li className={activeBtn("portfolio_category-mobile")} onClick={handleFilterKeyChange("portfolio_category-mobile")}>Mobile App Development</li>
                            <li className={activeBtn("portfolio_category-desktop")} onClick={handleFilterKeyChange("portfolio_category-desktop")}>Desktop App Development</li>
                            <li className={activeBtn("portfolio_category-marketing")} onClick={handleFilterKeyChange("portfolio_category-marketing")}>Digital Marketing</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="portfoliocontainer row">
                {portfolioProjects.map((project, index) => {
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
                                    <div className="content_box_in  trans">
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
        </>
    )
}
