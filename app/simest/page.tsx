import { ClipboardCheck, ExternalLink, FileText, LogIn, MessageCircle, Percent } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";
import { buildMetadata } from "@/lib/seo";
import {
  FINALITA,
  CONDIZIONI,
  CHI_PUO_ACCEDERE,
  SPESE_DIGITALI,
  SPESE_ECOLOGICHE,
  SPESE_RAFFORZAMENTO,
  SPESE_ESCLUSE,
  DOCUMENTI_RICHIESTI,
  ITER_STEPS,
  NORMATIVA_NOTE,
  NORMATIVA_REFS,
  SIMEST_PAGINA,
  AREA_CLIENTI_URL,
  FAQ,
} from "@/lib/content/simest";

export const metadata = buildMetadata({
  title: "Simest — Transizione Digitale o Ecologica",
  description:
    "Finanziamento agevolato Simest (Fondo 394/81) per la transizione digitale ed ecologica delle imprese esportatrici: importi, spese ammissibili, requisiti, documenti e iter della domanda. Accesso all'area clienti per chi ha già una pratica in corso.",
  path: "/simest",
});

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function SimestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Finanziamento Simest</Eyebrow>
          <h1 className="font-serif text-[38px] md:text-[56px] font-light text-white leading-[1.1] tracking-tight">
            Transizione
            <br />
            <em className="text-gold">Digitale o Ecologica</em>
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Assistiamo le imprese esportatrici dalla domanda alla
          rendicontazione: qui trovi una sintesi schematica della misura. Se
          hai già una pratica aperta con noi, accedi alla tua area riservata.
        </p>
      </section>

      {/* ACCESSO AREA CLIENTI / NUOVO CONTATTO */}
      <section className="grid md:grid-cols-2">
        <div className="bg-gold px-6 py-10 md:px-12 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-between gap-6 text-center sm:text-left md:text-center lg:text-left">
          <div>
            <h2 className="font-serif text-2xl font-medium text-ink mb-2">
              Hai già una pratica con noi?
            </h2>
            <p className="text-[15px] text-ink/70 leading-relaxed">
              Segui lo stato della domanda, carica i documenti e scrivi allo
              studio dalla tua area riservata.
            </p>
          </div>
          <a
            href={AREA_CLIENTI_URL}
            className="flex items-center gap-2 bg-ink text-white text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-4 whitespace-nowrap hover:bg-ink/90 shrink-0"
          >
            <LogIn size={15} /> Accedi all&apos;Area Clienti
          </a>
        </div>
        <div className="bg-parchment px-6 py-10 md:px-12 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-between gap-6 text-center sm:text-left md:text-center lg:text-left border-t md:border-t-0 border-line">
          <div>
            <h2 className="font-serif text-2xl font-medium text-ink mb-2">
              Vuoi presentare una domanda Simest?
            </h2>
            <p className="text-[15px] text-ink/70 leading-relaxed">
              Rispondi a poche domande sul tuo progetto: individuiamo subito
              il requisito di accesso più adatto.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-2 shrink-0">
            <a
              href="/simest/questionario"
              className="flex items-center gap-2 bg-gold text-ink text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-4 whitespace-nowrap hover:bg-[#d4b06a]"
            >
              <ClipboardCheck size={15} /> Compila il questionario
            </a>
            <a
              href="/contatti"
              className="flex items-center gap-2 text-[13px] text-ink/60 underline underline-offset-2 hover:text-ink"
            >
              <MessageCircle size={14} /> oppure contattaci direttamente
            </a>
          </div>
        </div>
      </section>

      {/* FINALITA / CONDIZIONI */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>In sintesi</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-8">
          Come funziona la misura
        </h2>
        <p className="text-[15px] text-muted leading-relaxed max-w-3xl mb-14">
          {FINALITA}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {CONDIZIONI.map((c) => (
            <div
              key={c.title}
              className="bg-parchment border-t-4 border-gold px-9 py-10 md:px-12"
            >
              <div className="flex items-center gap-2 text-gold mb-4">
                <Percent size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-[22px] font-medium text-ink mb-3">
                {c.title}
              </h3>
              <p className="text-[14.5px] text-muted leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CHI PUO ACCEDERE */}
      <section className="bg-parchment px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Chi può accedere</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-12">
          Requisiti dell&apos;impresa
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {CHI_PUO_ACCEDERE.map((r) => (
            <div key={r.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl font-medium text-ink mb-3">
                {r.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPESE AMMISSIBILI */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Spese ammissibili</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-14">
          Cosa puoi finanziare
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl font-medium text-ink mb-5">
              Transizione digitale
            </h3>
            <ul className="flex flex-col gap-1">
              {SPESE_DIGITALI.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[14.5px] text-[#3a3020] py-2.5 border-b border-line"
                >
                  <span className="w-3 h-px bg-gold mt-2.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium text-ink mb-5">
              Transizione ecologica
            </h3>
            <ul className="flex flex-col gap-1">
              {SPESE_ECOLOGICHE.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[14.5px] text-[#3a3020] py-2.5 border-b border-line"
                >
                  <span className="w-3 h-px bg-gold mt-2.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium text-ink mb-5">
              Rafforzamento patrimoniale
            </h3>
            <ul className="flex flex-col gap-1">
              {SPESE_RAFFORZAMENTO.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[14.5px] text-[#3a3020] py-2.5 border-b border-line"
                >
                  <span className="w-3 h-px bg-gold mt-2.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="font-serif text-xl font-medium text-ink mt-16 mb-5">
          Spese escluse
        </h3>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1 max-w-4xl">
          {SPESE_ESCLUSE.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 text-base text-[#3a3020] py-3 border-b border-line"
            >
              <span className="w-4 h-px bg-gold mt-3 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* DOCUMENTI RICHIESTI */}
      <section className="bg-cream px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Documentazione</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-12">
          I documenti da preparare
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1 max-w-4xl">
          {DOCUMENTI_RICHIESTI.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 text-base text-[#3a3020] py-3 border-b border-line"
            >
              <FileText size={16} className="shrink-0 text-gold mt-0.5" />
              {d}
            </div>
          ))}
        </div>
        <p className="text-[13px] text-muted mt-8 max-w-2xl leading-relaxed">
          L&apos;elenco esatto dipende dal tipo di impresa e dal requisito di
          accesso scelto: lo definiamo insieme nella fase di verifica dei
          requisiti.
        </p>
      </section>

      {/* ITER */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Come funziona</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-14">
          L&apos;iter della domanda, in breve
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {ITER_STEPS.map((s) => (
            <div key={s.num}>
              <div className="font-serif text-4xl font-light text-gold mb-4">
                {s.num}
              </div>
              <h3 className="font-serif text-lg font-medium text-ink mb-2.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NORMATIVA */}
      <section className="bg-parchment px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Riferimenti normativi</Eyebrow>
        <p className="text-base text-muted leading-relaxed max-w-2xl mb-10">
          {NORMATIVA_NOTE}
        </p>
        <div className="flex flex-col gap-2 max-w-2xl">
          {NORMATIVA_REFS.map((n) => (
            <a
              key={n.title}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 text-[15px] text-[#3a3020] py-4 border-b border-line hover:text-gold"
            >
              {n.title}
              <ExternalLink size={14} className="shrink-0 text-muted" />
            </a>
          ))}
          <a
            href={SIMEST_PAGINA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] text-gold mt-4"
          >
            <ExternalLink size={14} /> Pagina ufficiale Simest
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Domande frequenti</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-12">
          Le domande più comuni
        </h2>
        <div className="flex flex-col max-w-3xl">
          {FAQ.map((f) => (
            <div key={f.question} className="border-b border-line py-6">
              <h3 className="font-serif text-lg font-medium text-ink mb-2.5">
                {f.question}
              </h3>
              <p className="text-[14.5px] text-[#3a3020] leading-relaxed font-light">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        variant="dark"
        title={
          <>
            Vuoi presentare
            <br />
            <em className="text-gold">la domanda con noi?</em>
          </>
        }
        description={
          <>
            Prima consulenza senza impegno.
            <br />
            Ti seguiamo dalla domanda alla rendicontazione.
          </>
        }
        buttonLabel="Compila il questionario"
        buttonHref="/simest/questionario"
      />
    </>
  );
}
