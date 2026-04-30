export const metadata = {
    title: "Pricing Plans | TechModulus Software Services",
    description: "Transparent pricing for software development, digital marketing, cloud hosting, and IT consulting. Choose the plan that fits your business needs.",
    keywords: "TechModulus pricing, software development cost, app development pricing, IT consulting pricing",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/pricing",
    },
    openGraph: {
        title: "Pricing Plans | TechModulus Software Services",
        description: "Transparent pricing for software development, digital marketing, cloud hosting, and IT consulting. Choose the plan that fits your business needs.",
        url: "https://www.techmodulus.com/pricing",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing Plans | TechModulus Software Services",
        description: "Transparent pricing for software development, digital marketing, cloud hosting, and IT consulting. Choose the plan that fits your business needs.",
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