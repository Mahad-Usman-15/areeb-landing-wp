"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — real visitors never fill this in.
    if (data.get("company")) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate">
            Contact
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-balance sm:text-4xl">
            Prefer email? Send the details here.
          </h2>
          <p className="mt-3 max-w-xl text-slate">
            Tell me about your business and what&apos;s not working — I&apos;ll reply within 24
            hours.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-10 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="name" className="block text-sm font-bold">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-hairline bg-paper px-4 py-3 text-sm outline-none focus:border-signal-deep"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-hairline bg-paper px-4 py-3 text-sm outline-none focus:border-signal-deep"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold">
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-lg border border-hairline bg-paper px-4 py-3 text-sm outline-none focus:border-signal-deep"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold">
                Tell me about your project
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-hairline bg-paper px-4 py-3 text-sm outline-none focus:border-signal-deep"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-on-signal transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <p className="mt-3 text-sm font-bold text-moss">
                  Message sent — I&apos;ll reply within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm font-bold text-signal-deep">
                  Something went wrong — try messaging on WhatsApp instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
