export const metadata = {
    title: "Project Portfolio | TechModulus Software Solutions",
    description: "View our project portfolio showcasing custom web applications, mobile apps, enterprise systems, and digital transformation case studies.",
    keywords: "project portfolio, software projects, development case studies, tech portfolio",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/portfolio-style-2",
    },
    openGraph: {
        title: "Project Portfolio | TechModulus Software Solutions",
        description: "View our project portfolio showcasing custom web applications, mobile apps, enterprise systems, and digital transformation case studies.",
        url: "https://www.techmodulus.com/portfolio-style-2",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Portfolio | TechModulus Software Solutions",
        description: "View our project portfolio showcasing custom web applications, mobile apps, enterprise systems, and digital transformation case studies.",
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