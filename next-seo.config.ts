import { DefaultSeoProps } from "next-seo"

const config: DefaultSeoProps = {
  titleTemplate: "Defuse Labs | %s",
  title: "Powering the future of AI transactions",
  description:
    "Defuse Labs develops NEAR Intents to enable seamless cross-chain interactions in an automated world — connecting AI, services, and financial applications.",
  openGraph: {
    url: "https://defuselabs.org",
    title: "Powering the future of AI transactions | Defuse Labs",
    description:
      "Defuse Labs develops NEAR Intents to enable seamless cross-chain interactions in an automated world — connecting AI, services, and financial applications.",
    images: [
      {
        url: "https://defuselabs.org/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Powering the future of AI transactions | Defuse Labs",
        type: "image/png",
      },
    ],
    siteName: "Defuse Labs",
  },
  twitter: {
    handle: "@DefuseLabs",
    site: "@DefuseLabs",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: "#000000",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
}

export default config
