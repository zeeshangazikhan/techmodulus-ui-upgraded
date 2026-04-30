export const metadata = {
    title: "Portfolio | Case Studies | TechModulus",
    description: "View TechModulus project portfolio and case studies showcasing web apps, mobile applications, and enterprise solutions.",
    alternates: {
        canonical: "https://www.techmodulus.com/portfolio",
    },
    openGraph: {
        title: "Portfolio | Case Studies | TechModulus",
        description: "View TechModulus project portfolio and case studies.",
        url: "https://www.techmodulus.com/portfolio",
        siteName: "TechModulus",
        type: "website",
    },
    robots: { index: true, follow: true },
}

export default function Layout({ children }) {
    return children
}