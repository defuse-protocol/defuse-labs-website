import "@/styles/globals.css"
import { useEffect, useState, type ReactElement, type ReactNode } from "react"
import type { AppProps } from "next/app"
import type { NextPage } from "next"
import localFont from "next/font/local"
import Layout from "@/components/Layout"
import { NextSeo } from "next-seo"
import SEO from "../next-seo.config"
import { GoogleAnalytics } from "@next/third-parties/google"
import { useCookies } from "react-cookie"
import CookieBanner from "@/components/CookieBanner"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const fkGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/FKGrotesk-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/FKGrotesk-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/FKGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FKGrotesk-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/FKGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FKGrotesk-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/FKGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FKGrotesk-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/FKGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/FKGrotesk-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/FKGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/FKGrotesk-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-fkGrotesk",
})

const COOKIE_CONSENT_NAME = "cookie-consent"

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [hasCookieConsent, setHasCookieConsent] = useState(false)
  const [cookies, setCookie] = useCookies([COOKIE_CONSENT_NAME])

  const acceptCookies = () => {
    const yearFromNow = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    )
    setCookie(COOKIE_CONSENT_NAME, true, { expires: yearFromNow })
  }

  useEffect(() => {
    setHasCookieConsent(Boolean(cookies[COOKIE_CONSENT_NAME]))
  }, [cookies])

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return getLayout(
    <>
      <NextSeo {...SEO} />
      <Component {...pageProps} />
      {hasCookieConsent ? (
        <GoogleAnalytics gaId="G-G118KJG47F" />
      ) : (
        <CookieBanner onClick={acceptCookies} />
      )}
    </>
  )
}
