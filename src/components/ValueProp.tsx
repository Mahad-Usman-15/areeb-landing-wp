import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function ValueProp() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            02 — How this is different
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            I don&apos;t design pretty sites. I build sites that fix a specific problem.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-slate">
            Every project starts with your business, not a template. I find the one thing
            that&apos;s costing you customers, and build the site around fixing exactly that —
            fast turnaround, fixed pricing, and you can edit it yourself once it&apos;s live.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
