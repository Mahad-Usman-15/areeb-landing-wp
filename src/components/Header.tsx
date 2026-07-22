import { siteConfig } from "@/lib/site-config";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/90 py-4 backdrop-blur">
      <Container className="flex items-center justify-between">
        <span className="font-bold tracking-tight">{siteConfig.developerName}</span>
        <a
          href={siteConfig.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-signal px-6 py-2.5 text-sm font-bold text-on-signal transition-transform hover:-translate-y-0.5"
        >
          Message me
        </a>
      </Container>
    </header>
  );
}
