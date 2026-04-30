export const metadata = {
    title: "Blog Article | TechModulus Insights",
    description: "In-depth articles on software development, digital marketing, AI, and technology trends from TechModulus.",
    keywords: "tech blog, software development article, digital marketing insights",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/blog-details",
    },
    openGraph: {
        title: "Blog Article | TechModulus Insights",
        description: "In-depth articles on software development, digital marketing, AI, and technology trends from TechModulus.",
        url: "https://www.techmodulus.com/blog-details",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog Article | TechModulus Insights",
        description: "In-depth articles on software development, digital marketing, AI, and technology trends from TechModulus.",
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