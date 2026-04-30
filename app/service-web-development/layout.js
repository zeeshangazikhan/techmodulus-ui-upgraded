export const metadata = {
    title: "Web Development Services | Custom Web Apps | TechModulus",
    description: "Custom web development with React, Next.js, Node.js, and modern frameworks. Fast, secure, and scalable web applications built for business growth.",
    keywords: "web development, custom web applications, React, Next.js, Node.js, full-stack development, website development",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-web-development",
    },
    openGraph: {
        title: "Web Development Services | Custom Web Apps | TechModulus",
        description: "Custom web development with React, Next.js, Node.js, and modern frameworks. Fast, secure, and scalable web applications built for business growth.",
        url: "https://www.techmodulus.com/service-web-development",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services | Custom Web Apps | TechModulus",
        description: "Custom web development with React, Next.js, Node.js, and modern frameworks. Fast, secure, and scalable web applications built for business growth.",
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