import { Section } from "@/app/Section";
import { FAQ } from "@/app/components/FAQ";
import { Contact } from "@/app/components/Contact";
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
        <nav className="row-start-1 flex gap-8 flex-wrap items-center justify-center bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-200 shadow-lg" role="navigation" aria-label="Main navigation">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#mars-governance"
            aria-label="Navigate to Mars Governance section"
          >
            Our Ambitious Mission
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#our-approach"
            aria-label="Navigate to Our Approach section"
          >
            Our Approach
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#affiliations"
            aria-label="Navigate to Affiliations section"
          >
            Friends
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#projects"
            aria-label="Navigate to Projects section"
          >
            Projects
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#faq"
            aria-label="Navigate to FAQ section"
          >
            FAQ
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            href="#contact"
            aria-label="Navigate to Contact section"
          >
            Contact
          </a>
        </nav>
        <header className="flex flex-col gap-6 row-start-2 text-center max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent leading-tight">
            Network Goods Institute
          </h1>
          <p className="text-3xl tracking-tight text-gray-600 font-light">
            New paradigms for coordination
          </p>
        </header>

        <div className="row-start-3 flex flex-col items-center gap-4">
          <p className="text-gray-500 text-sm">Scroll to explore</p>
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-gray-400 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <main className="flex items-center flex-col border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white gap-32 py-32">
        <Section id="mars-governance" title="Our Ambitious Mission">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-16">
              <Image
                src="/mars.jpg"
                alt="Mars planet surface"
                width={512}
                height={384}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold">EP</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Externality Pricing</h3>
              </article>
              
              <article className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold">CR</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Counterfactual Reasoning</h3>
              </article>
              
              <article className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold">PR</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Power Regulation</h3>
              </article>
            </div>
          </div>
        </Section>

        <Section id="our-approach" title="Our Approach">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The problems as we see them</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <article className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">EP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Externality Pricing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  How can we properly account for the costs and benefits of actions that affect others?
                </p>
                <div className="text-blue-600 font-medium">Solution: Index Wallets</div>
              </article>
              
              <article className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">CR</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Counterfactual Reasoning</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  How can we understand "what would have happened otherwise" to make better decisions?
                </p>
                <div className="text-purple-600 font-medium">Solution: Collective Intelligence</div>
              </article>
              
              <article className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">PR</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Power Regulation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  How can we prevent concentration and abuse of power in governance systems?
                </p>
                <div className="text-orange-600 font-medium space-y-2">
                  <div>We're inspired by <a href="https://wtfisqf.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">quadratic funding</a> and <a href="https://www.gitcoin.co/blog/leveling-the-field-how-connection-oriented-cluster-matching-strengthens-quadratic-funding" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">connection-oriented cluster matching</a>.</div>
                  <div><a href="#contact" className="text-green-600 font-bold underline hover:no-underline bg-green-50 px-2 py-1 rounded">Help us solve it</a></div>
                </div>
              </article>
            </div>

            <article className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">For Externality Pricing</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We use values-embedded vector money, a new way to encode social values directly into financial instruments.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">For Counterfactual Reasoning</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We build collective intelligence systems through platforms like Negation Game that enable reasoned disagreement and self-validating behavior.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-orange-300">For Power Regulation</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We're exploring mechanisms inspired by quadratic funding and connection-oriented approaches. We need your help to solve this challenge.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </Section>

        <Section id="affiliations" title="Friends">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center items-center gap-16 flex-wrap" role="list">
              <div className="flex flex-col gap-4 items-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" role="listitem">
                <Image
                  src={scrollLogo}
                  alt="Scroll - Layer 2 Ethereum scaling solution"
                  width={128}
                  height={128}
                  className="rounded-2xl shadow-lg"
                  priority
                />
                <p className="font-bold text-2xl text-center text-gray-900">Scroll</p>
              </div>
              <div className="flex flex-col gap-4 items-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" role="listitem">
                <Image
                  src={deltaLogo}
                  alt="Delta - Decentralized trading protocol"
                  width={128}
                  height={128}
                  className="rounded-2xl shadow-lg"
                  priority
                />
                <p className="font-bold text-2xl text-center text-gray-900">Delta</p>
              </div>
              {showProspectiveAffiliations && [
                { name: "Protocol Labs", color: "from-red-400 to-red-500", description: "Decentralized web protocols" },
                { name: "Metaculus", color: "from-indigo-400 to-indigo-500", description: "Prediction and forecasting platform" },
                { name: "Uniswap", color: "from-pink-400 to-pink-500", description: "Decentralized exchange protocol" },
              ].map((affiliation, index) => (
                <div key={index} className="flex flex-col gap-4 items-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 opacity-50" role="listitem">
                  <div className={`w-32 h-32 bg-gradient-to-br ${affiliation.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`} aria-label={`${affiliation.name} logo placeholder`}>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" role="list">
              <article className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300" role="listitem">
                <header className="flex items-center gap-4 mb-6">
                  <Image
                    src="/negationgame.jpg"
                    alt="Negation Game logo"
                    width={64}
                    height={64}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <h3 className="font-bold text-3xl text-gray-900">Negation Game</h3>
                </header>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  A protocol layer for reasoned disagreement: powered by economic incentives, governed by epistemic values, and designed for minds willing to change.
                </p>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A discussion platform built on principles of epistemic accountability and honest intellectual discourse. Unlike traditional platforms, it implements economic incentives that reward intellectual honesty and evidence-based reasoning.
                  </p>
                  <div className="flex gap-4 flex-wrap" role="list" aria-label="Project tags">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium" role="listitem">Epistemic Values</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium" role="listitem">Economic Incentives</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium" role="listitem">Truth-Seeking</span>
                  </div>
                </div>
                <a
                  href="https://paragraph.com/@ngi/info-market-overton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 font-medium"
                  aria-label="Learn more about Negation Game project"
                >
                  Learn More →
                </a>
                <a
                  href="https://play.negationgame.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 ml-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 font-medium"
                  aria-label="Try out Negation Game"
                >
                  Try it out →
                </a>
              </article>

              <article className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300" role="listitem">
                <header className="flex items-center gap-4 mb-6">
                  <Image
                    src="/index_logo.svg"
                    alt="Index Wallet logo"
                    width={64}
                    height={64}
                    className="rounded-2xl shadow-lg bg-white p-2"
                    priority
                  />
                  <h3 className="font-bold text-3xl text-gray-900">Index Wallet</h3>
                </header>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Voluntary taxation, wealth equalization, and funding for public goods.
                </p>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A programmable wallet that enables voluntary taxation through economic mechanisms. Index wallets create wealth-equalizing dynamics while funding public goods through selfish taxation principles.
                  </p>
                  <div className="flex gap-4 flex-wrap" role="list" aria-label="Project tags">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium" role="listitem">Public Goods</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium" role="listitem">Wealth Equality</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium" role="listitem">Economic Mechanism</span>
                  </div>
                </div>
                <a
                  href="https://preprint.indexwallets.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium"
                  aria-label="Read Index Wallet preprint research paper"
                >
                  Read Preprint →
                </a>
                <a
                  href="https://www.indexwallets.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 ml-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 font-medium"
                  aria-label="View Index Wallet demo"
                >
                  View Demo →
                </a>
              </article>
            </div>
          </div>
        </Section>

        <FAQ />

        <Contact />
      </main>
    </>
  );
}
