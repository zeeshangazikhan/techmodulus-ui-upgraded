export const metadata = {
    title: "FAQs | Frequently Asked Questions | TechModulus",
    description: "Answers to frequently asked questions about TechModulus services, project timelines, pricing, technology stack, and development process.",
    keywords: "TechModulus FAQ, software development questions, app development FAQ, how much does it cost",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/faqs",
    },
    openGraph: {
        title: "FAQs | Frequently Asked Questions | TechModulus",
        description: "Answers to frequently asked questions about TechModulus services, project timelines, pricing, technology stack, and development process.",
        url: "https://www.techmodulus.com/faqs",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQs | Frequently Asked Questions | TechModulus",
        description: "Answers to frequently asked questions about TechModulus services, project timelines, pricing, technology stack, and development process.",
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