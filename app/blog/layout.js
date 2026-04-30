export const metadata = {
    title: "Blog | Software Development & Tech Insights | TechModulus",
    description: "Read the latest insights on software development, AI trends, digital marketing strategies, and technology best practices from TechModulus experts.",
    keywords: "software development blog, tech blog, AI insights, digital marketing tips, web development tutorials",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/blog",
    },
    openGraph: {
        title: "Blog | Software Development & Tech Insights | TechModulus",
        description: "Read the latest insights on software development, AI trends, digital marketing strategies, and technology best practices from TechModulus experts.",
        url: "https://www.techmodulus.com/blog",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Software Development & Tech Insights | TechModulus",
        description: "Read the latest insights on software development, AI trends, digital marketing strategies, and technology best practices from TechModulus experts.",
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