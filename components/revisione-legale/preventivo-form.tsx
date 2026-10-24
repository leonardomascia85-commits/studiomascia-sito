"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { sendPreventivoRevisione, type PreventivoState } from "@/app/revisione-legale/actions";
import { trackMetaEvent } from "@/lib/analytics/meta-pixel";
import { trackLinkedInConversion } from "@/lib/analytics/linkedin-insight";

const fieldClass =
  "font-sans text-[15px] text-ink font-light px-[18px] py-3.5 border border-[#ddd6c8] bg-parchment outline-none focus:border-gold focus:bg-white transition-colors";
const labelClass = "text-[12px] tracking-[0.12em] uppercase text-muted";

export function PreventivoForm() {
  const [state, action, pending] = useActionState<PreventivoState, FormData>(
    sendPreventivoRevisione,
    undefined
  );
  const searchParams = useSearchParams();

  useEffect(() => {
    if (state?.success) {
      trackMetaEvent("Lead");
      trackLinkedInConversion();
    }
  }, [state?.success]);

  if (state?.success) {
    return (
      <div className="bg-[#f0f7f0] border border-gold px-6 py-4 text-[15px] text-ink max-w-[760px]">
        ✓ Grazie! Abbiamo ricevuto la tua richiesta: ti risponderemo entro 48
        ore con un preventivo.
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-8 max-w-[760px]">
      <input type="hidden" name="utm_source" value={searchParams.get("utm_source") ?? ""} />
      <input type="hidden" name="utm_medium" value={searchParams.get("utm_medium") ?? ""} />
      <input type="hidden" name="utm_campaign" value={searchParams.get("utm_campaign") ?? ""} />

      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="nome">
            Nome *
          </label>
          <input id="nome" name="nome" type="text" required placeholder="Mario" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="cognome">
            Cognome *
          </label>
          <input id="cognome" name="cognome" type="text" required placeholder="Rossi" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input id="email" name="email" type="email" required placeholder="mario@esempio.it" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="azienda">
            Azienda / P.IVA
          </label>
          <input id="azienda" name="azienda" type="text" placeholder="Rossi Srl · IT01234567890" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="ricaviAttivo">
            Ricavi / attivo approssimativi
          </label>
          <input
            id="ricaviAttivo"
            name="ricaviAttivo"
            type="text"
            placeholder="es. 3,5 milioni di euro"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="commercialista">
            Sei un commercialista?
          </label>
          <select id="commercialista" name="commercialista" defaultValue="" className={fieldClass}>
            <option value="">Seleziona...</option>
            <option value="No">No</option>
            <option value="Sì, cerco un revisore indipendente per un cliente">
              Sì, cerco un revisore indipendente per un cliente
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="messaggio">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          placeholder="Raccontaci brevemente la tua situazione: tipo di società, eventuale scadenza dell'incarico attuale, cosa vorresti capire..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <label className="flex items-start gap-3 text-[13px] text-muted leading-relaxed">
        <input type="checkbox" name="consenso" required className="mt-1 shrink-0" />
        Ho letto la{" "}
        <Link href="/privacy" className="underline hover:text-ink">
          Privacy Policy
        </Link>{" "}
        e acconsento al trattamento dei miei dati per la richiesta di
        preventivo.
      </label>

      {state?.error && <p className="text-[15px] text-red-700">{state.error}</p>}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="bg-ink text-white text-[13px] font-medium tracking-[0.1em] uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
        >
          {pending ? "Invio in corso…" : "Richiedi un preventivo"}
        </button>
      </div>
    </form>
  );
}
