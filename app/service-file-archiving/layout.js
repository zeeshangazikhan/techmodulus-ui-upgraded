export const metadata = {
    title: "File Archiving Services | Long-term Data Retention | TechModulus",
    description: "Secure file archiving for long-term data retention, regulatory compliance, and cost-effective storage management across all file types.",
    keywords: "file archiving, document archiving, data retention, long-term archiving, secure file storage",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-file-archiving",
    },
    openGraph: {
        title: "File Archiving Services | Long-term Data Retention | TechModulus",
        description: "Secure file archiving for long-term data retention, regulatory compliance, and cost-effective storage management across all file types.",
        url: "https://www.techmodulus.com/service-file-archiving",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "File Archiving Services | Long-term Data Retention | TechModulus",
        description: "Secure file archiving for long-term data retention, regulatory compliance, and cost-effective storage management across all file types.",
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