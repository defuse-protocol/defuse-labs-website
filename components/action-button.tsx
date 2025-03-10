import { blackButton, transparentButton, whiteButton } from "@/utils/constants"
import clsx from "clsx"

const ActionButton = ({
  variant,
  href,
  children,
}: {
  variant?: "white" | "transparent"
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
        variant !== "white" ? whiteButton : blackButton,
        variant === "transparent" && transparentButton
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ActionButton
