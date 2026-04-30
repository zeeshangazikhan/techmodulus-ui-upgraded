export const metadata = {
    title: "Mobile App Development Services | iOS & Android | TechModulus",
    description: "Professional iOS and Android mobile app development. We build high-performance apps using React Native, Flutter, Swift, and Kotlin. Start your project today.",
    keywords: "mobile app development, iOS app development, Android app development, React Native, Flutter, Swift, Kotlin, cross-platform apps",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/service-app-development",
    },
    openGraph: {
        title: "Mobile App Development Services | iOS & Android | TechModulus",
        description: "Professional iOS and Android mobile app development. We build high-performance apps using React Native, Flutter, Swift, and Kotlin. Start your project today.",
        url: "https://www.techmodulus.com/service-app-development",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Services | iOS & Android | TechModulus",
        description: "Professional iOS and Android mobile app development. We build high-performance apps using React Native, Flutter, Swift, and Kotlin. Start your project today.",
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