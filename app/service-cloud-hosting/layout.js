export const metadata = {
    title: "Cloud Hosting Services | Fast, Secure & Reliable | TechModulus",
    description: "Enterprise-grade cloud hosting with NVMe SSD, global CDN, 99.9% uptime SLA, free SSL, DDoS protection, and 24/7 expert support. Shared, VPS and Dedicated servers.",
    keywords: "cloud hosting, web hosting, VPS hosting, dedicated server, NVMe SSD, cPanel hosting, 99.9% uptime, free SSL",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-cloud-hosting",
    },
    openGraph: {
        title: "Cloud Hosting Services | Fast, Secure & Reliable | TechModulus",
        description: "Enterprise-grade cloud hosting with NVMe SSD, global CDN, 99.9% uptime SLA, free SSL, DDoS protection, and 24/7 expert support. Shared, VPS and Dedicated servers.",
        url: "https://www.techmodulus.com/service-cloud-hosting",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Hosting Services | Fast, Secure & Reliable | TechModulus",
        description: "Enterprise-grade cloud hosting with NVMe SSD, global CDN, 99.9% uptime SLA, free SSL, DDoS protection, and 24/7 expert support. Shared, VPS and Dedicated servers.",
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