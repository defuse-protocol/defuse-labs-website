import Container from "@/components/Container"
import { getPrivacyPolicyPage } from "@/utils/cms"
import { NextSeo } from "next-seo"

const PrivacyPolicyPage = ({ title, content }: any) => {
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

export default PrivacyPolicyPage

export async function getStaticProps() {
  const data = await getPrivacyPolicyPage()

  return {
    props: {
      title: data.title,
      content: data.content,
    },
    revalidate: 300,
  }
}
