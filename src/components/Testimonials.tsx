import { testimonials } from "@/data/testimonials";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            09 — What clients say
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            Real messages, from real projects.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal key={t.source} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-[20px] border border-hairline bg-paper p-5 transition-all duration-200 hover:border-signal/30 hover:shadow-sm">
                <span className="text-2xl font-black text-signal-deep">&ldquo;</span>
                <blockquote className="flex-1 text-sm text-slate">{t.quote}</blockquote>
                <figcaption className="font-mono text-xs font-bold uppercase tracking-[0.08em]">
                  {t.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
