import Link from "next/link"

const CookieBanner = ({ onClick }: { onClick: () => void }) => (
  <div className="fixed bottom-4 left-4 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-xl">
    <div className="flex flex-col items-start text-sm leading-normal text-gray-700">
      <p>This site uses cookies.</p>
      <Link href="/cookies" className="underline hover:text-black">
        Read more
      </Link>
    </div>

    <button
      onClick={onClick}
      className="rounded-lg border border-black bg-black px-4 py-3 text-sm leading-none text-white"
    >
      OK
    </button>
  </div>
)

export default CookieBanner
