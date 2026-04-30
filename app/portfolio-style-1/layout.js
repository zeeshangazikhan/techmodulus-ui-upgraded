export const metadata = {
    title: "Case Studies & Portfolio | TechModulus Work",
    description: "Explore TechModulus's portfolio of successful projects: web apps, mobile apps, AI implementations, and enterprise technology solutions for real clients.",
    keywords: "software development portfolio, case studies, web development projects, mobile app portfolio, client projects",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/portfolio-style-1",
    },
    openGraph: {
        title: "Case Studies & Portfolio | TechModulus Work",
        description: "Explore TechModulus's portfolio of successful projects: web apps, mobile apps, AI implementations, and enterprise technology solutions for real clients.",
        url: "https://www.techmodulus.com/portfolio-style-1",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Case Studies & Portfolio | TechModulus Work",
        description: "Explore TechModulus's portfolio of successful projects: web apps, mobile apps, AI implementations, and enterprise technology solutions for real clients.",
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