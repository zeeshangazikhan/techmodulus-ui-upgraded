export const metadata = {
    title: "Our Team | Meet the TechModulus Experts",
    description: "Meet the talented developers, designers, and digital strategists behind TechModulus. Dedicated professionals delivering technology excellence.",
    keywords: "TechModulus team, software developers, development team, meet our team",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/team",
    },
    openGraph: {
        title: "Our Team | Meet the TechModulus Experts",
        description: "Meet the talented developers, designers, and digital strategists behind TechModulus. Dedicated professionals delivering technology excellence.",
        url: "https://www.techmodulus.com/team",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Team | Meet the TechModulus Experts",
        description: "Meet the talented developers, designers, and digital strategists behind TechModulus. Dedicated professionals delivering technology excellence.",
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