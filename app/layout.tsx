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
    default: "Network Goods Institute - New Paradigms for Coordination",
    template: "%s | Network Goods Institute"
  },
  description: "Network Goods Institute builds coordination mechanisms for collective intelligence and externality pricing using counterfactual reasoning, economic incentives, and epistemic values.",
  keywords: [
    "network goods",
    "coordination mechanisms",
    "collective intelligence",
    "externality pricing",
    "counterfactual reasoning",
    "economic incentives",
    "epistemic values",
    "public goods funding",
    "prediction markets",
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
    title: "Network Goods Institute - New Paradigms for Coordination",
    description: "Building coordination mechanisms for collective intelligence and externality pricing using counterfactual reasoning and economic incentives.",
    url: "https://networkgoods.institute",
    siteName: "Network Goods Institute",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Network Goods Institute - New Paradigms for Coordination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Goods Institute - New Paradigms for Coordination",
    description: "Building coordination mechanisms for collective intelligence and externality pricing using counterfactual reasoning and economic incentives.",
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
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Network Goods Institute",
  description: "Network Goods Institute builds coordination mechanisms for collective intelligence and externality pricing using counterfactual reasoning, economic incentives, and epistemic values.",
  url: "https://networkgoods.institute",
  logo: "https://networkgoods.institute/favicon.ico",
  foundingDate: "2024",
  areaServed: "Worldwide",
  email: "connor@networkgoods.institute",
  knowsAbout: [
    "Coordination Mechanisms",
    "Collective Intelligence",
    "Externality Pricing",
    "Counterfactual Reasoning",
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
