"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { sendValutazione, type ValutazioneState } from "@/app/contenzioso-tributario/actions";
import { trackMetaEvent } from "@/lib/analytics/meta-pixel";
import { GUIDA_SITUAZIONE_DEBITORIA } from "@/lib/content/contenzioso-tributario";

const fieldClass =
  "font-sans text-[15px] text-ink font-light px-[18px] py-3.5 border border-[#ddd6c8] bg-parchment outline-none focus:border-gold focus:bg-white transition-colors";
const labelClass = "text-[12px] tracking-[0.12em] uppercase text-muted";

export function ValutazioneForm() {
  const [state, action, pending] = useActionState<ValutazioneState, FormData>(
    sendValutazione,
    undefined
  );

  useEffect(() => {
    if (state?.success) {
      trackMetaEvent("Lead");
    }
  }, [state?.success]);

  if (state?.success) {
    return (
      <div className="bg-[#f0f7f0] border border-gold px-6 py-4 text-[15px] text-ink max-w-[760px]">
        ✓ Grazie! Abbiamo ricevuto la tua richiesta e i documenti allegati: ti
        risponderemo con una prima valutazione entro 48 ore.
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-11 max-w-[760px]">
      <div className="flex flex-col gap-5">
        <span className={labelClass}>1 · I tuoi dati</span>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="nome">
              Nome *
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              placeholder="Mario"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="cognome">
              Cognome *
            </label>
            <input
              id="cognome"
              name="cognome"
              type="text"
              required
              placeholder="Rossi"
              className={fieldClass}
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className={labelClass} htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="mario@esempio.it"
              className={fieldClass}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <span className={labelClass}>2 · Documenti</span>

        <div className="bg-parchment border-l-2 border-gold px-6 py-5">
          <h3 className="font-serif text-base font-medium text-ink mb-3">
            {GUIDA_SITUAZIONE_DEBITORIA.title}
          </h3>
          <ol className="flex flex-col gap-1.5 mb-3">
            {GUIDA_SITUAZIONE_DEBITORIA.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-2.5 text-[13px] text-[#3a3020] leading-relaxed">
                <span className="text-gold font-medium shrink-0">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="text-[12px] text-muted leading-relaxed">
            {GUIDA_SITUAZIONE_DEBITORIA.nota}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="documenti">
            Allega cartelle esattoriali, situazione debitoria e altri documenti
          </label>
          <input
            id="documenti"
            name="documenti"
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            className={`${fieldClass} file:mr-4 file:border-0 file:bg-ink file:text-white file:text-[12px] file:uppercase file:tracking-[0.08em] file:px-4 file:py-2 file:cursor-pointer`}
          />
          <p className="text-[12px] text-[#aaa098]">
            Fino a 5 file, PDF o immagini, massimo 10 MB ciascuno.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className={labelClass}>3 · Scrivici liberamente</span>
        <label htmlFor="messaggio" className="sr-only">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          placeholder="Raccontaci la tua situazione: da quanto tempo hai queste cartelle, se hai già fatto rateizzazioni o ricorsi, cosa vorresti capire..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <label className="flex items-start gap-3 text-[13px] text-muted leading-relaxed">
        <input type="checkbox" name="consenso" required className="mt-1 shrink-0" />
        Ho letto la{" "}
        <Link href="/privacy" className="underline hover:text-ink">
          Privacy Policy
        </Link>{" "}
        e acconsento al trattamento dei miei dati e dei documenti allegati per
        la valutazione richiesta.
      </label>

      {state?.error && <p className="text-[15px] text-red-700">{state.error}</p>}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="bg-ink text-white text-[13px] font-medium tracking-[0.1em] uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
        >
          {pending ? "Invio in corso…" : "Invia per una prima valutazione gratuita"}
        </button>
      </div>
    </form>
  );
}
