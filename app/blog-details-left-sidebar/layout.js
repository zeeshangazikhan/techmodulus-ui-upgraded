export const metadata = {
    title: "Blog Details | TechModulus",
    description: "Detailed blog article with sidebar navigation from TechModulus - insights on software development, AI, and digital marketing.",
    alternates: {
        canonical: "https://www.techmodulus.com/blog-details-left-sidebar",
    },
    openGraph: {
        title: "Blog Details | TechModulus",
        description: "Detailed blog article with sidebar navigation from TechModulus - insights on software development, AI, and digital marketing.",
        url: "https://www.techmodulus.com/blog-details-left-sidebar",
        siteName: "TechModulus",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog Details | TechModulus",
        description: "Detailed blog article with sidebar navigation from TechModulus - insights on software development, AI, and digital marketing.",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function Layout({ children }) {
    return children
}