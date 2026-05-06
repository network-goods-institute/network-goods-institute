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

export const metadata: Metadata = {
  title: {
    default: "Network Goods Institute — New paradigms for coordination",
    template: "%s | Network Goods Institute"
  },
  description:
    "Network Goods Institute designs economic, epistemic, and computational mechanisms for groups to reason and decide together at scale. We build values-embedded money, collective-intelligence platforms, and deliberative civic memory.",
  keywords: [
    "coordination mechanisms",
    "mechanism design",
    "collective intelligence",
    "public goods funding",
    "externality pricing",
    "epistemic incentives",
    "deliberation",
    "civic technology",
    "index wallets",
    "negation game",
    "litmus",
    "louie",
    "quadratic funding",
    "connection-oriented cluster matching",
    "values-embedded money",
    "epistemic infrastructure",
    "institutional memory",
    "decentralized governance",
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
    title: "Network Goods Institute — New paradigms for coordination",
    description:
      "Economic, epistemic, and computational mechanisms for groups to reason and decide together at scale — values-embedded money, collective-intelligence platforms, and deliberative civic memory.",
    url: "https://networkgoods.institute",
    siteName: "Network Goods Institute",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Network Goods Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Goods Institute — New paradigms for coordination",
    description:
      "Economic, epistemic, and computational mechanisms for groups to reason and decide together at scale.",
    images: ["/og-image.png"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Network Goods Institute",
  description:
    "Network Goods Institute designs economic, epistemic, and computational mechanisms for groups to reason and decide together at scale.",
  url: "https://networkgoods.institute",
  logo: "https://networkgoods.institute/favicon.ico",
  foundingDate: "2024",
  areaServed: "Worldwide",
  email: "connor@networkgoods.institute",
  knowsAbout: [
    "Coordination Mechanisms",
    "Mechanism Design",
    "Collective Intelligence",
    "Public Goods Funding",
    "Externality Pricing",
    "Epistemic Incentives",
    "Deliberation",
    "Civic Technology",
    "Index Wallets",
    "Negation Game",
    "Litmus",
    "Louie",
    "Quadratic Funding",
    "Connection-Oriented Cluster Matching",
    "Values-Embedded Money",
    "Epistemic Infrastructure",
    "Institutional Memory"
  ],
  sameAs: [
    "https://play.negationgame.com/",
    "https://www.indexwallets.org/",
    "https://litmus.bio/"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Research Projects",
    itemListElement: [
      {
        "@type": "ResearchProject",
        name: "Index Wallets",
        description:
          "Programmable wallets for values-embedded vector currencies — a market mechanism for funding public goods.",
        url: "https://preprint.indexwallets.org/"
      },
      {
        "@type": "ResearchProject",
        name: "Negation Game",
        description:
          "A protocol layer for reasoned disagreement: economic incentives, epistemic values, and minds willing to change.",
        url: "https://paragraph.com/@ngi/info-market-overton"
      },
      {
        "@type": "ResearchProject",
        name: "Litmus",
        description:
          "AI-powered, expert-augmented forecasting for FDA drug approvals — calibrated, transparent, and auditable.",
        url: "https://litmus.bio/"
      },
      {
        "@type": "ResearchProject",
        name: "Louie",
        description:
          "Civic deliberative memory: making the public record of municipal government searchable, sourced, and answerable to the public.",
        url: "https://mississauga-demo.pages.dev/#/louie"
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
        <meta name="theme-color" content="#1d5559" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
