import { AlertTriangle, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";
import { buildMetadata } from "@/lib/seo";
import {
  PERCORSI,
  PROCEDURE_SOVRAINDEBITAMENTO,
  ESDEBITAZIONE,
  OCC_NOTA,
  MOTIVI_ANNULLAMENTO,
  TERMINI_RICORSO,
  ROTTAMAZIONE_NOTA,
  ITER_STEPS,
  AVVISO_CLIENTE,
  NORMATIVA_REFS,
} from "@/lib/content/debiti-fiscali";

export const metadata = buildMetadata({
  title: "Debiti Fiscali e Cartelle Esattoriali",
  description:
    "Cartelle esattoriali troppo alte? Analizziamo i vizi che permettono di annullarle e valutiamo il sovraindebitamento per chi non riesce più a sostenere i propri debiti.",
  path: "/debiti-fiscali",
});

export default function DebitiFiscaliPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Contenzioso Tributario</Eyebrow>
          <h1 className="font-serif text-[38px] md:text-[56px] font-light text-white leading-[1.1] tracking-tight">
            Hai cartelle di
            <br />
            <em className="text-gold">pagamento troppo alte?</em>
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Analizziamo le tue cartelle esattoriali per verificare se esistono
          vizi che ne permettono l&apos;annullamento, e valutiamo insieme se il
          sovraindebitamento è la strada giusta per te.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-px bg-line">
        {PERCORSI.map((p) => (
          <div key={p.title} className="bg-parchment px-6 py-10 md:px-12">
            <h2 className="font-serif text-2xl font-medium text-ink mb-2">
              {p.title}
            </h2>
            <p className="text-[15px] text-muted leading-relaxed">{p.note}</p>
          </div>
        ))}
      </section>

      {/* SOVRAINDEBITAMENTO */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Sovraindebitamento</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-12">
          Tre procedure possibili
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PROCEDURE_SOVRAINDEBITAMENTO.map((p) => (
            <div key={p.title} className="bg-parchment border-t-4 border-gold px-8 py-10">
              <h3 className="font-serif text-lg font-medium text-ink mb-3">
                {p.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-gold pl-6 mb-8">
          <h3 className="font-serif text-xl font-medium text-ink mb-2">
            {ESDEBITAZIONE.title}
          </h3>
          <p className="text-[15px] text-muted leading-relaxed mb-3">
            {ESDEBITAZIONE.text}
          </p>
          <p className="text-[13px] text-gold leading-relaxed">
            ⚠ {ESDEBITAZIONE.nota}
          </p>
        </div>

        <p className="text-[14px] text-muted leading-relaxed max-w-2xl">
          {OCC_NOTA}
        </p>
      </section>

      {/* CARTELLE */}
      <section className="bg-parchment px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Cartelle esattoriali</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-12">
          Quando si possono annullare
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mb-16">
          {MOTIVI_ANNULLAMENTO.map((m) => (
            <div key={m.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-medium text-ink mb-2">
                {m.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-gold pl-6 mb-10">
          <h3 className="font-serif text-xl font-medium text-ink mb-2">
            {TERMINI_RICORSO.title}
          </h3>
          <p className="text-[15px] text-[#3a3020] leading-relaxed font-light">
            {TERMINI_RICORSO.text}
          </p>
        </div>

        <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 px-5 py-4 max-w-2xl">
          <AlertTriangle size={18} className="text-gold shrink-0 mt-0.5" />
          <p className="text-[13px] text-[#7a5c1e] leading-relaxed">
            {ROTTAMAZIONE_NOTA}
          </p>
        </div>
      </section>

      {/* ITER */}
      <section className="bg-cream px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Come funziona</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-14">
          Il percorso, passo dopo passo
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {ITER_STEPS.map((s) => (
            <div key={s.num}>
              <div className="font-serif text-4xl font-light text-gold mb-4">
                {s.num}
              </div>
              <h3 className="font-serif text-lg font-medium text-ink mb-2.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="text-[14px] text-muted leading-relaxed max-w-2xl border-t border-line pt-8">
          {AVVISO_CLIENTE}
        </p>
      </section>

      {/* NORMATIVA */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Riferimenti normativi</Eyebrow>
        <div className="flex flex-col gap-2 max-w-2xl">
          {NORMATIVA_REFS.map((n) => (
            <a
              key={n.title}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 text-[14px] text-[#3a3020] py-4 border-b border-line hover:text-gold"
            >
              {n.title}
              <ExternalLink size={14} className="shrink-0 text-muted" />
            </a>
          ))}
        </div>
      </section>

      <CtaBanner
        variant="dark"
        title={
          <>
            Vuoi sapere se
            <br />
            <em className="text-gold">puoi liberartene?</em>
          </>
        }
        description={
          <>
            Prima analisi senza impegno.
            <br />
            Ti diciamo con chiarezza qual è la strada realistica.
          </>
        }
        buttonLabel="Contattaci"
        buttonHref="/contatti"
      />
    </>
  );
}
