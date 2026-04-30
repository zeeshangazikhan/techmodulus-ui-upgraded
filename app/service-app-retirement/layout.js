export const metadata = {
    title: "Application Retirement & Decommissioning Services | TechModulus",
    description: "Safely retire and decommission legacy applications while preserving critical data, ensuring compliance, and reducing operational costs.",
    keywords: "application retirement, legacy application decommissioning, app decommission, legacy system retirement",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-app-retirement",
    },
    openGraph: {
        title: "Application Retirement & Decommissioning Services | TechModulus",
        description: "Safely retire and decommission legacy applications while preserving critical data, ensuring compliance, and reducing operational costs.",
        url: "https://www.techmodulus.com/service-app-retirement",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Application Retirement & Decommissioning Services | TechModulus",
        description: "Safely retire and decommission legacy applications while preserving critical data, ensuring compliance, and reducing operational costs.",
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