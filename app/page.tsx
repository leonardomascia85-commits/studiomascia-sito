import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SERVICES } from "@/lib/content/services";
import { STUDIO_INFO } from "@/lib/content/studio-info";

const STATS = [
  { num: "13+", label: "Anni di attività professionale" },
  { num: "100%", label: "Clienti seguiti personalmente dal titolare" },
  { num: "6", label: "Aree di consulenza specializzata" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grid md:grid-cols-2 md:min-h-[85vh]">
        <div className="relative overflow-hidden bg-ink px-6 py-20 md:px-[60px] md:py-20 flex flex-col justify-center">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-gold/15 pointer-events-none" />
          <div className="absolute bottom-10 -left-16 w-52 h-52 rounded-full border border-gold/10 pointer-events-none" />
          <div className="relative">
            <Eyebrow>Palma Campania · Napoli · Dal 2012</Eyebrow>
            <h1 className="font-serif text-[38px] md:text-[58px] font-light text-white leading-[1.1] tracking-tight mb-7">
              Studio di
              <br />
              <em className="italic text-gold">Commercialisti</em>
              <br />e Revisori Legali
            </h1>
            <p className="text-[15px] leading-relaxed text-white/60 max-w-[380px] mb-11 font-light">
              Consulenza fiscale, societaria e aziendale per imprese e
              privati. Oltre 13 anni di esperienza al servizio delle PMI
              italiane.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/contatti"
                className="bg-gold text-ink text-[13px] font-medium tracking-[0.1em] uppercase px-7 py-3.5 hover:bg-[#d4b06a]"
              >
                Richiedi consulenza
              </Link>
              <Link
                href="/servizi"
                className="border border-white/20 text-white/70 text-[13px] tracking-[0.08em] uppercase px-6 py-3.5 hover:border-white/40 hover:text-white"
              >
                I nostri servizi
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-cream px-6 py-16 md:px-[60px] md:py-20 flex flex-col justify-center gap-9">
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-gold pl-6">
              <div className="font-serif text-[40px] md:text-[48px] font-light text-ink leading-none tracking-tight">
                {s.num}
              </div>
              <div className="text-sm text-muted mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIZI */}
      <section className="px-6 py-16 md:px-[60px] md:py-24">
        <Eyebrow>Cosa facciamo</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[44px] font-light text-ink leading-tight mb-10 md:mb-12">
          I nostri servizi
          <br />
          di consulenza
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-line">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              className="group bg-white hover:bg-ink transition-colors px-9 py-10"
            >
              <div className="font-serif text-sm text-gold/60 group-hover:text-gold/40 mb-5">
                {s.number}
              </div>
              <h3 className="font-serif text-xl font-medium text-ink group-hover:text-white transition-colors mb-3.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-[#7a7060] group-hover:text-white/55 transition-colors font-light">
                {s.homeSummary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROFILO */}
      <section className="grid md:grid-cols-2 bg-ink">
        <div className="px-6 py-16 md:px-[60px] md:py-24 flex flex-col justify-center">
          <Eyebrow>Chi siamo</Eyebrow>
          <h2 className="font-serif text-4xl md:text-[44px] font-light text-white leading-tight mb-5">
            Professionalità
            <br />e presenza
            <br />
            personale
          </h2>
          <p className="text-[15px] text-white/60 leading-relaxed max-w-[380px] mb-9 font-light">
            Il titolare segue ogni cliente direttamente, garantendo controllo
            puntuale di tutti gli adempimenti fiscali, contabili e societari.
          </p>
          <blockquote className="font-serif italic text-xl font-light text-white leading-relaxed border-l-2 border-white/30 pl-6">
            &ldquo;Il nostro impegno è offrire una consulenza di alto livello,
            senza lasciare mai nulla al caso.&rdquo;
          </blockquote>
        </div>

        <div className="bg-gold px-6 py-16 md:px-[60px] md:py-24 flex flex-col justify-center">
          <h3 className="font-serif text-[32px] font-normal text-ink mb-1">
            {STUDIO_INFO.founder}
          </h3>
          <p className="text-[13px] tracking-[0.15em] uppercase text-ink/60 mb-9">
            Titolare · Commercialista · Revisore Legale
          </p>
          <ul className="flex flex-col gap-3.5">
            {[
              "Iscritto all'Albo dei Dottori Commercialisti",
              "Revisore Legale abilitato CNDCEC",
              "Specialista in finanza agevolata PMI",
              "Clienti nazionali e internazionali",
              "Studio fondato nel 2012 a Palma Campania",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] text-ink">
                <span className="w-5 h-px bg-ink/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        variant="cream"
        title={
          <>
            Pronti ad aiutarti.
            <br />
            <em className="text-gold">Contattateci oggi.</em>
          </>
        }
        description={
          <>
            Risposta garantita entro 24 ore.
            <br />
            Prima consulenza senza impegno.
          </>
        }
        buttonLabel="Scrivici ora"
        buttonHref="/contatti"
      />
    </>
  );
}
