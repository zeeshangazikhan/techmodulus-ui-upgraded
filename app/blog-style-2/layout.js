export const metadata = {
    title: "Blog | Latest Tech Insights | TechModulus",
    description: "Latest articles on software development, AI, cloud, and digital marketing from TechModulus experts.",
    keywords: "tech blog, latest tech insights, software development",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/blog-style-2",
    },
    openGraph: {
        title: "Blog | Latest Tech Insights | TechModulus",
        description: "Latest articles on software development, AI, cloud, and digital marketing from TechModulus experts.",
        url: "https://www.techmodulus.com/blog-style-2",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Latest Tech Insights | TechModulus",
        description: "Latest articles on software development, AI, cloud, and digital marketing from TechModulus experts.",
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