export const metadata = {
    title: "Enterprise Intelligence & Business Analytics | TechModulus",
    description: "Transform raw data into actionable business intelligence. BI dashboards, data analytics, reporting automation, and enterprise decision-support solutions.",
    keywords: "enterprise intelligence, business intelligence, BI dashboards, data analytics, reporting, decision support",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-enterprise-intelligence",
    },
    openGraph: {
        title: "Enterprise Intelligence & Business Analytics | TechModulus",
        description: "Transform raw data into actionable business intelligence. BI dashboards, data analytics, reporting automation, and enterprise decision-support solutions.",
        url: "https://www.techmodulus.com/service-enterprise-intelligence",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Intelligence & Business Analytics | TechModulus",
        description: "Transform raw data into actionable business intelligence. BI dashboards, data analytics, reporting automation, and enterprise decision-support solutions.",
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