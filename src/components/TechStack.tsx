import { techStackGroups } from "@/data/tech-stack";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const allTools = techStackGroups.flatMap((group) => group.tools);
const marqueeTools = [...allTools, ...allTools];

export default function TechStack() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            07 — Tools & platforms
          </span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-balance sm:text-4xl">
            What I build with.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group/marquee relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-64px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-64px),transparent)]">
            <div className="animate-marquee flex w-max gap-3 group-hover/marquee:[animation-play-state:paused]">
              {marqueeTools.map((tool, index) => (
                <span
                  key={`${tool}-${index}`}
                  className="shrink-0 rounded-full border border-hairline bg-paper px-5 py-2.5 text-sm font-bold text-ink transition-colors duration-200 hover:border-signal/40 hover:bg-signal-tint/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
