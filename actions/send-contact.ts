import { sendEmail } from "@/utils/email"

export async function sendContactEmail(name: string, email: string) {
  try {
    await sendEmail({
      To: "rafael.dalpra@aurora.dev",
      Subject: "New Contact Request from Defuse Labs Website",
      HtmlBody: `
        <h2>New Contact Request</h2>
        <p>Someone has requested to get in touch through the website contact form.</p>
        <h3>Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
