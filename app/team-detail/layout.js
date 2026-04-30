export const metadata = {
    title: "Team Member | TechModulus",
    description: "Learn about one of TechModulus's expert team members and their skills, experience, and role.",
    keywords: "TechModulus team member, developer profile, tech expert",
    metadataBase: new URL("https://www.techmodulus.com"),
    alternates: {
        canonical: "https://www.techmodulus.com/team-detail",
    },
    openGraph: {
        title: "Team Member | TechModulus",
        description: "Learn about one of TechModulus's expert team members and their skills, experience, and role.",
        url: "https://www.techmodulus.com/team-detail",
        siteName: "TechModulus",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Team Member | TechModulus",
        description: "Learn about one of TechModulus's expert team members and their skills, experience, and role.",
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