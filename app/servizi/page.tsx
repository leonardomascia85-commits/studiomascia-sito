import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SERVICES } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servizi",
  description:
    "Consulenza fiscale, aziendale, tributaria, contabile, revisione legale e bilanci per imprese e privati.",
  path: "/servizi",
});

export default function ServiziPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Cosa facciamo</Eyebrow>
          <h1 className="font-serif text-[38px] md:text-[56px] font-light text-white leading-[1.1] tracking-tight">
            I nostri
            <br />
            <em className="text-gold">servizi</em>
            <br />
            professionali
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Offriamo una gamma completa di servizi di consulenza fiscale,
          aziendale e legale. Ogni servizio è erogato direttamente dal
          titolare, con la massima attenzione e personalizzazione.
        </p>
      </section>

      <div>
        {SERVICES.map((s, i) => (
          <div
            key={s.slug}
            className={`grid md:grid-cols-[1fr_2fr] border-b border-line ${
              i % 2 === 1 ? "bg-parchment" : "bg-white"
            }`}
          >
            <div className="px-6 py-12 md:px-[60px] md:py-16 md:border-r border-line flex flex-col">
              <div className="font-serif text-[48px] font-light text-line leading-none mb-5">
                {s.number}
              </div>
              <h2 className="font-serif text-[26px] font-medium text-ink leading-tight mb-4">
                {s.title}
              </h2>
              <p className="text-[10px] tracking-[0.15em] uppercase text-gold">
                {s.tag}
              </p>
            </div>
            <div className="px-6 py-12 md:px-[60px] md:py-16">
              <p className="text-sm text-[#3a3020] leading-relaxed font-light mb-8">
                {s.description}
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13px] text-[#5a5040] leading-snug font-light"
                  >
                    <span className="w-4 h-px bg-gold mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contatti"
                className="inline-block text-[11px] tracking-[0.12em] uppercase text-ink font-medium border-b border-gold pb-0.5 hover:text-gold"
              >
                Richiedi informazioni →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <CtaBanner
        variant="dark"
        title={
          <>
            Non sai da dove
            <br />
            <em className="text-gold">iniziare?</em>
          </>
        }
        description={
          <>
            Contattaci per una prima consulenza.
            <br />
            Ti risponderemo entro 24 ore.
          </>
        }
        buttonLabel="Scrivici ora"
        buttonHref="/contatti"
      />
    </>
  );
}
