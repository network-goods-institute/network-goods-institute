import { Section } from "@/app/Section";
import Image from "next/image";
import Script from "next/script";
import scrollLogo from "../public/scroll.png";
import deltaLogo from "../public/delta.png";

export default function Home() {
  const showProspectiveAffiliations = false;

  return (
    <>
      <Script src="/bg.js" strategy="afterInteractive" />
      <div className="content--canvas">
        <header className="row-start-1 flex gap-8 flex-wrap items-center justify-center bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-200 shadow-lg">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#our-approach"
          >
            Our Approach
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#affiliations"
          >
            Affiliations
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#projects"
          >
            Projects
          </a>
        </header>
        <section className="flex flex-col gap-6 row-start-2 text-center max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent leading-tight">
            Network Goods Institute
          </h1>
          <p className="text-3xl tracking-tight text-gray-600 font-light">
            New paradigms for coordination
          </p>
        </section>
      </div>
      <main className="flex items-center flex-col border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white gap-32 py-32">
        <Section id="our-approach" title="Our Approach">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">EP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Externality Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  How can we properly account for the costs and benefits of actions that affect others?
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">CI</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collective Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  How can we make better group decisions at scale?
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Method: Counterfactual Reasoning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">For Externality Pricing</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We use values-embedded vector money, a new way to encode social values directly into financial instruments.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">For Collective Intelligence</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We build systems that reason about &quot;what would have happened otherwise&quot; to improve judgment and resource allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="affiliations" title="Affiliations">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center items-center gap-16 flex-wrap">
              <div className="flex flex-col gap-4 items-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Image src={scrollLogo} alt="Scroll Logo" width={128} height={128} className="rounded-2xl shadow-lg" />
                <p className="font-bold text-2xl text-center text-gray-900">Scroll</p>
              </div>
              <div className="flex flex-col gap-4 items-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Image src={deltaLogo} alt="Delta Logo" width={128} height={128} className="rounded-2xl shadow-lg" />
                <p className="font-bold text-2xl text-center text-gray-900">Delta</p>
              </div>
              {showProspectiveAffiliations && [
                { name: "Protocol Labs", color: "from-red-400 to-red-500" },
                { name: "Metaculus", color: "from-indigo-400 to-indigo-500" },
                { name: "Uniswap", color: "from-pink-400 to-pink-500" },
              ].map((affiliation, index) => (
                <div key={index} className="flex flex-col gap-4 items-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 opacity-50">
                  <div className={`w-32 h-32 bg-gradient-to-br ${affiliation.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {affiliation.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <p className="font-bold text-2xl text-center text-gray-900">{affiliation.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">NG</span>
                  </div>
                  <h3 className="font-bold text-3xl text-gray-900">Negation Game</h3>
                </div>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  A protocol layer for reasoned disagreement: powered by economic incentives, governed by epistemic values, and designed for minds willing to change.
                </p>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A discussion platform built on principles of epistemic accountability and honest intellectual discourse. Unlike traditional platforms, it implements economic incentives that reward intellectual honesty and evidence-based reasoning.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Epistemic Values</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Economic Incentives</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Truth-Seeking</span>
                  </div>
                </div>
                <a
                  href="https://paragraph.com/@ngi/info-market-overton"
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 font-medium"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">IW</span>
                  </div>
                  <h3 className="font-bold text-3xl text-gray-900">Index Wallet</h3>
                </div>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Voluntary taxation, wealth equalization, and funding for public goods.
                </p>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A programmable wallet that enables voluntary taxation through economic mechanisms. Index wallets create wealth-equalizing dynamics while funding public goods through selfish taxation principles.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Public Goods</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Wealth Equality</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Economic Mechanism</span>
                  </div>
                </div>
                <a
                  href="https://preprint.indexwallets.org/"
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium"
                >
                  Read Preprint →
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
