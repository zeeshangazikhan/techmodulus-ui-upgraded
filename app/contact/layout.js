export const metadata = {
    title: "Contact TechModulus | Get a Free Consultation",
    description: "Get in touch with TechModulus for web development, app development, AI solutions, digital marketing and IT consulting. Request a free consultation today.",
    keywords: "contact TechModulus, free consultation, software development inquiry, hire developers",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/contact",
    },
    openGraph: {
        title: "Contact TechModulus | Get a Free Consultation",
        description: "Get in touch with TechModulus for web development, app development, AI solutions, digital marketing and IT consulting. Request a free consultation today.",
        url: "https://www.techmodulus.com/contact",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact TechModulus | Get a Free Consultation",
        description: "Get in touch with TechModulus for web development, app development, AI solutions, digital marketing and IT consulting. Request a free consultation today.",
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