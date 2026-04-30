export const metadata = {
    title: "Enterprise Archiving Solutions | Email & File Archiving | TechModulus",
    description: "Comprehensive enterprise archiving for email, files, and business content. Ensure compliance, reduce storage costs, and simplify eDiscovery processes.",
    keywords: "enterprise archiving, email archiving, file archiving, eDiscovery, compliance archiving, enterprise content management",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-enterprise-archiving",
    },
    openGraph: {
        title: "Enterprise Archiving Solutions | Email & File Archiving | TechModulus",
        description: "Comprehensive enterprise archiving for email, files, and business content. Ensure compliance, reduce storage costs, and simplify eDiscovery processes.",
        url: "https://www.techmodulus.com/service-enterprise-archiving",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Archiving Solutions | Email & File Archiving | TechModulus",
        description: "Comprehensive enterprise archiving for email, files, and business content. Ensure compliance, reduce storage costs, and simplify eDiscovery processes.",
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