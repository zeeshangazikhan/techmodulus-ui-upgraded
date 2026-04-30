export const metadata = {
    title: "Our Services | Software Development Solutions | TechModulus",
    description: "Explore TechModulus's full range of services: web development, mobile apps, enterprise AI, cloud hosting, digital marketing, IT consulting, and more.",
    keywords: "software development services, web development, app development, AI, cloud hosting, digital marketing, IT consulting",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service",
    },
    openGraph: {
        title: "Our Services | Software Development Solutions | TechModulus",
        description: "Explore TechModulus's full range of services: web development, mobile apps, enterprise AI, cloud hosting, digital marketing, IT consulting, and more.",
        url: "https://www.techmodulus.com/service",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services | Software Development Solutions | TechModulus",
        description: "Explore TechModulus's full range of services: web development, mobile apps, enterprise AI, cloud hosting, digital marketing, IT consulting, and more.",
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