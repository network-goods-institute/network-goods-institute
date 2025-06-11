import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://paragraph.com" />
                <link rel="dns-prefetch" href="https://preprint.indexwallets.org" />
                <link rel="dns-prefetch" href="https://play.negationgame.com" />
                <link rel="dns-prefetch" href="https://www.indexwallets.org" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6366f1" />
                <meta name="msapplication-TileColor" content="#6366f1" />
                <meta name="msapplication-config" content="/browserconfig.xml" />

                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Network Goods Institute" />

                <link rel="preload" href="/scroll.png" as="image" />
                <link rel="preload" href="/delta.png" as="image" />
                <link rel="preload" href="/negationgame.jpg" as="image" />
                <link rel="preload" href="/index_logo.svg" as="image" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
} 