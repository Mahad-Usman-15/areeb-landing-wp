import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ValueProp from "@/components/ValueProp";
import Services from "@/components/Services";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import TrustSection from "@/components/TrustSection";
import TechStack from "@/components/TechStack";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.siteUrl}/#business`,
      name: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}/Areeb.jpeg`,
      email: siteConfig.contactEmail,
      priceRange: "$$",
      areaServed: "Worldwide",
      founder: { "@id": `${siteConfig.siteUrl}/#person` },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.body,
        },
      })),
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.developerName,
      jobTitle: "WordPress Developer",
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}/Areeb.jpeg`,
      email: siteConfig.contactEmail,
      worksFor: { "@id": `${siteConfig.siteUrl}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.title,
      publisher: { "@id": `${siteConfig.siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ProblemSection />
        <ValueProp />
        <Services />
        <CaseStudiesGrid />
        <ProcessSteps />
        <TrustSection />
        <TechStack />
        <AboutMe />
        <Testimonials />
        <Faq />
        <ContactForm />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
