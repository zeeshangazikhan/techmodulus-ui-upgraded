export const metadata = {
    title: "Managed IT Services | IT Management | TechModulus",
    description: "Comprehensive managed IT services: infrastructure monitoring, help desk support, security management, patch management, and proactive IT maintenance.",
    keywords: "managed IT services, IT management, IT support, infrastructure management, help desk",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-it-management",
    },
    openGraph: {
        title: "Managed IT Services | IT Management | TechModulus",
        description: "Comprehensive managed IT services: infrastructure monitoring, help desk support, security management, patch management, and proactive IT maintenance.",
        url: "https://www.techmodulus.com/service-it-management",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Managed IT Services | IT Management | TechModulus",
        description: "Comprehensive managed IT services: infrastructure monitoring, help desk support, security management, patch management, and proactive IT maintenance.",
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