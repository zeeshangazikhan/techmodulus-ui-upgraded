export const metadata = {
    title: "Data Management Services | Data Warehousing & Analytics | TechModulus",
    description: "End-to-end data management: data warehousing, ETL pipelines, data quality, master data management, and actionable business analytics.",
    keywords: "data management, data warehousing, ETL, data quality, master data management, business analytics, big data",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-data-management",
    },
    openGraph: {
        title: "Data Management Services | Data Warehousing & Analytics | TechModulus",
        description: "End-to-end data management: data warehousing, ETL pipelines, data quality, master data management, and actionable business analytics.",
        url: "https://www.techmodulus.com/service-data-management",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Management Services | Data Warehousing & Analytics | TechModulus",
        description: "End-to-end data management: data warehousing, ETL pipelines, data quality, master data management, and actionable business analytics.",
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