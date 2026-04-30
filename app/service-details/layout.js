export const metadata = {
    title: "Service Details | TechModulus",
    description: "Detailed information about TechModulus software development and technology services tailored for your business requirements.",
    keywords: "TechModulus service details, software development services",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-details",
    },
    openGraph: {
        title: "Service Details | TechModulus",
        description: "Detailed information about TechModulus software development and technology services tailored for your business requirements.",
        url: "https://www.techmodulus.com/service-details",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Service Details | TechModulus",
        description: "Detailed information about TechModulus software development and technology services tailored for your business requirements.",
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