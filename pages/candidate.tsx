import Container from "@/components/Container"
import { getCandidateNoticePage } from "@/utils/cms"
import { NextSeo } from "next-seo"

const CandidateNoticePage = ({ content }: any) => {
  return (
    <>
      <NextSeo title="Candidate Privacy Notice" />
      <Container className="bg-white pt-16">
        <div className="prose mx-auto py-12 sm:py-16 md:py-24">
          <h1>Candidate Privacy Notice</h1>
          <div
            className="break-words"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Container>
    </>
  )
}

export default CandidateNoticePage

export async function getStaticProps() {
  const data = await getCandidateNoticePage()

  return {
    props: {
      content: data.content,
    },
    revalidate: 300,
  }
}
