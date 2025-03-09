import Container from "@/components/Container"
import Image from "next/image"
import clsx from "clsx"
import {
  GoArrowRight,
  GoArrowUpRight,
  GoChevronDown,
  GoChevronUp,
} from "react-icons/go"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { useState } from "react"
import { gradient } from "@/utils/contants"
import { GradientButton } from "@/components/gradient-button"

function Home() {
  const [problemSectionOpen, setProblemSectionOpen] = useState(true)
  const [solutionSectionOpen, setSolutionSectionOpen] = useState(true)

  const toggleProblemSection = () => {
    setProblemSectionOpen(!problemSectionOpen)
  }

  const toggleSolutionSection = () => {
    setSolutionSectionOpen(!solutionSectionOpen)
  }

  return (
    <>
      <section className="relative min-h-[75vh] overflow-hidden">
        <Container className="relative pb-20 pt-20 sm:pb-72 sm:pt-80">
          <div className="relative mx-auto max-w-4xl">
            <div className="relative flex flex-col items-center justify-center">
              <h1 className="text-center text-6xl font-bold tracking-tight text-white">
                Powering the future of AI transactions
              </h1>
              <div className="mt-5 sm:mt-6">
                <p className="text-balance text-center text-xl font-light tracking-tight text-[#CCCCCC]">
                  Defuse Labs develops <strong>NEAR Intents</strong> to enable
                  seamless cross-chain interactions in an automated world —
                  connecting AI, services, and financial applications.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-2 sm:mt-12">
                <a
                  href="#about"
                  className="rounded-md border border-black bg-white px-7 py-5 text-center text-base font-bold leading-none text-black transition-all hover:-translate-y-[5px]"
                >
                  Get involved
                </a>
                <a
                  href="#work"
                  className="rounded-md border border-white/20 bg-[#080808] px-7 py-5 text-center text-base font-bold leading-none text-white transition-all hover:-translate-y-[5px]"
                >
                  Work with us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about">
        <Container className="flex flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-white p-8 md:p-12">
            <div className="w-full">
              <div className="mb-8">
                <GradientButton>About us</GradientButton>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-[32px] font-bold leading-tight text-black">
                    Deep-tech minds sculpting the financial protocols of an
                    autonomous tomorrow
                  </h2>
                </div>
                <div>
                  <p className="text-base text-gray-700">
                    At Defuse Labs we design intent-driven liquidity layers,
                    where smart contracts breathe, AI transacts and chains sync
                    in real-time With expertise in AI, cryptography, and
                    decentralized finance, our team is redefining how
                    intelligent agents interact across blockchain networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#080808] text-white">
              <div
                className="flex cursor-pointer items-center justify-between p-8 md:p-12"
                onClick={toggleProblemSection}
              >
                <h3 className="text-2xl font-bold text-white">
                  The problem we solve
                </h3>
                <div className="text-white transition-transform">
                  {problemSectionOpen ? (
                    <GoChevronUp className="h-8 w-8" />
                  ) : (
                    <GoChevronDown className="h-8 w-8" />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${problemSectionOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="max-w-3xl p-8 pt-0 text-base text-gray-300 md:p-12 md:pt-0">
                  Cross-chain AI interactions are plagued by fragmented
                  liquidity, slow execution, and lack of
                  interoperability—bottlenecks that prevent seamless automation
                  and frictionless exchange. Without a unified framework,
                  AI-driven transactions struggle to move across decentralized
                  networks efficiently.
                </p>
              </div>

              <div className="w-full border-t border-white/20"></div>

              <div
                className="flex cursor-pointer items-center justify-between p-8 md:p-12"
                onClick={toggleSolutionSection}
              >
                <h3 className="text-2xl font-bold text-white">
                  Our solution – Near Intents
                </h3>
                <div className="text-white transition-transform">
                  {solutionSectionOpen ? (
                    <GoChevronUp className="h-8 w-8" />
                  ) : (
                    <GoChevronDown className="h-8 w-8" />
                  )}
                </div>
              </div>

              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  solutionSectionOpen
                    ? "opacity-100p-8 max-h-[1500px] p-8 pt-0 md:p-12 md:pt-0"
                    : "max-h-0 p-8 pb-0 pt-0 opacity-0 md:pt-0"
                )}
              >
                <div className="mb-8">
                  <p className="text-xl font-bold text-orange-500">
                    Smart automation. Secure infrastructure. Scalable future.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="mb-4 text-base text-gray-300">
                    Defuse Labs is pioneering{" "}
                    <span className="font-bold">NEAR Intents</span>, a
                    next-generation transaction framework designed to enable
                    seamless, AI-driven financial interactions. By automating
                    complex cross-chain operations,{" "}
                    <span className="font-bold">NEAR Intents</span> empowers
                    autonomous agents, smart contracts, and decentralized
                    services to execute transactions efficiently and securely.
                  </p>
                </div>

                <div
                  className={clsx(
                    "mt-12 grid grid-cols-1 gap-[1px] rounded-xl md:grid-cols-3",
                    gradient
                  )}
                >
                  <div className="m-[1px] rounded-r-none rounded-tl-xl rounded-tr-xl bg-[#080808] p-8 md:rounded-l-xl md:rounded-tr-none">
                    <div className="mb-6">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <Image
                          src="/assets/cross-chain.svg"
                          alt="NEAR Intent Icon"
                          width={36}
                          height={36}
                        />
                      </div>
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-white">
                      Seamless cross-chain liquidity
                    </h4>
                    <p className="text-sm text-gray-400">
                      Instant, optimized asset movement across networks.
                    </p>
                  </div>

                  <div className="mx-[1px] bg-[#080808] p-8 md:mx-0 md:my-[1px]">
                    <div className="mb-6">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <Image
                          src="/assets/ai-powered.svg"
                          alt="NEAR Intent Icon"
                          width={36}
                          height={36}
                        />
                      </div>
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-white">
                      AI-powered automation
                    </h4>
                    <p className="text-sm text-gray-400">
                      Smart agents transact autonomously, reducing friction.
                    </p>
                  </div>

                  <div className="m-[1px] rounded-r-none rounded-bl-xl rounded-br-xl bg-[#080808] p-8 md:rounded-r-xl md:rounded-bl-none">
                    <div className="mb-6">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <Image
                          src="/assets/scalable.svg"
                          alt="NEAR Intent Icon"
                          width={36}
                          height={36}
                        />
                      </div>
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-white">
                      Secure & scalable infrastructure
                    </h4>
                    <p className="text-sm text-gray-400">
                      A robust, intent-driven framework for the future of
                      decentralized finance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps() {
  // const employees = await getEmployees()

  return {
    props: { employees: [], openPositions: [] },
    revalidate: 300,
  }
}

export default Home
