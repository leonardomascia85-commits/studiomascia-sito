"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import {
  sendQuestionario,
  type QuestionarioState,
} from "@/app/resto-al-sud/questionario/actions";
import { Eyebrow } from "@/components/ui/eyebrow";
import { trackMetaEvent } from "@/lib/analytics/meta-pixel";
import {
  SPESE_PREVISTE_OPTIONS,
  MAGGIORAZIONE_OPTIONS,
  SEDE_OPERATIVA_OPTIONS,
  SPESE_SOSTENUTE_OPTIONS,
  CONTO_DEDICATO_OPTIONS,
  EROGAZIONE_OPTIONS,
  TEMPISTICHE_OPTIONS,
} from "@/lib/content/questionario-resto-al-sud";

const fieldClass =
  "font-sans text-[15px] text-ink font-light px-[18px] py-3.5 border border-[#ddd6c8] bg-parchment outline-none focus:border-gold focus:bg-white transition-colors";
const labelClass = "text-[12px] tracking-[0.12em] uppercase text-muted";

function RadioGroup({
  name,
  options,
  cols = 2,
}: {
  name: string;
  options: readonly string[];
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-2.5 ${
        cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {options.map((opt) => (
        <label key={opt} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt}
            required
            className="peer sr-only"
          />
          <span className="block text-center text-[14px] leading-snug px-4 py-3.5 border border-[#ddd6c8] bg-parchment text-ink font-light transition-colors peer-checked:bg-ink peer-checked:text-white peer-checked:border-ink peer-focus-visible:ring-2 peer-focus-visible:ring-gold">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

export function QuestionarioForm() {
  const [state, action, pending] = useActionState<QuestionarioState, FormData>(
    sendQuestionario,
    undefined
  );

  useEffect(() => {
    if (state?.success) {
      trackMetaEvent("Lead");
    }
  }, [state?.success]);

  if (state?.success) {
    return (
      <div className="bg-[#f0f7f0] border border-gold px-6 py-4 text-[15px] text-ink max-w-[720px]">
        ✓ Grazie! Abbiamo ricevuto le tue risposte, ti contatteremo al più
        presto per valutare insieme la tua idea.
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-11 max-w-[720px]">
      <div>
        <Eyebrow>Il voucher</Eyebrow>
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Che tipo di spese pensi di sostenere con il voucher? *
        </span>
        <RadioGroup name="spesePreviste" options={SPESE_PREVISTE_OPTIONS} cols={2} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Punti alla maggiorazione a 50.000 € (almeno il 20% di spese
          innovative: tecnologico-digitali, sostenibilità ambientale,
          risparmio energetico)? *
        </span>
        <RadioGroup name="maggiorazione" options={MAGGIORAZIONE_OPTIONS} cols={2} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Hai una sede operativa disponibile per almeno 4 anni? *
        </span>
        <RadioGroup name="sedeOperativa" options={SEDE_OPERATIVA_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Hai già sostenuto spese o firmato fatture per questo progetto?
          Valgono solo fatture successive alla presentazione della domanda. *
        </span>
        <RadioGroup name="speseSostenute" options={SPESE_SOSTENUTE_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Sai che tutti i pagamenti dovranno passare da un conto corrente
          dedicato? *
        </span>
        <RadioGroup name="contoDedicato" options={CONTO_DEDICATO_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Come preferiresti ricevere il rimborso delle spese? *
        </span>
        <RadioGroup name="erogazione" options={EROGAZIONE_OPTIONS} cols={2} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Sai che le spese vanno completate entro 16 mesi (prorogabili a 20) e
          il saldo richiesto entro il 30 giugno 2028? *
        </span>
        <RadioGroup name="tempistiche" options={TEMPISTICHE_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-5 pt-4 border-t border-line">
        <span className={labelClass}>
          Lasciaci i tuoi contatti, ti richiamiamo noi
        </span>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="name">
              Nome e Cognome *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Mario Rossi"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="phone">
              Telefono *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="333 1234567"
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

      {state?.error && <p className="text-[15px] text-red-700">{state.error}</p>}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={pending}
          className="bg-ink text-white text-[13px] font-medium tracking-[0.1em] uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
        >
          {pending ? "Invio in corso…" : "Invia il questionario"}
        </button>
        <p className="text-[13px] text-[#aaa098] max-w-[400px] leading-relaxed">
          Inviando il modulo accetti il trattamento dei dati personali ai
          sensi del GDPR. Consulta la{" "}
          <Link href="/privacy" className="underline hover:text-muted">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
