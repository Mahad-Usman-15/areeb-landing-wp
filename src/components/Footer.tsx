import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import Container from "@/components/Container";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-3">
        <div>
          <span className="text-lg font-bold">{siteConfig.developerName}</span>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            WordPress developer helping small businesses get sites that book jobs, sell products,
            and turn visitors into customers.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-signal"
            >
              Message me on WhatsApp
            </a>
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-slate-400 hover:text-white">
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-signal">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-signal">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.developerName}. All rights reserved.
          </span>
          <span>WordPress Developer</span>
        </Container>
      </div>
    </footer>
  );
}
