import { sendContactEmail } from "@/actions/send-contact"
import type { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
  success: boolean
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" })
  }

  try {
    const { name, email } = req.body

    if (!name || !email) {
      return res
        .status(400)
        .json({ success: false, error: "Missing name or email" })
    }

    const result = await sendContactEmail(name, email)

    if (result.success) {
      return res.status(200).json({ success: true })
    } else {
      return res
        .status(500)
        .json({ success: false, error: result.error || "Failed to send email" })
    }
  } catch (error) {
    console.error("API Error in send-contact:", error)
    return res.status(500).json({ success: false, error: "Server error" })
  }
}
