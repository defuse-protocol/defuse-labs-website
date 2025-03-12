"use client"

import { useState } from "react"
import ActionButton from "./action-button"
import { HiMiniXMark } from "react-icons/hi2"
import toast from "react-hot-toast"

interface ContactModalProps {
  buttonVariant?: "white" | "black" | "transparent"
}

export const ContactModal = ({ buttonVariant }: ContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Form validation
    if (!name || !email) {
      setError("Please enter your name and email.")
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      setIsSubmitting(false)
      return
    }

    try {
      // Call the API endpoint
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Your message has been sent successfully!")
        setName("")
        setEmail("")
        setIsOpen(false)
      } else {
        setError(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending contact:", error)
      setError("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ActionButton
        variant={buttonVariant || "transparent"}
        onClick={() => setIsOpen(true)}
      >
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
                disabled={isSubmitting}
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="rounded-lg border border-[#08080820] p-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              {error && <p className="my-3 text-red-500">{error}</p>}
              <ActionButton
                className={`mt-2 flex self-start ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
                onClick={isSubmitting ? () => {} : undefined}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </ActionButton>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
