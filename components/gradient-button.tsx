import { gradient } from "@/utils/contants"
import clsx from "clsx"

export const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={clsx(gradient, "rounded-xl")}>
      <div className="m-[2px] rounded-xl bg-black px-5 py-3 text-sm font-bold text-white">
        {children}
      </div>
    </button>
  )
}
