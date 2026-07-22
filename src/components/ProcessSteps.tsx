import { processSteps } from "@/data/process";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function ProcessSteps() {
  return (
    <section id="process" className="scroll-mt-20 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            05 — What happens after you message me
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            Four steps, no surprises.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.num} delay={index * 0.08} className="h-full">
              <div className="h-full rounded-[20px] border border-hairline bg-paper p-5 transition-all duration-200 hover:border-signal/30 hover:shadow-sm">
                <div className="font-mono text-2xl font-bold text-signal-deep tabular-nums">
                  {step.num}
                </div>
                <h3 className="mt-3 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
