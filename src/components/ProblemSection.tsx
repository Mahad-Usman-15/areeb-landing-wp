import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const painPoints = [
  {
    num: "01",
    body: "A competitor with a better site is closing the customers you should've gotten.",
  },
  {
    num: "02",
    body: "People want to book a job or ask a question right now — your site gives them no way to do it.",
  },
  {
    num: "03",
    body: "It looks fine on a laptop. On a phone, where almost everyone actually sees it, it's a mess.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            01 — Sound familiar?
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            Your website might be costing you customers right now.
          </h2>
        </Reveal>

        <div className="mt-10 w-full divide-y divide-hairline border-t border-hairline">
          {painPoints.map((point, index) => (
            <Reveal key={point.num} delay={index * 0.08}>
              <div className="flex gap-5 py-5">
                <span className="font-mono text-sm font-bold text-signal-deep">{point.num}</span>
                <p className="text-lg text-slate">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
