import Container from "./Container"
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import clsx from "clsx"
import { FaLinkedin, FaEnvelope } from "react-icons/fa6"
import Image from "next/image"
import { Dialog, DialogPanel } from "@headlessui/react"
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2"
import { useRouter } from "next/router"

const navigation = {
  main: [
    {
      name: "About us",
      href: "#about",
    },
    {
      name: "Careers",
      href: "#careers",
    },
    {
      name: "Get involved",
      href: "#get-involved",
      button: true,
    },
  ],
  footer: [
    {
      name: "Get involved",
      href: "#get-involved",
    },
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
    {
      name: "Cookie Policy",
      href: "/cookies",
    },
  ],
  social: [
    {
      name: "X",
      href: "https://www.x.com/defuselabs",
      icon: <Image src="/assets/x.svg" alt="X" width={24} height={24} />,
    },
  ],
}

const Logo = () => (
  <Image
    src="/assets/defuse-labs-logo-white.svg"
    alt=""
    priority
    width={120}
    height={32}
    className="h-8 w-auto object-contain"
  />
)

const Layout = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      setMenuOpen(false)
    }

    router.events.on("hashChangeStart", handleHashChange)
    return () => {
      router.events.off("hashChangeStart", handleHashChange)
    }
  }, [router.events])

  return (
    <>
      <header className="fixed top-0 z-10 w-full border-b border-white/10 bg-[#080808e6] backdrop-blur-sm">
        <Container className="flex items-center justify-between py-6">
          <Link href="/">
            <span className="sr-only">Defuse Labs</span>
            <Logo />
          </Link>

          <nav className="hidden flex-row items-center gap-x-2 lg:flex">
            {navigation.main.map(({ name, href, button }) => (
              <Link
                key={name}
                href={href}
                className={clsx(
                  "rounded-md px-6 py-4 leading-none text-white transition-all duration-300",
                  {
                    "border border-white/20 font-medium hover:-translate-y-[5px]":
                      button,
                    "font-normal": !button,
                  }
                )}
              >
                {name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-lg p-3 text-white transition-colors lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <HiMiniBars3 className="h-5 w-5" />
          </button>

          <Dialog
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            className="relative z-50 transition-all duration-300"
          >
            <DialogPanel className="fixed inset-0 flex w-screen flex-col bg-[#080808]">
              <div className="flex items-center justify-between border-b px-4 py-6 sm:px-6">
                <Link href="/">
                  <span className="sr-only">Defuse Labs</span>
                  <Logo />
                </Link>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg p-3 text-white transition-colors"
                >
                  <span className="sr-only">Close menu</span>
                  <HiMiniXMark className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-y-16">
                {navigation.main.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="text-2xl font-medium leading-none text-white"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </DialogPanel>
          </Dialog>
        </Container>
      </header>
      <div
        className="relative overflow-hidden bg-[url('/assets/background-cubes.png')] bg-center bg-no-repeat"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "0 5%",
          backgroundRepeat: "repeat",
        }}
      >
        <main className={clsx("flex-1", className)}>{children}</main>

        <footer className="border-t bg-black py-10 text-white">
          <Container>
            <div className="flex flex-col items-center justify-between gap-4 border-b border-white/20 py-6 sm:flex-row">
              <div className="flex items-center gap-4">
                {navigation.footer.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="text-sm font-thin text-white hover:underline"
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-x-2">
                {navigation.social.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    className="rounded-lg p-2.5 text-white transition-colors hover:text-gray-300"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="sr-only">{name}</span>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-6 py-6 md:flex-row">
              <Logo />
              <div className="text-sm font-thin text-white">
                &copy; {new Date().getFullYear()} Defuse Labs. All rights
                reserved.
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default Layout
