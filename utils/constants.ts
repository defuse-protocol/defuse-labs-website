import clsx from "clsx"

export const gradient =
  "linear-gradient(225deg, #f76b15, #4dd092 13%, #f76b15 34% 84%, #2d62ff)"

export const baseButton = "rounded-md border px-8 py-6 text-center font-bold"

export const whiteButton = clsx("border-black bg-white text-black", baseButton)

export const blackButton = clsx(
  "border-white/20 bg-[#080808] text-white",
  baseButton
)

export const transparentButton = clsx(
  "border-white/20 bg-transparent text-white",
  baseButton
)
