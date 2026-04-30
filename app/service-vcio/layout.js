export const metadata = {
    title: "Virtual CIO (vCIO) Services | Strategic IT Leadership | TechModulus",
    description: "Virtual CIO services for SMBs and enterprises. Technology roadmap, vendor management, IT budgeting, cybersecurity strategy, and executive-level IT guidance.",
    keywords: "virtual CIO, vCIO services, IT leadership, technology strategy, IT roadmap, fractional CIO",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-vcio",
    },
    openGraph: {
        title: "Virtual CIO (vCIO) Services | Strategic IT Leadership | TechModulus",
        description: "Virtual CIO services for SMBs and enterprises. Technology roadmap, vendor management, IT budgeting, cybersecurity strategy, and executive-level IT guidance.",
        url: "https://www.techmodulus.com/service-vcio",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Virtual CIO (vCIO) Services | Strategic IT Leadership | TechModulus",
        description: "Virtual CIO services for SMBs and enterprises. Technology roadmap, vendor management, IT budgeting, cybersecurity strategy, and executive-level IT guidance.",
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