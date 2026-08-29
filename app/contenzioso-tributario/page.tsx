import { AlertTriangle, ArrowRight, ExternalLink, FileCheck } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ValutazioneForm } from "@/components/contenzioso-tributario/valutazione-form";
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
} from "@/lib/content/contenzioso-tributario";

export const metadata = buildMetadata({
  title: "Contenzioso Tributario",
  description:
    "Contenzioso tributario, sovraindebitamento, analisi e annullamento cartelle esattoriali: tre percorsi per aziende e privati. Invia i tuoi documenti per una prima valutazione gratuita.",
  path: "/contenzioso-tributario",
});

const [PERCORSO_CONTENZIOSO, PERCORSO_SOVRAINDEBITAMENTO, PERCORSO_CARTELLE] = PERCORSI;

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cos'è il contenzioso tributario e chi può usufruirne?",
      acceptedAnswer: { "@type": "Answer", text: PERCORSO_CONTENZIOSO.intro },
    },
    {
      "@type": "Question",
      name: "Cos'è il sovraindebitamento?",
      acceptedAnswer: { "@type": "Answer", text: PERCORSO_SOVRAINDEBITAMENTO.intro },
    },
    {
      "@type": "Question",
      name: "Quando si può annullare una cartella esattoriale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${PERCORSO_CARTELLE.intro} I motivi più comuni sono: ${MOTIVI_ANNULLAMENTO.map((m) => m.title.toLowerCase()).join(", ")}.`,
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo ho per fare ricorso contro una cartella esattoriale?",
      acceptedAnswer: { "@type": "Answer", text: TERMINI_RICORSO.text },
    },
    {
      "@type": "Question",
      name: "La prima valutazione dei documenti è davvero gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì: puoi inviarci le tue cartelle, la tua situazione debitoria o altri documenti tramite il modulo in fondo alla pagina e ricevi una prima valutazione e un preventivo senza alcun impegno.",
      },
    },
  ],
};

export default function ContenziosoTributarioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
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
          Aziende, professionisti e privati: tre percorsi per affrontare
          cartelle esattoriali, accertamenti e debiti che hanno superato la
          soglia della sostenibilità.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-px bg-line">
        {PERCORSI.map((p, i) => (
          <a
            key={p.slug}
            href={`#${p.slug}`}
            className="group bg-parchment hover:bg-ink border-t-4 border-gold px-6 py-10 md:px-8 transition-colors"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="font-serif text-[13px] text-gold/70 group-hover:text-gold">
                Percorso {i + 1}
              </span>
              <ArrowRight
                size={18}
                className="text-gold shrink-0 transition-transform group-hover:translate-x-1"
              />
            </div>
            <h2 className="font-serif text-2xl font-medium text-ink group-hover:text-white transition-colors mb-3">
              {p.title}
            </h2>
            <p className="text-[14px] text-muted group-hover:text-white/60 leading-relaxed transition-colors">
              {p.intro}
            </p>
          </a>
        ))}
      </section>

      {/* CTA VALUTAZIONE — IN EVIDENZA SUBITO */}
      <a
        href="#valutazione"
        className="group flex flex-col sm:flex-row items-center justify-between gap-6 bg-gold px-6 py-8 md:px-[60px] hover:bg-[#d4b06a] transition-colors"
      >
        <div className="flex items-center gap-4 text-center sm:text-left">
          <FileCheck size={28} className="text-ink shrink-0 hidden sm:block" />
          <div>
            <p className="font-serif text-xl md:text-2xl font-medium text-ink">
              Non sai da dove iniziare? Inviaci subito i tuoi documenti.
            </p>
            <p className="text-[13px] text-ink/70 mt-1">
              Prima valutazione e preventivo, gratuiti e senza impegno.
            </p>
          </div>
        </div>
        <span className="flex items-center gap-2 bg-ink text-white text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-4 whitespace-nowrap shrink-0 group-hover:bg-ink/90">
          Vai al modulo
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </a>

      {/* PERCORSO 1 — CONTENZIOSO TRIBUTARIO */}
      <section id={PERCORSO_CONTENZIOSO.slug} className="px-6 py-20 md:px-[60px] md:py-28 scroll-mt-[70px]">
        <Eyebrow>Percorso 1</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-8">
          {PERCORSO_CONTENZIOSO.title}
        </h2>
        <p className="text-[16px] text-[#3a3020] leading-relaxed font-light max-w-2xl mb-10">
          {PERCORSO_CONTENZIOSO.intro}
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1 mb-10">
          {PERCORSO_CONTENZIOSO.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base text-[#3a3020] py-3 border-b border-line"
            >
              <span className="w-4 h-px bg-gold mt-3 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="font-serif italic text-lg text-gold leading-relaxed max-w-2xl">
          {PERCORSO_CONTENZIOSO.chiusura}
        </p>
      </section>

      {/* PERCORSO 2 — SOVRAINDEBITAMENTO */}
      <section id={PERCORSO_SOVRAINDEBITAMENTO.slug} className="bg-parchment px-6 py-20 md:px-[60px] md:py-28 scroll-mt-[70px]">
        <Eyebrow>Percorso 2</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-8">
          {PERCORSO_SOVRAINDEBITAMENTO.title}
        </h2>
        <p className="text-[16px] text-[#3a3020] leading-relaxed font-light max-w-2xl mb-10">
          {PERCORSO_SOVRAINDEBITAMENTO.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PROCEDURE_SOVRAINDEBITAMENTO.map((p) => (
            <div key={p.title} className="bg-white border-t-4 border-gold px-8 py-10">
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

        <p className="text-[14px] text-muted leading-relaxed max-w-2xl mb-10">
          {OCC_NOTA}
        </p>

        <p className="font-serif italic text-lg text-gold leading-relaxed max-w-2xl">
          {PERCORSO_SOVRAINDEBITAMENTO.chiusura}
        </p>
      </section>

      {/* PERCORSO 3 — ANNULLAMENTO CARTELLE */}
      <section id={PERCORSO_CARTELLE.slug} className="bg-cream px-6 py-20 md:px-[60px] md:py-28 scroll-mt-[70px]">
        <Eyebrow>Percorso 3</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-8">
          {PERCORSO_CARTELLE.title}
        </h2>
        <p className="text-[16px] text-[#3a3020] leading-relaxed font-light max-w-2xl mb-10">
          {PERCORSO_CARTELLE.intro}
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mb-10">
          {MOTIVI_ANNULLAMENTO.map((m) => (
            <div key={m.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-medium text-ink mb-2">
                {m.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-gold pl-6 mb-8">
          <h3 className="font-serif text-xl font-medium text-ink mb-2">
            {TERMINI_RICORSO.title}
          </h3>
          <p className="text-[15px] text-[#3a3020] leading-relaxed font-light">
            {TERMINI_RICORSO.text}
          </p>
        </div>

        <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 px-5 py-4 max-w-2xl mb-10">
          <AlertTriangle size={18} className="text-gold shrink-0 mt-0.5" />
          <p className="text-[13px] text-[#7a5c1e] leading-relaxed">
            {ROTTAMAZIONE_NOTA}
          </p>
        </div>

        <p className="font-serif italic text-lg text-[#8a6a1e] leading-relaxed max-w-2xl">
          {PERCORSO_CARTELLE.chiusura}
        </p>
      </section>

      {/* ITER */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
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
      <section className="bg-parchment px-6 py-20 md:px-[60px] md:py-28">
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

      {/* VALUTAZIONE GRATUITA */}
      <section id="valutazione" className="bg-ink px-6 py-20 md:px-[60px] md:py-28 scroll-mt-[70px] border-t-4 border-gold">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-gold text-ink text-[11px] font-semibold tracking-[0.14em] uppercase px-4 py-1.5">
            Gratuita · Senza impegno
          </span>
        </div>
        <Eyebrow>Prima valutazione gratuita</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[48px] font-light text-white leading-tight mb-4 max-w-2xl">
          Inviaci i tuoi documenti,
          <br />
          <em className="text-gold">ti diciamo come stanno le cose.</em>
        </h2>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-2xl mb-14 font-light">
          Compila il modulo con i tuoi dati, allega le cartelle o la tua
          situazione debitoria e scrivici in libertà: ti rispondiamo con una
          prima valutazione e un preventivo, senza impegno.
        </p>
        <div className="bg-white px-6 py-10 md:px-12 md:py-14 shadow-[0_0_0_1px_rgba(196,160,90,0.3)]">
          <ValutazioneForm />
        </div>
      </section>
    </>
  );
}
