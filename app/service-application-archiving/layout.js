export const metadata = {
    title: "Application Data Archiving Services | TechModulus",
    description: "Secure application data archiving solutions that preserve business-critical data, ensure regulatory compliance, and reduce IT infrastructure costs.",
    keywords: "application archiving, application data archiving, legacy data preservation, compliance archiving",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-application-archiving",
    },
    openGraph: {
        title: "Application Data Archiving Services | TechModulus",
        description: "Secure application data archiving solutions that preserve business-critical data, ensure regulatory compliance, and reduce IT infrastructure costs.",
        url: "https://www.techmodulus.com/service-application-archiving",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Application Data Archiving Services | TechModulus",
        description: "Secure application data archiving solutions that preserve business-critical data, ensure regulatory compliance, and reduce IT infrastructure costs.",
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