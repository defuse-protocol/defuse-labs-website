"use client"

import { useState } from "react"
import ActionButton from "./action-button"
import { HiMiniXMark } from "react-icons/hi2"
import { sendContactEmail } from "@/actions/send-contact"
import toast from "react-hot-toast"

export const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!name || !email) {
      setError("Please enter your name and email.")
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    const result = await sendContactEmail(name, email)
    if (result.success) {
      toast.success(
        "Email sent successfully. We will be in touch shortly. Thank you!"
      )
      setIsOpen(false)
    } else {
      setError("Failed to send email.")
    }
  }

  return (
    <>
      <ActionButton variant="transparent" onClick={() => setIsOpen(true)}>
        Contact us
      </ActionButton>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/50">
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="z-10 m-auto flex max-w-2xl flex-col items-center rounded-3xl bg-white p-10">
            <button
              className="absolute right-4 top-4"
              onClick={() => setIsOpen(false)}
            >
              <HiMiniXMark className="h-5 w-5" />
            </button>
            <h2 className="text-3xl font-bold">Contact us</h2>
            <p className="text-center text-sm text-[##080808]">
              Want to keep up with our latest research and updates? Interested
              in collaborating with us? Simply share your details, and
              we&apos;ll keep you informed and involved.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg border border-[#08080820] p-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="rounded-lg border border-[#08080820] p-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="my-3 text-red-500">{error}</p>}
              <ActionButton className="mt-2 flex self-start">Send</ActionButton>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
