import type { Metadata } from "next";

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Facts } from "@/components/sections/Facts";
import { Focus } from "@/components/sections/Focus";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { cantonNames, referenceCantons } from "@/lib/projects";
import { services } from "@/lib/services";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: siteUrl().toString(),
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.street,
      postalCode: site.contact.zip,
      addressLocality: site.contact.city,
      addressCountry: "CH",
    },
    areaServed: referenceCantons.map((canton) => ({
      "@type": "AdministrativeArea",
      name: `Kanton ${cantonNames[canton]}`,
    })),
    knowsAbout: services.map((service) => service.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Facts />
      <Services />
      <Projects />
      <Focus />
      <Process />
      <About />
      <Contact />
    </>
  );
}
