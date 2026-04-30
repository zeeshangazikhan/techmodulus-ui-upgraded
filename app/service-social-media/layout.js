export const metadata = {
    title: "Social Media Management Services | TechModulus",
    description: "Professional social media management for Instagram, YouTube, Facebook, and LinkedIn. Grow your brand, engage your audience, and convert followers into customers.",
    keywords: "social media management, Instagram marketing, YouTube marketing, Facebook ads, LinkedIn marketing, influencer marketing",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-social-media",
    },
    openGraph: {
        title: "Social Media Management Services | TechModulus",
        description: "Professional social media management for Instagram, YouTube, Facebook, and LinkedIn. Grow your brand, engage your audience, and convert followers into customers.",
        url: "https://www.techmodulus.com/service-social-media",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Social Media Management Services | TechModulus",
        description: "Professional social media management for Instagram, YouTube, Facebook, and LinkedIn. Grow your brand, engage your audience, and convert followers into customers.",
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