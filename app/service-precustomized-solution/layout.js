export const metadata = {
    title: "Pre-Customized Software Solutions | TechModulus",
    description: "Ready-to-deploy software solutions tailored for your industry. Get enterprise-grade software faster, cheaper, and with less risk than custom builds from scratch.",
    keywords: "pre-customized software, ready-to-deploy solutions, enterprise software, industry-specific software",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-precustomized-solution",
    },
    openGraph: {
        title: "Pre-Customized Software Solutions | TechModulus",
        description: "Ready-to-deploy software solutions tailored for your industry. Get enterprise-grade software faster, cheaper, and with less risk than custom builds from scratch.",
        url: "https://www.techmodulus.com/service-precustomized-solution",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pre-Customized Software Solutions | TechModulus",
        description: "Ready-to-deploy software solutions tailored for your industry. Get enterprise-grade software faster, cheaper, and with less risk than custom builds from scratch.",
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