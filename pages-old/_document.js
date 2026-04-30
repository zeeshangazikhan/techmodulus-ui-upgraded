import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="stylesheet" href="/assets/css/plugins/font-awesome.min.css" />
                <meta name="description" content="TechModulus Software Development Company - Web Development, App Development, UI/UX Design, Digital Marketing, Hosting Services" />
                <meta name="keywords" content="software development, web development, app development, digital marketing, hosting" />
                <meta property="og:title" content="TechModulus Software Development Company" />
                <meta property="og:description" content="Professional software development and digital solutions" />
            </Head>
            <title>TechModulus Software Development Company</title>
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i" rel="stylesheet" />
            <body className='theme-vankine'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
