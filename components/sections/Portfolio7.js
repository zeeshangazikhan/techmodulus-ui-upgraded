import Link from 'next/link'
import dynamic from 'next/dynamic'
const PortfolioFilterStyle1 = dynamic(() => import('../elements/PortfolioFilterStyle1'), {
    ssr: false,
})

export default function Portfolio7() {
    return (
        <>
            <section className="portfolio-section-one">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Latest Portfolio</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Pleasure In The Jobs Give Perfection In The Work </h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-6 text-end">
                            <Link href="/portfolio-style-1" className="btn btn-primary">
                                View All Works
                            </Link>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_20" />
                    {/*-============spacing==========-*/}
                    <section className="portfolio_v1 portfolio_tabs">
                        <PortfolioFilterStyle1 />
                    </section>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_60" />
                {/*-============spacing==========-*/}
            </section>
        </>
    )
}
