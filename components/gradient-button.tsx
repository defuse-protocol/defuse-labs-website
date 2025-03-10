import { gradient } from "@/utils/constants"

export const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="rounded-xl"
      style={{
        background: gradient,
      }}
    >
      <div className="m-[1px] rounded-xl bg-black px-5 py-3 text-sm font-bold text-white">
        {children}
      </div>
    </button>
  )
}
