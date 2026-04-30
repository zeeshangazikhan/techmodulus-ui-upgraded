export const metadata = {
    title: "Digital Marketing Services | SEO, PPC & Social Media | TechModulus",
    description: "Drive measurable growth with TechModulus digital marketing: SEO, Google Ads, social media marketing, email marketing, content marketing, and CRO optimization.",
    keywords: "digital marketing, SEO services, Google Ads, PPC, social media marketing, email marketing, content marketing, CRO",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-digital-marketing",
    },
    openGraph: {
        title: "Digital Marketing Services | SEO, PPC & Social Media | TechModulus",
        description: "Drive measurable growth with TechModulus digital marketing: SEO, Google Ads, social media marketing, email marketing, content marketing, and CRO optimization.",
        url: "https://www.techmodulus.com/service-digital-marketing",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing Services | SEO, PPC & Social Media | TechModulus",
        description: "Drive measurable growth with TechModulus digital marketing: SEO, Google Ads, social media marketing, email marketing, content marketing, and CRO optimization.",
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