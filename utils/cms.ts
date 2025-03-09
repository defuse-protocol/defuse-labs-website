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

// export async function getOpenPositions() {
//   const data = await fetchAPI(
//     `
//     query getOpenPositions {
//       allOpenPositions {
//         id
//         title
//         team
//         link
//       }
//     }
//   `
//   )

//   return data?.allOpenPositions || []
// }

// export async function getPrivacyPolicyPage() {
//   const data = await fetchAPI(
//     `
//     query getPrivacyPolicyPage {
//       privacyPolicy {
//         title
//         content(markdown: true)
//       }
//     }
//   `
//   )

//   return data?.privacyPolicy
// }

// export async function getCookiePolicyPage() {
//   const data = await fetchAPI(
//     `
//     query getCookiePolicyPage {
//       cookiePolicy {
//         title
//         content(markdown: true)
//       }
//     }
//   `
//   )

//   return data?.cookiePolicy
// }
