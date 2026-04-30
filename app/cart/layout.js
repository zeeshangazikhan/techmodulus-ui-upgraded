export const metadata = {
    title: "Shopping Cart | TechModulus",
    description: "Review your selected TechModulus services and solutions before checkout.",
    alternates: {
        canonical: "https://www.techmodulus.com/cart",
    },
    openGraph: {
        title: "Shopping Cart | TechModulus",
        description: "Review your selected TechModulus services and solutions before checkout.",
        url: "https://www.techmodulus.com/cart",
        siteName: "TechModulus",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shopping Cart | TechModulus",
        description: "Review your selected TechModulus services and solutions before checkout.",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function Layout({ children }) {
    return children
}