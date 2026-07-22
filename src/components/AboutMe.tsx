import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-hairline">
              <Image
                src="/Areeb.jpeg"
                alt={siteConfig.developerName}
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
              08 — Who&apos;s behind this
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-balance sm:text-4xl">
              Hi, I&apos;m {siteConfig.developerName}.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate">
              I&apos;m a WordPress developer who builds sites for small businesses that need to
              look credible and convert visitors — not agencies with a design portfolio to fill.
            </p>
            <p className="mt-4 max-w-xl text-slate">
              I work directly with you, no account managers or middlemen. I build specifically on
              WordPress so you&apos;re never locked into me: once it&apos;s live, the site is
              yours to edit, and I&apos;ll show you how.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
