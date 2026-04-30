export const metadata = {
    title: "IT Consulting Services | Technology Strategy | TechModulus",
    description: "Expert IT consulting to help your business leverage technology. IT strategy, digital transformation, vendor management, and implementation services.",
    keywords: "IT consulting, technology consulting, IT strategy, digital transformation, IT advisory",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-it-consulting",
    },
    openGraph: {
        title: "IT Consulting Services | Technology Strategy | TechModulus",
        description: "Expert IT consulting to help your business leverage technology. IT strategy, digital transformation, vendor management, and implementation services.",
        url: "https://www.techmodulus.com/service-it-consulting",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "IT Consulting Services | Technology Strategy | TechModulus",
        description: "Expert IT consulting to help your business leverage technology. IT strategy, digital transformation, vendor management, and implementation services.",
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
}

export default function Layout({ children }) {
    return children
}