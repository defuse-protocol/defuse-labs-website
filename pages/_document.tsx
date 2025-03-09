import { Html, Head, Main, NextScript } from "next/document"
import { fkGrotesk } from "./_app"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`min-h-screen scroll-smooth ${fkGrotesk.variable} font-sans`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
