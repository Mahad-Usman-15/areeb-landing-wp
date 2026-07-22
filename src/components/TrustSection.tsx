import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const stats = [
  {
    value: "15+",
    label: "Live sites shipped",
    caption: "Real businesses running on WordPress sites I built end to end.",
  },
  {
    value: "24hr",
    label: "Response time, guaranteed",
    caption: "Message me and you'll hear back within a day, not a week.",
  },
  {
    value: "100%",
    label: "Yours after handoff",
    caption: "You get full access and ownership — no locked-in dependency on me.",
  },
  {
    value: "Fixed",
    label: "Price, no surprise invoices",
    caption: "Agreed in writing before any work starts, so there's nothing to guess at.",
  },
];

export default function TrustSection() {
  return (
    <section className="hairline-grid bg-ink py-16 text-white sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-signal">
            06 — Why you can trust this
          </span>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Just what&apos;s true.</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="font-mono text-3xl font-bold text-signal tabular-nums">{stat.value}</div>
              <div className="mt-1 text-sm font-bold text-white">{stat.label}</div>
              <p className="mt-2 text-sm text-slate-400">{stat.caption}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
