import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  PRINCIPIO_GENERALE,
  CREDITO_CEDIBILE,
  PROCEDURA,
  VISTO_CONFORMITA,
  DOCUMENTI_NECESSARI,
  AVVISI,
  NORMATIVA_REFS,
} from "@/lib/content/cessione-credito-iva";

export const metadata: Metadata = {
  title: "Cessione del Credito IVA — Studio Mascia",
  description: "Pagina interna non pubblica.",
  robots: { index: false, follow: false, nocache: true },
};

export default function CessioneCreditoIvaPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20">
        <Link
          href="/gestione-iva"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-white/50 hover:text-gold mb-8"
        >
          <ArrowLeft size={14} /> Gestione IVA
        </Link>
        <Eyebrow>Appunti interni</Eyebrow>
        <h1 className="font-serif text-[34px] md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
          Cessione del
          <br />
          Credito IVA
        </h1>
        <p className="text-[15px] text-white/55 mt-6 max-w-2xl font-light">
          Sintesi schematica su requisiti, procedura e documenti per la
          cessione a terzi del credito IVA, a uso interno dello studio.
        </p>
        <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 px-5 py-4 mt-8 max-w-2xl">
          <AlertTriangle size={18} className="text-gold shrink-0 mt-0.5" />
          <p className="text-[13px] text-gold leading-relaxed">
            Pagina non pubblica: esclusa da menu, sitemap e indicizzazione.
            Non è un canale sicuro per dati riservati dei clienti.
          </p>
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
          <h2 className="font-serif text-2xl font-medium text-ink mb-4">
            {CREDITO_CEDIBILE.title}
          </h2>
          <p className="text-[15px] text-[#3a3020] leading-relaxed font-light mb-3">
            {CREDITO_CEDIBILE.text}
          </p>
          <p className="text-[13px] text-gold leading-relaxed">
            ⚠ {CREDITO_CEDIBILE.nota}
          </p>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-6">
            Procedura
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {PROCEDURA.map((p, i) => (
              <div key={p.title} className="bg-parchment border-t-4 border-gold px-6 py-6">
                <div className="font-serif text-2xl font-light text-gold mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg font-medium text-ink mb-2">
                  {p.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-4">
            {VISTO_CONFORMITA.title}
          </h2>
          <p className="text-[15px] text-[#3a3020] leading-relaxed font-light mb-3">
            {VISTO_CONFORMITA.text}
          </p>
          <p className="text-[13px] text-gold leading-relaxed">
            ⚠ {VISTO_CONFORMITA.attenzione}
          </p>
        </div>

        <div className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl font-medium text-ink mb-6">
            Documenti necessari
          </h2>
          <ul className="flex flex-col gap-1">
            {DOCUMENTI_NECESSARI.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 text-[14.5px] text-[#3a3020] py-3 border-b border-line"
              >
                <span className="w-4 h-px bg-gold mt-2.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-10">
          <div className="flex flex-col gap-6">
            {AVVISI.map((a) => (
              <div
                key={a.title}
                className="flex items-start gap-3 bg-[#b5573f]/10 border border-[#b5573f]/40 px-5 py-4"
              >
                <AlertTriangle size={18} className="text-[#d98a72] shrink-0 mt-0.5" />
                <div className="text-[13px] text-[#e8a892] leading-relaxed">
                  <strong className="text-white">{a.title}</strong> {a.text}
                </div>
              </div>
            ))}
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
