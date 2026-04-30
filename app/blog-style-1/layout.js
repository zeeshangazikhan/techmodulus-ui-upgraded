export const metadata = {
    title: "Blog | Technology Articles | TechModulus",
    description: "Browse technology articles, development tutorials, and industry insights from the TechModulus team.",
    keywords: "tech blog, technology articles, development tutorials",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/blog-style-1",
    },
    openGraph: {
        title: "Blog | Technology Articles | TechModulus",
        description: "Browse technology articles, development tutorials, and industry insights from the TechModulus team.",
        url: "https://www.techmodulus.com/blog-style-1",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Technology Articles | TechModulus",
        description: "Browse technology articles, development tutorials, and industry insights from the TechModulus team.",
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