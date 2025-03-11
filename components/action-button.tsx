import { blackButton, transparentButton, whiteButton } from "@/utils/constants"
import clsx from "clsx"

const ActionButton = ({
  variant,
  href,
  children,
}: {
  variant?: "white" | "black" | "transparent"
  href?: string
  children: React.ReactNode
}) => {
  const onClick = () => {
    if (href) {
      if (href.startsWith("http")) {
        window.open(href)
      } else {
        location.href = href
      }
    }
  }

  return (
    <button
      className={clsx(
        variant === "white" && whiteButton,
        variant === "black" && blackButton,
        variant === "transparent" && transparentButton,
        !variant && blackButton
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ActionButton
