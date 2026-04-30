export const metadata = {
    title: "Project Details | TechModulus Portfolio",
    description: "In-depth look at a TechModulus project - technology stack, challenges solved, and results delivered.",
    keywords: "project details, software development case study, tech portfolio",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/portfolio-details",
    },
    openGraph: {
        title: "Project Details | TechModulus Portfolio",
        description: "In-depth look at a TechModulus project - technology stack, challenges solved, and results delivered.",
        url: "https://www.techmodulus.com/portfolio-details",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Details | TechModulus Portfolio",
        description: "In-depth look at a TechModulus project - technology stack, challenges solved, and results delivered.",
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