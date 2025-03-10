import Container from "@/components/Container"
import { getPrivacyPolicyPage } from "@/utils/cms"
import { NextSeo } from "next-seo"

const PrivacyPolicyPage = ({ content }: any) => {
  return (
    <>
      <NextSeo title="Privacy Policy" />
      <Container className="bg-white pt-16">
        <div className="prose mx-auto py-12 sm:py-16 md:py-24">
          <h1>Privacy Policy</h1>
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
      content: data.content,
    },
    revalidate: 300,
  }
}
