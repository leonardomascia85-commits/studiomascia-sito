import { ExternalLink, LogIn, MessageCircle, Percent } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";
import { buildMetadata } from "@/lib/seo";
import {
  PROGRAM_TYPES,
  FORME_AMMESSE,
  REQUISITI,
  REGIONI_AMMESSE,
  SPESE_AMMISSIBILI,
  ITER_STEPS,
  NORMATIVA_NOTE,
  NORMATIVA_REFS,
  INVITALIA_PAGINA,
  AREA_CLIENTI_URL,
} from "@/lib/content/resto-al-sud";

export const metadata = buildMetadata({
  title: "Resto al Sud 2.0",
  description:
    "Sintesi del bando Resto al Sud 2.0: voucher e contributo investimento, requisiti, forme ammesse, iter della domanda e riferimenti normativi. Accesso all'area clienti per chi ha già una pratica in corso.",
  path: "/resto-al-sud",
});

export default function RestoAlSudPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Bando Invitalia</Eyebrow>
          <h1 className="font-serif text-[38px] md:text-[56px] font-light text-white leading-[1.1] tracking-tight">
            Resto al
            <br />
            <em className="text-gold">Sud 2.0</em>
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Assistiamo imprenditori e professionisti dalla domanda alla
          rendicontazione: qui trovi una sintesi schematica del bando. Se hai
          già una pratica aperta con noi, accedi alla tua area riservata.
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
              Vuoi presentare un progetto Resto al Sud?
            </h2>
            <a
              href="/resto-al-sud/questionario"
              className="text-[13px] text-gold underline underline-offset-2 hover:text-ink"
            >
              Rispondi a poche domande veloci e ti richiamiamo noi →
            </a>
          </div>
          <a
            href="/contatti"
            className="flex items-center gap-2 bg-ink text-white text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-4 whitespace-nowrap hover:bg-ink/90 shrink-0"
          >
            <MessageCircle size={15} /> Contattaci
          </a>
        </div>
      </section>

      {/* TIPOLOGIE */}
      <section className="px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>In sintesi</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-12">
          Due modalità di sostegno
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROGRAM_TYPES.map((p) => (
            <div
              key={p.title}
              className="bg-parchment border-t-4 border-gold px-9 py-12 md:px-12"
            >
              <div className="flex items-center gap-2 text-gold mb-5">
                <Percent size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-[26px] font-medium text-ink mb-4">
                {p.title}
              </h3>
              <div className="font-serif text-[48px] font-light text-gold leading-none mb-4">
                {p.amount}
              </div>
              <p className="text-[15px] text-muted leading-relaxed">
                {p.note}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-serif text-2xl font-medium text-ink mt-16 mb-6">
          Forme giuridiche ammesse
        </h3>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
          {FORME_AMMESSE.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-base text-[#3a3020] py-3 border-b border-line"
            >
              <span className="w-4 h-px bg-gold mt-3 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* REQUISITI */}
      <section className="bg-parchment px-6 py-20 md:px-[60px] md:py-28">
        <Eyebrow>Chi può accedere</Eyebrow>
        <h2 className="font-serif text-4xl md:text-[42px] font-light text-ink leading-tight mb-12">
          Requisiti soggettivi
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {REQUISITI.map((r) => (
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

        <h3 className="font-serif text-2xl font-medium text-ink mb-6">
          Regioni ammesse
        </h3>
        <div className="flex flex-wrap gap-3 mb-16">
          {REGIONI_AMMESSE.map((r) => (
            <span
              key={r}
              className="text-[13px] tracking-[0.08em] uppercase text-gold border border-gold/40 px-5 py-2"
            >
              {r}
            </span>
          ))}
        </div>

        <h3 className="font-serif text-2xl font-medium text-ink mb-6">
          Spese ammissibili
        </h3>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1 max-w-3xl">
          {SPESE_AMMISSIBILI.map((s) => (
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

      {/* ITER */}
      <section className="bg-cream px-6 py-20 md:px-[60px] md:py-28">
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
      <section className="px-6 py-20 md:px-[60px] md:py-28">
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
            href={INVITALIA_PAGINA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] text-gold mt-4"
          >
            <ExternalLink size={14} /> Pagina ufficiale Invitalia
          </a>
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
        buttonLabel="Contattaci"
        buttonHref="/contatti"
      />
    </>
  );
}
