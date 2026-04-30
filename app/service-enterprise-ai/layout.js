export const metadata = {
    title: "Enterprise AI Solutions | Machine Learning & NLP | TechModulus",
    description: "Transform your enterprise with AI: machine learning, NLP, computer vision, predictive analytics, and intelligent automation tailored to your business needs.",
    keywords: "enterprise AI, artificial intelligence, machine learning, NLP, natural language processing, computer vision, predictive analytics",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-enterprise-ai",
    },
    openGraph: {
        title: "Enterprise AI Solutions | Machine Learning & NLP | TechModulus",
        description: "Transform your enterprise with AI: machine learning, NLP, computer vision, predictive analytics, and intelligent automation tailored to your business needs.",
        url: "https://www.techmodulus.com/service-enterprise-ai",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise AI Solutions | Machine Learning & NLP | TechModulus",
        description: "Transform your enterprise with AI: machine learning, NLP, computer vision, predictive analytics, and intelligent automation tailored to your business needs.",
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