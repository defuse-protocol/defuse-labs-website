const API_URL = "https://boards-api.greenhouse.io/v1/boards"
const BOARD_TOKEN = process.env.GREENHOUSE_BOARD_TOKEN

interface Location {
  name: string
}

interface Job {
  id: string
  internal_job_id: number
  title: string
  updated_at: string
  requisition_id: string
  location: Location
  absolute_url: string
  metadata: any
}

interface JobsResponse {
  jobs: Job[]
  meta: {
    total: number
  }
}

type FetchAPIOptions = {
  params?: Record<string, string>
}

async function fetchAPI<T>(
  endpoint: string,
  { params }: FetchAPIOptions = {}
): Promise<T> {
  const url = new URL(`${API_URL}/${BOARD_TOKEN}${endpoint}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })
  }

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error(
      `Failed to fetch from Greenhouse API: ${response.statusText}`
    )
  }

  const data = await response.json()
  return data
}

export async function getJobs(): Promise<Job[]> {
  const data = await fetchAPI<JobsResponse>("/jobs")
  return data.jobs
}
