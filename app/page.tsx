import { Section } from "@/app/Section";
import Image from "next/image";
import Script from "next/script";
import coda from "./coda.svg";
import connor from "./connor.jpeg";
import farcaster from "./farcaster.svg";
import volky from "./volky.png";
import xIcon from "./x.svg";

export default function Home() {
  return (
    <>
      <Script src="/bg.js" strategy="afterInteractive" />
      <div className="content--canvas grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-0 gap-16 sm:p-20 font-inter">
        <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#about"
          >
            About
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#team"
          >
            Team
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#projects"
          >
            Projects
          </a>
        </header>
        <section className="flex flex-col gap-2 row-start-2">
          <h1 className="text-6xl font-bold">Network Goods Institute</h1>
          <p className="text-2xl tracking-tight text-muted-foreground">
            New paradigms for coordination
          </p>
        </section>
      </div>
      <main className="flex flex-col border-t-2 border-muted bg-gradient-to-b from-muted to-[200px] gap-20 py-24">
        <Section id="about" title="About"></Section>
        <Section id="team" title="Team">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="flex flex-col gap-2 items-center p-6 rounded-lg">
              <Image
                className="rounded-full border-4"
                src={connor}
                width={200}
                alt="Connor"
              />
              <p className="font-bold text-3xl text-center">Connor McCormick</p>

              <div className="flex gap-2">
                <a href="https://x.com/connormcmk" target="_blank">
                  <Image
                    src={xIcon.src}
                    width={24}
                    height={24}
                    alt="X profile"
                  />
                </a>
                <a href="https://warpcast.com/nor" target="_blank">
                  <Image
                    src={farcaster.src}
                    width={24}
                    height={24}
                    alt="Farcaster profile"
                  />
                </a>
                <a href="https://coda.io/@connor" target="_blank">
                  <Image src={coda.src} width={24} height={24} alt="Coda" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-6 rounded-lg">
              <Image
                className="rounded-full border-4"
                src={volky}
                width={200}
                alt="Volky"
              />
              <p className="font-bold text-3xl text-center">Volky</p>
              <div className="flex gap-2">
                <a href="https://x.com/volkyeth" target="_blank">
                  <Image
                    src={xIcon.src}
                    width={24}
                    height={24}
                    alt="X profile"
                  />
                </a>
                <a href="https://warpcast.com/volky.eth" target="_blank">
                  <Image
                    src={farcaster.src}
                    width={24}
                    height={24}
                    alt="Farcaster profile"
                  />
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-16">
            <h3 className="font-bold text-3xl text-center">Negation Game</h3>
            <h3 className="font-bold text-3xl text-center">Index wallets</h3>
          </div>
        </Section>
      </main>
    </>
  );
}
