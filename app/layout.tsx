import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default: "Network Goods Institute - Building Governance for Mars",
    template: "%s | Network Goods Institute"
  },
  description: "Network Goods Institute is building the obvious choice of governance for Mars by solving externality pricing, counterfactual reasoning, and power regulation through Index Wallets and Negation Game.",
  keywords: [
    "mars governance",
    "space governance",
    "externality pricing",
    "counterfactual reasoning",
    "power regulation",
    "index wallets",
    "negation game",
    "collective intelligence",
    "quadratic funding",
    "connection-oriented cluster matching",
    "network goods",
    "coordination mechanisms",
    "economic incentives",
    "epistemic values",
    "public goods funding",
    "mechanism design",
    "protocol design",
    "decentralized governance",
    "blockchain",
    "crypto economics"
  ],
  authors: [{ name: "Network Goods Institute" }],
  creator: "Network Goods Institute",
  publisher: "Network Goods Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://networkgoods.institute"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Network Goods Institute - Building Governance for Mars",
    description: "Building the obvious choice of governance for Mars by solving externality pricing, counterfactual reasoning, and power regulation through Index Wallets and Negation Game.",
    url: "https://networkgoods.institute",
    siteName: "Network Goods Institute",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/mars.jpg",
        width: 512,
        height: 384,
        alt: "Network Goods Institute - Building Governance for Mars",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Goods Institute - Building Governance for Mars",
    description: "Building the obvious choice of governance for Mars by solving externality pricing, counterfactual reasoning, and power regulation through Index Wallets and Negation Game.",
    images: ["/mars.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Network Goods Institute",
  description: "Network Goods Institute is building the obvious choice of governance for Mars by solving externality pricing, counterfactual reasoning, and power regulation through Index Wallets and Negation Game.",
  url: "https://networkgoods.institute",
  logo: "https://networkgoods.institute/favicon.ico",
  foundingDate: "2024",
  areaServed: "Worldwide",
  email: "connor@networkgoods.institute",
  knowsAbout: [
    "Mars Governance",
    "Space Governance",
    "Externality Pricing",
    "Counterfactual Reasoning",
    "Power Regulation",
    "Index Wallets",
    "Negation Game",
    "Collective Intelligence",
    "Quadratic Funding",
    "Connection-Oriented Cluster Matching",
    "Coordination Mechanisms",
    "Economic Incentives",
    "Epistemic Values",
    "Public Goods Funding",
    "Mechanism Design"
  ],
  sameAs: [
    "https://play.negationgame.com/",
    "https://www.indexwallets.org/"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Research Projects",
    itemListElement: [
      {
        "@type": "ResearchProject",
        name: "Negation Game",
        description: "A protocol layer for reasoned disagreement: powered by economic incentives, governed by epistemic values, and designed for minds willing to change.",
        url: "https://paragraph.com/@ngi/info-market-overton"
      },
      {
        "@type": "ResearchProject",
        name: "Index Wallet",
        description: "Voluntary taxation, wealth equalization, and funding for public goods.",
        url: "https://preprint.indexwallets.org/"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://networkgoods.institute" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}
