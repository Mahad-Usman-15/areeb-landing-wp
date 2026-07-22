import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({
  study,
  priority = false,
}: {
  study: CaseStudy;
  priority?: boolean;
}) {
  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-hairline bg-surface transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-hairline bg-paper">
        <Image
          src={study.image}
          alt={`${study.name} website screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-slate">
            {study.tag}
          </span>
          <h3 className="mt-1 text-lg font-bold">{study.name}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-slate">
              Problem
            </div>
            <div className="mt-1">{study.problem}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-slate">
              Built
            </div>
            <div className="mt-1">{study.built}</div>
          </div>
        </div>

        <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-moss-tint px-3 py-1.5 font-mono text-xs font-bold text-moss">
          Result: {study.result}
        </span>
      </div>
    </a>
  );
}
