import type { Metadata } from "next";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  PRINCIPIO_GENERALE,
  ADEMPIMENTI,
  CASI_PARTICOLARI,
  REGIME_FORFETTARIO,
  FATTURAZIONE_ELETTRONICA,
  DETRAIBILITA_IVA,
  IRAP,
  AVVISO_TESTO_UNICO,
  NORMATIVA_REFS,
} from "@/lib/content/gestione-iva";

export const metadata: Metadata = {
  title: "Gestione IVA — Studio Mascia",
  description: "Pagina interna non pubblica.",
  robots: { index: false, follow: false, nocache: true },
};

export default function GestioneIvaPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20">
        <Eyebrow>Appunti interni</Eyebrow>
        <h1 className="font-serif text-[34px] md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
          Gestione IVA
        </h1>
        <p className="text-[15px] text-white/55 mt-6 max-w-2xl font-light">
          Sintesi schematica del regime IVA per l&apos;attività medica, a uso
          interno dello studio.
        </p>
        <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 px-5 py-4 mt-8 max-w-2xl">
          <AlertTriangle size={18} className="text-gold shrink-0 mt-0.5" />
          <p className="text-[13px] text-gold leading-relaxed">
            Pagina non pubblica: esclusa da menu, sitemap e indicizzazione.
            Non è un canale sicuro per dati riservati dei clienti — verificare
            soglie e scadenze prima di comunicarle, perché possono cambiare
            con la Legge di Bilancio.
          </p>
        </div>
        <div className="flex items-start gap-3 bg-[#b5573f]/10 border border-[#b5573f]/40 px-5 py-4 mt-4 max-w-2xl">
          <AlertTriangle size={18} className="text-[#d98a72] shrink-0 mt-0.5" />
          <div className="text-[13px] text-[#e8a892] leading-relaxed">
            <strong className="text-white">{AVVISO_TESTO_UNICO.title}</strong>{" "}
            {AVVISO_TESTO_UNICO.text}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-[60px] md:py-20 max-w-3xl flex flex-col gap-10">
        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-4">
            {PRINCIPIO_GENERALE.title}
          </h2>
          <p className="text-[15px] text-[#3a3020] leading-relaxed font-light">
            {PRINCIPIO_GENERALE.text}
          </p>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-6">
            Adempimenti pratici
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ADEMPIMENTI.map((a) => (
              <div key={a.title} className="bg-parchment border-l-2 border-gold px-6 py-5">
                <h3 className="font-serif text-lg font-medium text-ink mb-2">
                  {a.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-6">
            Casi particolari (non esenti)
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {CASI_PARTICOLARI.map((c) => (
              <div key={c.title} className="border-l-2 border-[#b5573f] pl-6">
                <h3 className="font-serif text-lg font-medium text-ink mb-2">
                  {c.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-4">
            Regime forfettario
          </h2>
          <p className="text-[15px] text-[#3a3020] leading-relaxed font-light mb-6">
            {REGIME_FORFETTARIO.intro}
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-[12px] tracking-[0.12em] uppercase text-gold mb-3">
                Requisiti
              </h3>
              <ul className="flex flex-col gap-2">
                {REGIME_FORFETTARIO.requisiti.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[14px] text-[#3a3020] leading-snug">
                    <span className="w-3 h-px bg-gold mt-2.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[12px] tracking-[0.12em] uppercase text-gold mb-3">
                Vantaggi
              </h3>
              <ul className="flex flex-col gap-2">
                {REGIME_FORFETTARIO.vantaggi.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-[14px] text-[#3a3020] leading-snug">
                    <span className="w-3 h-px bg-gold mt-2.5 shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-4">
            Fatturazione elettronica e Sistema Tessera Sanitaria
          </h2>
          <p className="text-[15px] text-[#3a3020] leading-relaxed font-light mb-3">
            {FATTURAZIONE_ELETTRONICA.text}
          </p>
          <p className="text-[13px] text-gold leading-relaxed">
            ⚠ {FATTURAZIONE_ELETTRONICA.nota}
          </p>
        </div>

        <div className="border-t border-line pt-10 grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              {DETRAIBILITA_IVA.title}
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              {DETRAIBILITA_IVA.text}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              {IRAP.title}
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">{IRAP.text}</p>
          </div>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-6">
            Riferimenti normativi
          </h2>
          <div className="flex flex-col gap-2">
            {NORMATIVA_REFS.map((n) => (
              <a
                key={n.title}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 text-[14px] text-[#3a3020] py-3 border-b border-line hover:text-gold"
              >
                {n.title}
                <ExternalLink size={14} className="shrink-0 text-muted" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
