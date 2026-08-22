"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/contatti/actions";

const TOPICS = [
  "Consulenza fiscale e tributaria",
  "Consulenza aziendale",
  "Assistenza tributaria",
  "Servizi contabili",
  "Revisione legale dei conti",
  "Bilanci e finanza agevolata",
  "Altro",
];

const fieldClass =
  "font-sans text-sm text-ink font-light px-[18px] py-3.5 border border-[#ddd6c8] bg-parchment outline-none focus:border-gold focus:bg-white transition-colors";
const labelClass = "text-[11px] tracking-[0.12em] uppercase text-muted";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendContactMessage,
    undefined
  );

  if (state?.success) {
    return (
      <div className="bg-[#f0f7f0] border border-gold px-6 py-4 text-sm text-ink max-w-[800px]">
        ✓ Messaggio inviato con successo! Ti risponderemo entro 24 ore.
      </div>
    );
  }

  return (
    <form action={action} className="grid md:grid-cols-2 gap-5 max-w-[800px]">
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="name">
          Nome e Cognome *
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Mario Rossi"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="company">
          Azienda / P.IVA
        </label>
        <input
          id="company"
          name="company"
          placeholder="Rossi Srl · IT01234567890"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="topic">
          Argomento
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue=""
          className={fieldClass}
        >
          <option value="">Seleziona un argomento...</option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <label className={labelClass} htmlFor="message">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Descrivi brevemente la tua esigenza..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {state?.error && (
        <p className="md:col-span-2 text-sm text-red-700">{state.error}</p>
      )}

      <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 mt-2">
        <button
          type="submit"
          disabled={pending}
          className="bg-ink text-white text-[12px] font-medium tracking-[0.1em] uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
        >
          {pending ? "Invio in corso…" : "Invia messaggio"}
        </button>
        <p className="text-[12px] text-[#aaa098] max-w-[400px] leading-relaxed">
          Inviando il modulo accetti il trattamento dei dati personali ai
          sensi del GDPR. I tuoi dati non saranno condivisi con terze parti.
        </p>
      </div>
    </form>
  );
}
