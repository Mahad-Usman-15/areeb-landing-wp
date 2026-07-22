"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            10 — Before you message me
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            Questions people ask before they reach out.
          </h2>
        </Reveal>

        <div className="mt-10 w-full divide-y divide-hairline border-t border-hairline">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold"
                  >
                    {item.question}
                    <span className="text-xl text-signal-deep" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="pb-5 text-slate">{item.answer}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
