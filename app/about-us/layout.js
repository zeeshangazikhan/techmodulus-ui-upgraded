export const metadata = {
    title: "About TechModulus | Our Story, Team & Values",
    description: "Learn about TechModulus - our mission, expert team, and commitment to delivering exceptional software development and digital transformation solutions for businesses worldwide.",
    keywords: "about TechModulus, software company India, our team, digital transformation, tech company",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/about-us",
    },
    openGraph: {
        title: "About TechModulus | Our Story, Team & Values",
        description: "Learn about TechModulus - our mission, expert team, and commitment to delivering exceptional software development and digital transformation solutions for businesses worldwide.",
        url: "https://www.techmodulus.com/about-us",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "About TechModulus | Our Story, Team & Values",
        description: "Learn about TechModulus - our mission, expert team, and commitment to delivering exceptional software development and digital transformation solutions for businesses worldwide.",
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