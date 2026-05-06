import { Section } from "@/app/Section";
import { FAQ } from "@/app/components/FAQ";
import { Contact } from "@/app/components/Contact";
import { Boids } from "@/app/components/Boids";
import { Disclosure } from "@/app/components/Disclosure";
import Image from "next/image";
import scrollLogo from "../public/scroll.png";
import deltaLogo from "../public/delta.png";

type Project = {
  slug: string;
  name: string;
  tagline: string;
  body: string;
  problem: string;
  marketSize: string;
  links: { label: string; href: string }[];
  image?: { src: string; alt: string };
};

const projects: Project[] = [
  {
    slug: "index-wallets",
    name: "Index Wallets",
    tagline: "Voluntary taxation, wealth equalization, funding for public goods.",
    body: "A programmable wallet that accepts payment in values-embedded vector currencies. The result is a market mechanism for funding public goods — one in which paying voluntary taxes is in the payer's own interest. We've published a preprint setting out the formal model, and a working demo.",
    problem: "Externality pricing",
    marketSize: "Global payments industry revenue ~$2.4T/yr; Visa + Mastercard combined market cap ~$1.1T.",
    links: [
      { label: "Read the preprint", href: "https://preprint.indexwallets.org/" },
      { label: "Try the demo", href: "https://www.indexwallets.org/" },
    ],
    image: { src: "/index_logo.svg", alt: "Index Wallets" },
  },
  {
    slug: "negation-game",
    name: "The Negation Game",
    tagline: "A protocol layer for reasoned disagreement.",
    body: "A discussion platform that pairs economic incentives with epistemic values. Participants stake credibility on claims; the system rewards those willing to update in light of stronger arguments. It is designed for groups that need to reason together honestly — and for minds willing to change.",
    problem: "Epistemic incentives",
    marketSize: "Prediction-market platforms ~$3B combined valuation (Polymarket, Kalshi); broader online-discourse market is hundreds of billions annually.",
    links: [
      { label: "Read the essay", href: "https://paragraph.com/@ngi/info-market-overton" },
      { label: "negationgame.com", href: "https://negationgame.com/" },
    ],
    image: { src: "/negationgame.jpg", alt: "Negation Game" },
  },
  {
    slug: "litmus",
    name: "Litmus",
    tagline: "AI-powered prediction for FDA drug approvals.",
    body: "Litmus combines AI research tools, a curated expert network, and a structured forecast elicitation workflow to produce calibrated predictions on biotech outcomes. It is built around a core question in collective-intelligence research: how do you systematically extract what humans know that AI doesn't, through a process that is rigorous, reproducible, and fully transparent? Developed in collaboration with Elanor Davies, with support from NGI.",
    problem: "Epistemic incentives",
    marketSize: "Expert networks $1.5B+ annual revenue; financial data terminals (Bloomberg ~$13B/yr) sit in the $30B+ category.",
    links: [{ label: "litmus.bio", href: "https://litmus.bio/" }],
  },
  {
    slug: "louie",
    name: "Louie",
    tagline: "Civic deliberative memory.",
    body: "Louie turns the public record of municipal government into something residents and officials can actually use. It ingests transcripts, agendas, and minutes, and makes them searchable in plain language — every answer linked back to the exact moment in the original meeting. Underneath sits a structured argument map: who said what, what was debated, what was decided, and what was left open. A demo of the first deployment is live with transcripts from the City of Mississauga in Ontario, with active outreach to other municipalities ahead of the October 2026 elections.",
    problem: "Epistemic incentives",
    marketSize: "US municipal IT spend ~$50B/yr; Tyler Technologies (incumbent) ~$25B market cap.",
    links: [{ label: "View the demo", href: "https://mississauga-demo.pages.dev/#/louie" }],
  },
];

type Collaborator = {
  name: string;
  href?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

const collaborators: Collaborator[] = [
  { name: "Scroll", image: { src: scrollLogo.src, alt: "Scroll", width: 56, height: 56 } },
  { name: "Delta", image: { src: deltaLogo.src, alt: "Delta", width: 56, height: 56 } },
  { name: "Philip Brown" },
  { name: "Joel Miller" },
  { name: "Daniel Ospina" },
  { name: "Rafael Kaufmann" },
  { name: "Elanor Davies" },
  { name: "Spencer Graham" },
  { name: "Volky" },
  { name: "Jan Baeriswyl" },
  { name: "Vaughn", href: "https://buttery.money" },
  { name: "Eugene Leventhal" },
  { name: "Jamilya Kamalova" },
];

export default function Home() {
  return (
    <>
      <header className="relative overflow-hidden">
        <div className="content--canvas relative">
          <Boids />

          <nav
            className="row-start-1 z-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink-muted"
            role="navigation"
            aria-label="Main navigation"
          >
            <a href="#approach" className="hover:text-ink transition-colors">
              Approach
            </a>
            <a href="#projects" className="hover:text-ink transition-colors">
              Projects
            </a>
            <a href="#collaborators" className="hover:text-ink transition-colors">
              Collaborators
            </a>
            <a href="#faq" className="hover:text-ink transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-ink transition-colors">
              Contact
            </a>
          </nav>

          <div className="row-start-2 z-10 flex flex-col gap-8 text-center max-w-4xl mx-auto px-4">
            <div className="text-xs uppercase tracking-[0.22em] text-ink-muted">
              Network Goods Institute
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] text-balance">
              New paradigms <span className="italic text-accent">for coordination.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
              We design economic, epistemic, and computational mechanisms for
              groups to reason and decide together at scale.
            </p>
          </div>

          <div className="row-start-3 z-10 flex flex-col items-center gap-2 text-ink-muted">
            <span className="text-xs uppercase tracking-[0.18em]">Scroll</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-32 md:gap-40 py-32 md:py-40 border-t border-rule">
        <Section id="approach" eyebrow="Approach" title="Three coordination failures shape the world we&rsquo;re stuck in.">
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-ink-soft text-lg md:text-xl leading-relaxed">
              The world coordinates through payment rails that don&rsquo;t price externalities, discourse platforms that reward heat over light, and civic systems with no memory. The mechanisms were built for a smaller, slower world. The problems they leave behind are real and human-scale; so are the returns for solving them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-5xl">
            <div className="flex flex-col gap-5">
              <div className="text-xs uppercase tracking-[0.18em] text-accent">
                Externality pricing
              </div>
              <p className="text-ink-soft leading-relaxed">
                Markets don&rsquo;t price what they don&rsquo;t see. Public goods stay underfunded; harms stay externalized. The opportunity is to make funding them profitable.
              </p>
              <div className="text-sm text-ink-soft border-l border-rule pl-4 leading-relaxed space-y-3">
                <div>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">Our approach</span>
                  <a href="#project-index-wallets" className="accent-link font-medium">Index Wallets ↓</a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">Comparable market</span>
                  Global payments industry revenue ~$2.4T/yr; Visa + Mastercard combined market cap ~$1.1T.
                </div>
              </div>
              <Disclosure label="Examples in the news">
                <ul className="text-sm text-ink-soft space-y-3 leading-relaxed pt-1">
                  <li>
                    <span className="font-medium text-ink">Climate damage.</span>{" "}
                    The IPCC&rsquo;s social cost of carbon sits above $185/ton; the global average carbon price is under $5. The gap implies tens of trillions in unpriced future damage.
                  </li>
                  <li>
                    <span className="font-medium text-ink">Open-source infrastructure.</span>{" "}
                    Log4j and the XZ Utils backdoor exposed how much critical software is maintained by a handful of unpaid volunteers. Value flows to the firms using it; risk pools at the maintainers.
                  </li>
                  <li>
                    <span className="font-medium text-ink">Pandemic preparedness.</span>{" "}
                    Antibiotic R&amp;D collapsed because new antibiotics weren&rsquo;t profitable; COVID-19 found preparedness systematically underfunded despite decades of warnings.
                  </li>
                </ul>
              </Disclosure>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-xs uppercase tracking-[0.18em] text-accent">
                Epistemic incentives
              </div>
              <p className="text-ink-soft leading-relaxed">
                Public reasoning rewards conviction over calibration and narrative dominance over accuracy. Better incentives — for being right, and for changing your mind — would reshape how decisions get made.
              </p>
              <div className="text-sm text-ink-soft border-l border-rule pl-4 leading-relaxed space-y-3">
                <div>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">Our approach</span>
                  <span className="font-medium">
                    <a href="#project-negation-game" className="accent-link">Negation Game ↓</a>,{" "}
                    <a href="#project-litmus" className="accent-link">Litmus ↓</a>,{" "}
                    <a href="#project-louie" className="accent-link">Louie ↓</a>
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">Comparable market</span>
                  Prediction-market platforms ~$3B combined valuation (Polymarket, Kalshi); expert networks $1.5B+ revenue; financial data terminals $30B+ revenue; US municipal IT spend $50B+/yr.
                </div>
              </div>
              <Disclosure label="Examples in the news">
                <ul className="text-sm text-ink-soft space-y-3 leading-relaxed pt-1">
                  <li>
                    <span className="font-medium text-ink">The replication crisis.</span>{" "}
                    Half of published psychology and a third of biomedical findings fail to replicate. Career incentives reward novel positive results, not calibrated uncertainty.
                  </li>
                  <li>
                    <span className="font-medium text-ink">SVB and the 2023 banking run.</span>{" "}
                    Risk-management consensus was wrong about interest-rate exposure. Few who flagged it ahead of time were rewarded; few who missed it were penalized.
                  </li>
                  <li>
                    <span className="font-medium text-ink">AI risk.</span>{" "}
                    Frontier labs publicly acknowledge significant existential risk while racing to deploy. No mechanism aligns career success with calibrated public communication.
                  </li>
                </ul>
              </Disclosure>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-xs uppercase tracking-[0.18em] text-accent">
                Power regulation
              </div>
              <p className="text-ink-soft leading-relaxed">
                Coordination systems concentrate power as easily as they distribute it. Designing against capture is part of the work, not an afterthought.
              </p>
              <div className="text-sm text-ink-soft border-l border-rule pl-4 leading-relaxed space-y-3">
                <div>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">Our approach</span>
                  <span className="text-ink">No dedicated project here yet — designing against capture is built into the work below.</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">Comparable market</span>
                  Hard to size cleanly: the firms targeted by antitrust and platform-governance fights have $10T+ in combined market cap; AI compute and capability concentration is the next front.
                </div>
              </div>
              <Disclosure label="Examples in the news">
                <ul className="text-sm text-ink-soft space-y-3 leading-relaxed pt-1">
                  <li>
                    <span className="font-medium text-ink">Tech antitrust.</span>{" "}
                    The FTC and EU have spent a decade unwinding concentration in attention, search, and app distribution — slow, costly, after the fact.
                  </li>
                  <li>
                    <span className="font-medium text-ink">AI compute concentration.</span>{" "}
                    Frontier model training has consolidated to four labs and three cloud providers. Governance proposals lag the consolidation.
                  </li>
                  <li>
                    <span className="font-medium text-ink">Revolving-door regulation.</span>{" "}
                    Treasury and Fed officials moving to Wall Street, FAA personnel to Boeing, FTC to big tech: industries write the rules they operate under, then hire the people who wrote them. Power buys money buys power.
                  </li>
                </ul>
              </Disclosure>
            </div>
          </div>

          <div className="mt-20 md:mt-28 max-w-3xl">
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug text-balance">
              We&rsquo;re building foundational assets — values-embedded vector money, collective-intelligence platforms, deliberative memory — for problems facing humanity at scale. The stakes are real. So are the returns for solving them.
            </p>
            <p className="mt-8 text-ink-soft leading-relaxed">
              We draw on mechanisms such as{" "}
              <a
                href="https://wtfisqf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                quadratic funding
              </a>{" "}
              and{" "}
              <a
                href="https://www.gitcoin.co/blog/leveling-the-field-how-connection-oriented-cluster-matching-strengthens-quadratic-funding"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                connection-oriented cluster matching
              </a>
              , and we publish the formal models behind our work alongside the code.
            </p>
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="What we&rsquo;re building.">
          <div className="flex flex-col">
            {projects.map((project, idx) => (
              <article
                key={project.name}
                id={`project-${project.slug}`}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 scroll-mt-24 ${idx === 0 ? "border-t" : ""} border-b border-rule`}
              >
                <div className="md:col-span-3 flex flex-col gap-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                    {project.problem}
                  </div>
                  {project.image && (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={56}
                      height={56}
                      className="rounded-sm"
                    />
                  )}
                  <div className="text-xs text-ink-soft border-l border-rule pl-3 leading-relaxed mt-1">
                    <span className="block uppercase tracking-[0.18em] text-ink-muted mb-1">
                      Comparable market
                    </span>
                    {project.marketSize}
                  </div>
                </div>

                <div className="md:col-span-9 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                      {project.name}
                    </h3>
                    <p className="font-display italic text-xl text-ink-soft mt-2">
                      {project.tagline}
                    </p>
                  </div>
                  <p className="text-ink-soft leading-relaxed text-base md:text-lg max-w-2xl">
                    {project.body}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accent-link text-sm md:text-base"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="collaborators" eyebrow="Our Collaborators" title="People and organizations we work with.">
          <ul
            className="flex flex-wrap gap-x-3 gap-y-3 max-w-4xl"
            role="list"
          >
            {collaborators.map((c) => {
              const inner = (
                <span className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-rule bg-paper-soft hover:border-[var(--accent)] hover:text-accent transition-colors text-ink rounded-sm text-base">
                  {c.image && (
                    <Image
                      src={c.image.src}
                      alt={c.image.alt}
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                  )}
                  <span className="font-medium">{c.name}</span>
                  {c.href && (
                    <span className="text-ink-muted text-sm">
                      {c.href.replace(/^https?:\/\//, "")}
                    </span>
                  )}
                </span>
              );
              return (
                <li key={c.name} role="listitem">
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </Section>

        <FAQ />

        <Contact />
      </main>
    </>
  );
}
