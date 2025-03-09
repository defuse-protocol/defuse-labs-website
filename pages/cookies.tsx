import Container from "@/components/Container"
import { getCookiePolicyPage } from "@/utils/cms"
import { NextSeo } from "next-seo"

const CookiePolicyPage = ({ title, content }: any) => {
  return (
    <>
      <NextSeo title={title} />
      <Container>
        <div className="prose mx-auto py-12 sm:py-16 md:py-24">
          <h1>{title}</h1>
          <div
            className="break-words"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Container>
    </>
  )
}

export default CookiePolicyPage

export async function getStaticProps() {
  const data = await getCookiePolicyPage()

  return {
    props: {
      title: data.title,
      content: data.content,
    },
    revalidate: 300,
  }
}
