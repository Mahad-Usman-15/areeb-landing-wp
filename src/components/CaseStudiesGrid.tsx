import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function CaseStudiesGrid() {
  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            04 — The work
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            Every project below started as a business with a problem.
          </h2>
          <p className="mt-3 text-slate">Six real businesses, six real problems — not portfolio filler.</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.name} delay={(index % 3) * 0.08} className="h-full">
              <CaseStudyCard study={study} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
