export const metadata = {
    title: "AI Governance & Compliance Services | TechModulus",
    description: "Responsible AI governance for enterprise organizations: AI ethics, bias detection, regulatory compliance, risk management, and explainable AI frameworks.",
    keywords: "AI governance, AI ethics, AI compliance, responsible AI, AI risk management, explainable AI, AI regulation",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-ai-governance",
    },
    openGraph: {
        title: "AI Governance & Compliance Services | TechModulus",
        description: "Responsible AI governance for enterprise organizations: AI ethics, bias detection, regulatory compliance, risk management, and explainable AI frameworks.",
        url: "https://www.techmodulus.com/service-ai-governance",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Governance & Compliance Services | TechModulus",
        description: "Responsible AI governance for enterprise organizations: AI ethics, bias detection, regulatory compliance, risk management, and explainable AI frameworks.",
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