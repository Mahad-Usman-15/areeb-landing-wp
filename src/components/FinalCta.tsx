import { siteConfig } from "@/lib/site-config";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section className="hairline-grid bg-ink py-20 text-center text-white sm:py-28">
      <Container>
        <Reveal className="mx-auto flex max-w-xl flex-col items-center">
          <h2 className="text-3xl font-black leading-tight text-balance sm:text-4xl">
            Ready to stop losing customers to a better website?
          </h2>
          <p className="mt-4 max-w-md text-slate-300">
            Send me a message — tell me what&apos;s not working, and I&apos;ll tell you exactly how
            I&apos;d fix it.
          </p>
          <a
            href={siteConfig.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-on-signal transition-transform hover:-translate-y-0.5"
          >
            {siteConfig.ctaLabel}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
