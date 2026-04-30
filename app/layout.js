import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../public/assets/css/plugins/animate.min.css"
import "../public/assets/css/plugins/bootstrap.min.css"
import "../public/assets/css/plugins/jquery.fancybox.min.css"
import "../public/assets/css/plugins/owl.css"
import "../public/assets/css/plugins/rangeslider.css"
import "../public/assets/css/plugins/select.min.css"
import "../public/assets/css/plugins/slick.css"
import "../public/assets/css/global-settings.css"
import "../public/assets/css/theme.css"
import "../public/assets/css/ui-magic.css"
import ClientProviders from "./ClientProviders"

export const metadata = {
    title: {
        default: "TechModulus - Software Development & Digital Solutions",
        template: "%s | TechModulus",
    },
    description: "TechModulus is a leading software development company offering web development, mobile app development, enterprise AI, digital marketing, cloud hosting, and IT consulting services.",
    keywords: "software development company, web development, mobile app development, AI solutions, digital marketing, IT consulting, TechModulus",
    metadataBase: new URL("https://www.techmodulus.com"),
    openGraph: {
        title: "TechModulus - Software Development & Digital Solutions",
        description: "TechModulus is a leading software development company offering custom software, mobile apps, AI solutions, and digital marketing services.",
        url: "https://www.techmodulus.com",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "TechModulus - Software Development & Digital Solutions",
        description: "TechModulus is a leading software development company offering custom software, mobile apps, AI solutions, and digital marketing services.",
        site: "@TechModulus",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/favicon.svg",
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
                <link rel="stylesheet" href="/assets/css/plugins/font-awesome.min.css" />
                <link rel="stylesheet" href="/assets/css/plugins/flaticon_vankine.css" />
                <link rel="stylesheet" href="/assets/css/plugins/uicons-regular-rounded.css" />
                <link rel="stylesheet" href="/assets/css/plugins/uicons-regular-straight.css" />
            </head>
            <body>
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    )
}