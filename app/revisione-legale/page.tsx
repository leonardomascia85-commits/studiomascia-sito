import { Suspense } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PreventivoForm } from "@/components/revisione-legale/preventivo-form";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { STUDIO_INFO } from "@/lib/content/studio-info";
import {
  HERO,
  SOGLIE,
  COSA_FACCIAMO,
  COME_LAVORIAMO,
  INDIPENDENZA,
  FAQ,
} from "@/lib/content/revisione-legale";

export const metadata = buildMetadata({
  title: "Revisione Legale dei Conti SRL Campania",
  description:
    "Revisione legale dei conti, Sindaco Unico e Collegio Sindacale per SRL, PMI e cooperative in Campania. Revisore esterno indipendente, anche per commercialisti.",
  path: "/revisione-legale",
});

const PROFESSIONAL_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${STUDIO_INFO.name} — Revisione Legale dei Conti`,
  founder: STUDIO_INFO.founder,
  url: `${SITE_URL}/revisione-legale`,
  email: STUDIO_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: STUDIO_INFO.address,
    postalCode: STUDIO_INFO.cap,
    addressLocality: "Palma Campania",
    addressRegion: "Campania",
    addressCountry: "IT",
  },
  areaServed: "Campania",
  description:
    "Revisione legale dei conti, Sindaco Unico, Collegio Sindacale e revisione per cooperative, per SRL e PMI della Campania.",
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function RevisioneLegalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PROFESSIONAL_SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      {/* HERO */}
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Revisione Legale dei Conti</Eyebrow>
          <h1 className="font-serif text-[36px] md:text-[52px] font-light text-white leading-[1.12] tracking-tight">
            {HERO.title}
            <br />
            <em className="text-gold">{HERO.titleEm}</em>
          </h1>
          <p className="text-[15px] leading-relaxed text-white/55 max-w-[460px] mt-6 font-light">
            {HERO.subtitle}
          </p>
          <Link
            href="#preventivo"
            className="inline-flex items-center gap-2 bg-gold text-ink text-[13px] font-medium tracking-[0.1em] uppercase px-7 py-3.5 hover:bg-[#d4b06a] transition-colors mt-9"
          >
            Richiedi un preventivo
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Un revisore esterno indipendente per amministratori e soci di SRL e
          cooperative vicine o sopra le soglie di obbligo, e per i
          commercialisti che cercano un revisore terzo per i propri clienti.
        </p>
      </section>

      {/* QUANDO È OBBLIGATORIA */}
      <section className="px-6 py-16 md:px-[60px] md:py-20">
        <Eyebrow>Quando la revisione è obbligatoria</Eyebrow>
        <h2 className="font-serif text-3xl md:text-[38px] font-light text-ink leading-tight mb-6 max-w-2xl">
          L&apos;obbligo di nomina dell&apos;organo di controllo
        </h2>
        <p className="text-[15px] text-[#3a3020] leading-relaxed font-light max-w-2xl mb-10">
          {SOGLIE.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {SOGLIE.casi.map((c) => (
            <div key={c.title} className="bg-parchment border-t-4 border-gold px-7 py-8">
              <h3 className="font-serif text-lg font-medium text-ink mb-3">{c.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 px-5 py-4 max-w-2xl">
          <ShieldCheck size={18} className="text-gold shrink-0 mt-0.5" />
          <p className="text-[13px] text-[#7a5c1e] leading-relaxed">{SOGLIE.nota}</p>
        </div>
      </section>

      {/* COSA FACCIAMO */}
      <section className="bg-parchment px-6 py-16 md:px-[60px] md:py-20">
        <Eyebrow>Cosa facciamo</Eyebrow>
        <h2 className="font-serif text-3xl md:text-[38px] font-light text-ink leading-tight mb-10 max-w-2xl">
          I nostri incarichi di revisione
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {COSA_FACCIAMO.map((c) => (
            <div key={c.title} className="bg-white border-l-2 border-gold px-7 py-7">
              <h3 className="font-serif text-lg font-medium text-ink mb-2.5">{c.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section className="px-6 py-16 md:px-[60px] md:py-20">
        <Eyebrow>Come lavoriamo</Eyebrow>
        <h2 className="font-serif text-3xl md:text-[38px] font-light text-ink leading-tight mb-14 max-w-2xl">
          Il percorso, passo dopo passo
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {COME_LAVORIAMO.map((s) => (
            <div key={s.num}>
              <div className="font-serif text-4xl font-light text-gold mb-4">{s.num}</div>
              <h3 className="font-serif text-base font-medium text-ink mb-2.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-[13.5px] text-muted leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDIPENDENZA */}
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20">
        <Eyebrow>Indipendenza</Eyebrow>
        <h2 className="font-serif text-3xl md:text-[38px] font-light text-white leading-tight mb-8 max-w-2xl">
          {INDIPENDENZA.title}
        </h2>
        <div className="flex flex-col gap-5 max-w-2xl">
          {INDIPENDENZA.text.map((p) => (
            <p key={p.slice(0, 24)} className="text-[15px] text-white/60 leading-relaxed font-light">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:px-[60px] md:py-20">
        <Eyebrow>Domande frequenti</Eyebrow>
        <h2 className="font-serif text-3xl md:text-[38px] font-light text-ink leading-tight mb-10 max-w-2xl">
          Le domande più comuni
        </h2>
        <div className="flex flex-col max-w-3xl">
          {FAQ.map((f) => (
            <div key={f.question} className="border-b border-line py-6">
              <h3 className="font-serif text-lg font-medium text-ink mb-2.5">{f.question}</h3>
              <p className="text-[14.5px] text-[#3a3020] leading-relaxed font-light">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREVENTIVO */}
      <section id="preventivo" className="bg-ink px-6 py-20 md:px-[60px] md:py-28 scroll-mt-[70px] border-t-4 border-gold">
        <Eyebrow>Richiedi un preventivo</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[48px] font-light text-white leading-tight mb-4 max-w-2xl">
          Parliamo della tua
          <br />
          <em className="text-gold">revisione legale.</em>
        </h2>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-2xl mb-14 font-light">
          Compila il modulo con i tuoi dati: ti risponderemo entro 48 ore con
          un preventivo su misura, senza impegno.
        </p>
        <div className="bg-white px-6 py-10 md:px-12 md:py-14 shadow-[0_0_0_1px_rgba(196,160,90,0.3)]">
          <Suspense fallback={null}>
            <PreventivoForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
