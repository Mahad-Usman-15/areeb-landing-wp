import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            03 — What I can build for you
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            Services built to fix what&apos;s costing you customers.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-[20px] border border-hairline bg-paper p-6 transition-all duration-200 hover:border-signal/30 hover:shadow-sm">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="flex-1 text-sm text-slate">{service.body}</p>
                <a
                  href={siteConfig.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-bold text-signal-deep"
                >
                  Get started →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
