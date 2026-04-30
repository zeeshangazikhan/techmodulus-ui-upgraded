import Blog6 from "@/components/sections/Blog6"
import Client5 from "@/components/sections/Client5"
import Content7 from "@/components/sections/Content7"
import Content8 from "@/components/sections/Content8"
import Form5 from "@/components/sections/Form5"
import Funfacts4 from "@/components/sections/Funfacts4"
import Portfolio1 from "@/components/sections/Portfolio1"
import Portfolio7 from "@/components/sections/Portfolio7"
import Service9 from "@/components/sections/Service9"
import Slider5 from "@/components/sections/Slider5"
import Testimonial5 from "@/components/sections/Testimonial5"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import Service5 from "@/components/sections/Service5"
import Service6 from "@/components/sections/Service6"
import Service7 from "@/components/sections/Service7"
import Service1 from "@/components/sections/Service1"
import Service2 from "@/components/sections/Service2"
import Service3 from "@/components/sections/Service3"
import Service4 from "@/components/sections/Service4"
import PortfolioFilter1 from "@/components/elements/PortfolioFilter1"
import StickyContact from "@/components/elements/StickyContact"
export default function Home() {

    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">
                <Slider5 />
                  {/* <Funfacts4 /> */}
                   <Content7 />
             
                <Service5 />

                <Portfolio7 />

                   <Service9 />
                <Client5 />
                <div className="divider" />
                {/* <Blog6 /> */}
                </div>
            </div>
            <Footer4 />
            <StickyContact />
        </>
    )
}
