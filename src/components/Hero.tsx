import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/Container";

const floatingBadges = [
  { label: "Turnaround", value: "1–3 Weeks" },
  { label: "Pricing", value: "Fixed, No Surprises" },
];

// Two-letter initials for the six case-study clients, in the order they appear
// in data/case-studies.ts (Anna Lougari, Soulful Success, Gracode Studio,
// Fine Line Lawncare, Polished & Posh Boutique, Stafyx Solutions).
const clientInitials = ["AL", "SS", "GS", "FL", "PP", "ST"];

function SparkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M10 2L11.5 8.5L18 10L11.5 11.5L10 18L8.5 11.5L2 10L8.5 8.5Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hairline-grid relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.1em] text-signal">
              <SparkIcon />
              15+ Sites Shipped · 100% Mobile-First
            </span>

            <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.4rem)] font-black leading-[1.05] text-balance">
              Websites that turn visitors into{" "}
              <span className="inline-block rounded-lg bg-signal px-2 text-on-signal">
                customers
              </span>
              .
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-300">
              I build custom WordPress websites, WooCommerce stores, landing pages, and site
              redesigns for small businesses — fixed price, fast turnaround, and built to book
              jobs and close sales, not just look nice.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-on-signal transition-transform hover:-translate-y-0.5"
              >
                {siteConfig.ctaLabel}
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/40"
              >
                See my work
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                {clientInitials.map((initials) => (
                  <div
                    key={initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-white/10 font-mono text-[11px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-300">
                Trusted by <strong className="text-white">15+ businesses</strong> worldwide
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-8 right-6 h-32 w-32 rounded-full border border-dashed border-white/20"
            />
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] bg-signal sm:translate-x-6 sm:translate-y-6" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border-2 border-signal">
              <Image
                src="/Areeb.jpeg"
                alt={`${siteConfig.developerName}, WordPress developer`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-top"
              />
            </div>

            {floatingBadges.map((badge, index) => (
              <div
                key={badge.label}
                className={`absolute hidden rounded-2xl bg-surface px-4 py-3 text-ink shadow-lg sm:block ${
                  index === 0 ? "-left-6 top-8" : "-right-6 bottom-8"
                }`}
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-slate">
                  {badge.label}
                </div>
                <div className="mt-0.5 text-sm font-bold">{badge.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
