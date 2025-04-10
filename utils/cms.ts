const API_URL = "https://graphql.datocms.com"
const API_TOKEN = process.env.DATOCMS_API_TOKEN

type FetchAPIOptions = {
  variables?: {
    slug?: string
  }
}

type GraphQlData = {
  [key: string]: any
  [index: number]: never
}

type GraphQlResponse<T extends GraphQlData> = {
  data: T
  errors?: Array<{ message: string }>
}

const fetchAPI = async <T extends GraphQlData>(
  query: string,
  { variables }: FetchAPIOptions = {}
): Promise<T> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json: GraphQlResponse<T> = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }

  return json.data
}

export async function getOpenPositions() {
  const data = await fetchAPI(
    `
    query getPositions {
      allPositions {
        id
        team
        title
        link
        _status
        _firstPublishedAt
      }

      _allPositionsMeta {
        count
      }
    }
  `
  )

  return data?.allPositions || []
}

export async function getPrivacyPolicyPage() {
  const data = await fetchAPI(
    `
    query getPrivacyPolicy {
      privacyPolicy {
        id
        content(markdown: true)
        _status
        _firstPublishedAt
      }
    }
  `
  )

  return data?.privacyPolicy
}

export async function getCookiePolicyPage() {
  const data = await fetchAPI(
    `
    query getCookiePolicy {
      cookiePolicy {
        id
        content(markdown: true)
        _status
        _firstPublishedAt
      }
    }
  `
  )

  return data?.cookiePolicy
}

export async function getCandidateNoticePage() {
  const data = await fetchAPI(
    `
    query getCandidateNoticePage {
      candidateNotice {
        id
        content(markdown: true)
        _status
        _firstPublishedAt
      }
    }
  `
  )

  return data?.candidateNotice
}
