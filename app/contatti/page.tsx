import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/contatti/contact-form";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export const metadata: Metadata = {
  title: "Contatti — Studio Mascia",
  description:
    "Contatta lo Studio Mascia: indirizzo, email, PEC e orari. Prima consulenza senza impegno, risposta garantita entro 24 ore.",
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${STUDIO_INFO.address}, ${STUDIO_INFO.cap} ${STUDIO_INFO.city}`
)}&output=embed`;

export default function ContattiPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <Eyebrow>Parliamo</Eyebrow>
          <h1 className="font-serif text-[34px] md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
            Siamo qui
            <br />
            per <em className="text-gold">aiutarti.</em>
          </h1>
        </div>
        <p className="text-sm text-white/50 leading-relaxed max-w-[300px] md:text-right">
          Prima consulenza senza impegno.
          <br />
          Risposta garantita entro 24 ore.
        </p>
      </section>

      <section className="grid md:grid-cols-2 min-h-[500px]">
        <div className="bg-cream px-6 py-14 md:px-[60px] md:py-[72px] flex flex-col gap-10">
          <Eyebrow>Dove siamo</Eyebrow>

          <div className="border-l-2 border-gold pl-6">
            <div className="font-serif text-sm font-medium uppercase tracking-wide text-ink mb-2">
              Indirizzo
            </div>
            <div className="text-[15px] text-[#3a3020] leading-relaxed font-light">
              {STUDIO_INFO.address}
              <br />
              {STUDIO_INFO.cap} {STUDIO_INFO.city}
            </div>
          </div>

          <div className="border-l-2 border-gold pl-6">
            <div className="font-serif text-sm font-medium uppercase tracking-wide text-ink mb-2">
              Email
            </div>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="text-[15px] text-[#3a3020] hover:text-gold"
            >
              {STUDIO_INFO.email}
            </a>
          </div>

          <div className="border-l-2 border-gold pl-6">
            <div className="font-serif text-sm font-medium uppercase tracking-wide text-ink mb-2">
              Orari
            </div>
            <div className="text-[15px] text-[#3a3020] leading-relaxed font-light">
              Lunedì – Venerdì
              <br />
              9:00 – 13:00 · 15:00 – 18:00
            </div>
          </div>

          <div className="border-l-2 border-gold pl-6">
            <div className="font-serif text-sm font-medium uppercase tracking-wide text-ink mb-2">
              PEC
            </div>
            <a
              href={`mailto:${STUDIO_INFO.pec}`}
              className="text-[15px] text-[#3a3020] hover:text-gold"
            >
              {STUDIO_INFO.pec}
            </a>
          </div>
        </div>

        <div className="bg-line min-h-[320px] md:min-h-full relative overflow-hidden">
          <iframe
            src={mapSrc}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa: Studio Mascia"
          />
        </div>
      </section>

      <section className="px-6 py-16 md:px-[60px] md:py-20 bg-white">
        <h2 className="font-serif text-3xl md:text-[36px] font-light text-ink mb-2">
          Scrivici un messaggio
        </h2>
        <p className="text-sm text-muted mb-10 md:mb-12">
          Compila il modulo e ti risponderemo entro 24 ore.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
