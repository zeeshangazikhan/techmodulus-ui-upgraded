export const metadata = {
    title: "My Account | TechModulus",
    description: "Manage your TechModulus account, orders, and service subscriptions.",
    alternates: {
        canonical: "https://www.techmodulus.com/my-account",
    },
    openGraph: {
        title: "My Account | TechModulus",
        description: "Manage your TechModulus account, orders, and service subscriptions.",
        url: "https://www.techmodulus.com/my-account",
        siteName: "TechModulus",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "My Account | TechModulus",
        description: "Manage your TechModulus account, orders, and service subscriptions.",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function Layout({ children }) {
    return children
}